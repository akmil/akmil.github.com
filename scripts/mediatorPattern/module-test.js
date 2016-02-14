console.log('**module tests', Sandbox.modules);

Sandbox.modules.prorab2 = function (prorab) {
    prorab = 'prorab say module'
    console.log(prorab);
};


(function() {

    console.log(prorab);
    /*testing mediator*/
    var round_counter = 0;
    prorab.brickStorage.setBrickCount(5); //brickStorage setter
    prorab.roofStorage.setBrickCount(3);

    prorab.roofMen.getPartFromRoof(); //roofMen wait until prorab let him do it;


})();
