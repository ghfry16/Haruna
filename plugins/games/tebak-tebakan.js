const rewards = {
   limit: 10,
   uang: 35
}
exports.default = {
   names: ['Games'],
   tags: ['tebaktebakan'],
   command: ['tebaktebakan', 'tebakan'],
   start: async (m, {
      conn,
      Format
   }) => {
      if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Soal Yang Belum Diselesaikan!");
      const anu = await JSON_URL('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
      const result = anu[Math.floor(Math.random() * anu.length)]
      await m.reply(`Silahkan Jawab Pertanyaan Berikut\n\n*${result.soal}*\n\nWaktu : 60 Detik\nHadiah 🎁\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰 `)
      {
         tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
         console.log(tebaktebakan);
      }
      await Format.sleep(60000);
      if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
         await m.reply(`Waktu Habis\n\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}\n`);
         delete tebaktebakan[m.sender.split('@')[0]];console.log(tebaktebakan);
      }
   }
}