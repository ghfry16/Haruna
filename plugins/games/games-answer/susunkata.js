const rewards = {
   limit: 15,
   uang: 30
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const miss = Math.floor(Math.random() * 3);
      const wrong = ['Salah!', 'Kurang Tepat!', 'Belum Benar!'][miss];
      if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.susunkata') && !m.isBaileys) {
         const jawaban = susunkata[m.sender.split('@')[0]]
         if (budy.toLowerCase() === jawaban) {
            delete susunkata[m.sender.split('@')[0]];
            await m.reply(`Benar 🎊 \nkamu mendapatkan:\n+ ${rewards.limit} limit 🎟\n+ ${rewards.uang} uang 💵`)
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang                       
         } else {
           return m.reply(wrong)
         }
      }
   }
}