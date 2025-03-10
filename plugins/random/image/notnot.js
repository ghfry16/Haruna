const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['notnot'],
   command: ['notnot'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/notnot.json')).json();
      m.react("🕒");
      const notnot = pickRandom(data);
      conn.sendFile(m.chat, notnot, {
         caption: 'Notnot',
         quoted: m
      })
   },
   limit: true
}