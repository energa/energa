var s;
var triggers = [];  

jQuery.fn.reverse = [].reverse; 

function runAniChart($chart, speed) {
  var $bar1 = $('.bar1', $chart),
      $bar2 = $('.bar2', $chart),
      $arrow = $('.arrow-up', $chart),
      $chartTitle = $('.chart-title', $chart),
      $next = $chart.next('.schart'),
      $span1 = $('span', $bar1),
      $span2 = $('span', $bar2),
      bar1H = $bar1.data('height'),
      bar2H = $bar2.data('height');
  
  $chart.animate({
      opacity: 1
    }, 
    speed, 
    function() {
      $bar1.animate({
          height: bar1H + 'px', 
          opacity: 1
        }, 
        speed * 3, 
        function() {
          var $self = $(this);
          $('.okr', $self).animate({opacity: 1}, speed, function() {
            $('.sum', $self).animate({opacity: 1}, speed, function() {
              $bar2.animate({
                  height: bar2H + 'px', 
                  opacity: 1
                }, 
                speed * 3, function() {
                  var $self2 = $(this);
                  $('.okr', $self2).animate({opacity: 1}, speed, function() {
                    $('.sum', $self2).animate({opacity: 1}, speed, function() {
                      $arrow.animate({opacity: 1}, speed, function(){
                        if(parseInt($('#chart-container-3 div').css('opacity'),10) > 0){
                          $('#schart-p').animate({opacity: 1}, speed * 3);
                        }
                      });
                    });
                  });
                });
            });
          });
        });
  
  });   
      
}
function counter($self) {
  var from = {property: 0};
  var to = {property: $self.data('stop')};
  var duration = $self.data('duration');

  jQuery(from).animate(to, {
      duration: duration,
      step: function() {
          $self.html(Math.round(this.property));
      }
  });
}
function trigger_counterrp($self) {
  $self.find('.rp-counter').reverse().each(function (index, item) {
    var $counter = $(item).find('.counter');

    $(item).find('label').delay(1000*index).animate({ opacity: 1 }, 300, function() {

    });
    $(item).find('.cake').delay(1000*index).animate({ opacity: 1 }, 300, function() {
      counter($counter);
      $(this).parent().find('.counter').animate({ opacity: 1 }, 300);
      $(this).parent().find('.raisin').animate({ opacity: 1 }, 300);
    });
  });
}
function trigger_counterrp2($self) {
  var $counter = $self.find('.counter');

  $self.find('label').animate({ opacity: 1 }, 300, function() {
    $(this).parent().find('.cake').animate({ opacity: 1 }, 300, function() {
      counter($counter);
      $(this).parent().find('.counter').animate({ opacity: 1 }, 300);
      $(this).parent().find('.raisin').animate({ opacity: 1 }, 300);
    });
  });
}
function trigger_counterrp3($self) {
  var $counter = $self.find('.counter');

  $self.find('label').animate({ opacity: 1 }, 300, function() {
    $(this).parent().find('.cake').animate({ opacity: 1 }, 300, function() {
      counter($counter);
      $(this).parent().find('.counter').animate({ opacity: 1 }, 300);
      $(this).parent().find('.raisin').animate({ opacity: 1 }, 300);
    });
  });
}

function trigger_info($self) {
  $self.animate({ left: '0' }, 300);
  $self.find('.icon').animate({ opacity: 1 }, 300, function() {
    $(this).parent().find('.count').animate({ opacity: 1 }, 200, function() {
      $(this).parent().find('.desc').animate({ opacity: 1, paddingBottom: '.72em' }, 200);
    });
  });
}

function trigger_info2($self) {
  $self.delay(1000).animate({ left: '0' }, 300);
  $self.find('.icon').delay(1000).animate({ opacity: 1 }, 300, function() {
    $(this).parent().find('.count').animate({ opacity: 1 }, 200, function() {
      $(this).parent().find('.desc').animate({ opacity: 1, paddingBottom: '.72em' }, 200);
    });
  });
}

function trigger_infopracownicy($self) {
  $self.animate({ left: '0' }, 300);
  $self.find('.icon').animate({ opacity: 1 }, 300, function() {
    $(this).parent().find('#ponad.desc').animate({ opacity: 1, paddingBottom: '.62em' }, 200 , function() {
      $(this).parent().find('.count').animate({ opacity: 1 }, 200, function() {
        $(this).parent().find('#pracownicy.desc').animate({ opacity: 1, paddingBottom: '.72em' }, 200, function() {
          $('#solidny-pracodawca').delay(500).animate({ opacity: 1 }, 300);
        });
      });
    });
  });
}

function trigger_navtabs($self) {
  $self.animate({opacity:1, marginLeft:0}, 300);
}
function trigger_charts($self) {
  runAniChart($self.find('.schart').first(), 200);
  runAniChart($self.find('.schart').last(), 200);
}

function trigger_fakto($self) {
  $self.animate({opacity:1, paddingLeft:0}, 500, function () {
    $('.fh', this).animate({opacity:1}, 300);
  });
}

function trigger_mapa($self) {
  $self.find('#mapa-bg').animate({ opacity: 1 }, 300, function() {
    $(this).parent().find('#mi1').animate({ opacity: 1, paddingTop: '30px' }, 300, function() {
      $(this).parent().find('#mi2').animate({ opacity: 1, paddingTop: '30px' }, 300, function() {
        $(this).parent().find('#mi3').animate({ opacity: 1, paddingTop: '30px' }, 300, function() {
          $(this).parent().find('#mi4').animate({ opacity: 1, paddingTop: '30px' }, 300);
        });
      });
    });
  });
}

function trigger_wizja($self) {
  $self.animate({ left: '0' }, 300);
  $self.find('.icon').animate({ opacity: 1 }, 300, function() {
    $(this).parent().find('.desc').animate({ opacity: 1, paddingBottom: 0 }, 300);
  });
}



function trigger_title($self) {
  $self.find('h2').animate({ opacity: 1, marginLeft: 0 }, 300, function() {
    $(this).parent().find('.title-spacer').animate({ width: '100%', opacity: 1 }, 700);
  });
}

function trigger_show($self) {
  $self.animate({ opacity: 1 }, 300);
}

function trigger_slideleft($self) {
  $self.animate({ opacity: 1, left: 0 }, 300);
}

function trigger_slideright($self) {
  $self.animate({ opacity: 1, left: 0 }, 300);
}

function trigger_tabcontent($self) {
  $self.animate({opacity: 1, marginLeft: 0}, 500);
}


$(function() {

   s = skrollr.init();

    $('.trigger').each(function() {
       _id = $(this).attr('id');
       _offset = s.relativeToAbsolute(document.getElementById(_id), 'center', 'top');      
       _func = 'trigger_' + $(this).data('trigger');
       
       triggers.push({
          id: _id,
          offset: _offset,
          func: _func,         
          flag: false
       });
    });

    s.on('render', function(params) {

       for(i in triggers) {
       
          trigger = triggers[i];
          if (params.curTop > trigger.offset && trigger.flag == false) {

             trigger.flag = true;
             $n = $('#'+trigger.id);
             window[trigger.func]($n);
          }            
       }   
    });

});

$(window).load(function() {

   setTimeout(function() {s.refresh()}, 3000);

});
