const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['cat'],
   command: ['cat'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/cat.json')).json();
      m.react("🕒");
      const cat = pickRandom(data);
      conn.sendFile(m.chat, cat, {
         caption: 'Cat',
         quoted: m
      })
   },
   limit: 1
}