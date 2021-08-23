
import {ComponentType} from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

interface ProtectedRouteProps {
    component: ComponentType,
    path?: string,
}

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => (
  <Route
    component={withAuthenticationRequired(component)}
    {...args}
  />
);

export default ProtectedRoute;