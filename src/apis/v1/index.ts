import { ExpressProvider } from "../../providers"
import { Allocations } from "../../resources"
import { IApi } from "../api"

const bootstrap = () => {
  ExpressProvider.create()

  ExpressProvider.register(
    "get",
    "/api/v1/health",
    (request: any, response) => {
      response.send(204, {
        message: "Okay"
      })
    }
  )

  ExpressProvider.register(
    "post",
    `/api/v1/${Allocations.name}/kickoff`,
    (request: any, response: any) => {
      const result = Allocations.methods.kickoff({
        workoutId: request.body.workoutId,
        usersIds: request.body.usersIds,
      })

      response.send(200, {
        data: result,
      })
    }
  )
}

const start = (port: number, cb: Function) => {
  ExpressProvider.start(port, cb)
}

const stop = () => {
  ExpressProvider.stop()
}

const v1: IApi = {
  provider: ExpressProvider,
  bootstrap,
  start,
  stop,
}

export {
  v1,
}
