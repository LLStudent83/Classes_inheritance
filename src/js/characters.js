// eslint-disable-next-line max-classes-per-file
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
  }
}


class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

const bowman = new Bowman('dow', 'Bowman');

const swordsman = new Swordsman('swo', 'Swordsman');

const magician = new Magician('mag', 'Magician');

const daemon = new Daemon('doem', 'Daemon');

const undead = new Undead('und', 'Undead');

const zombie = new Zombie('dow', 'Zombie');


console.log(bowman);
