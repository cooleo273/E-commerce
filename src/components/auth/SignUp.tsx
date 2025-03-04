"use client";
import React from "react";
import { useFormState } from "react-dom";

export type FormState = {
  message: string;
};

export type SignUpProps = {
  action: (
    prevState: FormState | undefined,
    formData: FormData
  ) => Promise<{ message: string } | undefined>;
};

const initialState: FormState = {
  message: "",
};

const SignUp = ({ action }: SignUpProps) => {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 p-4">
      <form
        action={formAction}
        className="bg-white rounded-lg shadow-2xl p-8 space-y-6 w-full max-w-md transform transition duration-500 hover:scale-105"
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Join the Deal Revolution
        </h1>
        <div className="space-y-2">
          <label
            className="block text-gray-700 text-lg font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            className="block text-gray-700 text-lg font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            id="password"
            name="password"
            type="password"
            placeholder="Create a strong password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            type="submit"
          >
            Create Account
          </button>
        </div>
        <div className="text-center">
          <a
            className="inline-block text-sm text-purple-600 hover:text-purple-800 font-medium"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        {state?.message && (
          <p className="text-center text-red-500 text-sm italic">
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
