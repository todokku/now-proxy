import { app } from "./app";

const port = Number(process.env.PORT) || 9000;

app.listen(port, "0.0.0.0", (err) => {
  if (err) {
    throw err;
  }
  console.log("listen on", port);
});
