export interface IProvider {
  start: () => void,
  stop: () => void,
  register: (endpoint: string, handler: () => void)
}
