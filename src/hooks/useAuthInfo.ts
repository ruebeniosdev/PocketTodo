// src/hooks/useAuthInfo.ts
import { useNavigate } from "@tanstack/react-router";
import { pb } from "@/lib/PocketBase";

export function useAuthInfo() {
  const navigate = useNavigate();
  const isLoggedIn = !!pb.authStore.token;
  const userId = pb.authStore.record?.id;
  const authorName = pb.authStore.model?.email ?? "Anonymous";

  const logout = () => {
    pb.authStore.clear();
    navigate({ to: "/login" });
  };

  return { isLoggedIn, userId, authorName, logout };
}
