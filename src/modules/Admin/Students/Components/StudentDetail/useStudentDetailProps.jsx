import { useNavigate, useParams } from "react-router-dom"

export const useStudentDetailProps = () => {

       let {id} = useParams()

       const navigate = useNavigate()

       return {
              id,
              navigate,
       }
}