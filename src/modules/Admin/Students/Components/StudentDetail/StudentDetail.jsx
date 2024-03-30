import { useStudentDetailProps } from "./useStudentDetailProps"
import cls from './styles.module.scss'
import CloseVektor from 'assets/icons/close-vektor.svg'
import UserIcon from 'assets/icons/user.svg' 
import EditIcon from 'assets/icons/edit.svg'
import MailIcon from 'assets/icons/mail.svg'
import DeleteIcon from 'assets/icons/delete.svg'

export const StudentDetail = () => {

       const { id, navigate } = useStudentDetailProps()

       return (
              <>
              <div>
                     <header className={cls.detail_header}>
                            <button className={cls.header_btn} onClick={() => navigate(-1)}>
                                   <img className={cls.btn_inner_img} src={CloseVektor} alt="Close vektor" />
                                   Username
                            </button>
                     </header>

                     <div className={cls.detail}>
                            <div className={cls.detail_left}>
                                   <div className={cls.detail_left_top}>
                                          <div className={cls.detail_info}>
                                                 <div className={cls.detail_info_img_sec}>
                                                        <img src={UserIcon} alt="user icon" />
                                                 </div>
                                                 <h4 className={cls.detail_info_name}>Муниса</h4>
                                                 <p className={cls.detail_info_id}>{id}</p>
                                                 <div className={cls.detail_info_prise_section}>
                                                        <span className={cls.detail_info_price}>9000000 сум</span>
                                                        <span className={cls.detail_info_text}>Баланс</span>
                                                 </div>
                                          </div>

                                          <div className={cls.detail_icon_section}>
                                                 <img src={EditIcon} alt="edit icons" />
                                                 <img src={MailIcon} alt="mail icons" />
                                                 <img src={DeleteIcon} alt="delete icons" />
                                          </div>
                                   </div>
                            </div>                                         
                     </div>
              </div>
              </>
       )
}
