import Fastify from "fastify";
import { userController } from "./modules/user/user.controller";
import { getSharedFunc } from "@org/shared";
getSharedFunc()

export const buildApp = () => {
  const app = Fastify({
    logger: {
      transport: {
        target: "@fastify/one-line-logger",
      },
    },
  });

  // controllers
  app.register(async (fastify) => {
    fastify.register(userController, { prefix: "/user" });
  });

  return app;
};

const app = buildApp();

const start = async () => {
  try {
    const port = process.env.PORT ? Number(process.env.PORT) : 3100;
    await app.listen({ port });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
