import { useLocation, useNavigate } from "react-router";
import FormularioCompra from "./FormularioCompra";
import { ArrowLeft } from "lucide-react";

const PurchaseDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const publicacion = location.state?.publicacion || JSON.parse(localStorage.getItem('publicacion'))

  if (!publicacion) {
    return <div className="text-center mt-10 text-red-600">No se encontró la publicación.</div>
  }

  const { title, img, price } = publicacion

  return (
    <div className="min-h-screen p-8 text-[#2b1200] text-xl flex flex-col items-center">
      <div className="relative w-full mb-10">
        <ArrowLeft 
          className="w-8 h-8 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2" 
          onClick={() => navigate(-1)}/>
        <h1 className="text-3xl font-semibold text-center">Detalles de Compra</h1>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <FormularioCompra />

        <div className="flex flex-col justify-between">

          <div className="space-y-6 text-2xl">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={img}
                    alt={title}
                    className="w-12 h-12 object-contain"
                  />
                  <span>{title}</span>
                </div>
                <span>${price}</span>
              </div>
            </div>

            <div className="border-t border-b border-[#2b1200] py-4 space-y-2">
              <div className="flex justify-between"><span>Subtotal:</span><span>${price}</span></div>
              <div className="flex justify-between"><span>Envio:</span><span>Gratis</span></div>
              <div className="flex justify-between font-semibold text-3xl"><span>Total:</span><span>${price}</span></div>
            </div>
          </div>

          {/* Parte inferior: opciones de pago y botones */}
          <div className="space-y-4 mt-8">
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                <span>Tarjeta</span>
                <span className="flex gap-2">
                  <img src="https://logowik.com/content/uploads/images/mercado-pago3162.logowik.com.webp" alt="card" className="h-7" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/MasterCard-Logo.svg/1280px-MasterCard-Logo.svg.png" alt="card" className="h-7" />
                  <img src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006.png" alt="card" className="h-7" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/512px-PayPal.svg.png" alt="card" className="h-7" />
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked />
                <span>Pagar en efectivo al retirar</span>
              </label>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Cupon de descuento"
                className="flex-1 p-2 rounded"
              />
              <button className="bg-[#401809] text-white px-4 rounded font-medium">Aplicar</button>
            </div>

            <button className="w-full bg-[#401809] text-white py-2 rounded font-medium">Realizar pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
