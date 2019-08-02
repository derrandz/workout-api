import { IRepository } from "../repository"
import { IDatabase, AbstractDatabase } from "../../../src/databases"

const list = (database: IDatabase) =>  () => {
  return database.get("Allocations")
}

const find = (database: IDatabase) => (id: number): Array<object> => {
  return database
    .get("Allocations")
    .filter(
      ({ id: allocationId }) => allocationId === id
    )
}

const add = (database: IDatabase) =>  (allocation: object): [object] => {
  const recordList = database.get("Allocations")

  recordList
    .push({
      ...allocation,
      id: recordList.length + 1,
    })

  return database
    .get("Allocations")
    .filter(
      ({ id }) => id === recordList.length
    ) 
}

const edit = (database: IDatabase) =>  (id: number, allocation: object & { id: number }): [object] => {
  const recordList = database.get("Allocations")

  recordList
    .forEach(
      (allocationInDb: object & { id: number }, index: number) => {
        if (allocationInDb.id === id) {
          recordList[index] = allocation
        }
      }
    )

  return database
    .get("Allocations")
    .filter(
      ({ id: allocationId }) => allocationId === id
    ) 
}

const deleteById = (database: IDatabase) => (id: number): boolean => {
  const recordList = database.get("Allocations")

  let indexToDelete = 0

  recordList.forEach(
    ({ id: allocationId }, index) => {
      if (allocationId === id) {
        indexToDelete = index
      }
    } 
  )

  if (indexToDelete !== 0) {
    recordList.splice(indexToDelete, 1)
    return true
  }

  return false
}


const createAllocationsRepository = (database: IDatabase): IRepository => ({
  list: list(database),
  find: find(database),
  add: add(database),
  edit: edit(database),
  deleteById: deleteById(database),
})

const AllocationsRepository: IRepository = createAllocationsRepository(AbstractDatabase)

export {
  AllocationsRepository,
  createAllocationsRepository,
}
