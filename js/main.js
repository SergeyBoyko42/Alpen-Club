$(document).ready(function () {

	$('.star__icon').click(function () {
		let indexStar = ($(this).attr('for'));
		let allStar = $(this).siblings()
		let listStars = ["star_1", "star_2", "star_3", "star_4", "star_5"];
		listStars.forEach((classStar) => allStar.removeClass('star__icon-' + classStar));
		$(this).addClass('star__icon-' + indexStar);
		allStar.removeClass('star__icon-active');
		$(this).addClass('star__icon-active');
		$(this).nextAll().addClass('star__icon-active');
		$(this).parent().parent().children(".section__numbers").addClass('section__numbers-active');
	});


	$(function () {
		$("#phone").mask("+7 (999) 999-9999");
	});

	$('#phone').change(function () {
		let checked = $($('.numbers__point ')[0]);
		if ($(this).val() !== '') {

			checked.addClass('ok');
		}
		else {
			checked.removeClass('ok');
		}
	});
});

$('#phone').change(function () {
	let checked = $($('.numbers__line ')[0]);
	if ($(this).val() !== '') {

		checked.addClass('ok-line');
	}
	else {
		checked.removeClass('ok-line');
	}
});


$('.star__icon').click(function () {
	$($('.numbers__point ')[1]).addClass('ok');
});

//раскрывает и закрывает панель с отзывом
$('.star__icon:eq(0),.star__icon:eq(1) ').click(function () {
	$('.review').removeClass('review-hidden');
	$('.comment').addClass('comment-hidden');
	$('.button__arrow').css('height', '100px');

});

$('.star__icon:eq(2),.star__icon:eq(3),.star__icon:eq(4) ').click(function () {
	$('.review').addClass('review-hidden');
	$('.comment').removeClass('comment-hidden');
	$('.button__arrow').css('height', '0px');

});
////////////////////////////////////////


$('#phone, .star__input ').change(function () {
	if ($('#phone').val() !== '' && $('.star__input:checked').val() > 0) {
		console.log(2222)
		$('.button__feedback').css('background-color', '#c22b2a');
	} else {
		$('.button__feedback').css('background-color', '#a1a1a1');
	}
});






function sendData() {

	if ($('#phone').val() !== '' && $('.star__input:checked').val() > 3) {
		$('.validForm').css('display', 'none');
		window.location.href = 'https://www.tripadvisor.ru/Restaurant_Review-g2535592-d13301497-Reviews-Alpen_Club-Sheregesh_Kemerovo_Oblast_Siberian_District.html'
	} else if ($('#phone').val() !== '' && $('.star__input:checked').val() < 4) {
		$('.validForm').css('display', 'none');
		$.ajax({
			type: 'post',
			url: '../send.php',
			data: {
				phone__number: $('#phone').val(),
				comment: $('.comment__area').val(),
				star: $('.star__input:checked').val()
			},
			error: function (response) {
			},
			success: function (response) {

			}
		})
		$('.button__feedback').fadeOut(500);
		$('textarea').hide(500);
		$('.review').hide(500);
		$('.masscomment').delay(500).css('font-size', '24px');
		// $('.button__arrow').remo('height', '0px');
		$('.button__arrow').remove();





	} else {
		$('.validForm').css('display', 'block');
	}
}
