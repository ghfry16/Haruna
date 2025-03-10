const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['pubg'],
   command: ['pubg'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/pubg.json')).json();
      m.react("🕒");
      const pubg = pickRandom(data);
      conn.sendFile(m.chat, pubg, {
         caption: 'Pubg',
         quoted: m
      })
   },
   limit: 1
}