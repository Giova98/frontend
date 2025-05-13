import React from 'react'
import MyPosts from '../myPosts/MyPosts'
import SellerDashboard from '../sellerDashboard/SellerDashboard'
import Login from '../features/auth/Login'
import Register from '../features/auth/Register'
import Catalogo from '../catalogo/Catalogo'


{/* Home (por ahora contendra todos los componentes) */}
const Dashboard = () => {
    return (
        <div>
            <Catalogo />
            <SellerDashboard />
            <MyPosts />
            <Register/>
            <Login/>
        </div>
    )
}

export default Dashboard
