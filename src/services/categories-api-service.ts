import { CreateCategory, Category } from 'types';
import ApiService from './api-service';

const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await ApiService.get<Category[]>('/categories');
  return data;
};

const deleteCategory = async (id: string) => {
  const { data } = await ApiService.delete<Category>(`/categories/${id}`);
  return data;
};

const createNewCategory = async (category: CreateCategory) => {
  const { data } = await ApiService.post<Category>('/categories/', category);
  return data;
};

const changeCategory = async (category: Category) => {
  const { data } = await ApiService.patch<Category>(`categories/${category.id}`, category);
  return data;
};

const CategoriesService = {
  fetchCategories,
  deleteCategory,
  createNewCategory,
  changeCategory,
};

export default CategoriesService;
