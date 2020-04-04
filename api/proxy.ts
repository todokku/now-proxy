import { IncomingMessage, ServerResponse } from "http";
import { app } from "../app";

export default async (req: IncomingMessage, resp: ServerResponse) => {
  await app.ready();
  app.server.emit("request", req, resp);
};
