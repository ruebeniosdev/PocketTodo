import { useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
import { pb } from "@/lib/PocketBase";

export function useAuth() {
  const navigate = useNavigate();

  const isLoggedIn = !!pb.authStore.token;
  const user = pb.authStore.record; 

  const logout = useCallback(() => {
    pb.authStore.clear();
    navigate({ to: "/login" });
  }, [navigate]);

  return {
    isLoggedIn,
    user,
    logout,
  };
}
