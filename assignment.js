// feetToMile
function feetToMile(feet) {
  if (feet <= 0) {
    alert('Please enter a valid number');
  }
  var result = feet * 0.000189394;
  return result.toFixed(8);
}

// woodCalculator
function woodCalculator(chair, table, bed) {
  var chairWood = chair * 1;
  var tableWood = table * 3;
  var bedWood = bed * 5;
  return chairWood + tableWood + bedWood;
}

// brickCalculator

// tinyFriend
function tinyFriend(friend) {
  var tiniest = friends[0];
  for (var i = 0; i < friends.length; i++) {
    var currentVal = friends[i];
    if (currentVal.length < tiniest.length) {
      tiniest = currentVal;
    }
  }
  return tiniest;
}
