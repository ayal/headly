headly
======

meteor package to handle facebookexternalhit responses (for og:metatags use)

**Install**

Use [meteorite](http://possibilities.github.com/meteorite/)

Then add headly to you meteor app using:

```bash
mrt add healdy
```

**config headly**

In your server code use something like:

```javascript
 Meteor.headly.config({tagsForRequest: function(req, callback) {
  callback('<meta property="og:title" content="headly" />');
});
```

.. or try the example first to get the hang of it:

- run the example using meteor

- navigate to the server where the example runs like so: http://theserver/healdy/madly

- click the link to see the result in the facebook debugger

- navigate to the server where the example runs like so: http://theserver/healdy/madly

- click the link to see the result in the facebook debugger

- look at the example's code to see what just happened

