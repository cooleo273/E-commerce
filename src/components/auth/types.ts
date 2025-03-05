export type FormState = {
    message: string;
  };
  
  export type SignInProps = {
    action: (
      prevState: FormState | undefined,
      formData: FormData
    ) => Promise<{ message: string } | undefined>;
  };

 export const initialState: FormState = {
    message: "",
  };



  export type SignUpProps = {
    action: (
      prevState: FormState | undefined,
      formData: FormData
    ) => Promise<{ message: string } | undefined>;
  };