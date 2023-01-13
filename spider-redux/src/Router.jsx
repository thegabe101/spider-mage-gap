import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { MageScreen } from "./screens/MageScreen";
import { BattleScreen } from "./screens/BattleScreen";
import Footer from "./components/Foot";
import NavBar from "./components/NavBar";
import { useState } from "react";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";
import Nav from "./components/Nav";
import ProtectedPage from "./pages/ProtectedPage";
import { BrowserRouter } from "react-router-dom";
import { useKeycloak } from '@react-keycloak/web';
import  Menu  from './Menu'
import  HomePage  from './HomePage'
import "./styles/body.css";

const Router = () => {
    // const [, initialized] = useKeycloak();
    // if (!initialized) {
    //     return <h3>Loading ... !!!</h3>;
    // }
	return (
		<>
		{/* <Menu /> */}
        <BrowserRouter>
        <Nav />
            {/* <Routes>
                <Route exact path="/" component={HomePage} />
                <PrivateRoute roles={['RealmAdmin']} path="/protected" element={ProtectedPage} />
            </Routes> */}
            <Routes>
                <Route exact path="/" element={<WelcomePage />} />
                {/* <Route exact path="/keycloak/realms/daru-realm/protocol/openid-connect/3p-cookies/step1.html" element={<WelcomePage />} /> */}

            <Route
                path="/secured"
                element={
                <PrivateRoute>
                    <SecuredPage />
                </PrivateRoute>
                }
            />
            </Routes>
        </BrowserRouter>
		</>
	);
};

// PrivateRoute
export default Router;


		// <>
		// 	{/* <NavBar /> */}
		// 	<Routes>
		// 	<Route exact path="/" element={<WelcomePage />} />
		// 	<Route exact path="/keycloak/realms/daru-realm/protocol/openid-connect/3p-cookies/step1.html" element={<WelcomePage />} />

        //    <Route
        //      path="/secured"
        //      element={
        //        <PrivateRoute>
        //          <SecuredPage />
        //        </PrivateRoute>
        //      }
        //    />

		// 		{/* <Route path="/" element={<HomeScreen />} />
		// 		<Route path="/mage" element={<MageScreen />} />
		// 		<Route path="/mage" element={<MageScreen />} />
		// 		<Route path="/battle" element={<BattleScreen />} /> */}
		// 	</Routes>

		// </>