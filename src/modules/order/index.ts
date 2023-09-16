import orderRouter  from "./routes"
import type {Express}  from "express"

export default {
    init: (app:Express) => {
        app.use("/api/v1/order", orderRouter)
        console.log("[module]: order module successfully loaded")
      }
}