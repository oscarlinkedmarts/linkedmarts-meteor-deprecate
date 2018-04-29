import { Template } from 'meteor/templating';
import Files from '../../../shared/collections/files';

Router.route('/', function() {
	this.render('index', {
		data: {}
	});
});

Template.index.onCreated(function() {

});

Template.index.onRendered(function() {

});

Template.index.events({

	'click a[href=\'#add-pic\']': () => {
		$("a[href='#add-pic'] + input[type='file']").trigger("click");
	},

	'click a[href=\'#post-it\']': () => {

	}

});

Template.index.helpers({});
