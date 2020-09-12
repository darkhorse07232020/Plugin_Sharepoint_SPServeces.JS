getMyListData( function ( resultJson , carousel ) {
   for(result in resultJson) {
       var str = "<h1 style='text-align: center;'>"+result+"</h1>"
       str +=`<div class='Category' name=`+result+` data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'>`;

       for(item in resultJson[result]){
           const tmp = carousel.find(element => element.TargetURL.Url == resultJson[result][item].Url.Url);
           var imageFile = "";
           if(tmp) {
               imageFile = tmp.ImageFile.Url;
           }
           console.log(imageFile);
           str+="<div style = 'text-align: center; '><a href='"+resultJson[result][item].Url.Url+"'>" +
               "<img src='" + imageFile + "' width='300px' />" + "</a><h2>" + resultJson[result][item].Url.Description + "</h2></div>";
       }
       str+="</div>";
       $(".result_div").append(str);
   }
});

$(document).ready(function(){
   $('.Category').slick({
       infinite: true,
       speed: 300
   });
});
