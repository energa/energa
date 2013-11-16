(function($) {
  $(document).ready(function() {
  
    var pieChartData = [
    				{
    					value: 16,
    					color:"#99cc00"
    				},
    				{
    					value : 84,
    					color : "#5fa92c"
    				}
    		],
    		pieChartData2 = [
						{
							value: 16,
							color:"#99cc00"
						},
						{
							value : 34,
							color : "#ff6600"
						},
						{
							value : 50,
							color : "#5fa92c"
						}
				],
				chartSettings = {animationEasing: "easeOutQuart", segmentShowStroke: false};
    
    
    
    function showPieChart(chart) {
			var ctx = document.getElementById("chart1").getContext("2d");
			new Chart(ctx).Pie(pieChartData, chartSettings);
		};
		function showPieChart2() {
			var ctx = document.getElementById("chart2").getContext("2d");
			new Chart(ctx).Pie(pieChartData2, chartSettings);
		};
    $('#countdown').countdown({
      until: new Date(2013, 12-1, 2, 23, 59),
      timezone: +60,
      format: 'DHMS',
      layout: '<div><label>Dni</label><span>{dnn}</span></div>' + 
        '<div><label>Godziny</label><span>{hnn}</span></div>' +
        '<div><label>Minuty</label><span>{dnn}</span></div>' +
        '<div><label>Sekundy</label><span>{snn}</span></div>'
    });

    setTimeout(function(){$('.senti').hide()}, 2000);




    $('.playimg').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      closeMarkup: '<button title="Zamknij (Esc)" class="mfp-close"></button>'
    });
    
    $("#chart1").on("inview", function() {
			var $this = $(this);
			$this.removeClass("hidden").off("inview");
			setTimeout(showPieChart, 600);			
		});
		$("#chart2").on("inview", function() {
			var $this = $(this);
			$this.removeClass("hidden").off("inview");
			setTimeout(showPieChart2, 600);			
		});
    
    
   $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      if(typeof $(this).data('open') === 'undefined') {
        $(this).data('open',true);
        var counter = 0;
        $($(this).attr('href')).find('.faktitem.fakt').each(function(){
          var self = $(this);
            setTimeout(function(){

              self.animate({opacity: 1, marginLeft: 0}, 500, function(){
                $(this).find('.desc, .ns').animate({opacity: 1, marginLeft: 0}, 300);
              });

            }, counter);

            counter += 300;
        });
      }
   })
    

    $('#menu-sub').click(function(){
        $('#menu-sub-content').slideToggle(400);
    });

    $('#menu-sub-content a').click(function(){

        $.scrollTo($(this).attr('href'),800, {offset:-60});
    });

  });
})(jQuery);