import React from 'react';
//Contexts are a way to share properties to other components that really need (instead of passing to a root, and going sub-root to sub-root)
                                    //you can pass as argument, not necessarily an object, it can be an array, a string, number, etc.
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
}); //context is a globally variable object, well the developer DECIDES where it should be available

export default authContext;