var exports = (module.exports = {});
exports.home = function(req, res) {
  res.sendFile('index.html');
  console.log("Did the file not load, need to add a path?")
};

exports.notfound = function(req, res) {
//   res.render('404');
console.log("Make a 404 page!");
};

exports.index = function(req, res) {
//   see above comment
  res.sendFile('main.html');
};

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/');
  });
};