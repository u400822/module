repeat wait() until game:IsLoaded()
_G["HoHo Hub Auto Bounty V3"] = {
["Avatar"] = "https://i.ibb.co/DL019xs/d5b46cd41ff4610dd5f6f0a64ff66dfa.png",
["Select Team"] = "Pirate", -- Pirate/Marine
["Discord Webhook"] = "",
["Don't attack friends"] = true,
["Don't attack player have cup"] = false,
["Distance Attack Y"] = 0, -- Shark Race = 0; Another >= 6
["Chat After Kill"] = {
["Active"] = false,
["List Chat"] = {"i have a good gaming chair","No skill? Use Hoho hub"},
},
["Yourself"] = {
["Invisible From Ken"] = true,
["No Stun"] = true,
},
["SafeZone"] = {Enabled = true, ["Health Left (%)"] = 40},
["Time Control"] = {
["Max Time Target Player"] = 120,
},
["Abilities"] = {
["Auto Click"] = true,
["Melee"] = {
Z = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
X = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
C = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
},
["Sword"] = {
Z = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
X = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
},
["Gun"] = {
Z = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
X = {Enabled = false, Hold = 0.1, WaitNextSkill = 0.6},
},
["Fruit"] = {
Z = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
X = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
C = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
V = {Enabled = false, Hold = 0.1, WaitNextSkill = 0.6},
F = {Enabled = true, Hold = 0.1, WaitNextSkill = 0.6},
},
},
}
loadstring(game:HttpGet('https://raw.githubusercontent.com/acsu123/HOHO_H/mai
n/Loading_UI'))()
