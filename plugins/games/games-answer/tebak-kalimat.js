const rewards = {
   limit: 20,
   uang: 50
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const kal = Math.floor(Math.random() * 3);
      const imat = ['Salah', 'Kurang Tepat ', 'Belum Benar '][kal];
      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.tebakkalimat') && !m.isBaileys) {
         const jawaban = tebakkalimat[m.sender.split('@')[0]].trim();
         if (budy.toLowerCase() === jawaban) {
            delete tebakkalimat[m.sender.split('@')[0]]
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            await m.reply(`Jawaban Benar 🎉\nHadiah :\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰`);            
         } else {
            return m.reply(imat)
         }
      }
   }
}