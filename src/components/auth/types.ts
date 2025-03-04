export type SignUpProps = {
  action: (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string } | undefined>;
};
