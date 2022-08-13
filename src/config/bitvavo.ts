import 'dotenv/config';

export const Bitvavo = require('bitvavo')().options({
    APIKEY: process.env.API_KEY,
    APISECRET: process.env.API_SECRET,
});
