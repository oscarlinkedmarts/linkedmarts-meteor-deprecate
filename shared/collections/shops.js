import { Mongo } from 'meteor/mongo';

Shops = new Mongo.Collection('shops');

Shops.schema = new SimpleSchema({
	name: {
		type: String
	},
	contacts: {
		type: [Object]
	},
	verified: {
		type: Boolean
	}
});
