import { getCurrentSession, loginUser, registerUser } from "@/actions/auth";
import SignUp from "@/components/auth/SignUp";
import { FormState } from "@/components/auth/types";
import { redirect } from "next/navigation";
import React from "react";
import zod from "zod";

const SignUpSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});


const SignUpPage = async () => {
  const { user } = await getCurrentSession();
  if (user) {
    return redirect("/");
  }

  const action = async (
    prevState: FormState | undefined,
    formData: FormData
  ): Promise<{ message: string } | undefined> => {
    "use server";
    const parsed = SignUpSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
      return { message: "Invalid form data" };
    }
    const { email, password } = parsed.data;
    const { user, error } = await registerUser(email, password);
    if (error) {
      return { message: typeof error === "string" ? error : "Registration failed" };
    } else if (user) {
      await loginUser(email, password);
      return redirect("/");
      
    }
  };

  return <SignUp action={action} />;
};

export default SignUpPage;