import React from 'react'
import { Route, Routes } from 'react-router'
import PublicationList from '../publicationList/PublicationList'
import DetailPublication from '../detailPublication/DetailPublication'

const Catalogo = () => {
  return (
    <div>
        <Routes>
            <Route index element={<PublicationList />}/>
            <Route path=":id" element={<DetailPublication />}/>
        </Routes>
    </div>
  )
}

export default Catalogo
