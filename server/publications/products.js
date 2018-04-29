import { Meteor } from 'meteor/meteor';
import { products_db } from "../../shared/collections/products";

Meteor.publish('products_db', () => {
	return products_db.find();
});

products_db.allow({
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
