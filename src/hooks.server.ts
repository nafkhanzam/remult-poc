import { sequence } from "@sveltejs/kit/hooks";
import { api as handleRemult } from "./shared/api";
import { handle as handleAuth } from "./shared/auth";

export const handle = sequence(handleAuth, handleRemult);
