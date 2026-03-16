# `Flex Diplomatic Actions` (`583`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `31` |
| Name | [SE_Politics](../) |
| Library ID | `583` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Card ID | `Text` |
| `1` | Name | `Text` |
| `2` | PP Cost | `Text` |
| `3` | Event Picture | `Text` |
| `4` | Text | `Text` |
| `5` | Org ID | `Text` |
| `6` | IF Logic | `Text` |
| `7` | Target Type | `Text` |
| `8` | Mouse Over | `Text` |
| `9` | Weight SET Logic | `Text` |
| `10` | BP Cost | `Text` |
| `11` | Category | `Text` |
| `12` | Phase | `Text` |
| `13` | Use Human | `Text` |
| `14` | Org 2 ID | `Text` |
| `15` | Max in Hand | `Text` |
| `16` | Never Consumed | `Text` |
| `17` | New Col | `Text` |
| `18` | New Col | `Text` |
| `19` | New Col | `Text` |
| `20` | New Col | `Text` |
| `21` | New Col | `Text` |
| `22` | New Col | `Text` |
| `23` | New Col | `Text` |
| `24` | New Col | `Text` |
| `25` | New Col | `Text` |
| `26` | New Col | `Text` |
| `27` | New Col | `Text` |
| `28` | New Col | `Text` |
| `29` | New Col | `Text` |
| `30` | New Col | `Text` |
| `31` | New Col | `Text` |
| `32` | New Col | `Text` |
| `33` | New Col | `Text` |
| `34` | New Col | `Text` |
| `35` | New Col | `Text` |
| `36` | New Col | `Text` |
| `37` | New Col | `Text` |
| `38` | New Col | `Text` |

### Data

