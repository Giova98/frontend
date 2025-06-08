import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Truck,
  CalendarDays,
  DollarSign,
  Music2,
} from 'lucide-react';

const pedidosMock = [
  {
    id: 1,
    instrumento: 'Fender Stratocaster Sunburst',
    tipo: 'Guitarra Eléctrica',
    comprador: 'Julieta Sánchez',
    estado: 'Pendiente',
    entrega: '2025-06-15',
    pago: 'Transferencia Bancaria',
  },
  {
    id: 2,
    instrumento: 'Yamaha P-125',
    tipo: 'Teclado Digital',
    comprador: 'Pedro Ortega',
    estado: 'En camino',
    entrega: '2025-06-11',
    pago: 'MercadoPago',
  },
  {
    id: 3,
    instrumento: 'Tama Imperialstar',
    tipo: 'Batería Acústica',
    comprador: 'Nicolás Acosta',
    estado: 'Entregado',
    entrega: '2025-06-05',
    pago: 'Efectivo',
  },
  {
    id: 4,
    instrumento: 'Ibanez SR300E',
    tipo: 'Bajo Eléctrico',
    comprador: 'Lucía Martínez',
    estado: 'Pendiente',
    entrega: '2025-06-18',
    pago: 'Transferencia Bancaria',
  },
];

const estadoColor = {
  Pendiente: 'bg-yellow-200 text-yellow-900',
  'En camino': 'bg-blue-200 text-blue-900',
  Entregado: 'bg-green-200 text-green-900',
};

const Pedidos = () => {
  const [pedidos] = useState(pedidosMock);

  return (
    <div className="min-h-screen bg-[#FDE7B9] flex items-center justify-center py-14 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl space-y-8"
      >
        <h1 className="text-4xl text-center font-bold text-[#401809] font-poppins">
          Pedidos de Instrumentos 
        </h1>

        {pedidos.map((pedido) => (
          <div
            key={pedido.id}
            className="bg-white rounded-2xl shadow-xl p-6 border border-[#e5cfa3] flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div className="text-[#40250D] space-y-2">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Music2 className="w-6 h-6 text-[#401809]" />
                {pedido.instrumento}
              </div>

              <div className="text-sm italic text-gray-600 pl-8">({pedido.tipo})</div>

              <div className="flex items-center gap-2 text-base">
                <User className="w-5 h-5 text-[#9CA3AF]" />
                Comprador: <span className="font-medium">{pedido.comprador}</span>
              </div>

              <div className="flex items-center gap-2 text-base">
                <CalendarDays className="w-5 h-5 text-[#9CA3AF]" />
                Entrega estimada: {pedido.entrega}
              </div>

              <div className="flex items-center gap-2 text-base">
                <DollarSign className="w-5 h-5 text-[#9CA3AF]" />
                Pago: <span className="font-medium">{pedido.pago}</span>
              </div>
            </div>

            <div className="mt-2 md:mt-0">
              <span
                className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${estadoColor[pedido.estado]}`}
              >
                <Truck className="w-4 h-4" />
                {pedido.estado}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pedidos;
