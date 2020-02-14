
const maxAllowedChecks = 2;

function init () {
	$("input[type=checkbox]").change(trackChecks);
	$("input[type=radio]").change(trackRadios);
	console.log("скрипт подгрузился");
	  trackChecks();
  trackRadios();
}

function trackChecks () {
	let checkCount = $("input[type=checkbox]:checked").length;
	console.log(`Выбрано флажков: ${checkCount}`);
	$("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowedChecks);
}

function trackRadios () {
	let checkRadios = $("input[type=radio]:checked").length;
	console.log(`Выбрано кнопок: ${checkRadios}`);
	$("input[type=radio]").prop("disabled",true);
}

$(document).ready(init);
