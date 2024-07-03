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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_33_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICA2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTExLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU0LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicjJYU2NKMDNNL3ExVG0rTytPcnRXb3hYZTh4bkJSSHAyV081NGZMZ3Vtdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNW9Vb0UtZF9SLU81STV0RzR2bm1IQVwiLFxuICBcInBob25lSWRcIjogXCI4MzkxNTNjMy0wZjJhLTQxMDctODMyZC04ZDUyYmY0MjFhOTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgNjAsXG4gICAgICAxMDksXG4gICAgICAyMDcsXG4gICAgICA4MSxcbiAgICAgIDcsXG4gICAgICAxNzksXG4gICAgICA5MSxcbiAgICAgIDEwMyxcbiAgICAgIDQyLFxuICAgICAgMTY0LFxuICAgICAgOCxcbiAgICAgIDEzNyxcbiAgICAgIDY1LFxuICAgICAgOTMsXG4gICAgICAxNTAsXG4gICAgICA3NixcbiAgICAgIDE2MSxcbiAgICAgIDEzMCxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMTUyLFxuICAgICAgODgsXG4gICAgICAyNDEsXG4gICAgICAxMDgsXG4gICAgICAyMzgsXG4gICAgICAyMDcsXG4gICAgICA5NCxcbiAgICAgIDEwMyxcbiAgICAgIDQ3LFxuICAgICAgMjI0LFxuICAgICAgMjMxLFxuICAgICAgNDksXG4gICAgICAxODEsXG4gICAgICAyOCxcbiAgICAgIDM1LFxuICAgICAgMjE1LFxuICAgICAgNjUsXG4gICAgICAxMjgsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBWlpGWFBHRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA3OTUzNzg5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2WkPCdlo7wnZaV8J2WiPCdlo3wnZaa8J2WkvCdlofwnZaGXCIsXG4gICAgXCJsaWRcIjogXCIyNDU4MDU2NzY1MDUzODoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQNnh2Y0VIRUpQUGxyUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJmTVlaWS9LZ1RSc29mVVljZVh4T2Q0aXJLTlVMZk1NQ3RWU0k5V1psMEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiemFmazdHY2lhOHdFSTA2OG1KeERtcXFKTjkxUlEzQWQxRnpnaGpvNk81MEU4bFBmSHUvY1g1UGx6RXRuQmZ1aFFlV24rbTNtbGJqUmJ4bTVJU1BzRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNk9FRDJ4OEp5YXdDZ2Q5SmQxV05XMDhMMDdFSGpqVm9CUWN0ZENPYXlKV1p0c0hLZzVIWk5aZWVyYTlSWkh5LzF2OXg5RFFPTlY4aC9wMzBibmd0QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA3OTUzNzg5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDM1MjIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlptXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCWm0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoaTBtb2NZVE9ZekdIWEpESjUvbVN0Y1ZCbzFjVmhIallwSStxSUt2TEdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTYzNjg4OTQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
