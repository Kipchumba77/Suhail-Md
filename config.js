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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_34_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMixcbiAgICAgICAgMTkxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyLFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiREhmZG9kK3BqaCsrVVBkeXorSE9OZkltY0g4REV0blhXN1N4N3RFNkljbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia0tKTEhwWjFTRkttcXZEUTBfTlZid1wiLFxuICBcInBob25lSWRcIjogXCI0MDg2YmJkYS0xNWJhLTRmNDMtYTlhNC1kOTc3NzYwZmU3YmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMjMxLFxuICAgICAgMjA4LFxuICAgICAgMTQzLFxuICAgICAgMjEzLFxuICAgICAgNDcsXG4gICAgICAxMDUsXG4gICAgICAxNDIsXG4gICAgICAzMixcbiAgICAgIDIwNixcbiAgICAgIDY1LFxuICAgICAgMTkzLFxuICAgICAgODEsXG4gICAgICA3MyxcbiAgICAgIDE5LFxuICAgICAgODYsXG4gICAgICAyNDEsXG4gICAgICAyMSxcbiAgICAgIDIyNCxcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDI1MixcbiAgICAgIDIyNCxcbiAgICAgIDAsXG4gICAgICAxNjMsXG4gICAgICAxODYsXG4gICAgICAyNTAsXG4gICAgICAxNzQsXG4gICAgICAyMzgsXG4gICAgICAxMDIsXG4gICAgICA3OCxcbiAgICAgIDg1LFxuICAgICAgMjUwLFxuICAgICAgMTg1LFxuICAgICAgMTA3LFxuICAgICAgMjE0LFxuICAgICAgMTc2LFxuICAgICAgMjI3LFxuICAgICAgNzEsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1FKMkI2WFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNzk1Mzc4OToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlpDwnZaO8J2WlfCdlojwnZaN8J2WmvCdlpLwnZaH8J2WhlwiLFxuICAgIFwibGlkXCI6IFwiMjQ1ODA1Njc2NTA1Mzg6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUN5dmNFSEVORE1tTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyZk1ZWlkvS2dUUnNvZlVZY2VYeE9kNGlyS05VTGZNTUN0VlNJOVdabDBFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9WODlzZ2E4QWNKYS9tVG4xekVMak04ZmN5dEc0aUMwSUFSajM2VVBKY08wbFkycXBWMWhpKzFhKzhyL0FJcXJ3WVpSSm4yL3h1S1BQOW1hcUxQUEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFTdGtjZVJVNGMxb0oyeXRFQVYrL0VoYzJnbnZxbDBxV1FaOUh4MzR6UnV2M3pUVS9CN2dGa0JhelU1aFVpbU5HZlBVMkJCUGQ0Z21FRG05STVQWkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNzk1Mzc4OToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA2NzY2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJadFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlp0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZEFabGRyczBtZlBFSEdkRStXVkdPRjJKRUs0R0RrZ3RwVVIyV0J5cENWdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE2MzY4ODk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMDY3NjAzMzg3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
