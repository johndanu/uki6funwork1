SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/299479465',function(sound){
    $('#start-e1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/105827731',function(sound){
    $('#start-e2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/285134266',function(sound){
    $('#start-e3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/271004119',function(sound){
      $('#start').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
});
