import { MonetizationOn, ShoppingCart, Chat, Sell } from '@mui/icons-material';
import { motion } from 'framer-motion';
import MyPosts from '../../features/sellerFeatures/myPosts/MyPosts';
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react';
import { useAuth } from '../../services/auth/AuthContext';


const SellerDashboard = ({ onRefresh }) => {

    const [posts, setPosts] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPublications = async () => {
            if (!user?.seller?.id) return;

            try {
                const response = await fetch(`http://localhost:3000/seller/${user.seller.id}`);
                if (!response.ok) throw new Error("Error al cargar publicaciones");

                const data = await response.json();
                setPosts(data);

            } catch (error) {
                console.error("Error al obtener publicaciones del vendedor:", error);
            }
        };

        fetchPublications();
    }, [user?.seller?.id]);

    const dashboardData = {
        totalSales: 150,
        pendingOrders: 10,
        newMessages: 5,
        activePosts: 25,
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
        }),
    };

    const titleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <>
            <div className="min-h-screen bg-[#FDE7B9] pt-10 pb-10 px-5 flex flex-col items-center">
                <button
                    onClick={() => navigate('/AñadirPublicacion')}
                    className="my-20 px-6 py-3 bg-[#40250D] text-[#FFE0C4] rounded-xl font-bold hover:bg-[#5a3717] transition-colors"
                >
                    Añadir Publicación
                </button>

                <motion.div initial="hidden" animate="visible" variants={titleVariants}>
                    <div className="h-[130px] w-[380px] bg-[#40250D] p-8 rounded-2xl mb-20 text-center shadow-lg">
                        <h1 className="text-3xl font-bold text-[#FFE0C4] font-poppins">
                            Panel del Vendedor
                        </h1>
                        <p className="text-lg text-[#FFE0C4] mt-1 font-poppins">
                            Resumen de tu actividad
                        </p>
                    </div>
                </motion.div>


                <div className="max-w-6xl w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                        <motion.div custom={0} initial="hidden" animate="visible" variants={cardVariants}>
                            <div className="bg-gradient-to-br from-[#FDE7B9] to-[#401809] rounded-2xl text-center p-6 w-64 h-64 hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                                <div className="mt-5">
                                    <MonetizationOn
                                        className="text-[#363738] text-8xl hover:text-[#FFE0C4] transition-colors duration-300"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-bold text-[#401809] font-poppins">
                                        Ventas Totales
                                    </h2>
                                    <p className="text-4xl text-[#401809] mt-2 hover:text-[#FFE0C4] transition-colors duration-300">
                                        {dashboardData.totalSales}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div custom={1} initial="hidden" animate="visible" variants={cardVariants}>
                            <div className="bg-gradient-to-br from-[#FDE7B9] to-[#401809] rounded-2xl text-center p-6 w-64 h-64 hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                                <div className="mt-5">
                                    <ShoppingCart
                                        className="text-[#363738] text-8xl hover:text-[#FFE0C4] transition-colors duration-300"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-bold text-[#401809] font-poppins">
                                        Pedidos Pendientes
                                    </h2>
                                    <p className="text-4xl text-[#401809] mt-2 hover:text-[#FFE0C4] transition-colors duration-300">
                                        {dashboardData.pendingOrders}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div custom={2} initial="hidden" animate="visible" variants={cardVariants}>
                            <div className="bg-gradient-to-br from-[#FDE7B9] to-[#401809] rounded-2xl text-center p-6 w-64 h-64 hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                                <div className="mt-5">
                                    <Chat
                                        className="text-[#363738] text-8xl hover:text-[#FFE0C4] transition-colors duration-300"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-bold text-[#401809] font-poppins">
                                        Mensajes Nuevos
                                    </h2>
                                    <p className="text-4xl text-[#401809] mt-2 hover:text-[#FFE0C4] transition-colors duration-300">
                                        {dashboardData.newMessages}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div custom={3} initial="hidden" animate="visible" variants={cardVariants}>
                            <div className="bg-gradient-to-br from-[#FDE7B9] to-[#401809] rounded-2xl text-center p-6 w-64 h-64 hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                                <div className="mt-5">
                                    <Sell
                                        className="text-[#363738] text-8xl hover:text-[#FFE0C4] transition-colors duration-300"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-bold text-[#401809] font-poppins">
                                        Publicaciones Activas
                                    </h2>
                                    <p className="text-4xl text-[#401809] mt-2 hover:text-[#FFE0C4] transition-colors duration-300">
                                        {dashboardData.activePosts}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <MyPosts posts={posts} setPosts={setPosts} onRefresh={onRefresh}/>
        </>
    );
};

export default SellerDashboard;