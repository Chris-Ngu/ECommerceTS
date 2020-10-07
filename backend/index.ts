import Express, { Request, Response } from "express";

import Keyboard from "src/entities/Keyboard";
import User from "src/entities/User";
import Connection from "./src/Connection";

Connection.then((connection) => {
  const userRepository = connection.getRepository(User);
  const keyboardRepository = connection.getRepository(Keyboard);

  const app = Express().use(Express.json());
  const port: number = 3000;

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  });

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
  })
})

