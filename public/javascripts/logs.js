function parsePurchases(purchases) {
	var useful = [],
		extra = [],
		investment = [];
	for (var i=0; i<purchases.length; i++) {
		if (purchases[i].option == "useful") {
			useful.push(purchases[i]);
		} else if (purchases[i].option == "extra") {
			extra.push(purchases[i]);
		} else {
			investment.push(purchases[i]);
		}
	}

	return {useful: useful, extra: extra, investment: investment};
}

function formatPurchaseRow(purchase, investmentFlag) {
	var name = purchase.name;
	var price = purchase.price;
	var date = purchase.timestamp;
	var option = purchase.option;
	var decision = "";
	if (investmentFlag) {
		decision = "<td><button class='btn btn-default'>Useful</button><button class='btn btn-default'>Extra</button></td>"; 
	}

	return "<tr class='userRow " + option + "'><td>" +
				date + "</td>" + 
				"<td>" + name + "</td><td>" + 
				price + "</td>" + 
				decision + "</tr>";
}

function addToTable(id, rows, investmentFlag) {
	if (investmentFlag) {
		for (var i=0; i<rows.length; i++) {
			$('#' + id).append(formatPurchaseRow(rows[i], true));
		}	
	} else {
		for (var i=0; i<rows.length; i++) {
			$('#' + id).append(formatPurchaseRow(rows[i]));
		}	
	}
}