import Keycloak from 'keycloak-js'
const keycloakConfig = {
  url: '/keycloak', 
  realm: 'daru-realm', 
  clientId: 'daru-client'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak