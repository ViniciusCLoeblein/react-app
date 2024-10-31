"use client";

import Navbar from "@/components/navbar";
import { getDog } from "@/service/doguinho";
import Image from "next/image";
import { memo } from "react";
import { useQuery } from "react-query";

const Doguinho = () => {
  const { data: dog, isLoading, isError } = useQuery("getDog", getDog);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-lg text-gray-500 animate-pulse">Carregando imagem...</p>
        </div>
      );
    }

    if (isError) {
      return <p className="text-lg text-red-500">Erro ao carregar imagem.</p>;
    }

    if (dog) {
      return (
        <Image
          src={dog}
          alt="Cachorrinho adorável"
          height="300"
          width="300"
          className="rounded-lg shadow-lg"
        />)
    }

  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-28">
        <div className="w-10/12 flex flex-col items-center">
          <h1 className="text-4xl font-semibold text-emerald-700">Conheça Nosso Doguinho!</h1>
          <p className="text-base text-black mt-2 mb-4">Aqui está uma imagem adorável do nosso amigo peludo.</p>
        </div>
      </div>
      <div className="flex justify-center mt-6 items-center content-center">
        {renderContent()}
      </div>
    </>
  );
};

export default memo(Doguinho);
