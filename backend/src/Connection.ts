import { createConnection } from "typeorm";

import User from "./entities/Users";
import Keyboard from "./entities/Keyboard";

export const __portNumber__ = 5432;

export const Connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: __portNumber__,
    username: "postgres",
    password: "postgres",
    database: "keebclack",
    entities: [
        User,
        Keyboard
    ],
    synchronize: true,
    logging: true
});
