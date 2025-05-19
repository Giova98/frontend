import React, { useState } from 'react'

const paises = [
    { id: 1, nombre: 'Argentina' },
    { id: 2, nombre: 'Brasil' }
]

const provincias = [
    { id: 1, nombre: 'Santa Fe', paisId: 1 },
    { id: 2, nombre: 'Buenos Aires', paisId: 1 },
    { id: 3, nombre: 'São Paulo', paisId: 2 },
]

const ciudades = [
    { id: 1, nombre: 'Rosario', provinciaId: 1 },
    { id: 2, nombre: 'Casilda', provinciaId: 1 },
    { id: 3, nombre: 'La Plata', provinciaId: 2 },
    { id: 4, nombre: 'Campinas', provinciaId: 3 },
]

const FormularioCompra = () => {
    const [paisSeleccionado, setPaisSeleccionado] = useState('')
    const [provinciaSeleccionada, setProvinciaSeleccionada] = useState('')

    const provinciasFiltradas = provincias.filter(p => p.paisId.toString() === paisSeleccionado)
    const ciudadesFiltradas = ciudades.filter(c => c.provinciaId.toString() === provinciaSeleccionada)

    return (
        <form className="space-y-4">
            <input type="text" placeholder="Nombre completo*" className="w-full p-2 rounded" />
            <input type="email" placeholder="Correo electrónico*" className="w-full p-2 rounded" />
            <input type="tel" placeholder="Teléfono*" className="w-full p-2 rounded" />

            <select
                className="w-full p-2 rounded"
                value={paisSeleccionado}
                onChange={(e) => {
                    setPaisSeleccionado(e.target.value)
                    setProvinciaSeleccionada('')
                }}
            >
                <option value="">Seleccionar país*</option>
                {paises.map(p => (
                    <option key={p.id} value={p.id}>{p.nombre}</option>
                ))}
            </select>

            <select
                className="w-full p-2 rounded"
                value={provinciaSeleccionada}
                onChange={(e) => setProvinciaSeleccionada(e.target.value)}
                disabled={!paisSeleccionado}
            >
                <option value="">Seleccionar provincia*</option>
                {provinciasFiltradas.map(p => (
                    <option key={p.id} value={p.id}>{p.nombre}</option>
                ))}
            </select>

            <select
                className="w-full p-2 rounded"
                disabled={!provinciaSeleccionada}
            >
                <option value="">Seleccionar ciudad*</option>
                {ciudadesFiltradas.map(c => (
                    <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
            </select>

            <input type="text" placeholder="Código postal*" className="w-full p-2 rounded" />
            <input type="text" placeholder="Calle*" className="w-full p-2 rounded" />
            <input type="text" placeholder="Departamento (opcional)" className="w-full p-2 rounded" />
        </form>
    )
}

export default FormularioCompra
