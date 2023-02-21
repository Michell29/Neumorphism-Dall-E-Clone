import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);

        const response = await axios.post(
          "https://neumorphism-dall-e.onrender.com/api/v1/dalle",
          { prompt: form.prompt }
        );

        console.log(response);

        setForm({
          ...form,
          photo: `data:image/jpeg;base64,${response.data.photo}`,
        });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        await axios.post("https://neumorphism-dall-e.onrender.com/api/v1/posts", form);
        navigate("/");
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and generate an image");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-gray-900 text-[32px]">
          Create a beautiful images
        </h1>
        <p className="mt-2 text-gray-400 text-[14px] max-w-[500px]">
          Create imaginative and visually stunning images trough DALL-E AI and
          share them with the community
        </p>
      </div>
      <form className="mt-16 max-w-3x1" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            LabelName="Your name"
            type="text"
            name="name"
            placeholder="Jhon Doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 shadow-neumorphismlightinset text-sm rounded-lg w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img src={form.photo} />
            ) : (
              <img
                src={preview}
                alt={preview}
                className="w-9/12 h-9/12 object-contain opacity-40 rounded-lg"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-gray-200 bg-purple-400 shadow-neumorphismlight font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-gray-400 text-[14px]">
            Once you hace created the image you want, you can share it with
            others in the community
          </p>
          <button
            type="submit"
            className="mt-3 text-gray-200 bg-blue-400 shadow-neumorphismlight font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreatePost;
