import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { pb } from "@/lib/PocketBase";
// import { type RegisterFormValues } from "@/types/RegisterType";

export const useRegisterForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async ({ value }) => {
      setFormError(null);
      setLoading(true);
      try {
        await pb.collection("users").create({
          email: value.email,
          password: value.password,
          passwordConfirm: value.password,
        });
        navigate({ to: "/login" });
      } catch (err) {
        const message =
          err instanceof Error && err.message
            ? err.message
            : "Registration failed. Please try again.";
        setFormError(message);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleGoogleSignUp = async () => {
    setFormError(null);
    setGoogleLoading(true);
    try {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      navigate({ to: "/todos" });
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : "Google sign up failed. Please try again.";
      setFormError(message);
    } finally {
      setGoogleLoading(false);
    }
  };

  return {
    form,
    formError,
    loading,
    googleLoading,
    handleGoogleSignUp,
  };
};
