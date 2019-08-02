import { AllocationsRepository, createAllocationsRepository } from "../../../src/repositories"

describe('Allocations Repository', () => {
  describe("implements the repository interface", () => {

    const methods = [
      "list",
      "find",
      "add",
      "edit",
      "deleteById",
    ]

    methods.forEach(
      (methodname) => {

        it(`implements ${methodname} method`, () => {
          expect(
            AllocationsRepository
          ).toHaveProperty(methodname)

          expect(
            AllocationsRepository[methodname]
          ).toBeInstanceOf(Function)
        })

      }
    )

  })

  describe("methods", () => {
    const dbMock = {
      Allocations: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ]
    }
    const AllocationsRepositoryWithMockedDb = createAllocationsRepository({
      get: (recordName: string) => dbMock.Allocations,
    })

    describe("list", () => {
      it("returns a record list of allocations", () => {
        const recordList = AllocationsRepositoryWithMockedDb.list()

        expect(
          recordList
        ).toBeInstanceOf(Array)

        expect(
          recordList
        ).toEqual([
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
        ])
      })
    })

    describe("find", () => {
      it("returns an instance of allocations by id", () => {
        const recordInstance = AllocationsRepositoryWithMockedDb.find(1)

        expect(
          recordInstance
        ).toBeInstanceOf(Array)

        expect(
          recordInstance[0]
        ).toBeInstanceOf(Object)

        expect(
          recordInstance
        ).toEqual([
          { id: 1 },
        ])
      })
    })

    describe("add", () => {
      it("adds a new entry in the record list of allocations", () => {
        const newRecordInstance = AllocationsRepositoryWithMockedDb.add({
          user_id: 1,
        })

        expect(
          AllocationsRepositoryWithMockedDb.find(newRecordInstance[0].id)
        ).toEqual([
          { id: newRecordInstance[0].id, user_id: 1 },
        ])
      })
    })

    describe("edit", () => {
      it("edits a record instance of allocations by id", () => {
        AllocationsRepositoryWithMockedDb.edit(1, {
          id: 100,
        })

        expect(
          AllocationsRepositoryWithMockedDb.find(100)
        ).toEqual([
          { id: 100 },
        ])
      })
    })

    describe("deleteById", () => {
      it("returns a record list of allocations", () => {
        expect(
          AllocationsRepositoryWithMockedDb.deleteById(2)
        ).toEqual(true)

        expect(
          AllocationsRepositoryWithMockedDb.find(2)
        ).toEqual([])
      })
    })

  })
})
