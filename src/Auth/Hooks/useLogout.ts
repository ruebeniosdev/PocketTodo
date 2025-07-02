import { pb } from "@/lib/PocketBase";

export default function useLogout() {
  function logout() {
    pb.authStore.clear();
  }
  return logout;
}
