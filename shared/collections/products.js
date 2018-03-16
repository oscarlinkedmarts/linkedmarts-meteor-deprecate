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
	}
});

export const products_db = Products;
