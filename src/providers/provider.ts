export interface IProvider {
  register: (endpoint: string, handler: () => void)
}
