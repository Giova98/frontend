import React from 'react'
import PublicationCard from '../publicationCard/PublicationCard'
import { Grid } from '@mui/material'

const PublicationList = ({ publicaciones }) => {

    return (
        <Grid container spacing={2} columns={12} justifyContent="center" maxWidth={1000}>
            {publicaciones.map((publicacion) => (
                <Grid
                    key={publicacion.id}
                    columnSpan={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                    <PublicationCard
                        id={publicacion.id}
                        title={publicacion.title}
                        description={publicacion.description}
                        img={publicacion.img}
                        price={publicacion.price}
                        status={publicacion.status}
                        brand={publicacion.brand}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default PublicationList
