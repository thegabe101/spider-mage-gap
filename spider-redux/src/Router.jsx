import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { MageScreen } from "./screens/MageScreen";
import { BattleScreen } from "./screens/BattleScreen";
import Footer from "./components/Foot";
import NavBar from "./components/NavBar";
import { Form } from "./components";
import "./styles/body.css";

const Router = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/mage" element={<MageScreen />} />
				<Route path="/mage" element={<MageScreen />} />
				<Route path="/battle" element={<BattleScreen />} />
			</Routes>
			<Footer />
		</>
	);
};
export default Router;
