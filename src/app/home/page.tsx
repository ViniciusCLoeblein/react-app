"use client";

import Navbar from "@/components/navbar";
import { memo } from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center" style={{ height: 'calc(100vh - 56px)' }}>
        <div className="w-10/12 flex-col pt-28">
          <h1 className="text-4xl font-semibold text-emerald-700">Bem-vindo(a) à Nossa Aplicação!</h1>
          <p className="text-base text-black mt-4 mb-2">Estamos felizes em tê-lo(a) aqui. Explore e aproveite!</p>
          <p className="text-base text-black">Divirta-se navegando pelas nossas funcionalidades!</p>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
