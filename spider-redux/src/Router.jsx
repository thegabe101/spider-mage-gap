import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { MageScreen } from "./screens/MageScreen";
// import { BattleScreen } from "./screens/BattleScreen";
import PostsList from "./features/posts/PostsList";

import Layout from "./components/Layout";
import Footer from "./components/Foot";

import NavBar from "./components/navbar";

const Router = () => {
	return (
		<>
		<NavBar />
			<Routes>
				<Route path="/mage" element={<MageScreen />} /> 
			</Routes>
		<Footer />
		</>
	);
};
export default Router;


// <Route path="post">
// <Route index element={<AddPostForm />} />
// <Route path=":postId" element={<SinglePostPage />} />
// 	<Route path="edit/:postId" element={<EditPostForm />} />
// </Route>
// <Route path="/mage" element={<MageScreen />} />
// <Route path="/battle" element={<BattleScreen />} />