"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "@/public/productimage1.jpeg";
import image2 from "@/public/productimage2.jpeg";
import image3 from "@/public/productimage3.jpeg";
import image4 from "@/public/productimage4.jpeg";
import AddToCartBtn from "./AddToCartBtn";
import AddtoWishListBtn from "./AddtoWishListBtn";
import { ProductType } from "@/types/productTypes";

const Products = ({
  name,
  image,
  unit_amount,
  id,
  description,
  quantity,
}: ProductType) => {
  const [currentImage, setCurrentImage] = useState(0);
  const productData = { name, image, unit_amount, id, description, quantity };
  const productImages = [image1, image2, image3, image4];
  const imageVariants = {
    exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.4 } },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };
  return (
    <section className="py-20">
      <div className="w-[89%] m-auto max-w-[1400px] grid md:grid-cols-2 grid-cols-1 items-center gap-5">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-4">
            {productImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={100}
                onClick={() => setCurrentImage(index)}
                height={100}
                alt="moonlamp"
                className="rounded-md cursor-pointer"
              />
            ))}
          </div>
          <div className="flex items-center">
            <motion.div
              initial="exit"
              animate="enter"
              exit="exit"
              variants={imageVariants}
              key={currentImage}
            >
              <Image
                src={productImages[currentImage]}
                width={480}
                height={480}
                alt="main-image"
                className="rounded-md"
              />
            </motion.div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-5">Wireless Moonlamp</h2>
          <div className="flex gap-1 text-yellow-400 justify-center items-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span>(5.0)</span>
          </div>
          <div className="mb-5">
            <span className="text-2xl mr-3 font-bold">$29.99</span>
            <span className="text-gray-400 line-through">$49.99</span>
          </div>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            quos, dolor eligendi et amet culpa veritatis! Perspiciatis fugiat
            fuga in ipsam. Natus voluptatibus quae laudantium
          </p>
          <div className="flex justify-center items-center gap-5">
            <AddToCartBtn {...productData} />
            <AddtoWishListBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
