const rewards = {
   limit: 20,
   uang: 40
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const kat = Math.floor(Math.random() * 3);
      const ta = ['Salah!', 'Kurang Tepat!', 'Belum Benar!'][kat];
      if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.tebakkata') && !budy.includes('.teka') && !m.isBaileys) {
         const jawaban = tebakkata[m.sender.split('@')[0]]
         if (budy.toLowerCase() == jawaban) {
            delete tebakkata[m.sender.split('@')[0]]
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah :\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰`);            
         } else {
            return m.reply(ta)
         }
      }
   }
}