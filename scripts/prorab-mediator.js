var prorab =
{
    brickMen: new BrickWorker('John'),
    windowMen: new WindowWorker(),
    roofMen: new RoofWorker('Vlad'),
    brickStorage: new BrickStorage(),
    roofStorage: new BrickStorage(),

    tryToGetPart: function () {
        if (this.brickStorage.takeOneBrickAway() || this.roofStorage.takeOneBrickAway()) return true;
        //if () return true;
        return false
    },
    oneBrickHasGone: function (){
        console.log('this.brickStorage._brick_count: ' + this.brickStorage.getBrickCount() );
        this.windowMen.argue( this.brickStorage.getBrickCount() ); },

    disputeStarted: function (){ this.brickMen.argue_back(); },

    roofBuildStart: function (){

        console.log('this.roofStorage._brick_count: ' + this.roofStorage.getBrickCount() );
        this.roofMen.getPartFromWindow( this.roofStorage.getBrickCount() ); }
    //oneRoofPartHasGone: function (){ this.roofMen.argue( this.roofStorage._brick_count ); }
};


/*testing mediator*/
var round_counter = 0;
prorab.brickStorage.setBrickCount(5);
prorab.roofStorage.setBrickCount(3);
while (prorab.brickMen.getPart() && prorab.roofMen.getPartFromWindow())
{
    round_counter++;
    console.log( '\t' + round_counter + " step");
}