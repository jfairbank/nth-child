import test from 'tape';
import { parseNumber, getEquation } from './nth-child';

test('parsing', t => {
  t.test('parses positive integers', st => {
    st.equal(parseNumber('1'), 1);
    st.equal(parseNumber(1),   1);
    st.equal(parseNumber('2'), 2);
    st.equal(parseNumber(2),   2);

    st.end();
  });

  t.test('throw for non positive integers', st => {
    st.throws(() => parseNumber('0'));
    st.throws(() => parseNumber(0));
    st.throws(() => parseNumber('-1'));
    st.throws(() => parseNumber(-1));

    st.end();
  });

  t.test('throws for non numbers', st => {
    st.throws(() => parseNumber(null));
    st.throws(() => parseNumber(undefined));
    st.throws(() => parseNumber({}));
    st.throws(() => parseNumber([]));
    st.throws(() => parseNumber(''));
    st.throws(() => parseNumber(true));
    st.throws(() => parseNumber(false));

    st.end();
  });
});

test('generating an equation', t => {
  t.test('calculates the positive nth-child selector', st => {
    st.equal(getEquation(1, 2), 'n + 1', 'returning an equation with implied coeff');
    st.equal(getEquation(2, 4), '2n + 2', 'returning an equation with explicit coeff');
    st.equal(getEquation(1, 1), '1', 'returning a constant');

    st.end();
  });

  t.test('calculates the negative nth-child selector', st => {
    st.equal(getEquation(2, 1), '-n + 2', 'returning an equation with implied coeff');
    st.equal(getEquation(4, 2), '-2n + 4', 'returning an equation with explicit coeff');

    st.end();
  });

  t.test('errors on non positive numbers', st => {
    testThrowsForAnyOf(st, 0, 'zero');
    testThrowsForAnyOf(st, -1, 'negative');

    st.end();
  });

  t.test('errors on non numbers', st => {
    testThrowsForAnyOf(st, null, 'null');
    testThrowsForAnyOf(st, undefined, 'undefined');
    testThrowsForAnyOf(st, {}, '{}');
    testThrowsForAnyOf(st, [], '[]');
    testThrowsForAnyOf(st, '', 'empty string');
    testThrowsForAnyOf(st, true, 'true');
    testThrowsForAnyOf(st, false, 'false');

    st.end();
  });
});

function testThrowsForAnyOf(t, value, name) {
  t.throws(() => getEquation(value, value), `both ${name}`);
  t.throws(() => getEquation(value, 1), `first ${name}`);
  t.throws(() => getEquation(1, value), `second ${name}`);
}
