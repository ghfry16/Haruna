const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['pussy', 'pusy'],
   command: ['pussy', 'pusy'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/pussy.json')).json();
      m.react("🕒");
      const pussy = pickRandom(data);
      conn.sendFile(m.chat, pussy, {
         caption: 'Pussy',
         quoted: m
      })
   },
   limit: 1
}