console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $(".add").change(function() {
    var left = $("#left").val();
    var right = $("#right").val();

    total = Number(left) + Number(right);

    $("#total").val(total);
  })
})
