const rewards = {
   limit: 15,
   uang: 25
}
exports.default = {
   names: ['Games'],
   tags: ['caklontong'],
   command: ['caklontong', 'cak'],
   start: async (m, {
      conn,
      Format
   }) => {
      if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
      const anu = await JSON_URL('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json');
      const result = anu[Math.floor(Math.random() * anu.length)]
      await m.reply(`Jawablah Pertanyaan Berikut :\n\n*${result.soal}*\n\nWaktu : 60 Detik\n🎁 Hadiah\n+${rewards.limit} Limit 🎟\n+${rewards.uang} Uang 💰`)
      {
         caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase();console.log(caklontong);
         caklontong_desc[m.sender.split('@')[0]] = result.deskripsi;
         console.log(caklontong_desc);                  
      }
      await Format.sleep(60000);     
      if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
         await m.reply(`Waktu Habis\n\nJawaban: ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desc[m.sender.split('@')[0]]}`);
         delete caklontong[m.sender.split('@')[0]]
         delete caklontong_desc[m.sender.split('@')[0]]            
      }
   }
}