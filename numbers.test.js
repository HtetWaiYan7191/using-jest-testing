test('2 + 2 equal to four', () => {
    expect(2+2).toBeGreaterThan(3);
    expect(2+2).toBeGreaterThanOrEqual(2);
    expect(2+2).not.toBe(0);
    expect(2+2).toBeDefined();
    expect(2+2).toBeLessThan(5);
})