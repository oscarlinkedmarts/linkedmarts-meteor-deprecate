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
	}
});

export const posts_db = Posts;
