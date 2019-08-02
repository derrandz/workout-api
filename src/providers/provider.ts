export interface IProvider {
  create: () => any,
  register?: (
    verb: string,
    endpoint: string,
    handler: (request: any, response: any) => void
  ) => void,
  listen?: (event: string, handler: (...args: Array<any>) => void) => void,
  start: (port: number, callback: Function) => void,
  stop: () => void,

  // internal propertiesw
  [i: string]: any,
}
