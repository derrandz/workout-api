import { IResource } from "../resource"

const List = () => {
  return []
}

const Get = () => {
  return {}
}

const Create = () => {
  return {}
}

const Update = () => {
  return {}
}

const Delete = () => {
  return {}
}

const Kickoff = ({ workoutId, usersIds }: {
  workoutId: number,
  usersIds: Array<number>,
}) => {
  return [
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
  ]
}

const Allocations: IResource = {
  name: "allocations",
  methods: {
    List,
    Get,
    Create,
    Update,
    Delete,
    Kickoff,
  },
}

export {
  Allocations,
}
