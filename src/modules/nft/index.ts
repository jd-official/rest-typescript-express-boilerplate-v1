import nftRouter from "./routes"
import type {Express}  from "express"

export default {
    init: (app:Express) => {
        app.use("/api/v1/nft", nftRouter)
        console.log("[module]: nft module successfully loaded")
      }
}