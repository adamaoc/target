var App = Ember.Application.create({
    LOG_TRANSITIONS: true
    });


App.Router.map(function() {
	this.resource('dashboard');
	this.resource('users');
});

App.UsersRoute = Ember.Route.extend({
	model: function() {
		return App.User.find();
	}
});
App.IndexRoute = Ember.Route.extend({
	model: function() {
		return App.User.find(1);
	}
});

App.DashboardRoute = Ember.Route.extend({
	model: function() {
		return App.User.find(1);
	}
});

App.ClickableView = Ember.View.extend({
  click: function(evt) {
  	var appFooter = $('.app-footer');
  	var appNav = $('.app-nav');
  	if (appFooter.hasClass('footer-open')) {
  		appFooter.removeClass('footer-open');
  		appNav.hide();
  	} else {
   		appFooter.addClass('footer-open');
   		appNav.show();
   	}
  }
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.User = DS.Model.extend({
	username: DS.attr('string'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	assignID: DS.attr('string'),
	bio: DS.attr('string'),
	joinedDate: DS.attr('string'),
	rank: DS.attr('string')
});

App.User.FIXTURES = [
	{
		"id": 1,
		"username": "adamaoc",
		"firstName": "Adam",
		"lastName": "Moore",
		"assignID": "1001",
		"bio": "Working on the Enterprise team building out the new Ford Mobile Skin.",
		"rank": "Assassin"
	}, 
	{
		"id": 2,
		"username": "mlusby",
		"firstName": "Mark",
		"lastName": "Lusby",
		"assignID": "10202",
		"bio": "Working on the Inventory Search team building out the new MVC Inventory pages!",
		"rank": "Killer"
	}
];