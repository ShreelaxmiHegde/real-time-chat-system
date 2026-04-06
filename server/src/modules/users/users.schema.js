const z = require('zod');

module.exports.CreateUserSchema = z.object({
    username: z
        .string()
        .min(3)
        .max(50)
        .trim(),

    email: z
        .string()
        .email()
        .toLowerCase(),

    password: z
        .string()
        .min(6)
        .max(100)
});

module.exports.LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
});