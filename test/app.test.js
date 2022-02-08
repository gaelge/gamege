const app = require('../src/app');

test('Nombre de tentatives', async () => {
    const data = await app.setAttemptCount(1);
    expect(data).toBe(5);
});