import { splitDuration } from '@/utility';

import '@testing-library/jest-dom';

describe('Describe splitDuration', () => {
  it('It should split the duration into minutes and seconds', () => {
    expect(splitDuration(123)).toEqual([2, 3]);
    expect(splitDuration(60)).toEqual([1, 0]);
    expect(splitDuration(3661)).toEqual([61, 1]);
  });
});
