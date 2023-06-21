import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedOffers = ({ children }) => {
	const user = useSelector((state) => state.auth.value);
	if (!user || user.role === "ADMIN") return <Navigate to="/" />;
	return children;
};

export default ProtectedOffers;
