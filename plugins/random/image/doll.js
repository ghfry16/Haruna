const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['doll'],
   command: ['doll'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/doll.json')).json();
      m.react("🕒");
      const doll = pickRandom(data);
      conn.sendFile(m.chat, doll, {
         caption: 'Doll',
         quoted: m
      })
   },
   limit: 1
}