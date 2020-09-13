function getFilterSelect() {
	var str = "<select id = 'departmentSel' onchange='filterDepartment()'>";
	$(".filter_div").find(".filter_child").each( function() {
		str += '<option value="' + this.id + '">' + this.id + '</option>';
	});
	str += "</select>";
	$('.custom-select').append(str);
}

function filterDepartment() {
	console.log("hh");
	$(".filter_child").css('display', 'block');

	var filter = $('#departmentSel').val();

	$(".filter_div").find(".filter_child").each( function() {
		if(this.id != filter) {
			$(this).css('display', 'none');
		}
	});
}

$(document).ready(function() {

	getFilterSelect();

	var filter = $('#departmentSel').val();

	$(".filter_div").find(".filter_child").each( function() {
		if(this.id != filter) {
			$(this).css('display', 'none');
		}
	});
});
