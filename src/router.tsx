import {
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

import { rootRoute } from "./routes/root";
import { indexRoute } from "./routes/index";
import { loginRoute } from "./routes/login";
import { registerRoute } from "./routes/register";
import { forgotPasswordRoute } from "./routes/forgot-password";
import { todoRoute } from "./routes/todos";

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  forgotPasswordRoute,
  todoRoute,
]);

const router = createRouter({ routeTree });

export const AppRouter = () => <RouterProvider router={router} />;