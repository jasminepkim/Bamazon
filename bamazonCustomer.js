// Load dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

// Connect to MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "", // *Enter password*
  database: "bamazon_db"
});

// If the connection is successful, then display the Bamazon table
connection.connect(function (err) {
  if (err) throw err;
  loadTable();
});

// To display the Bamazon table
function loadTable() {
  connection.query("SELECT * FROM products", function (error, result) {
    if (error) throw (error);
    // Display "prettified" table formatting via the console.table module
    console.log("\==============================================================================");
    console.table(result);
    promptItemId(result);
  })
}

// Prompt the user to purchase the item by inputting the item ID
function promptItemId(result) {
  inquirer
    .prompt({
      name: "item_id",
      type: "input",
      message: "What would you like to purchase? Enter in the item ID",
      validate: function (value) {
        return !isNaN(value);
      }
    })
    .then(function (value) {
      var item = checkItemId(value, result);
      if (item) {
        promptStockQty(item);
      } else {
        console.log("That is not a valid item ID, please try again.");
        loadTable();
      }
    })
}

// To match the user's input of the item ID to the Bamazon table
function checkItemId(value, result) {
  for (var i = 0; i < result.length; i++) {
    if (value.item_id == result[i].item_id) {
      return result[i];
      console.log(res);
    }
  }
  return null;
}

// Prompt the user the amount of quantities of items to buy
function promptStockQty(item) {
  inquirer
    .prompt({
      name: "stock_quantity",
      type: "input",
      message: "How many would you like to purchase?",
    })
    .then(function (value) {
      if (value.stock_quantity > item.stock_quantity) {
        console.log();
        console.log("We're sorry, there are not enough items in stock. Please try again.");
        console.log();
        loadTable();
      } else {
        console.log();
        // Display the total purchase price per item
        console.log("Your purchase total for " + item.product_name + " is: $" + value.stock_quantity * item.price);
        console.log();
        // Update the table's quantity amounts after the user has made a successful purchase
        var updatedQty = item.stock_quantity - value.stock_quantity;
        connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [updatedQty, item.item_id], function (err, result) {
          if (err) throw err;
          loadTable();
        });
      }
    })
}