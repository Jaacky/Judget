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
			investment.push(purhcases[i]);
		}
	}

	return {useful: useful, extra: extra, investment: investment};
}

function formatPurchaseRow(purchase) {
	var name = purchase.name;
	var price = purchase.price;
	var option = purchase.option;

	return "<tr class='userRow '" + option + "><td>" + name + "</td><td>" + price + "</td></tr>";
}

function addToTable(id, rows) {
	for (var i=0; i<rows.length; i++) {
		$('#' + id).append(formatPurchaseRow(rows[i]));
	}
}