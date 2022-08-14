import { db } from '../../config/db';
import { getBalance } from '../account/account-controller';
import { Balance } from '../account/account-model';

const setPossessedCurrencies = async function () {
    const currencies = await allPossessedCurrencies();

    try {
        return await db.collection('currencies').add({
            currencies: currencies,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const getPossessedCurrencies = async function () {
    const collection = db.collection('currencies');
let currencies: string[] = [];
    try {
         await collection.get().then((snapshot) => {
             currencies = snapshot.docs[0].data().currencies;
         });
    } catch (err) {
        console.log(err);
        throw err;
    }
    return currencies;
};

const allPossessedCurrencies = async function (): Promise<string[]> {
    const allCurrencies = await getBalance();
    let currencyNames: string[] = [];

    allCurrencies.forEach((currency: Balance) => {
        if (currency.symbol !== 'EUR') {
            currencyNames.push(currency.symbol);
        }
    });
    return currencyNames;
};

export { getPossessedCurrencies,setPossessedCurrencies };
