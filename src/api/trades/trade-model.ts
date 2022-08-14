export interface Trade{
    id: string;
    timestamp: Date;
    orderId: string;
    market: string;
    side: string;
    price: string;
    amount: string;
    fee: string;
    feeCurrency: string;
    taker:boolean
    settled:boolean
}

export interface TradeCurrency {
    [key: string]: Trade[];
}
