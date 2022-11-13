let prozStav = prompt("Введите сюда процентную ставку: "); 

if(prozStav > 0){
	let summaVznosa = prompt("Введите сюда сумму взноса: ");
			prozStav = Number(prozStav);
			prozStav = prozStav / 1200 //Процентная ставка


	if(summaVznosa >= 0){
		let summaCredita = prompt("Введите сумму кредита: ");
		summaVznosa = Number(summaVznosa);//Сумма взноса


		if(summaCredita > 0){
			let dataEnd = new Date(prompt('дата в формете мм.дд.гггг', ''));// дата окончания
			summaCredita = Number(summaCredita);//Сумма кредита
			let today = new Date();// время сейчас
			// today = today.getMonth();
			// today = today.getDate();

			if (dataEnd > today) {
				let bodyCredit = summaCredita - summaVznosa;
				let srokCreditInMonth = 0 - ((today.getFullYear() - dataEnd.getFullYear()) * 12) - (today.getMonth() - dataEnd.getMonth());
				let everyMonthOplata = bodyCredit*(prozStav+prozStav/(((1+prozStav)**srokCreditInMonth)-1));
				let totalSumma = (everyMonthOplata * srokCreditInMonth).toFixed(2);
				alert("Вы должны: " + totalSumma);
			}else{
				alert("Неправильное значение даты")
			}
}else{
	alert("Неправильное значение");
}		
	
	}else{
		alert("Неправильное значение");
	}		
	
		}else{
			alert("Неправильное значение");
		}