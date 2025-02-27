// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    };

    attack() {
        return this.strength;
    };
    
    receiveDamage(damage) {
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;  
        }
    receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    } else {
        return `${this.name} has died in act of combat`;
    }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat"
        }    
}
}

// War
class War {
    constructor() {
    this.vikingArmy =[];
    this.saxonArmy = [];
}
addViking (viking) {
    this.vikingArmy.push(viking)
}
addSaxon (saxon) {
    this.saxonArmy.push(saxon)
}

vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    const damage = randomViking.strength;

    let fight = randomSaxon.receiveDamage(damage);
    if (randomSaxon.health <= 0) {
        this.saxonArmy.pop(randomSaxonIndex);
    }
  
      return fight;
    }

saxonAttack(){
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    const damage = randomSaxon.strength;

    let fight = randomViking.receiveDamage(damage);
    if (randomViking.health <= 0) {
        this.vikingArmy.pop(randomVikingIndex);
      }
  
      return fight;
    }

showStatus(){
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day...";
    } else {
    return "Vikings and Saxons are still in the thick of battle."
    }  
}
}  