getLinkData();

function getLinkData()
{
    var urls = window.location.pathname;
    var myPageName = urls.substring(urls.lastIndexOf('/') + 1).split(".",1)[0];
    var method = "GetListItems";
    var webURL =  $().SPServices.SPGetCurrentSite() ;
    var list = "mylinks";
    var query = "<Query><Where><Contains><FieldRef Name='Page_x0020_Name' /><Value Type='Text'>" + myPageName + "</Value></Contains></Where></Query>";

    const groupBy = (array, key) => {
        // Return the end result
        return array.reduce((result, currentValue) => {
            // If an array already present for key, push it to the array. Else create an array and push the object
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
            return result;
        }, {}); // empty object is the initial value for result object
    };

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
                    ows_Title: {mappedName: "Title", objectType: "Text"},
                    ows_Page_x0020_Name: {mappedName: "PageName", objectType: "Text"},
                    ows_Category: {mappedName: "Category", objectType: "Text"},
                    ows_URL: {mappedName: "Url", objectType: "URL"}
                }   // name, mappedName, objectType
            });

            var resultJson = groupBy(myjson, "Category");

            for(result in resultJson) {
                var str="<div class='CategoryList' name="+result+"><h3>"+result+"</h3><ul>";

                for(item in resultJson[result]){
                    str += "<li>" + resultJson[result][item].Title + ":  <a href='" + resultJson[result][item].Url.Url + "' target='_blank'>" + resultJson[result][item].Url.Description + "</a></li>";
                }
                str+="</ul></div>";
                $(".result_Link_div").append(str);
            }
        }
    });
};
