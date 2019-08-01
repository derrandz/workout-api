import express from "express"

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
  state.instance = express()
}

const register = (verb: string, endpoint: string, handler: () => void) => {
  if (! (verb in expressHttpMethods)) {
    throw Errors.UndefinedVerb
  }

  state.instance[HTTP_VERB](endpoint, handler)
}

const start = (port: number, cb: () => void) => {
  state.server = state.instance.listen(port, cb)
}

const stop = () => {
  if (state.server) {
    state.instance..stop()
  }
}

const Express = {
  create,
  register,
  start,
  stop
}
