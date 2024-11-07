export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  SUPPORT = "SUPPORT",
}

export type User = {
  email: string;
  role: UserRole;
};
