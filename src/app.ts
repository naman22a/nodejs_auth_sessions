import express, { Application } from 'express';
import { join } from 'path';
import expressLayouts from 'express-ejs-layouts';
import session from 'express-session';
import { default as connectMongoDBSession } from 'connect-mongodb-session';
const MongoDBSession = connectMongoDBSession(session);

// DOTENV CONFIG
import dotenv from 'dotenv';
dotenv.config();

// TYPES
declare module 'express-session' {
    export interface SessionData {
        isAuth: boolean;
    }
}

const app: Application = express();
const PORT = process.env.PORT ?? 5000;

// IMPORTING ROUTES
import landingRoutes from './routes/landing';
import loginRoutes from './routes/login';
import registerRoutes from './routes/register';
import dashboardRoutes from './routes/dashboard';
import logoutRoutes from './routes/logout';

// DB CONNECTION
import './db/connection';

// STORE
const store = new MongoDBSession({
    uri: process.env.MONGODB_URI ?? '',
    collection: 'sessions'
});

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts);
// Sessions
app.use(session({
    secret: process.env.SECRET ?? '', // genreate it via console.log(require('crypto').randomBytes(48).toString('hex'))
    resave: false,
    saveUninitialized: false,
    store: store
}));

// PATHS
const templatesPath = join(__dirname, '../templates');

// TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', templatesPath);

// ROUTES
app.use('', landingRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/logout', logoutRoutes);

// STARTING THE SERVER
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});