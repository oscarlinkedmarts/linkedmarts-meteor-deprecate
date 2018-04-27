import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	{
		let user = Meteor.users.findOne({
			username: 'root'
		});
		if (!user) {
			Accounts.createUser({
				username: 'root',
				password: 'root',
				profile: {
					name: 'Super User'
				}
			});
		}
	}
});
