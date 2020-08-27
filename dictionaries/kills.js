module.exports = {
	dict: function () {
		var dictionary = Array(
			" was pushed off the edge of a cliff by a toddler",
			" died of dysentery",
			" ate all of the wallgreens toothpaste",
			" was eaten in the womb",
			" got hit by a unicycle going 85 mph on the interstate",
			" swallowed a rock",
			" forgot to forward a chain email",
			" got hit by a train",
			" forgot to breathe",
			" died by caffeine overdose",
			" hugged a cactus",
			" died from SEGMENTATION FAULT",
			" became immortal... Oh well."
		);

		var item = dictionary[Math.floor(Math.random()*dictionary.length)];

		return item;
	}
};
