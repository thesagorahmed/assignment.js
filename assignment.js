// Convert from Kilometer to Meter

function kilometerToMeter(kilo) {
  let meter = kilo * 1000;
  return meter;
}

let meterResult = kilometerToMeter(5);
console.log(meterResult); //meterResult 5000



// Budger Calculator

function budgetCalculator(watch, phone, laptop) {
  var expense = watch * 15 + phone * 10 + laptop * 5;
  return expense;
}

var totalBudget = budgetCalculator(50, 100, 500);

console.log(totalBudget); //totalBudget 4250



// hotelCost

function hotelCost (days){
  var rent = 0;
  if(days <= 10){
    rent = days * 100;
  }else if (days <= 20){
    var firstPart = 10 * 100;
    var remaining = days - 10;
    var secondPart = remaining * 80;
    rent = firstPart + secondPart;
  }else {
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = days - 20;
    var thirdPart = remaining * 50;
    rent = firstPart + secondPart + thirdPart;
  }
  return rent;
}
var totalRent = hotelCost(25);
console.log(totalRent); // totalRent 2050



// megaFriend

function megaFriend(array) {
  var longestWord = "";

  array.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

var word = megaFriend([
  "Shanto",
  "Pranto",
  "Mehedi",
  "Iqbal",
  "Mahmudul",
  "Alamin",
]);
console.log(word); // result is "Mahmudul"
