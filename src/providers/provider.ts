export interface IProvider {
  create: () => void,
  register: (endpoint: string, handler: () => void),
  start: () => void,
  stop: () => void,
}
