import React from 'react'
import MyPosts from '../myPosts/MyPosts'
import SellerDashboard from '../sellerDashboard/SellerDashboard'
import Register from '../features/auth/Register'
import Login from '../features/auth/Login'
import PublicationList from '../publicationList/PublicationList'
import { Box } from '@mui/material'

{/* Home (por ahora contendra todos los componentes) */}
const Dashboard = ({ publicaciones }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <PublicationList publicaciones={publicaciones}/>
            <SellerDashboard />
            <MyPosts />
            <Register />
            <Login />
        </Box>
    )
}

export default Dashboard
