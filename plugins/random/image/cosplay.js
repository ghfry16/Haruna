const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['cosplay'],
   command: ['cosplay'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/cosplay.json')).json();
      m.react("🕒");
      const cosplay = pickRandom(data);
      conn.sendFile(m.chat, cosplay, {
         caption: 'Cosplay',
         quoted: m
      })
   },
   limit: 1
}