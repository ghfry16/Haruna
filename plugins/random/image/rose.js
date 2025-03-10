const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['rose'],
   command: ['rose'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/rose.json')).json();
      m.react("🕒");
      const rose = pickRandom(data);
      conn.sendFile(m.chat, rose, {
         caption: 'Rose',
         quoted: m
      })
   },
   limit: 1
}