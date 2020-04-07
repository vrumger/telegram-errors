# Telegram Bot API Errors

| Error Code | API Description | Human Description | Methods |
|--------------|------------------|-------------------|:---------------:|
| 400 | Bad Request: message can't be deleted |  | deleteMessage |
| 400 | Bad Request: not enough rights to export chat invite link |  | exportChatInviteLink |
| 400 | Bad Request: have no rights to send a message |  | sendMessage |
| 400 | Bad Request: message to delete not found |  | deleteMessage |
| 400 | Bad Request: CHANNEL_PRIVATE |  | getChatAdministrators |
| 400 | Bad Request: reply message not found |  | sendMessage |
| 400 | Bad Request: CHAT_WRITE_FORBIDDEN |  | sendMessage |
| 400 | Bad Request: group chat was upgraded to a supergroup chat |  | sendMessage |
| 400 | Bad Request: chat not found |  | sendMessage |
| 401 | Unauthorized | The bot token is incorrect | all |
| 403 | Forbidden: bot was blocked by the user | Bot was blocked by the user | sendMessage |
| 403 | Forbidden: user is deactivated | The specified user was deleted | unknown |
| 403 | Forbidden: bot was kicked from the supergroup chat |  | sendMessage, exportChatInviteLink, getChatAdministrators |
| 403 | Forbidden: MESSAGE_DELETE_FORBIDDEN |  | deleteMessage |
| 403 | Forbidden: bot is not a member of the supergroup chat |  | sendMessage |
| 403 | Forbidden: bot is not a member of the channel chat |  | deleteMessage |
| 403 | Forbidden: bot was kicked from the group chat |  | sendMessage |
| 403 | Forbidden: bot can't initiate conversation with a user | The user needs to start the bot before you can send them a message | sendMessage |
| 429 | Too Many Requests: retry after \d+ |  | all |