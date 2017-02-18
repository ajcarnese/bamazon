var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'C0c0nuts!',
    database: 'bamazon_db',
});

connection.connect();

connection.query('SELECT * from products', function(error, results, fields) {
    inquirer.prompt([{
        type: "input",
        name: "product",
        message: "Put the id of the product that you want to purchase!"
    }]).then(function(data) {
        var product = data.product;

        connection.query('SELECT * from products', function(error, results, fields) {
            inquirer.prompt([{
                type: "input",
                name: "quantity",
                message: "Set the quantity you wish to purchase of: " + results.product_name
            }]).then(function(data) {
            	     // connection.query('INSERT into dranken_beers SET ?', {
                  //   beer_id: data.beer_id,
                  //   dranker_id: dranker
                }, function(error, results, fields) {
                    if (!error) return ('it worked!')
                    connection.end();
                });
            });
        });

    });