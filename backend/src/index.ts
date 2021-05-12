import { app as server } from "./app/server";

server.listen(3333, () => console.log('Listening on 3333 port'));