const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['husbu'],
   command: ['husbu'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/husbu.json')).json();
      m.react("🕒");
      const husbu = pickRandom(data);
      conn.sendFile(m.chat, husbu, {
         caption: 'Husbu',
         quoted: m
      })
   },
   limit: 1
}