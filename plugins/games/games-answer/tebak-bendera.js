const rewards = {
   limit: 25,
   uang: 50
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.tebakbendera') && !m.isBaileys) {
         const jawaban = tebakbendera[m.sender.split('@')[0]]
         if (budy.toLowerCase() == jawaban) {
            delete tebakbendera[m.sender.split('@')[0]]
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            await m.reply(`🎮 Tebak Bendera \n\nJawaban Benar 🎉\nHadiah :\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰`);
         } else {
            return m.reply('Salah!')
         }
      }
   }
};