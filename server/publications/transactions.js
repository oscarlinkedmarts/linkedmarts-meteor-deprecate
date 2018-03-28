import { Meteor } from 'meteor/meteor';
import { transactions_db } from "/shared/collections/transactions";

Meteor.publish('transactions_db', function() {
	// TODO security
	return transactions_db.find();
});
