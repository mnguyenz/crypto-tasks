import { RestClientV2 } from 'bitget-api';
import { env } from '~config/env.config';

export const BITGET_PUBLIC_CLIENT = new RestClientV2();

export const X_BITGET_CLIENT = new RestClientV2({
    apiKey: env.BITGET.X_API_KEY,
    apiSecret: env.BITGET.X_API_SECRET,
    apiPass: env.BITGET.X_API_PASS
});

export const REDEMPTION_AMOUNT_ACCURACY = 8;
