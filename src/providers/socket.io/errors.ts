export const UndefinedSocketInstance = new Error("Socket Provider: the socket instance is undefined, make sure you called create method")
export const UndefinedHttpServer = new Error("Socket Provider: the http server is undefined, make sure you called create method")
export const UndefinedHttpServerInstance = new Error("Socket Provider: the http server instance is undefined, make sure you call start method to start the server before you attempt closing it")

export const Errors = {
  UndefinedSocketInstance,
  UndefinedHttpServer,
  UndefinedHttpServerInstance,
}
