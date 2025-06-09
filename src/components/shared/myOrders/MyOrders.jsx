import { useEffect, useState } from "react";
import { useAuth } from "../../../services/auth/AuthContext";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user?.id) return;

            try {
                const res = await fetch(`http://localhost:3000/order/buyer/${user.id}`);
                const data = await res.json();
                setOrders(data);
            } catch (error) {
                console.error("Error al obtener pedidos:", error);
            }
        };

        fetchOrders();
    }, [user]);

    return (
        <div className="p-4 flex flex-col justify-center text-center text-[#60250D] min-h-[700px]">
            <h1 className="text-4xl font-bold mb-4">Mis Pedidos</h1>
            {orders.length === 0 ? (
                <p>No tenés pedidos aún.</p>
            ) : (
                <ul className="space-y-4">
                    {orders.map(order => (
                        <li key={order.ID_Orders} className="p-4 bg-[#fff] rounded-xl shadow-md hover:shadow-2xl transition-shadow">
                            <p><strong>Estado:</strong> {order.State}</p>
                            <p><strong>Fecha:</strong> {order.DistributionDate}</p>

                            <h3 className="font-semibold mt-2">Productos:</h3>
                            <ul className="ml-4 list-disc">
                                {order.OrderDetails.map(detail => (
                                    <li key={detail.ID_OrderDetails}>
                                        {detail.Publication?.Title || "Producto eliminado"} - ${detail.Publication?.Price}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyOrders;
