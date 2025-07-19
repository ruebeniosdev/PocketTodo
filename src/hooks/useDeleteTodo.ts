import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb } from "@/lib/PocketBase";
import { toast } from "sonner";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return pb.collection("todos").delete(id);
    },
    onSuccess: () => {
      toast.success("Todo deleted!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => toast.error("Failed to delete todo"),
  });
};

