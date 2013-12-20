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

//$.fn.editable.defaults.mode = 'inline';

Template.insertBookForm.booksCollection = function () {
	return Books;
}
$.pnotify.defaults.delay = 7000;
Template.editableTable.rendered = function (){
	//
	$(this.find('#dateEdit.editable:not(.editable-click)')).editable('destroy').editable({
		validate: function(val){
			if($.trim(val) == ''){
				return 'This field is required ;)';
			}
		},
  		success: function(response, newValue) {
   			console.log(newValue +' response:'+ response);
   			$.pnotify({
			    //title: 'Changes Saved!',
			    text: 'Changes Saved!',
			    type: 'success'
			});
		}
	});

	$(this.find('#nameEdit.editable:not(.editable-click)')).editable('destroy').editable({
		validate: function(val){
			if($.trim(val) == ''){
				return 'This field is required.';
			}
		},
  		success: function(response, newValue) {
   			console.log(newValue +' response:'+ response);	
		}
	});

	$(this.find('#groupEdit.editable:not(.editable-click)')).editable({
        select2: {
          	tags: ['html', 'javascript', 'css', 'ajax'],
            tokenSeparators: [",", " "]
        },

		validate: function(val){
			if($.trim(val) == ''){
				return 'This field is required.';
			}
		},
  		success: function(response, newValue) {
   			console.log(newValue +' response:'+ response);	
		}
	});
	$(this.findAll('.editable')).editable('disable');
	$(this.find('#icon-bell')).jrumble({
		x: 1,
		y: 0,
		rotation: 10,
		speed: 30
	});
	demoStart();
}

Template.editableTable.events({
	'click #form-edit': function(e,templ){
		console.log('click edit');
		$(templ.findAll('.editable')).editable('toggleDisabled');
	}
});

var demoStart = function(){
	$('#icon-bell').trigger('startRumble');
	setTimeout(demoStop, 2000);
};

var demoStop = function(){
	$('#icon-bell').trigger('stopRumble');
	setTimeout(demoStart, 2000);
};