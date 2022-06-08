const { Markup } = require('telegraf');

const bot = require('../../connection/token.connection');
const db = require('../../connection/db.connection');
const UserModel = require('../../model/user.model');

module.exports = bot.start(async (ctx) => {
  try {
    await db.sync();

    const { startPayload } = ctx;
    const chatID = ctx.chat.id;
    const firstName = ctx.chat.first_name;
    const lastName = ctx.chat.last_name;
    const { username } = ctx.chat;

    const foundUser = await UserModel.findOne({ where: { chatID: ctx.chat.id } });
    if (!foundUser) {
      await UserModel.create({
        chatID,
        firstName,
        lastName,
        username,
        admin: false,
        startPayload,
      });
    }

    setInterval(() => {
      ctx.reply('bulk message');
    }, 1000);

    return ctx.replyWithHTML(`Hi, <b>${firstName}</b>!`);
  } catch (e) {
    console.log(e);
  }
});
