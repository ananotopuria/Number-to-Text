function converter(number) {
  const dictionary = {
    1: `ერთი`,
    2: `ორი`,
    3: `სამი`,
    4: `ოთხი`,
    5: `ხუთი`,
    6: `ექვსი`,
    7: `შვიდი`,
    8: `რვა`,
    9: `ცხრა`,
    10: `ათი`,
    11: `თერთმეტი`,
    12: `თორმეტი`,
    13: `ცამეტი`,
    14: `თოთხმეტი`,
    15: `თხუთმეტი`,
    16: `თექვსმეტი`,
    17: `ჩვიდმეტი`,
    18: `თვრამეტი`,
    19: `ცხრამეტი`,
    20: `ოცი`,
    40: `ორმოცი`,
    60: `სამოცი`,
    80: `ოთხმოცი`,
    100: `ასი`,
    1000000: `მილიონი`,
    1000000000: `მილიარდი`,
  };

  var finalString = ``;

  if (
    Object.keys(dictionary).find((obj) => {
      return obj == number;
    })
  ) {
    finalString = dictionary[number];
  } else {
    if (number > 20 && number < 100) {
      finalString +=
        converter(number - (number % 20)).slice(0, -1) +
        `და` +
        converter(number % 20);
    } else if (number > 100 && number < 1000) {
      var prefix = ``;
      if (Math.floor(number / 100) > 1) {
        if (
          converter(Math.floor(number / 100))[
            converter(Math.floor(number / 100)).length - 1
          ] == `ი`
        ) {
          prefix = converter(Math.floor(number / 100)).slice(0, -1);
        } else {
          prefix = converter(Math.floor(number / 100));
        }
      }
      if (number % 100 == 0) {
        finalString += prefix + converter(100);
      } else {
        finalString +=
          prefix + converter(100).slice(0, -1) + converter(number % 100);
      }
    } else if (number >= 1000 && number < 1000000) {
      if (number / 100 == 10) {
        finalString +=
          converter(number / 100).slice(0, -1) + converter(number / 10);
      } else {
        if (number % 1000 == 0) {
          finalString += converter(number / 1000) + converter(1000);
        } else {
          finalString +=
            converter(number - (number % 1000)).slice(0, -1) +
            converter(number % 1000);
        }
      }
    } else if (number >= 1000000 && number < 1000000000) {
      if (number % 1000000 == 0) {
        finalString += converter(number / 1000000) + converter(1000);
      } else {
        finalString +=
          converter(number - (number % 1000000)).slice(0, -1) +
          converter(number % 1000000);
      }
    } else if (number >= 1000000000 && number < 1000000000000) {
      if (number % 1000000000 == 0) {
        finalString += converter(number / 1000000000) + converter(1000);
      } else {
        finalString +=
          converter(number - (number % 1000000000)).slice(0, -1) +
          converter(number % 1000000000);
      }
    }
  }
  return finalString;
}

console.log(converter(14));
console.log(converter(32));
console.log(converter(99));
console.log(converter(100));
console.log(converter(101));
console.log(converter(105));
console.log(converter(120));
console.log(converter(155));
console.log(converter(178));
console.log(converter(200));
console.log(converter(250));
console.log(converter(278));
console.log(converter(580));
console.log(converter(876));
console.log(converter(912));
console.log(converter(117));
console.log(converter(227));
console.log(converter(727));
console.log(converter(1000));
console.log(converter(1100));
console.log(converter(1001));
console.log(converter(2000));
console.log(converter(20000));
console.log(converter(30000));
console.log(converter(40000));
console.log(converter(50000));
console.log(converter(60000));
console.log(converter(90000));
console.log(converter(999999));
console.log(converter(999999999));
