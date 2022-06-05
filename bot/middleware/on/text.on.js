const bot = require('../../connection/token.connection');
const gsapi = require('../../plugin/googleSheets/gsapi.plugin');

module.exports = bot.on('text', async (ctx) => {
  try {
    const res = ctx.message.text;

    const optUpdate = {
      spreadsheetId: '1VwnanNA2Mc8e7lU9WV9XYkDZFuahteq0sRWFK34qPVc',
      range: 'Data!A:B', // Data - название листа
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [
          [
            '1', `${res}`,
          ],
        ],
      },
    };

    await gsapi.spreadsheets.values.append(optUpdate);
  } catch (e) {
    console.log(e);
  }
});
