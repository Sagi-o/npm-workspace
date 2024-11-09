import { FastifyInstance } from "fastify";
import { validateDTO } from "../../utils/validation";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./user.dto";

const userService = new UserService();

export const userController = async (app: FastifyInstance) => {
  app.get("/", (req, reply) => {
    reply.send({ testUser: true });
  });
  app.post("/", async (req, reply) => {
    const body = await validateDTO(CreateUserDTO, req.body);
    const user = await userService.createUser(body.email, body.password);
    reply.send(user);
  });
};
