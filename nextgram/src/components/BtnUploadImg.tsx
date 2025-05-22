"use client";

import React from "react";
import Image from "next/image";

interface BtnUploadImgProps {
  nameInput: string;
}

const BtnUploadImg = ({ nameInput }: BtnUploadImgProps) => {
  const [img, setImg] = React.useState<File | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImg(file);

    // 🔥 Limpa o input para poder selecionar o mesmo arquivo novamente depois
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-black">Selecione uma imagem</label>

      <input
        ref={inputRef}
        id={nameInput}
        name={nameInput}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />

      <div className="w-full flex gap-2 items-center">
        <label
          htmlFor={nameInput}
          className="w-full h-fit inline-block px-4 py-2 bg-green-600 text-white text-center rounded cursor-pointer hover:bg-green-700"
        >
          Escolher imagem
        </label>

        {img && (
          <div className="relative group">
            <Image
              className="rounded cursor-pointer"
              src={URL.createObjectURL(img)}
              alt="Pré-visualização da imagem"
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
              onLoad={() => URL.revokeObjectURL(URL.createObjectURL(img))}
            />
            <button
              type="button"
              onClick={() => setImg(null)}
              className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 py-0.5 rounded hover:bg-red-700"
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BtnUploadImg;
