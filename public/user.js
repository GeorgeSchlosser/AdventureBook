
$("#btnCreateUser").on("click", function (event) {
  event.preventDefault();
  var newUserName = $("#new-user-name").val().trim();
  var newUserPassword = $("#new-user-pw").val().trim();
  var verifyPassword = $("#verfiy-pw").val().trim();

  if (!newUserName || !newUserPassword || !verifyPassword) {
    return alert("Please answer all questions");
  }

  else if (newUserPassword != verifyPassword) {
    alert("Password does not match!")
  } 
  
  else {
console.log("hello")
    // Make a newUser object
    var newUser = {
      user_name: $("#new-user-name").val().trim(),
      password: $("#new-user-pw").val().trim(),
    };

    $.post("/api/new", newUser)
      .then(function (data) {

        console.log(data);
      });

    $("#new-user-name").val("");
    $("#new-user-pw").val("");
  }
});
