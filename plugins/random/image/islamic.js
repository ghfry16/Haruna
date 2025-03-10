const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['islamic'],
   command: ['islamic'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/islamic.json')).json();
      m.react("🕒");
      const islamic = pickRandom(data);
      conn.sendFile(m.chat, islamic, {
         caption: 'Islamic',
         quoted: m
      })
   },
   limit: 1
}