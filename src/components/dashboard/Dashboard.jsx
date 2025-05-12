import React from 'react'
import MyPosts from '../myPosts/MyPosts'
import SellerDashboard from '../sellerDashboard/SellerDashboard'
import Register from '../features/auth/Register'
import LoginV2 from '../features/auth/LoginV2'
import RegisterV2 from '../features/auth/RegisterV2'
import Login from '../features/auth/Login'
import Catalogo from '../catalogo/Catalogo'


{/* Home (por ahora contendra todos los componentes) */}
const Dashboard = () => {
    return (
        <div>
            <Catalogo />
            <SellerDashboard />
            <MyPosts />
            <Register />
            <RegisterV2/>
            <LoginV2/>
            <Login />
        </div>
    )
}

export default Dashboard
