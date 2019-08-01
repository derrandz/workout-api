export interface IResource {
  name: string,
  methods: {
    [method: string]: IResourceMethod,
  }
}

export type IResourceMethod = (...args: Array<any>) => void
