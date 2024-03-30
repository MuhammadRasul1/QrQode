import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const roomsServices = {
  createRoom: (data) => request.post("/room", data),
  getRooms: (params) => request.get("/room", {params}).then(res => res?.data),
  getRoomById: (roomId) => request.get(`/room/${roomId}`),
  updateRoomById: (roomId) => request.put(`room/${roomId}`),
  deleteRoomById: (roomId) => request.delete(`/room/${roomId}`).then(res => res?.data),
};
export const useCreateRoom = () => {
  return useMutation({ mutationFn: (data) => roomsServices.createRoom(data)})
}

export const useGetRooms = (params) => {
  return  useQuery({queryKey: ['rooms', params], queryFn: () => roomsServices.getRooms(params)});
};

export const useGetRoomById = ({roomId}) => {
  return useQuery({queryKey: ["GET/ROOM/ID", roomId], queryFn: () => roomsServices.getRoomById(roomId), enabled: !!roomId})
}

export const useUpdateRoomById = (mutationSettings) => {
  return useMutation({
     mutationFn: (data) => request.put(`room/${data.id}`, data),
     ...mutationSettings
    })
}

export const useDeleteRoomById = () => {
  return useMutation({mutationFn: (data) => request.delete(`room/${data.id}`, data)})
}
