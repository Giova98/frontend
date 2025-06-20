import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    const goBackLoginHandler = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-9xl font-bold">404 Not Found</h1>
            <p className="text-xl mt-4 text-gray-800">
                ¡Ups, algo salió mal. 
            </p>
            <div
                onClick={goBackLoginHandler} 
                className="mt-6 px-6 py-2 bg-[#4a1d0d] text-white rounded hover:bg-[#341309] transition"
            >
                Volver
            </div>
        </div>
    );
};


export default NotFound;