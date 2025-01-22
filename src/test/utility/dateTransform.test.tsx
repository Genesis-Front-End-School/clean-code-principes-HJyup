import { dateTransform } from '@/utility';

import '@testing-library/jest-dom';

describe('Describe date transform utility function', () => {
  it('It should return correct value', () => {
    const inputDate = new Date('2023-05-03T00:00:00.000Z');
    const expectedOutput = '2023/4/3';
    const output = dateTransform(inputDate);
    expect(output).toEqual(expectedOutput);
  });
});
