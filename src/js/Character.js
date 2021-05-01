export default class Character {
  constructor(name, type) {
    if (typeof name === 'string') {
      if (name.length > 2 && name.length < 10) {
        this.name = name;
      } else {
        throw new Error('Длинна имени не верна');
      }
    } else {
      throw new Error('Неправильный тип данных');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
