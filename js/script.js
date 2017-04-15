  $(document).ready(function() {
      $("button").click(function() {
          var item = $("#newTask").val();
          $('#toDolist').append('<li class="test"><input type="checkbox">' + item + '</li>');
      });
      $(document.body).on('click', 'li', function() {
          $(this).fadeOut(1000, function() {
              if ($(this).find("input").is(':checked')) {
                  $(this).appendTo('#finishedList').fadeIn(2).addClass('done');
                  var myp5 = new p5(function(sketch) {

                      var bCount = 1000;
                      var yPos = 1;
                      var width = window.innerWidth;
                      var height = window.innerHeight;
                      var random = [];
                      var yRandom = [];
                      var color = ['pink', 'red', 'orange', 'yellow', 'green', 'purple', 'blue'];



                      sketch.setup = function() {
                          sketch.createCanvas(width, height);
                          sketch.background(255, 255, 255, 0);
                          sketch.frameRate(70);

                          for (var i = 0; i < bCount; i++) {
                              random.push(Math.floor(Math.random() * (width / 50)));
                              yRandom.push(Math.floor(Math.random() * (height)));

                              //color.push(Math.floor(Math.random() * 7));

                          }
                          console.log(random);
                          console.log(yRandom);
                      };

                      sketch.draw = function() {
                        var notRandomColor = 1;
                          yPos = yPos - 1;

                          sketch.clear();
                          function runBalloons(bColor) {
                            for (var i = 1; i < bCount; i++) {
                              if(bColor === 7){
                                bColor = 0;
                              }
                              sketch.fill(color[bColor]);
                              sketch.ellipse(50 + (i * (random[i])), yPos + yRandom[i], 60, 75);
                              sketch.line(50 + (i * (random[i])), yPos + yRandom[i] + 40, 50 + (i * (random[i])), yPos + yRandom[i] + 115);
                              bColor++;
                            }
                          }
                          runBalloons(notRandomColor);
                      };
                  });

              } else {
                  $(this).appendTo('#toDolist').fadeIn(2).removeClass('done');
              }

          });
      });

      $(window).keydown(function(event) {
          if (event.keyCode == 13) {
              event.preventDefault();
              return false;
          }
      });
  });
