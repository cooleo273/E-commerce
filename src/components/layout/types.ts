import { User } from "@prisma/client";

export type HeaderProps = {
    user: Omit<User, "passwordHash"> | null;
  };