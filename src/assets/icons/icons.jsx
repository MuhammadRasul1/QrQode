import { IoListOutline } from "react-icons/io5";
import cls from "./styles.module.scss"

export const DashboardIcon =({color}) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4614_325)"><path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill={color}/></g><defs><clipPath id="clip0_4614_325"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
}

export const CourseIcon =({color}) => {
    return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4605_335)"><path d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" fill={color}/></g><defs><clipPath id="clip0_4605_335"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>
}

export const GroupsIcon =({color}) => {
    return <IoListOutline className={cls.icon} color={color} /> 
}

export const StudentsIcon =({color}) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4614_355)"><path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill={color}/></g><defs><clipPath id="clip0_4614_355"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
}


export const PaymentIcon =({color}) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4614_384)"><path opacity="0.3" d="M4 6H20V8H4V6ZM4 12H20V18H4V12Z" fill="#0067F4"/><path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill={color}/></g><defs><clipPath id="clip0_4614_384"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
}

export const ReportIcon =({color}) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4614_395)"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V12H9V17ZM13 17H11V14H13V17ZM13 12H11V10H13V12ZM17 17H15V7H17V17Z" fill={color}/></g><defs><clipPath id="clip0_4614_395"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>    
}

export const InfoIcon =({color}) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4614_405)"><path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill={color}/></g><defs><clipPath id="clip0_4614_405"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
}

export const Schedule =({color}) => {
    return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4266_8747)"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z" fill={color}/></g><defs><clipPath id="clip0_4266_8747"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
}

export const Settings =({color}) => {
    return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4268_22999)"><path d="M19.1401 12.9404C19.1801 12.6404 19.2001 12.3304 19.2001 12.0004C19.2001 11.6804 19.1801 11.3604 19.1301 11.0604L21.1601 9.48039C21.3401 9.34039 21.3901 9.07039 21.2801 8.87039L19.3601 5.55039C19.2401 5.33039 18.9901 5.26039 18.7701 5.33039L16.3801 6.29039C15.8801 5.91039 15.3501 5.59039 14.7601 5.35039L14.4001 2.81039C14.3601 2.57039 14.1601 2.40039 13.9201 2.40039H10.0801C9.84011 2.40039 9.65011 2.57039 9.61011 2.81039L9.25011 5.35039C8.66011 5.59039 8.12011 5.92039 7.63011 6.29039L5.24011 5.33039C5.02011 5.25039 4.77011 5.33039 4.65011 5.55039L2.74011 8.87039C2.62011 9.08039 2.66011 9.34039 2.86011 9.48039L4.89011 11.0604C4.84011 11.3604 4.80011 11.6904 4.80011 12.0004C4.80011 12.3104 4.82011 12.6404 4.87011 12.9404L2.84011 14.5204C2.66011 14.6604 2.61011 14.9304 2.72011 15.1304L4.64011 18.4504C4.76011 18.6704 5.01011 18.7404 5.23011 18.6704L7.62011 17.7104C8.12011 18.0904 8.65011 18.4104 9.24011 18.6504L9.60011 21.1904C9.65011 21.4304 9.84011 21.6004 10.0801 21.6004H13.9201C14.1601 21.6004 14.3601 21.4304 14.3901 21.1904L14.7501 18.6504C15.3401 18.4104 15.8801 18.0904 16.3701 17.7104L18.7601 18.6704C18.9801 18.7504 19.2301 18.6704 19.3501 18.4504L21.2701 15.1304C21.3901 14.9104 21.3401 14.6604 21.1501 14.5204L19.1401 12.9404ZM12.0001 15.6004C10.0201 15.6004 8.40011 13.9804 8.40011 12.0004C8.40011 10.0204 10.0201 8.40039 12.0001 8.40039C13.9801 8.40039 15.6001 10.0204 15.6001 12.0004C15.6001 13.9804 13.9801 15.6004 12.0001 15.6004Z" fill={color}/></g><defs><clipPath id="clip0_4268_22999"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
}
