const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['tatasurya'],
   command: ['tatasurya'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/tatasurya.json')).json();
      m.react("🕒");
      const tatasurya = pickRandom(data);
      conn.sendFile(m.chat, tatasurya, {
         caption: 'Tata Surya',
         quoted: m
      })
   },
   limit: 1
}