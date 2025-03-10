const axios = require('axios');
exports.default = {
   names: ['Maker'],
   tags: ['qc'],
   command: ['qc'],
   start: async (m, {
      conn,
      prefix,
      text,
      command
   }) => {
      let pack = setting.botName
      let own = setting.footer
      if (!text) return m.reply(`Example : ${prefix+command} ${setting.botName}`)
      m.react("🕒");
      let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => "https://ar-hosting.pages.dev/1739556359010.jpg")
      let nama = await m.pushName
      let obj = {
         "type": "quote",
         "format": "png",
         "backgroundColor": "#FFFFFF",
         "width": 512,
         "height": 768,
         "scale": 2,
         "messages": [{
            "entities": [],
            "avatar": true,
            "from": {
               "id": 1,
               "name": nama,
               "photo": {
                  "url": pp
               }
            },
            "text": text,
            "replyMessage": {}
         }]
      }
      let json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
         headers: {
            'Content-Type': 'application/json'
         }
      })
      let buffer = await Buffer.from(json.data.result.image, 'base64')
      {
         conn.sendImageAsSticker(m.chat, buffer, m, {
            packname: pack,
            author: own
         })
      }
   },
   limit: 1,
   premium: false
};
