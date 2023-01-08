import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { MageScreen } from "./screens/MageScreen";
import { BattleScreen } from "./screens/BattleScreen";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";


import Footer from "./components/Foot";



import NavBar from "./components/navbar";

const Router = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
        <Route path ="/posts" element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        <Route path="/mage" element={<MageScreen />} />
				<Route path="/battle" element={<BattleScreen />} />
			</Routes>
			<Footer />
		</>
	);
};
export default Router;
