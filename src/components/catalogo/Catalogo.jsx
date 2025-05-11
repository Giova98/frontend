import React from 'react'
import { Route, Routes } from 'react-router'
import PublicationList from '../publicationList/PublicationList'
import DetailPublication from '../detailPublication/DetailPublication'
import { Box } from '@mui/material'

const Catalogo = ({ publicaciones }) => {
  return (
    <Box>
        <Routes>
            <Route index element={<PublicationList publicaciones={publicaciones}/>}/>
            <Route path=":id" element={<DetailPublication />}/>
        </Routes>
    </Box>
  )
}

export default Catalogo
