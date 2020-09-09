(() => {
	$('.my-number').eq(1).css('visibility', 'hidden');
})();

//sidear
$("#ui-datepicker-div").css({
	'position': 'fixed',
	'top': '196px',
	'left': '21px',
	'z-index': '101',
	'display': 'none'
})


let mySidebarH = () => {
	$('.my-sidebar').hide(600);
	$('.my-sidebar-icon').hide().html('&gt;').css('left', '0').show(600);
	$("#ui-datepicker-div").hide(600);
}

let mySidebarS = () => {
	$('.my-sidebar').show(600);
	$('.my-sidebar-icon').hide().html('&lt;').css('left', '300px').show(600);
	$("#ui-datepicker-div").show(600);
}


$('.my-sidebar-icon').click(() => {
	$('.my-sidebar').css('display') == 'block' ? mySidebarH() : mySidebarS();
})

//Online Booking Service

//number
$('.my-phone').blur(function () {
	if (/^[1]\d{10}$/.test($(this).val())) {
		return;
	}
	$(this).val('')
	alert('Please enter the correct mobile phone number');
})


//date

$('.my-date').blur(function () {
	let myDate = new Date();
	let toDay = myDate.toLocaleDateString();
	let getSelectDate = $(this).val() + '';
	let arr1 = toDay.split('/');
	let arr2 = getSelectDate.split('-');

	if (arr1[0] - 0 < arr2[0] - 0) {
		return;
	}
	if (arr1[0] - 0 == arr2[0] - 0) {
		if (arr1[1] - 0 < arr2[1] - 0) {
			return;
		} else if (arr1[1] - 0 == arr2[1] - 0) {
			if (arr1[2] - 0 < arr2[2] - 0) {
				return;
			}
		}
	}
	$(this).val('');
	return alert('Please select a furter date');

})

$('.my-right .form-control').eq(4).blur(function () {
	let tVal = $(this).val();
	let str = '';
	if (tVal >= 1 && tVal <= 5) {
		$('.my-number').eq(1).html(str)
		for (let i = 0; i <= tVal; i++) {
			str += `<option value="${i}">${i}</option>`
		}
		$('.my-number').eq(1).html(str)
		return;
	}
	$(this).val('');
	return alert()
})

//checkbox

$('.my-checkbox').click(function () {
	let checVal = $(this).prop('checked');
	let childrenN = $('.my-number').eq(1);
	if (checVal) {
		return childrenN.css('visibility', 'visible');
	}
	return childrenN.css('visibility', 'hidden');
})

$('.my-submit').click(function () {
	for (let i = 0; i < 5; i++) {
		if (!($('.my-right .form-control').eq(i).val())) {
			return true;
		}
	}
	let price = ($('.my-number').eq(0).val() - $('.my-number').eq(1).val()) * Number($('my-museum-v').val());
	$('.my-price').html(price)

	$('.my-popup').show(300);
	return false;
})

$('.my-popup .btn').click(function () {
	switch ($(this).attr('data-number')) {
		case '0':
			alert('Payment successful');
			break;
		case '1':
			alert('Reservation successful');
			break;
		case '2':
			$('.my-popup').hide();
			break;
	}
})