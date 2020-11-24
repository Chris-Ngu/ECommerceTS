import Express, { json, Request, Response } from "express";
import Cors from 'cors';

import Keyboard from "./src/entities/Keyboard";
import Users from "./src/entities/Users";
import Connection from "./src/Connection";
import { QueryFailedError } from "typeorm";

Connection.then((connection) => {
  const usersRepository = connection.getRepository(Users);
  const keyboardRepository = connection.getRepository(Keyboard);

  const app = Express().use(Express.json());
  app.use(Cors());
  const port: number = 4000;

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  });

  app.get("/", (_, res: Response) => {
    res.send("Hello world");
  })

  // LOGIN ROUTE HERE, NEED IMPLEMENTATION
  app.post("/login", async (_, res: Response) => {
    res.send("MESSAGE FROM BACKEND");
  });

  // ---------      GET ALL     ---------------------------
  app.get("/users", async (_, res: Response) => {
    const users = await usersRepository.find();
    return res.json(users);
  });

  app.get("/keyboards", async (_, res: Response) => {
    const keyboards = await keyboardRepository.find();
    return res.json(keyboards);
  });

  // ---------      GET SPECIFIC     ---------------------------
  app.get("/users/:id", async (req: Request, res: Response) => {
    const foundUser = await usersRepository.findOne(req.params.id);
    return res.send(foundUser);
  });

  app.get("/keyboards/:id", async (req: Request, res: Response) => {
    const foundKeyboard = await keyboardRepository.findOne(req.params.id);
    return res.send(foundKeyboard);
  });

  // ---------      CREATE      ---------------------------
  // Need to hash password here
  app.post("/users", async (req: Request, res: Response) => {
    try {
      const user = await usersRepository.create(req.body);
      const results = await usersRepository.save(user);
      return res.send(results);
    }
    catch (err: any) {
      if(err.code === 23505){
        return res.send("This account already exists!");
      }
      return res.send("GENERIC CREATE USER ERROR HERE");

    }

  });

  app.post("/keyboards", async (req: Request, res: Response) => {
    const keyboard = await keyboardRepository.create(req.body);
    const results = await keyboardRepository.save(keyboard);
    return res.send(results);
  });

  // ---------      DELETE SPECIFIC      ---------------------------
  app.delete("/users/:id", async (req: Request, res: Response) => {
    const results = await usersRepository.delete(req.params.id);
    return res.send(results);
  });

  app.delete("/keyboards/:id", async (req: Request, res: Response) => {
    const results = await keyboardRepository.delete(req.params.id);
    return res.send(results);
  });

  // ---------      UPDATE SPECIFIC      ---------------------------
  app.put("/user:id", async (req: Request, res: Response) => {
    const user = await usersRepository.findOne(req.params.id);
    usersRepository.merge(user, req.body);
    const results = await usersRepository.save(user);
    return res.send(results);
  });

  app.put("/keyboards/:id", async (req: Request, res: Response) => {
    const keyboard = await keyboardRepository.findOne(req.params.id);
    keyboardRepository.merge(keyboard, req.body);
    const results = await keyboardRepository.save(keyboard);
    return res.send(results);
  });
})
  .catch((err: unknown) => {
    console.log("Error while running server: " + err);
  });

