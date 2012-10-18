images = new Meteor.Collection("images");

if (Meteor.is_client) {
  Template.hello.greeting = function () {
    return "Welcome to example.";
  };

  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
}

if (Meteor.is_server) {

    images.remove({});
    images.insert({name: 'headly', url: 'http://wiki.opscode.com/download/attachments/1180194/head_wire.jpg'});	


    Meteor.headly.config({tagsForRequest: function(req, callback) {
			      var url = __meteor_bootstrap__.require('url'); 
			      var parts = url.parse(req.url).pathname.split('/'); //using url to determine og:title 
			      var image = images.findOne({name: parts[1]}); // showing we can run db-access code in the headly callback
			      callback('<meta property="og:title" content="' + parts[1] + ' - ' + parts[2] + '" />\n'
				       + '<meta property="og:image" content="' + image.url + '" />\n');
			  }
			 });
    
    Meteor.startup(function () {
		       // code to run on server at startup
		   });
}