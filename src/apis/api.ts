import { IProvider } from "~/providers"

export interface IApi {
  provider: IProvider,
  bootstrap: () => void,
  start: (port: number, cb: Function) => void,
  stop: () => void,
}
