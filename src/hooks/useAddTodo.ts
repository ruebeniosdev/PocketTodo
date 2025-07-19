import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb } from "@/lib/PocketBase";
import { toast } from "sonner";
import type { TodoVisibility } from "@/types/Todo";

type AddTodoParams = {
  title: string;
  visibility: TodoVisibility;
  userId: string;
  authorName: string;
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      title,
      visibility,
      userId,
      authorName,
    }: AddTodoParams) => {
      return pb.collection("todos").create({
        title,
        visibility,
        completed: false,
        authorId: userId,
        authorName,
        lastEditedAt: new Date().toISOString(),
      });
    },
    onSuccess: () => {
      toast.success("Todo added!", {
        description: "Your task was saved.",
      });
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => toast.error("Failed to add todo"),
  });
};
