const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['yuki'],
   command: ['yuki'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/yuki.json')).json();
      m.react("🕒");
      const yuki = pickRandom(data);
      conn.sendFile(m.chat, yuki, {
         caption: 'Yuki',
         quoted: m
      })
   },
   limit: 1
}