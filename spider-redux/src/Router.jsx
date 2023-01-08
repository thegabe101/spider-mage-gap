import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { MageScreen } from "./screens/MageScreen";
import { BattleScreen } from "./screens/BattleScreen";
import Footer from "./components/Foot";
import NavBar from "./components/navbar";

const Router = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/mage" element={<MageScreen />} />
				<Route path="/battle" element={<BattleScreen />} />
			</Routes>
			<Footer />
		</>
	);
};
export default Router;

// const Router = () => {
//     return (
//         <Routes>
//         <Route path='/' element={<HomeScreen />}>
//           {/* <Route path='about' element={<About />} /> */}

//           {/* <Route path='products' element={<SharedProductLayout />}>
//             <Route index element={<HomeScreen />} />
//             <Route path=':productId' element={<SingleProduct />} />
//           </Route> */}

//         </Route>
//       </Routes>
//     );
//   };
//   export default Router;
