firebase.initializeApp(config);
var database = firebase.database();
    // Initial Values
    var name = "";
    var role = "";
    var startDate = "";
    var rate = "";
    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();
      name = $("#name-input").val().trim();
      role = $("#role-input").val().trim();
      startDate = $("#startDate-input").val().trim();
      rate = $("#rate-input").val().trim();
      database.ref().set({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
      });
    });
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {
      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().role);
      console.log(snapshot.val().startDate);
      console.log(snapshot.val().rate);
      // Change the HTML to reflect
      $("#name-display").text(snapshot.val().name);
      $("#role-display").text(snapshot.val().role);
      $("#startDate-display").text(snapshot.val().startDate);
      $("#rate-display").text(snapshot.val().rate);
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });