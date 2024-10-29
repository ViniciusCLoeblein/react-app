import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { memo } from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "@/service/comida";

const Produtos = () => {
  const { data, isLoading, isSuccess, isError } = useQuery('produtos', getAllProducts);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-lg text-gray-500 animate-pulse">Carregando informações...</p>
        </div>
      )}
      {isError && (
        <p className="text-lg text-red-500">Erro ao carregar as informações.</p>
      )}
      {isSuccess && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Descrição</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((produto) => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.id}</TableCell>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.preco}</TableCell>
                  <TableCell>{produto.descricao}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

    </>
  );
}

export default memo(Produtos);