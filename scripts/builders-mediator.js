function BrickWorker() { }
BrickWorker.prototype =
{
    constructor: BrickWorker,

    getBeer: function ()
    {
        if (!prorab.tryToGetBeer())
        {
            console.log("BrickWorker: Who the hell drank all my beer?");
            return false;
        }

        console.log("BrickWorker: Yeeah! My beer!");
        prorab.oneBeerHasGone();
        return true;
    },
    argue_back: function () { console.log("BrickWorker: it's my last beer, for shure!"); }
}

function WindowWorker() { }
WindowWorker.prototype =
{
    constructor: WindowWorker,

    argue: function ()
    {
        console.log("WindowWorker: You are f*king alconaut!");
        prorab.disputeStarted();
    }
}

function PartsStorage(beer_bottle_count)
{
    this._beer_bottle_count = beer_bottle_count;
}
PartsStorage.prototype =
{
    constructor: PartsStorage,

    takeOneBeerAway: function ()
    {
        if (this._beer_bottle_count == 0) return false;
        this._beer_bottle_count--;
        return true;
    }
}