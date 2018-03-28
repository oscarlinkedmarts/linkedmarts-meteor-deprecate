import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Products = new Mongo.Collection('products');

Products.schema = new SimpleSchema({
	title: {
		type: String
	},
	category: {
		type: Object
	},
	reviews: {
		type: Array
	},
	'reviews.$': {
		type: Object
	},
	variations: {
		type: Array
	},
	'variations.$': {
		type: Object
	},
	upsell: {
		type: Boolean
	},
	combo: {
		type: Array
	},
	'combo.$': {
		type: Object
	},
	description: {
		type: String
	},
	author: {
		type: String
	}
});

export const products_db = Products;
