describe('hellotest', () => {

  let expected = '';
  let notExpected = '';
  beforeEach(() => {
    expected = 'hellotest';
    notExpected = 'hasdfşl';
  });

  afterEach(() => {

  });
  it('checks if hellotest is hellotests', () => {
    expect('hellotest').toBe(expected);
  });
  it('chechs if hallotest is not hellotests', () => {
    expect('hellotest').not.toBe(expected)
  })
});
