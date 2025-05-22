"use client";

import React from "react";
import Image from "next/image";

interface BtnUploadImgProps {
  nameInput: string;
}

const BtnUploadImg = ({ nameInput }: BtnUploadImgProps) => {
  const [img, setImg] = React.useState<File | null>(null);

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-black">Selecione uma imagem</label>

      {/* Input oculto */}
      <input
        id={nameInput}
        name={nameInput}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          console.log("✌️e --->", e.target.files?.[0]);
          setImg(e.target.files?.[0] || null);
        }}
      />

      {/* Label como botão */}
      <div className="w-full flex gap-2">
        <label
          htmlFor={nameInput}
          className="w-full h-fit inline-block px-4 py-2 bg-green-600 text-white text-center rounded cursor-pointer hover:bg-green-700"
        >
          Escolher imagem
        </label>

        {img && (
          <Image
            className="rounded cursor-pointer"
            onClick={() => {
              setImg(null);
            }}
            src={URL.createObjectURL(img)}
            alt="Pré-visualização da imagem"
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
            onLoad={() => URL.revokeObjectURL(URL.createObjectURL(img))}
          />
        )}
      </div>
    </div>
  );
};

export default BtnUploadImg;
