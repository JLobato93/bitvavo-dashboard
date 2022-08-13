import { Router } from 'express'
import { AccountRoutes } from './account/account-routes'
// import {TradeRoutes} from "./trades/trade-routes";

const router: Router = Router()

router.use('/account', AccountRoutes)
// router.use('/trades', TradeRoutes)

export const MainRouter: Router = router
