const rewards = {
   limit: 15,
   uang: 30
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.tekateki') && !m.isBaileys) {
         const jawaban = tekateki[m.sender.split('@')[0]]
         if (budy.toLowerCase() == jawaban) {
            delete tekateki[m.sender.split('@')[0]]
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            await m.reply(`Teka Teki 🎮\n\nJawaban Benar 🎉\nHadiah :\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰`); 
         } else {
            return m.reply('Salah!');
         }
      }
   }
}