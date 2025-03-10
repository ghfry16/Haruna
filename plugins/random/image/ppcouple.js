const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['ppcouple'],
   command: ['ppcp', 'ppcouple'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/ppcp.json')).json();
      m.react("🕒");
      const ppcp = pickRandom(data);
      conn.sendFile(m.chat, ppcp, {
         caption: 'Ppcouple',
         quoted: m
      })
   },
   limit: 1
}