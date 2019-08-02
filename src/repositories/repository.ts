export interface IRepository {
  list: () => void,
  find: (id: number) => void,
  add: (instance: object) => void,
  edit: (id: number, instance: object) => void,
  deleteById: (id: number) => void,

  [otherMethod: string]: (...args: Array<any>) => void,
}
