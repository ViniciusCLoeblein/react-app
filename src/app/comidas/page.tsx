"use client";

import { memo, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navbar from "@/components/navbar";
import Produtos from "./components/produtos";
import Categorias from "./components/categorias";

const Comidas = () => {
  const [key, setKey] = useState<string>('produtos');
  
  return (
    <>
      <Navbar />
      <div className="pt-4 px-3">
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k ?? '')}
          className="mb-3"
        >
          <Tab
            eventKey="categoria"
            title={<span className={`text-emerald-600 ${key === 'categoria' ? 'font-bold' : 'text-gray-700'}`}>Categorias</span>}
          >
            <Categorias />
          </Tab>
          <Tab
            eventKey="produtos"
            title={<span className={`text-emerald-600 ${key === 'produtos' ? 'font-bold' : 'text-gray-700'}`}>Produtos</span>}
          >
            <Produtos />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default memo(Comidas);
