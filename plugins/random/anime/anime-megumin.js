const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['megumin'],
   command: ['megumin'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/megumin.json')).json();
      m.react("🕒");
      const megumin = pickRandom(data);
      conn.sendFile(m.chat, megumin, {
         caption: 'Megumin',
         quoted: m
      })
   },
   limit: 1
}