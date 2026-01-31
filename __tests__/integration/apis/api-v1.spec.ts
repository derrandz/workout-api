import * as mockApi from "supertest"

import { v1 } from "../../../src/apis"

describe("/api/v1", () => {
  let v1Client = null

  beforeAll(
    () => {
      v1.bootstrap()
      v1Client = mockApi(v1.provider.__state.instance)
    }
  )

  describe("/allocations", () => {
    describe("/kickoff", () => {

      it("kicks assigns users to the available sensors", async () => {
        await v1Client
          .post('/api/v1/allocations/kickoff', {
            body: {
              workoutId: 1,
              usersIds: [
                12312,
                1231232,
                123123,
                123123,
              ]
            }
          }).expect(200)
      })
    })
  })
})