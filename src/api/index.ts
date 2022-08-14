import { Router } from 'express'
import { AccountRoutes } from './account/account-routes'
import {TradeRoutes} from "./trades/trade-routes";
import { CurrencyRoutes } from './currencies/currency-routes';
const router: Router = Router()

router.use('/account', AccountRoutes)
router.use('/trades', TradeRoutes)
router.use('/currencies', CurrencyRoutes)

export const MainRouter: Router = router
