import sortCharacters from "../matchers";

test("sort", () => {
  const characters = [
    { name: "мечник", health: 100 },
    { name: "маг", health: 5 },
    { name: "лучник", health: 90 },
  ];

  const sortedCharacters = sortCharacters(characters);

  expect(sortedCharacters).toEqual([
    { name: "мечник", health: 100 },
    { name: "лучник", health: 90 },
    { name: "маг", health: 5 },
  ]);
});

test("sort2", () => {
  const characters = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const sortedCharacters = sortCharacters(characters);

  expect(sortedCharacters).toEqual([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ]);
});
