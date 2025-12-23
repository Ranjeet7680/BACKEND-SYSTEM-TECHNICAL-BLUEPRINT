const { z } = require("zod");

exports.generateTokenSchema = z.object({
  customerName: z.string().min(2),
});
