import { serve } from "./deps.ts";
import { requestHandler } from "./request-handler.ts";

const port = parseInt(Deno.env.get("PORT") ?? "8000");

console.log("Listening on port ", port);
serve(requestHandler, { port });
