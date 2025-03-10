const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['bike'],
   command: ['bike'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/bike.json')).json();
      m.react("🕒");
      const bike = pickRandom(data);
      conn.sendFile(m.chat, bike, {
         caption: 'Bike',
         quoted: m
      })
   },
   limit: 1
}