import { Routes, Route } from "react-router";

import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

const PageRouter = (props) => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default PageRouter;
