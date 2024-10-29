import axios from 'axios';
import { Produto, Categoria } from './interface'; 

const API_URL_PRODUTOS = 'http://localhost:3000/produtos';
const API_URL_CATEGORIAS = 'http://localhost:3000/categorias';

export const getAllProducts = async (): Promise<Produto[]> => {
  const response = await axios.get<Produto[]>(API_URL_PRODUTOS);
  return response.data;
};

export const getProductById = async (id: number): Promise<Produto> => {
  const response = await axios.get<Produto>(`${API_URL_PRODUTOS}/${id}`);
  return response.data;
};


export const createProduct = async (product: Produto): Promise<Produto> => {
  const response = await axios.post<Produto>(API_URL_PRODUTOS, product);
  return response.data;
};

export const updateProduct = async (id: number, product: Produto): Promise<Produto> => {
  const response = await axios.put<Produto>(`${API_URL_PRODUTOS}/${id}`, product);
  return response.data;
};

export const patchProduct = async (id: number, productUpdates: Partial<Produto>): Promise<Produto> => {
  const response = await axios.patch<Produto>(`${API_URL_PRODUTOS}/${id}`, productUpdates);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<{ message: string }> => {
  await axios.delete(`${API_URL_PRODUTOS}/${id}`);
  return { message: 'Produto deletado com sucesso!' };
};


export const getAllCategories = async (): Promise<Categoria[]> => {
  const response = await axios.get<Categoria[]>(API_URL_CATEGORIAS);
  return response.data;
};

export const getCategoryById = async (id: number): Promise<Categoria> => {
  const response = await axios.get<Categoria>(`${API_URL_CATEGORIAS}/${id}`);
  return response.data;
};
