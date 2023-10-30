import express from 'express';
import passport from 'passport';
import session from 'express-session';
import userRoutes from './modules/user/routes/userRoutes';
import './config/passportConfig'; 

const app = express();

app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});