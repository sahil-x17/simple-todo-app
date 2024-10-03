const zod = require("zod");

const todosSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const completedSchema = zod.object({
  id: zod.string(),
});

module.exports = {
  todosSchema: todosSchema,
  completedSchema: completedSchema,
};
