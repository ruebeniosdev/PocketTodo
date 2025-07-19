import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb } from "@/lib/PocketBase";
import { toast } from "sonner";

export const useEditTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, title }: { id: string; title: string }) => {
      return pb.collection("todos").update(id, {
        title,
        lastEditedAt: new Date().toISOString(),
      });
    },
    onSuccess: () => {
      toast.success("Todo updated!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => toast.error("Failed to update todo"),
  });
};
