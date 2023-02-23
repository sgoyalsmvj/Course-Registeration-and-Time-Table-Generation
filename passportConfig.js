const passport = require("passport");
const { Student } = require("./models/Student");
const LocalStrategy = require('passport-local').Strategy;
exports.intializingPassport = (passport) => {

    passport.use(new LocalStrategy(async (username, passport, done) => {
        try {
            const student = await Student.findOne({username: username });
            if (!student) return done(null, false);
            if (student.password !== password) return done(null, false);
            return done(null, student);
        } catch (error) {
            return done(error, false);
        }
    }))
    passport.serializeUser((student, done) => {
        done(null, student.id);
    })
    passport.deserializeUser(async (id, done) => {
        try {
            const student = await Student.findById(id);
        } catch (error) {
            done(error, false);

        }
    })
};