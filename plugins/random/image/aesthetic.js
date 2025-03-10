const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['aesthetic'],
   command: ['aesthetic'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/aesthetic.json')).json();
      m.react("🕒");
      const aesthetic = pickRandom(data);
      conn.sendFile(m.chat, aesthetic, {
         caption: 'Aesthetic',
         quoted: m
      })
   },
   limit: 1
}