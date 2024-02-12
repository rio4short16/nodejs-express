const express = require("express");

const app = express();

// used for extending express to bodyParser
app.use(express.json());
app.use(express.urlencoded());

const PORT = 8080;

// Routes/ API
app.get("/user", (_, response) => {
  return response.json({
    success: true,
    status: 200,
  });
});

app.post("/user/create", (request, response) => {
  console.log(request.body);

  return response.json({
    success: true,
    status: 201,
  });
});

app.patch("/user/update", (request, response) => {
  console.log(request.body);

  return response.json({
    success: true,
    status: 200,
  });
});

app.delete("/user/delete/:id", (request, response) => {
  const { id } = request.params;

  return response.json({
    deleted: Number(id),
    status: 200,
  });
});

app.listen(PORT, () => {
  console.info(`
        Port: ${PORT}
        Environment: development
        Application: http://localhost:${PORT}
    `);
});
