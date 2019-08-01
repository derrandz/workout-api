export interface IProvider {
  create: () => void,
  register: (verb: string, endpoint: string, handler: (request: any, response: any) => void) => void,
  start: (port: number, callback: Function) => void,
  stop: () => void,

  // internal properties
  [i: string]: any,
}
