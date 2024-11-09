import { User, UserRole } from "@org/shared";

export class UserService {
  async createUser(email: string, password: string): Promise<User> {
    return { email, role: UserRole.ADMIN };
  }
}
