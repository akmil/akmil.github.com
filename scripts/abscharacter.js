var AbstractCharacter = {
    weapon: '',
    health: 0,
    talk: function () {
    },
    setWeapon: function (weapon) {
        this.weapon = weapon;
    },

    attack: function (health) {
    }
};

/*var King = Object.create(AbstractCharacter);
King.setWeapon = function (weapon) {
    this.weapon = 'sword';
    console.log('You sett sword weapon');
};

var Warrior = Object.create(AbstractCharacter);
Warrior.setWeapon = function (weapon) {
    this.weapon = 'axe';
    console.log('You sett axe weapon');
};*/

var Caller = function (AbstractCharacter) {
    this.callStrategy = function (weapon) {
        AbstractCharacter.setWeapon(weapon);
    };
};




var dataWarrior = {
    type: 'Warrior',
    name: 'Vlad',
    weapon: 'exe',
    health: 100,
    demage: 15,
    button: ['recive', 'reject', 'share']
};

CharacterCreator = {
    config: {
        type: 'Warrior',
        weapon: 'isExe'
    },
    charType: {
        Warrior: {
            setWeapon : function (weapon) {
            this.weapon = 'axe';
            console.log('You sett '+ this.weapon +' weapon');
            }
        },
        isExe: {
            setWeapon : function (weapon) {
            this.weapon = 'axe';
            console.log('You sett '+ this.weapon +' weapon');
            }
        },
        King: {
            setWeapon : function (weapon) {
            this.weapon = 'sword';
            console.log('You sett sword weapon');
            }
        }
    },
    createChar: function (data) {
        var i, msg, type, checker, result_ok;
        this.messages = [];
        for (i in this.config) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = data.type[type];
                console.log('type+checker: ' + i +' : '+ type +' : '+ checker);
                /*var character  = new Caller(type);
                console.log(character);
                character.callStrategy(type);*/
                checker.setWeapon(data[i]);
            }
        }
    }
};

CharacterCreator.createChar(dataWarrior);


//new Caller.setWeapon(dataWarrior);
/*
 if (CharacterCreator.hasErrors()) {
 console.log(validator.messages.join('\n'));
 }*/
