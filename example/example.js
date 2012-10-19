images = new Meteor.Collection("images");

if (Meteor.is_client) {
    Template.hello.fbDebugLink = function () {
        return "https://developers.facebook.com/tools/debug/og/object?q=" + encodeURIComponent(location.href);
    };

}

if (Meteor.is_server) {

    images.remove({});
    images.insert({name: 'headly', url: 'http://wiki.opscode.com/download/attachments/1180194/head_wire.jpg'});	


    Meteor.headly.config({tagsForRequest: function(req) {
	var url = __meteor_bootstrap__.require('url'); 
	var parts = url.parse(req.url).pathname.split('/'); //using url to determine og:title 
	var image = images.findOne({name: parts[1]}); // we can run db-access code in the headly callback
	return '<meta property="og:title" content="' + parts[1] + ' - ' + parts[2] + '" />\n'
	    + '<meta property="og:image" content="' + 
	    (image ? image.url : (('http://' + req.headers.host) + '/1.jpeg')) + '" />\n'; // image is either from db or server from our app
    }
			 });
    
    Meteor.startup(function () {
	// code to run on server at startup
    });
}