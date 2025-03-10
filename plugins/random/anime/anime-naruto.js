const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['naruto'],
   command: ['naruto'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/naruto.json')).json();
      m.react("🕒");
      const naruto = pickRandom(data);
      conn.sendFile(m.chat, naruto, {
         caption: 'Naruto',
         quoted: m
      })
   },
   limit: 1
}