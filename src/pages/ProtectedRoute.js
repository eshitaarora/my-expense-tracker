// import { Component } from "react";
// import { useAuth } from "./AuthContext";
// import { Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { user } = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? <Component {...props} /> : <Navigate to="/" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;
