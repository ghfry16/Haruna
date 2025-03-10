const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['shota'],
   command: ['shota'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/shota.json')).json();
      m.react("🕒");
      const shota = pickRandom(data);
      conn.sendFile(m.chat, shota, {
         caption: 'Shota',
         quoted: m
      })
   },
   limit: 1
}