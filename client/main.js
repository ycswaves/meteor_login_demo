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

$.fn.editable.defaults.mode = 'inline';

Template.insertBookForm.booksCollection = function () {
	return Books;
}

Template.editableTable.rendered = function (){
	$(this.find('#textAreaEdit.editable:not(.editable-click)')).editable('destroy').editable({
		validate: function(val){
			if($.trim(val) == ''){
				return 'This field is required ;)';
			}
		},
  		success: function(response, newValue) {
   			console.log(newValue +' response:'+ response);	
		}
	});

	$(this.find('#nameEdit.editable:not(.editable-click)')).editable('destroy').editable({
		validate: function(val){
			if($.trim(val) == ''){
				return 'This field is required.';
			}
		},
<<<<<<< HEAD
  		success: function(response, newValue) {
   			console.log(newValue +' response:'+ response);	
		}
	});

	$(this.find('#groupEdit.editable:not(.editable-click)')).editable({
		source: [
              {id: 'gb', text: 'Great Britain'},
              {id: 'us', text: 'United States'},
              {id: 'ru', text: 'Russia'}
           ],
        select2: {
           multiple: true
        },

		validate: function(val){
			if($.trim(val) == ''){
				return 'This field is required.';
			}
		},
=======
>>>>>>> ecffb2be099340b1eddbd9db03846b11671a8e34
  		success: function(response, newValue) {
   			console.log(newValue +' response:'+ response);	
		}
	});
}
