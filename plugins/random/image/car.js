const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['car'],
   command: ['car'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/car.json')).json();
      m.react("🕒");
      const car = pickRandom(data);
      conn.sendFile(m.chat, car, {
         caption: 'Car',
         quoted: m
      })
   },
   limit: 1
}