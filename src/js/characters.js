export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Придумайте имя Name более 2 или менее 10 символов');
    }
    const arrValidType = [
      'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie',
    ];
    if (!arrValidType.includes(type)) {
      throw new Error('Выберите другой тип игрока');
    }
    this.name = name;
    this.type = type;
    this.helse = 100;
    this.level = 1;

    const objAttack = {
      Bowman: 25,
      Swordsman: 40,
      Magician: 10,
      Undead: 25,
      Zombie: 40,
      Daemon: 10,
    };
    for (const item in objAttack) {
      if (item === this.type) {
        this.attack = objAttack[item];
      }
    }
    const objDefence = {
      Bowman: 25,
      Swordsman: 10,
      Magician: 40,
      Undead: 25,
      Zombie: 10,
      Daemon: 40,
    };
    for (const item in objDefence) {
      if (item === this.type) {
        this.defence = objDefence[item];
      }
    }
  }
}

const bowman = new Character('dow', 'Bowman');
console.log(bowman);