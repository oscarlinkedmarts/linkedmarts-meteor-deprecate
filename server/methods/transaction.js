import { Meteor } from 'meteor/meteor';
import { Transaction } from "../service/transaction";

/**
 * client side call example

 Meteor.call('transaction', {
	method: 'create',
	params: SOME_PARAM_OBJECT
}, (err, res) => {
	// callback
});

 */

Meteor.methods({

	transaction: (json) => {
		switch (json['method']) {
			case 'create': {
				return Transaction.create(Meteor.user(), json['params']);
			}
		}
	}

});