| Card ID | Name | PP Cost | Event Picture | Text | Org ID | IF Logic | Target Type | Mouse Over | Weight SET Logic | BP Cost | Category | Phase | Use Human | Org 2 ID | Max in Hand | Never Consumed | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 961 | Information Retrieval | 10 | 1 | Let's peak into the Computer's records. What opinion does it hold on this Leader? | 31 |  |  | Give X Rounds of info on what Computer thinks of a specific Leader. | 100 | 10 | 14 | 16 |  |  |  |  | 2 | 3 |  |  |  |  |  |  |  |  | SE_Interior |  |  |  |  |  |  |  |  |  |  |  |
| 962 | Maintenance | 50 | 2 | Sadly, for repair reasons we have to hybernate the Syndic Computer. How will we make a decision without it? | 31 |  |  | Gives X Rounds of Computer being offline, giving you freedom of action. | 20 | 20 | 14 | 16 |  |  |  |  | 2 | 3 |  |  |  |  |  |  |  |  | SE_Interior |  |  |  |  |  |  |  |  |  |  |  |
| 963 | Upgrade | 20 | 3 | Adding extra plugs, boards and processors will improve Computer efficiency. | 31 |  |  | +0.1% per Level of Populace Growth or +10% per Level of Public Production Bonus or  +1 Per Level of Populace Happiness Bonus. | 50 | 15 | 14 | 16 |  |  |  |  | 2 | 3 |  |  |  |  |  |  |  |  | SE_Interior |  |  |  |  |  |  |  |  |  |  |  |
| 964 | Pull the Plug | 90 | 4 | Fed up with the great Syndic Computer? We can always try to pull the plug... but it won't be easy. | 31 |  |  | Disables the Syndic Computer if successful. (very difficult) | 10 | 30 | 14 | 16 |  |  |  |  | 2 | 3 |  |  |  |  |  |  |  |  | SE_Interior |  |  |  |  |  |  |  |  |  |  |  |
| 965 | I/O Hack | 20 | 5 | Through actual hacking we can try to upgrade the Clearance Level for a specific Leader. | 31 |  |  | Increase Clearance Level of specific Leader. Leaders can have a higher or lower Clearance Level. A higher level is seen as the Leader being a trustee of the Computer. The Clearance Level protects them from the wrath of the Computer as well as facilitating executing certain programming Stratagems. | 50 | 15 | 14 | 16 |  |  |  |  | 2 | 3 |  |  |  |  |  |  |  |  | SE_Interior |  |  |  |  |  |  |  |  |  |  |  |
| 966 | Defragmentation | 50 | 6 | It's like a massage for our great Computer. Afterwards some relaxation it might be less eager to level up. | 31 |  |  | Increase the wait for the next demand of a high Computer Level. | 50 | 10 | 14 | 16 |  |  |  |  | 2 | 3 |  |  |  |  |  |  |  |  | SE_Interior |  |  |  |  |  |  |  |  |  |  |  |
| 967 | Database Edit | 20 | 7 | Some clever SQL-like tricks might well reset the records on a specific Leader. | 31 |  |  | Resets Threat Count for a specific Leader and increases Influence Count. (makes the Computer likes the Leader more) | 100 | 10 | 14 | 16 |  |  |  |  | 2 | 3 |  |  |  |  |  |  |  |  | SE_Interior |  |  |  |  |  |  |  |  |  |  |  |
| 981 | Call in Minor Favors | 0 |  | Need political support right now. And lets be frank... you owe me. +30 PP. -10 Word. | 31 |  |  |  | 20 | 40 | 4 | 10 |  |  |  |  | 2 | 3 |  | 2 |  |  |  |  |  | politics/card/981.png | SE_Interior |  | 100 |  |  |  |  |  |  |  |  |  |
| 982 | Call in Major Favors | 0 |  | Yes, I am asking a lot. But you have to do your part now! You owe me. +100 PP. -25 Word. | 31 |  |  |  | 15 | 80 | 4 | 10 |  |  |  |  | 2 | 3 |  | 2 |  |  |  |  |  | politics/card/982.png | SE_Interior |  | 100 |  |  |  |  |  |  |  |  |  |
| 983 | Grease the Machine | 0 |  | Take some gifts, take my patronage, support me. +20 PP. -5 Virtus. | 31 |  |  |  | 12 | 60 | 4 | 10 |  |  |  |  | 2 | 3 |  | 2 |  |  |  |  |  | politics/card/983.png | SE_Interior |  | 100 |  |  |  |  |  |  |  |  |  |
| 984 | Force their Hands | 0 |  | Either take my gifts and patronage or take a bullet. +60 PP. -10 Virtus. | 31 |  |  |  | 8 | 120 | 4 | 10 |  |  |  |  | 2 | 3 |  | 2 |  |  |  |  |  | politics/card/984.png | SE_Interior |  | 100 |  |  |  |  |  |  |  |  |  |
| 985 | Passionate Speech | 50 |  | People of this country… listen to me know... | 31 |  |  |  | 10 | 80 | 4 | 10 |  |  |  |  | 2 | 3 |  | 2 |  |  |  |  |  | politics/card/985.png | SE_Interior |  | 100 |  |  |  |  |  |  |  |  |  |
| 986 | Legendary Speech | 100 |  | Soldiers, citizens, brothers and sisters! I address you now… | 31 |  |  |  | 5 | 150 | 4 | 10 |  |  |  |  | 2 | 3 |  | 2 |  |  |  |  |  | politics/card/986.png | SE_Interior |  | 100 |  |  |  |  |  |  |  |  |  |
| 991 | Bribes | 0 |  | Yes, corruption ain't pretty, but it will open some doors. +1 FP. | -1 |  |  |  | 800 | 1 | 9 | 9 |  |  |  |  | 34 | 35 |  | 2 |  |  |  |  |  | politics/card/991.png | SE_Fate |  | 100 |  |  |  |  |  |  |  |  |  |
| 992 | Pardon Criminals | 0 |  | These guys do not merit being released, but their patrons will open us some doors. +2 FP. | -1 |  |  |  | 500 | 1 | 9 | 9 |  |  |  |  | 34 | 35 |  | 2 |  |  |  |  |  | politics/card/992.png | SE_Fate |  | 100 |  |  |  |  |  |  |  |  |  |
| 993 | Favoritism | 0 |  | The elite gets even more privileges. Their happiness will open us some doors. .+3 FP. | -1 |  |  |  | 300 | 1 | 9 | 9 |  |  |  |  | 34 | 35 |  | 2 |  |  |  |  |  | politics/card/993.png | SE_Fate |  | 100 |  |  |  |  |  |  |  |  |  |
| 994 | Impunity Day | 0 |  | Let the elite kill whoever they want on the lower levels... .+4 FP. | -1 |  |  |  | 150 | 1 | 9 | 9 |  |  |  |  | 34 | 35 |  | 2 |  |  |  |  |  | politics/card/994.png | SE_Fate |  | 100 |  |  |  |  |  |  |  |  |  |
| 2101 | Super Hero |  |  | Larger than life! Adored by all! Victory must be assured! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2101.png | 0 |  | 120 |  |  |  | 10 |  |  |  | 111 | 1 |
| 2102 | R&D Crew |  |  | Researchers that climb on top of the destroyed enemy tanks? | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2102.png | 0 |  | 120 |  |  |  | 5 |  |  |  | 112 | 1 |
| 2103 | Campaign Director |  |  | Charisma is nice, but inside a Faction solid spinning and manipulation are better. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2103.png | 0 |  | 40 |  |  |  | 5 |  |  |  | 100971 | 1 |
| 2104 | Peace Conference |  |  | Let's get everybody around the table and work out our differences. | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2104.png | 2 |  | 101 |  | 1 | 500 | 20 |  |  |  |  | 1 |
| 2105 | International Event |  |  | Hosting a big event together will bring our people together. | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2105.png | 2 |  | 61 |  | 1 | 150 | 20 |  | 1 | 1000 |  | 1 |
| 2106 | Prosperity Dividend |  |  | You might be surprised how much a happy Zone is willing to donate. | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2106.png | 3 |  | 15 |  | 1 | 150 | 10 |  |  |  |  | 1 |
| 2107 | Moderation |  |  | Consensus and compromise is the way to a prosperous nation. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2107.png | 3 |  | 45 |  | 1 |  | 20 |  |  |  |  | 1 |
| 2108 | Public Praise |  |  | Your Faction is doing so well. We are much impressed! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2108.png | 2 |  | 46 |  | 1 | 150 | 10 |  |  |  |  | 1 |
| 2109 | Anti-Corruption Drive |  |  | Awareness, controlling, public speeches... everybody has to know that Corruption is bad. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2109.png | 14 |  | 102 |  | 1 | 250 | 15 |  |  |  |  | 1 |
| 2110 | Civic Reward (Medal) |  |  | Its not the shiny metal, it is the gratitude of the whole nation. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2110.png | 0 |  | 40 |  |  |  | 10 |  |  |  | 100972 | 1 |
| 2111 | Humanitarian Aid |  |  | Are they suffering? Don't Majors need to help Minors? | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2111.png | 2 |  | 81 |  | 1 |  | 10 |  | 1 | 500 |  | 1 |
| 2112 | Sensor Specialist |  |  | It's one thing to get data, it's another thing to make sense of it. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2112.png | 0 |  | 120 |  |  |  | 5 |  |  |  | 113 | 1 |
| 2113 | Open Arms |  |  | Meeting the people, taking them seriously, inspires loyalty and integration. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2113.png | 8 |  | 16 |  | 1 | 400 | 10 |  |  |  |  | 1 |
| 2114 | Mediation Training |  |  | Empathy and civlized management styles can be learned. With patience... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2114.png | 2 |  | 47 |  | 1 |  | 10 |  |  |  |  | 1 |
| 2115 | Leader Investment |  |  | This Zone merits investments from the rich and wealthy. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2115.png | 14 |  | 15 |  | 1 | 200 | 10 |  |  |  |  | 1 |
| 2116 | Change the Budget |  |  | It's time to change the budget. You all know its neccessary... | 32 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2116.png | 3 |  | 103 |  | 1 |  | 15 |  |  |  |  | 1 |
| 2117 | Free Press |  |  | It's better to hear unpleasant truths and true compliments. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2117.png | 0 |  | 100 |  |  |  | 5 |  |  |  | 511 | 1 |
| 2118 | Peace Monument |  |  | To inspire all to live on a Planet without war and hatred. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2118.png | 0 |  | 100 |  |  |  | 10 |  |  |  | 512 | 1 |
| 2119 | Wellbeing |  |  | What can bring more fulfilment than an easy, safe and pleasant life? | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2119.png | 0 |  | 100 |  |  |  | 15 |  |  |  | 513 | 1 |
| 2120 | Nat. Innovation Foundation |  |  | We need to get the private sector involved in making science discoveries. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2120.png | 0 |  | 100 |  |  |  | 20 |  |  |  | 514 | 1 |
| 2121 | Great Archives |  |  | We need to structurally pool and classify all ancient GR texts. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2121.png | 0 |  | 100 |  |  |  | 25 |  |  |  | 515 | 1 |
| 2122 | Sophisticated Governance |  |  | Complexity is only a bad thing if the organization cannot handle it. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2122.png | 0 |  | 100 |  |  |  | 30 |  |  |  | 516 | 1 |
| 2201 | Legendary Merc |  |  | This Mercenary is a one-man army and an amazing subleader. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2201.png | 0 |  | 120 |  |  |  | 10 |  |  |  | 121 | 2 |
| 2202 | Battle Reporter |  |  | Have Vidcom Cameras rolling when our troops crush the enemy! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2202.png | 0 |  | 120 |  |  |  | 10 |  |  |  | 122 | 2 |
| 2203 | Bribe Faction |  |  | Your Faction follows the lead and votes as it should. No questions asked. | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2203.png | 1 | 25 | 43 |  | 3 | 150 | 10 |  | 1 | 500 |  | 2 |
| 2204 | Bribe Voters |  |  | You know that people can be bought, right? Voters as well... | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2204.png | 1 | 50 | 53 |  | 3 | 150 | 10 |  | 1 | 500 |  | 2 |
| 2205 | Disband Parliament |  |  | Parliament is disbanded. Elections in 2 months! | 32 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2205.png | 0 |  | 100 |  |  |  | 20 |  |  |  |  | 2 |
| 2206 | Major Impose Sharing |  |  | One can always squeeze some more Credits. More than you might expect actually... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2206.png | 14 | 75 | 12 |  | 1 | 0 | 15 | 300 |  |  |  | 2 |
| 2207 | Ideological Talk |  |  | Time to have a tete-a-tete with the Supreme Leader. | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2207.png | 4 | 25 | 41 |  | 2 | 200 | 10 |  |  |  |  | 2 |
| 2208 | Impeach the Gov |  |  | The people protesting outside your office. It's time to go. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2208.png | 3 | 60 | 14 |  | 4 |  | 10 |  |  |  |  | 2 |
| 2209 | Support Faction |  |  | Let us help your Faction a bit. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2209.png | 0 |  | 40 |  | 1 |  | 15 |  |  |  |  | 2 |
| 2210 | Leave Faction |  |  | Isn't it time to change your political alignments? | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2210.png | 9 |  | 41 |  | 4 | 200 | 10 |  |  |  |  | 2 |
| 2211 | Coopt Minor Elite |  |  | Let's not pressure them... Let's smooth them into us... | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2211.png | 1 | 25 | 81 |  | 4 | 150 | 20 | 100 | 1 | 500 |  | 2 |
| 2212 | Recruiter |  |  | So what if we don't shoot the enemy, but recruit him instead? | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2212.png | 0 |  | 120 |  |  |  | 5 |  |  |  | 123 | 2 |
| 2213 | Greener Grass |  |  | Because it is difficult over here it must surely be be easier elsewhere, no? | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2213.png | 4 | -25 | 13 |  | 1 | 150 | 15 | 100 |  |  |  | 2 |
| 2214 | Shiny Gifts |  |  | Everything can be massaged right? All we need is some smooth talking and some impressive gifts. | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2214.png | 6 | 0 | 61 |  | 2 | 200 | 20 | 100 | 1 | 500 | 0 | 2 |
| 2215 | Minor Impose Sharing |  |  | One can always squeeze some more Credits. Some pushing here, some squeezing there and you'll see. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2215.png | 14 | 50 | 12 |  | 1 | 0 | 10 | 100 |  |  |  | 2 |
| 2216 | Assitants Team |  |  | Good ideas can come from an assistant too. Let's take many. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2216.png | 0 |  | 40 |  |  |  | 5 |  |  |  | 100970 | 2 |
| 2218 | Property Agnosticism |  |  | Who cares about what happens to the properties of some rich bastard? | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2218.png | 0 |  | 100 |  |  |  | 5 |  |  |  | 521 | 2 |
| 2219 | Economic Flexibility |  |  | Somtimes the free market can do a better job than a government apparatchik. | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2219.png | 0 |  | 100 |  |  |  | 10 |  |  |  | 522 | 2 |
| 2220 | Strong President |  |  | Voting on Laws is not a game. If the President advises it should be taken seriously. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2220.png | 0 |  | 100 |  |  |  | 15 |  |  |  | 523 | 2 |
| 2221 | Militia Conversion |  |  | Militia Units don't mind switching uniform and calling themselves regulars. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2221.png | 0 |  | 100 |  |  |  | 20 |  |  |  | 524 | 2 |
| 2222 | Permanent Militancy |  |  | Militia man and regular soldier man are brothers in the same fight. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2222.png | 0 |  | 100 |  |  |  | 25 |  |  |  | 525 | 2 |
| 2223 | Structured Research |  |  | There is method to the madness. Its all about scale management. | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2223.png | 0 |  | 100 |  |  |  | 30 |  |  |  | 526 | 2 |
| 2301 | Dread Bots |  |  | Nightmarish high speed robots with slashing ceramic blades. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2301.png | 0 |  | 120 |  |  |  | 10 |  |  |  | 131 | 3 |
| 2302 | Robotic Update |  |  | All robots report for an operating system finetuning! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2302.png | 61 |  | 120 |  | 1 |  | 5 |  |  |  |  | 3 |
| 2303 | Strategicus |  |  | A picture is worth a thousand words. An hour in the simulator is worth a thousand pictures... | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2303.png | 0 |  | 40 |  |  |  | 10 |  |  |  | 100973 | 3 |
| 2304 | Resistance is Futile |  |  | Force them to join. It's not about our relation, it's about their fear. | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2304.png | 9 |  | 82 |  | 4 | 400 | 20 |  |  |  |  | 3 |
| 2305 | Decode GR Tech |  |  | Discover a random GR Technology. | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2305.png | 61 |  | 100 |  | 4 |  | 40 |  |  |  |  | 3 |
| 2306 | Erase Past |  |  | If they do not remember who they are, they cannot hold on to their traditions. | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2306.png | 25 |  | 17 |  | 1 | 200 | 20 |  |  |  |  | 3 |
| 2307 | Hail Leader |  |  | The Leader will bask in glory on all Vidcom channels. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2307.png | 0 |  | 40 |  | 1 |  | 10 |  |  |  |  | 3 |
| 2308 | Cybernetic Doctor |  |  | Yes we can re-attach that arm! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2308.png | 0 |  | 120 |  |  |  | 5 |  |  |  | 132 | 3 |
| 2309 | Public Denunciation |  |  | Under the weight of shame... resigning is the only way out... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2309.png | 14 |  | 48 |  | 4 | 150 | 15 |  |  |  |  | 3 |
| 2310 | Citizen Poll |  |  | People will be happy to be consulted, but politcians will react as well... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2310.png | 14 |  | 100 |  | 1 |  | 20 |  |  |  |  | 3 |
| 2311 | Powerbook |  |  | With the right tools, difficult tasks become more easy... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2311.png | 0 |  | 40 |  |  |  | 10 |  |  |  | 100974 | 3 |
| 2312 | Data Tap |  |  | The more advanced our enemy, the easier it will be to listen in. | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2312.png | 61 |  | 62 |  | 1 | 1500 | 10 |  |  |  |  | 3 |
| 2313 | Analytical Realocations |  |  | Change the subcommanders cleverly and performance will increase. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2313.png | 25 |  | 120 |  | 1 |  | 10 |  |  |  |  | 3 |
| 2314 | Logical Propaganda |  |  | Tell the people what will make them most happy. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2314.png | 25 |  | 15 |  | 1 | 200 | 10 |  |  |  |  | 3 |
| 2315 | Intelligent Mustering |  |  | We know what you need and the army can provide it to you. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2315.png | 25 |  | 15 |  | 1 | 200 | 10 |  |  |  |  | 3 |
| 2316 | Optimal Patrols |  |  | No ruffian, no agitator will dare to go out on the streets. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2316.png | 25 |  | 15 |  | 1 | 200 | 10 |  |  |  |  | 3 |
| 2317 | Studied Gift |  |  | Pearls and beads, housing and work, dreams and desires... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2317.png | 25 |  | 11 |  | 1 | 200 | 10 |  | 1 | 500 |  | 3 |
| 2318 | Ever Present Eye |  |  | Cameras everywhere. The ever watchfull eye will increase our security. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2318.png | 0 |  | 100 |  |  |  | 5 |  |  |  | 531 | 3 |
| 2319 | Repair Bots |  |  | They toil even if no workers present. Asset repairs will speed up! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2319.png | 0 |  | 100 |  |  |  | 10 |  |  |  | 532 | 3 |
| 2320 | Robotics Obsession |  |  | Inspired by the Syndic Computer your people have developed an almost unhealthy obsession with robotics as well as machinery. Increases Tech Research speed with +50% for the Tech Groups: Engineering, Machinery, Automation, Robotics, Heavy Machinery. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2320.png | 0 |  | 100 |  |  |  | 15 |  |  |  | 533 | 3 |
| 2321 | Data Retrieval Bureau |  |  | Research is about connecting the puzzle pieces. That's what Data Retrieval does. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2321.png | 0 |  | 100 |  |  |  | 20 |  |  |  | 534 | 3 |
| 2322 | Teacher Bots |  |  | We cannot have a teacher for every student, but a bot, that we can do. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2322.png | 0 |  | 100 |  |  |  | 25 |  |  |  | 535 | 3 |
| 2324 | Logistical Matrix |  |  | New way of approaching logistics allows our trucks and trains to reach much further. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2324.png | 0 |  | 100 |  |  |  | 30 |  |  |  | 536 | 3 |
| 2401 | Deadly Concours |  |  | Excellence or Death! 1 in 10 will bite the bullet. but: gain Virtus! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2401.png | 3 |  | 104 |  | 1 | 250 | 30 |  |  |  |  | 4 |
| 2402 | GR Walker Merc |  |  | A famous mercenrary GR Walker troop joins you. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2402.png | 0 |  | 100 |  |  |  | 20 |  |  |  |  | 4 |
| 2403 | Meditator |  |  | The sound of silence | 33 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2403.png | 0 |  | 40 |  |  |  | 10 |  |  |  | 100975 | 4 |
| 2404 | Bygones be bygones |  |  | Let's just forget about what happened. Our <NATION> considers you a friend now. | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2404.png | 6 |  | 183 |  | 4 | 300 | 20 |  |  |  |  | 4 |
| 2405 | Cut Red Tape |  |  | Reducing bureaucracy starts with reducing pesky rules. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2405.png | 3 |  | 105 |  | 1 | 1500 | 20 |  |  |  |  | 4 |
| 2406 | Antiques Shop |  |  | This dealer is amazing. The stuff he has... beyond believing. | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2406.png | 0 |  | 100 |  | 4 |  | 40 |  |  |  |  | 4 |
| 2407 | Meritocracy Hail |  |  | Who is the best Leader we have? | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2407.png | 6 |  | 102 |  | 1 | 200 | 10 |  |  |  |  | 4 |
| 2408 | Governor Evaluation |  |  | Thorough professional evaluation will help improve skills. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2408.png | 3 |  | 49 |  | 1 | 3000 | 10 |  |  |  |  | 4 |
| 2409 | Skill Building Seminar |  |  | Everybody will learn. Everybody! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2409.png | 14 |  | 103 |  | 1 | 300 | 20 |  |  |  |  | 4 |
| 2410 | Actual Combat Trainer |  |  | Amazing trainer. And unorthodox. He trains troops during actual combat. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2410.png | 0 |  | 120 |  |  |  | 5 |  |  |  | 141 | 4 |
| 2411 | Cease Fire |  |  | It might not hold... but it might... hold your fire! | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2411.png | 2 |  | 63 |  | 4 | 200 | 20 |  |  |  |  | 4 |
| 2412 | Unit Fitness Challenge |  |  | All Units compete against eachother to see who's the best. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2412.png | 3 |  | 141 |  | 1 | 300 | 5 |  |  |  |  | 4 |
| 2413 | Look at your Gov |  |  | People, do you realize how good your Governor is? | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2413.png | 6 |  | 18 |  | 1 | 200 | 5 |  |  |  |  | 4 |
| 2414 | Altruistic Resignation |  |  | Inspire everybody by an act of ultimate altruism. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2414.png | 6 |  | 50 |  | 4 | 150 | 15 |  |  |  |  | 4 |
| 2415 | Panzerhead |  |  | The true expert of armoured warfare. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2415.png | 0 |  | 120 |  |  |  | 5 |  |  |  | 142 | 4 |
| 2416 | Public Recognition |  |  | The more good things we can say the more the Leader will be pleased. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2416.png | 6 |  | 43 |  | 1 |  | 5 |  |  |  |  | 4 |
| 2417 | Workplace Pride |  |  | If we are proud of our work, we'll be more happy. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2417.png |  |  | 100 |  |  |  | 5 |  |  |  | 541 | 4 |
| 2418 | HR Excellence |  |  | To find the best candidate is not as easy as you think. It's an art. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2418.png |  |  | 100 |  |  |  | 10 |  |  |  | 542 | 4 |
| 2419 | Psychological Screening |  |  | HR gets psycholigists at the interview table. They'll filter out the lunatics. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2419.png |  |  | 100 |  |  |  | 15 |  |  |  | 543 | 4 |
| 2420 | Talent Scouting Bureau |  |  | We could wait who comes, or we could actively search... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2420.png |  |  | 100 |  |  |  | 20 |  |  |  | 544 | 4 |
| 2421 | Diplomatic Sanctuary |  |  | Other Majors will be more likely to leave us in peace. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2421.png |  |  | 100 |  |  |  | 25 |  |  |  | 545 | 4 |
| 2422 | Loyalty Honor Code |  |  | Why rebel? It is treason. A true man goes into exile. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2422.png |  |  | 100 |  |  |  | 30 |  |  |  | 546 | 4 |
| 2501 | Legendary Treasure |  |  | People will tell their children about this unbelievable find. | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2501.png |  |  | 100 |  |  |  | 30 |  |  |  |  | 5 |
| 2502 | Full Security Breach |  |  | We have found a backdoor, go go go! | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2502.png | 40 |  | 64 |  | 1 | 50 | 20 |  |  |  |  | 5 |
| 2503 | Key Ally |  |  | In the end i'll be your only friend... | 32 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2503.png |  |  | 40 |  |  |  | 20 |  |  |  | 100976 | 5 |
| 2504 | XL Treasure |  |  | A huge treasure is just up for grabs... | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2504.png |  |  | 100 |  |  |  | 20 |  |  |  |  | 5 |
| 2505 | Involuntary Donations |  |  | Get your wallets out, ladies and gentlemen... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2505.png | 9 |  | 103 |  | 1 |  | 20 |  |  |  |  | 5 |
| 2506 | CI Detachment |  |  | Why spy far away when the enemy might be right on our doorstep? | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2506.png | 40 |  | 19 |  | 1 |  | 15 |  |  |  |  | 5 |
| 2507 | Steal Tech |  |  | Why research, when we can steal? | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2507.png | 40 |  | 64 |  | 4 | 50 | 30 |  |  |  |  | 5 |
| 2508 | Buy Loyalty |  |  | Everybody has a price... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2508.png | 1 |  | 43 |  | 1 |  | 10 |  | 1 | 500 |  | 5 |
| 2509 | Major Treasure |  |  | What shines there, between the rubble? | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2509.png |  |  | 100 |  |  |  | 10 |  |  |  |  | 5 |
| 2510 | Secret Service Group |  |  | Make our frontline troops participate in intelligence gathering. | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2510.png |  |  | 120 |  |  |  | 5 |  |  |  | 151 | 5 |
| 2511 | Weed Them Out |  |  | Anybody could be an enemy agent! | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2511.png | 40 |  | 20 |  | 1 |  | 10 |  |  |  |  | 5 |
| 2512 | Buy Off Unrest |  |  | How about we give you a Credit and you keep your mouth shut? | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2512.png | 1 |  | 21 |  | 1 |  | 5 |  | 1 | 500 |  | 5 |
| 2513 | Local Spy Recruitment |  |  | Some of enemy citizens are willing to help us. | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2513.png | 40 |  | 161 |  | 1 |  | 10 |  | 1 | 500 |  | 5 |
| 2514 | Balcony Fall |  |  | Please, do admire the view... | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2514.png | 40 |  | 51 |  | 4 | 300 | 10 |  |  |  |  | 5 |
| 2515 | Motorhead Devils |  |  | Crazy bikers fly right over the enemy's trenches. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2515.png |  |  | 120 |  |  |  | 5 |  |  |  | 152 | 5 |
| 2516 | Minor Treasure |  |  | It might not be much, but its up for the taking! | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2516.png |  |  | 100 |  |  |  | 5 |  |  |  |  | 5 |
| 2517 | Spy School |  |  | With execllent training your Spies have less chance to be captured. Also Covert Ops Skill Rolls +10. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2517.png |  |  | 100 |  |  |  | 5 |  |  |  | 551 | 5 |
| 2518 | Counter Espionage |  |  | With this new branch your Secret Service Council will be able generate Counter Espionage Strategems. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2518.png |  |  | 100 |  |  |  | 10 |  |  |  | 552 | 5 |
| 2519 | Secret Scientists |  |  | With your scientists being schooled in espionage any Scientific Pact you might have with another Major Regime will give you more technology than before. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2519.png |  |  | 100 |  |  |  | 15 |  |  |  | 553 | 5 |
| 2520 | GR Recovery Branch |  |  | If any treasure still remains on the map, you'll have more chance of discovering old GR Tech. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2520.png |  |  | 100 |  |  |  | 20 |  |  |  | 554 | 5 |
| 2521 | Trader-Elite intermingling |  |  | With your elites and those of the Traders intermingling, businesses are setup, marriages made and this gives your Leaders 5% of the Traders cash reserves every round. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2521.png |  |  | 100 |  |  |  | 25 |  |  |  | 555 | 5 |
| 2522 | Master Spies |  |  | Allows you to get a better Spy Stratagems which has more chance to succeed and inserts more Spies. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2522.png |  |  | 100 |  |  |  | 30 |  |  |  | 556 | 5 |
| 2590 | CE Spy | 3 |  | Send 1 counter-intelligence spy | 18 | chk(249,30,REGID,552)>0; | 2 |  | 30 | 10 | 3 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2590.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2591 | CE Spy Team | 4 |  | Send 3 counter-intelligence spies | 18 | che(249,2,2590)>0; chk(249,30,REGID,552)>0; | 2 |  | 10 | 20 | 3 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2591.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2592 | CE Spy Ring | 5 |  | Send 6 counter-intelligence spies | 18 | che(249,2,2591)>0; chk(249,30,REGID,552)>0; | 2 |  | 5 | 30 | 3 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2592.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2594 | Master Spy | 4 |  | Send 2 spies | 18 | chk(249,30,REGID,556)>0 | 2 |  | 30 | 10 | 3 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2594.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2595 | Master Spy Team | 5 |  | Send 6 spies | 18 | che(249,2,2594)>0; chk(249,30,REGID,556)>0; | 2 |  | 10 | 20 | 3 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2595.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2596 | Master Spy Ring | 7 |  | Send 12 spies | 18 | che(249,2,2595)>0; chk(249,30,REGID,556)>0; | 2 |  | 5 | 30 | 3 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2596.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2601 | Legendary Knight |  |  | Turn a Great Knight into a Legendary Knight | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2601.png |  |  | 120 |  |  |  | 20 |  |  |  | 163 | 6 |
| 2602 | Quest |  |  | There is talk of a legendary stash of GR equipment to be found. | 32 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2602.png | 15 |  | 106 |  | 1 |  | 20 |  |  |  |  | 6 |
| 2603 | Parlay |  |  | Wait... Stop... Hold your fire! | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2603.png | 6 |  | 65 |  | 4 |  | 15 |  |  |  |  | 6 |
| 2604 | Divine Inspiration |  |  | Eureka! We solved it... just like that... | 32 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2604.png | 8 |  | 107 |  | 4 | 200 | 10 |  |  |  |  | 6 |
| 2605 | Grand Tournament |  |  | Bread and Games at a pompous scale | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2605.png | 10 |  | 102 |  | 1 |  | 15 |  |  |  |  | 6 |
| 2606 | Knighthood |  |  | Rise, new knight of the <NATION> | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2606.png | 6 |  | 52 |  | 4 | 200 | 10 |  |  |  |  | 6 |
| 2607 | Prima Nocta |  |  | Legalized brutish behaviour and barbarism | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2607.png | 10 |  | 108 |  | 1 | 200 | 25 |  |  |  |  | 6 |
| 2608 | Royal Marriage |  |  | Who can refuse the hand of our beautiful young lady? | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2608.png | 6 |  | 61 |  | 4 | 200 | 20 |  |  |  |  | 6 |
| 2609 | Great Knight |  |  | Turn a Feudal Knight into a Great Knight | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2609.png |  |  | 120 |  |  |  | 15 |  |  |  | 162 | 6 |
| 2610 | Noble Duel |  |  | A fight to the death | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2610.png | 10 |  | 51 |  | 1 |  | 15 |  |  |  |  | 6 |
| 2611 | Mythical Beast |  |  | Nobody knows how, but some Critters have chosen to serve you! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2611.png | 41 | 75 | 100 |  | 4 |  | 30 |  |  |  |  | 6 |
| 2612 | Feudal Compound |  |  | A gift no Leader can refuse | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2612.png | 20 |  | 52 |  | 1 |  | 10 |  |  |  |  | 6 |
| 2613 | Great Market |  |  | With high supply the prices will go down... right? | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2613.png | 20 |  | 22 |  | 1 | 200 | 15 |  | 1 | 500 |  | 6 |
| 2614 | Cursed Harvest |  |  | The grain will rot in the fields... or under their domes | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2614.png | 8 |  | 161 |  | 1 |  | 10 |  |  |  |  | 6 |
| 2615 | Castle Builders |  |  | A trench is much like a castle wall | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2615.png |  |  | 120 |  |  |  | 5 |  |  |  | 164 | 6 |
| 2616 | Feudal Knight |  |  | Who better to lead the troops than a knight? | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2616.png |  |  | 120 |  |  |  | 5 |  |  |  | 161 | 6 |
| 2617 | Bloodline Investigation |  |  | A Leader with genetic issues might well lose standing | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2617.png | 19 | 50 | 42 |  | 1 |  | 20 |  |  |  |  | 6 |
| 2618 | Management Doctrine |  |  | The best manager doesn't do anything | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2618.png |  |  | 100 |  |  |  | 5 |  |  |  | 561 | 6 |
| 2619 | Engineering Excellence |  |  | It's not about giving a nice speech, but about doing the math! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2619.png |  |  | 100 |  |  |  | 10 |  |  |  | 562 | 6 |
| 2620 | Martial Duel Culture |  |  | He who cannot defend himself, cannot defend any others... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2620.png |  |  | 100 |  |  |  | 15 |  |  |  | 563 | 6 |
| 2621 | Entrenchment Doctrine |  |  | Defense is the stronger form of war | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2621.png |  |  | 100 |  |  |  | 20 |  |  |  | 564 | 6 |
| 2622 | Honor Mindset |  |  | Character is everything. Honor is even beyond that. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2622.png |  |  | 100 |  |  |  | 25 |  |  |  | 565 | 6 |
| 2623 | Warrior Ideology |  |  | Train at a young age, we are all Spartans now! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2623.png |  |  | 100 |  |  |  | 30 |  |  |  | 566 | 6 |
| 2701 | Uberführer |  |  | Sworn to loyalty during peak Autocracy | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2701.png |  |  | 120 |  |  |  | 10 |  |  |  | 171 | 7 |
| 2702 | Order Now! |  |  | A mighty violent shout and all go home... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2702.png | 9 |  | 102 |  | 1 |  | 10 |  |  |  |  | 7 |
| 2703 | It's just paper |  |  | Our deals are just ink on paper. Just tear them up. | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2703.png | 3 |  | 61 |  | 4 |  | 15 |  |  |  |  | 7 |
| 2704 | Harass Faction |  |  | Smear and mud, make a Faction feel toxic | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2704.png | 9 |  | 54 |  | 1 | 150 | 15 |  |  |  |  | 7 |
| 2705 | National Recruitment |  |  | All rally! All report to recruitment officers! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2705.png | 3 |  | 102 |  | 1 | 200 | 30 |  |  |  |  | 7 |
| 2706 | False Flag |  |  | How dare they... how dare they attack us... | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2706.png | 40 |  | 63 |  | 1 |  | 15 |  |  |  |  | 7 |
| 2707 | Rekindle Flame |  |  | Honor in Militium est | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2707.png | 3 |  | 18 |  | 1 |  | 15 |  |  |  |  | 7 |
| 2708 | Recruit Veterans |  |  | Come to us and become the best of the best | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2708.png | 3 |  | 102 |  | 1 | 200 | 20 |  |  |  |  | 7 |
| 2709 | Call To Submission |  |  | The time has come. You cannot deny us | 30 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2709.png | 9 | 25 | 84 |  | 4 | 150 | 10 |  |  |  |  | 7 |
| 2710 | Execution |  |  | No discussion, no trial, no mercy | 18 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2710.png | 14 |  | 51 |  | 4 | 50 | 20 |  |  |  |  | 7 |
| 2711 | Fall in Line! |  |  | Line up, listen to my voice! Shape up! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2711.png | 9 |  | 121 |  | 1 |  | 15 |  |  |  |  | 7 |
| 2712 | Pro Patria |  |  | You do not exist for yourself, you exist to serve the <NATION> | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2712.png | 3 |  | 53 |  | 1 |  | 10 |  |  |  |  | 7 |
| 2713 | Zone Recuitment |  |  | Its our turn to sign up, boys! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2713.png | 3 |  | 18 |  | 1 |  | 10 |  |  |  |  | 7 |
| 2714 | Propaganda Leaflets |  |  | Its no poetry, but it goes to straight to the emotional core, it is effective... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2714.png | 4 |  | 18 |  | 1 |  | 5 |  |  |  |  | 7 |
| 2715 | Security Coordinator |  |  | Experts in surpressing civilian tribulations | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2715.png |  |  | 120 |  |  |  | 5 |  |  |  | 173 | 7 |
| 2716 | Super Heavy Team |  |  | Experts in destroying enemy armour | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2716.png |  |  | 120 |  |  |  | 5 |  |  |  | 172 | 7 |
| 2717 | Call To Loyalty |  |  | Yes you! Stand straight... look me in the eyes! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2717.png | 3 |  | 53 |  | 1 |  | 5 |  |  |  |  | 7 |
| 2718 | Recruitment Infra |  |  | With dedicated recruitment offices you'll get more recruits | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2718.png |  |  | 100 |  |  |  | 5 |  |  |  | 571 | 7 |
| 2719 | Training Compounds |  |  | Specialized training for recruits will increase their XP when they arrive on the field | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2719.png |  |  | 100 |  |  |  | 10 |  |  |  | 572 | 7 |
| 2720 | Propaganda Apparatus |  |  | This new branch will give you the means to do effective propaganda | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2720.png |  |  | 100 |  |  |  | 15 |  |  |  | 573 | 7 |
| 2721 | Paramilitary |  |  | Increases Militancy throughout the <NATION>. Also increases recruitment efficiency. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2721.png |  |  | 100 |  |  |  | 20 |  |  |  | 574 | 7 |
| 2722 | Commander Academy |  |  | Commanders visit the academy regularly and gain more XP. | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2722.png |  |  | 100 |  |  |  | 25 |  |  |  | 575 | 7 |
| 2723 | Omnes pro Ordo |  |  | All for Order! Guiding principle. Gets perpetual Virtus increase | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2723.png |  |  | 100 |  |  |  | 30 |  |  |  | 576 | 7 |
| 2791 | Democracy Propaganda | 40 |  | Improve your Democracy Profile. | 18 | chk(249,30,REGID,573)>0; |  |  | 10 | 20 | 4 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2791.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2792 | Meritocracy Propaganda | 40 |  | Improve your Meritocracy Profile. | 18 | chk(249,30,REGID,573)>0; |  |  | 10 | 20 | 4 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2792.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2793 | Autocracy Propaganda | 40 |  | Improve your Autocracy Profile. | 18 | chk(249,30,REGID,573)>0; |  |  | 10 | 20 | 4 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2793.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2794 | Commerce Propaganda | 40 |  | Improve your Commerce Profile. | 18 | chk(249,30,REGID,573)>0; |  |  | 10 | 20 | 4 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2794.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2795 | Enforcement Propaganda | 40 |  | Improve your Enforcement Profile. | 18 | chk(249,30,REGID,573)>0; |  |  | 10 | 20 | 4 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2795.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2796 | Government Propaganda | 40 |  | Improve your Government Profile. | 18 | chk(249,30,REGID,573)>0; |  |  | 10 | 20 | 4 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2796.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2797 | Fist Propaganda | 40 |  | Improve your Fist Profile. | 18 | chk(249,30,REGID,573)>0; |  |  | 10 | 20 | 4 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2797.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2798 | Mind Propaganda | 40 |  | Improve your Mind Profile. | 18 | chk(249,30,REGID,573)>0; |  |  | 10 | 20 | 4 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2798.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2799 | Heart Propaganda | 40 |  | Improve your Heart Profile. | 18 | chk(249,30,REGID,573)>0; |  |  | 10 | 20 | 4 | 2 | 0 |  |  |  | 9 | 10 |  |  |  |  |  |  |  | politics/card/2799.png | SE_Politics |  |  |  |  |  |  |  |  |  |  |  |
| 2801 | Improve Model |  |  | A random model will be improved with many improvisations. | 13 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2801.png | 21 |  | 122 |  | 1 | 150 | 30 |  |  |  |  | 8 |
| 2802 | Grand Field Excercise |  |  | Gets immediate Field Test points on all Models in the field | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2802.png | 21 |  | 102 |  | 1 | 200 | 30 |  |  |  |  | 8 |
| 2803 | Colonists Now! |  |  | Promises of greener pastures lure flocks of Colonists | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2803.png | 9 |  | 16 |  | 1 | 200 | 10 |  |  |  |  | 8 |
| 2804 | Wormtongue |  |  | Expert in keeping troops alive while inflicting maximum damage | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2804.png |  |  | 120 |  |  |  | 5 |  |  |  | 181 | 8 |
| 2805 | Shadow Designer |  |  | Next new Model start gets extra rolls | 13 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2805.png | 21 |  | 110 |  | 1 |  | 10 |  |  |  |  | 8 |
| 2806 | Political General |  |  | Fatso doesn't do much except carry medals. But victory of his unit increase Word | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2806.png |  |  | 120 |  |  |  | 2 |  |  |  | 182 | 8 |
| 2807 | Recruits Now! |  |  | Your word is law! Recruits report at our barracks! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2807.png | 9 |  | 16 |  | 1 |  | 10 |  |  |  |  | 8 |
| 2808 | Cut Heads |  |  | Cut red tape and some heads, reduce apparatchik score | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2808.png | 9 |  | 102 |  | 1 | 200 | 15 |  |  |  |  | 8 |
| 2809 | Captain |  |  | Senior officer is welcomed by the troops | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2809.png |  |  | 120 |  |  |  | 5 |  |  |  | 40 | 8 |
| 2810 | Crush Unrest |  |  | Brutish, bloody, but effective. That's all that matters, right? | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2810.png | 9 |  | 16 |  | 4 | 200 | 10 |  |  |  |  | 8 |
| 2811 | Whip Troops |  |  | Amazing soldiery reserve energy released by the whip | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2811.png | 9 |  | 121 |  | 4 |  | 5 |  |  |  |  | 8 |
| 2812 | You are no one |  |  | Loss of seniority and social standing will follow immediately... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2812.png | 14 |  | 42 |  | 1 | 150 | 15 |  |  |  |  | 8 |
| 2813 | Break Tradition |  |  | There is no such thing a a culture that resists us! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2813.png | 9 |  | 17 |  | 1 | 200 | 25 |  |  |  |  | 8 |
| 2814 | Sergeant |  |  | Lower officer is cheered by the troops receiving him | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2814.png |  |  | 120 |  |  |  | 5 |  |  |  | 38 | 8 |
| 2815 | Tyrant Commissar |  |  | Nasty bugger that ensures morale stays high. At a price... | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2815.png |  |  | 120 |  |  |  | 2 |  |  |  | 183 | 8 |
| 2816 | I am the Light |  |  | They that be blinded, will believe... | 32 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2816.png | 9 |  | 109 |  | 1 |  | 10 |  |  |  |  | 8 |
| 2817 | Honor Guard |  |  | Elite personal guards will keep your Leader safe | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2817.png |  |  | 40 |  |  |  | 5 |  |  |  | 100977 | 8 |
| 2818 | Know your Place |  |  | Teach the children discipline and obedience. No questions, just do as you are told | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2818.png |  |  | 100 |  |  |  | 5 |  |  |  | 581 | 8 |
| 2819 | Cultural Engineering |  |  | A good citizen ignores the past and has many children for our joint future | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2819.png |  |  | 100 |  |  |  | 10 |  |  |  | 582 | 8 |
| 2820 | Permanent Field Testing |  |  | A new branch will assure field testing in simulated combat conditions | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2820.png |  |  | 100 |  |  |  | 15 |  |  |  | 583 | 8 |
| 2821 | Expert Training Grounds |  |  | Simulation and realism in training allows XP to go much higher | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2821.png |  |  | 100 |  |  |  | 20 |  |  |  | 584 | 8 |
| 2822 | Limited Social Mobility |  |  | Good citizens stay put. Don't flee your misery! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2822.png |  |  | 100 |  |  |  | 25 |  |  |  | 585 | 8 |
| 2823 | Officer Academy |  |  | We'll train and provide plenty of segeants, lieutenants and captains | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2823.png |  |  | 100 |  |  |  | 30 |  |  |  | 586 | 8 |
| 2901 | High Warlord |  |  | Horned fury. Slaughterer of infantry! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2901.png |  |  | 120 |  |  |  | 15 |  |  |  | 191 | 9 |
| 2902 | Fanatical Fight |  |  | General call to stand ready and be brave! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2902.png | 6 |  | 102 |  | 4 | 200 | 20 |  |  |  |  | 9 |
| 2903 | Desperate Measures |  |  | Get a lot of Food from Zone. But please, do not ask how... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2903.png | 15 |  | 12 |  | 1 | 200 | 5 |  |  |  |  | 9 |
| 2904 | Penal Regiment |  |  | Prisoners volunteer into a Militia Regiment. Willing to accept suicidal missions | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2904.png | 15 |  | 102 |  | 4 |  | 10 |  |  |  |  | 9 |
| 2905 | Zero Doubt |  |  | Leader will become beyond doubt, a true acolyte | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2905.png |  |  | 40 |  |  |  | 10 |  |  |  | 100978 | 9 |
| 2906 | Into the Breach! |  |  | All troops will be larger than life in defensive combat | 13 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2906.png | 24 |  | 102 |  | 1 | 200 | 15 |  |  |  |  | 9 |
| 2907 | Praise Faction |  |  | All hail your Faction! May your zeal increase even more! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2907.png | 6 |  | 45 |  | 1 | 200 | 10 |  |  |  |  | 9 |
| 2908 | Forward Once More! |  |  | All troops will redouble their zeal in offensive combat this round. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2908.png | 24 |  | 102 |  | 1 | 200 | 15 |  |  |  |  | 9 |
| 2909 | Breakthrough Team |  |  | Experts in getting your troops through the enemy frontline | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2909.png |  |  | 120 |  |  |  | 5 |  |  |  | 192 | 9 |
| 2910 | Militia Awake! |  |  | Believing in the Militia is what binds us! | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2910.png | 15 |  | 23 |  | 1 | 125 | 10 |  |  |  |  | 9 |
| 2911 | Penal Batallion |  |  | Prisoners volunteer into a Militia Batallion. Willing to accept suicidal missions. | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2911.png | 15 |  | 102 |  | 4 |  | 5 |  |  |  |  | 9 |
| 2912 | Fanatical Offensive |  |  | All troops will rally their morale and stand ready for what is to come... | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2912.png |  |  | 140 |  |  |  | 10 |  |  |  |  | 9 |
| 2913 | Voluntary Tax |  |  | Loyalty through participation and abstenance of wealth | 1 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2913.png | 15 |  | 11 |  | 1 | 200 | 20 |  |  |  |  | 9 |
| 2914 | Combat Doping |  |  | Take the shot! For the motherland! | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2914.png | 24 |  | 121 |  | 4 |  | 5 |  |  |  |  | 9 |
| 2915 | Suicidal Squad |  |  | Sacrifice for the Supreme Leader is a glorious death | 14 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2915.png |  |  | 120 |  |  |  | 5 |  |  |  | 23 | 9 |
| 2916 | Chosen by Fate |  |  | Receive 1 Fate Point | 32 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2916.png | 14 |  | 104 |  | 4 | 150 | 40 |  |  |  |  | 9 |
| 2917 | Dismissed |  |  | Report to the Reserve Pool! No questions... No penalties... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2917.png | 14 |  | 50 |  | 4 |  | 15 |  |  |  |  | 9 |
| 2918 | Flexible Postures |  |  | Posture Stratagems become cheaper with this new found flexibility | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2918.png |  |  | 100 |  |  |  | 5 |  |  |  | 591 | 9 |
| 2919 | War without Consequence |  |  | We will not consider moral questions concerning our enemies aymore | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2919.png |  |  | 100 |  |  |  | 10 |  |  |  | 592 | 9 |
| 2920 | Codename Valkyrie |  |  | New policy will rally citizens to defend their City when neccessary | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2920.png |  |  | 100 |  |  |  | 15 |  |  |  | 593 | 9 |
| 2921 | Utmost Effort Doctrine |  |  | We'll march to glory and we'll set a record doing so | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2921.png |  |  | 100 |  |  |  | 20 |  |  |  | 594 | 9 |
| 2922 | Honor Culture |  |  | Giving in to desperation is not our culture anymore | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2922.png |  |  | 100 |  |  |  | 25 |  |  |  | 595 | 9 |
| 2923 | Glorious Carnage |  |  | To find the bliss in slaugher and bloodshed makes our soldiers more lethal than ever... | 31 |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  | 2 |  |  |  |  |  | politics/card/2923.png |  |  | 100 |  |  |  | 30 |  |  |  | 596 | 9 |

