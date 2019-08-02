import { Errors } from "./errors"
import { IDatabase } from "../database"

const schemas = {
  Workout: (id, date) => ({ id, date }),
  Allocation: (id, userId, sensorId, sensorIsUserProperty, workoutId) => ({
    id,
    user_id: userId,
    sensor_id: sensorId,
    sensor_is_user_property: sensorIsUserProperty,
    workout_id: workoutId,
  }),
  User: (id, name, age) => ({ id, name, age }),
  Sensor: (id, health, isUserProperty = 0) => ({ id, health, is_user_property: isUserProperty })
}

const records = {
  Workouts: [
    schemas.Workout(1, "20/07/2020"),
  ],
  Allocations: [
    schemas.Allocation(1, 1, 1, true, 1),
    schemas.Allocation(2, 2, 2, true, 1),
    schemas.Allocation(3, 3, 3, true, 1),
    schemas.Allocation(4, 4, 4, false, 1),
    schemas.Allocation(5, 5, 5, false, 1),
  ],
  Users: [
    schemas.User(1, "Markus", 25),
    schemas.User(2, "Julian", 34),
    schemas.User(3, "Said", 45),
    schemas.User(4, "Hamada", 20),
    schemas.User(5, "Sfex", 100),
  ],
  Sensors: [
    schemas.Sensor(1, 1),
    schemas.Sensor(2, 1),
    schemas.Sensor(3, 1),
    schemas.Sensor(4, 1),
    schemas.Sensor(5, 1),
    schemas.Sensor(6, 0, 1),
    schemas.Sensor(7, 1, 1),
  ]
}

const database = {
  records,
}

const get = (recordName: string) => {
  if (recordName in database.records) {
    return database.records[recordName]
  } else throw Errors.UndefinedRecord
}

export const AbstractDatabase: IDatabase = {
  get,
}
