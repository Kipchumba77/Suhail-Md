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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_56_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA4NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMzJ2OUVmdWdOOC9QZmdmS0Qvd1Q2SXViMTdpN0lEVzliOXFRYzVSb1BlMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODlPZW5rLXRUOWVoZ3oyeEExSC1Gd1wiLFxuICBcInBob25lSWRcIjogXCJjOTVjOTBiMy1kYWQ0LTQ2ZTgtYjBhMS1jNjEwMTAwNjgwZGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICA5OSxcbiAgICAgIDE3OSxcbiAgICAgIDIxNCxcbiAgICAgIDIyOCxcbiAgICAgIDE2OSxcbiAgICAgIDExNCxcbiAgICAgIDExMixcbiAgICAgIDI1MyxcbiAgICAgIDk4LFxuICAgICAgMjA3LFxuICAgICAgMTY0LFxuICAgICAgMjMzLFxuICAgICAgMTQyLFxuICAgICAgMjMxLFxuICAgICAgMTE0LFxuICAgICAgMjAxLFxuICAgICAgMTk2LFxuICAgICAgOTQsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAxNDQsXG4gICAgICAyMzcsXG4gICAgICA4MSxcbiAgICAgIDEzMyxcbiAgICAgIDE3MSxcbiAgICAgIDIyNyxcbiAgICAgIDg2LFxuICAgICAgMjEyLFxuICAgICAgNixcbiAgICAgIDE2NyxcbiAgICAgIDE4MyxcbiAgICAgIDk1LFxuICAgICAgMTk5LFxuICAgICAgNjgsXG4gICAgICAxMTAsXG4gICAgICAxMzgsXG4gICAgICAxNzAsXG4gICAgICAxODgsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDlSTkhNTTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNzk1Mzc4OToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlpDwnZaO8J2WlfCdlojwnZaN8J2WmvCdlpLwnZaH8J2WhlwiLFxuICAgIFwibGlkXCI6IFwiMjQ1ODA1Njc2NTA1Mzg6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUCt4dmNFSEVJLzJsclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyZk1ZWlkvS2dUUnNvZlVZY2VYeE9kNGlyS05VTGZNTUN0VlNJOVdabDBFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZEK2dYRXVKa1dwU1FxS2lMV3cwOXBrYlkyaUZ2L210bEdWN0tkUVJRNHMzcWRCY1kveFN2RVRMVmlJVU1iQk1DK2JVUnkycDJwQTRkWUJZSFNhdUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNGTWhPaDJLVjMzZm5KUG1JL2xRMFUwSFRzYW44enE1NWNmdWtHT3dDZXRsazRwV0lKZ0hTTVJsMTlMSnUrVjQ2ajk0eTZPOUZWZzUrb054dTlWOGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNzk1Mzc4OToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA0MDIxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJabVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlptLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaGkwbW9jWVRPWXpHSFhKREo1L21TdGNWQm8xY1ZoSGpZcEkrcUlLdkxHUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE2MzY4ODk0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
