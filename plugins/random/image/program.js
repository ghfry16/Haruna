const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['program'],
   command: ['program'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/program.json')).json();
      m.react("🕒");
      const program = pickRandom(data);
      conn.sendFile(m.chat, program, {
         caption: 'Program',
         quoted: m
      })
   },
   limit: 1
}