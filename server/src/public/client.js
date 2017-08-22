  $(function () {
    var kick = new Audio('./kick.mp3');
    var tick = new Audio('./tick.mp3');
    var boop = new Audio('./boop.mp3');
    var ty = new Audio('./ty.mp3');
    var socket = io();
    socket.on('typingStart', function(msg){
      kick.play();
      $('#messages').append($('<li>').text(msg));
    });
    socket.on('typingStop', function(msg){
      tick.play();
      $('#messages').append($('<li>').text(msg));
    });
    socket.on('message', function(msg){
      ty.play();
      $('#messages').append($('<li>').text(msg));
    });
    socket.on('pupdate', function(){
      var temp = [kick, tick, kick, kick, ty, kick, tick][Math.floor(Math.random() * 8)];
      temp.play();
      $('#messages').append($('<li>').text('presence update'));
    });
  });