import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';
import { authStore } from 'store/auth.store';
import { observer } from 'mobx-react-lite';
import { StudentPath } from 'modules/Users';
import { CoursesFundamentals } from 'modules/Users/CoursesFundamentals';
import { AuthLayout } from '../Layouts/AuthLayout';
import { Exam } from 'modules/Users/Exam/Exam';
import { Login } from 'modules/Auth/Login';
import { ResetPassword } from 'modules/Auth/ResetPassword';
import { ResetPasswordStep2 } from 'modules/Auth/ResetPassword/Components/ResetPasswordStep2';
import { ResetPasswordStep3 } from 'modules/Auth/ResetPassword/Components/ResetPasswordStep3';
import { Dashbord } from 'modules/Admin/Dashbord';
import { Courses } from 'modules/Admin/Courses';
import { CoursesDetails } from 'modules/Admin/Courses/Components/CoursesDetails';
import { LessonsDetail } from 'modules/Admin/Courses/Components/LessonsDetail';
import { Groups } from 'modules/Admin/Groups';
import { Mentors } from 'modules/Admin/Mentors';
import { Payments } from 'modules/Admin/Payments';
import { Reports } from 'modules/Admin/Reports';
import { Profile } from 'modules/Admin/Profile';
import { ProfileDetail } from 'modules/Admin/Profile/Components/ProfileDetail';
import { Audience } from 'modules/Admin/Schedule/Components/Audience';
import { Discounts } from 'modules/Admin/Settings/Discounts';
import { Rooms } from 'modules/Admin/Settings/Rooms/Rooms';
import { ScheduleTeacher } from 'modules/Admin/Schedule/Components/ScheduleTeacher';
import { Students } from 'modules/Admin/Students';
import { StudentDetail } from 'modules/Admin/Students/Components/StudentDetail';
import { GroupsDetail } from 'modules/Admin/Groups/Components/GroupsDetail';
import { Page } from 'modules/Page/Page';

export const Router = observer(() => {
  const isAuth = authStore.isAuth;

  const role = JSON.parse(localStorage.getItem('auth'));
  const type = role?.userData?.data?.user_type;

  // if (!isAuth) {
  //   return (
  //     <Routes>
  //       <Route path="" element={<AuthLayout />}>
  //         <Route path="/auth" element={<Login />} />
  //         <Route path="/auth/login" element={<Login />} />
  //         <Route path="/auth/resetPassword" element={<ResetPassword />} />
  //         <Route path="/auth/resetPassword/Step2" element={<ResetPasswordStep2 />} />
  //         <Route path="/auth/resetPassword/Step2/Step3" element={<ResetPasswordStep3 />} />
  //         <Route path="*" element={<Navigate to="/auth/login" />} />
  //         <Route path="" element={<Navigate to="/auth/login" />} />
  //       </Route>
  //     </Routes>
  //   );
  // }

  // if (type === 'Admin') {
  //   return (
  //     <Routes>
  //       <Route path="" element={<MainLayout />}>
  //         <Route path="/admin/dashbord" element={<Dashbord />} />
  //         <Route path="/admin/courses" element={<Courses />} />
  //         <Route path="/admin/courses/:id" element={<CoursesDetails />} />
  //         <Route path="/admin/courses/:id/:id" element={<LessonsDetail />} />
  //         <Route path="/admin/groups" element={<Groups />} />
  //         <Route path="/admin/groups/:id" element={<GroupsDetail />} />
  //         <Route path="/admin/students" element={<Students />} />
  //         <Route path="/admin/students/:id" element={<StudentDetail />} />
  //         <Route path="/admin/schedule/teachers" element={<ScheduleTeacher />} />
  //         <Route path='/admin/schedule/audience' element={<Audience />} />
  //         <Route path="/admin/mentors" element={<Mentors />} />
  //         <Route path="/admin/payments" element={<Payments />} />
  //         <Route path="/admin/reports" element={<Reports />} />
  //         <Route path="/admin/profile" element={<Profile />} />
  //         <Route path='/admin/settings/discounts' element={<Discounts />} />
  //         <Route path='/admin/settings/rooms' element={<Rooms />} />
  //         <Route path="/admin/profile/detail" element={<ProfileDetail />} />
  //         <Route path="*" element={<Navigate to="/admin/dashbord" />} />
  //         <Route path="" element={<Navigate to="/admin/dashbord" />} />
  //       </Route>
  //     </Routes>
  //   );
  // } else {
    return (
      <Routes>
        <Route path="" element={<Page />} />
        <Route path="success" element={<Page />} />
      </Routes>
    );
  // }
});
