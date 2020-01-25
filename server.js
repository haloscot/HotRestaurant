// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Reservations (DATA)
// =============================================================
const tables = [{
        customerName: "Jennifer Aniston",
        phoneNumber: "919-999-9999",
        customerEmail: "jenaniston@gmail.com",
        customerID: "jen"
    }

];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json();
});

// Displays a single table, or returns false
app.get("/api/tables/:table", function(req, res) {
    var chosen = req.params.table;

    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
        }
    }

    return res.json(false);
});

// Create New Tables - takes in JSON input
app.post("/api/tables", function(req, res) {
    let newTable = req.body;

    newTable.routeName = newTable.customerID.toString().replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});