/**
 * Created by Pavlo_Oliinyk1 on 2/11/2016.
 */
var prorab =
{
    brickMen: new BrickWorker(),
    windowMen: new WindowWorker(),
    refrigerator: new PartsStorage(3),
    stash: new PartsStorage(2),

    tryToGetBeer: function ()
    {
        if (this.refrigerator.takeOneBeerAway()) return true;
        if (this.stash.takeOneBeerAway()) return true;

        return false
    },
    oneBeerHasGone: function (){ this.windowMen.argue(); },
    disputeStarted: function (){ this.brickMen.argue_back(); }
}


/*testing mediator*/
var round_counter = 0;
while (prorab.daddy.getBeer())
{
    round_counter++
    console.log( round_counter + " round passed");
}