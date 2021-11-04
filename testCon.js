var mysql = require('mysql');

var con = mysql.createConnection({
  host: "baked-goods-market-research-do-user-9878899-0.b.db.ondigitalocean.com:25060",
  user: "doadmin",
  password: "uWBwgzfZVhPhUYex",
  db: "defaultdb"
});

$(".getData").click(() => {
  con.connect((err) => {
    console.log("Connected!");
    var sql = "SELECT * FROM defaultdb";
    con.query(sql, function (err, result) {
      if (err) throw err;
      $(".output").text(result);
    });
  });
});