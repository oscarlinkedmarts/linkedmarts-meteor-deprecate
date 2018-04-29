import { Meteor } from 'meteor/meteor';
import Files from "../../shared/collections/files";

Files.denyClient();

Meteor.publish('files_db', function() {
	if (Roles.userIsInRole(Meteor.userId(), ['administrator'])) {
		return Files.find().cursor;
	} else {
		return Files.find({
			$or: [
				{
					'meta.whitelist': []
				},
				{
					'meta.whitelist': {
						$in: [
							Meteor.userId()
						]
					}
				}
			]
		}).cursor;
	}
});
