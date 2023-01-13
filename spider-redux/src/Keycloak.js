import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "/keycloak",
 realm: "daru-realm",
 clientId: "daru-client",
 sslRequired: "external"
});

export default keycloak;