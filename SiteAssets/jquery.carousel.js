getCarouselData();

function getCarouselData()
{

    var method = "GetListItems";
    var webURL =  $().SPServices.SPGetCurrentSite() ;
    var list = "Carousel";
    var query = "<Query><Where></Where></Query>";

	$().SPServices
	({
	    operation: method,
	    async: false,
	    webURL: webURL,
	    listName: list,
	    CAMLViewFields: "<ViewFields Properties='True' />",
	    CAMLQuery: query,
	    completefunc: function (xData, Status)
	    {
	        var myjson = $(xData.responseXML).SPFilterNode("z:row").SPXmlToJson({
	            mapping: {
	                ows_Target_x0020_URL: {mappedName: "TargetURL", objectType: "URL"},
	                ows_BackgroundImage: {mappedName: "ImageFile", objectType: "URL"},
	                ows_Description: {mappedName: "Description", objectType: "Text"},
	            }   // name, mappedName, objectType
	        });

	        var str =`<div class='Category' name=`+result+` data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'>`;

	        for(item in myjson){
	            str+="<div class='container'><a href='" + myjson[item].TargetURL.Url + "' target='_blank'>" +
	                "<img src='" + myjson[item].ImageFile.Url + "' width='300px' />" + "<h1 class='centered'>" + myjson[item].Description + "</h1></a></div>";
	        }
	        str+="</div>";
	        $(".result_Carousel_div").append(str);
	    }
	});
};

$(document).ready(function(){
    $('.Category').slick({
        infinite: true,
        speed: 300,
        adaptiveHeight: true
    });
});
