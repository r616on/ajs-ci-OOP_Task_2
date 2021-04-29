import {
  Bowerman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from "../person";

test("test Bowerman", () => {
  const data = { attack: 25, defence: 25, type: "Bowerman" };
  expect(new Bowerman("B")).toEqual(expect.objectContaining(data));
});
test("test Swordsman", () => {
  const data = { attack: 40, defence: 10, type: "Swordsman" };
  expect(new Swordsman("B")).toEqual(expect.objectContaining(data));
});
test("test Magician", () => {
  const data = { attack: 10, defence: 40, type: "Magician" };
  expect(new Magician("B")).toEqual(expect.objectContaining(data));
});
test("test Daemon", () => {
  const data = { attack: 10, defence: 40, type: "Daemon" };
  expect(new Daemon("B")).toEqual(expect.objectContaining(data));
});
test("test Undead", () => {
  const data = { attack: 25, defence: 25, type: "Undead" };
  expect(new Undead("B")).toEqual(expect.objectContaining(data));
});
test("test Zombie", () => {
  const data = { attack: 10, defence: 40, type: "Zombie" };
  expect(new Zombie("B")).toEqual(expect.objectContaining(data));
});
