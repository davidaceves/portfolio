$(document).ready(function () {
  $(".submit").click(function (event) {
    var name = $(".name").val();
    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");

    statusElm.empty();

    if (!name) {
      event.preventDefault();
      statusElm.append("<div>Please enter a name</div>");
    }

    if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
      event.preventDefault();
      statusElm.append("<div>Email is not valid</div>");
    }

    if (!subject) {
      event.preventDefault();
      statusElm.append("<div>Please enter a subject</div>");
    } else if (subject.length < 2) {
      event.preventDefault();
      statusElm.append("Please enter a longer subject");
    }

    if (!message) {
      event.preventDefault();
      statusElm.append("<div>Please leave a message</div>");
    }
  });
});
