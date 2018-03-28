import { Meteor } from 'meteor/meteor';
import { posts_db } from "../../shared/collections/posts";

Meteor.publish('posts_db', () => {
	return posts_db.find({
		$or: [
			{
				whitelist: {
					$in: [
						Meteor.userId()
					]
				}
			},
			{
				whitelist: []
			}
		]
	});
});

posts_db.allow({
	insert: (userId, doc) => {
		return true;
	},
	update: (userId, doc, fieldNames, modifier) => {
		return (userId === doc['author']);
	},
	remove: (userId, doc) => {
		return (userId === doc['author']);
	}
});
