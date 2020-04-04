import fastify from "fastify";
import from from "fastify-reply-from";
import {parse} from "url";

export const app = fastify({
  logger: true,
});

app.register(from, {} as any);

app.all("/*", (req, reply) => {
  if (req.headers["proxy-connection"]) {
    return reply.from(req.req.url!, {
      contentType: req.headers["content-type"],
      body: req.body
    })
  }

  const uriObj = parse(req.req.url!
    .replace(/^\/api\/proxy(\.ts)?/, "")
    .slice(1)
    .replace(/^(https?:)?\/?\//, (_, p1) => {
      return `${p1}//`
    }));

  if (!uriObj.hostname) {
    reply.send(`invalid target ${origin}`);
    return;
  }

  return reply.from(origin);
});
