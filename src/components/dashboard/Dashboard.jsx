import React from 'react'
import MyPosts from '../myPosts/MyPosts'
import SellerDashboard from '../sellerDashboard/SellerDashboard'
import Register from '../features/auth/Register'
import Login from '../features/auth/Login'
import PublicationList from '../publicationList/PublicationList'


{/* Home (por ahora contendra todos los componentes) */}
const Dashboard = ({ publicaciones }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <PublicationList publicaciones={publicaciones}/>
            {/*<SellerDashboard />
            <MyPosts />*/}
            <Register />
            <Login />
        </div>
    )
}

export default Dashboard
