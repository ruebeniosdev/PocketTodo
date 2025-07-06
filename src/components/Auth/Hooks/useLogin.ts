// import { pb } from "@/lib/PocketBase";
// import type { LoginFormValues } from "@/types/LoginType";
// import { useState } from "react";

// export default function useLogin() {
//   const [loading, setLoading] = useState(false);

//   async function login({ email, password }: LoginFormValues) {
//     setLoading(true);
//     try {
//       const authData = await pb.collection("users").authWithPassword(email, password);
//       return authData;
//     } catch (error) {
//       console.log("Login failed");
//       return null;
//     } finally {
//       setLoading(false);
//     }
//   }

//   return { login, loading };
// }