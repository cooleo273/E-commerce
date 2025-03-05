import { getCurrentSession, loginUser } from "@/actions/auth";
import SignIn from "@/components/auth/SignIn";
import { redirect } from "next/navigation";
import React from "react";
import zod from "zod";

const SignUpSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

type FormState = { message: string };

const SignInPage = async () => {
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
    console.log(parsed);
    if (!parsed.success) {
      return { message: "Invalid form data" };
    }
    const { email, password } = parsed.data;
    const { user, error } = await loginUser(email, password);
    if (error) {
      return { message: typeof error === "string" ? error : "Registration failed" };
    } else if (user) {
      
      return redirect("/");
      
    }
  };

  return <SignIn action={action} />;
};

export default SignInPage;