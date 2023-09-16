import userRouter  from "./routes"
import type {Express}  from "express"

export default {
    init: (app:Express) => {
        app.use("/api/v1/user", userRouter)
        console.log("[module]: user module successfully loaded")
      }
}