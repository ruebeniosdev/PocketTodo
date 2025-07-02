import {
  createRouter,
  RouterProvider,
  Route,
  RootRoute,
} from "@tanstack/react-router";

import { MainLayout } from "./MainLayout";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import { ForgotPassword } from "./Auth/ForgotPassword";
import { TodoList } from "./TodoList";
import { Home } from "./components/Home";

const rootRoute = new RootRoute({ component: MainLayout });

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

const forgotPassword = new Route({
  getParentRoute: () => rootRoute,
  path: "/forgotPassword",
  component: ForgotPassword,
});

const todoRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/todos",
  component: TodoList,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  forgotPassword,
  todoRoute,
]);

const router = createRouter({ routeTree });

export const AppRouter = () => <RouterProvider router={router} />;
