import { Meteor } from 'meteor/meteor';

API.users = {

	subscribe: () => {
		Meteor.subscribe('users_db');
	}

};
