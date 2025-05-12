const TelegramBot = require('node-telegram-bot-api');

// Вставь сюда свой токен
const token = '8084485543:AAGCI-3jPaCc8sU0098mbCtSu5kezSfra0A';
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Открой кейсы прямо здесь 👇', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🎁 Открыть кейсы',
            web_app: { url: 'https://cs2-case-webapp.vercel.app' }
          }
        ]
      ]
    }
  });
});
