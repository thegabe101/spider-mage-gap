import Router from "./Router";
import "./App.css";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import  keycloak  from './Keycloak'
function App() {

	function updateData()
	{}

	// return(
	// 	<div>
	// 		<Router /> 
	// 	</div>
	// )
	return (
		<ReactKeycloakProvider authClient={keycloak}>
			<div>
				 <Router /> 
			</div>

		</ReactKeycloakProvider>

	);
}

export default App;
