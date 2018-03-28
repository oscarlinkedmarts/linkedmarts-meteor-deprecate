import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Shops = new Mongo.Collection('shops');

Shops.schema = new SimpleSchema({
	name: {
		type: String
	},
	contacts: {
		type: Array
	},
	'contacts.$': {
		type: Object
	},
	verified: {
		type: Boolean
	}
});
