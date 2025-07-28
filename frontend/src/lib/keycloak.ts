import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://localhost:8081',
  realm: 'connect',
  clientId: 'frontend-web'
})

export default keycloak
