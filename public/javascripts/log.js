function formatPurchaseRow(purchase) {
	var name = purchase.name;
	var price = purchase.price;
	var option = purchase.option;

	return "<tr class='userRow '" + option + "><td>" + name + "</td><td>" + price + "</td></tr>";
}