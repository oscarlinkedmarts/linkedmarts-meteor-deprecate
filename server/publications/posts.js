import { Meteor } from 'meteor/meteor';
import { posts_db } from "../../shared/collections/posts";

Meteor.publish('posts_db', () => {
	return posts_db.find({
		$or: [
			
		]
	});
});


