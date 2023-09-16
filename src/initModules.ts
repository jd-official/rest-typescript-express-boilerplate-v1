import userModule from "./modules/user"
import nftModule from "./modules/nft"
import productModule from "./modules/product"
import orderModule from "./modules/order"
import type {Express} from "express"

// author : jaali.dev
export default {
    init: (app:Express):void => {
    userModule.init(app)
    nftModule.init(app)
    productModule.init(app)
    orderModule.init(app)
    }
}