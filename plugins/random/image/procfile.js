const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['procfile'],
   command: ['procfile', 'proc'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/procfile.json')).json();
      m.react("🕒");
      const procfile = pickRandom(data);
      conn.sendFile(m.chat, procfile, {
         caption: 'Procfile',
         quoted: m
      })
   },
   limit: 1
}