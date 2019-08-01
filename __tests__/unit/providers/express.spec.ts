import { ExpressProvider } from "../../../src/providers"

describe('Express Provider', () => {
  describe("implements the provider interface", () => {
    it("implements create method", () => {
      expect(
        ExpressProvider
      ).toHaveProperty("create")

      expect(
        ExpressProvider.create
      ).toBeInstanceOf(Function)
    })

    it("implements register method", () => {
      expect(
        ExpressProvider
      ).toHaveProperty("register")

      expect(
        ExpressProvider.register
      ).toBeInstanceOf(Function)
    })
    
    it("implements start method", () => {
      expect(
        ExpressProvider
      ).toHaveProperty("start")

      expect(
        ExpressProvider.start
      ).toBeInstanceOf(Function)
    })

    it("implements stop method", () => {
      expect(
        ExpressProvider
      ).toHaveProperty("stop")

      expect(
        ExpressProvider.stop
      ).toBeInstanceOf(Function)
    })
  })

  describe("behaves correctly", () => {
    it("updates the state properly upon calling create method", () => {
      ExpressProvider.create()
      
      expect(
        ExpressProvider.__state
      ).toHaveProperty("instance")
      
      expect(
        ExpressProvider.__state.instance !== null
      ).toBe(true) // .toNotBe's ts typedef is outdated, this is avoiding compilation errors
    })

    it("updates the state properly upon calling start method", async () => {
      await ExpressProvider.start(3000, () => {})
      
      expect(
        ExpressProvider.__state
      ).toHaveProperty("server")
      
      expect(
        ExpressProvider.__state.server !== null
      ).toBe(true) // .toNotBe's ts typedef is outdated, this is avoiding compilation errors
    })

    it("updates the state properly upon calling stop method", () => {
      ExpressProvider.stop()

      expect(
        ExpressProvider.__state.server
      ).toBe(null)
    })
  })
})
