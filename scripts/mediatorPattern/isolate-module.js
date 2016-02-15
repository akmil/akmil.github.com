function Sandbox() {
    // преобразовать аргументы в массив
    var args = Array.prototype.slice.call(arguments),    // последний аргумент ­ функция обратного вызова
        callback = args.pop(),
    // имена модулей могут передаваться в форме массива
    // или в виде отдельных параметров
        modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
        i;
    console.log('callback ', callback );

    // проверить, была ли функция вызвана
    // как конструктор
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    // добавить свойства к объекту `this`, если это необходимо:
    this.a = 1;
    this.b = 2;
    // добавить модули в базовый объект `this`
    // отсутствие аргументов с именами модулей или аргумент со значением “*”
    // предполагает необходимость включения “всех модулей”
    if (!modules || modules === '*') {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }
    // инициализировать необходимые модули
    console.log('modules.length ', modules[0] );
    for (i = 0; i < modules.length; i++) {
        console.log('modules ', modules[i] );
        //modules[i](this);
        Sandbox.modules[modules[i]](this);

    }
    // вызвать функцию обратного вызова
    callback(this);
}
// добавить свойства к прототипу, если это необходимо
Sandbox.prototype = {
    name:'My Application',
    version: '1.0',
    getName: function () {
        return this.name;
    }
};

Sandbox.modules = {}




/*
var run = Sandbox.prototype.mediator = function(prorab){
    console.log('prorab ', prorab );
    */
/*testing mediator*//*

    var round_counter = 0;
    prorab.brickStorage.setBrickCount(5); //brickStorage setter
    prorab.roofStorage.setBrickCount(3);

    prorab.roofMen.getPartFromRoof(); //roofMen wait until prorab let him do it
};

run();*/
