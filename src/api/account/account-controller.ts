import { Bitvavo } from '../../config/bitvavo';
import { Account, Balance, Transaction } from './account-model';

const getBalance = async function (): Promise<Balance[]> {
    try {
        return await Bitvavo.balance();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const getDepositHistory = async function (): Promise<Transaction[]> {
    try {
        return await Bitvavo.depositHistory();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const getWithdrawalHistory = async function (): Promise<Transaction[]> {
    try {
        return await Bitvavo.withdrawalHistory();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const initializeAccount = async function (): Promise<Promise<Account> | string> {
    const balance = await getBalance();
    let account = new Account();

    account.cash = getEuroBalance(balance);
    account.totalDeposited = await totalTransaction('EUR', getDepositHistory());
    account.totalWithdrawn = await totalTransaction('EUR', getWithdrawalHistory());
    account.totalInvested = totalInvested(account.totalDeposited, account.totalWithdrawn);
    account.currencies = balance;
    return account;
};

const getEuroBalance = function (balance: Balance[]) {
    const euroBalance = balance.find((b) => b.symbol === 'EUR');
    if (euroBalance) {
        return euroBalance.available;
    } else {
        return '0';
    }
};

const totalTransaction = async function (
    symbol: string,
    dataCall: Promise<Transaction[]>
) {
    const data = await dataCall;
    let total = 0;
    data.forEach((item: Transaction) => {
        if (item.symbol === symbol) {
            total += +item.amount;
        }
    });
    return total + '';
};

const totalInvested = function (deposited: string, withdrawn: string): string {
    return +deposited - +withdrawn + '';
};

export { initializeAccount, getBalance };
