headly
======

meteor package to handle external service requests to generate metatag responses (for og:metatags use)

**Install**

Use [meteorite](http://possibilities.github.com/meteorite/)

Then add headly to your meteor app using:

```bash
mrt add headly
```

... or ... you can clone the code to your meteor/packages directory manually

**config headly**

In your server code use something like:

```javascript
Meteor.headly.config({
    data: function(req){
      //do something dynamic here, i.e get title from db based on url param
      return {title: dynamic.title};
    },
    facebook: function(data) {
      return '<meta property="og:title" content="'+data.title+'" />';
    },
    twitter: function(data) {
      return '<meta name="twitter:card" content="summary"> ';
}});
```

.. or try the example first to get the hang of it:

- run the example using meteor

- navigate to the server where the example runs like so: http://theserver/fffuu/madly

- click the link to see the result in the facebook debugger

- navigate to the server where the example runs like so: http://theserver/headly/madly

- click the link to see the result in the facebook debugger

- you can also try to post "http://theserver/headly/madly" to facebook and see how it handles it

- look at the example's code to see what just happened

