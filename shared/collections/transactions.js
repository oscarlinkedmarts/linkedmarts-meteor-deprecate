import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Transactions = new Mongo.Collection('wallets');

Transactions.schema = new SimpleSchema({
	debit: {
		type: [Object],
		defaultValue: []
	},
	credit: {
		type: [Object],
		defaultValue: []
	}
});

/**
 * Preliminary design of the transactions collection structure.
 * Design may be modified where necessary.

 var transaction = {
	debit: [
		{
			wallet: SELLER_ID,
			value: 100
		}
	],
	credit: [
		{
			wallet: BUYER_ID,
			value: 100
		}
	]
}

 */

export const transactions_db = Transactions;
