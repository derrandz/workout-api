import * as Express from "express"

import { IProvider } from "../provider"
import { Errors } from "./errors"

const expressHttpMethods = {
  get: 'get',
  post: 'post',
  delete: 'delete',
}

const state = {
  instance: null,
  server: null,
}

const create = () => {
  state.instance = Express()
}

const register = (verb: string, endpoint: string, handler: (request: any, response: any) => void) => {
  if (! (verb in expressHttpMethods)) {
    throw Errors.UndefinedVerb
  }

  state.instance[verb](endpoint, handler)
}

const start = (port: number, cb: () => void) => {
  state.server = state.instance.listen(port, cb)
}

const stop = () => {
  if (state.server) {
    state.server.close()
    state.server = null
  }
}

const ExpressProvider: IProvider = {
  __state: state,
  create,
  register,
  start,
  stop
}

export {
  ExpressProvider,
}
