function getFilterSelect() {

	var str = "<select id = 'departmentSel' onchange='filterDepartment()'>";

	$(".filter_div").find(".filter_child").each( function() {
		str += '<option value="' + this.id + '">' + this.id + '</option>';
	});

	str += "</select>";

	$('.custom-select').append(str);

	$('#departmentSel').val(getCookie("filterDepartment"));

	checkCookie();
}

function filterDepartment() {

	$(".filter_child").css('display', 'block');

	var filter = $('#departmentSel').val();

	$(".filter_div").find(".filter_child").each( function() {
		if(this.id != filter) {
			$(this).css('display', 'none');
		}
	});

	setCookie("filterDepartment", filter, 365);

	checkCookie();
}

function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	var filter = getCookie("filterDepartment");

	if (filter =="" || filter == "null" || filter == null) {
		$('#departmentSel').show();
	}
	else {
		$('#departmentSel').hide();
	}
}

$(document).ready(function() {

	checkCookie();

	getFilterSelect();

	filterDepartment();

});
