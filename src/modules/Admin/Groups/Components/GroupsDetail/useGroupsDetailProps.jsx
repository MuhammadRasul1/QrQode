import { useParams } from "react-router-dom"
import request from "services/httpRequest"
import React, { useEffect, useState } from "react"
import cls from "./styles.module.scss"
import { useGetGroupsUsers } from "services/groups.service"

export const useGroupsDetailProps = () => {
    let { id } = useParams()
    
    const [activeGroupDetail, setActiveGroupDetail] = useState('');

    useEffect(() => {
      request.get(`group/${id}`).then((res) => setActiveGroupDetail(res?.data));
    }, [id]);

    const list = [
        {
            title: 'Ментор',
            value: <a className={cls.link} href="#">{activeGroupDetail?.teacher_name}</a>
        },
        {
            title: 'Цена',
            value: activeGroupDetail?.price
        },
        {
            title: 'Длительность курса',
            value: activeGroupDetail?.weekly_number
        },
        {
            title: 'Дата начала',
            value: activeGroupDetail?.start_date
        },
        {
            title: 'Дата окончания',
            value: activeGroupDetail?.end_date
        },
        {
            title: 'Кабинет',
            value: activeGroupDetail?.room_name
        },
    ]

    const { data: groupsUsers } = useGetGroupsUsers({ id: id });
    console.log(groupsUsers);

    const columns = [
        { title: '№', dataIndex: 'number', key: 'number', width: 88, },
        {  title: 'Имя студента',  dataIndex: 'name',  key: 'name',  width: 432,},
        {  title: 'Контакты',  dataIndex: 'phone_number',  key: 'phone_number',  width: 428,},
        {  title: 'Комментарий',  dataIndex: 'comments',  key: 'comments',  width: 428,},
        // {
        //   title: '',
        //   key: 'operations',
        //   render: (item) => (
        //     <Box display="flex" alignItems="center" gap="8px" padding="3px">
        //       <Button
        //         width="24px"
        //         padding="3px"
        //         borderRadius="6px"
        //         backgroundColor="#E9E9E9" 
        //         _hover={{ background: "#9a9797" }}
        //         onClick={() => {
        //           handleOpenEdit();
        //           setState((prev) => ({ ...prev, activeGroupId: item?.id }));
        //         }}
        //       >
        //         <img src={EditIcon} alt="edit" width="18px" height="18px" />
        //       </Button>
        //       <Button
        //         padding="3px"
        //         borderRadius="6px"
        //         backgroundColor="#CF0000" 
        //         _hover={{ background: "#de6767" }}
        //         onClick={() => {
        //           handleOpenDelete();
        //           setState((prev) => ({ ...prev, activeGroupId: item?.id }));
        //           setState((prev) => ({ ...prev, activeGroup: item }));
        //         }}
        //       >
        //         <img src={DeleteIcon} alt="delete" width="18px" height="18px" />
        //       </Button>
        //     </Box>
        //   ),
        // },
      ];

      const data = React.useMemo(
        () =>
        groupsUsers?.UserGroup?.map((item, index) => ({
            ...item,
            number: index + 1,
          })),
        [groupsUsers]
      );
    return {
        columns,
        data,
        list,
        activeGroupDetail
    }
}