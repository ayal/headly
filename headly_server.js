(function () {
  var ConnectHandler = __meteor_bootstrap__.app || WebApp.connectHandlers;

  var userAgentDetectors = {
    'facebookexternalhit': 'facebook',
    //add for backwards compatibility
    'facebookexternalhi': 'tagsForRequest',
    'Twitterbot': 'twitter'
  };

  if (typeof Fiber === "undefined") {
    Fiber = Npm.require("fibers");
  }

  if (!Meteor.headly) {
    Meteor.headly = {};
  }

  if (!Meteor.headly._options) {
    Meteor.headly._options = {};
  }

  Meteor.headly.config = function(options) {
    Meteor.headly._options = options || Meteor.headly._options;
  };

  ConnectHandler.use(function(req, res, next) {
    var detected = _.find(_.keys(userAgentDetectors), function(detector){
      return req.headers['user-agent'].indexOf(detector) !== -1 && !!Meteor.headly._options[userAgentDetectors[detector]];
    });
    if (detected) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      Fiber(function () {
        var data = req;
        if(Meteor.headly._options.data){
          data = Meteor.headly._options.data(req);
        }
        var head = Meteor.headly._options[userAgentDetectors[detected]](data);
        if (head) {
          res.write('<head>');
          res.write(head);
          res.write('</head>');
        }
        res.end();
      }).run();
    } else {
      next();
    }
  });
})();