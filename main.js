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
  SC.stream('/tracks/317617738',function(sound){
      $('#start-h1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-h1').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    SC.stream('/tracks/156082767',function(sound){
        $('#start-h2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-h2').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/421069101',function(sound){
          $('#start-h3').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-h3').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/225519099',function(sound){
            $('#start-t1').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-t1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/211453128',function(sound){
              $('#start-t2').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-t2').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
            SC.stream('/tracks/255389574',function(sound){
                $('#start-t3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-t3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });

});
