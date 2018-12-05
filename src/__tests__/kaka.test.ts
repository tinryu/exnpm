import { SayHello } from '../index';

test('My Say Test', () => {
  expect(SayHello('Justin')).toBe('Hello Justin');
});
