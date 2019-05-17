const express = require('express');

const app = express();

require("./routes/index")(app);
require("./routes/client")(app);
require("./routes/table")(app);
require("./routes/reservation")(app);
require("./routes/tablereserved")(app);
require("./routes/reserveTableTransaction")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log("App listening at localhost:" + PORT);