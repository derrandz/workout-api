import { SocketProvider } from "../../../src/providers"

describe('Socket Provider', () => {
  describe("implements the provider interface", () => {
    it("implements create method", () => {
      expect(
        SocketProvider
      ).toHaveProperty("create")

      expect(
        SocketProvider.create
      ).toBeInstanceOf(Function)
    })

    it("implements listen method", () => {
      expect(
        SocketProvider
      ).toHaveProperty("listen")

      expect(
        SocketProvider.listen
      ).toBeInstanceOf(Function)
    })
    
    it("implements start method", () => {
      expect(
        SocketProvider
      ).toHaveProperty("start")

      expect(
        SocketProvider.start
      ).toBeInstanceOf(Function)
    })

    it("implements stop method", () => {
      expect(
        SocketProvider
      ).toHaveProperty("stop")

      expect(
        SocketProvider.stop
      ).toBeInstanceOf(Function)
    })
  })

  describe("behaves correctly", () => {
    it("updates the state properly upon calling create method", () => {
      SocketProvider.create()
      
      expect(
        SocketProvider.__state
      ).toHaveProperty("httpServer")
      
      expect(
        SocketProvider.__state.httpServer !== null
      ).toBe(true) // .toNotBe's ts typedef is outdated, this is avoiding compilation errors
      
      expect(
        SocketProvider.__state
      ).toHaveProperty("socketInstance")
      
      expect(
        SocketProvider.__state.socketInstance !== null
      ).toBe(true) // .toNotBe's ts typedef is outdated, this is avoiding compilation errors
    })

    it("updates the state properly upon calling start method", async () => {
      await SocketProvider.start(3000, () => {})
      
      expect(
        SocketProvider.__state
      ).toHaveProperty("httpServerInstance")
      
      expect(
        SocketProvider.__state.httpServerInstance !== null
      ).toBe(true) // .toNotBe's ts typedef is outdated, this is avoiding compilation errors
    })

    it("updates the state properly upon calling stop method", () => {
      SocketProvider.stop()

      expect(
        SocketProvider.__state.httpServerInstance
      ).toBe(null)
    })
  })
})
