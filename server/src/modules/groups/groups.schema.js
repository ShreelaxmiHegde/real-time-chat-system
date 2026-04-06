const z = require('zode');

module.exports.GroupSchema = z.object({
    name: z
        .string()
        .min(3)
        .max(50)
        .trim(),

    members: z
        .array(z.number()) // user IDs
        .min(1)
});

module.exports.JoinGroupSchema = z.object({
    roomId: z.number(),
    userId: z.number()
});