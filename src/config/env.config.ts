import dotenv from 'dotenv';
dotenv.config();

export const env = {
    APP_PORT: process.env.APP_PORT || 4001,
    ROOT_PATH: process.cwd(),
    DATABASE: {
        CONNECT: process.env.DATABASE_CONNECT as any,
        HOST: process.env.DATABASE_HOST,
        PORT: Number(process.env.DATABASE_PORT),
        USER: process.env.DATABASE_USER,
        PASSWORD: process.env.DATABASE_PASSWORD,
        NAME: process.env.DATABASE_NAME,
        DATABASE_CA_PEM: process.env.DATABASE_CA_PEM
    },
    BITGET: {
        X_API_KEY: process.env.X_BITGET_API_KEY,
        X_API_SECRET: process.env.X_BITGET_API_SECRET,
        X_API_PASS: process.env.X_BITGET_API_PASS
    }
};
