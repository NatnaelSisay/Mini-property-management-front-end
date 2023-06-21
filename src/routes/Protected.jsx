import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
	const user = useSelector((state) => state.auth.value);
	if (!user) return <Navigate to="/login" replace />;
	return children;
};

export default Protected;
