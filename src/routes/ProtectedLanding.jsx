import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedLanding = ({ children }) => {
	const user = useSelector((state) => state.auth.value);
	if (user && user.role === "ADMIN") return <Navigate to="/admin" replace />;
	return children;
};

export default ProtectedLanding;
