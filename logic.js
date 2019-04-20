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
      
      // New Push Code
      database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate,
        dateAdded: firebase.database.servervalue.TIMESTAMP
      });
    });
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(childSnapshot) {
      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val());
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().role);
      console.log(childSnapshot.val().startDate);
      console.log(childSnapshot.val().rate);
    });
    $("#full-member-list").append("<tr class='well'><td class='member-name'> " +
        childSnapshot.val().name +
        " </td><td class='member-role'> " + childSnapshot.val().role +
        " </td><td class='member-startDate'> " + childSnapshot.val().startDate +
        " </td><td class='member-rate'> " + childSnapshot.val().rate +
        " </td></tr");

  // Handle the errors

      // Change the HTML to reflect
      dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      $("#name-display").text(snapshot.val().name);
      $("#role-display").text(snapshot.val().role);
      $("#startDate-display").text(snapshot.val().startDate);
      $("#rate-display").text(snapshot.val().rate);
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });