import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const discountsServices = {
  createDiscount: (data) => request.post("/discount", data),
  getDiscounts: (params) => request.get("/discount", {params}).then(res => res?.data),
  getDiscountById: (discountId) => request.get(`/discount/${discountId}`),
  updateDiscountById: (discountId) => request.put(`discount/${discountId}`),
  deleteDiscountById: (discountId) => request.delete(`/discount/${discountId}`).then(res => res?.data),
};
export const useCreateDiscount = () => {
  return useMutation({ mutationFn: (data) => discountsServices.createDiscount(data)})
}

export const useGetDiscounts = (params) => {
  return  useQuery({queryKey: ['discounts', params], queryFn: () => discountsServices.getDiscounts(params)});
};

export const useGetDiscountById = ({discountId}) => {
  return useQuery({queryKey: ["GET/DISCOUNT/ID", discountId], queryFn: () => discountsServices.getDiscountById(discountId), enabled: !!discountId})
}

export const useUpdateDiscountById = (mutationSettings) => {
  return useMutation({
     mutationFn: (data) => request.put(`discount/${data.id}`, data),
     ...mutationSettings
    })
}

export const useDeleteDiscountById = () => {
  return useMutation({mutationFn: (data) => request.delete(`discount/${data.id}`, data)})
}
