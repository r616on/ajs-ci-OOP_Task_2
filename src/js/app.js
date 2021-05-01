import Bowerman from './person/Bowerman';
import Swordsman from './person/Swordsman';
import Magician from './person/Magician';
import Daemon from './person/Daemon';
import Zombie from './person/Zombie';
import Undead from './person/classUndead';
import Character from './Character';

// Bowman, Swordsman, Magician, Daemon, Undead, Zombie
const bowerman = new Bowerman('Bow');
const swordsman = new Swordsman('SWn');
const magician = new Magician('SWn');
const daemon = new Daemon('SWn');
const zombie = new Zombie('SWn');
const undead = new Undead('SWn');
const ch = new Character('trololo');
console.log(bowerman, swordsman, magician, daemon, zombie, undead, ch);
bowerman.levelUp();
bowerman.damage(25);
