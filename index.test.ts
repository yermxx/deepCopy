import { add } from './index';
describe('test - add', () => {
  test('add', () => {
    const sum = add(1, 3);
    expect(sum).toBe(4);
  });
});
