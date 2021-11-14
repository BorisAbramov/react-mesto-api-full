import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    <Route>
      {() =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={props.to} />
      }
    </Route>
  );
};

export default ProtectedRoute;