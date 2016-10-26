$(function()
{
	window.clickTheDiv = function(f){
		alert("The Type is "+$(f).find('jtk-source').attr('port-type')+ " and id is "+$(f).attr("id"))
		}
});