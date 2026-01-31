import { Allocations } from "../../../src/resources"

describe('Allocations Resource', () => {
  describe("implements the resources interface", () => {
    it("has a name", () => {
      expect(
        Allocations
      ).toHaveProperty("name")

      expect(
        typeof Allocations.name === "string"
      ).toBe(true)
    })

    it("defines methods", () => {
      expect(
        Allocations
      ).toHaveProperty("methods")

      expect(
        Allocations.methods
      ).toBeInstanceOf(Object)
    })
  })

  describe("methods", () => {
    describe("List", () => {
      it("is defined", () => {
        expect(
          Allocations.methods.List
        ).toBeInstanceOf(Function)
      })

      it("returns a list of allocations", () => {
        expect(
          Allocations.methods.List()
        ).toBeInstanceOf(Array)
      })
    })

    describe("Get", () => {
      it("is defined", () => {
        expect(
          Allocations.methods.Get
        ).toBeInstanceOf(Function)
      })

      it("returns the requested instance of allocations", () => {
        expect(
          Allocations.methods.Get(1)
        ).toBeInstanceOf(Object)
      })
    })

    describe("Create", () => {
      it("is defined", () => {
        expect(
          Allocations.methods.Create
        ).toBeInstanceOf(Function)
      })

      it("create an instance of allocations", () => {
        expect(
          Allocations.methods.Create()
        ).toBeInstanceOf(Object)
      })
    })

    describe("Update", () => {
      it("is defined", () => {
        expect(
          Allocations.methods.Update
        ).toBeInstanceOf(Function)
      })

      it("updates the provided instance of allocations", () => {
        expect(
          Allocations.methods.Update(1)
        ).toBeInstanceOf(Object)
      })
    })

    describe("Delete", () => {
      it("is defined", () => {
        expect(
          Allocations.methods.Delete
        ).toBeInstanceOf(Function)
      })

      it("deletes the provided instance of allocations", () => {
        expect(
          Allocations.methods.Delete(1)
        ).toBeInstanceOf(Object)
      })
    })

    describe("Kickoff", () => {
      it("is defined", () => {
        expect(
          Allocations.methods.Kickoff
        ).toBeInstanceOf(Function)
      })

      it("allocates sensors to users correctly", () => {
        expect(
          Allocations.methods.Kickoff({
            workoutId: 1,
            usersIds: [
              1, 2, 3, 4, 5
            ]
          })
        ).toEqual([
          {
            userId: 1,
            sensorId: 1,
          },
          {
            userId: 2,
            sensorId: 2,
          },
          {
            userId: 3,
            sensorId: 3,
          },
          {
            userId: 4,
            sensorId: 4,
          },
        ])
      })
    })
  })
})
