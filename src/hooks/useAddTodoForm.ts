import { useState } from "react";
import { useAddTodo } from "./useAddTodo";
import type { TodoVisibility } from "@/types/Todo";

export function useAddTodoForm(userId: string, authorName: string) {
  const addTodo = useAddTodo();
  const [title, setTitle] = useState("");
  const [visibility, setVisibility] = useState<TodoVisibility>("public");

  const reset = () => {
    setTitle("");
    setVisibility("public");
  };

  const handleAdd = () => {
    if (!title.trim()) return;
    addTodo.mutate({
      title: title.trim(),
      visibility,
      userId,
      authorName,
    });
    reset();
  };

  return {
    title,
    visibility,
    setTitle,
    setVisibility,
    handleAdd,
    reset,
  };
}
