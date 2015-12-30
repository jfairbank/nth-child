export function parseNumber(n) {
  n = parseInt(n, 10);

  if (Number.isNaN(n) || n < 1) {
    throw new Error('Child numbers must be positive integers');
  }

  return n;
}

export function getEquation(n1, n2) {
  n1 = parseNumber(n1);
  n2 = parseNumber(n2);

  const a = n2 - n1;
  let n;

  if (a === 0) {
    return '' + n1;
  }

  if (a === +1) {
    n = 'n ';
  } else if (a === -1) {
    n = '-n ';
  } else {
    n = a + 'n ';
  }

  return n + '+ ' + n1;
}
