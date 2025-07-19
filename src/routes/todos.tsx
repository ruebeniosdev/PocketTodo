import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { TodoList } from "../components/tasks/TodoList";

export const todoRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/todos",
  component: TodoList,
});
