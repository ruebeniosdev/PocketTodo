export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  visibility: "public" | "private";
  authorId: string;
  authorName?: string;
  created?: string;
};

export type CreateTodoInput = {
  title: string;
  visibility: TodoVisibility;
};

export type UpdateTodoInput = {
  id: string;
  title?: string;
  completed?: boolean;
};

export type TodoVisibility = "private" | "public";
