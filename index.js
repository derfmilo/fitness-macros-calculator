const Moment = require('moment');

exports.macros = function(stats){
	//lb to kg conversion
	if(typeof stats.weight === 'undefined'){
		console.log(`No Weight Value`);
		process.exit();
	}
	if(typeof stats.height === 'undefined'){
		console.log(`No Height Values`);
		process.exit();
	}
	if(typeof stats.birthday === 'undefined'){
		console.log(`No Birthdate Value`);
		process.exit();
	}
	var nearExact = stats.weight * 0.45359237;
	var kg = Math.floor(nearExact);
	//Get Height conversion to cm
	var inchvalue = parseInt(stats.height.ft) * 12 + parseInt(stats.height.in)
	var cm = Math.floor(inchvalue*2.54);
	//Get Age conversion in years
	var age = Moment().diff(stats.birthday, 'years');
	//Run Algorith
	var bmr = 10 * kg + 6.25 * cm - 5 * age - 161

	//calories
	var caloriesv = {}
	//weightloss
	var dex = bmr * 0.04;
	caloriesv.weightloss = bmr - dex;
	//maintain %15 activity rating
	caloriesv.weightmaintain = bmr + bmr * 0.15;
	//gain %24 activity rating
	caloriesv.weightgain = bmr + bmr * 0.24;

	//Carbs
	var carbsv = {}
	//weightloss
	carbsv.weightloss = Math.round(bmr/9.78754579).toFixed(1);
	//weightmaintain
	carbsv.weightmaintain = Math.round(bmr/6.1623616).toFixed(1);
	//weightgain
	carbsv.weightgain = Math.round(bmr/5.20249221).toFixed(1);

	//protein
	var proteinv = bmr/12.97087379;

	//fat
	var fatv = Math.round(bmr/37.00831025).toFixed(1);
	return {
		carbs:carbsv,
		calories:caloriesv,
		fat:fatv,
		protein:JSON.stringify(Math.floor(proteinv))
	};
}
