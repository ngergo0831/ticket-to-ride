import { io } from "socket.io-client";

const socket = io("http://localhost:3031");
//const socket = io("http://webprogramozas.inf.elte.hu:3031");
export default socket;
