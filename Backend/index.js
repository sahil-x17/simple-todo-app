//
const express = require("express");
const { todosSchema, completedSchema } = require("./types.js");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//body{
// title: string;
// description: string;
// }

app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = todosSchema.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
  //put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async (req, res) => {
  const response = await todo.find({}); //always await , ohterwise what we get is a promise which will eventually resolve into data , but not the actual data

  res.json({
    todos: response,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = completedSchema.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT, () => {
  console.log(`app listening on PORT ${PORT}`);
});
