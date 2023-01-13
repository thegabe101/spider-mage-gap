import  keycloak  from '../Keycloak'

const PrivateRoute = ({ children }) => {
    console.log("dfdfa dfdf aaa ")
    const isLoggedIn = keycloak.authenticated;

    // keycloak.init({onLoad: 'login-required'}).then(authenticated => {
    //     this.setState({ keycloak: keycloak, authenticated: authenticated })
    //   })
    //   .catch(() => {
    //     console.log('The keycloak client could not be initiated');
 
    // });

//  keycloak.init({onLoad: 'login-required'}).then(function (authenticated) {
//         if (!authenticated) {
//             console.log("a", keycloak.init )
//         } else{
//             console.log("d", keycloak.init )
//         }

//     });

    keycloak.init({ 'onLoad': 'check-sso' })
        .then(() => {
        console.log('The keycloak client wa be initiated');
    })
    .catch(() => {
        console.log('The keycloak client could not be initiated');
 
    });

    // return isLoggedIn ? children : null;
    return "dfa"
};

export default PrivateRoute;