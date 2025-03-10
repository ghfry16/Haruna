const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['blackpink'],
   command: ['blackpink'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/blackpink.json')).json();
      m.react("🕒");
      const blackpink = pickRandom(data);
      conn.sendFile(m.chat, blackpink, {
         caption: 'Blackpink',
         quoted: m
      })
   },
   limit: 1
}