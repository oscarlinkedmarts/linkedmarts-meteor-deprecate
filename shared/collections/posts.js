import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Posts = new Mongo.Collection('posts');

Posts.schema = new SimpleSchema({
	content: {
		type: String
	},
	whitelist: {
		type: Array
	},
	'whitelist.$': {
		type: String
	},
	author: {
		type: String
	},
	comments: {
		type: Array
	},
	'comments.$': {
		type: Object
	},
	cheers: {
		type: Array
	},
	'cheers.$': {
		type: String
	},
	products: {
		type: Array
	},
	'products.$': {
		type: String
	},
	timestamp: {
		type: Date
	}
});

export const posts_db = Posts;
