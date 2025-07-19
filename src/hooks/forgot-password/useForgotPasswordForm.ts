import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { pb } from "@/lib/PocketBase";

export const useForgotPasswordForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      setFormError(null);
      setSuccessMsg(null);
      setLoading(true);
      try {
        await pb.collection("users").requestPasswordReset(value.email);
        setSuccessMsg("A reset link has been sent to your email address.");
      } catch (err) {
        if (err instanceof Error && err.message) {
          setFormError("No account found with that email address.");
        } else {
          setFormError("Failed to send reset link. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return { form, formError, successMsg, loading };
};
