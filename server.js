const express = require('express');

const app = express();
app.get('/api/customers',(req,res)=>{
  // this would be a real data base
  const customers = [
      {id:1, firstName:"John", lastName:"doe"},
      {id:2, firstName:"mary", lastName:"msoth"},
      {id:3, firstName:"steve", lastName:"watsn"}
  ];

  res.json(customers);
});

const port = 5000;
app.listen(port, () => console.log(`server started on port ${port}`));

// npm run server
