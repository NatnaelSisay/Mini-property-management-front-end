import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedFavorite = ({ children }) => {
	const user = useSelector((state) => state.auth.value);
	if (!user) return <Navigate to="/login" replace />;
	if (user.role !== "USER") return <Navigate to="/" replace />;
	return children;
};

export default ProtectedFavorite;
