import React from 'react'
import MyPosts from '../myPosts/MyPosts'
import SellerDashboard from '../sellerDashboard/SellerDashboard'
import Login from '../features/auth/Login'
<<<<<<< HEAD
import PublicationList from '../publicationList/PublicationList'

=======
import Register from '../features/auth/Register'
import Catalogo from '../catalogo/Catalogo'
>>>>>>> origin/tailwind


{/* Home (por ahora contendra todos los componentes) */}
const Dashboard = ({ publicaciones }) => {
    return (
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center w-full">
            <PublicationList publicaciones={publicaciones}/>
            {/*<SellerDashboard />
            <MyPosts />*/}
            <Register />
            <Login />
=======
        <div>
            <Catalogo />
            <SellerDashboard />
            <MyPosts />
            <Register/>
            <Login/>
>>>>>>> origin/tailwind
        </div>
    )
}

export default Dashboard
