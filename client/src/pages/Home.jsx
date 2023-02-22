import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Card, FormField, Loader } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-violet-400 text-xl uppercase">
      {title}
    </h2>
  );
};

function Home() {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fecthPosts = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://neumorphism-dall-e.onrender.com/api/v1/posts",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const result = await response.json();

          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert("somethings failed");
      } finally {
        setLoading(false);
      }
    };
    fecthPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-gray-600 text-[32px]">
          Imagenes Compartidas por la Comunidad
        </h1>
        <p className="mt-2 text-gray-500 text-[14px] max-w-[800px]">
          Aqui puedes buscar, compartir y descargar imagenes creaadas por la inteligencia artificial Dall-E, haz click en el boton {`"${"Crear"}"`} para generar tus propias imagenes.
        </p>
        <p className="mt-2 text-gray-500 text-[14px] max-w-[800px]">
          Ten en cuenta que la generacion de y busqueda de imagenes debe hacerse estrictamente en Ingles.
        </p>
      </div>
      <div className="mt-16">
        <FormField
          LabelName="Buscar publicaciones"
          type="text"
          name="text"
          placeholder="Ex: fish, dog, a horse win the rain"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-gray-500 text-xl mb-3">
                Buscando resultados para{" "}
                <span className="text-violet-400 font-bold">{`"${searchText}"`}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No se encontraron resultados"
                />
              ) : (
                <RenderCards data={allPosts} title="No se encontraron publicaciones" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

RenderCards.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default Home;
