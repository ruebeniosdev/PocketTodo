import { useForm } from "@tanstack/react-form";
import { useLogin } from "@/hooks/login/useLogin";
import { useGoogleLogin } from "@/hooks/login/useGoogleLogin";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);

  const onSuccess = () => navigate({ to: "/todos" });

  const loginMutation = useLogin(onSuccess, setFormError);
  const googleLogin = useGoogleLogin(onSuccess, setFormError);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      setFormError(null);
      loginMutation.mutate(value);
    },
  });

  return {
    form,
    loginMutation,
    googleLogin,
    formError,
    setFormError,
  };
};
