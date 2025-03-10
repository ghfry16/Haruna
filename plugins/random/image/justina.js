const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['justina'],
   command: ['justina'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/justina.json')).json();
      m.react("🕒");
      const justina = pickRandom(data);
      conn.sendFile(m.chat, justina, {
         caption: 'Justina',
         quoted: m
      })
   },
   limit: 1
}