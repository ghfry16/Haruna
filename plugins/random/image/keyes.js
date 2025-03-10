const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['kayes'],
   command: ['kayes'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/keyes.json')).json();
      m.react("🕒");
      const keyes = pickRandom(data);
      conn.sendFile(m.chat, keyes, {
         caption: 'Kayes',
         quoted: m
      })
   },
   limit: 1
}