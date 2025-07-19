import { useQuery } from "@tanstack/react-query";
import { pb } from "@/lib/PocketBase";
import type { Todo } from "@/types/Todo";

export function useTodos(
  userId: string,
  page: number = 1,
  perPage: number = 5
) {
  return useQuery({
    queryKey: ["todos", userId, page],
    queryFn: async () => {
      const result = await pb.collection("todos").getList<Todo>(page, perPage, {
        filter: `authorId="${userId}"`,
        sort: "-created",
      });
      return result;
    },
  });
}
