import { remultApi } from "remult/remult-sveltekit";
import { User } from "../demo/auth/User";
import { Task } from "../demo/todo/Task";
import { getUserFromRequest } from "./auth";
import { Backend } from "./backend";

export const api = remultApi({
  getUser: getUserFromRequest,
  initApi: async () => {
    await User.createDemoUsers();
  },
  admin: true,
  entities: [Task, User],
  controllers: [Backend],
});
