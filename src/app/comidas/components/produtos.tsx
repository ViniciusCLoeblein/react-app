import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllProducts, createProduct, updateProduct, deleteProduct, getAllCategories } from "@/service/comida"; 

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  categoria_id: number;
}

const Produtos = () => {
  const queryClient = useQueryClient();
  const { data: produtos, isLoading, isError } = useQuery('produtos', getAllProducts);
  const { data: categorias } = useQuery('categorias', getAllCategories);

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Produto>>({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setCurrentProduct({});
  };

  // Mutation para criar produto
  const { mutate: addProduct } = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('produtos');
      handleClose();
    }
  });

  // Mutation para atualizar produto
  const { mutate: editProduct } = useMutation((product: Produto) => updateProduct(product.id, product), {
    onSuccess: () => {
      queryClient.invalidateQueries('produtos');
      handleClose();
    }
  });

  // Mutation para deletar produto
  const { mutate: removeProduct } = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries('produtos')
  });

  const handleSubmit = () => {
    if (isEditing && currentProduct.id) {
      editProduct(currentProduct as Produto);
    } else {
      addProduct(currentProduct as Produto);
    }
  };

  const handleEdit = (product: Produto) => {
    setCurrentProduct(product);
    setIsEditing(true);
    handleOpen();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Adicionar Produto
      </Button>

      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-lg text-gray-500 animate-pulse">Carregando informações...</p>
        </div>
      )}
      {isError && (
        <p className="text-lg text-red-500">Erro ao carregar as informações.</p>
      )}
      {produtos && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produtos.map((produto) => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.id}</TableCell>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.preco}</TableCell>
                  <TableCell>{produto.descricao}</TableCell>
                  <TableCell>{produto.categoria_id}</TableCell>
                  <TableCell>
                    <Button color="primary" onClick={() => handleEdit(produto)}>Editar</Button>
                    <Button color="secondary" onClick={() => removeProduct(produto.id)}>Excluir</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Modal para adicionar/editar produto */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Editar Produto" : "Adicionar Produto"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            type="text"
            fullWidth
            value={currentProduct.nome ?? ""}
            onChange={(e) => setCurrentProduct({ ...currentProduct, nome: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Preço"
            type="number"
            fullWidth
            value={currentProduct.preco ?? ""}
            onChange={(e) => setCurrentProduct({ ...currentProduct, preco: Number(e.target.value) })}
          />
          <TextField
            margin="dense"
            label="Descrição"
            type="text"
            fullWidth
            value={currentProduct.descricao ?? ""}
            onChange={(e) => setCurrentProduct({ ...currentProduct, descricao: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="categoria-label">Categoria</InputLabel>
            <Select
              labelId="categoria-label"
              value={currentProduct.categoria_id ?? ""}
              onChange={(e) => setCurrentProduct({ ...currentProduct, categoria_id: Number(e.target.value) })}
            >
              {categorias?.map((categoria) => (
                <MenuItem key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancelar</Button>
          <Button onClick={handleSubmit} color="primary">
            {isEditing ? "Salvar Alterações" : "Adicionar"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Produtos;
