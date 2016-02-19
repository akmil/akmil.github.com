console.log('start');

function Sandbox() {
    // преобразовать аргументы в массив
    var args = Array.prototype.slice.call(arguments),    // последний аргумент ­ функция обратного вызова
        callback = args.pop(),
    // имена модулей могут передаваться в форме массива
    // или в виде отдельных параметров
        modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
        i;

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
    console.log('modules.length ', modules.length );
    for (i = 0; i < modules.length; i++) {
        console.log('modules:: ', modules[i] );
        //this.modules[i](this);
        Sandbox.modules[modules[i]](this);

    }
    // вызвать функцию обратного вызова
    //console.log('start run callback(this)');
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

Sandbox.modules = {};

console.log('**module tests', Sandbox.modules);

var callBack = function () { console.log('***callBack'); };




Sandbox.modules.prorab2 = function (prorab, callBack) {
    prorab = '\t prorab say module2';
    console.log(prorab);
    //var callBack = function () { console.log('***callBack'); };
};

Sandbox.modules.prorab4 = function (prorab) {
    prorab = '\t prorab say module4';
    console.log(prorab);
}
console.log('**module tests', Sandbox.modules);
Sandbox();


Sandbox('prorab99' ,function (prorab) {
    prorab = 'prorab 99 say module99';
    console.log(prorab);
});



