function Player() {
}
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
  this.pausedIn =0;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

Player.prototype.summa = function(timeFull,currentTime) {
  this.pause();
  this.pausedIn = timeFull + currentTime;
  console.log('this.pausedIn: ' + this.pausedIn);
};