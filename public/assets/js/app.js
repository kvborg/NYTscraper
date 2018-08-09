// When you click the commentSave button
$(document).on("click", "#commentSave", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  console.log(thisId);
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from note textarea
      body: $("#comment").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#comment").empty();
    });
});
