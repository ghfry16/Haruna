const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['doggo'],
   command: ['doggo'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/doggo.json')).json();
      m.react("🕒");
      const doggo = pickRandom(data);
      conn.sendFile(m.chat, doggo, {
         caption: 'Doggo',
         quoted: m
      })
   },
   limit: 1
}