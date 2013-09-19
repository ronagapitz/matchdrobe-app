	$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
});
		$(function()
		{
		var item_1,item_2, status,elapsed; //declararion  for paired items
	$.support.cors = true;
	var favorite = 3;
	
			$(".points").load("http://matchdrobe.com/app/register_app.php",{'get_points': device.uuid});

	//show discover
	
	$(".d_link").click(function()
	{
	
		$(".foot").css({'background':'url(img/footer.png)','background-size': '100% 100%'});
$(".pair").show();
$(".matchdrobe").hide();
	});
	
	//my matchdreobe
		
		
	$(".m_link").click(function()
	{
	$(".foot").css({'background':'url(img/footer2.png)','background-size': '100% 100%'});
$(".pair").hide();
$(".matchdrobe").removeClass("hide").show();
$('.matchdrobe .items').empty().load("http://matchdrobe.com/catalog/app_ajax_loader.php?matchdrobe="+device.uuid);
	});
	
	
	//end matchdobe
	
	
	
	//begin product detaisl
	
	$(document).on("click", ".single_p", 
	function(){
product_id = $(this).attr("data-id");
$(".matchdrobe .items").hide();
$(".single_item").removeClass("hide").show();
$(".single_item").empty().load("http://www.matchdrobe.com/app/app_details1.php?product_id="+product_id);
return false();
	
	});  
	
	
	//see details
	$(document).on("click", ".see", 
	function(){

$(".single_item").hide();
$(".single_item_full").removeClass("hide").show().empty().load("http://www.matchdrobe.com/app/app_details2.php?product_id="+product_id);
	return false;
	}); 
	
	// end see derails
	//end product details
	//pair
	
	
	$(document).on("click", ".items a", 
	function(){

if(status !== 0)
{
	 status = $(this).attr("data-id"); 
	 
	 }
	
	});  
		
		$(".hide_me").click(function()
		{
//$(this).parent().parent().hide();
var $hide = $(this).attr("data-hide");
$($hide).hide();

var $show = $(this).attr("href");
$($show).removeClass("hide").show();
if($show == '.fav')
{

$('.fav img').each(function() {
    // ...
	
	$(this).attr('src',$(this).attr('data-src'));
});
}

favorite = 3;
return false;

	

	});
	
	$(document).on("click", "#skipper",function()
	{
	
	status = 0;
	$('.confirm').click();
	});
	
	//pair by random selected categories
	var getter = 1;
	$("")
	$('.confirm').on('click', function() {
	
		$.post("http://matchdrobe.com/app/register_app.php",{'pairing': device.uuid,'item_1':item_1,'item_2': item_2,'status': status,'elapsed': elapsed,'keywords': $('.tags').val() },function() //update points
		{
		$(".points").load("http://matchdrobe.com/app/register_app.php",{'get_points': device.uuid});
		
		}
		
		
		);

	$("#cancel").click(function()
	{
	
	$(".tags").val("");
	});
	$(".items").empty();
	$(".tags").val("");
	if(getter ==1)
	{
		$('.pair .items').empty().load("http://matchdrobe.com/catalog/app_ajax_loader.php?cat="+localStorage.f1
		,function()
		{
		item_1 = $(".items .hidden_pair").val();
//alert(item_1);		
		});
		getter +=1;
		}
		
		if(getter ==2)
	{
		$('.pair .items').empty().load("http://matchdrobe.com/catalog/app_ajax_loader.php?cat="+localStorage.f2);
				getter +=1;

		}
		
		
		if(getter ==3)
	{
		$('.pair .items').empty().load("http://matchdrobe.com/catalog/app_ajax_loader.php?cat="+localStorage.f3);
				getter =1;

		}

	});
	// end pair
	//gender
	

	
	
	//end gender
	//	favorite
	
	
	$(".fav a").click(function()
	{
	$(this).addClass('selected');
	$('img',this).attr('src',$('img',this).attr('data-selected'));
	var fave = $(this).attr('href');
	$(".more").show();
	

	
	if(favorite == 3)
	{
	localStorage.f3 = fave;
	$.post("http://matchdrobe.com/app/register_app.php",{'device': device.uuid, '3' : fave});
	}if(favorite == 2)
	{
	
		localStorage.f2 = fave;

	$.post("http://matchdrobe.com/app/register_app.php",{'device': device.uuid, '2' : fave});
	}if(favorite == 1)
	{
		localStorage.f1 = fave;

	$.post("http://matchdrobe.com/app/register_app.php",{'device': device.uuid, '1' : fave});
	}
	
	
		
	favorite -=1;
	
	if(favorite == 0)
	{
			$('.pair .cont .items').load("http://matchdrobe.com/catalog/app_ajax_loader.php?cat="+localStorage.f1
			,function()
		{
		item_1 = $(".items .hidden_pair").val();

     item_2 = 	$(".items .hidden_pair").nextAll(".hidden_pair").val();
	 
		});

	$(".fav").hide();
	$(".pair,.foot").removeClass('hide').show();
	}
	$(".more span").text(favorite);
	return false;
	});
	
		localStorage.userid = device.uuid;

	// end favorite
	$.post("http://matchdrobe.com/app/register_app.php",{'device_id': device.uuid });
	
	$("#catalogue").click(function()
	{
	$("div.container").fadeOut(function()
	{
	
	$("div.container").empty().load('http://matchdrobe.com/catalog/app_ajax_loader.php').fadeIn();
	});
	
	
	

});


	
	
	
	
	
		
	
		
		
		   var element = document.getElementById('deviceProperties');

        element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                            'Device PhoneGap: ' + device.phonegap + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device UUID: '     + device.uuid     + '<br />' + 
                            'Device Version: '  + device.version  + '<br />';
		});
		