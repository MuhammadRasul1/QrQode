import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const usersServices = {
  searchStudents: (params) => request.get('/students', { params }).then((res) => res?.data),
  searchMentors: (params) => request.get('/mentors', { params }).then((res) => res?.data),
  createUser: (data) => request.post("/user", data),
  getStudents: (params) => request.get("/students", {params}).then(res => res?.data),
  getMentors: (params) => request.get("/mentors", {params}).then(res => res?.data),
  getUserById: (userId) => request.get(`/user/${userId}`),
  updateUserById: (userId) => request.put(`user/${userId}`),
  deleteUserById: (userId) => request.delete(`/user/${userId}`).then(res => res?.data),
};

export const useGetSearchStudents = (params) => {
  return useQuery({ queryKey: ['GET/STUDENTS/SEARCH', params], queryFn: () => usersServices.searchStudents(params) });
};

export const useGetSearchMentors = (params) => {
  return useQuery({ queryKey: ['GET/MENTORS/SEARCH', params], queryFn: () => usersServices.searchMentors(params) });
};

export const useCreateUser = () => {
  return useMutation({ mutationFn: (data) => usersServices.createUser(data)})
}

export const useGetStudents = (params) => {
  return  useQuery({queryKey: ['students', params], queryFn: () => usersServices.getStudents(params)});
};

export const useGetMentors = (params) => {
  return  useQuery({queryKey: ['mentors'], queryFn: () => usersServices.getMentors(params)});
};

export const useGetUserById = ({userId}) => {
  return useQuery({queryKey: ["GET/USER/ID", userId], queryFn: () => usersServices.getUserById(userId), enabled: !!userId})
}

export const useUpdateUserById = (mutationSettings) => {
  return useMutation({
     mutationFn: (data) => request.put(`user/${data.id}`, data),
     ...mutationSettings
    })
}

export const useDeleteUserById = () => {
  return useMutation({mutationFn: (data) => request.delete(`user/${data.id}`, data)})
}
