# Don't Remove Credit @VJ_Botz
# Subscribe YouTube Channel For Amazing Bot @Tech_VJ
# Ask Doubt on telegram @KingVJ01


import re, os

id_pattern = re.compile(r'^.\d+$') 

API_ID = os.environ.get("API_ID","28559526")

API_HASH = os.environ.get("API_HASH", "02c0ed300a53ac756ea6b36191fad150")

BOT_TOKEN = os.environ.get("BOT_TOKEN", "7538574433:AAEngXc0_t9z_Ru_VDDuMCqZwKHVVg6WimM") 

FORCE_SUB = os.environ.get("FORCE_SUB", "VJ_Botz") 

             # Don't Remove Credit @VJ_Botz
             # Subscribe YouTube Channel For Amazing Bot @Tech_VJ
             # Ask Doubt on telegram @KingVJ01

DB_NAME = os.environ.get("DB_NAME", "renamevjbot")     

DB_URL = os.environ.get("DB_URL",mongodb+srv://arashsalana5:nLpSVVQKvLIfykcc@cluster0.4sjnh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 "")
 
FLOOD = int(os.environ.get("FLOOD", "10"))

START_PIC = os.environ.get("START_PIC", "https://te.legra.ph/file/119729ea3cdce4fefb6a1.jpg")

ADMIN = [int(admin) if id_pattern.search(admin) else admin for admin in os.environ.get('ADMIN', '6792495315').split()]

PORT = os.environ.get("PORT", "8080")

# Don't Remove Credit @VJ_Botz
# Subscribe YouTube Channel For Amazing Bot @Tech_VJ
# Ask Doubt on telegram @KingVJ01
