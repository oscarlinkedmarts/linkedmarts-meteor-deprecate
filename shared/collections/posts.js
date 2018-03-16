import { Mongo } from 'meteor/mongo';

Posts = new Mongo.Collection('posts');

Posts.schema = new SimpleSchema({
	content: {
		type: String
	},
	whitelist: {
		type: [String]
	},
	author: {
		type: String
	},
	comments: {
		type: [Object]
	},
	cheers: {
		type: [String]
	},
	products: {
		type: [String]
	},
	timestamp: {
		type: Date
	}
});

export const posts_db = Posts;
