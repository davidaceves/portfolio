$(document).ready(function () {
  $(".submit").click(function (event) {
    event.preventDefault();

    var name = $(".name").val();
    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");

    statusElm.empty();

    if (!name) {
      statusElm.append("<div>Please enter a name</div>");
    }

    if (email.length < 5 && !email.includes("@") && !email.includes(".")) {
      statusElm.append("<div>Email is not valid</div>");
    }

    if (!subject) {
      statusElm.append("<div>Subject is not valid</div>");
    } else if (subject.length < 2) {
      statusElm.append("Please enter a longer subject");
    }

    if (!message) {
      statusElm.append("<div>Please leave a message</div>");
    }
  });
});
