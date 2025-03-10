const fetch = require('node-fetch');
exports.default = {
   names: ['Maker'],
   tags: ['stickermix', 'emojimix', 'emomix'],
   command: ['stickermix', 'emojimix', 'emomix', 'emix'],
   start: async (m, {
      conn,
      text,
      prefix,
      args,
      command
   }) => {
      let pack = setting.botName;
      let own = setting.footer;
      if (!args[0]) throw `Example : ${prefix+command} 🤫+🧏`
      m.react("🕒");
      let [emoji1, emoji2] = text.split`+`
      let res = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)).json()
      if (res.results[0] == undefined) throw 'Kombinasi Tidak Ditemukan'
      let emix = res.results[0].media_formats.png_transparent.url;
      {
         conn.sendImageAsSticker(m.chat, emix, m, {
            packname: pack,
            author: `${own}\nDibuat : \n${waktu.tanggal}\n${waktu.time} ${waktu.suasana}`
         });      
      }
   },
   limit: 1
};
