var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});


App.Router.map(function() {
	this.resource('users');
	this.route('dashboard', { path: "/dashboard" });
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.create({
  	url: 'http://dev.ampnetmedia.com/api'
  })
});

App.User = DS.Model.extend({
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),
	userID: DS.attr('string'),
	bio: DS.attr('string'),
	rank: DS.attr('string')
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		$user = App.User.find();
		console.log($user);
		return App.User.find();
	},
	// events: {
	// 	logIn: function() {
	// 		// check credentials
	// 		var $username = $('#username').val(),
	// 			$password = $('#password').val();
	// 			$user = this.modelFor('User');

	// 		if ($username == 'adam' & $password == 'test') {
	// 			this.transitionTo('smallDash');
	// 			console.log($user);
	// 		} else {
	// 			alert('error');
	// 		}
	// 	}
	// },
});

App.UsersRoute = Ember.Route.extend({
	model: function() {
		// return App.User.find();
		return App.User.find();
	}
});

App.dashboard = Ember.Route.extend({
	model: function(params) {
		// return users[params.user_id];
		return App.User.find(params.userID);
	}
});
