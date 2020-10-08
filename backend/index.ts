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

  app.get("/", (_, res: Response) => {
    res.send("Hello world");
  })

  // ---------      GET ALL     ---------------------------
  app.get("/users", async (_, res: Response) => {
    const users = await userRepository.find();
    res.json(users);
  });

  app.get("/keyboards", async (_, res: Response) => {
    const keyboards = await keyboardRepository.find();
    res.json(keyboards);
  });

  // ---------      GET SPECIFIC     ---------------------------
  app.get("/users/:id", async (req: Request, res: Response) => {
    const foundUser = await userRepository.findOne(req.params.id);
    return res.send(foundUser);
  });

  app.get("/keyboards/:id", async (req: Request, res: Response) => {
    const foundKeyboard = await keyboardRepository.findOne(req.params.id);
    return res.send(foundKeyboard);
  });

  // ---------      CREATE      ---------------------------
  app.post("/users", async (req: Request, res: Response) => {
    const user = await userRepository.create(req.body);
    const results = await userRepository.save(user);
    return res.send(results);
  });

  app.post("/keyboards", async (req: Request, res: Response) => {
    const keyboard = await keyboardRepository.create(req.body);
    const results = await keyboardRepository.save(keyboard);
    return res.send(results);
  });

  // ---------      UPDATE SPECIFIC      ---------------------------
  app.put("/user:id", async (req: Request, res: Response) => {
    const user = await userRepository.findOne(req.params.id);
    userRepository.merge(user, req.body);
    const results = await userRepository.save(user);
    return res.send(results);
  });

  app.put("/keyboards/:id", async (req: Request, res: Response) => {
    const keyboard = await keyboardRepository.findOne(req.params.id);
    keyboardRepository.merge(keyboard, req.body);
    const results = await keyboardRepository.save(user);
    return res.send(results);
  });

  // ---------      DELETE SPECIFIC      ---------------------------
  app.delete("/users/:id", async (req: Request, res: Response) => {
    const results = await userRepository.delete(req.params.id);
    return res.send(results);
  });

  app.delete("/keyboards/:id", async (req: Request, res: Response) => {
    const results = await keyboardRepository.delete(req.params.id);
    return res.send(results);
  });

})
  .catch((error: unknown) => {
    console.log(`Error occured while starting backend: ${error}`)
  });

