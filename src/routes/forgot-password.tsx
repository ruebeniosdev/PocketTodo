
import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { ForgotPassword } from "../components/Auth/ForgotPassword";

export const forgotPasswordRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/forgotPassword",
  component: ForgotPassword,
});
