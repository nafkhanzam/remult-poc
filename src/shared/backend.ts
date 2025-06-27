import { BackendMethod } from "remult";

export class Backend {
  @BackendMethod({ allowed: true, transactional: false })
  static async thisBackendMethodFails() {
    return { success: true };
  }
}
