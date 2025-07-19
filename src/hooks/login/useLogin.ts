import { useMutation } from "@tanstack/react-query";
import { pb } from "@/lib/PocketBase";
import type { LoginFormValues } from "@/types/LoginType";

export function useLogin(
  onSuccess: () => void,
  onError?: (message: string) => void
) {
  return useMutation({
    mutationFn: async ({ email, password }: LoginFormValues) => {
      return await pb.collection("users").authWithPassword(email, password);
    },
    onSuccess: () => {
      onSuccess();
    },
    onError: (error: unknown) => {
      let message = "Login failed. Please try again.";
      if (error instanceof Error && error.message) {
        message = error.message;
      }
      onError?.(message);
    },
  });
}
