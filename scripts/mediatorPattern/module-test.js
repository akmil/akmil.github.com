app.module = (function () {

    var prorab =
    {
        brickMen: new app.module.BrickWorker('John'),
        windowMen: new app.module.WindowWorker(),
        roofMen: new app.module.RoofWorker('Vlad'),
        brickStorage: new app.module.BrickStorage('stones'),
        roofStorage: new app.module.BrickStorage('window'),

        tryToGetPart: function () {
            if (this.brickStorage.takeOnePartkAway()) { return true; }
            return false;
        },

        tryToGetPartWindow: function () {
            if ( this.roofStorage.takeOnePartkAway() ) { return true; }
            return false;
        },

        oneBrickHasGone: function (){

            //check if bricks less then 200
            this.windowMen.argue( this.brickStorage.getBrickCount() );
            console.log('  ++ brickStorage brick count: ' + this.brickStorage.getBrickCount()*100 );

            //if brickMen have brick===false then start to build roof
            if ( !prorab.brickMen.getPart() ) {
                this.roofBuildStart();
                return false;
            }
        },

        disputeStarted: function (){ this.brickMen.argue_back(); },

        roofBuildStart: function () {
            if (!this.brickMen.getPart()) {
                console.log('   - roofStorage: roof parts left: ' + this.roofStorage.getBrickCount());
                this.roofMen.getPartFromRoof(this.roofStorage.getBrickCount() + 1);
            }
        }
    };

    function runMediator() {
        /*testing mediator*/
        prorab.brickStorage.setBrickCount(5); //brick storage setter
        prorab.roofStorage.setBrickCount(3);
        prorab.roofMen.getPartFromRoof(); //roofMen wait until prorab let him do it;
    }

    return {
        prorabObj: prorab,
        runMediator: runMediator
    }

})();


app.module.runMediator();