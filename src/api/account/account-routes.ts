import { Router } from 'express';
import { Request, Response } from 'express';
import { initializeAccount } from './account-controller';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    let newAccount = await initializeAccount();

    res.send(newAccount);
});

export const AccountRoutes: Router = router;
