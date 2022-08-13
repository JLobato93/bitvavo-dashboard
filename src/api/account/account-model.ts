export class Account {
    private _cash!: string;
    private _currencies!: Balance[];
    private _totalWithdrawn!: string;
    private _totalDeposited!: string;
    private _totalInvested!: string;
    private _profit?: string;
    set cash(balance: string) {
        this._cash = balance;
    }
    get cash(): string {
        return this._cash;
    }
    set totalWithdrawn(totalWithdrawn: string) {
        this._totalWithdrawn = totalWithdrawn;
    }
    get totalWithdrawn(): string {
        return this._totalWithdrawn;
    }
    set totalDeposited(totalDeposited: string) {
        this._totalDeposited = totalDeposited;
    }
    get totalDeposited(): string {
        return this._totalDeposited;
    }

    set currencies(currencies: Balance[]) {
        this._currencies = currencies;
    }

    get currencies(): Balance[] {
        return this._currencies;
    }
    // set profit(profit: string) {
    //     this._profit = profit;
    // }
    // get profit(): string {
    //     return this._profit;
    // }

    get totalInvested(): string {
        return this._totalInvested;
    }
    set totalInvested(totalInvested: string) {
        this._totalInvested = totalInvested;
    }
}

export interface Balance {
    symbol: string;
    available: string;
    inOrders: string;
}

export interface Transaction {
    timestamp: Date;
    symbol: string;
    amount: string;
    address: string;
    fee: string;
    paymentId?: string;
    transactionId?: string;
    status?: string;
}
