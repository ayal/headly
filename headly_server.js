(function () {
     if (!Meteor.headly) {	 
	 Meteor.headly = {};
     }

     if (!Meteor.headly._options) {
	 Meteor.headly._options = {};
     }

     Meteor.headly.config = function(options) {
	 Meteor.headly._options = options || Meteor.headly._options;
     };

     __meteor_bootstrap__.app
	 .use(function(req, res, next) {
		  if (req.headers['user-agent'].indexOf('facebookexternalhit') !== -1) {
		      res.writeHead(200, {'Content-Type': 'text/html'});
		      Fiber(function () {
				Meteor.headly._options.tagsForRequest && 
				    Meteor.headly._options.tagsForRequest(req, 
								function(head) {
								    if (head) {
									res.write('<head>');
									res.write(head);
									res.write('</head>');
								    }
								    res.end();
								});
			    }).run();
		  }
		  else {
		      next();   
		  }
	      });
 })();