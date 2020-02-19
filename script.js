SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/299479465',function(sound){
    $('#start-k1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-k1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/105827731',function(sound){
    $('#start-k2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-k2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/285134266',function(sound){
    $('#start-k3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-k3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/317617738',function(sound){
      $('#start-s1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-s1').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    SC.stream('/tracks/156082767',function(sound){
        $('#start-s2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-s2').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/421069101',function(sound){
          $('#start-s3').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-s3').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/225519099',function(sound){
            $('#start-ar1').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-ar1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/211453128',function(sound){
              $('#start-ar2').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-ar2').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
            SC.stream('/tracks/255389574',function(sound){
                $('#start-ar3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-ar3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });

});
