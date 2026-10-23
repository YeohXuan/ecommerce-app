import { use, useState } from "react";
import { assets } from "../admin_assets/assets";
import { backendUrl } from "../App";
import axios from "axios";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("size", size);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } },
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-3">
          <label htmlFor="image1">
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
              className="w-20 cursor-pointer"
            />
            <input
              type="file"
              id="image1"
              hidden
              onChange={(e) => setImage1(e.target.files[0])}
            />
          </label>
          <label htmlFor="image2">
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
              className="w-20 cursor-pointer"
            />
            <input
              type="file"
              id="image2"
              hidden
              onChange={(e) => setImage2(e.target.files[0])}
            />
          </label>
          <label htmlFor="image3">
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
              className="w-20 cursor-pointer"
            />
            <input
              type="file"
              id="image3"
              hidden
              onChange={(e) => setImage3(e.target.files[0])}
            />
          </label>
          <label htmlFor="image4">
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
              className="w-20 cursor-pointer"
            />
            <input
              type="file"
              id="image4"
              hidden
              onChange={(e) => setImage4(e.target.files[0])}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="product-name">Product name</label>
        <input
          type="text"
          id="product-name"
          placeholder="Type here"
          className="border border-gray-300 w-full max-w-125 rounded px-3 py-2 outline-[#c586a5]"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="product-description">Product description</label>
        <textarea
          id="product-description"
          placeholder="Write content here"
          className="border border-gray-300 w-full max-w-125 rounded px-3 py-2 outline-[#c586a5]"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
      </div>
      <div className="flex flex-row gap-5 sm:flex-row w-full sm:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="product-category">Product category</label>
          <select
            name="product-category"
            id="product-category"
            className="border border-gray-400 rounded p-2 outline-[#c586a5] cursor-pointer"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="sub-category">Sub category</label>
          <select
            name="product-category"
            id="product-category"
            className="border border-gray-400 rounded p-2 outline-[#c586a5] cursor-pointer"
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="topwear">Topwear</option>
            <option value="bottomwear">Bottomwear</option>
            <option value="winterwear">Winterwear</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="product-price">Product price</label>
          <input
            type="number"
            placeholder="25"
            className="border border-gray-400 rounded p-2 outline-[#c586a5] sm:w-30"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="product-size">Product sizes</label>
        <div className="flex flex-row gap-3">
          <p
            className={`px-3 py-1 ${size.includes("S") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer`}
            onClick={() =>
              setSize((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"],
              )
            }
          >
            S
          </p>
          <p
            className={`px-3 py-1 ${size.includes("M") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer`}
            onClick={() =>
              setSize((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"],
              )
            }
          >
            M
          </p>
          <p
            className={`px-3 py-1 ${size.includes("L") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer`}
            onClick={() =>
              setSize((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"],
              )
            }
          >
            L
          </p>
          <p
            className={`px-3 py-1 ${size.includes("XL") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer`}
            onClick={() =>
              setSize((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"],
              )
            }
          >
            XL
          </p>
          <p
            className={`px-3 py-1 ${size.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} cursor-pointer`}
            onClick={() =>
              setSize((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"],
              )
            }
          >
            XXL
          </p>
        </div>
      </div>

      <div className="flex gap-2 my-3">
        <input
          type="checkbox"
          id="bestseller"
          name="bestseller"
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestSeller}
        />
        <label htmlFor="bestseller" className="select-none">
          Add to bestseller
        </label>
      </div>

      <button
        type="submit"
        className="bg-black text-white w-25 py-2 rounded cursor-pointer"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
