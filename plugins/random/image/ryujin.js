const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['ryujin'],
   command: ['ryujin'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/ryujin.json')).json();
      m.react("🕒");
      const ryujin = pickRandom(data);
      conn.sendFile(m.chat, ryujin, {
         caption: 'Ryujin',
         quoted: m
      })
   },
   limit: 1
}