$(document).ready(function() {
  var sum = 0;
  $('.calc').click(function() {
    sum = 0;
    calculateSum();

    function calculateSum() {
      $(".hour").each(function() {
        if (!isNaN(this.value) && this.value.length !== 0) {
          sum += parseInt(this.value);
        }
      });
      $(".sum").html(sum);
    }
  });
  $('.reset').click(function() {
    $(".sum").html(0);
    sum = 0;
  });
  $('.submit').click(function() {
    var overTime = (sum - 40);
    $(".over-time").html(overTime);
    if (sum > 40 && sum <= 60) {
      $('#over40').modal();
    } else if (sum > 60) {
      $('#over60').modal();
    } else {
      $('#under40').modal();
    }
  });
});
