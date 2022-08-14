import { Router, Request, Response } from 'express';
import { getPossessedCurrencies, setPossessedCurrencies } from './currency-controller';
const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const currencies = await getPossessedCurrencies();
    res.send(currencies);
});

router.post('/', async (req: Request, res: Response) => {
    const currencies = await setPossessedCurrencies();
    res.send(currencies);
});

export const CurrencyRoutes: Router = router;
