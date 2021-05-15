import Characters from '../characters';


test.each([
  ['name', 'bb', 'bb'],
  ['name', 'bbb', 'bbb'],
  ['name', 'bbbbbbbbbb', 'bbbbbbbbbb'],
])(
  ('Проверка валидности имени %s arg пользователя %s name'),
  (arg, name, thisName) => {
    const characters = {
      name: thisName,
      type: 'Bowman',
      helse: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(new Characters(name, 'Bowman')).toEqual(characters);
  },
);

test.each([
  ['name', 'b', 'b'],
  ['name', 'bbbbbbbbbbb', 'bbbbbbbbbbb'],
])(
  ('Проверка выбрасывания ошибки имени %s arg пользователя %s name'),
  (arg, name) => {
    // eslint-disable-next-line no-new
    expect(() => { new Characters(name, 'Bowman'); }).toThrow();
  },
);

test('test valid type', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Characters('bbb', 'king'); }).toThrow();
});

test('test valid type', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Characters('bbb', 'Swordsman'); }).not.toThrow();
});
