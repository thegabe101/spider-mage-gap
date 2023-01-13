
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import { useState } from "react";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import  keycloak  from './Keycloak'
function App() {
	const [logoutUrl, setData ] = useState("/keyloak/auth/realms/Daru/protocol/open-id-connection/logout?redirect_uri=http://localhost:3000")

	function updateData()
	{}


	return (
		<ReactKeycloakProvider authClient={keycloak}>
			{/* <BrowserRouter> */}
				<Router />
			{/* </BrowserRouter> */}
		</ReactKeycloakProvider>

	);
}

export default App;
