import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { useQuery } from "react-query";
import { getAllCategories } from "@/service/comida";

const Categorias = () => {
  const { data, isLoading, isError } = useQuery('categorias', getAllCategories);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-lg text-gray-500 animate-pulse">Carregando categorias...</p>
        </div>
      )}
      {isError && (
        <p className="text-lg text-red-500">Erro ao carregar as categorias.</p>
      )}
      {data && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((categoria) => (
                <TableRow key={categoria.id}>
                  <TableCell>{categoria.id}</TableCell>
                  <TableCell>{categoria.nome}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default Categorias;
