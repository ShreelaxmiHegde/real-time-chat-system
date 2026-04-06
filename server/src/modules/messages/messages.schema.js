const { z } = require('zod');

const BaseMessageSchema = z.object({
    roomId: z.number(),
    senderId: z.number()
});

const TextMessageSchema = BaseMessageSchema.extend({
    type: z.literal("text"),
    text: z
        .string()
        .min(1)
        .max(2000)
        .trim()
});

const ImageMessageSchema = BaseMessageSchema.extend({
    type: z.literal("image"),
    url: z.string().url(),
    text: z.string().optional()
});

const FileMessageSchema = BaseMessageSchema.extend({
    type: z.literal("file"),
    url: z.string().url(),
    filename: z.string(),
    size: z.number()
});

module.exports.SendMessageSchema = z.discriminatedUnion("type", [
    TextMessageSchema,
    ImageMessageSchema,
    FileMessageSchema
]);

module.exports.normalizeMessage = (data) => {
    switch (data.type) {
        case "text":
            return {
                room_id: data.roomId,
                sender_id: data.senderId,
                content: data.content,
                metadata: { type: "text" }
            };

        case "image":
            return {
                room_id: data.roomId,
                sender_id: data.senderId,
                content: data.text || "",
                metadata: {
                    type: "image",
                    url: data.url
                }
            };

        case "file":
            return {
                room_id: data.roomId,
                sender_id: data.senderId,
                content: data.filename,
                metadata: {
                    type: "file",
                    url: data.url,
                    size: data.size
                }
            };
    }
}