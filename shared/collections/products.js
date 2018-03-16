import { Mongo } from 'meteor/mongo';

Products = new Mongo.Collection('products');

Products.schema = new SimpleSchema({
	title: {
		type: String
	},
	category: {
		type: Object
	},
	reviews: {
		type: [Object]
	},
	variations: {
		type: Object
	},
	upsell: {
		type: Boolean
	},
	combo: {
		type: [Object]
	}
});

export const products_db = Products;
