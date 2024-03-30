import { useMutation, useQuery } from '@tanstack/react-query';
import request from 'services/httpRequest';

const coursesServices = {
  searchCourse: (params) => request.get('/course', { params }).then((res) => res?.data),
  createCourse: (data) => request.post('/course', data).then((res) => res?.data),
  getCourses: () => request.get('/course').then((res) => res?.data),
  getCourseById: (courseId) => request.get(`/course/${courseId}`).then((res) => res?.data),
  updateCourseById: (courseId) => request.put(`/course/${courseId}`).then((res) => res?.data),
  deleteCourseById: (courseId) => request.delete(`/course/${courseId}`).then((res) => res?.data),
  uploadPhoto: (data) => request.post('/upload', data).then((res) => res?.data),
  downloadGetCourses: () => request.get('/excel/courses').then((res) => res?.data),
};

export const useGetSearchCourse = (params) => {
  return useQuery({ queryKey: ['GET/COURSE/SEARCH', params], queryFn: () => coursesServices.searchCourse(params) });
};

export const useCreateCourse = () => {
  return useMutation({ mutationFn: (data) => coursesServices.createCourse(data) });
};

export const useGetCourses = (params) => {
  return useQuery({ queryKey: ['GET/COURSES', params], queryFn: () => coursesServices.getCourses(params) });
};

export const useGetCourseById = ({ courseId }) => {
  return useQuery({
    queryKey: ['GET/COURSE/ID', courseId],
    queryFn: () => coursesServices.getCourseById(courseId),
    enabled: !!courseId,
  });
};

export const useUpdateCourseById = (mutationSettings) => {
  return useMutation({
    mutationFn: (data) => request.put(`course/${data.id}`, data),
    ...mutationSettings,
  });
};

export const useDeleteCourseById = () => {
  return useMutation({ mutationFn: (data) => request.delete(`course/${data.id}`, data) });
};

export const useUploadPhoto = () => {
  return useMutation({ mutationFn: (data) => coursesServices.uploadPhoto(data)});
};

export const useGetDownloadCourses = () => {
  return useQuery({ queryKey: ['DOWNLOAD/COURSES'], queryFn: () => coursesServices.downloadGetCourses() });
};
