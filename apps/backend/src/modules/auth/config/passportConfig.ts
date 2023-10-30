import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../../user/models/UserModel';
import bcrypt from 'bcryptjs';

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user || !await bcrypt.compare(password, user.password)) {
        return done(null, false, { message: 'Incorrect credentials.' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user: any, done) => { done(null, user.id); });
passport.deserializeUser((id: any, done) => {/* ... */});
