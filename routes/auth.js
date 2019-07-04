var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport, models) {
  app.get('/', authController.home);

  app.get('/main', authController.index);

  app.get('/logout', authController.logout);

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/main',
      failureRedirect: '/'
    })
  );

  app.post(
    '/signin',
    passport.authenticate('local-signin', {
      successRedirect: '/main',
      failureRedirect: '/'
    })
  );

  //If user not logged in then redirect to signin page
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/');
  }

  app.get('*', authController.notfound);
};
