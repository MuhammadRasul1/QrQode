import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const branchesServices = {
  createBranch: (data) => request.post("/branch", data),
  getBranches: (params) => request.get("/branch", {params}).then(res => res?.data),
  getBranchById: (branchId) => request.get(`/branch/${branchId}`),
  updateBranchById: (branchId) => request.put(`branch/${branchId}`),
  deleteBranchById: (branchId) => request.delete(`/branch/${branchId}`).then(res => res?.data),
};
export const useCreateBranch = () => {
  return useMutation({ mutationFn: (data) => branchesServices.createBranch(data)})
}

export const useGetBranches = (params) => {
  return  useQuery({queryKey: ['branches', params], queryFn: () => branchesServices.getBranches(params)});
};

export const useGetBranchById = ({branchId}) => {
  return useQuery({queryKey: ["GET/BRANCH/ID", branchId], queryFn: () => branchesServices.getBranchById(branchId), enabled: !!branchId})
}

export const useUpdateBranchById = (mutationSettings) => {
  return useMutation({
     mutationFn: (data) => request.put(`branch/${data.id}`, data),
     ...mutationSettings
    })
}

export const useDeleteBranchById = () => {
  return useMutation({mutationFn: (data) => request.delete(`branch/${data.id}`, data)})
}
