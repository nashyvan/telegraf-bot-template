// SCENES
require('./bot/middleware/scene/index.scene');

// COMMANDS
require('./bot/middleware/command/commands.command');
require('./bot/middleware/command/start.command');
require('./bot/middleware/command/help.command');
require('./bot/middleware/command/setting.command');

// HEARS
require('./bot/middleware/hears/one.hears');
require('./bot/middleware/hears/two.hears');

// ACTION

// ON
require('./bot/middleware/on/text.on');

// CONNECTION
require('./bot/connection/local.connection');
// require("./bot/connection/lambda.connection");
