const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['loli'],
   command: ['loli'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/loli.json')).json();
      m.react("🕒");
      const loli = pickRandom(data);
      conn.sendFile(m.chat, loli, {
         caption: 'Loli',
         quoted: m
      })
   },
   limit: 1
}