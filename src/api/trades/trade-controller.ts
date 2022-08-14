import { Bitvavo } from '../../config/bitvavo';
import { Trade } from './trade-model';
import { db } from '../../config/db';
import { getPossessedCurrencies } from '../currencies/currency-controller';

const getTrades = async function () {
    let trades: any[] = [];
    try {
        const snapshot = await db.collection('trades').get();
        snapshot.forEach((doc) => {
            trades.push(doc.data());
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
    return trades;
};

const setTrades = async function () {
    const currencies = await getPossessedCurrencies();
    currencies.forEach((currency: string) => {
        let market = currency + '-EUR';
        getTradesPerCurrency(market).then((trades: Trade[]) => {
            db.collection('trades')
                .doc(market)
                .set({ [market]: trades });
        });
    });
};

const getTradesPerCurrency = async function (currency: string): Promise<Trade[]> {
    try {
        return await Bitvavo.trades(currency);
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export { setTrades, getTrades };
