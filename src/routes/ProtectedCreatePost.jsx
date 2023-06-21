import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedCreatePost = ({ children }) => {
	const user = useSelector((state) => state.auth.value);
	if (!user) return <Navigate to="/login" replace />;
	if (user.role !== "OWNER") return <Navigate to="/" replace />;
	return children;
};

export default ProtectedCreatePost;
