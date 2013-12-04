Template.regiForm.events({
	'click #regiSubmit': function(evt, templ){
		var email = templ.find('input[name="email"]').value,
		 username = templ.find('input[name="username"]').value,
		 password = templ.find('input[name="password"]').value;

		 console.log('e:'+email+' u:'+username+' p:'+password);

		Accounts.createUser({email: email, username: username, password: password}, function(err){ 
			if (err && err.error === 403) {
	          Session.set('regiErrMsg', 'Account Creation Error &' + err.reason);
	          console.log('Account Creation Error &' + err.reason);
	          Session.set('regiStatus', false);
	        } else {
	        	Session.set('regiStatus', true);
	        	console.log('success');
	        }
		});
	}
});

Template.regiForm.helpers({
	regiSuccess: function(){
		return Session.get('regiStatus');
	},
	errMsg: function(){
		return Session.get('regiErrMsg');
	}
});

Template.loginForm.events({
	'click #loginSubmit': function(evt, templ){
		console.log('click');
	}
});