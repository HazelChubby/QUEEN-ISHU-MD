const { cmd } = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
const sensitiveData = require('../auth_info_baileys/a/b/c/d/dddamsbs')
const formatViews = (views) =>
  views >= 1000000000
    ? `${(views / 1000000000).toFixed(1)}B`
    : views >= 1000000
    ? `${(views / 1000000).toFixed(1)}M`
    : views >= 1000
    ? `${(views / 1000).toFixed(1)}K`
    : views.toString()
cmd(
  {
    pattern: 'song',
    desc: 'Download songs',
    category: 'download',
    filename: __filename,
  },
  async (conn, mek, m, { from, q, reply }) => {
    try {
      if (!q) {
        await conn.sendPresenceUpdate('recording', from)
        await conn.sendMessage(
          from,
          {
            audio: {
              url: 'https://github.com/themiyadilann/DilaMD-Media/raw/main/voice/song.mp3',
            },
            mimetype: 'audio/mpeg',
            ptt: true,
          },
          { quoted: mek }
        )
        return
      }
      const search = await yts(q)
      const data = search.videos[0]
      const url = data.url
      let desc = `> ${sensitiveData.hhhhhhczss}\n\n🎶 *𝗧𝗶𝘁𝗹𝗲*: _${
        data.title
      }_\n👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_\n📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${
        data.description
      }_\n⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_\n⏱️ *𝗔𝗴𝗼*: _${
        data.ago
      }_\n👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_\n🔗 *𝗟𝗶𝗻𝗸*: ${url}\n\n${
        sensitiveData.siteUrl
      }\n${sensitiveData.footerText}`
      await conn.sendPresenceUpdate('typing', from)
      await conn.sendMessage(
        from,
        {
          image: { url: data.thumbnail },
          caption: desc,
        },
        { quoted: mek }
      )
      let down = await fg.yta(url)
      let downloadUrl = down.dl_url
      await conn.sendPresenceUpdate('recording', from)
      await conn.sendMessage(
        from,
        {
          audio: { url: downloadUrl },
          mimetype: 'audio/mpeg',
        },
        { quoted: mek }
      )
      await conn.sendMessage(
        from,
        {
          document: { url: downloadUrl },
          mimetype: 'audio/mpeg',
          fileName: `${data.title}.mp3`,
          caption: '\uD83D\uDCBB *ᴍᴀᴅᴇ ʙʏ ᴍʳᴅɪʟᴀ*',
        },
        { quoted: mek }
      )
    } catch (e) {
      console.log(e)
      reply(`Error: ${e.message}`)
    }
  }
)
cmd(
  {
    pattern: 'video',
    desc: 'Download videos',
    category: 'download',
    filename: __filename,
  },
  async (conn, mek, m, { from, q, reply }) => {
    try {
      if (!q) {
        await conn.sendPresenceUpdate('recording', from)
        await conn.sendMessage(
          from,
          {
            audio: {
              url: 'https://github.com/themiyadilann/DilaMD-Media/raw/main/voice/video.mp3',
            },
            mimetype: 'audio/mpeg',
            ptt: true,
          },
          { quoted: mek }
        )
        return
      }
      const search = await yts(q)
      const data = search.videos[0]
      const url = data.url
      let desc = `${sensitiveData.ffdssajjj}\n\n🎶 *𝗧𝗶𝘁𝗹𝗲*: _${
        data.title
      }_\n👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_\n📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${
        data.description
      }_\n⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_\n⏱️ *𝗔𝗴𝗼*: _${
        data.ago
      }_\n👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_\n🔗 *𝗟𝗶𝗻𝗸*: ${url}\n\n${
        sensitiveData.siteUrl
      }\n${sensitiveData.footerText}`
      await conn.sendPresenceUpdate('typing', from)
      await conn.sendMessage(
        from,
        {
          image: { url: data.thumbnail },
          caption: desc,
        },
        { quoted: mek }
      )
      let down = await fg.ytv(url)
      let downloadUrl = down.dl_url
      await conn.sendMessage(
        from,
        {
          video: { url: downloadUrl },
          mimetype: 'video/mp4',
        },
        { quoted: mek }
      )
      await conn.sendMessage(
        from,
        {
          document: { url: downloadUrl },
          mimetype: 'video/mp4',
          fileName: `${data.title}.mp4`,
          caption: '\uD83D\uDCBB *ᴍᴀᴅᴇ ʙʏ ᴍʳᴅɪʟᴀ*',
        },
        { quoted: mek }
      )
    } catch (e) {
      console.log(e)
      reply(`Error: ${e.message}`)
    }
  }
)
