// components/TodoItem.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Circle, Pencil, Trash } from "lucide-react";

type Props = {
  id: string;
  title: string;
  completed: boolean;
  visibility: "public" | "private";
  authorId?: string;
  authorName?: string;
  created?: string;
  isAuthor: boolean;
  onToggleCompleted: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

export const TodoItem = ({
  id,
  title,
  completed,
  visibility,
  authorName,
  created,
  isAuthor,
  onToggleCompleted,
  onDelete,
  onEdit,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleEditSave = () => {
    if (editTitle.trim() !== "") {
      onEdit(id, editTitle.trim());
    }
    setIsEditing(false);
  };

  return (
    <div className="flex items-start justify-between bg-white p-3 rounded shadow w-full gap-3">
      <div className="flex flex-col w-full">
        {isEditing ? (
          <Input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={handleEditSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleEditSave();
              if (e.key === "Escape") setIsEditing(false);
            }}
            autoFocus
          />
        ) : (
          <p
            className={`font-medium break-words cursor-pointer ${
              completed ? "line-through text-muted-foreground" : ""
            }`}
            onDoubleClick={() => isAuthor && setIsEditing(true)}
          >
            {title}
          </p>
        )}

        {visibility === "public" && (
          <p className="text-xs text-muted-foreground">
            By: {authorName ?? "Anonymous"} • Created:{" "}
            {created ? new Date(created).toLocaleString() : "Unknown"}
          </p>
        )}
      </div>

      <div className="flex gap-2 items-center shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onToggleCompleted(id, completed)}
        >
          {completed ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </Button>

        {isAuthor && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(true)}
            >
              <Pencil className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(id)}
            >
              <Trash className="w-5 h-5 text-red-500" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
