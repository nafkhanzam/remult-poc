import { BackendMethod } from "remult";

export class Backend {
  @BackendMethod({ allowed: true })
  static async thisBackendMethodFails({}) {
    if (import.meta.env.SSR) {
      const { AUTH_SECRET } = await import("$env/static/private");
      console.log("Super secret stuff", AUTH_SECRET);
    }
    return { success: true };
  }
}
