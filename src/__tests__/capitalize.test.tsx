import { capitalize } from '@/utils/capitalizeFirst';

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('foo bar baz')).toBe('Foo bar baz');
  });

  it('returns an empty string if given an empty string', () => {
    expect(capitalize('')).toBe('');
  });
});
