const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['zangboy'],
   command: ['zangboy'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/zangboy.json')).json();
      m.react("🕒");
      const zangboy = pickRandom(data);
      conn.sendFile(m.chat, zangboy, {
         caption: 'Zangboy',
         quoted: m
      })
   },
   limit: 1
}