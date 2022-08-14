import { Router, Request, Response } from 'express';
import { getTrades, setTrades } from './trade-controller';
const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const dbCall = await getTrades();
    console.log(dbCall.length);
    res.send(dbCall);
});

router.post('/', async (req: Request, res: Response) => {
    const dbCall = await setTrades();

    res.send(dbCall);
});
export const TradeRoutes: Router = router;
