import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { useAddTodoForm } from "@/hooks/useAddTodoForm";
import { useAuthInfo } from "@/hooks/useAuthInfo";
import { useTodos } from "@/hooks/useTodos";
import { useEditTodo } from "@/hooks/useEditTodo";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import { useToggleTodo } from "@/hooks/useToggleTodo";
import { TodoItem } from "@/components/tasks/TodoItem";

export const TodoList = () => {
  const { isLoggedIn, userId, authorName, logout } = useAuthInfo();
  const canLoadTodos = !!userId && !!authorName;

  const [page, setPage] = useState(1);
  const perPage = 10;

  const { data, isLoading, isError, isFetching } = useTodos(
    userId ?? "",
    page,
    perPage
  );

  const totalPages = data?.totalPages ?? 1;

  const { title, visibility, setTitle, setVisibility, handleAdd, reset } =
    useAddTodoForm(userId ?? "", authorName ?? "");

  const editTodo = useEditTodo();
  const deleteTodo = useDeleteTodo();
  const toggleTodo = useToggleTodo();

  if (!canLoadTodos) return null;

  return (
    <div className="flex flex-col items-center h-screen bg-muted px-4">
      <nav className="w-full flex justify-between items-center py-4 px-4 shadow bg-white fixed top-0 left-0 z-10">
        <span className="text-xl font-bold text-indigo-700">PockeTodo</span>
        {isLoggedIn && (
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        )}
      </nav>

      <div className="h-20" />

      <Card className="w-full max-w-md">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Todo List</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button>+ New Todo</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Todo</DialogTitle>
              </DialogHeader>

              <div className="space-y-3">
                <Input
                  placeholder="Enter a task..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <select
                  className="w-full rounded border px-3 py-2"
                  value={visibility}
                  onChange={(e) =>
                    setVisibility(e.target.value as "public" | "private")
                  }
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" onClick={reset}>
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button onClick={handleAdd}>Add Todo</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent className="space-y-3">
          {isLoading || isFetching ? (
            <div className="text-center py-4">
              <Loader2 className="w-6 h-6 animate-spin mx-auto" />
            </div>
          ) : isError ? (
            <p className="text-red-500">Failed to load todos.</p>
          ) : data?.items.length === 0 ? (
            <p className="text-center text-muted-foreground">No todos found.</p>
          ) : (
            <>
              {data?.items.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  visibility={todo.visibility}
                  authorId={todo.authorId}
                  authorName={todo.authorName}
                  created={todo.created}
                  isAuthor={todo.authorId === userId}
                  onToggleCompleted={(id: string, completed: boolean) =>
                    toggleTodo.mutate({ id, completed })
                  }
                  onDelete={(id: string) => deleteTodo.mutate(id)}
                  onEdit={(id: string, newTitle: string) =>
                    editTodo.mutate({ id, title: newTitle })
                  }
                />
              ))}

              <div className="flex justify-between items-center pt-4">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Previous
                </Button>
                <span className="text-sm text-gray-500">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
