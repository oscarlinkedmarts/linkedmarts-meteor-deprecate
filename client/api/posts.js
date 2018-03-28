import { Meteor } from 'meteor/meteor';
import { posts_db } from "../../shared/collections/posts";

API.posts = {

	subscribe: () => {
		Meteor.subscribe('posts_db');
	},

	dump: () => {
		return posts_db.find().fetch();
	},

	createPost: (content, whitelist) => {
		if (Meteor.user()) {
			posts_db.insert({
				content: content,
				whitelist: whitelist,
				author: Meteor.userId()
			});
		}
	}

};
