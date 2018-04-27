import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Template } from 'meteor/templating';
import { products_db } from "../../../../shared/collections/products";

Router.route('/products/:_id', function() {
	this.render('products$_id', {
		data: {
			params: this.params
		}
	});
});

Template.products$_id.onCreated(function() {
	const instance = Template.instance();
	Meteor.subscribe('users_db');
	Meteor.subscribe('products_db', () => {
		if (instance.data['params']['_id'] !== '0') {
			let product = products_db.findOne({
				_id: instance.data['params']['_id']
			});
			if (!product) {
				window.location.href = '/';
			}
		}
	});
	Tracker.autorun(() => {
		if (Meteor.user() !== undefined) {
			if (!Meteor.user()) {
				window.location.href = '/';
			}
		}
	});
});

Template.products$_id.onRendered(function() {
	const instance = Template.instance();
	if (instance.data['params']['_id'] !== '0') {
		Tracker.autorun(() => {
			let product = products_db.findOne({
				_id: instance.data['params']['_id']
			});
			if (product) {
				$(".form > .field > input[name='title']").val(product['title']);
				$(".form > .field > input[name='description']").val(product['description']);
			}
		});
	}
});

Template.products$_id.events({

	'click .form > .positive.button': () => {
		let title = $(".form > .field > input[name='title']").val();
		let description = $(".form > .field > input[name='description']").val();
		products_db.insert({
			title: title,
			category: {},
			reviews: [],
			variations: [],
			upsell: false,
			combo: [],
			description: description,
			author: Meteor.userId()
		}, (err, _id) => {
			window.location.href = '/products/' + _id;
		});
	},

	'click .form > .negative.button': () => {
		const instance = Template.instance();
		products_db.remove({
			_id: instance.data['params']['_id']
		});
		window.location.href = '/products'
	},

	'click .form  > table > thead > tr > th > .primary.button': () => {
		const instance = Template.instance();
		$("#id_products\\$_id_modal_variations").modal({
			onApprove: () => {
				let title = $("#id_products\\$_id_modal_variations > .image.content > .description > form > .field > input[name='title']").val();
				let description = $("#id_products\\$_id_modal_variations > .image.content > .description > form > .field > input[name='description']").val();
				let price = parseFloat($("#id_products\\$_id_input_price").val());
				products_db.update({
					_id: instance.data['params']['_id']
				}, {
					$push: {
						variations: {
							title: title,
							description: description,
							price: price
						}
					}
				});
			}
		}).modal('show');
	}

});

Template.products$_id.helpers({

	existing: () => {
		const instance = Template.instance();
		return (instance.data['params']['_id'] !== '0');
	},

	getProduct: () => {
		const instance = Template.instance();
		return products_db.findOne({
			_id: instance.data['params']['_id']
		});
	}

});
