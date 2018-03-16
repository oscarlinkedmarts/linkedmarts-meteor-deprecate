import { Mongo } from 'meteor/mongo';

Products = new Mongo.Collection('products');

Products.schema = new SimpleSchema({
	title: {
		type: String
	},
	pricing: {
		type: Array
	},
	category: {
		type: Object
	},
	transactions: {
		type: Array
	},
	reviews: {
		type: Array
	},
	inventory: {
		type: Number
	}
});
