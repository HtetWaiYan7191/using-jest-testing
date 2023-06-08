describe('string check', () => {
    describe('check if includes I or not in team', () => {
        it('if there is no I in team it should pass', () => {
            expect('team').not.toMatch(/I/)
        })
    })
    
})


test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });