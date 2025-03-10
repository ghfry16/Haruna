const rewards = {
   limit: 25,
   uang: 50
}
exports.default = {
   names: ['Games'],
   tags: ['tebakgame'],
   command: ['tebakgame'],
   start: async (m, {
      conn,
      Format
   }) => {
      if (tebakgame.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Soal Yang Belum Diselesaikan!");
      const anu = await JSON_URL('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json');
      const result = anu[Math.floor(Math.random() * anu.length)]
      conn.sendFile(m.chat, result.img , {
         caption : `*🎮 Tebak Game*\n*Silahkan Jawab Pertanyaan Berikut*\nWaktu : 60 Detik\n\nHadiah 🎁\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰 `,
         quoted : m
      }).then(() => {
         tebakgame[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
         console.log(tebakgame);
      })
      await Format.sleep(60000);
      if (tebakgame.hasOwnProperty(m.sender.split('@')[0])) {
         await m.reply(`Waktu Habis\n\nJawaban:  ${tebakgame[m.sender.split('@')[0]]}\n`);
         delete tebakgame[m.sender.split('@')[0]]
      }
   }
}