const firstOrder = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const secondOrder = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

const tenth = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

module.exports = function toReadable(number) {
  if (number < 10) {
    return firstOrder[number];
  }

  if (number < 20) {
    return tenth[number];
  }

  if (number < 100) {
    const tens = Math.floor(number / 10);
    const ones = number % 10;
    return ones === 0
      ? secondOrder[tens]
      : `${secondOrder[tens]} ${firstOrder[ones]}`;
  }

  if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const rest = number % 100;

    if (rest === 0) {
      return `${firstOrder[hundreds]} hundred`;
    }

    return `${firstOrder[hundreds]} hundred ${toReadable(rest)}`;
  }
  return 'shalom';
};
