import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const categoriesServices = {
  searchCategory: (params) => request.get("/category", { params }).then((res) => res?.data),
  createCategory: (data) => request.post("/category", data).then(res => res?.data),
  getCategories: () => request.get('/category').then((res) => res?.data),
  getCategoryById: (categoryId) => request.get(`/category/${categoryId}`).then(res => res?.data),
  updateCategoryById: (categoryId) => request.put(`/category/${categoryId}`).then(res => res?.data),
  deleteCategoryById: (categoryId) => request.delete(`/category/${categoryId}`).then(res => res?.data),
};

export const useGetSearchCategory = (params) => {
  return useQuery({ queryKey: ['GET/CATEGORY/SEARCH', params], queryFn: () => categoriesServices.searchCategory(params)});
};

export const useCreateCategory = () => {
  return useMutation({mutationFn: (data) => categoriesServices.createCategory(data)})
}

export const useGetCategories = (params) => {
  return useQuery({ queryKey: ['GET/CATEGORIES', params], queryFn: () => categoriesServices.getCategories(params)});
};

export const useGetCategoryById = ({categoryId}) => {
  return useQuery({queryKey: ["GET/CATEGORY/ID", categoryId], queryFn: () => categoriesServices.getCategoryById(categoryId), enabled: !!categoryId})
}

export const useUpdateCategoryById = (mutationSettings) => {
  return useMutation({
     mutationFn: (data) => request.put(`category/${data.id}`, data),
     ...mutationSettings
    })
}

export const useDeleteCategoryById = () => {
  return useMutation({mutationFn: (data) => request.delete(`category/${data.id}`, data)})
}
