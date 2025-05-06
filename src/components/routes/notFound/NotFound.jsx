import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    const goBackLoginHandler = () => {
        navigate("/");
    };

    return (
        <div>
            <h2> ¡Ups! La página solicitada no fue encontrada</h2>
            <button onClick={goBackLoginHandler}>
                Volver
            </button>
        </div>
    );
};


export default NotFound;