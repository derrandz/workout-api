import * as SocketIo from "socket.io"

import { IProvider } from "../provider"
import { createServer } from "http"
import { Errors } from "./errors"

const state = { 
  httpServer: null,
  httpServerInstance: null,
  socketInstance: null,
}

const create = () => {
  state.httpServer = createServer(),
  state.socketInstance = SocketIo(state.httpServer)
}

const listen = (event: string, handler: (...args: Array<any>) => void) => {
  if (!state.socketInstance) {
    throw Errors.UndefinedSocketInstance
  }

  state.socketInstance.on(event, handler)
}

const start = (port: number, cb: Function) => {
  if (!state.httpServer) {
    throw Errors.UndefinedHttpServer
  }

  state.httpServerInstance = state.httpServer.listen(port, cb)
}

const stop = () => {
  if (!state.httpServerInstance) {
    throw Errors.UndefinedHttpServerInstance
  }

  state.httpServerInstance.close()
  state.httpServerInstance = null
}

const SocketProvider: IProvider = {
  __state: state,
  create,
  listen,
  start,
  stop,
}

export {
  SocketProvider,
}
