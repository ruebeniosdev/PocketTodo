import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb } from "@/lib/PocketBase";
import { toast } from "sonner";

export const useToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      completed,
    }: {
      id: string;
      completed: boolean;
    }) => {
      return pb.collection("todos").update(id, {
        completed: !completed,
        lastEditedAt: new Date().toISOString(),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => toast.error("Failed to toggle todo"),
  });
};
