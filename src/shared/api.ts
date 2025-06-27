import { remultApi } from "remult/remult-sveltekit";
import { Backend } from "./backend";

export const api = remultApi({
  // getUser: getUserFromRequest,
  // initApi: async () => {
  //   await User.createDemoUsers();
  // },
  // admin: true,
  // entities: [Task, User],
  controllers: [Backend],
});
