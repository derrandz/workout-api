import { AbstractDatabase } from "../../../src/databases"

describe('Abstract Database', () => {
  describe("implements the database interface", () => {
    it("implements get method", () => {
      expect(
        AbstractDatabase.get
      ).toBeInstanceOf(Function)
    })
  })

  describe("retrieves Workouts record properly", () => {
    it("record list is an array of workouts", () => {
      const workoutsRecordList = AbstractDatabase.get("Workouts")

      expect(
        workoutsRecordList
      ).toBeInstanceOf(Array)

      expect(
        workoutsRecordList[0]
      ).toHaveProperty("id")

      expect(
        workoutsRecordList[0]
      ).toHaveProperty("date")
    })
  })

  describe("retrieves Allocations record properly", () => {
    it("record list is an array of allocations", () => {
      const allocationsRecordList = AbstractDatabase.get("Allocations")

      expect(
        allocationsRecordList
      ).toBeInstanceOf(Array)

      const properties = [ "id", "user_id", "sensor_id", "sensor_is_user_property", "workout_id" ]
      
      properties.forEach(
        (property: string) => {
          expect(
            allocationsRecordList[0]
          ).toHaveProperty(property)
        }
      )
    })
  })

  describe("retrieves Users record properly", () => {
    it("record list is an array of users", () => {
      const usersListRecord = AbstractDatabase.get("Users")

      expect(
        usersListRecord
      ).toBeInstanceOf(Array)

      const properties = [ "id", "age", "name" ]
      
      properties.forEach(
        (property: string) => {
          expect(
            usersListRecord[0]
          ).toHaveProperty(property)
        }
      )
    })
  })

  describe("retrieves Sensors record properly", () => {
    it("record list is an array of sensors", () => {
      const sensorsRecordList = AbstractDatabase.get("Sensors")

      expect(
        sensorsRecordList
      ).toBeInstanceOf(Array)

      const properties = [
        "id",
        "health",
        "is_user_property"
      ]
      
      properties.forEach(
        (property: string) => {
          expect(
            sensorsRecordList[0]
          ).toHaveProperty(property)
        }
      )
    })

  })
})
