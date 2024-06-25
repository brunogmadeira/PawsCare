import { useNavigate, Link } from "react-router-dom";

const Perfil = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };
};

export default Perfil;
