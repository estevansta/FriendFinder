
// loading the dummy data for the app
var friends = require("../app/data/friends");

// actual js routing 
// app.GET request data in parsed json api
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

// post method to display the parsed json
    app.post("/api/friends", function(req, res) {
    // server responds to request true if there is data, false if there isnt.
    // res.body to parse
    if (friends.length < 1) {
        friends.push(req.body);
        res.json(true);
    }
    else {
        friends.push(req.body);
        res.json(false);
    }
    });

    // HOt restaurant said not to worry about this line of code lol
    app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        friends.length = [];
        res.json({ ok: true });
});
}

