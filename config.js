const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254707953789";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_25_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDYwLFxuICAgICAgICAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTksXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInQ5Q2svNWNiZlRldU15S0RRRWRqclgyNHI2dDNEajM0Z0dDNTJ1QVFkbDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkYxaTBmNHlUVEpLNl93bmJ0OHU5TUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzk4OGZlZTctMWMxZC00MzljLWFiZDgtNWQyOTczODgxNGY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMjEzLFxuICAgICAgMjA0LFxuICAgICAgNjAsXG4gICAgICAxMzQsXG4gICAgICAxOTYsXG4gICAgICAxNTAsXG4gICAgICAxMzIsXG4gICAgICAyMDQsXG4gICAgICA5MixcbiAgICAgIDQ1LFxuICAgICAgMTYzLFxuICAgICAgMTc4LFxuICAgICAgMjE0LFxuICAgICAgMTkxLFxuICAgICAgNzksXG4gICAgICAzNixcbiAgICAgIDE3NSxcbiAgICAgIDM4LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMzksXG4gICAgICAxMzgsXG4gICAgICAxNjQsXG4gICAgICAxMDksXG4gICAgICA4MSxcbiAgICAgIDIxMixcbiAgICAgIDIxOSxcbiAgICAgIDI0NixcbiAgICAgIDM2LFxuICAgICAgMTg3LFxuICAgICAgOTAsXG4gICAgICA1MixcbiAgICAgIDgyLFxuICAgICAgMzcsXG4gICAgICAyMDUsXG4gICAgICAxMTIsXG4gICAgICAyMjgsXG4gICAgICAyNTAsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTJOWk5aSDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNzk1Mzc4OToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlpDwnZaO8J2WlfCdlojwnZaN8J2WmvCdlpLwnZaH8J2WhlwiLFxuICAgIFwibGlkXCI6IFwiMjQ1ODA1Njc2NTA1Mzg6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVN5dmNFSEVJbWFtN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyZk1ZWlkvS2dUUnNvZlVZY2VYeE9kNGlyS05VTGZNTUN0VlNJOVdabDBFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxzU25kZlIrcFlEdXFZYURERVQyc2g2bC81ZmJhTVA4WENlUG5uanVkMkJWVUFpN3NWRWNOTHh0eTlkZHEydm9id3dOS2dzK0NpdnB3S3NZUzdvWkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5nNHZkN2VsM2kyVU9SRFhUWUIvMUFyZXJMeFBtZXh5VVFiVTlQQVBVRTJuSy9MdjRhdiszNGxRY1YxOUs4dmFMR0pnTnJBb3JERXFiVkRxTzlXRWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNzk1Mzc4OToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDExMDM0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJadVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlp1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibldwWFFkeW5TaHdwaXFqajRnVTRYZ2dyNCtOZXhuSUJXVjhOV1ZrUVJMMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE2MzY4ODk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
