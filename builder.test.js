const { buildFence } = require('./builder');

test('build fence successfully', () => {
    expect(buildFence(1, 5, 6)).toBe(true);
});

test('build fence successfully multiple of both', () => {
    expect(buildFence(2, 2, 6)).toBe(true);
});

test('build fence unsuccessfully', () => {
    expect(buildFence(0, 2, 4)).toBe(false);
});

test('build fence unsuccessfully only small pieces', () => {
    expect(buildFence(2, 0, 4)).toBe(false);
});

test('build fence unsuccessfully negative input', () => {
    expect(buildFence(-1, 1, 4)).toBe(false);
});

test('build fence unsuccessfully zero input', () => {
    expect(buildFence(0, 0, 0)).toBe(false);
});