import http from "http";
import SocketService from "./services/socket";

const startServer = async () => {
  const socketService = new SocketService();

  const httpServer = http.createServer();
  const PORT = process.env.PORT || 8000;

  socketService.io.attach(httpServer);

  httpServer.listen(PORT, () => console.log(`listening at port ${PORT}...`));

  socketService.initListeners();
};
startServer();
