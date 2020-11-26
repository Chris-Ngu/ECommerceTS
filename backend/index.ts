import Express, { Request, Response } from "express";
import Cors from 'cors';
import argon2 from "argon2";

import Keyboard from "./src/entities/Keyboard";
import Users from "./src/entities/Users";
import { Connection } from "./src/Connection";

Connection.then((connection) => {
  const usersRepository = connection.getRepository(Users);
  const keyboardRepository = connection.getRepository(Keyboard);
  const port = 4000;

  const app = Express().use(Express.json());
  app.use(Cors());

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  });

  app.get("/", (_, res: Response) => {
    res.send("Welcome to KeebWorld!");
  });

  // LOGIN ROUTE HERE, NEED IMPLEMENTATION
  app.post("/login", async (_, res: Response) => {
    res.send("MESSAGE FROM BACKEND");
  });

  app.post("/forgot", async (req: Request, res: Response) => {
    return res.send("FORGOT PASSWORD QUERY SENT HERE w/ " + req.body.email);
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
  app.post("/users", async (req: Request, res: Response) => {
    try {
      req.body.password = await argon2.hash(req.body.password);
      const user = await usersRepository.create(req.body);
      const results = await usersRepository.save(user);
      return res.send(results);
    }
    catch (err: any) {
      if (err.code === 23505) {
        return res.send("This account already exists!");
      }
      return res.send("GENERIC CREATE USER ERROR HERE");
    }
  });

  app.post("/keyboards", async (req: Request, res: Response) => {
    try {
      const keyboard = await keyboardRepository.create(req.body);
      const results = await keyboardRepository.save(keyboard);
      return res.send(results);
    }
    catch (err: any) {
      return res.send("GENERIC ERROR OCCURED HERE");
    }
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
    const user = await usersRepository.findOne(req.params.id) as Users;
    usersRepository.merge(user, req.body);
    const results = await usersRepository.save(user);
    return res.send(results);
  });

  app.put("/keyboards/:id", async (req: Request, res: Response) => {
    const keyboard = await keyboardRepository.findOne(req.params.id) as Keyboard;
    keyboardRepository.merge(keyboard, req.body);
    const results = await keyboardRepository.save(keyboard);
    return res.send(results);
  });
})
  .catch((err: unknown) => {
    console.log("Error while running server: " + err);
  });

