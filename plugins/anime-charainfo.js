let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type } = json.results[0]
let charaingfo = `💬 *Name:* ${name}
💭 *𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${alternative_names}
🔗 *𝚄𝚁𝙻:* ${url}
👤 *𝚃𝙸𝙿𝙾 𝙳𝙴 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁:* ${type}`
  const ftroli = {
    key : {
    remoteJid: '6283136505591-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Character ${name}`, 
    orderTitle: `Hyzer`,
    thumbnail: 'https://telegra.ph/file/5ecbec3e82e247671a18e.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  conn.sendFile(m.chat, image_url, '', charaingfo, ftroli)
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.command = /^(chara|character)$/i
handler.register = true
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
module.exports = handler
