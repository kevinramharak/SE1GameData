# `Flex Story Decision Data Effects` (`264`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Decision ID | `Text` |
| `1` | Group Code | `Text` |
| `2` | IF Logic | `Text` |
| `3` | SET Logic | `Text` |

### Data

| Decision ID | Group Code | IF Logic | SET Logic |
| --- | --- | --- | --- |
| 101 | 1 |  | ZONEKEY.city=ZONEKEY.city+1 |
| 102 | 1 |  | ZONEKEY.levelAsk=ROUND+8 |
| 103 | 1 |  | ZONEKEY.city=ZONEKEY.city+1 |
| 104 | 1 |  | ZONEKEY.levelAsk=ROUND+8 |
| 105 | 1 |  | ZONEKEY.city=ZONEKEY.city+1 |
| 106 | 1 |  | ZONEKEY.levelAsk=ROUND+8 |
| 107 | 1 |  | ZONEKEY.city=ZONEKEY.city+1 |
| 108 | 1 |  | ZONEKEY.levelAsk=ROUND+8 |
| 109 | 1 |  | ZONEKEY.city=ZONEKEY.city+1 |
| 110 | 1 |  | ZONEKEY.levelAsk=ROUND+8 |
| 111 | 1 |  | ZONEKEY.city=ZONEKEY.city+1 |
| 112 | 1 |  | ZONEKEY.levelAsk=ROUND+8 |
| 113 | 10 |  |  |
| 113 | 11 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 113 | 12 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 113 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 10))) |
| 113 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 10))) |
| 113 | 16 |  | REGKEY.morality=REGKEY.morality+20; |
| 113 | 18 |  | SOURCEZONEKEY.pop = SOURCEZONEKEY.pop + TEMP1 / 100 |
| 114 | 26 |  | REGKEY.morality=REGKEY.morality-10; |
| 114 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 114 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 114 | 21 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 114 | 20 |  |  |
| 115 | 10 |  |  |
| 115 | 11 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 115 | 12 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 5/100) |
| 115 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 10))) |
| 115 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 10))) |
| 115 | 16 |  | REGKEY.credits=REGKEY.credits+TEMP1 |
| 115 | 17 |  | REGKEY.morality=REGKEY.morality+10; |
| 116 | 26 |  | REGKEY.morality=REGKEY.morality-10; |
| 116 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 20))) |
| 116 | 21 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 116 | 20 |  |  |
| 116 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 20))) |
| 117 | 10 |  |  |
| 117 | 11 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 117 | 12 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 117 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 20))) |
| 117 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 20))) |
| 118 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 35))) |
| 118 | 26 |  | exe(346,7,SOURCEZONEID,REGID,TEMP1); |
| 118 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 35))) |
| 118 | 20 |  |  |
| 118 | 21 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 118 | 22 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 5/100) |
| 119 | 10 |  |  |
| 119 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 119 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 119 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 119 | 16 |  | REGKEY.credits=REGKEY.credits+TEMP1 |
| 120 | 20 |  |  |
| 120 | 21 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 10/100) |
| 120 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 10))) |
| 120 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 10))) |
| 121 | 10 |  |  |
| 121 | 11 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 121 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 10))) |
| 121 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 10))) |
| 122 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 5))) |
| 122 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 5))) |
| 122 | 20 |  |  |
| 122 | 21 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 123 | 10 |  |  |
| 123 | 11 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 123 | 12 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 123 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 5))) |
| 123 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 5))) |
| 123 | 16 |  | REGKEY.morality=REGKEY.morality+5; |
| 124 | 26 |  | exe(346,2,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 124 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 20))) |
| 124 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 20))) |
| 124 | 20 |  |  |
| 124 | 21 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 125 | 10 |  |  |
| 125 | 11 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 125 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 30))) |
| 125 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 30))) |
| 125 | 16 |  | TARGETREGKEY.protector=REGID |
| 125 | 17 |  | REGKEY.morality=REGKEY.morality+20; |
| 126 | 26 |  | REGKEY.morality=REGKEY.morality-10; |
| 126 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 10))) |
| 126 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 10))) |
| 126 | 21 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 126 | 20 |  |  |
| 127 | 10 |  |  |
| 127 | 11 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 127 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 20))) |
| 127 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 20))) |
| 127 | 16 |  | TARGETREGKEY.master=REGID |
| 127 | 17 |  | REGKEY.morality=REGKEY.morality+10; |
| 128 | 20 |  |  |
| 128 | 21 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 128 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 10))) |
| 128 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 10))) |
| 128 | 26 |  | REGKEY.morality=REGKEY.morality-5; |
| 129 | 17 |  | REGKEY.morality=REGKEY.morality-15; |
| 129 | 16 |  | exe(346,10,TARGETREGIMEID,-1,4); |
| 129 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 129 | 18 |  | SOURCEZONEKEY.pop = SOURCEZONEKEY.pop + TEMP1 |
| 129 | 12 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 129 | 11 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 129 | 10 |  |  |
| 129 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 130 | 20 |  |  |
| 130 | 21 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 130 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 20))) |
| 130 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 20))) |
| 130 | 26 |  | REGKEY.morality=REGKEY.morality+10; |
| 131 | 18 |  | SOURCEZONEKEY.pop = SOURCEZONEKEY.pop + TEMP2 |
| 131 | 17 |  | REGKEY.morality=REGKEY.morality+15; |
| 131 | 16 |  | exe(346,2,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 131 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 50))) |
| 131 | 11 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 131 | 10 |  |  |
| 131 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 50))) |
| 132 | 20 |  |  |
| 132 | 21 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 132 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 132 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 132 | 26 |  | REGKEY.morality=REGKEY.morality-15; |
| 132 | 28 |  | SOURCEZONEKEY.pop = SOURCEZONEKEY.pop + TEMP1 |
| 133 | 16 |  | exe(346,11,SOURCEZONEID,10,TEMP1); exe(346,10,TARGETREGIMEID,-1,5); |
| 133 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 133 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 133 | 11 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 133 | 10 |  |  |
| 134 | 20 |  |  |
| 134 | 21 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 134 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 15))) |
| 134 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 15))) |
| 135 | 10 |  |  |
| 135 | 11 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 135 | 16 |  | exe(346,12,SOURCEZONEID,TEMP2,0); exe(346,9,SOURCEZONEID,REGIMEID,20); |
| 136 | 26 |  | exe(346,12,SOURCEZONEID,TEMP1,0); |
| 136 | 20 |  |  |
| 136 | 21 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 137 | 10 |  |  |
| 137 | 11 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 137 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 20))) |
| 137 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 20))) |
| 137 | 16 |  | exe(346,35,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 137 | 17 |  | REGKEY.morality=REGKEY.morality+10; |
| 138 | 26 |  | REGKEY.morality=REGKEY.morality-10; |
| 138 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 10))) |
| 138 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 10))) |
| 138 | 21 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 138 | 20 |  |  |
| 139 | 10 |  |  |
| 139 | 11 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 139 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 20))) |
| 139 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 20))) |
| 139 | 16 |  | exe(346,35,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 139 | 17 |  | REGKEY.morality=REGKEY.morality+15; |
| 140 | 27 |  | REGKEY.morality=REGKEY.morality-10; |
| 140 | 26 |  | exe(346,2,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 140 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 30))) |
| 140 | 21 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 140 | 20 |  |  |
| 140 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 30))) |
| 141 | 16 |  | exe(346,35,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 141 | 10 |  |  |
| 141 | 11 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 141 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 60))) |
| 141 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 60))) |
| 141 | 17 |  | REGKEY.morality=REGKEY.morality+20; |
| 142 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 20))) |
| 142 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 20))) |
| 142 | 26 |  | REGKEY.morality=REGKEY.morality-15; |
| 142 | 20 |  |  |
| 142 | 21 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 143 | 10 |  |  |
| 143 | 11 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 143 | 12 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 143 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 5))) |
| 143 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 5))) |
| 144 | 20 |  |  |
| 144 | 21 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 144 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 20))) |
| 144 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 20))) |
| 144 | 26 |  | exe(346,2,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 145 | 16 |  | exe(346,11,SOURCEZONEID,13,TEMP1); |
| 145 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 8))) |
| 145 | 10 |  |  |
| 145 | 11 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 145 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 8))) |
| 146 | 20 |  |  |
| 146 | 21 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 146 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 7))) |
| 146 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 7))) |
| 147 | 16 |  | exe(346,28,REGIMEID,TEMP1); TARGETREGKEY.credits=TARGETREGKEY.credits+TEMP2; TARGETREGKEY.techsale=TARGETREGKEY.techsale+dth(1,6); |
| 147 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 8))) |
| 147 | 11 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 147 | 10 |  |  |
| 147 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 8))) |
| 148 | 20 |  |  |
| 148 | 21 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 148 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 7))) |
| 148 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 7))) |
| 149 | 17 |  | REGKEY.morality=REGKEY.morality+10; |
| 149 | 16 |  | exe(346,35,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 149 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 20))) |
| 149 | 11 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 149 | 10 |  |  |
| 149 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 20))) |
| 150 | 20 |  |  |
| 150 | 21 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 150 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 150 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 150 | 26 |  | REGKEY.morality=REGKEY.morality-5; |
| 151 | 16 |  | REGREGKEY.dipRel =1; REVREGREGKEY.dipRel=1; |
| 151 | 17 |  | REGREGKEY.openContact=0 |
| 151 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 151 | 10 |  |  |
| 151 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 152 | 20 |  |  |
| 152 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 152 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 152 | 26 |  | REGREGKEY.openContact=0 |
| 152 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 153 | 17 |  | REGREGKEY.openContact2=0 |
| 153 | 16 |  | REGREGKEY.dipRel =2; REVREGREGKEY.dipRel=2; |
| 153 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 153 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 153 | 10 |  |  |
| 154 | 20 |  |  |
| 154 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 154 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 154 | 26 |  | REGREGKEY.openContact2=0 |
| 154 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 155 | 16 |  | REGREGKEY.dipRel =3; REVREGREGKEY.dipRel=3; |
| 155 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 155 | 17 |  | REGREGKEY.openContact3=0 |
| 155 | 10 |  |  |
| 155 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 156 | 20 |  |  |
| 156 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 156 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 156 | 26 |  | REGREGKEY.openContact3=0 |
| 156 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 157 | 16 |  | REGREGKEY.dipTrade =1; REVREGREGKEY.dipTrade=1; |
| 157 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 157 | 17 |  | REGREGKEY.openTrade=0 |
| 157 | 10 |  |  |
| 157 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 158 | 20 |  |  |
| 158 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 158 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 158 | 26 |  | REGREGKEY.openTrade=0 |
| 158 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 159 | 10 |  |  |
| 159 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 159 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 159 | 16 |  | REGREGKEY.dipTrade =2; REVREGREGKEY.dipTrade=2; |
| 159 | 17 |  | REGREGKEY.openTrade2=0 |
| 160 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 160 | 26 |  | REGREGKEY.openTrade2=0 |
| 160 | 20 |  |  |
| 160 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 160 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 161 | 10 |  |  |
| 161 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 161 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 161 | 16 |  | REGREGKEY.dipTrade =3; REVREGREGKEY.dipTrade=3; |
| 161 | 17 |  | REGREGKEY.openTrade3=0 |
| 162 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 162 | 26 |  | REGREGKEY.openTrade3=0 |
| 162 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 162 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 162 | 20 |  |  |
| 163 | 10 |  |  |
| 163 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 163 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 163 | 16 |  | REGREGKEY.dipRes =1; REVREGREGKEY.dipRes=1; |
| 163 | 17 |  | REGREGKEY.openRes=0 |
| 164 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 164 | 26 |  | REGREGKEY.openRes=0 |
| 164 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 164 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 164 | 20 |  |  |
| 165 | 10 |  |  |
| 165 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 165 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 165 | 16 |  | REGREGKEY.dipRes =2; REVREGREGKEY.dipRes=2; |
| 165 | 17 |  | REGREGKEY.openRes2=0 |
| 166 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 166 | 26 |  | REGREGKEY.openRes2=0 |
| 166 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 166 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 166 | 20 |  |  |
| 167 | 10 |  |  |
| 167 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 167 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 167 | 16 |  | REGREGKEY.dipRes =3; REVREGREGKEY.dipRes=3; |
| 167 | 17 |  | REGREGKEY.openRes3=0 |
| 168 | 26 |  | REGREGKEY.openRes3=0 |
| 168 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 168 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 168 | 20 |  |  |
| 168 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 169 | 10 |  |  |
| 169 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 169 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 169 | 16 |  | REGREGKEY.dipPact =1; REVREGREGKEY.dipPact=1; |
| 169 | 17 |  | REGREGKEY.openPact=0 |
| 170 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 170 | 26 |  | REGREGKEY.openPact=0 |
| 170 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 170 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 170 | 20 |  |  |
| 171 | 10 |  |  |
| 171 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 171 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 171 | 16 |  | REGREGKEY.dipPact =2; REVREGREGKEY.dipPact=2; |
| 171 | 17 |  | REGREGKEY.openPact2=0 |
| 172 | 26 |  | REGREGKEY.openPact2=0 |
| 172 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 172 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 172 | 20 |  |  |
| 172 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 173 | 10 |  |  |
| 173 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 173 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 173 | 16 |  | REGREGKEY.dipPact =3; REVREGREGKEY.dipPact=3; |
| 173 | 17 |  | REGREGKEY.openPact3=0 |
| 174 | 26 |  | REGREGKEY.openPact3=0 |
| 174 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 174 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 174 | 20 |  |  |
| 174 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 175 | 10 |  |  |
| 175 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 20))) |
| 175 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 20))) |
| 175 | 16 |  | exe(105,SOURCEREGIMESLOT,TARGETREGIMESLOT,1,1) |
| 175 | 17 |  | REGREGKEY.openPeace=0 |
| 176 | 20 |  |  |
| 176 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 5))) |
| 176 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 5))) |
| 176 | 26 |  | REGREGKEY.openPeace=0 |
| 176 | 27 |  | REVREGREGKEY.aiNegativeDip = 100; |
| 177 | 17 |  | REGREGKEY.openGift=0 |
| 177 | 16 |  | REGKEY.credits=REGKEY.credits+400; |
| 177 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 5))) |
| 177 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 5))) |
| 177 | 10 |  |  |
| 178 | 20 |  |  |
| 178 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 2))) |
| 178 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 2))) |
| 178 | 26 |  | REGREGKEY.openGift=0 |
| 178 | 27 |  | TARGETREGKEY.credits=TARGETREGKEY.credits+400; REVREGREGKEY.aiNegativeDip = 50; |
| 179 | 17 |  | REGREGKEY.openGift2=0 |
| 179 | 16 |  | REGKEY.credits=REGKEY.credits+1000; |
| 179 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 5))) |
| 179 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 5))) |
| 179 | 10 |  |  |
| 180 | 20 |  |  |
| 180 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 2))) |
| 180 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 2))) |
| 180 | 26 |  | REGREGKEY.openGift2=0 |
| 180 | 27 |  | TARGETREGKEY.credits=TARGETREGKEY.credits+1000; REVREGREGKEY.aiNegativeDip = 100; |
| 181 | 16 |  | REGKEY.credits=REGKEY.credits+2500; |
| 181 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 5))) |
| 181 | 17 |  | REGREGKEY.openGift3=0 |
| 181 | 10 |  |  |
| 181 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 5))) |
| 182 | 20 |  |  |
| 182 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 2))) |
| 182 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 2))) |
| 182 | 26 |  | REGREGKEY.openGift3=0 |
| 182 | 27 |  | TARGETREGKEY.credits=TARGETREGKEY.credits+2500; REVREGREGKEY.aiNegativeDip = 100; |
| 183 | 10 |  |  |
| 183 | 13 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation + 10))) |
| 183 | 14 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation + 10))) |
| 183 | 17 |  | REGREGKEY.openOuverture=0 |
| 184 | 27 |  | REVREGREGKEY.aiNegativeDip = 50; |
| 184 | 26 |  | REGREGKEY.openOuverture=0 |
| 184 | 20 |  |  |
| 184 | 23 |  | REVREGREGKEY.relation = min(100,max(1,(REVREGREGKEY.relation - 2))) |
| 184 | 24 |  | REGREGKEY.relation = min(100,max(1,(REGREGKEY.relation - 2))) |
| 185 | 100 |  | DIFF=TARGETCULTUREKEY.alienAggression+120-TARGETCULTUREKEY.alienIQ |
| 185 | 101 |  | ROLL=dth(1,100)+(TEMP1*30) |
| 185 | 102 | ROLL>=DIFF |  |
| 185 | 103 | ROLL<DIFF |  |
| 185 | 104 | ROLL<DIFF | SOURCEZONEKEY.danger=min(100,SOURCEZONEKEY.danger+TEMP2); |
| 185 | 110 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 186 | 210 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,8) |
| 186 | 203 | ROLL>=DIFF | REVREGREGKEY.alienInsulted=REVREGREGKEY.alienInsulted+1; |
| 186 | 200 |  | DIFF=TARGETCULTUREKEY.alienSense+30; |
| 186 | 201 |  | ROLL=dth(1,100)+(REGREGKEY.relation/2) |
| 186 | 202 | ROLL<DIFF | REVREGREGKEY.alienInsulted=REVREGREGKEY.alienInsulted+1; REGREGKEY.relation=max(0,REGREGKEY.relation-10); REVREGREGKEY.relation=REGREGKEY.relation; |
| 187 | 100 |  | DIFF=TARGETCULTUREKEY.alienIQ; |
| 187 | 101 |  | ROLL=dth(1,100)+dth(1,100); |
| 187 | 102 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+2); REVREGREGKEY.relation=REGREGKEY.relation; |
| 187 | 103 | ROLL<=DIFF | REVREGREGKEY.language=REVREGREGKEY.language+1 |
| 187 | 104 | ROLL>DIFF |  |
| 187 | 110 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 188 | 210 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 188 | 206 | ROLL>=(100-alienComplexity) |  |
| 188 | 205 | ROLL<(100-alienComplexity) | REGREGKEY.language=REGREGKEY.language+1 |
| 188 | 204 | ROLL>DIFF |  |
| 188 | 202 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+5); REVREGREGKEY.relation=REGREGKEY.relation; |
| 188 | 200 |  | DIFF=TARGETCULTUREKEY.alienIQ; |
| 188 | 203 | ROLL<=DIFF | REVREGREGKEY.language=REVREGREGKEY.language+1 |
| 188 | 201 |  | ROLL=dth(1,100) |
| 189 | 310 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 189 | 304 | ROLL>DIFF |  |
| 189 | 306 | ROLL>=(100-alienComplexity) |  |
| 189 | 305 | ROLL<(100-alienComplexity) | REGREGKEY.language=REGREGKEY.language+1 |
| 189 | 303 | ROLL<=DIFF | REVREGREGKEY.language=REVREGREGKEY.language+1 |
| 189 | 301 |  | ROLL=dth(1,100)-30; |
| 189 | 300 |  | DIFF=TARGETCULTUREKEY.alienIQ; |
| 189 | 302 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+5); REVREGREGKEY.relation=REGREGKEY.relation; |
| 190 | 405 |  | REGKEY.morality=REGKEY.morality-10; |
| 190 | 404 | ROLL>DIFF |  |
| 190 | 403 | ROLL<=DIFF | REVREGREGKEY.alienInsulted=REVREGREGKEY.alienInsulted+1; REGREGKEY.relation=max(0,REGREGKEY.relation-6); REVREGREGKEY.relation=REGREGKEY.relation; |
| 190 | 410 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,3) |
| 190 | 401 |  | ROLL=dth(1,100) |
| 190 | 400 |  | DIFF=TARGETCULTUREKEY.sense |
| 190 | 402 |  | REGREGKEY.relation=max(0,REGREGKEY.relation-3); REVREGREGKEY.relation=REGREGKEY.relation; |
| 191 | 100 |  | DIFF=TARGETCULTUREKEY.alienIQ+20; |
| 191 | 101 |  | ROLL=dth(1,100) |
| 191 | 102 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+20); REVREGREGKEY.relation=REGREGKEY.relation; |
| 191 | 103 | ROLL<=DIFF | TARGETREGIMEKEY.alienTech=TARGETREGIMEKEY.alienTech+1; REVREGREGKEY.alienInsulted=max(0,REVREGREGKEY.alienInsulted-1); |
| 191 | 104 | ROLL>DIFF |  |
| 191 | 110 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,8) |
| 192 | 204 | ROLL>DIFF |  |
| 192 | 210 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,6) |
| 192 | 203 | ROLL<=DIFF | REVREGREGKEY.alienInsulted=REVREGREGKEY.alienInsulted+1; REGREGKEY.relation=max(0,REGREGKEY.relation-15); REVREGREGKEY.relation=REGREGKEY.relation; |
| 192 | 202 |  | REGREGKEY.relation=max(0,REGREGKEY.relation-6); REVREGREGKEY.relation=REGREGKEY.relation; |
| 192 | 201 |  | ROLL=dth(1,100) |
| 192 | 200 |  | DIFF=TARGETCULTUREKEY.alienSense |
| 193 | 102 |  | TEMP6=chk(249,41,SOURCEZONEID); REGREGKEY.relation=min(100,REGREGKEY.relation+7); REVREGREGKEY.relation=REGREGKEY.relation; TARGETREGIMEKEY.alienMercsRound=ROUND+(TEMP2*3)+(TEMP3*6); TARGETREGIMEKEY.regimeCredits=TARGETREGIMEKEY.regimeCredits+TEMP4; |
| 193 | 103 | TEMP2>=1 | TEMP7=TARGETCULTURE-100; exe(346,44,TEMP6,REGIMEID,TEMP7,TARGETCULTUREID); |
| 193 | 104 | TEMP2>=2 | TEMP7=TARGETCULTURE-100; exe(346,44,TEMP6,REGIMEID,TEMP7,TARGETCULTUREID); |
| 193 | 105 | TEMP2>=3 | TEMP7=TARGETCULTURE-100; exe(346,44,TEMP6,REGIMEID,TEMP7,TARGETCULTUREID); |
| 193 | 106 | TEMP3>=1 | TEMP7=TARGETCULTURE-90; exe(346,44,TEMP6,REGIMEID,TEMP7,TARGETCULTUREID); |
| 193 | 107 | TEMP3>=2 | TEMP7=TARGETCULTURE-90; exe(346,44,TEMP6,REGIMEID,TEMP7,TARGETCULTUREID); |
| 193 | 110 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 194 | 200 |  | DIFF=TARGETCULTUREKEY.alienSense |
| 194 | 201 |  | ROLL=dth(1,100) |
| 194 | 202 |  | REGREGKEY.relation=max(0,REGREGKEY.relation-3); REVREGREGKEY.relation=REGREGKEY.relation; |
| 194 | 203 | ROLL<=DIFF | REVREGREGKEY.alienInsulted=REVREGREGKEY.alienInsulted+1; REGREGKEY.relation=max(0,REGREGKEY.relation-10); REVREGREGKEY.relation=REGREGKEY.relation; |
| 194 | 204 | ROLL>DIFF |  |
| 194 | 210 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 195 | 104 |  | REGKEY.morality=REGKEY.morality+15; |
| 195 | 110 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,6) |
| 195 | 102 |  | exe(346,35,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 195 | 103 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+15); REVREGREGKEY.relation=REGREGKEY.relation; REVREGREGKEY.alienInsulted=max(0,REVREGREGKEY.alienInsulted-1); |
| 196 | 200 |  | DIFF=TARGETCULTUREKEY.alienSense |
| 196 | 201 |  | ROLL=dth(1,100) |
| 196 | 202 |  | REGREGKEY.relation=max(0,REGREGKEY.relation-4); REVREGREGKEY.relation=REGREGKEY.relation; |
| 196 | 203 | ROLL<=DIFF | REVREGREGKEY.alienInsulted=REVREGREGKEY.alienInsulted+1; REGREGKEY.relation=max(0,REGREGKEY.relation-15); REVREGREGKEY.relation=REGREGKEY.relation; |
| 196 | 204 | ROLL>DIFF |  |
| 196 | 205 |  | REGKEY.morality=REGKEY.morality-10; |
| 196 | 210 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,7) |
| 197 | 110 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 197 | 102 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+dth(2,10)); REVREGREGKEY.relation=REGREGKEY.relation; REVREGREGKEY.alienInsulted=max(0,REVREGREGKEY.alienInsulted-1); TARGETREGIMEKEY.regimeCredits=TARGETREGIMEKEY.regimeCredits+TEMP4; |
| 198 | 200 |  | DIFF=TARGETCULTUREKEY.alienSense+TARGETCULTUREKEY.alienAggression |
| 198 | 201 |  | ROLL=dth(1,150) |
| 198 | 202 |  | REGREGKEY.relation=max(0,REGREGKEY.relation-3); REVREGREGKEY.relation=REGREGKEY.relation; REVREGREGKEY.alienInsulted=REVREGREGKEY.alienInsulted+1; |
| 198 | 203 | ROLL<=DIFF | REGREGKEY.relation=max(0,REGREGKEY.relation-10); REVREGREGKEY.relation=REGREGKEY.relation;  exe(346,2,TARGETREGIMESLOT,SOURCEREGIMESLOT) |
| 198 | 204 | ROLL>DIFF |  |
| 198 | 210 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 199 | 106 | ROLL>TARGETCULTUREKEY.alienIQ |  |
| 199 | 105 | ROLL<=TARGETCULTUREKEY.alienIQ | REVREGREGKEY.language=REVREGREGKEY.language+1 |
| 199 | 104 | ROLL>=DIFF |  |
| 199 | 110 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,3) |
| 199 | 102 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+5); REVREGREGKEY.relation=REGREGKEY.relation; |
| 199 | 101 |  | ROLL=dth(1,100) |
| 199 | 100 |  | DIFF=100-TARGETCULTUREKEY.alienComplexity |
| 199 | 103 | ROLL<=DIFF | REGREGKEY.language=REGREGKEY.language+1 |
| 200 | 204 | ROLL>DIFF |  |
| 200 | 203 | ROLL<=DIFF | TARGETREGIMEKEY.alienTech=TARGETREGIMEKEY.alienTech+1; REVREGREGKEY.alienInsulted=max(0,REVREGREGKEY.alienInsulted-1); |
| 200 | 210 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,4) |
| 200 | 201 |  | ROLL=dth(1,100)+(REVREGREGKEY.language*20) |
| 200 | 200 |  | DIFF=TARGETCULTUREKEY.alienIQ+20; |
| 200 | 202 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+10); REVREGREGKEY.relation=REGREGKEY.relation; |
| 201 | 302 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+dth(3,6)); REVREGREGKEY.relation=REGREGKEY.relation; REVREGREGKEY.alienInsulted=max(0,REVREGREGKEY.alienInsulted-1); TARGETREGIMEKEY.regimeCredits=TARGETREGIMEKEY.regimeCredits+TEMP4; |
| 201 | 310 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,3) |
| 202 | 400 |  | DIFF=(REGREGKEY.relation*2)-TARGETCULTUREKEY.alienaggression |
| 202 | 401 |  | ROLL=dth(1,100) |
| 202 | 402 |  | TEMP8=chk(249,33,REGIMEID,0);TEMP6=chk(249,34,TEMP8); REGREGKEY.relation=max(0,REGREGKEY.relation-dth(2,10)); REVREGREGKEY.relation=REGREGKEY.relation; TARGETREGIMEKEY.alienMercsRound=ROUND+dth(2,10)+2; |
| 202 | 403 |  | TEMP7=TARGETCULTURE-100; exe(346,44,TEMP6,REGIMEID,TEMP7,TARGETCULTUREID); |
| 202 | 404 |  | TEMP7=TARGETCULTURE-90; exe(346,44,TEMP6,REGIMEID,TEMP7,TARGETCULTUREID); |
| 202 | 410 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,3) |
| 203 | 510 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,3) |
| 203 | 503 | ROLL>=DIFF | exe(346,47,SOURCEREGIMESLOT,TARGETREGIMESLOT) |
| 203 | 504 | ROLL<DIFF |  |
| 203 | 501 |  | ROLL=dth(1,120) + (REGREGKEY.language*10) + (REVREGREGKEY.language*7) |
| 203 | 500 |  | DIFF=100+dth(1,40)+TARGETCULTUREKEY.alienAggression+TARGETCULTUREKEY.alienSense-REGREGKEY.relation |
| 203 | 502 |  |  |
| 204 | 600 |  | DIFF=100+TARGETCULTUREKEY.alienAggression+TARGETCULTUREKEY.alienSense-REGREGKEY.relation |
| 204 | 601 |  | ROLL=dth(1,120) + (REGREGKEY.language*10) + (REVREGREGKEY.language*10)+dth(4,20) |
| 204 | 602 |  |  |
| 204 | 603 | ROLL>=DIFF | exe(346,47,SOURCEREGIMESLOT,TARGETREGIMESLOT) |
| 204 | 604 | ROLL<DIFF |  |
| 204 | 610 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 205 | 10 |  |  |
| 205 | 11 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,20) |
| 205 | 12 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 206 | 22 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,20) |
| 206 | 20 |  |  |
| 206 | 21 |  | REGKEY.enforcement = REGKEY.enforcement - (REGKEY.enforcement * 10/100) |
| 207 | 30 |  |  |
| 207 | 31 |  | REGKEY.enforcement = REGKEY.enforcement - (REGKEY.enforcement * 4/100) |
| 207 | 32 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 4/100) |
| 208 | 10 |  |  |
| 208 | 11 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,20) |
| 208 | 12 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 209 | 22 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 209 | 20 |  |  |
| 209 | 21 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 210 | 31 |  | REGKEY.commerce = REGKEY.commerce - (REGKEY.commerce * 4/100) |
| 210 | 32 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 4/100) |
| 210 | 30 |  |  |
| 211 | 10 |  |  |
| 211 | 11 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 10/100) |
| 211 | 12 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 212 | 20 |  |  |
| 212 | 21 |  | REGKEY.commerce = REGKEY.commerce - (REGKEY.commerce * 10/100) |
| 212 | 22 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,20) |
| 213 | 31 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 4/100) |
| 213 | 32 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,4) |
| 213 | 30 |  |  |
| 214 | 10 |  |  |
| 214 | 11 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,20) |
| 214 | 12 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 10/100) |
| 215 | 20 |  |  |
| 215 | 21 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,20) |
| 215 | 22 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 216 | 32 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 4/100) |
| 216 | 30 |  |  |
| 216 | 31 |  | REGKEY.enforcement = REGKEY.enforcement - (REGKEY.enforcement * 4/100) |
| 217 | 12 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 217 | 11 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,20) |
| 217 | 10 |  |  |
| 218 | 20 |  |  |
| 218 | 21 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 10/100) |
| 218 | 22 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,20) |
| 219 | 30 |  |  |
| 219 | 31 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 10/100) |
| 219 | 32 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 220 | 10 |  |  |
| 220 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,20) |
| 220 | 12 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 221 | 22 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 221 | 20 |  |  |
| 221 | 21 |  | REGKEY.autocracy = REGKEY.autocracy - (REGKEY.autocracy * 10/100) |
| 222 | 30 |  |  |
| 222 | 31 |  | REGKEY.autocracy = REGKEY.autocracy - (REGKEY.autocracy * 4/100) |
| 222 | 32 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 4/100) |
| 223 | 10 |  |  |
| 223 | 11 |  | REGKEY.commerce = REGKEY.commerce - (REGKEY.commerce * 10/100) |
| 223 | 12 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,20) |
| 224 | 22 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 224 | 21 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 224 | 20 |  |  |
| 225 | 30 |  |  |
| 225 | 31 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,4) |
| 225 | 32 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,4) |
| 226 | 10 |  |  |
| 226 | 11 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 10/100) |
| 226 | 12 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 226 | 101 |  | REGKEY.morality=REGKEY.morality-10; |
| 227 | 22 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 227 | 20 |  |  |
| 227 | 21 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,20) |
| 228 | 30 |  |  |
| 228 | 31 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 4/100) |
| 228 | 32 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 4/100) |
| 229 | 12 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,20) |
| 229 | 10 |  |  |
| 229 | 11 |  | REGKEY.enforcement = REGKEY.enforcement - (REGKEY.enforcement * 10/100) |
| 229 | 101 |  | REGKEY.morality=REGKEY.morality+10; |
| 230 | 22 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 230 | 20 |  |  |
| 230 | 21 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,20) |
| 231 | 30 |  |  |
| 231 | 31 |  | REGKEY.enforcement = REGKEY.enforcement - (REGKEY.enforcement * 4/100) |
| 231 | 32 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 4/100) |
| 232 | 10 |  |  |
| 232 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,20) |
| 232 | 12 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 232 | 101 |  | REGKEY.morality=REGKEY.morality-10; |
| 233 | 21 |  | REGKEY.autocracy = REGKEY.autocracy - (REGKEY.autocracy * 10/100) |
| 233 | 20 |  |  |
| 233 | 22 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,20) |
| 234 | 30 |  |  |
| 234 | 31 |  | REGKEY.autocracy = REGKEY.autocracy - (REGKEY.autocracy * 4/100) |
| 234 | 32 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 4/100) |
| 235 | 10 |  |  |
| 235 | 11 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,20) |
| 236 | 21 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,20) |
| 236 | 20 |  |  |
| 237 | 31 |  | REGKEY.meritocracy = REGKEY.meritocracy - (REGKEY.meritocracy * 4/100) |
| 237 | 32 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 4/100) |
| 237 | 30 |  |  |
| 238 | 11 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 238 | 12 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 238 | 10 |  |  |
| 239 | 20 |  |  |
| 239 | 21 |  | REGKEY.democracy = REGKEY.democracy - (REGKEY.democracy * 10/100) |
| 239 | 22 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 240 | 30 |  |  |
| 240 | 31 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,4) |
| 240 | 32 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,4) |
| 241 | 11 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 241 | 12 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 241 | 10 |  |  |
| 242 | 20 |  |  |
| 242 | 21 |  | REGKEY.commerce = REGKEY.commerce - (REGKEY.commerce * 10/100) |
| 242 | 22 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,20) |
| 243 | 30 |  |  |
| 243 | 31 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 243 | 32 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 5/100) |
| 244 | 12 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 244 | 10 |  |  |
| 244 | 11 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,20) |
| 245 | 22 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,20) |
| 245 | 20 |  |  |
| 245 | 21 |  | REGKEY.mind = REGKEY.mind - (REGKEY.mind * 10/100) |
| 246 | 30 |  |  |
| 246 | 31 |  | REGKEY.mind = REGKEY.mind - (REGKEY.mind * 4/100) |
| 246 | 32 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 4/100) |
| 247 | 10 |  |  |
| 247 | 11 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,20) |
| 247 | 12 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 248 | 22 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,20) |
| 248 | 20 |  |  |
| 248 | 21 |  | REGKEY.fist = REGKEY.fist - (REGKEY.fist * 10/100) |
| 249 | 30 |  |  |
| 249 | 31 |  | REGKEY.fist = REGKEY.fist - (REGKEY.fist * 4/100) |
| 249 | 32 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 4/100) |
| 250 | 12 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 250 | 101 |  | CHARREL=CHARREL+inv(CHARREL,20,100); REGKEY.morality=REGKEY.morality-10; |
| 250 | 10 |  |  |
| 250 | 11 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 251 | 201 |  | REGKEY.morality=REGKEY.morality+5; |
| 251 | 22 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 251 | 20 |  |  |
| 251 | 21 |  | REGKEY.enforcement = REGKEY.enforcement - (REGKEY.enforcement * 5/100) |
| 252 | 301 |  | CHARREL=CHARREL*80 /100; REGKEY.morality=REGKEY.morality+10; |
| 252 | 31 |  | REGKEY.enforcement = REGKEY.enforcement - (REGKEY.enforcement * 5/100) |
| 252 | 30 |  |  |
| 252 | 32 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 253 | 10 |  |  |
| 253 | 11 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 253 | 12 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 253 | 101 |  | CHARREL=CHARREL+inv(CHARREL,20,100); REGKEY.morality=REGKEY.morality+5; |
| 254 | 21 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 5/100) |
| 254 | 22 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 254 | 20 |  |  |
| 255 | 30 |  |  |
| 255 | 31 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 5/100) |
| 255 | 32 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 255 | 301 |  | CHARREL=CHARREL*80 /100; |
| 256 | 12 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 256 | 101 |  | CHARREL=CHARREL+inv(CHARREL,20,100); |
| 256 | 11 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 256 | 10 |  |  |
| 257 | 20 |  |  |
| 257 | 21 |  | REGKEY.commerce = REGKEY.commerce - (REGKEY.commerce * 5/100) |
| 257 | 22 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 258 | 30 |  |  |
| 258 | 31 |  | REGKEY.commerce = REGKEY.commerce - (REGKEY.commerce * 5/100) |
| 258 | 32 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 258 | 301 |  | CHARREL=CHARREL*80 /100; |
| 259 | 101 |  | CHARREL=CHARREL+inv(CHARREL,20,100); exe(346,20,CHARID,827); |
| 259 | 10 |  |  |
| 259 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 259 | 12 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 260 | 20 |  |  |
| 260 | 21 |  | REGKEY.autocracy = REGKEY.autocracy - (REGKEY.autocracy * 5/100) |
| 260 | 22 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 261 | 32 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 261 | 301 |  | CHARREL=CHARREL*80 /100; |
| 261 | 30 |  |  |
| 261 | 31 |  | REGKEY.autocracy = REGKEY.autocracy - (REGKEY.autocracy * 5/100) |
| 262 | 12 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 262 | 101 |  | CHARREL=CHARREL+inv(CHARREL,20,100); REGKEY.morality=REGKEY.morality-10; |
| 262 | 10 |  |  |
| 262 | 11 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 263 | 20 |  |  |
| 263 | 21 |  | REGKEY.democracy = REGKEY.democracy - (REGKEY.democracy * 5/100) |
| 263 | 22 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 263 | 201 |  | REGKEY.morality=REGKEY.morality+5; |
| 264 | 301 |  | CHARREL=CHARREL*80 /100; REGKEY.morality=REGKEY.morality+10; |
| 264 | 31 |  | REGKEY.democracy = REGKEY.democracy - (REGKEY.democracy * 5/100) |
| 264 | 30 |  |  |
| 264 | 32 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 265 | 10 |  |  |
| 265 | 11 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 265 | 12 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 265 | 101 |  | CHARREL=CHARREL+inv(CHARREL,20,100); REGKEY.morality=REGKEY.morality+5; |
| 266 | 20 |  |  |
| 266 | 21 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 5/100) |
| 266 | 22 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 267 | 301 |  | CHARREL=CHARREL*80 /100; |
| 267 | 32 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 267 | 31 |  | REGKEY.government = REGKEY.government - (REGKEY.government * 5/100) |
| 267 | 30 |  |  |
| 268 | 10 |  |  |
| 268 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 268 | 12 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 268 | 101 |  | CHARREL=CHARREL+inv(CHARREL,20,100); REGKEY.morality=REGKEY.morality-10; |
| 269 | 20 |  |  |
| 269 | 21 |  | REGKEY.autocracy = REGKEY.autocracy - (REGKEY.autocracy * 5/100) |
| 269 | 22 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 269 | 201 |  | REGKEY.morality=REGKEY.morality+5; |
| 270 | 301 |  | CHARREL=CHARREL*80 /100; REGKEY.morality=REGKEY.morality+10; |
| 270 | 30 |  |  |
| 270 | 31 |  | REGKEY.autocracy = REGKEY.autocracy - (REGKEY.autocracy * 5/100) |
| 270 | 32 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 271 | 10 |  |  |
| 271 | 11 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 271 | 12 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 271 | 101 |  | CHARREL=CHARREL+inv(CHARREL,20,100); |
| 272 | 20 |  |  |
| 272 | 21 |  | REGKEY.democracy = REGKEY.democracy - (REGKEY.democracy * 5/100) |
| 272 | 22 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 273 | 301 |  | CHARREL=CHARREL*80 /100; |
| 273 | 30 |  |  |
| 273 | 31 |  | REGKEY.democracy = REGKEY.democracy - (REGKEY.democracy * 5/100) |
| 273 | 32 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 274 | 12 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 274 | 10 |  |  |
| 274 | 11 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 274 | 101 |  | CHARREL=CHARREL+inv(CHARREL,20,100); |
| 275 | 22 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 275 | 21 |  | REGKEY.meritocracy = REGKEY.meritocracy - (REGKEY.meritocracy * 5/100) |
| 275 | 20 |  |  |
| 276 | 30 |  |  |
| 276 | 31 |  | REGKEY.meritocracy = REGKEY.meritocracy - (REGKEY.meritocracy * 5/100) |
| 276 | 32 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 276 | 301 |  | CHARREL=CHARREL*80 /100; |
| 277 | 100 |  |  |
| 277 | 101 |  | exe(346,6,TEMP1); |
| 277 | 103 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 278 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 278 | 201 |  | exe(346,24,ZONEID,16); |
| 278 | 200 |  |  |
| 279 | 100 |  |  |
| 279 | 101 |  | REGKEY.credits=REGKEY.credits+TEMP1; |
| 279 | 103 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 280 | 200 |  |  |
| 280 | 201 |  | exe(346,24,ZONEID,17); |
| 280 | 203 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 281 | 100 |  |  |
| 281 | 103 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 281 | 101 |  | exe(346,23,REGIMEID,TEMP1); |
| 282 | 203 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 282 | 200 |  |  |
| 282 | 201 |  | exe(346,24,ZONEID,18); |
| 283 | 100 |  |  |
| 283 | 101 |  | exe(346,19,REGIMEID,TEMP1); |
| 283 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 284 | 200 |  |  |
| 284 | 201 |  | exe(346,24,ZONEID,19); |
| 284 | 203 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 285 | 101 |  | ZONEKEY.pop=ZONEKEY.pop+TEMP1; REGKEY.morality=REGKEY.morality-15; |
| 285 | 100 |  |  |
| 285 | 103 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 286 | 200 |  |  |
| 286 | 201 |  | exe(346,24,ZONEID,20); REGKEY.morality=REGKEY.morality+20; |
| 286 | 203 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 287 | 101 |  | REGKEY.credits=REGKEY.credits+TEMP1; |
| 287 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 287 | 100 |  |  |
| 288 | 201 |  | exe(346,24,ZONEID,21); |
| 288 | 203 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 288 | 200 |  |  |
| 289 | 101 |  | exe(346,25,HISID,30,1); |
| 289 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 289 | 100 |  |  |
| 290 | 200 |  |  |
| 290 | 201 |  | exe(346,25,HISID,31,1); |
| 290 | 203 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 291 | 100 |  |  |
| 291 | 101 |  | exe(346,25,HISID,32,1); |
| 291 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 292 | 201 |  | exe(346,25,HISID,36,1); |
| 292 | 203 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,5) |
| 292 | 200 |  |  |
| 293 | 100 |  |  |
| 293 | 101 |  | exe(346,25,HISID,34,1); |
| 293 | 103 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 294 | 200 |  |  |
| 294 | 201 |  | exe(346,25,HISID,35,1); |
| 294 | 203 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,5) |
| 295 | 103 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 295 | 100 |  |  |
| 295 | 101 |  | exe(346,25,HISID,33,1); |
| 296 | 201 |  | exe(346,25,HISID,37,1); |
| 296 | 203 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,5) |
| 296 | 200 |  |  |
| 297 | 100 |  |  |
| 297 | 101 |  | exe(346,25,HISID,31,2); |
| 297 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 298 | 200 |  |  |
| 298 | 201 |  | exe(346,25,HISID,38,1); |
| 298 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 299 | 103 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,5) |
| 299 | 100 |  |  |
| 299 | 101 |  | exe(346,25,HISID,34,2); |
| 300 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 300 | 201 |  | exe(346,25,HISID,38,1); |
| 300 | 200 |  |  |
| 301 | 100 |  |  |
| 301 | 101 |  | exe(346,25,HISID,37,2); |
| 301 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 302 | 201 |  | exe(346,25,HISID,38,1); |
| 302 | 200 |  |  |
| 302 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 303 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 303 | 100 |  |  |
| 303 | 101 |  | exe(346,26,HISID,TEMP1); |
| 304 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 304 | 200 |  |  |
| 304 | 201 |  | exe(346,25,HISID,39,1); |
| 305 | 100 |  |  |
| 305 | 101 |  | exe(346,26,HISID,TEMP1); |
| 305 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 306 | 200 |  |  |
| 306 | 201 |  | exe(346,25,HISID,40,1); |
| 306 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 307 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 307 | 10 |  |  |
| 307 | 0 |  | exe(346,42,1,ZONEID,100) |
| 307 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 308 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 308 | 21 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 308 | 20 |  |  |
| 308 | 0 |  |  |
| 309 | 0 | RESULT==4 |  |
| 309 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 309 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; |
| 309 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 309 | 0 | RESULT==1 |  |
| 309 | 0 | TEMP8==0 |  |
| 309 | 0 | RESULT==3 |  |
| 309 | 0 |  | DIFF=200-(ZONEKEY.popHapiness+ZONEKEY.popLoyalty); |
| 309 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50; |
| 309 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; |
| 309 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=10; |
| 309 | 0 |  | ROLL=che(249,1,CHARID,6) |
| 309 | 31 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 309 | 30 |  |  |
| 309 | 0 | RESULT==2 |  |
| 310 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 310 | 0 |  |  |
| 310 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); |
| 310 | 40 |  |  |
| 311 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,10); |
| 311 | 0 |  |  |
| 311 | 11 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 311 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 312 | 0 | RESULT==4 |  |
| 312 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 312 | 0 | TEMP8==0 |  |
| 312 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 312 | 0 | RESULT==1 |  |
| 312 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=30; |
| 312 | 0 | RESULT==2 |  |
| 312 | 0 | ROLL<DIFF | RESULT=3; TEMP8=20; |
| 312 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; |
| 312 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=5; |
| 312 | 0 |  | DIFF=200-(ZONEKEY.popHapiness+ZONEKEY.popLoyalty); |
| 312 | 0 |  | ROLL=che(249,1,CHARID,9) |
| 312 | 21 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 312 | 0 | RESULT==3 |  |
| 313 | 0 | RESULT==1 |  |
| 313 | 0 | RESULT==4 |  |
| 313 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 313 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 313 | 0 | TEMP10>0 | TEMP10=TEMP10*100; |
| 313 | 0 | TEMP9>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP10; |
| 313 | 0 | TEMP9>0 | ZONEKEY.freefolk=ZONEKEY.freefolk+TEMP10; |
| 313 | 0 | RESULT==3 |  |
| 313 | 0 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9)/100; |
| 313 | 0 | RESULT==2 |  |
| 313 | 0 | TEMP8==0 |  |
| 313 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=dth(1,6); |
| 313 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=40; TEMP9=dth(2,6); |
| 313 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 313 | 11 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 313 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 313 | 0 |  | DIFF=dth(2,100); |
| 313 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=5; TEMP9=0; TEMP10=0; |
| 313 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; TEMP10=0; |
| 313 | 0 |  | ROLL=che(249,1,CHARID,19) |
| 314 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 314 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 314 | 0 | TEMP10>0 | TEMP10=TEMP10*100; |
| 314 | 0 | TEMP9>0 | ZONEKEY.freefolk=ZONEKEY.freefolk+TEMP10; |
| 314 | 0 | TEMP9>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP10; |
| 314 | 0 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9)/100; |
| 314 | 0 | TEMP8==0 |  |
| 314 | 0 | RESULT==4 |  |
| 314 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=40; TEMP9=dth(2,6); |
| 314 | 0 | RESULT==3 |  |
| 314 | 0 | RESULT==2 |  |
| 314 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=dth(1,6); |
| 314 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; TEMP10=0; |
| 314 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=5; TEMP9=0; TEMP10=0; |
| 314 | 0 |  | DIFF=150-(ZONEKEY.popHapiness+ZONEKEY.popLoyalty)+dth(6,20); |
| 314 | 0 |  | ROLL=che(249,1,CHARID,6) |
| 314 | 21 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 314 | 0 | RESULT==1 |  |
| 315 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 315 | 0 |  | TEMP10=TEMP10*100; |
| 315 | 0 |  |  |
| 315 | 0 |  | ZONEKEY.pop=ZONEKEY.pop-TEMP10; |
| 315 | 0 |  | TEMP10=(ZONEKEY.pop*dth(2,6))/100; |
| 315 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,10); |
| 315 | 0 |  | ZONEKEY.freefolk=ZONEKEY.freefolk+TEMP10; |
| 316 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 316 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 316 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 316 | 0 |  | exe(346,42,2,ZONEID,100) |
| 317 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 317 | 0 | TEMP9>0 |  |
| 317 | 0 | TEMP9>0 | TEMP5=REGKEY.credits/2; TEMP5=TEMP5/(1+REGKEY.size); TEMP6=ZONEKEY.pop*5; TEMP5=min(TEMP5,TEMP6); TEMP10=TEMP5*TEMP9; TEMP10=TEMP10/100; |
| 317 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 317 | 0 | RESULT==4 |  |
| 317 | 0 | RESULT==1 |  |
| 317 | 0 | RESULT==3 |  |
| 317 | 0 | TEMP8==0 |  |
| 317 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50;  TEMP9=40; |
| 317 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=20; |
| 317 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |
| 317 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=5; |
| 317 | 0 |  | DIFF=50+dth(2,100) |
| 317 | 0 |  | ROLL=che(249,1,CHARID,28) |
| 317 | 0 | RESULT==2 |  |
| 317 | 21 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 318 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 318 | 0 | TEMP10>0 |  |
| 318 | 0 |  | TEMP5=REGKEY.credits/2; TEMP5=TEMP5/(1+REGKEY.size); TEMP6=ZONEKEY.pop*5; TEMP5=min(TEMP5,TEMP6); TEMP10=TEMP5*10; TEMP10=TEMP10/100; |
| 318 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); |
| 318 | 0 |  |  |
| 319 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 319 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 319 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 319 | 0 |  | exe(346,42,3,ZONEID,100) |
| 320 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 320 | 0 | TEMP8==0 |  |
| 320 | 0 | RESULT==4 |  |
| 320 | 0 | TEMP9>0 | ZONEKEY.workerHapiness=(ZONEKEY.workerHapiness*(100-TEMP9)/100); |
| 320 | 0 | TEMP9>0 |  |
| 320 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 320 | 0 | RESULT==1 |  |
| 320 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=5; |
| 320 | 0 | RESULT==2 |  |
| 320 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50;  TEMP9=40; |
| 320 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=20; |
| 320 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |
| 320 | 0 |  | DIFF=50+dth(2,100) |
| 320 | 0 |  | ROLL=che(249,1,CHARID,19) |
| 320 | 0 | RESULT==3 |  |
| 320 | 21 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 321 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 321 | 0 | TEMP9>0 |  |
| 321 | 0 |  | TEMP9=10; |
| 321 | 0 | TEMP9>0 | ZONEKEY.workerHapiness=(ZONEKEY.workerHapiness*(100-TEMP9)/100); |
| 321 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); |
| 321 | 0 |  |  |
| 321 | 0 | TEMP9>0 |  |
| 322 | 0 |  | exe(346,42,4,ZONEID,100) |
| 322 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 322 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 322 | 10 |  |  |
| 322 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 323 | 20 |  |  |
| 323 | 21 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 323 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 323 | 0 |  |  |
| 324 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 324 | 0 | TEMP8==0 |  |
| 324 | 0 | RESULT==4 |  |
| 324 | 0 | RESULT==1 |  |
| 324 | 0 | RESULT==3 |  |
| 324 | 0 | RESULT==2 |  |
| 324 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 324 | 0 | ROLL<DIFF | RESULT=3; TEMP8=40; |
| 324 | 30 |  |  |
| 324 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=60; |
| 324 | 0 |  | ROLL=che(249,1,CHARID,6) |
| 324 | 31 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 324 | 0 |  | DIFF=225-(ZONEKEY.popHapiness+ZONEKEY.popLoyalty); |
| 324 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; |
| 324 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=10; |
| 325 | 0 |  |  |
| 325 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,30); |
| 325 | 40 |  |  |
| 325 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 326 | 0 |  | exe(346,42,5,ZONEID,100) |
| 326 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 326 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 327 | 0 | TEMP9>0 |  |
| 327 | 0 | TEMP9>0 | ZONEKEY.workerHapiness=(ZONEKEY.workerHapiness*(100-TEMP9)/100); |
| 327 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 327 | 0 | TEMP8==0 |  |
| 327 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 327 | 0 | RESULT==4 |  |
| 327 | 0 | RESULT==1 |  |
| 327 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=5; |
| 327 | 0 | RESULT==2 |  |
| 327 | 0 | RESULT==3 |  |
| 327 | 0 |  | ROLL=che(249,1,CHARID,28) |
| 327 | 0 |  | DIFF=50+dth(2,100) |
| 327 | 21 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 327 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=20; |
| 327 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50;  TEMP9=40; |
| 327 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |
| 328 | 0 |  |  |
| 328 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,30); |
| 328 | 0 |  | TEMP9=10; |
| 328 | 0 | TEMP9>0 | ZONEKEY.workerHapiness=(ZONEKEY.workerHapiness*(100-TEMP9)/100); |
| 328 | 0 | TEMP9>0 |  |
| 328 | 0 | TEMP9>0 |  |
| 328 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 329 | 0 |  | exe(346,42,6,ZONEID,100) |
| 329 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 329 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 329 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 330 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 330 | 0 | TEMP10>0 | ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP10; |
| 330 | 0 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9/100); ZONEKEY.pop=ZONEKEY.pop-TEMP10; |
| 330 | 0 | TEMP8==0 |  |
| 330 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 330 | 0 | RESULT==4 |  |
| 330 | 0 | RESULT==3 |  |
| 330 | 0 | RESULT==1 |  |
| 330 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50;  TEMP9=12; |
| 330 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=8; |
| 330 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |
| 330 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=2; |
| 330 | 0 |  | DIFF=50+dth(2,100) |
| 330 | 0 |  | ROLL=che(249,1,CHARID,28) |
| 330 | 21 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 330 | 0 | RESULT==2 |  |
| 331 | 0 |  |  |
| 331 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,30); |
| 331 | 0 |  | TEMP9=4; |
| 331 | 0 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9/100); ZONEKEY.pop=ZONEKEY.pop-TEMP10; |
| 331 | 0 | TEMP10>0 | ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP10; |
| 331 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 332 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 332 | 0 |  | exe(346,42,7,ZONEID,100) |
| 332 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 332 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 333 | 0 |  |  |
| 333 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,30); |
| 333 | 0 |  | TEMP9=8; |
| 333 | 0 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9/100); ZONEKEY.pop=ZONEKEY.pop-TEMP10; |
| 333 | 0 | TEMP10>0 | ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP10; |
| 333 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 334 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 334 | 0 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |
| 334 | 10 |  |  |
| 334 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 334 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 334 | 0 |  | exe(346,42,51,ZONEID,100) |
| 335 | 0 |  |  |
| 335 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 335 | 21 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 335 | 20 |  |  |
| 336 | 0 |  |  |
| 336 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); |
| 336 | 0 |  | TEMP9=dth(3,6)+5; |
| 336 | 0 | TEMP9>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP9; |
| 336 | 0 | TEMP9>0 |  |
| 336 | 30 |  |  |
| 336 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 337 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 337 | 10 |  |  |
| 337 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 337 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 337 | 0 |  | exe(346,42,52,ZONEID,100) |
| 338 | 0 |  |  |
| 338 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 338 | 21 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 338 | 20 |  |  |
| 339 | 30 |  |  |
| 339 | 0 | TEMP9>0 |  |
| 339 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 339 | 0 |  | TEMP9=dth(4,10)+40; |
| 339 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); |
| 339 | 0 |  |  |
| 339 | 0 | TEMP9>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP9; |
| 340 | 0 | TEMP10>0 | ZONEKEY.pop=ZONEKEY.pop+TEMP10; |
| 340 | 0 | RESULT==2 |  |
| 340 | 0 | TEMP9>0 | TEMP10=(ZONEKEY.worker*TEMP9/100); ZONEKEY.worker=ZONEKEY.worker-TEMP10; |
| 340 | 0 | TEMP8==0 |  |
| 340 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 340 | 0 | RESULT==4 |  |
| 340 | 0 | RESULT==1 |  |
| 340 | 0 | RESULT==3 |  |
| 340 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=40;  TEMP9=25; |
| 340 | 0 |  | DIFF=50+dth(2,100); TEMP10=0; |
| 340 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |
| 340 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=5; |
| 340 | 0 |  | ROLL=che(249,1,CHARID,19) |
| 340 | 11 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 340 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 340 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 340 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=15; |
| 341 | 21 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 341 | 20 |  |  |
| 341 | 0 |  |  |
| 341 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 342 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 342 | 0 | TEMP10>0 | ZONEKEY.pop=ZONEKEY.pop+TEMP10; |
| 342 | 0 | TEMP9>0 | TEMP10=(ZONEKEY.worker*TEMP9/100); ZONEKEY.worker=ZONEKEY.worker-TEMP10; |
| 342 | 0 |  | TEMP9=dth(3,6); |
| 342 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,15); |
| 342 | 0 |  |  |
| 342 | 30 |  |  |
| 343 | 0 | TEMP9>0 |  |
| 343 | 0 | TEMP9>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP9; |
| 343 | 0 | TEMP8==0 |  |
| 343 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 343 | 0 | RESULT==4 |  |
| 343 | 0 | RESULT==1 |  |
| 343 | 0 | RESULT==3 |  |
| 343 | 0 | RESULT==2 |  |
| 343 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=40;  TEMP9=80; |
| 343 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=60; |
| 343 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |
| 343 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=10; |
| 343 | 0 |  | DIFF=50+dth(2,100) |
| 343 | 0 |  | ROLL=che(249,1,CHARID,19) |
| 343 | 11 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 343 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 343 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 344 | 21 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 344 | 20 |  |  |
| 344 | 0 |  |  |
| 344 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 345 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 345 | 0 | TEMP9>0 |  |
| 345 | 0 |  |  |
| 345 | 0 |  | TEMP9=25+dth(5,6); |
| 345 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,25); |
| 345 | 30 |  |  |
| 345 | 0 | TEMP9>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP9; |
| 346 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 346 | 10 |  |  |
| 346 | 11 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,5) |
| 346 | 12 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 346 | 0 |  | exe(346,42,11,ZONEID,100) |
| 346 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 347 | 0 |  |  |
| 347 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 347 | 22 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 5/100) |
| 347 | 21 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,5) |
| 347 | 20 |  |  |
| 348 | 0 | TEMP8==0 |  |
| 348 | 0 | RESULT==3 |  |
| 348 | 0 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); |
| 348 | 0 | RESULT==4 |  |
| 348 | 0 | RESULT==1 |  |
| 348 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 348 | 0 | RESULT==2 |  |
| 348 | 30 |  |  |
| 348 | 0 | ROLL<DIFF | RESULT=3; TEMP8=30; |
| 348 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50; |
| 348 | 32 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 348 | 0 |  | ROLL=che(249,1,CHARID,6) |
| 348 | 31 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,5) |
| 348 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=10; |
| 348 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; |
| 348 | 0 |  | DIFF=100+(REGKEY.incomeTax*3)-((ZONEKEY.popHapiness+ZONEKEY.popLoyalty)/2); |
| 349 | 40 |  |  |
| 349 | 0 |  |  |
| 349 | 0 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); |
| 349 | 0 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |
| 350 | 0 | RESULT==3 |  |
| 350 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 350 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 350 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 350 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 350 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 350 | 0 | RESULT==1 |  |
| 350 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 350 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 350 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 350 | 0 | TEMP8==0 |  |
| 350 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 350 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 350 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 350 | 0 |  | TEMP5=1; TEMP8=10; |
| 350 | 0 | RESULT==4 |  |
| 350 | 0 |  | TEMP17=ROLL; |
| 350 | 0 | RESULT==2 |  |
| 350 | 0 |  | DIFF=dth(4,40) |
| 350 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 350 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 350 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 350 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 350 | 10 |  |  |
| 350 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 350 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 350 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 351 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 351 | 0 | TEMP8==0 |  |
| 351 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 351 | 20 |  |  |
| 351 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 351 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 351 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 351 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 351 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 351 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 351 | 0 |  | TEMP17=ROLL; |
| 351 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 351 | 0 | RESULT==4 |  |
| 351 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 351 | 0 |  | TEMP5=1; TEMP8=10; |
| 351 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 351 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 351 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 351 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 351 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 351 | 0 | RESULT==2 |  |
| 351 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 351 | 0 | RESULT==3 |  |
| 351 | 0 | RESULT==1 |  |
| 351 | 0 |  | DIFF=dth(4,40) |
| 351 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 352 | 0 | RESULT==1 |  |
| 352 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 352 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 352 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 352 | 0 | RESULT==2 |  |
| 352 | 0 | RESULT==3 |  |
| 352 | 0 | RESULT==4 |  |
| 352 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 352 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 352 | 0 | TEMP8==0 |  |
| 352 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 352 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 352 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 352 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 352 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 352 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 352 | 0 |  | TEMP5=2; TEMP8=20; |
| 352 | 0 |  | TEMP17=ROLL; |
| 352 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 352 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 352 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 352 | 0 |  | DIFF=30+dth(4,40) |
| 352 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 352 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 352 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 352 | 10 |  |  |
| 352 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 353 | 20 |  |  |
| 353 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 353 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 353 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 353 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 353 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 353 | 0 | TEMP8==0 |  |
| 353 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 353 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 353 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 353 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 353 | 0 |  | TEMP17=ROLL; |
| 353 | 0 | RESULT==4 |  |
| 353 | 0 |  | DIFF=30+dth(4,40) |
| 353 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 353 | 0 |  | TEMP5=2; TEMP8=20; |
| 353 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 353 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 353 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 353 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 353 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 353 | 0 | RESULT==2 |  |
| 353 | 0 | RESULT==3 |  |
| 353 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 353 | 0 | RESULT==1 |  |
| 353 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 354 | 0 | RESULT==1 |  |
| 354 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 354 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 354 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 354 | 0 | RESULT==2 |  |
| 354 | 0 | RESULT==3 |  |
| 354 | 0 | RESULT==4 |  |
| 354 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 354 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 354 | 0 | TEMP8==0 |  |
| 354 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 354 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 354 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 354 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 354 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 354 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 354 | 0 |  | TEMP5=4; TEMP8=40; |
| 354 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 354 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 354 | 0 |  | TEMP17=ROLL; |
| 354 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 354 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 354 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 354 | 10 |  |  |
| 354 | 0 |  | DIFF=30+dth(4,40) |
| 354 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 354 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 355 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 355 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 355 | 0 | TEMP8==0 |  |
| 355 | 0 |  | TEMP17=ROLL; |
| 355 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 355 | 20 |  |  |
| 355 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 355 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 355 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 355 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 355 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 355 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 355 | 0 | RESULT==4 |  |
| 355 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 355 | 0 |  | DIFF=30+dth(4,40) |
| 355 | 0 |  | TEMP5=4; TEMP8=40; |
| 355 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 355 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 355 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 355 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 355 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 355 | 0 | RESULT==2 |  |
| 355 | 0 | RESULT==3 |  |
| 355 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 355 | 0 | RESULT==1 |  |
| 355 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 356 | 0 |  | TEMP5=1;TEMP8=10; |
| 356 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 356 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 356 | 0 | TEMP2>0 | ZONEKEY.privateFood=ZONEKEY.privateFood-TEMP8; |
| 356 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 356 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 356 | 0 |  | TEMP8=ZONEKEY.privateFood/3; TEMP14=ZONEKEY.privateMetal/2; TEMP4=ZONEKEY.popCredits/3; TEMP7=ZONEKEY.privateOil/2; |
| 356 | 0 | RESULT==2 |  |
| 356 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 356 | 0 | RESULT==3 |  |
| 356 | 0 | RESULT==1 |  |
| 356 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 356 | 0 | RESULT==4 |  |
| 356 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 356 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 356 | 0 | TEMP3>0 | ZONEKEY.privateMetal=ZONEKEY.privateMetal-TEMP14; |
| 356 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 356 | 0 |  | TEMP17=ROLL; |
| 356 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 356 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 356 | 10 |  |  |
| 356 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 356 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 356 | 0 |  | DIFF=30+dth(4,40) |
| 356 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 356 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 356 | 0 | TEMP5>0 | ZONEKEY.privateOil=ZONEKEY.privateOil-TEMP7; |
| 356 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 356 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 356 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 356 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 356 | 0 | TEMP4>0 | ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP4; |
| 356 | 0 | TEMP8==0 |  |
| 357 | 0 | TEMP5>0 | ZONEKEY.privateOil=ZONEKEY.privateOil-TEMP7; |
| 357 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 357 | 0 | TEMP3>0 | ZONEKEY.privateMetal=ZONEKEY.privateMetal-TEMP14; |
| 357 | 0 | TEMP4>0 | ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP4; |
| 357 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 357 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 357 | 0 | TEMP2>0 | ZONEKEY.privateFood=ZONEKEY.privateFood-TEMP8; |
| 357 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 357 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 357 | 0 | TEMP8==0 |  |
| 357 | 0 |  | TEMP8=ZONEKEY.privateFood/3; TEMP14=ZONEKEY.privateMetal/2; TEMP4=ZONEKEY.popCredits/3; TEMP7=ZONEKEY.privateOil/2; |
| 357 | 20 |  |  |
| 357 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 357 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 357 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 357 | 0 |  | DIFF=30+dth(4,40) |
| 357 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 357 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 357 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 357 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 357 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 357 | 0 |  | TEMP17=ROLL; |
| 357 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 357 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 357 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 357 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 357 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 357 | 0 | RESULT==2 |  |
| 357 | 0 | RESULT==3 |  |
| 357 | 0 | RESULT==1 |  |
| 357 | 0 | RESULT==4 |  |
| 357 | 0 |  | TEMP5=1;TEMP8=10; |
| 358 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 358 | 0 |  | TEMP17=ROLL; |
| 358 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 358 | 0 |  | TEMP5=2;TEMP8=20; |
| 358 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 358 | 0 | TEMP8==0 |  |
| 358 | 0 | RESULT==2 |  |
| 358 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 358 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 358 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 358 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 358 | 0 | RESULT==3 |  |
| 358 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 358 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 358 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 358 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 358 | 0 | RESULT==4 |  |
| 358 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 358 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 358 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 358 | 10 |  |  |
| 358 | 0 | RESULT==1 |  |
| 358 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 358 | 0 |  | DIFF=60+dth(4,40) |
| 358 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 358 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 358 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 358 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 359 | 0 | RESULT==4 |  |
| 359 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 359 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 359 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 359 | 0 | TEMP8==0 |  |
| 359 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 359 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 359 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 359 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 359 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 359 | 0 | RESULT==3 |  |
| 359 | 0 | RESULT==1 |  |
| 359 | 20 |  |  |
| 359 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 359 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 359 | 0 |  | DIFF=60+dth(4,40) |
| 359 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 359 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 359 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 359 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 359 | 0 |  | TEMP17=ROLL; |
| 359 | 0 |  | TEMP5=2;TEMP8=20; |
| 359 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 359 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 359 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 359 | 0 | RESULT==2 |  |
| 359 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 360 | 0 | RESULT==1 |  |
| 360 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 360 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 360 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 360 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 360 | 0 | RESULT==2 |  |
| 360 | 0 | RESULT==3 |  |
| 360 | 0 | RESULT==4 |  |
| 360 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 360 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 360 | 0 | TEMP8==0 |  |
| 360 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 360 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 360 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 360 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 360 | 0 |  | TEMP5=4; TEMP8=40; |
| 360 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 360 | 0 |  | TEMP17=ROLL; |
| 360 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 360 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 360 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 360 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 360 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 360 | 0 |  | DIFF=90+dth(4,40) |
| 360 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 360 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 360 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 360 | 10 |  |  |
| 361 | 20 |  |  |
| 361 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 361 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 361 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 361 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 361 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 361 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 361 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 361 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 361 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 361 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 361 | 0 | TEMP8==0 |  |
| 361 | 0 | RESULT==4 |  |
| 361 | 0 |  | TEMP17=ROLL; |
| 361 | 0 |  | DIFF=90+dth(4,40) |
| 361 | 0 |  | TEMP5=4; TEMP8=40; |
| 361 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 361 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 361 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 361 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 361 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 361 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 361 | 0 | RESULT==2 |  |
| 361 | 0 | RESULT==3 |  |
| 361 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 361 | 0 | RESULT==1 |  |
| 361 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 362 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 362 | 0 |  | TEMP17=ROLL; |
| 362 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 362 | 0 |  | TEMP5=1;TEMP8=10; |
| 362 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 362 | 0 | TEMP8==0 |  |
| 362 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 362 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 362 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 362 | 0 | RESULT==2 |  |
| 362 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 362 | 0 | RESULT==3 |  |
| 362 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 362 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 362 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 362 | 10 |  |  |
| 362 | 0 | RESULT==4 |  |
| 362 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 362 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 362 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 362 | 0 | RESULT==1 |  |
| 362 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 362 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 362 | 0 |  | DIFF=30+dth(4,40) |
| 362 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 362 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 362 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 362 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 363 | 0 | RESULT==4 |  |
| 363 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 363 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 363 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 363 | 0 | TEMP8==0 |  |
| 363 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 363 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 363 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 363 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 363 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 363 | 0 | RESULT==3 |  |
| 363 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 363 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 363 | 0 |  | DIFF=30+dth(4,40) |
| 363 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 363 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 363 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 363 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 363 | 20 |  |  |
| 363 | 0 |  | TEMP17=ROLL; |
| 363 | 0 |  | TEMP5=1;TEMP8=10; |
| 363 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 363 | 0 | RESULT==1 |  |
| 363 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 363 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 363 | 0 | RESULT==2 |  |
| 363 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 364 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 364 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 364 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 364 | 0 | RESULT==2 |  |
| 364 | 0 | RESULT==3 |  |
| 364 | 0 | RESULT==1 |  |
| 364 | 0 | RESULT==4 |  |
| 364 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 364 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 364 | 0 | TEMP8==0 |  |
| 364 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 364 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 364 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 364 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 364 | 0 |  | TEMP5=1;TEMP8=20; |
| 364 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 364 | 0 |  | TEMP17=ROLL; |
| 364 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 364 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 364 | 0 |  | DIFF=60+dth(4,40) |
| 364 | 10 |  |  |
| 364 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 364 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 364 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 364 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 364 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 364 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 364 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 365 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 365 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 365 | 0 | TEMP8==0 |  |
| 365 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 365 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 365 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 365 | 20 |  |  |
| 365 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 365 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 365 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 365 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 365 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 365 | 0 | RESULT==4 |  |
| 365 | 0 |  | DIFF=60+dth(4,40) |
| 365 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 365 | 0 |  | TEMP17=ROLL; |
| 365 | 0 |  | TEMP5=1;TEMP8=20; |
| 365 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 365 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 365 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 365 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 365 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 365 | 0 | RESULT==2 |  |
| 365 | 0 | RESULT==3 |  |
| 365 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 365 | 0 | RESULT==1 |  |
| 365 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 366 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 366 | 0 | RESULT==1 |  |
| 366 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 366 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 366 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 366 | 0 | RESULT==2 |  |
| 366 | 0 | RESULT==3 |  |
| 366 | 0 | RESULT==4 |  |
| 366 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 366 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 366 | 0 | TEMP8==0 |  |
| 366 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 366 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 366 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 366 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 366 | 0 |  | TEMP5=5; TEMP8=40; |
| 366 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 366 | 0 |  | TEMP17=ROLL; |
| 366 | 10 |  |  |
| 366 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 366 | 0 |  | DIFF=90+dth(4,40) |
| 366 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 366 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 366 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 366 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 366 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 366 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 366 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 367 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 367 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 367 | 0 | TEMP8==0 |  |
| 367 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 367 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 367 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 367 | 20 |  |  |
| 367 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 367 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 367 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 367 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 367 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 367 | 0 | RESULT==4 |  |
| 367 | 0 |  | DIFF=90+dth(4,40) |
| 367 | 0 |  | TEMP17=ROLL; |
| 367 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 367 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 367 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 367 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 367 | 0 |  | TEMP5=5; TEMP8=40; |
| 367 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 367 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 367 | 0 | RESULT==2 |  |
| 367 | 0 | RESULT==3 |  |
| 367 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 367 | 0 | RESULT==1 |  |
| 367 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 368 | 0 | RESULT==1 |  |
| 368 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 368 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 368 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 368 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 368 | 0 | RESULT==2 |  |
| 368 | 0 | RESULT==3 |  |
| 368 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 368 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 368 | 0 | TEMP8==0 |  |
| 368 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 368 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 368 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 368 | 0 |  | TEMP21=dth(5,6); |
| 368 | 0 | TEMP2>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP21; |
| 368 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 368 | 0 |  | TEMP5=1;TEMP8=10; |
| 368 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 368 | 0 |  | TEMP17=ROLL; |
| 368 | 0 | RESULT==4 |  |
| 368 | 10 |  |  |
| 368 | 0 |  | DIFF=dth(4,40) |
| 368 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 368 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 368 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 368 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 368 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 368 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 368 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 368 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 369 | 0 |  | TEMP21=dth(5,6); |
| 369 | 0 |  | DIFF=dth(4,40) |
| 369 | 20 |  |  |
| 369 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 369 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 369 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 369 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 369 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 369 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 369 | 0 | TEMP8==0 |  |
| 369 | 0 | TEMP2>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP21; |
| 369 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 369 | 0 |  | TEMP17=ROLL; |
| 369 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 369 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 369 | 0 |  | TEMP5=1;TEMP8=10; |
| 369 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 369 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 369 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 369 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 369 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 369 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 369 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 369 | 0 | RESULT==3 |  |
| 369 | 0 | RESULT==1 |  |
| 369 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 369 | 0 | RESULT==4 |  |
| 369 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 369 | 0 | RESULT==2 |  |
| 370 | 0 | TEMP8==0 |  |
| 370 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 370 | 0 |  | TEMP17=ROLL; |
| 370 | 0 |  | TEMP5=1;TEMP8=20; |
| 370 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 370 | 0 | RESULT==3 |  |
| 370 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 370 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 370 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 370 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 370 | 0 | RESULT==2 |  |
| 370 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 370 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 370 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 370 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 370 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 370 | 0 | RESULT==4 |  |
| 370 | 10 |  |  |
| 370 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 370 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 370 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 370 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 370 | 0 |  | DIFF=30+dth(4,40) |
| 370 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 370 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 370 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 370 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 370 | 0 | RESULT==1 |  |
| 371 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 371 | 0 | TEMP8==0 |  |
| 371 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 371 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 371 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 371 | 0 | RESULT==4 |  |
| 371 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 371 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 371 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 371 | 0 | RESULT==3 |  |
| 371 | 20 |  |  |
| 371 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 371 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 371 | 0 |  | DIFF=30+dth(4,40) |
| 371 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 371 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 371 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 371 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 371 | 0 |  | TEMP17=ROLL; |
| 371 | 0 |  | TEMP5=1;TEMP8=20; |
| 371 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 371 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 371 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 371 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 371 | 0 | RESULT==2 |  |
| 371 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 371 | 0 | RESULT==1 |  |
| 372 | 0 | RESULT==1 |  |
| 372 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 372 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 372 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 372 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 372 | 0 | RESULT==2 |  |
| 372 | 0 | RESULT==3 |  |
| 372 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 372 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 372 | 0 | TEMP8==0 |  |
| 372 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 372 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 372 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 372 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 372 | 0 |  | TEMP5=5; TEMP8=40; |
| 372 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 372 | 0 |  | TEMP17=ROLL; |
| 372 | 0 | RESULT==4 |  |
| 372 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 372 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 372 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 372 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 372 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 372 | 10 |  |  |
| 372 | 0 |  | DIFF=60+dth(4,40) |
| 372 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 372 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 372 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 373 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 373 | 20 |  |  |
| 373 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 373 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 373 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 373 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 373 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 373 | 0 | TEMP8==0 |  |
| 373 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 373 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 373 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 373 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 373 | 0 |  | DIFF=60+dth(4,40) |
| 373 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 373 | 0 | RESULT==4 |  |
| 373 | 0 |  | TEMP5=5; TEMP8=40; |
| 373 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 373 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 373 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 373 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 373 | 0 |  | TEMP17=ROLL; |
| 373 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 373 | 0 | RESULT==2 |  |
| 373 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 373 | 0 | RESULT==3 |  |
| 373 | 0 | RESULT==1 |  |
| 373 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 374 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 374 | 0 |  | TEMP17=ROLL; |
| 374 | 0 |  | TEMP5=3; TEMP8=10; |
| 374 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 374 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 374 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 374 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 374 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 374 | 0 | RESULT==2 |  |
| 374 | 0 | TEMP8==0 |  |
| 374 | 0 | RESULT==3 |  |
| 374 | 0 | RESULT==1 |  |
| 374 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 374 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 374 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 374 | 10 |  |  |
| 374 | 0 | RESULT==4 |  |
| 374 | 0 | ROLL>=DIFF | TEMP21=dth(1,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 374 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 374 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 374 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 374 | 0 | ROLL<DIFF | TEMP21=dth(4,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 374 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 374 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 374 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 374 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 374 | 0 |  | DIFF=60+dth(4,40) |
| 374 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 374 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 375 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 375 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 375 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 375 | 0 | ROLL<DIFF | TEMP21=dth(4,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 375 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 375 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 375 | 0 | ROLL>=DIFF | TEMP21=dth(1,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 375 | 0 | TEMP8==0 |  |
| 375 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 375 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 375 | 0 | RESULT==1 |  |
| 375 | 0 | RESULT==4 |  |
| 375 | 20 |  |  |
| 375 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 375 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 375 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 375 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 375 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 375 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 375 | 0 |  | DIFF=60+dth(4,40) |
| 375 | 0 |  | TEMP17=ROLL; |
| 375 | 0 |  | TEMP5=3; TEMP8=10; |
| 375 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 375 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 375 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 375 | 0 | RESULT==2 |  |
| 375 | 0 | RESULT==3 |  |
| 375 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 376 | 0 | RESULT==2 |  |
| 376 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 376 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 376 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 376 | 0 |  | TEMP5=1; TEMP8=10; |
| 376 | 0 |  | TEMP17=ROLL; |
| 376 | 0 | RESULT==3 |  |
| 376 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 376 | 0 | RESULT==1 |  |
| 376 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 376 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 376 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 376 | 0 | TEMP8==0 |  |
| 376 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 376 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 376 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 376 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 376 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 376 | 0 | RESULT==4 |  |
| 376 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 376 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 376 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 376 | 0 |  | TEMP20=che(249,1,CHARID,22,1); TEMP6=che(249,1,CHARID,41,1); |
| 376 | 0 | TEMP6>0 | ROLL=ROLL+TEMP6 |
| 376 | 0 |  | DIFF=dth(4,40) |
| 376 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 376 | 0 |  | DIFF=DIFF+10 |
| 376 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 376 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 376 | 10 |  |  |
| 376 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 377 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 377 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 377 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 377 | 0 |  | TEMP20=che(249,1,CHARID,22,1); TEMP6=che(249,1,CHARID,41,1); |
| 377 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 377 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 377 | 0 | TEMP8==0 |  |
| 377 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 377 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 377 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 377 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 377 | 20 |  |  |
| 377 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 377 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 377 | 0 | RESULT==1 |  |
| 377 | 0 | RESULT==4 |  |
| 377 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 377 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 377 | 0 |  | TEMP17=ROLL; |
| 377 | 0 |  | TEMP5=1; TEMP8=10; |
| 377 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 377 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 377 | 0 |  | DIFF=DIFF+10 |
| 377 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 377 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 377 | 0 | TEMP6>0 | ROLL=ROLL+TEMP6 |
| 377 | 0 | RESULT==2 |  |
| 377 | 0 | RESULT==3 |  |
| 377 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 377 | 0 |  | DIFF=dth(4,40) |
| 378 | 0 |  | TEMP17=ROLL; |
| 378 | 0 | RESULT==2 |  |
| 378 | 0 |  | TEMP5=1; TEMP8=10; |
| 378 | 0 |  | TEMP5=TEMP5*2 |
| 378 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 378 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 378 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 378 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 378 | 0 | RESULT==3 |  |
| 378 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 378 | 0 | RESULT==4 |  |
| 378 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 378 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 378 | 0 | TEMP8==0 |  |
| 378 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 378 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 378 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 378 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 378 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 378 | 0 | RESULT==1 |  |
| 378 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 378 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 378 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 378 | 0 | TEMP6>0 | ROLL=ROLL+TEMP6 |
| 378 | 0 |  | TEMP20=che(249,1,CHARID,22,1); TEMP6=che(249,1,CHARID,41,1); |
| 378 | 0 |  | DIFF=dth(4,40) |
| 378 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 378 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 378 | 0 |  | DIFF=DIFF+20 |
| 378 | 10 |  |  |
| 378 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 378 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 379 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 379 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 379 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 379 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 379 | 0 | RESULT==4 |  |
| 379 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 379 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 379 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 379 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 379 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 379 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 379 | 0 |  | TEMP20=che(249,1,CHARID,22,1); TEMP6=che(249,1,CHARID,41,1); |
| 379 | 20 |  |  |
| 379 | 0 | TEMP8==0 |  |
| 379 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 379 | 0 | RESULT==1 |  |
| 379 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 379 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 379 | 0 |  | TEMP17=ROLL; |
| 379 | 0 |  | TEMP5=1; TEMP8=10; |
| 379 | 0 |  | TEMP5=TEMP5*2 |
| 379 | 0 |  | DIFF=DIFF+20 |
| 379 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 379 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 379 | 0 |  | DIFF=dth(4,40) |
| 379 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 379 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 379 | 0 | TEMP6>0 | ROLL=ROLL+TEMP6 |
| 379 | 0 | RESULT==2 |  |
| 379 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 379 | 0 | RESULT==3 |  |
| 380 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 380 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 380 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 380 | 0 |  | TEMP5=1; TEMP8=10; |
| 380 | 0 |  | TEMP5=TEMP5*4 |
| 380 | 0 |  | TEMP17=ROLL; |
| 380 | 0 | RESULT==2 |  |
| 380 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 380 | 0 | RESULT==3 |  |
| 380 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 380 | 0 | RESULT==4 |  |
| 380 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 380 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 380 | 0 | TEMP8==0 |  |
| 380 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 380 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 380 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 380 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 380 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 380 | 0 | RESULT==1 |  |
| 380 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 380 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 380 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 380 | 0 | TEMP6>0 | ROLL=ROLL+TEMP6 |
| 380 | 0 |  | TEMP20=che(249,1,CHARID,22,1); TEMP6=che(249,1,CHARID,41,1); |
| 380 | 0 |  | DIFF=dth(4,40) |
| 380 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 380 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 380 | 0 |  | DIFF=DIFF+40 |
| 380 | 10 |  |  |
| 380 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 380 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 381 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 381 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 381 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 381 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 381 | 0 | RESULT==4 |  |
| 381 | 0 | TEMP8==0 |  |
| 381 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 381 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 381 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 381 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 381 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 381 | 0 |  | TEMP20=che(249,1,CHARID,22,1); TEMP6=che(249,1,CHARID,41,1); |
| 381 | 20 |  |  |
| 381 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 381 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 381 | 0 | RESULT==1 |  |
| 381 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 381 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 381 | 0 |  | TEMP17=ROLL; |
| 381 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 381 | 0 |  | TEMP5=TEMP5*4 |
| 381 | 0 |  | DIFF=DIFF+40 |
| 381 | 0 |  | TEMP5=1; TEMP8=10; |
| 381 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 381 | 0 |  | DIFF=dth(4,40) |
| 381 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 381 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 381 | 0 | TEMP6>0 | ROLL=ROLL+TEMP6 |
| 381 | 0 | RESULT==2 |  |
| 381 | 0 | RESULT==3 |  |
| 381 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 382 | 0 |  | TEMP5=2; TEMP8=20; |
| 382 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 382 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 382 | 0 |  | TEMP17=ROLL; |
| 382 | 0 | TEMP8==0 |  |
| 382 | 0 |  | TEMP5=TEMP5*GAMEKEY.76/3 |
| 382 | 0 | RESULT==2 |  |
| 382 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 382 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 382 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 382 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 382 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 382 | 0 | RESULT==4 |  |
| 382 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 382 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 382 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 382 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 382 | 0 |  | TEMP20=che(249,1,CHARID,7,1) |
| 382 | 0 | RESULT==3 |  |
| 382 | 10 |  |  |
| 382 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 382 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 382 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 382 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 382 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 382 | 0 | RESULT==1 |  |
| 382 | 0 |  | DIFF=30+dth(4,40) |
| 382 | 0 |  | DIFF=DIFF+15 |
| 382 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 382 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 382 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 383 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 383 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 383 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 383 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 383 | 0 | TEMP8==0 |  |
| 383 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 383 | 0 | RESULT==4 |  |
| 383 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 383 | 0 | RESULT==1 |  |
| 383 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 383 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 383 | 0 | RESULT==2 |  |
| 383 | 0 | RESULT==3 |  |
| 383 | 20 |  |  |
| 383 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 383 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 383 | 0 |  | TEMP20=che(249,1,CHARID,7,1) |
| 383 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 383 | 0 |  | DIFF=DIFF+15 |
| 383 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 383 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 383 | 0 |  | DIFF=30+dth(4,40) |
| 383 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 383 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 383 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 383 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 383 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 383 | 0 |  | TEMP5=2; TEMP8=20; |
| 383 | 0 |  | TEMP17=ROLL; |
| 383 | 0 |  | TEMP5=TEMP5*GAMEKEY.76/3 |
| 384 | 0 | RESULT==2 |  |
| 384 | 0 |  | TEMP17=ROLL; |
| 384 | 0 |  | TEMP5=2; TEMP8=20; |
| 384 | 0 |  | TEMP5=TEMP5*GAMEKEY.76/2 |
| 384 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 384 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 384 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 384 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 384 | 0 | RESULT==3 |  |
| 384 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 384 | 0 | RESULT==4 |  |
| 384 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 384 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 384 | 0 | TEMP8==0 |  |
| 384 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 384 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 384 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 384 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 384 | 0 | RESULT==1 |  |
| 384 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 384 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 384 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 384 | 0 |  | TEMP20=che(249,1,CHARID,7,1) |
| 384 | 0 |  | DIFF=30+dth(4,40) |
| 384 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 384 | 0 |  | DIFF=DIFF+30 |
| 384 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 384 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 384 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 384 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 384 | 10 |  |  |
| 385 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 385 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 385 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 385 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 385 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 385 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 385 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 385 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 385 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 385 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 385 | 20 |  |  |
| 385 | 0 | RESULT==4 |  |
| 385 | 0 | TEMP8==0 |  |
| 385 | 0 | RESULT==1 |  |
| 385 | 0 |  | TEMP20=che(249,1,CHARID,7,1) |
| 385 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 385 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 385 | 0 |  | TEMP17=ROLL; |
| 385 | 0 |  | TEMP5=2; TEMP8=20; |
| 385 | 0 |  | TEMP5=TEMP5*GAMEKEY.76/2 |
| 385 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 385 | 0 |  | DIFF=DIFF+30 |
| 385 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 385 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 385 | 0 |  | DIFF=30+dth(4,40) |
| 385 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 385 | 0 | RESULT==2 |  |
| 385 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 385 | 0 | RESULT==3 |  |
| 385 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 386 | 0 |  | TEMP17=ROLL; |
| 386 | 0 | RESULT==2 |  |
| 386 | 0 |  | TEMP5=2; TEMP8=20; |
| 386 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 386 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 386 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 386 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 386 | 0 | RESULT==3 |  |
| 386 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 386 | 0 | RESULT==4 |  |
| 386 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 386 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 386 | 0 | TEMP8==0 |  |
| 386 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 386 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 386 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 386 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 386 | 0 | RESULT==1 |  |
| 386 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 386 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 386 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 386 | 10 |  |  |
| 386 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 386 | 0 |  | TEMP20=che(249,1,CHARID,7,1) |
| 386 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 386 | 0 |  | DIFF=30+dth(4,40) |
| 386 | 0 |  | DIFF=DIFF+20 |
| 386 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 386 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 386 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 387 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 387 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 387 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 387 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 387 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 387 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 387 | 20 |  |  |
| 387 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 387 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 387 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 387 | 0 | TEMP8==0 |  |
| 387 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 387 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 387 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 387 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 387 | 0 |  | TEMP20=che(249,1,CHARID,7,1) |
| 387 | 0 | RESULT==4 |  |
| 387 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 387 | 0 |  | TEMP5=2; TEMP8=20; |
| 387 | 0 |  | DIFF=30+dth(4,40) |
| 387 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 387 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 387 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 387 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 387 | 0 | RESULT==3 |  |
| 387 | 0 |  | TEMP17=ROLL; |
| 387 | 0 | RESULT==1 |  |
| 387 | 0 | RESULT==2 |  |
| 387 | 0 |  | DIFF=DIFF+20 |
| 388 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 388 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 388 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 388 | 0 | TEMP8==0 |  |
| 388 | 0 |  | TEMP17=ROLL; |
| 388 | 0 |  | TEMP5=2; TEMP8=20; |
| 388 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 388 | 0 | RESULT==4 |  |
| 388 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 388 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 388 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 388 | 0 | RESULT==2 |  |
| 388 | 0 | RESULT==3 |  |
| 388 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 388 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 388 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 388 | 10 |  |  |
| 388 | 0 |  | TEMP20=che(249,1,CHARID,7,1) |
| 388 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 388 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 388 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 388 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 388 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 388 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 388 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 388 | 0 | RESULT==1 |  |
| 388 | 0 |  | DIFF=30+dth(4,40) |
| 388 | 0 |  | DIFF=DIFF+10 |
| 388 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 388 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 389 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 389 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 389 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 389 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 389 | 0 | TEMP8==0 |  |
| 389 | 0 | RESULT==4 |  |
| 389 | 0 | RESULT==1 |  |
| 389 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 389 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 389 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 389 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 389 | 0 | RESULT==2 |  |
| 389 | 0 | RESULT==3 |  |
| 389 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 389 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 389 | 0 |  | TEMP20=che(249,1,CHARID,7,1) |
| 389 | 0 | TEMP20>0 | ROLL=ROLL+TEMP20 |
| 389 | 0 |  | DIFF=30+dth(4,40) |
| 389 | 0 |  | DIFF=DIFF+10 |
| 389 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 389 | 20 |  |  |
| 389 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 389 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 389 | 0 |  | TEMP17=ROLL; |
| 389 | 0 |  | TEMP5=2; TEMP8=20; |
| 389 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 389 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 389 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 389 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 390 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 390 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 390 | 0 |  | TEMP17=ROLL; |
| 390 | 0 | TEMP8==0 |  |
| 390 | 0 |  | TEMP5=4; TEMP8=40; |
| 390 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 390 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 390 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 390 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 390 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 390 | 0 | RESULT==2 |  |
| 390 | 0 | RESULT==3 |  |
| 390 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 390 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 390 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 390 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 390 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 390 | 0 | RESULT==4 |  |
| 390 | 10 |  |  |
| 390 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 390 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 390 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 390 | 0 |  | TEMP20=che(249,1,CHARID,27,1); ROLL=ROLL+TEMP20; |
| 390 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 390 | 0 |  | DIFF=30+dth(4,40) |
| 390 | 0 |  | DIFF=DIFF+10 |
| 390 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 390 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 390 | 0 | RESULT==1 |  |
| 391 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 391 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 391 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 391 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 391 | 0 | TEMP8==0 |  |
| 391 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 391 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 391 | 0 | RESULT==4 |  |
| 391 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 391 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 391 | 0 | RESULT==3 |  |
| 391 | 20 |  |  |
| 391 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 391 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 391 | 0 |  | TEMP20=che(249,1,CHARID,27,1); ROLL=ROLL+TEMP20; |
| 391 | 0 |  | DIFF=30+dth(4,40) |
| 391 | 0 |  | DIFF=DIFF+10 |
| 391 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 391 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 391 | 0 | RESULT==1 |  |
| 391 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 391 | 0 |  | TEMP17=ROLL; |
| 391 | 0 |  | TEMP5=4; TEMP8=40; |
| 391 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 391 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 391 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 391 | 0 | RESULT==2 |  |
| 391 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 392 | 0 |  | TEMP5=4; TEMP8=40; |
| 392 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 392 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 392 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 392 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 392 | 0 | RESULT==3 |  |
| 392 | 0 | RESULT==1 |  |
| 392 | 0 | RESULT==4 |  |
| 392 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 392 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 392 | 0 | TEMP8==0 |  |
| 392 | 0 |  | TEMP17=ROLL; |
| 392 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 392 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 392 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 392 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 392 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 392 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 392 | 0 | RESULT==2 |  |
| 392 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 392 | 0 |  | TEMP20=che(249,1,CHARID,26,1); ROLL=ROLL+TEMP20; |
| 392 | 0 |  | DIFF=DIFF+20 |
| 392 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 392 | 0 |  | DIFF=30+dth(4,40) |
| 392 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 392 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 392 | 10 |  |  |
| 392 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 392 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 393 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 393 | 20 |  |  |
| 393 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 393 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 393 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 393 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 393 | 0 | TEMP8==0 |  |
| 393 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 393 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 393 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 393 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 393 | 0 |  | TEMP20=che(249,1,CHARID,26,1); ROLL=ROLL+TEMP20; |
| 393 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 393 | 0 | RESULT==1 |  |
| 393 | 0 | RESULT==4 |  |
| 393 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 393 | 0 |  | TEMP17=ROLL; |
| 393 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 393 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 393 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 393 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 393 | 0 |  | TEMP5=4; TEMP8=40; |
| 393 | 0 |  | DIFF=DIFF+20 |
| 393 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 393 | 0 | RESULT==2 |  |
| 393 | 0 | RESULT==3 |  |
| 393 | 0 |  | DIFF=30+dth(4,40) |
| 393 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 394 | 0 | RESULT==3 |  |
| 394 | 0 |  | TEMP5=TEMP5*2 |
| 394 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 394 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 394 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 394 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 394 | 0 | RESULT==2 |  |
| 394 | 0 | RESULT==1 |  |
| 394 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 394 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 394 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 394 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 394 | 0 | TEMP8==0 |  |
| 394 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 394 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 394 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 394 | 0 |  | TEMP5=4; TEMP8=40; |
| 394 | 0 | RESULT==4 |  |
| 394 | 0 |  | TEMP17=ROLL; |
| 394 | 0 |  | TEMP20=che(249,1,CHARID,23,1); ROLL=ROLL+TEMP20; |
| 394 | 0 |  | DIFF=30+dth(4,40) |
| 394 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 394 | 10 |  |  |
| 394 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 394 | 0 |  | DIFF=DIFF+30 |
| 394 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 394 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 394 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 394 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 394 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 395 | 0 |  | TEMP20=che(249,1,CHARID,23,1); ROLL=ROLL+TEMP20; |
| 395 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 395 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 395 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 395 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 395 | 0 | RESULT==4 |  |
| 395 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 395 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 395 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 395 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 395 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 395 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 395 | 0 | TEMP8==0 |  |
| 395 | 0 |  | DIFF=30+dth(4,40) |
| 395 | 0 | RESULT==1 |  |
| 395 | 0 |  | TEMP17=ROLL; |
| 395 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 395 | 0 |  | TEMP5=4; TEMP8=40; |
| 395 | 0 |  | TEMP5=TEMP5*2 |
| 395 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 395 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 395 | 20 |  |  |
| 395 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 395 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 395 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 395 | 0 |  | DIFF=DIFF+30 |
| 395 | 0 | RESULT==2 |  |
| 395 | 0 | RESULT==3 |  |
| 395 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 396 | 0 |  | TEMP5=4; TEMP8=40; |
| 396 | 0 |  | TEMP5=TEMP5*3 |
| 396 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 396 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 396 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 396 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 396 | 0 | RESULT==2 |  |
| 396 | 0 | RESULT==3 |  |
| 396 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 396 | 0 | RESULT==4 |  |
| 396 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 396 | 0 | TEMP8==0 |  |
| 396 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 396 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 396 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 396 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 396 | 0 |  | TEMP17=ROLL; |
| 396 | 0 | RESULT==1 |  |
| 396 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 396 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 396 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 396 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 396 | 0 |  | DIFF=30+dth(4,40) |
| 396 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 396 | 10 |  |  |
| 396 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 396 | 0 |  | DIFF=DIFF+40 |
| 396 | 0 |  | TEMP20=che(249,1,CHARID,25,1); ROLL=ROLL+TEMP20; |
| 396 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 396 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 397 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 397 | 0 |  | ROLL=che(249,1,CHARID,21); TEMP11=ROLL; |
| 397 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 397 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 397 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 397 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 397 | 20 |  |  |
| 397 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 397 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 397 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 397 | 0 | TEMP8==0 |  |
| 397 | 0 | RESULT==4 |  |
| 397 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 397 | 0 | RESULT==1 |  |
| 397 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 397 | 0 |  | TEMP20=che(249,1,CHARID,25,1); ROLL=ROLL+TEMP20; |
| 397 | 0 |  | TEMP17=ROLL; |
| 397 | 0 |  | TEMP5=4; TEMP8=40; |
| 397 | 0 |  | TEMP5=TEMP5*3 |
| 397 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 397 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 397 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 397 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 397 | 0 |  | DIFF=DIFF+40 |
| 397 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 397 | 0 | RESULT==2 |  |
| 397 | 0 |  | DIFF=30+dth(4,40) |
| 397 | 0 | RESULT==3 |  |
| 397 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 398 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 398 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 398 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 398 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 398 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 398 | 0 | RESULT==2 |  |
| 398 | 0 | RESULT==1 |  |
| 398 | 0 | RESULT==4 |  |
| 398 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 398 | 0 | TEMP4>0 | ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP4; |
| 398 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 398 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 398 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 398 | 0 |  | TEMP8=ZONEKEY.privateFood/3; TEMP14=ZONEKEY.privateMetal/2; TEMP4=ZONEKEY.popCredits/3; TEMP7=ZONEKEY.privateOil/2; |
| 398 | 0 | TEMP2>0 | ZONEKEY.privateFood=ZONEKEY.privateFood-TEMP8; |
| 398 | 0 | TEMP3>0 | ZONEKEY.privateMetal=ZONEKEY.privateMetal-TEMP14; |
| 398 | 0 | TEMP5>0 | ZONEKEY.privateOil=ZONEKEY.privateOil-TEMP7; |
| 398 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 398 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 398 | 0 |  | TEMP5=TEMP5*2 |
| 398 | 0 | TEMP8==0 |  |
| 398 | 0 |  | TEMP5=1;TEMP8=10; |
| 398 | 0 | RESULT==3 |  |
| 398 | 0 |  | TEMP17=ROLL; |
| 398 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 398 | 0 |  | DIFF=DIFF+20 |
| 398 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 398 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 398 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 398 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 398 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 398 | 0 |  | DIFF=30+dth(4,40) |
| 398 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 398 | 10 |  |  |
| 398 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 399 | 0 | TEMP4>0 | ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP4; |
| 399 | 0 |  | DIFF=DIFF+20 |
| 399 | 0 |  | TEMP17=ROLL; |
| 399 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 399 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 399 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 399 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 399 | 0 | TEMP5>0 | ZONEKEY.privateOil=ZONEKEY.privateOil-TEMP7; |
| 399 | 0 | TEMP2>0 | ZONEKEY.privateFood=ZONEKEY.privateFood-TEMP8; |
| 399 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 399 | 0 | TEMP3>0 | ZONEKEY.privateMetal=ZONEKEY.privateMetal-TEMP14; |
| 399 | 20 |  |  |
| 399 | 0 |  | TEMP8=ZONEKEY.privateFood/3; TEMP14=ZONEKEY.privateMetal/2; TEMP4=ZONEKEY.popCredits/3; TEMP7=ZONEKEY.privateOil/2; |
| 399 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 399 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 399 | 0 |  | DIFF=30+dth(4,40) |
| 399 | 0 | TEMP8==0 |  |
| 399 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 399 | 0 |  | TEMP5=TEMP5*2 |
| 399 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 399 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 399 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 399 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 399 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 399 | 0 |  | TEMP5=1;TEMP8=10; |
| 399 | 0 | RESULT==2 |  |
| 399 | 0 | RESULT==3 |  |
| 399 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 399 | 0 | RESULT==1 |  |
| 399 | 0 | RESULT==4 |  |
| 399 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 399 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 399 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 399 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 400 | 0 |  | TEMP8=ZONEKEY.privateFood/3; TEMP14=ZONEKEY.privateMetal/2; TEMP4=ZONEKEY.popCredits/3; TEMP7=ZONEKEY.privateOil/2; |
| 400 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 400 | 0 |  | TEMP5=1;TEMP8=10; |
| 400 | 0 | TEMP2>0 | ZONEKEY.privateFood=ZONEKEY.privateFood-TEMP8; |
| 400 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 400 | 0 |  | TEMP17=ROLL; |
| 400 | 0 |  | TEMP5=TEMP5*3 |
| 400 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 400 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 400 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 400 | 0 | RESULT==2 |  |
| 400 | 0 | RESULT==3 |  |
| 400 | 0 | RESULT==1 |  |
| 400 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 400 | 0 | RESULT==4 |  |
| 400 | 0 | TEMP3>0 | ZONEKEY.privateMetal=ZONEKEY.privateMetal-TEMP14; |
| 400 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 400 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 400 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 400 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 400 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 400 | 0 | TEMP8==0 |  |
| 400 | 10 |  |  |
| 400 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 400 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 400 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 400 | 0 |  | DIFF=DIFF+35 |
| 400 | 0 |  | DIFF=30+dth(4,40) |
| 400 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 400 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 400 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 400 | 0 | TEMP5>0 | ZONEKEY.privateOil=ZONEKEY.privateOil-TEMP7; |
| 400 | 0 | TEMP4>0 | ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP4; |
| 400 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 400 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 401 | 0 | TEMP8==0 |  |
| 401 | 0 | TEMP2>0 | ZONEKEY.privateFood=ZONEKEY.privateFood-TEMP8; |
| 401 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 401 | 0 | TEMP5>0 | ZONEKEY.privateOil=ZONEKEY.privateOil-TEMP7; |
| 401 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 401 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 401 | 0 |  | TEMP8=ZONEKEY.privateFood/3; TEMP14=ZONEKEY.privateMetal/2; TEMP4=ZONEKEY.popCredits/3; TEMP7=ZONEKEY.privateOil/2; |
| 401 | 0 | TEMP3>0 | ZONEKEY.privateMetal=ZONEKEY.privateMetal-TEMP14; |
| 401 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 401 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 401 | 0 | TEMP4>0 | ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP4; |
| 401 | 0 |  | TEMP17=ROLL; |
| 401 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 401 | 20 |  |  |
| 401 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 401 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 401 | 0 |  | DIFF=DIFF+35 |
| 401 | 0 |  | DIFF=30+dth(4,40) |
| 401 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 401 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 401 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 401 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 401 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 401 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 401 | 0 |  | TEMP5=1;TEMP8=10; |
| 401 | 0 | RESULT==4 |  |
| 401 | 0 | RESULT==3 |  |
| 401 | 0 | RESULT==2 |  |
| 401 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 401 | 0 | RESULT==1 |  |
| 401 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 401 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 401 | 0 |  | TEMP5=TEMP5*3 |
| 401 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 402 | 0 | RESULT==3 |  |
| 402 | 0 |  | TEMP5=2;TEMP8=20; |
| 402 | 0 |  | TEMP5=TEMP5*2 |
| 402 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 402 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 402 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 402 | 0 | RESULT==2 |  |
| 402 | 0 | RESULT==1 |  |
| 402 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 402 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 402 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 402 | 0 | TEMP8==0 |  |
| 402 | 0 |  | TEMP17=ROLL; |
| 402 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 402 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 402 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 402 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 402 | 0 | RESULT==4 |  |
| 402 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 402 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 402 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 402 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 402 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 402 | 10 |  |  |
| 402 | 0 |  | DIFF=DIFF+15 |
| 402 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 402 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 402 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 402 | 0 |  | DIFF=60+dth(4,40) |
| 402 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 403 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 403 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 403 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 403 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 403 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 403 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 403 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 403 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 403 | 20 |  |  |
| 403 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 403 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 403 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 403 | 0 |  | DIFF=DIFF+15 |
| 403 | 0 | TEMP8==0 |  |
| 403 | 0 | RESULT==1 |  |
| 403 | 0 | RESULT==4 |  |
| 403 | 0 |  | TEMP17=ROLL; |
| 403 | 0 |  | TEMP5=2;TEMP8=20; |
| 403 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 403 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 403 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 403 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 403 | 0 |  | TEMP5=TEMP5*2 |
| 403 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 403 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 403 | 0 | RESULT==2 |  |
| 403 | 0 | RESULT==3 |  |
| 403 | 0 |  | DIFF=60+dth(4,40) |
| 403 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 404 | 0 |  | TEMP5=TEMP5*2 |
| 404 | 0 | RESULT==3 |  |
| 404 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 404 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 404 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 404 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 404 | 0 | RESULT==2 |  |
| 404 | 0 | RESULT==1 |  |
| 404 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 404 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 404 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 404 | 0 | TEMP8==0 |  |
| 404 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 404 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 404 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 404 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 404 | 0 |  | TEMP5=2;TEMP8=20; |
| 404 | 0 | RESULT==4 |  |
| 404 | 0 |  | TEMP17=ROLL; |
| 404 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 404 | 0 |  | DIFF=60+dth(4,40) |
| 404 | 10 |  |  |
| 404 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 404 | 0 |  | DIFF=DIFF+30 |
| 404 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 404 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 404 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 404 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 404 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 404 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 405 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 405 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 405 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 405 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 405 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 405 | 0 |  | DIFF=DIFF+30 |
| 405 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 405 | 20 |  |  |
| 405 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 405 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 405 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 405 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 405 | 0 | TEMP8==0 |  |
| 405 | 0 | RESULT==1 |  |
| 405 | 0 | RESULT==4 |  |
| 405 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 405 | 0 |  | TEMP17=ROLL; |
| 405 | 0 |  | TEMP5=2;TEMP8=20; |
| 405 | 0 |  | TEMP5=TEMP5*2 |
| 405 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 405 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 405 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 405 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 405 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 405 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 405 | 0 | RESULT==2 |  |
| 405 | 0 | RESULT==3 |  |
| 405 | 0 |  | DIFF=60+dth(4,40) |
| 405 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 406 | 0 |  | TEMP5=2;TEMP8=20; |
| 406 | 0 | RESULT==3 |  |
| 406 | 0 |  | TEMP5=TEMP5*2 |
| 406 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 406 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 406 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 406 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 406 | 0 | RESULT==1 |  |
| 406 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 406 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 406 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 406 | 0 | TEMP8==0 |  |
| 406 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 406 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 406 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 406 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 406 | 0 |  | TEMP17=ROLL; |
| 406 | 0 | RESULT==4 |  |
| 406 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 406 | 0 | RESULT==2 |  |
| 406 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 406 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 406 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 406 | 10 |  |  |
| 406 | 0 |  | DIFF=DIFF+40 |
| 406 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 406 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 406 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 406 | 0 |  | DIFF=60+dth(4,40) |
| 406 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 407 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 407 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 407 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 407 | 0 | TEMP8==0 |  |
| 407 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 407 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 407 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 407 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 407 | 20 |  |  |
| 407 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 407 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 407 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 407 | 0 |  | DIFF=DIFF+40 |
| 407 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 407 | 0 | RESULT==1 |  |
| 407 | 0 | RESULT==4 |  |
| 407 | 0 |  | TEMP5=2;TEMP8=20; |
| 407 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 407 | 0 |  | TEMP5=TEMP5*2 |
| 407 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 407 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 407 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 407 | 0 |  | TEMP17=ROLL; |
| 407 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 407 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 407 | 0 | RESULT==2 |  |
| 407 | 0 | RESULT==3 |  |
| 407 | 0 |  | DIFF=60+dth(4,40) |
| 407 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 408 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 408 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 408 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 408 | 0 |  | TEMP17=ROLL; |
| 408 | 0 | TEMP8==0 |  |
| 408 | 0 |  | TEMP5=4; TEMP8=40; |
| 408 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 408 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 408 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 408 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 408 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 408 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 408 | 0 | RESULT==4 |  |
| 408 | 0 | RESULT==2 |  |
| 408 | 0 |  | TEMP5=TEMP5*2 |
| 408 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 408 | 0 | RESULT==1 |  |
| 408 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 408 | 0 | RESULT==3 |  |
| 408 | 10 |  |  |
| 408 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 408 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 408 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 408 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 408 | 0 |  | DIFF=DIFF+30 |
| 408 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 408 | 0 |  | DIFF=90+dth(4,40) |
| 408 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 408 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 408 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 409 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 409 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 409 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 409 | 0 | TEMP8==0 |  |
| 409 | 0 | RESULT==4 |  |
| 409 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 409 | 0 | RESULT==1 |  |
| 409 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 409 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 409 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 409 | 0 | RESULT==2 |  |
| 409 | 0 | RESULT==3 |  |
| 409 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 409 | 0 |  | TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL; |
| 409 | 0 |  | DIFF=DIFF+30 |
| 409 | 0 |  | DIFF=90+dth(4,40) |
| 409 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 409 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 409 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 409 | 20 |  |  |
| 409 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 409 | 0 |  | TEMP17=ROLL; |
| 409 | 0 |  | TEMP5=4; TEMP8=40; |
| 409 | 0 |  | TEMP5=TEMP5*2 |
| 409 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 409 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 409 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 409 | 0 | ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2 | TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 409 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 410 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 410 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 410 | 0 | TEMP8==0 |  |
| 410 | 0 |  | TEMP17=ROLL; |
| 410 | 0 |  | TEMP5=1;TEMP8=10; |
| 410 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 410 | 0 |  | TEMP5=TEMP5*2 |
| 410 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 410 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 410 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 410 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 410 | 0 | RESULT==4 |  |
| 410 | 0 | RESULT==2 |  |
| 410 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 410 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 410 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 410 | 0 |  | DIFF=30+dth(4,40) |
| 410 | 0 | RESULT==1 |  |
| 410 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 410 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 410 | 0 |  | TEMP20=che(249,1,CHARID,21,1); ROLL=ROLL+TEMP20; |
| 410 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 410 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 410 | 0 |  | DIFF=DIFF+10 |
| 410 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 410 | 0 | RESULT==3 |  |
| 410 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 410 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 410 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 410 | 10 |  |  |
| 410 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 411 | 0 | RESULT==4 |  |
| 411 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 411 | 0 | RESULT==1 |  |
| 411 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 411 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 411 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 411 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 411 | 0 | TEMP8==0 |  |
| 411 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 411 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 411 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 411 | 0 | RESULT==2 |  |
| 411 | 0 | RESULT==3 |  |
| 411 | 20 |  |  |
| 411 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 411 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 411 | 0 |  | TEMP20=che(249,1,CHARID,21,1); ROLL=ROLL+TEMP20; |
| 411 | 0 |  | DIFF=30+dth(4,40) |
| 411 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 411 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 411 | 0 |  | DIFF=DIFF+10 |
| 411 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 411 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 411 | 0 |  | TEMP17=ROLL; |
| 411 | 0 |  | TEMP5=1;TEMP8=10; |
| 411 | 0 |  | TEMP5=TEMP5*2 |
| 411 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 411 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 411 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 411 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 412 | 0 | RESULT==2 |  |
| 412 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 412 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 412 | 0 |  | TEMP5=1;TEMP8=10; |
| 412 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 412 | 0 |  | TEMP5=TEMP5*3 |
| 412 | 0 | RESULT==3 |  |
| 412 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 412 | 0 | RESULT==1 |  |
| 412 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 412 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 412 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 412 | 0 | TEMP8==0 |  |
| 412 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 412 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 412 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 412 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 412 | 0 |  | TEMP17=ROLL; |
| 412 | 0 | RESULT==4 |  |
| 412 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 412 | 0 |  | DIFF=DIFF+10 |
| 412 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 412 | 0 |  | DIFF=30+dth(4,40) |
| 412 | 0 |  | TEMP20=che(249,1,CHARID,21,1); ROLL=ROLL+TEMP20; |
| 412 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 412 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 412 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 412 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 412 | 10 |  |  |
| 412 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 412 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 413 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 413 | 20 |  |  |
| 413 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 413 | 0 |  | TEMP20=che(249,1,CHARID,21,1); ROLL=ROLL+TEMP20; |
| 413 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 413 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 413 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 413 | 0 | TEMP8==0 |  |
| 413 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 413 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 413 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 413 | 0 | RESULT==4 |  |
| 413 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 413 | 0 | RESULT==1 |  |
| 413 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 413 | 0 |  | TEMP17=ROLL; |
| 413 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 413 | 0 |  | TEMP5=1;TEMP8=10; |
| 413 | 0 |  | TEMP5=TEMP5*3 |
| 413 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 413 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 413 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 413 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 413 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 413 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 413 | 0 |  | DIFF=30+dth(4,40) |
| 413 | 0 | RESULT==2 |  |
| 413 | 0 | RESULT==3 |  |
| 413 | 0 |  | DIFF=DIFF+10 |
| 413 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 414 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 414 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 414 | 0 |  | TEMP17=ROLL; |
| 414 | 0 | TEMP8==0 |  |
| 414 | 0 |  | TEMP5=1;TEMP8=10; |
| 414 | 0 |  | TEMP5=TEMP5*2 |
| 414 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 414 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 414 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 414 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 414 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 414 | 0 | RESULT==4 |  |
| 414 | 0 | RESULT==2 |  |
| 414 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 414 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 414 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 414 | 10 |  |  |
| 414 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 414 | 0 | RESULT==3 |  |
| 414 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 414 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 414 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 414 | 0 |  | TEMP20=che(249,1,CHARID,21,1); ROLL=ROLL+TEMP20; |
| 414 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 414 | 0 |  | DIFF=DIFF+10 |
| 414 | 0 | RESULT==1 |  |
| 414 | 0 |  | DIFF=30+dth(4,40) |
| 414 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 414 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 414 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 414 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 415 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 415 | 0 | TEMP8==0 |  |
| 415 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 415 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 415 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 415 | 0 | RESULT==4 |  |
| 415 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 415 | 0 | RESULT==1 |  |
| 415 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 415 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 415 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 415 | 0 | RESULT==2 |  |
| 415 | 0 | RESULT==3 |  |
| 415 | 20 |  |  |
| 415 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 415 | 0 |  | TEMP20=che(249,1,CHARID,21,1); ROLL=ROLL+TEMP20; |
| 415 | 0 |  | DIFF=DIFF+10 |
| 415 | 0 |  | DIFF=30+dth(4,40) |
| 415 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 415 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 415 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 415 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 415 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 415 | 0 |  | TEMP17=ROLL; |
| 415 | 0 |  | TEMP5=1;TEMP8=10; |
| 415 | 0 |  | TEMP5=TEMP5*2 |
| 415 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 415 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 415 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 415 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 416 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 416 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 416 | 0 | TEMP8==0 |  |
| 416 | 0 |  | TEMP17=ROLL; |
| 416 | 0 |  | TEMP5=1;TEMP8=20; |
| 416 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 416 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 416 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 416 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 416 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 416 | 0 | RESULT==4 |  |
| 416 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 416 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 416 | 0 | RESULT==2 |  |
| 416 | 0 |  | TEMP5=TEMP5*3 |
| 416 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 416 | 0 |  | DIFF=60+dth(4,40) |
| 416 | 0 | RESULT==3 |  |
| 416 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 416 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 416 | 0 | RESULT==1 |  |
| 416 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 416 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 416 | 10 |  |  |
| 416 | 0 |  | DIFF=DIFF+20 |
| 416 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 416 | 0 |  | TEMP20=che(249,1,CHARID,3,1); ROLL=ROLL+TEMP20; |
| 416 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 416 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 416 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 416 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 417 | 0 | RESULT==1 |  |
| 417 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 417 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 417 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 417 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 417 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 417 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 417 | 0 | RESULT==4 |  |
| 417 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 417 | 0 | TEMP8==0 |  |
| 417 | 0 | RESULT==2 |  |
| 417 | 0 | RESULT==3 |  |
| 417 | 20 |  |  |
| 417 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 417 | 0 |  | TEMP20=che(249,1,CHARID,3,1); ROLL=ROLL+TEMP20; |
| 417 | 0 |  | DIFF=DIFF+20 |
| 417 | 0 |  | DIFF=60+dth(4,40) |
| 417 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 417 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 417 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 417 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 417 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 417 | 0 |  | TEMP17=ROLL; |
| 417 | 0 |  | TEMP5=1;TEMP8=20; |
| 417 | 0 |  | TEMP5=TEMP5*3 |
| 417 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 417 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 417 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 417 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 417 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 418 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 418 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 418 | 0 | TEMP8==0 |  |
| 418 | 0 |  | TEMP17=ROLL; |
| 418 | 0 |  | TEMP5=1;TEMP8=20; |
| 418 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 418 | 0 |  | TEMP5=TEMP5*2 |
| 418 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 418 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 418 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 418 | 0 | RESULT==4 |  |
| 418 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 418 | 0 | RESULT==2 |  |
| 418 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 418 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 418 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 418 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 418 | 0 | RESULT==3 |  |
| 418 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 418 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 418 | 10 |  |  |
| 418 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 418 | 0 |  | DIFF=60+dth(4,40) |
| 418 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 418 | 0 | RESULT==1 |  |
| 418 | 0 |  | DIFF=DIFF+20 |
| 418 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 418 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 418 | 0 |  | TEMP20=che(249,1,CHARID,3,1); ROLL=ROLL+TEMP20; |
| 418 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 418 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 419 | 0 | RESULT==1 |  |
| 419 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 419 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 419 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 419 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 419 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 419 | 0 | TEMP8==0 |  |
| 419 | 0 | RESULT==4 |  |
| 419 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 419 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 419 | 0 | RESULT==2 |  |
| 419 | 0 | RESULT==3 |  |
| 419 | 20 |  |  |
| 419 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 419 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 419 | 0 |  | TEMP20=che(249,1,CHARID,3,1); ROLL=ROLL+TEMP20; |
| 419 | 0 |  | DIFF=DIFF+20 |
| 419 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 419 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 419 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 419 | 0 |  | DIFF=60+dth(4,40) |
| 419 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 419 | 0 |  | TEMP17=ROLL; |
| 419 | 0 |  | TEMP5=1;TEMP8=20; |
| 419 | 0 |  | TEMP5=TEMP5*2 |
| 419 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 419 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 419 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 419 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 419 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 420 | 0 | RESULT==2 |  |
| 420 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 420 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 420 | 0 |  | TEMP5=5; TEMP8=40; |
| 420 | 0 |  | TEMP5=TEMP5*2 |
| 420 | 0 | RESULT==3 |  |
| 420 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 420 | 0 | RESULT==1 |  |
| 420 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 420 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 420 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 420 | 0 | TEMP8==0 |  |
| 420 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 420 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 420 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 420 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 420 | 0 |  | TEMP17=ROLL; |
| 420 | 0 | RESULT==4 |  |
| 420 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 420 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 420 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 420 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 420 | 0 |  | TEMP20=che(249,1,CHARID,41,1); ROLL=ROLL+TEMP20; |
| 420 | 10 |  |  |
| 420 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 420 | 0 |  | DIFF=90+dth(4,40) |
| 420 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 420 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 420 | 0 |  | DIFF=DIFF+10 |
| 420 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 420 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 421 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 421 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 421 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 421 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 421 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 421 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 421 | 20 |  |  |
| 421 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 421 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 421 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 421 | 0 | TEMP8==0 |  |
| 421 | 0 | RESULT==4 |  |
| 421 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 421 | 0 | RESULT==1 |  |
| 421 | 0 |  | TEMP20=che(249,1,CHARID,41,1); ROLL=ROLL+TEMP20; |
| 421 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 421 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 421 | 0 |  | TEMP17=ROLL; |
| 421 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 421 | 0 |  | TEMP5=TEMP5*2 |
| 421 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 421 | 0 |  | TEMP5=5; TEMP8=40; |
| 421 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 421 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 421 | 0 |  | DIFF=90+dth(4,40) |
| 421 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 421 | 0 | RESULT==2 |  |
| 421 | 0 |  | DIFF=DIFF+10 |
| 421 | 0 | RESULT==3 |  |
| 421 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 422 | 0 | RESULT==2 |  |
| 422 | 0 |  | TEMP17=ROLL; |
| 422 | 0 |  | TEMP5=5; TEMP8=40; |
| 422 | 0 |  | TEMP5=TEMP5*3 |
| 422 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 422 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 422 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 422 | 0 | RESULT==1 |  |
| 422 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 422 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 422 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 422 | 0 | TEMP8==0 |  |
| 422 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 422 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 422 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 422 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 422 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 422 | 0 | RESULT==4 |  |
| 422 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 422 | 0 | RESULT==3 |  |
| 422 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 422 | 0 |  | TEMP20=che(249,1,CHARID,41,1); ROLL=ROLL+TEMP20; |
| 422 | 0 |  | DIFF=90+dth(4,40) |
| 422 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 422 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 422 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 422 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 422 | 0 |  | DIFF=DIFF+20 |
| 422 | 10 |  |  |
| 422 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 422 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 423 | 0 |  | TEMP20=che(249,1,CHARID,41,1); ROLL=ROLL+TEMP20; |
| 423 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 423 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 423 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 423 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 423 | 0 | TEMP8==0 |  |
| 423 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 423 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 423 | 0 | RESULT==4 |  |
| 423 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 423 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 423 | 20 |  |  |
| 423 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 423 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 423 | 0 |  | DIFF=DIFF+20 |
| 423 | 0 |  | TEMP17=ROLL; |
| 423 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 423 | 0 |  | TEMP5=5; TEMP8=40; |
| 423 | 0 |  | TEMP5=TEMP5*3 |
| 423 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 423 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 423 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 423 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 423 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 423 | 0 |  | DIFF=90+dth(4,40) |
| 423 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 423 | 0 | RESULT==2 |  |
| 423 | 0 | RESULT==1 |  |
| 423 | 0 | RESULT==3 |  |
| 423 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 424 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 424 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 424 | 0 |  | TEMP17=ROLL; |
| 424 | 0 | TEMP8==0 |  |
| 424 | 0 |  | TEMP5=5; TEMP8=40; |
| 424 | 0 |  | TEMP5=TEMP5*4 |
| 424 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 424 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 424 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 424 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 424 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 424 | 0 | RESULT==4 |  |
| 424 | 0 | RESULT==2 |  |
| 424 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 424 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 424 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 424 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 424 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 424 | 10 |  |  |
| 424 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 424 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 424 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 424 | 0 |  | TEMP20=che(249,1,CHARID,41,1); ROLL=ROLL+TEMP20; |
| 424 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 424 | 0 |  | DIFF=DIFF+40 |
| 424 | 0 | RESULT==1 |  |
| 424 | 0 |  | DIFF=90+dth(4,40) |
| 424 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 424 | 0 | RESULT==3 |  |
| 424 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 424 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 425 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 425 | 0 | TEMP8==0 |  |
| 425 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 425 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 425 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 425 | 0 | RESULT==4 |  |
| 425 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 425 | 0 | RESULT==1 |  |
| 425 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 425 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 425 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 425 | 0 | RESULT==2 |  |
| 425 | 0 | RESULT==3 |  |
| 425 | 20 |  |  |
| 425 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 425 | 0 |  | ROLL=che(249,1,CHARID,22); TEMP11=ROLL; |
| 425 | 0 |  | TEMP20=che(249,1,CHARID,41,1); ROLL=ROLL+TEMP20; |
| 425 | 0 |  | DIFF=DIFF+40 |
| 425 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 425 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 425 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 425 | 0 |  | DIFF=90+dth(4,40) |
| 425 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 425 | 0 | ZONEKEY.health>5 | TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 425 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 425 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 425 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 425 | 0 |  | TEMP5=5; TEMP8=40; |
| 425 | 0 |  | TEMP17=ROLL; |
| 425 | 0 |  | TEMP5=TEMP5*4 |
| 426 | 0 |  | TEMP5=1;TEMP8=20; |
| 426 | 0 | RESULT==3 |  |
| 426 | 0 |  | TEMP5=TEMP5*2 |
| 426 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 426 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 426 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 426 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 426 | 0 | RESULT==2 |  |
| 426 | 0 | RESULT==1 |  |
| 426 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 426 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 426 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 426 | 0 | TEMP8==0 |  |
| 426 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 426 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 426 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 426 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 426 | 0 |  | TEMP17=ROLL; |
| 426 | 0 | RESULT==4 |  |
| 426 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 426 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 426 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 426 | 0 |  | DIFF=30+dth(4,40) |
| 426 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 426 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 426 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 426 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 426 | 0 |  | DIFF=DIFF+10 |
| 426 | 10 |  |  |
| 426 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 426 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 427 | 20 |  |  |
| 427 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 427 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 427 | 0 | RESULT==4 |  |
| 427 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 427 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 427 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 427 | 0 | TEMP8==0 |  |
| 427 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 427 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 427 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 427 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 427 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 427 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 427 | 0 |  | DIFF=DIFF+10 |
| 427 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 427 | 0 | RESULT==1 |  |
| 427 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 427 | 0 |  | TEMP5=1;TEMP8=20; |
| 427 | 0 |  | TEMP5=TEMP5*2 |
| 427 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 427 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 427 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 427 | 0 |  | TEMP17=ROLL; |
| 427 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 427 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 427 | 0 |  | DIFF=30+dth(4,40) |
| 427 | 0 | RESULT==2 |  |
| 427 | 0 | RESULT==3 |  |
| 427 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 428 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 428 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 428 | 0 |  | TEMP17=ROLL; |
| 428 | 0 | TEMP8==0 |  |
| 428 | 0 |  | TEMP5=1;TEMP8=20; |
| 428 | 0 |  | TEMP5=TEMP5*3 |
| 428 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 428 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 428 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 428 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 428 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 428 | 0 | RESULT==4 |  |
| 428 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 428 | 0 | RESULT==2 |  |
| 428 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 428 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 428 | 10 |  |  |
| 428 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 428 | 0 | RESULT==3 |  |
| 428 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 428 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 428 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 428 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 428 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 428 | 0 |  | DIFF=DIFF+20 |
| 428 | 0 | RESULT==1 |  |
| 428 | 0 |  | DIFF=30+dth(4,40) |
| 428 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 428 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 428 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 428 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 429 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 429 | 0 | TEMP8==0 |  |
| 429 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 429 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 429 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 429 | 0 | RESULT==4 |  |
| 429 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 429 | 0 | RESULT==1 |  |
| 429 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 429 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 429 | 0 |  | DIFF=30+dth(4,40) |
| 429 | 0 | RESULT==2 |  |
| 429 | 20 |  |  |
| 429 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 429 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 429 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 429 | 0 |  | DIFF=DIFF+20 |
| 429 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 429 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 429 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 429 | 0 | RESULT==3 |  |
| 429 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 429 | 0 |  | TEMP17=ROLL; |
| 429 | 0 |  | TEMP5=1;TEMP8=20; |
| 429 | 0 |  | TEMP5=TEMP5*3 |
| 429 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 429 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 429 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 429 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 429 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 430 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 430 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 430 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 430 | 0 | TEMP8==0 |  |
| 430 | 0 |  | TEMP17=ROLL; |
| 430 | 0 |  | TEMP5=1;TEMP8=20; |
| 430 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 430 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 430 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 430 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 430 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 430 | 0 | RESULT==4 |  |
| 430 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 430 | 0 | RESULT==2 |  |
| 430 | 0 | RESULT==1 |  |
| 430 | 0 |  | TEMP5=TEMP5*4 |
| 430 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 430 | 0 |  | DIFF=30+dth(4,40) |
| 430 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 430 | 10 |  |  |
| 430 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 430 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 430 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 430 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 430 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 430 | 0 |  | DIFF=DIFF+30 |
| 430 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 430 | 0 | RESULT==3 |  |
| 430 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 430 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 430 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 431 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 431 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 431 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 431 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 431 | 0 | RESULT==4 |  |
| 431 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 431 | 0 | TEMP8==0 |  |
| 431 | 0 | RESULT==1 |  |
| 431 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 431 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 431 | 0 | RESULT==3 |  |
| 431 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 431 | 0 | RESULT==2 |  |
| 431 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 431 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 431 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 431 | 0 |  | DIFF=DIFF+30 |
| 431 | 0 |  | DIFF=30+dth(4,40) |
| 431 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 431 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 431 | 20 |  |  |
| 431 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 431 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 431 | 0 |  | TEMP17=ROLL; |
| 431 | 0 |  | TEMP5=1;TEMP8=20; |
| 431 | 0 |  | TEMP5=TEMP5*4 |
| 431 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 431 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 431 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 431 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 432 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 432 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 432 | 0 | TEMP8==0 |  |
| 432 | 0 |  | TEMP17=ROLL; |
| 432 | 0 |  | TEMP5=5; TEMP8=40; |
| 432 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 432 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 432 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 432 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 432 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 432 | 0 | RESULT==4 |  |
| 432 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 432 | 0 | RESULT==2 |  |
| 432 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 432 | 0 |  | TEMP5=TEMP5*2 |
| 432 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 432 | 0 |  | DIFF=60+dth(4,40) |
| 432 | 0 | RESULT==3 |  |
| 432 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 432 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 432 | 0 | RESULT==1 |  |
| 432 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 432 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 432 | 10 |  |  |
| 432 | 0 |  | DIFF=DIFF+15 |
| 432 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 432 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 432 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 432 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 432 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 432 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 433 | 0 | RESULT==1 |  |
| 433 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 433 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 433 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 433 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 433 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 433 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 433 | 0 | RESULT==4 |  |
| 433 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 433 | 0 | TEMP8==0 |  |
| 433 | 0 | RESULT==2 |  |
| 433 | 0 | RESULT==3 |  |
| 433 | 20 |  |  |
| 433 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 433 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 433 | 0 |  | DIFF=DIFF+15 |
| 433 | 0 |  | DIFF=60+dth(4,40) |
| 433 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 433 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 433 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 433 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 433 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 433 | 0 |  | TEMP17=ROLL; |
| 433 | 0 |  | TEMP5=5; TEMP8=40; |
| 433 | 0 |  | TEMP5=TEMP5*2 |
| 433 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 433 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 433 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 433 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 433 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 434 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 434 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 434 | 0 |  | TEMP17=ROLL; |
| 434 | 0 | TEMP8==0 |  |
| 434 | 0 |  | TEMP5=5; TEMP8=40; |
| 434 | 0 |  | TEMP5=TEMP5*3 |
| 434 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 434 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 434 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 434 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 434 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 434 | 0 | RESULT==4 |  |
| 434 | 0 | RESULT==2 |  |
| 434 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 434 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 434 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 434 | 0 |  | DIFF=60+dth(4,40) |
| 434 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 434 | 10 |  |  |
| 434 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 434 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 434 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 434 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 434 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 434 | 0 |  | DIFF=DIFF+30 |
| 434 | 0 | RESULT==1 |  |
| 434 | 0 | RESULT==3 |  |
| 434 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 434 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 434 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 434 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 435 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 435 | 0 | TEMP8==0 |  |
| 435 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 435 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 435 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 435 | 0 | RESULT==4 |  |
| 435 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 435 | 0 | RESULT==1 |  |
| 435 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 435 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 435 | 20 |  |  |
| 435 | 0 | RESULT==2 |  |
| 435 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 435 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 435 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 435 | 0 |  | DIFF=DIFF+30 |
| 435 | 0 |  | DIFF=60+dth(4,40) |
| 435 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 435 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 435 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 435 | 0 | RESULT==3 |  |
| 435 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 435 | 0 |  | TEMP17=ROLL; |
| 435 | 0 |  | TEMP5=5; TEMP8=40; |
| 435 | 0 |  | TEMP5=TEMP5*3 |
| 435 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 435 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 435 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 435 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 435 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 436 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 436 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 436 | 0 |  | TEMP5=5; TEMP8=40; |
| 436 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 436 | 0 |  | TEMP5=TEMP5*4 |
| 436 | 0 | RESULT==2 |  |
| 436 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 436 | 0 | RESULT==3 |  |
| 436 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 436 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 436 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 436 | 0 | TEMP8==0 |  |
| 436 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 436 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 436 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 436 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 436 | 0 |  | TEMP17=ROLL; |
| 436 | 0 | RESULT==4 |  |
| 436 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 436 | 0 | RESULT==1 |  |
| 436 | 0 |  | DIFF=DIFF+45 |
| 436 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 436 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 436 | 10 |  |  |
| 436 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 436 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 436 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 436 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 436 | 0 |  | DIFF=60+dth(4,40) |
| 436 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 436 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 437 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 437 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 437 | 0 | TEMP8>5; ROLL<DIFF; | TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10; |
| 437 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 437 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 437 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 437 | 0 | RESULT==4 |  |
| 437 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 437 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 437 | 20 |  |  |
| 437 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 437 | 0 | TEMP8==0 |  |
| 437 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 437 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 437 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 437 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 437 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 437 | 0 |  | TEMP17=ROLL; |
| 437 | 0 |  | TEMP5=5; TEMP8=40; |
| 437 | 0 |  | TEMP5=TEMP5*4 |
| 437 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 437 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 437 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 437 | 0 |  | DIFF=60+dth(4,40) |
| 437 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 437 | 0 | RESULT==2 |  |
| 437 | 0 |  | DIFF=DIFF+45 |
| 437 | 0 | RESULT==3 |  |
| 437 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 437 | 0 | RESULT==1 |  |
| 438 | 0 |  | TEMP17=ROLL; |
| 438 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 438 | 0 | RESULT==1 |  |
| 438 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 438 | 0 |  | TEMP5=3; TEMP8=10; |
| 438 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 438 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 438 | 0 | RESULT==3 |  |
| 438 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 438 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 438 | 0 | TEMP8==0 |  |
| 438 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 438 | 0 | RESULT==2 |  |
| 438 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 438 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 438 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 438 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 438 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 438 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 438 | 10 |  |  |
| 438 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 438 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 438 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 438 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 438 | 0 |  | DIFF=DIFF+20 |
| 438 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 438 | 0 |  | DIFF=60+dth(4,40) |
| 438 | 0 | ROLL<DIFF | TEMP21=dth(4,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 438 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 438 | 0 | ROLL>=DIFF | TEMP21=dth(1,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 438 | 0 | RESULT==4 |  |
| 439 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 439 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 439 | 0 | TEMP8==0 |  |
| 439 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 439 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 439 | 0 | ROLL>=DIFF | TEMP21=dth(1,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 439 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 439 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 439 | 0 | RESULT==4 |  |
| 439 | 0 | ROLL<DIFF | TEMP21=dth(4,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 439 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 439 | 0 | RESULT==3 |  |
| 439 | 20 |  |  |
| 439 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 439 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 439 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 439 | 0 |  | DIFF=DIFF+20 |
| 439 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 439 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 439 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 439 | 0 |  | DIFF=60+dth(4,40) |
| 439 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 439 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 439 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 439 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 439 | 0 | RESULT==1 |  |
| 439 | 0 | RESULT==2 |  |
| 439 | 0 |  | TEMP5=3; TEMP8=10; |
| 439 | 0 |  | TEMP17=ROLL; |
| 439 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 440 | 0 | RESULT==3 |  |
| 440 | 0 |  | TEMP5=3; TEMP8=10; |
| 440 | 0 |  | TEMP5=TEMP5*2 |
| 440 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 440 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 440 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 440 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 440 | 0 | RESULT==2 |  |
| 440 | 0 | RESULT==1 |  |
| 440 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 440 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 440 | 0 | TEMP8==0 |  |
| 440 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 440 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 440 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 440 | 0 | ROLL>=DIFF | TEMP21=dth(1,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 440 | 0 | ROLL<DIFF | TEMP21=dth(4,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 440 | 0 |  | TEMP17=ROLL; |
| 440 | 0 | RESULT==4 |  |
| 440 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 440 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 440 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 440 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 440 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 440 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 440 | 0 |  | DIFF=DIFF+30 |
| 440 | 0 |  | DIFF=60+dth(4,40) |
| 440 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 440 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 440 | 10 |  |  |
| 440 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 440 | 0 |  | ROLL=ROLL+50; TEMP19=ROLL; |
| 441 | 0 | ROLL>=DIFF | RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5; |
| 441 | 0 | ZONEKEY.danger>100 | ZONEKEY.danger=100 |
| 441 | 0 | ZONEKEY.unrest>100 | ZONEKEY.unrest=100 |
| 441 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10); | DIFF=DIFF+30 |
| 441 | 0 | ROLL<DIFF | TEMP21=dth(4,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 441 | 20 |  |  |
| 441 | 0 | ROLL>=DIFF | TEMP21=dth(1,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21; |
| 441 | 0 | TEMP3>0 | TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3; |
| 441 | 0 |  | TEMP20=0; TEMP5=0; TEMP6=0; |
| 441 | 0 | TEMP2>0 | TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2; |
| 441 | 0 |  | TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; |
| 441 | 0 |  | ROLL=che(249,1,CHARID,3); TEMP11=ROLL; |
| 441 | 0 | TEMP8==0 |  |
| 441 | 0 |  | TEMP17=ROLL; |
| 441 | 0 | REGKEY.enforcement>40 | TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL; |
| 441 | 0 |  | TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20; |
| 441 | 0 | TEMP8>0 | TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12; |
| 441 | 0 |  | TEMP5=TEMP5*2 |
| 441 | 0 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP1=TEMP5/3; |
| 441 | 0 | dth(1,100)<GAMEKEY.42 | DIFF=DIFF+20 |
| 441 | 0 | ROLL<DIFF | RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2); |
| 441 | 0 | ROLL<(DIFF-50) | RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4); |
| 441 | 0 |  | DIFF=60+dth(4,40) |
| 441 | 0 | ZONEKEY.education>5 | TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL; |
| 441 | 0 | RESULT==2 |  |
| 441 | 0 | dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10); | DIFF=DIFF+40 |
| 441 | 0 | RESULT==1 |  |
| 441 | 0 | RESULT==4 |  |
| 441 | 0 | RESULT==3 |  |
| 441 | 0 |  | TEMP5=3; TEMP8=10; |
| 441 | 0 |  | DIFF=DIFF+30 |
| 442 | 0 |  | ZONEKEY.rebelManpower=max(0,ZONEKEY.rebelManpower); |
| 442 | 10 |  |  |
| 442 | 101 | TEMP2>66; ZONEKEY.rebelManpower>=120; | exe(346,8,ZONEID,TEMP1,6); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-80; |
| 442 | 0 |  | TEMP1=REGIMESTAT.11; |
| 442 | 0 |  | TEMP2=dth(1,100); |
| 442 | 0 |  | ZONEKEY.rebelManpower=ZONEKEY.rebelManpower*7/10; |
| 442 | 101 | TEMP2<=66; ZONEKEY.rebelManpower<120; | exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-20; |
| 442 | 101 | TEMP2>66; ZONEKEY.rebelManpower<120; | exe(346,8,ZONEID,TEMP1,1); exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-20; |
| 442 | 101 | TEMP2<=66; ZONEKEY.rebelManpower>=120; | exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-40; |
| 443 | 0 |  | ZONEKEY.rebelManpower=ZONEKEY.rebelManpower*7/10; |
| 443 | 101 | TEMP2>66; ZONEKEY.rebelManpower>=120; | exe(346,8,ZONEID,TEMP1,6); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-80; |
| 443 | 0 |  | TEMP2=100 |
| 443 | 101 | TEMP2>66; ZONEKEY.rebelManpower<120; | exe(346,8,ZONEID,TEMP1,1); exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-20; |
| 443 | 101 | TEMP2<=66; ZONEKEY.rebelManpower<120; | exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-20; |
| 443 | 0 |  | ZONEKEY.rebelManpower=max(0,ZONEKEY.rebelManpower); |
| 443 | 0 |  | TEMP1=REGIMESTAT.11; |
| 443 | 101 | TEMP2<=66; ZONEKEY.rebelManpower>=120; | exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-40; |
| 443 | 20 |  |  |
| 444 | 103 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,20) |
| 444 | 100 |  |  |
| 444 | 101 |  | exe(346,5,REGIMEID,30,0) |
| 445 | 201 |  | exe(346,4,REGIMEID,30,0) |
| 445 | 200 |  |  |
| 445 | 203 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,20) |
| 446 | 300 |  |  |
| 446 | 301 |  | exe(346,3,REGIMEID,30,0) |
| 446 | 303 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,20) |
| 447 | 400 |  |  |
| 448 | 100 |  |  |
| 448 | 101 |  | exe(346,5,REGIMEID,30,0) |
| 448 | 103 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,20) |
| 551 | 201 |  | exe(346,4,REGIMEID,30,0) |
| 551 | 203 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 551 | 200 |  |  |
| 552 | 300 |  |  |
| 552 | 301 |  | exe(346,3,REGIMEID,30,0) |
| 552 | 303 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,20) |
| 553 | 400 |  |  |
| 554 | 100 |  |  |
| 554 | 101 |  | exe(346,5,REGIMEID,30,0) |
| 554 | 103 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,20) |
| 555 | 200 |  |  |
| 555 | 201 |  | exe(346,4,REGIMEID,30,0) |
| 555 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,20) |
| 556 | 303 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,20) |
| 556 | 300 |  |  |
| 556 | 301 |  | exe(346,3,REGIMEID,30,0) |
| 557 | 400 |  |  |
| 558 | 103 |  | REGKEY.militia = REGKEY.militia  - (REGKEY.militia * 10/100) |
| 558 | 100 |  |  |
| 559 | 200 |  |  |
| 559 | 203 |  | REGKEY.militia = REGKEY.militia + inv(REGKEY.militia,20) |
| 560 | 300 |  |  |
| 560 | 303 |  | REGKEY.militia = REGKEY.militia + inv(REGKEY.militia,40) |
| 561 | 100 |  |  |
| 561 | 103 |  | REGKEY.militia = REGKEY.militia + inv(REGKEY.militia,20) |
| 562 | 200 |  |  |
| 562 | 203 |  | REGKEY.militia = REGKEY.militia  - (REGKEY.militia * 20/100) |
| 563 | 100 |  |  |
| 563 | 103 |  | REGKEY.militia = REGKEY.militia + inv(REGKEY.militia,20) |
| 564 | 200 |  |  |
| 564 | 203 |  | REGKEY.militia = REGKEY.militia  - (REGKEY.militia * 20/100) |
| 565 | 101 |  | exe(346,5,REGIMEID,TEMP1,0) |
| 565 | 100 |  |  |
| 566 | 200 |  |  |
| 566 | 201 |  | exe(346,5,REGIMEID,(TEMP2),0) |
| 567 | 100 |  |  |
| 567 | 101 |  | exe(346,6,REGIMEID,TEMP1,0) |
| 568 | 200 |  |  |
| 568 | 201 |  | exe(346,6,REGIMEID,TEMP2,0) |
| 569 | 100 |  |  |
| 569 | 101 |  | REGIMEKEY.murderInvestigation=ROUND |
| 570 | 200 |  |  |
| 570 | 201 |  | REGIMEKEY.murderInvestigation=0 |
| 571 | 300 |  |  |
| 571 | 301 |  | REGIMEKEY.murderInvestigationStopped=1 |
| 572 | 101 |  | REGIMEKEY.murderProgress=5000; |
| 572 | 100 |  |  |
| 573 | 201 |  | REGIMEKEY.murderInvestigation=-1; |
| 573 | 200 |  |  |
| 574 | 300 |  |  |
| 575 | 100 |  |  |
| 575 | 101 |  | exe(346,4,REGIMEID,-40); REGKEY.votePop=0; |
| 576 | 200 |  |  |
| 577 | 100 |  |  |
| 577 | 101 |  | exe(346,3,REGIMEID,-40); REGKEY.voteWorker=0; |
| 578 | 200 |  |  |
| 579 | 100 |  |  |
| 579 | 101 |  | exe(346,9,REGIMEID,-20);exe(346,5,REGIMEID,-20); REGKEY.voteSoldier=0; |
| 580 | 200 |  |  |
| 581 | 100 |  |  |
| 581 | 101 |  | exe(346,4,REGIMEID,40); REGKEY.votePop=1; |
| 582 | 200 |  |  |
| 583 | 100 |  |  |
| 583 | 101 |  | exe(346,3,REGIMEID,40); REGKEY.voteWorker=1; |
| 584 | 200 |  |  |
| 585 | 100 |  |  |
| 585 | 101 |  | exe(346,9,REGIMEID,20);exe(346,5,REGIMEID,20); REGKEY.voteSoldier=1; |
| 586 | 200 |  |  |
| 587 | 101 |  | REGKEY.voteLeader=0; |
| 587 | 100 |  |  |
| 588 | 200 |  |  |
| 589 | 100 |  |  |
| 589 | 101 |  | REGKEY.voteLeader=1; |
| 590 | 200 |  |  |
| 591 | 100 |  |  |
| 591 | 101 |  | REGKEY.voteSystem=1; |
| 592 | 200 |  |  |
| 593 | 101 |  | REGKEY.voteSystem=0; |
| 593 | 100 |  |  |
| 594 | 200 |  |  |
| 595 | 100 |  |  |
| 595 | 101 |  | exe(346,2,TARGETREGIMESLOT,SOURCEREGIMESLOT); TEMP1=chk(249,33,TARGETREGIMEID,0); TEMP2=chk(249,34,TEMP1); TEMP3=chk(249,35,2,TEMP2,12); REGKEY.mapPromisesDemandType=2; REGKEY.mapPromisesDemandID=TEMP3; |
| 595 | 103 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 596 | 204 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 596 | 200 |  |  |
| 596 | 201 |  | REGKEY.mapPromisesDemandType=0; REGKEY.mapPromisesDemandID=0; |
| 596 | 203 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 5/100) |
| 597 | 101 |  | TEMP3=chk(249,35,3,REGKEY.mapPromisesHex,6); REGKEY.mapPromisesDemandType=3; REGKEY.mapPromisesDemandID=TEMP3; |
| 597 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 597 | 100 |  |  |
| 598 | 200 |  |  |
| 598 | 201 |  | REGKEY.mapPromisesDemandType=0; REGKEY.mapPromisesDemandID=0; |
| 598 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 5/100) |
| 598 | 204 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 599 | 100 |  |  |
| 599 | 101 |  | exe(346,2,TARGETREGIMESLOT,SOURCEREGIMESLOT); exe(346,8,REGKEY.mapPromisesZoneId,REGIMEID,1); exe(346,8,REGKEY.mapPromisesZoneId,REGIMEID,1); TEMP1=chk(249,33,TARGETREGIMEID,0); TEMP2=chk(249,34,TEMP1); TEMP3=chk(249,35,2,TEMP2,8); REGKEY.mapPromisesDemandType=3; REGKEY.mapPromisesDemandID=TEMP3; |
| 599 | 103 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 599 | 104 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 600 | 204 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 600 | 203 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 5/100) |
| 600 | 200 |  |  |
| 600 | 201 |  | REGKEY.mapPromisesDemandType=0; REGKEY.mapPromisesDemandID=0; |
| 601 | 100 |  |  |
| 601 | 101 |  | TEMP3=chk(249,35,3,REGKEY.mapPromisesHex,6); REGKEY.mapPromisesDemandType=4; REGKEY.mapPromisesDemandID=TEMP3; exe(346,44,REGKEY.mapPromisesHex,REGIMEID,8,GAMEKEY.39); |
| 601 | 102 | dth(1,100)<50; | exe(346,44,REGKEY.mapPromisesHex,REGIMEID,8,GAMEKEY.39); |
| 601 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 601 | 104 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 602 | 204 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 602 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 5/100) |
| 602 | 200 |  |  |
| 602 | 201 |  | REGKEY.mapPromisesDemandType=0; REGKEY.mapPromisesDemandID=0; |
| 603 | 100 |  |  |
| 603 | 101 |  | TEMP3=chk(249,35,91,TARGETREGIMEID,12); REGKEY.mapPromisesDemandType=91; REGKEY.mapPromisesRegID=TARGETREGIMEID; REGKEY.mapPromisesDemandID=TEMP3; |
| 603 | 103 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,5) |
| 603 | 104 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 604 | 204 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 604 | 200 |  |  |
| 604 | 201 |  | REGKEY.mapPromisesDemandType=0; REGKEY.mapPromisesDemandID=0; |
| 604 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 605 | 100 |  |  |
| 605 | 101 |  | TEMP1=REGKEY.mapPromisesHex; TEMP3=chk(249,35,2,TEMP1,7); REGKEY.mapPromisesDemandType=2; REGKEY.mapPromisesDemandID=TEMP3; exe(346,1,40,13,3); REGKEY.mapPromisesCharId=chk(249,13); |
| 605 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 605 | 104 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 606 | 201 |  | REGKEY.mapPromisesDemandType=0; REGKEY.mapPromisesDemandID=0; |
| 606 | 203 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 5/100) |
| 606 | 200 |  |  |
| 606 | 204 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 607 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 607 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 607 | 103 | ROLL<DIFF | REVREGREGKEY.aiStoryMode=3; |
| 607 | 102 | ROLL>=DIFF |  |
| 607 | 101 |  | ROLL=che(249,1,CHARID,6) |
| 607 | 100 |  | DIFF=120 + (STORYMOD.4/2) - REGREGKEY.relation |
| 608 | 200 |  |  |
| 608 | 201 |  | REVREGREGKEY.aiStoryMode=3; |
| 608 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 608 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 609 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 609 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 609 | 103 | ROLL<DIFF |  |
| 609 | 101 |  | ROLL=che(249,1,CHARID,2) |
| 609 | 100 |  | DIFF=max(0,50 + (STORYMOD.3/2) - REGREGKEY.relation) |
| 609 | 102 | ROLL>=DIFF | REVREGREGKEY.aiStoryMode=2; |
| 610 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,20) |
| 610 | 200 |  | DIFF=max(0,(STORYMOD.3/2) - REGREGKEY.relation) |
| 610 | 201 |  | ROLL=che(249,1,CHARID,2) |
| 610 | 202 | ROLL>=DIFF | REVREGREGKEY.aiStoryMode=2; |
| 610 | 203 | ROLL<DIFF |  |
| 610 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,15) |
| 611 | 301 |  |  |
| 611 | 303 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 611 | 300 |  |  |
| 612 | 100 |  | DIFF=100 + (STORYMOD.6/2) - REGREGKEY.relation |
| 612 | 101 |  | ROLL=REGKEY.word + dth(1,00) |
| 612 | 102 | ROLL>=DIFF |  |
| 612 | 103 | ROLL<DIFF | REVREGREGKEY.aiStoryMode=5; |
| 612 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 612 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 613 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 613 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 613 | 200 |  |  |
| 613 | 201 |  | REVREGREGKEY.aiStoryMode=5; |
| 614 | 100 |  |  |
| 614 | 101 |  | REVREGREGKEY.aiStoryMode=3;  REGKEY.morality=REGKEY.morality+10; |
| 614 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 614 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 615 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 615 | 200 |  |  |
| 615 | 201 |  | REGKEY.morality=REGKEY.morality-15; |
| 615 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 616 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 616 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 616 | 103 | ROLL<DIFF | REVREGREGKEY.aiStoryMode=4; |
| 616 | 100 |  | DIFF=80 + (STORYMOD.2/2) + REGKEY.expanseRating |
| 616 | 101 |  | ROLL=che(249,1,CHARID,6) |
| 616 | 102 | ROLL>=DIFF |  |
| 617 | 200 |  |  |
| 617 | 201 |  | REVREGREGKEY.aiStoryMode=4; |
| 617 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 617 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 618 | 100 |  | DIFF=150 - ((STORYMOD.1/2) + REGREGKEY.relation) |
| 618 | 101 |  | ROLL=dth(1,100)+REGKEY.word |
| 618 | 102 | ROLL>=DIFF | REVREGREGKEY.aiStoryMode=1; |
| 618 | 103 | ROLL<DIFF |  |
| 618 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 618 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,20) |
| 619 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 619 | 203 | ROLL<DIFF |  |
| 619 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 619 | 201 |  | ROLL=che(249,1,CHARID,2) |
| 619 | 200 |  | DIFF=200 - ((STORYMOD.1/2) + REGREGKEY.relation) |
| 619 | 202 | ROLL>=DIFF | REVREGREGKEY.aiStoryMode=1; |
| 620 | 300 |  | DIFF=250 - ((STORYMOD.1/2) + REGREGKEY.relation) |
| 620 | 301 |  | ROLL=che(249,1,CHARID,2) |
| 620 | 302 | ROLL>=DIFF | REVREGREGKEY.aiStoryMode=1; |
| 620 | 303 | ROLL<DIFF |  |
| 620 | 303 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,3) |
| 620 | 304 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,3) |
| 621 | 404 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 621 | 403 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 621 | 401 |  |  |
| 621 | 400 |  |  |
| 622 | 100 |  | DIFF=150 + (STORYMOD.2/2) - REGREGKEY.relation |
| 622 | 101 |  | ROLL=che(249,1,CHARID,1) |
| 622 | 102 | ROLL>=DIFF | REVREGREGKEY.relation=REVREGREGKEY.relation+10;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 622 | 103 | ROLL<DIFF | REVREGREGKEY.aiStoryMode=4; |
| 622 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 622 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 623 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,5) |
| 623 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 623 | 203 | ROLL<DIFF | REVREGREGKEY.aiStoryMode=4; |
| 623 | 202 | ROLL>=DIFF | REVREGREGKEY.relation=REVREGREGKEY.relation+5; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 623 | 201 |  | ROLL=che(249,1,CHARID,1) |
| 623 | 200 |  | DIFF=200 + (STORYMOD.2/2) - REGREGKEY.relation |
| 624 | 300 |  |  |
| 624 | 301 |  | REVREGREGKEY.aiStoryMode=4; |
| 624 | 304 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 5/100) |
| 625 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 625 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 625 | 103 | ROLL<DIFF | REVREGREGKEY.aiStoryMode=3; |
| 625 | 101 |  | ROLL=che(249,1,CHARID,1) |
| 625 | 100 |  | DIFF=150 + (STORYMOD.2/2) - REGREGKEY.relation |
| 625 | 102 | ROLL>=DIFF | REVREGREGKEY.relation=REVREGREGKEY.relation+10;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 626 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,5) |
| 626 | 200 |  | DIFF=200 + (STORYMOD.4/2) - REGREGKEY.relation |
| 626 | 201 |  | ROLL=che(249,1,CHARID,1) |
| 626 | 202 | ROLL>=DIFF | REVREGREGKEY.relation=REVREGREGKEY.relation+5; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 626 | 203 | ROLL<DIFF | REVREGREGKEY.aiStoryMode=3; |
| 626 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 627 | 304 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 5/100) |
| 627 | 301 |  | REVREGREGKEY.aiStoryMode=3; |
| 627 | 300 |  |  |
| 628 | 100 |  | DIFF=200 - ((STORYMOD.3/2) + REGREGKEY.relation) |
| 628 | 101 |  | ROLL=che(249,1,CHARID,2) |
| 628 | 102 | ROLL>=DIFF | REVREGREGKEY.relation=REVREGREGKEY.relation+20;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 628 | 103 | ROLL<DIFF |  |
| 628 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 628 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 629 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,5) |
| 629 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 629 | 203 | ROLL<DIFF |  |
| 629 | 202 | ROLL>=DIFF | REVREGREGKEY.relation=REVREGREGKEY.relation+10; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 629 | 201 |  | ROLL=che(249,1,CHARID,2) |
| 629 | 200 |  | DIFF=250 - ((STORYMOD.3/2) + REGREGKEY.relation) |
| 630 | 300 |  |  |
| 630 | 301 |  |  |
| 630 | 303 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 630 | 304 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 631 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 631 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 631 | 101 |  | TARGETREGIMEKEY.credits=TARGETREGIMEKEY.credits+TEMP1;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation+TEMP2);REGREGKEY.relation=REVREGREGKEY.relation;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 631 | 100 |  |  |
| 632 | 200 |  |  |
| 632 | 201 |  |  |
| 632 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 632 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 633 | 100 |  |  |
| 633 | 101 |  | REVREGREGKEY.relation=min(100,REVREGREGKEY.relation+TEMP2);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality+20; |
| 633 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 633 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 634 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 634 | 200 |  |  |
| 634 | 201 |  | REGKEY.morality=REGKEY.morality-20; |
| 635 | 100 |  | DIFF=200 - ((STORYMOD.1/2) + REGREGKEY.relation) |
| 635 | 101 |  | ROLL=che(249,1,CHARID,2) |
| 635 | 102 | ROLL>=DIFF | REVREGREGKEY.relation=REVREGREGKEY.relation+10;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 635 | 103 | ROLL<DIFF |  |
| 635 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 635 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 636 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 636 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 636 | 200 |  |  |
| 636 | 201 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-10); REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 637 | 100 |  |  |
| 637 | 101 |  | REGREGKEY.relation=min(100,REGREGKEY.relation+10); REGREGKEY.relation=min(100,REGREGKEY.relation); REGREGKEY.relation=max(0,REGREGKEY.relation); REVREGREGKEY.relation=REGREGKEY.relation; |
| 637 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 637 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,20) |
| 638 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 638 | 200 |  |  |
| 638 | 201 |  | exe(346,23,REGIMEID,TEMP1,0) |
| 638 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 639 | 300 |  |  |
| 639 | 301 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-10); |
| 639 | 303 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 639 | 304 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 640 | 101 |  | TARGETREGIMEKEY.credits=TARGETREGIMEKEY.credits+TEMP1;REVREGREGKEY.relation=REVREGREGKEY.relation+5; REVREGREGKEY.aiBribeSucces=REVREGREGKEY.aiBribeSucces+1;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 640 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 640 | 100 |  |  |
| 640 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 641 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,20) |
| 641 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,20) |
| 641 | 201 |  | TARGETREGIMEKEY.credits=TARGETREGIMEKEY.credits+TEMP2; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation+10);REGREGKEY.relation=REVREGREGKEY.relation; REVREGREGKEY.aiBribeSucces=REVREGREGKEY.aiBribeSucces+1; |
| 641 | 200 |  |  |
| 642 | 300 |  |  |
| 642 | 301 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-10); REVREGREGKEY.aiBribeFailure=REVREGREGKEY.aiBribeFailure+1; |
| 642 | 303 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 642 | 304 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 643 | 100 |  |  |
| 643 | 101 |  | TARGETREGIMEKEY.credits=TARGETREGIMEKEY.credits+TEMP1;REVREGREGKEY.relation=REVREGREGKEY.relation+TEMP2;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation+5);REGREGKEY.relation=REVREGREGKEY.relation;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality+15; |
| 643 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 643 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 644 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 5/100) |
| 644 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 644 | 200 |  |  |
| 644 | 201 |  | REVREGREGKEY.relation=max(0REVREGREGKEY.relation-10); REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 645 | 100 |  |  |
| 645 | 101 |  | REVREGREGKEY.relation=min(100,REVREGREGKEY.relation+5);REGREGKEY.relation=REVREGREGKEY.relation;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality+15; |
| 645 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 645 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 646 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 5/100) |
| 646 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 646 | 201 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-10); REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 646 | 200 |  |  |
| 647 | 100 |  |  |
| 647 | 101 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-15); exe(346,23,REGIMEID,TEMP2,0);REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 647 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 647 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 648 | 200 |  |  |
| 648 | 201 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-15); REGIMEKEY.credits=REGIMEKEY.credits+TEMP1; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 648 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 649 | 304 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 649 | 303 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 649 | 300 |  |  |
| 649 | 301 |  |  |
| 650 | 100 |  |  |
| 650 | 101 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-15); exe(346,23,REGIMEID,TEMP2,0); REGREGKEY.relation=REVREGREGKEY.relation; |
| 650 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 650 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 650 | 105 |  | REGREGKEY.stratAskHelp=0; |
| 651 | 205 |  | REGREGKEY.stratAskHelp=0; |
| 651 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 651 | 201 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-15); REGIMEKEY.credits=REGIMEKEY.credits+TEMP1; REGREGKEY.relation=REVREGREGKEY.relation; |
| 651 | 200 |  |  |
| 652 | 300 |  |  |
| 652 | 301 |  |  |
| 652 | 303 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 652 | 304 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 652 | 305 |  | REGREGKEY.stratAskHelp=0; |
| 653 | 104 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 653 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 653 | 100 |  |  |
| 653 | 101 |  | TARGETREGIMEKEY.credits=TARGETREGIMEKEY.credits+TEMP1;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation+30);REGREGKEY.relation=REVREGREGKEY.relation; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT,0);REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 654 | 200 |  |  |
| 654 | 201 |  | REVREGREGKEY.relation=min(100,REVREGREGKEY.relation+30);REGREGKEY.relation=REVREGREGKEY.relation; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT,0); |
| 654 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 654 | 204 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY> + inv(REGKEY.<TOPREGKEY>,10) |
| 655 | 304 |  | REGKEY.<TOPREGKEY> = REGKEY.<TOPREGKEY>  - (REGKEY.<TOPREGKEY> * 10/100) |
| 655 | 300 |  |  |
| 655 | 301 |  | REGKEY.morality=REGKEY.morality-10; |
| 655 | 303 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 656 | 101 |  | FACTIONID=TEMP1; FACTIONSUPPORT=FACTIONSUPPORT+150; |
| 656 | 100 |  |  |
| 657 | 200 |  |  |
| 657 | 201 |  | FACTIONID=TEMP2; FACTIONSUPPORT=FACTIONSUPPORT+150; |
| 658 | 300 |  |  |
| 658 | 301 |  | FACTIONID=TEMP3; FACTIONSUPPORT=FACTIONSUPPORT+150; |
| 659 | 100 |  |  |
| 659 | 101 |  | FACTIONID=TEMP1; FACTIONSUPPORT=FACTIONSUPPORT+50; |
| 659 | 105 |  | REGREGKEY.stratSupport=0; |
| 660 | 200 |  |  |
| 660 | 201 |  | FACTIONID=TEMP2; FACTIONSUPPORT=FACTIONSUPPORT+50; |
| 660 | 205 |  | REGREGKEY.stratSupport=0; |
| 661 | 305 |  | REGREGKEY.stratSupport=0; |
| 661 | 300 |  |  |
| 661 | 301 |  | FACTIONID=TEMP3; FACTIONSUPPORT=FACTIONSUPPORT+50; |
| 662 | 104 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 662 | 100 |  |  |
| 662 | 101 |  | ZONEKEY.pop=ZONEKEY.pop+TEMP2; REVREGREGKEY.relation=REVREGREGKEY.relation+10;REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality+20; |
| 662 | 103 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,20) |
| 663 | 203 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 663 | 204 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,20) |
| 663 | 200 |  |  |
| 663 | 201 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-5); REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality-20; |
| 664 | 103 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,20) |
| 664 | 104 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 10/100) |
| 664 | 100 |  |  |
| 664 | 101 |  | REVREGREGKEY.relation=REVREGREGKEY.relation+10; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 665 | 200 |  |  |
| 665 | 201 |  | REVREGREGKEY.relation=REVREGREGKEY.relation+10; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 665 | 203 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 665 | 204 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,20) |
| 666 | 300 |  |  |
| 666 | 301 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-10); |
| 667 | 103 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,20) |
| 667 | 104 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 667 | 100 |  |  |
| 667 | 101 |  | REVREGREGKEY.relation=REVREGREGKEY.relation+10; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 668 | 200 |  |  |
| 668 | 201 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-10); REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 668 | 203 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 10/100) |
| 668 | 204 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 669 | 100 |  |  |
| 669 | 101 |  | REVREGREGKEY.relation=REVREGREGKEY.relation+10; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality-20; |
| 669 | 103 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 20/100) |
| 669 | 104 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 670 | 204 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 670 | 203 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 20/100) |
| 670 | 201 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-10); REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality+10; |
| 670 | 200 |  |  |
| 671 | 100 |  |  |
| 671 | 101 |  | REVREGREGKEY.relation=REVREGREGKEY.relation+10; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality-15; |
| 671 | 103 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 20/100) |
| 671 | 104 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 672 | 203 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 672 | 204 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 20/100) |
| 672 | 200 |  |  |
| 672 | 201 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-10); REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality+25; |
| 673 | 100 |  |  |
| 673 | 101 |  | REVREGREGKEY.relation=REVREGREGKEY.relation+10; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation;  REGKEY.morality=REGKEY.morality-15; |
| 673 | 103 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 673 | 104 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 674 | 204 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 674 | 200 |  |  |
| 674 | 201 |  | REVREGREGKEY.relation=max(0,REVREGREGKEY.relation-10); REVREGREGKEY.relation=min(100,REVREGREGKEY.relation);REVREGREGKEY.relation=max(0,REVREGREGKEY.relation);REGREGKEY.relation=REVREGREGKEY.relation; |
| 674 | 203 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,20) |
| 675 | 103 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 10/100) |
| 675 | 100 |  |  |
| 675 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+12; REGKEY.morality=REGKEY.morality-10; |
| 676 | 200 |  |  |
| 676 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+24; |
| 676 | 203 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 20/100) |
| 677 | 300 |  |  |
| 677 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+6; |
| 677 | 303 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,5) |
| 678 | 403 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 678 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 678 | 400 |  |  |
| 679 | 100 |  |  |
| 679 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+12; REGKEY.morality=REGKEY.morality-10; |
| 679 | 103 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 10/100) |
| 680 | 200 |  |  |
| 680 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+24; |
| 680 | 203 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 20/100) |
| 681 | 303 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,5) |
| 681 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+6; |
| 681 | 300 |  |  |
| 682 | 400 |  |  |
| 682 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 682 | 403 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 683 | 100 |  |  |
| 683 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+12; REGKEY.morality=REGKEY.morality-10; |
| 683 | 103 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 684 | 203 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 20/100) |
| 684 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+24; |
| 684 | 200 |  |  |
| 685 | 300 |  |  |
| 685 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+6; |
| 685 | 303 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,5) |
| 686 | 400 |  |  |
| 686 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 686 | 403 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 687 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+12; REGKEY.morality=REGKEY.morality-10; |
| 687 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 687 | 100 |  |  |
| 688 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+24; |
| 688 | 203 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 20/100) |
| 688 | 200 |  |  |
| 689 | 303 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 689 | 300 |  |  |
| 689 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+6; |
| 690 | 400 |  |  |
| 690 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 690 | 403 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 691 | 100 |  |  |
| 691 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+12; REGKEY.morality=REGKEY.morality-10; |
| 691 | 103 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 692 | 203 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 20/100) |
| 692 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+24; |
| 692 | 200 |  |  |
| 693 | 300 |  |  |
| 693 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+6; |
| 693 | 303 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 694 | 400 |  |  |
| 694 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 694 | 403 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 695 | 103 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 695 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+12; REGKEY.morality=REGKEY.morality-10; |
| 695 | 100 |  |  |
| 696 | 200 |  |  |
| 696 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+24; |
| 696 | 203 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 20/100) |
| 697 | 300 |  |  |
| 697 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+6; |
| 697 | 303 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 698 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 698 | 403 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 698 | 400 |  |  |
| 699 | 100 |  |  |
| 699 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+12; REGKEY.morality=REGKEY.morality-10; |
| 699 | 103 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 700 | 200 |  |  |
| 700 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+24; |
| 700 | 203 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 20/100) |
| 701 | 303 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 701 | 300 |  |  |
| 701 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+6; |
| 702 | 403 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 702 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 702 | 400 |  |  |
| 703 | 100 |  |  |
| 703 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+12; REGKEY.morality=REGKEY.morality-10; |
| 703 | 103 |  | REGKEY.mind = REGKEY.mind  - (REGKEY.mind * 10/100) |
| 704 | 200 |  |  |
| 704 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+24; |
| 704 | 203 |  | REGKEY.mind = REGKEY.mind  - (REGKEY.mind * 20/100) |
| 705 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+6; |
| 705 | 303 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 705 | 300 |  |  |
| 706 | 400 |  |  |
| 706 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 706 | 403 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 707 | 100 |  |  |
| 707 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+12; REGKEY.morality=REGKEY.morality-10; |
| 707 | 103 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 708 | 200 |  |  |
| 708 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+24; |
| 708 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 20/100) |
| 709 | 303 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 709 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+6; |
| 709 | 300 |  |  |
| 710 | 400 |  |  |
| 710 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 710 | 403 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 711 | 100 |  |  |
| 711 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 711 | 103 |  | REGKEY.mind = REGKEY.mind  - (REGKEY.mind * 5/100) |
| 712 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 712 | 200 |  |  |
| 712 | 203 |  | REGKEY.mind = REGKEY.mind  - (REGKEY.mind * 10/100) |
| 713 | 300 |  |  |
| 713 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 713 | 303 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,2) |
| 714 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 714 | 403 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 714 | 400 |  |  |
| 715 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 715 | 103 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 5/100) |
| 715 | 100 |  |  |
| 716 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 716 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 716 | 200 |  |  |
| 717 | 300 |  |  |
| 717 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 717 | 303 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,2) |
| 718 | 400 |  |  |
| 718 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 718 | 403 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 719 | 103 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 5/100) |
| 719 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 719 | 100 |  |  |
| 720 | 200 |  |  |
| 720 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 720 | 203 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 721 | 300 |  |  |
| 721 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 721 | 303 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,2) |
| 722 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 722 | 403 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 722 | 400 |  |  |
| 723 | 100 |  |  |
| 723 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 723 | 103 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 5/100) |
| 724 | 200 |  |  |
| 724 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 724 | 203 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 725 | 303 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,2) |
| 725 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 725 | 300 |  |  |
| 726 | 400 |  |  |
| 726 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 726 | 403 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 727 | 100 |  |  |
| 727 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 727 | 103 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 5/100) |
| 728 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 728 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 728 | 200 |  |  |
| 729 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 729 | 303 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,2) |
| 729 | 300 |  |  |
| 730 | 400 |  |  |
| 730 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 730 | 403 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 731 | 100 |  |  |
| 731 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 731 | 103 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 5/100) |
| 732 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 732 | 203 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 732 | 200 |  |  |
| 733 | 300 |  |  |
| 733 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 733 | 303 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,2) |
| 734 | 400 |  |  |
| 734 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 734 | 403 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 735 | 100 |  |  |
| 735 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 735 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,2) |
| 736 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 736 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 736 | 200 |  |  |
| 737 | 300 |  |  |
| 737 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 737 | 303 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 5/100) |
| 738 | 400 |  |  |
| 738 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 738 | 403 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 739 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 739 | 100 |  |  |
| 739 | 103 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 5/100) |
| 740 | 200 |  |  |
| 740 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 740 | 203 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 741 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 741 | 303 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,2) |
| 741 | 300 |  |  |
| 742 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 742 | 403 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 742 | 400 |  |  |
| 743 | 103 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,2) |
| 743 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 743 | 100 |  |  |
| 744 | 200 |  |  |
| 744 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 744 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 745 | 300 |  |  |
| 745 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 745 | 303 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 5/100) |
| 746 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 746 | 403 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 746 | 400 |  |  |
| 747 | 100 |  |  |
| 747 | 101 |  | ZONEKEY.unrest=ZONEKEY.unrest+6; REGKEY.morality=REGKEY.morality-10; |
| 747 | 103 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 5/100) |
| 748 | 200 |  |  |
| 748 | 201 |  | CHARREL=CHARREL+inv(CHARREL,10,100); ZONEKEY.unrest=ZONEKEY.unrest+12; |
| 748 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 749 | 303 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,2) |
| 749 | 300 |  |  |
| 749 | 301 |  | CHARREL=CHARREL*80 /100; ZONEKEY.unrest=ZONEKEY.unrest+2; |
| 750 | 403 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 750 | 401 |  | CHARREL=CHARREL*60 /100; REGKEY.morality=REGKEY.morality+10; |
| 750 | 400 |  |  |
| 751 | 100 |  |  |
| 751 | 101 |  | REGKEY.resignDecision=ROUND+1 |
| 752 | 200 |  |  |
| 753 | 100 |  |  |
| 753 | 101 |  | REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; |
| 753 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 753 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation + inv(REGKEY.syndicate_relation,20) |
| 754 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 10/100) |
| 754 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 754 | 200 |  |  |
| 755 | 100 |  |  |
| 755 | 101 |  | REGKEY.syndicate_deal=2; |
| 755 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 30/100) |
| 755 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation + inv(REGKEY.syndicate_relation,20) |
| 756 | 200 |  |  |
| 756 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 756 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 10/100) |
| 757 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation + inv(REGKEY.syndicate_relation,20) |
| 757 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 15/100) |
| 757 | 100 |  |  |
| 757 | 101 |  | REGKEY.syndicate_deal=1; |
| 758 | 200 |  |  |
| 758 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 758 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 10/100) |
| 759 | 100 |  |  |
| 759 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 5/100) |
| 759 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 10/100) |
| 760 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 30/100) |
| 760 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 760 | 200 |  |  |
| 761 | 100 |  |  |
| 761 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 5/100) |
| 761 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 20/100) |
| 762 | 200 |  |  |
| 762 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 762 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 40/100) |
| 763 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 20/100) |
| 763 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 5/100) |
| 763 | 100 |  |  |
| 764 | 200 |  |  |
| 764 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 764 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 40/100) |
| 765 | 100 |  |  |
| 765 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 5/100) |
| 765 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation + inv(REGKEY.syndicate_relation,10) |
| 766 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 10/100) |
| 766 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 766 | 200 |  |  |
| 767 | 100 |  |  |
| 767 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 5/100) |
| 767 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation + inv(REGKEY.syndicate_relation,20) |
| 768 | 200 |  |  |
| 768 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 768 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 10/100) |
| 769 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 5/100) |
| 769 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 20/100) |
| 769 | 100 |  |  |
| 770 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 770 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 40/100) |
| 770 | 200 |  |  |
| 771 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation + inv(REGKEY.syndicate_relation,20) |
| 771 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 771 | 101 |  | REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; |
| 771 | 100 |  |  |
| 772 | 200 |  |  |
| 772 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 772 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 10/100) |
| 773 | 100 |  |  |
| 773 | 101 |  | REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; |
| 773 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 15/100) |
| 773 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation + inv(REGKEY.syndicate_relation,15) |
| 774 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 15/100) |
| 774 | 200 |  |  |
| 774 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,15) |
| 775 | 100 |  |  |
| 775 | 101 |  | REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; |
| 775 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 775 | 104 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation + inv(REGKEY.syndicate_relation,30) |
| 776 | 204 |  | REGKEY.syndicate_relation = REGKEY.syndicate_relation  - (REGKEY.syndicate_relation * 15/100) |
| 776 | 200 |  |  |
| 776 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 777 | 105 |  | REGKEY.corp_meeting=0; |
| 777 | 100 |  |  |
| 777 | 101 |  | REGKEY.corp_relation=min(100,REGKEY.corp_relation+3); |
| 778 | 200 |  |  |
| 778 | 201 |  | exe(346,33,100202,REGIMEID,1); |
| 778 | 203 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 778 | 205 |  | REGKEY.corp_meeting=0; |
| 779 | 305 |  | REGKEY.corp_meeting=0; |
| 779 | 300 |  |  |
| 779 | 301 |  | REGKEY.corp_tax=REGKEY.corp_tax+20; REGKEY.corp_relation=max(0,REGKEY.corp_relation-20); |
| 779 | 303 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 20/100) |
| 779 | 304 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 780 | 400 |  |  |
| 780 | 401 |  | REGKEY.corp_tax=REGKEY.corp_tax-20; REGKEY.corp_relation=min(100,REGKEY.corp_relation+20); |
| 780 | 403 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 780 | 404 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 780 | 405 |  | REGKEY.corp_meeting=0; |
| 781 | 101 |  | REGKEY.corp_relation=min(100,REGKEY.corp_relation+20); REGKEY.corp_capital=REGKEY.corp_capital+TEMP2; |
| 781 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 781 | 100 |  |  |
| 782 | 203 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 3/100) |
| 782 | 200 |  |  |
| 782 | 201 |  | REGKEY.corp_relation=max(0,REGKEY.corp_relation-10); |
| 783 | 100 |  |  |
| 783 | 101 |  | REGKEY.corp_relation=min(100,REGKEY.corp_relation+10); REGKEY.corp_toughness=min(200,REGKEY.corp_toughness+10); REGKEY.corp_enforcement=min(200,REGKEY.corp_enforcement+10); |
| 783 | 103 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 784 | 200 |  |  |
| 784 | 201 |  | REGKEY.corp_relation=max(0,REGKEY.corp_relation-5); |
| 784 | 203 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 5/100) |
| 785 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 785 | 101 |  | REGKEY.corp_relation=min(100,REGKEY.corp_relation+5); REGKEY.corp_mind=min(200,REGKEY.corp_mind+20); |
| 785 | 100 |  |  |
| 786 | 200 |  |  |
| 786 | 201 |  | REGKEY.corp_relation=min(100,REGKEY.corp_relation+5); REGKEY.corp_fist=min(200,REGKEY.corp_fist+20); |
| 786 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 787 | 300 |  |  |
| 787 | 301 |  | REGKEY.corp_relation=min(100,REGKEY.corp_relation+5); REGKEY.corp_savy=min(300,REGKEY.corp_savy+20); |
| 787 | 303 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 787 | 304 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,5) |
| 788 | 403 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 788 | 400 |  |  |
| 788 | 401 |  | REGKEY.corp_relation=max(0,REGKEY.corp_relation-5); |
| 789 | 100 |  |  |
| 789 | 101 |  | REGKEY.corp_relation=min(100,REGKEY.corp_relation+10); REGKEY.corp_capital=REGKEY.corp_capital+TEMP2; |
| 789 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 789 | 104 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 5/100) |
| 790 | 204 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 790 | 200 |  |  |
| 790 | 201 |  | REGKEY.corp_relation=max(0,REGKEY.corp_relation-10); REGKEY.corp_greed=min(100,REGKEY.corp_greed+20); |
| 790 | 203 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 3/100) |
| 791 | 100 |  |  |
| 791 | 101 |  | REGKEY.corp_relation=min(100,REGKEY.corp_relation+10); |
| 791 | 103 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 791 | 104 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 792 | 201 |  | REGKEY.corp_relation=max(0,REGKEY.corp_relation-10); ZONEKEY.danger=min(100,ZONEKEY.danger+TEMP2); |
| 792 | 203 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 792 | 200 |  |  |
| 792 | 204 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 5/100) |
| 793 | 101 |  | REGKEY.corp_relation=max(0,REGKEY.corp_relation-10); |
| 793 | 100 |  |  |
| 794 | 203 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,20) |
| 794 | 200 |  |  |
| 794 | 201 |  | REGKEY.corp_tax=REGKEY.corp_tax-20; REGKEY.corp_relation=min(100,REGKEY.corp_relation+30); |
| 795 | 100 |  |  |
| 795 | 105 |  | REGKEY.cult1_meeting=0; REGKEY.cult1_policy=TEMP1; |
| 795 | 106 |  | REGKEY.cult1_relation=TEMP2; |
| 796 | 205 |  | REGKEY.cult1_meeting=0; REGKEY.cult1_policy=TEMP1; |
| 796 | 204 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 796 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,10) |
| 796 | 206 |  | REGKEY.cult1_relation=TEMP2; |
| 796 | 201 |  | TEMP1=TEMP1-1 |
| 796 | 200 |  |  |
| 796 | 202 |  | TEMP2=min(100,TEMP2+20) |
| 797 | 300 |  |  |
| 797 | 301 |  | TEMP1=TEMP1+1 |
| 797 | 302 |  | TEMP2=TEMP2*80/100 |
| 797 | 303 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 797 | 304 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 10/100) |
| 797 | 305 |  | REGKEY.cult1_meeting=0; REGKEY.cult1_policy=TEMP1; |
| 797 | 306 |  | REGKEY.cult1_relation=TEMP2; |
| 798 | 405 |  | REGKEY.cult1_meeting=0; REGKEY.cult1_policy=TEMP1; |
| 798 | 406 |  | REGKEY.cult1_relation=TEMP2; |
| 798 | 404 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 10/100) |
| 798 | 400 |  |  |
| 798 | 402 |  | TEMP2=TEMP2*50/100 |
| 798 | 401 |  | TEMP1=3 |
| 798 | 403 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 10/100) |
| 799 | 100 |  |  |
| 799 | 105 |  | REGKEY.cult2_meeting=0; REGKEY.cult2_policy=TEMP1; |
| 799 | 106 |  | REGKEY.cult2_relation=TEMP2; |
| 800 | 200 |  |  |
| 800 | 201 |  | TEMP1=TEMP1-1 |
| 800 | 202 |  | TEMP2=min(100,TEMP2+20) |
| 800 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 800 | 204 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 800 | 205 |  | REGKEY.cult2_meeting=0; REGKEY.cult2_policy=TEMP1; |
| 800 | 206 |  | REGKEY.cult2_relation=TEMP2; |
| 801 | 305 |  | REGKEY.cult2_meeting=0; REGKEY.cult2_policy=TEMP1; |
| 801 | 306 |  | REGKEY.cult2_relation=TEMP2; |
| 801 | 304 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 10/100) |
| 801 | 302 |  | TEMP2=TEMP2*80/100 |
| 801 | 301 |  | TEMP1=TEMP1+1 |
| 801 | 300 |  |  |
| 801 | 303 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 802 | 400 |  |  |
| 802 | 401 |  | TEMP1=3 |
| 802 | 402 |  | TEMP2=TEMP2*50/100 |
| 802 | 403 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 10/100) |
| 802 | 404 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 10/100) |
| 802 | 405 |  | REGKEY.cult2_meeting=0; REGKEY.cult2_policy=TEMP1; |
| 802 | 406 |  | REGKEY.cult2_relation=TEMP2; |
| 803 | 100 |  |  |
| 803 | 105 |  | REGKEY.cult3_meeting=0; REGKEY.cult3_policy=TEMP1; |
| 803 | 106 |  | REGKEY.cult3_relation=TEMP2; |
| 804 | 205 |  | REGKEY.cult3_meeting=0; REGKEY.cult3_policy=TEMP1; |
| 804 | 206 |  | REGKEY.cult3_relation=TEMP2; |
| 804 | 204 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,10) |
| 804 | 203 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 804 | 202 |  | TEMP2=min(100,TEMP2+20) |
| 804 | 201 |  | TEMP1=TEMP1-1 |
| 804 | 200 |  |  |
| 805 | 306 |  | REGKEY.cult3_relation=TEMP2; |
| 805 | 304 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 805 | 303 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 10/100) |
| 805 | 305 |  | REGKEY.cult3_meeting=0; REGKEY.cult3_policy=TEMP1; |
| 805 | 301 |  | TEMP1=TEMP1+1 |
| 805 | 300 |  |  |
| 805 | 302 |  | TEMP2=TEMP2*80/100 |
| 806 | 405 |  | REGKEY.cult3_meeting=0; REGKEY.cult3_policy=TEMP1; |
| 806 | 400 |  |  |
| 806 | 401 |  | TEMP1=3 |
| 806 | 402 |  | TEMP2=TEMP2*50/100 |
| 806 | 403 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 10/100) |
| 806 | 404 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 10/100) |
| 806 | 406 |  | REGKEY.cult3_relation=TEMP2; |
| 807 | 105 |  | REGKEY.cult4_meeting=0; REGKEY.cult4_policy=TEMP1; |
| 807 | 100 |  |  |
| 807 | 106 |  | REGKEY.cult4_relation=TEMP2; |
| 808 | 204 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 808 | 205 |  | REGKEY.cult4_meeting=0; REGKEY.cult4_policy=TEMP1; |
| 808 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 808 | 206 |  | REGKEY.cult4_relation=TEMP2; |
| 808 | 201 |  | TEMP1=TEMP1-1 |
| 808 | 200 |  |  |
| 808 | 202 |  | TEMP2=min(100,TEMP2+20) |
| 809 | 300 |  |  |
| 809 | 301 |  | TEMP1=TEMP1+1 |
| 809 | 302 |  | TEMP2=TEMP2*80/100 |
| 809 | 303 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 809 | 304 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 10/100) |
| 809 | 305 |  | REGKEY.cult4_meeting=0; REGKEY.cult4_policy=TEMP1; |
| 809 | 306 |  | REGKEY.cult4_relation=TEMP2; |
| 810 | 406 |  | REGKEY.cult4_relation=TEMP2; |
| 810 | 405 |  | REGKEY.cult4_meeting=0; REGKEY.cult4_policy=TEMP1; |
| 810 | 404 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 10/100) |
| 810 | 401 |  | TEMP1=3 |
| 810 | 402 |  | TEMP2=TEMP2*50/100 |
| 810 | 400 |  |  |
| 810 | 403 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 811 | 100 |  |  |
| 811 | 105 |  | REGKEY.cult5_meeting=0; REGKEY.cult5_policy=TEMP1; |
| 811 | 106 |  | REGKEY.cult5_relation=TEMP2; |
| 812 | 205 |  | REGKEY.cult5_meeting=0; REGKEY.cult5_policy=TEMP1; |
| 812 | 206 |  | REGKEY.cult5_relation=TEMP2; |
| 812 | 204 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 812 | 200 |  |  |
| 812 | 202 |  | TEMP2=min(100,TEMP2+20) |
| 812 | 201 |  | TEMP1=TEMP1-1 |
| 812 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,10) |
| 813 | 306 |  | REGKEY.cult5_relation=TEMP2; |
| 813 | 304 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 813 | 303 |  | REGKEY.mind = REGKEY.mind  - (REGKEY.mind * 10/100) |
| 813 | 305 |  | REGKEY.cult5_meeting=0; REGKEY.cult5_policy=TEMP1; |
| 813 | 301 |  | TEMP1=TEMP1+1 |
| 813 | 300 |  |  |
| 813 | 302 |  | TEMP2=TEMP2*80/100 |
| 814 | 406 |  | REGKEY.cult5_relation=TEMP2; |
| 814 | 400 |  |  |
| 814 | 401 |  | TEMP1=3 |
| 814 | 402 |  | TEMP2=TEMP2*50/100 |
| 814 | 403 |  | REGKEY.mind = REGKEY.mind  - (REGKEY.mind * 10/100) |
| 814 | 404 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 814 | 405 |  | REGKEY.cult5_meeting=0; REGKEY.cult5_policy=TEMP1; |
| 815 | 106 |  | REGKEY.cult6_relation=TEMP2; |
| 815 | 105 |  | REGKEY.cult6_meeting=0; REGKEY.cult6_policy=TEMP1; |
| 815 | 100 |  |  |
| 816 | 200 |  |  |
| 816 | 201 |  | TEMP1=TEMP1-1 |
| 816 | 202 |  | TEMP2=min(100,TEMP2+20) |
| 816 | 203 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 816 | 204 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,10) |
| 816 | 205 |  | REGKEY.cult6_meeting=0; REGKEY.cult6_policy=TEMP1; |
| 816 | 206 |  | REGKEY.cult6_relation=TEMP2; |
| 817 | 306 |  | REGKEY.cult6_relation=TEMP2; |
| 817 | 305 |  | REGKEY.cult6_meeting=0; REGKEY.cult6_policy=TEMP1; |
| 817 | 304 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 817 | 300 |  |  |
| 817 | 302 |  | TEMP2=TEMP2*80/100 |
| 817 | 301 |  | TEMP1=TEMP1+1 |
| 817 | 303 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 818 | 404 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 10/100) |
| 818 | 405 |  | REGKEY.cult6_meeting=0; REGKEY.cult6_policy=TEMP1; |
| 818 | 403 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 818 | 406 |  | REGKEY.cult6_relation=TEMP2; |
| 818 | 401 |  | TEMP1=3 |
| 818 | 400 |  |  |
| 818 | 402 |  | TEMP2=TEMP2*50/100 |
| 819 | 100 |  |  |
| 819 | 101 |  | TEMP2=TEMP2*90/100 |
| 819 | 103 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 5/100) |
| 819 | 104 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 5/100) |
| 819 | 105 |  | REGKEY.cult1_relation=TEMP2; |
| 819 | 106 |  | REGKEY.cult1_strength=TEMP3; |
| 820 | 206 |  | REGKEY.cult1_strength=TEMP3; |
| 820 | 205 |  | REGKEY.cult1_relation=TEMP2; |
| 820 | 204 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,5) |
| 820 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 820 | 200 |  |  |
| 820 | 201 |  | TEMP2=min(100,TEMP2+30); TEMP3=min(200,TEMP3+30); ZONEKEY.pop=ZONEKEY.pop-TEMP4; |
| 821 | 100 |  |  |
| 821 | 101 |  | TEMP2=TEMP2*90/100 |
| 821 | 103 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 5/100) |
| 821 | 104 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 5/100) |
| 821 | 105 |  | REGKEY.cult2_relation=TEMP2; |
| 821 | 106 |  | REGKEY.cult2_strength=TEMP3; |
| 822 | 205 |  | REGKEY.cult2_relation=TEMP2; |
| 822 | 206 |  | REGKEY.cult2_strength=TEMP3; |
| 822 | 204 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,5) |
| 822 | 200 |  |  |
| 822 | 201 |  | TEMP2=min(100,TEMP2+10); TEMP3=min(200,TEMP3+10); |
| 822 | 203 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 823 | 100 |  |  |
| 823 | 101 |  | TEMP2=TEMP2*90/100 |
| 823 | 103 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 5/100) |
| 823 | 104 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 5/100) |
| 823 | 105 |  | REGKEY.cult3_relation=TEMP2; |
| 823 | 106 |  | REGKEY.cult3_strength=TEMP3; |
| 824 | 206 |  | REGKEY.cult3_strength=TEMP3; |
| 824 | 205 |  | REGKEY.cult3_relation=TEMP2; |
| 824 | 204 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 824 | 201 |  | TEMP2=min(100,TEMP2+20); TEMP3=min(200,TEMP3+20); |
| 824 | 200 |  |  |
| 824 | 203 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,5) |
| 825 | 100 |  |  |
| 825 | 101 |  | TEMP2=TEMP2*90/100 |
| 825 | 103 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 5/100) |
| 825 | 104 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 5/100) |
| 825 | 105 |  | REGKEY.cult4_relation=TEMP2; |
| 825 | 106 |  | REGKEY.cult4_strength=TEMP3; |
| 826 | 205 |  | REGKEY.cult4_relation=TEMP2; |
| 826 | 206 |  | REGKEY.cult4_strength=TEMP3; |
| 826 | 204 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,5) |
| 826 | 200 |  |  |
| 826 | 201 |  | TEMP2=min(100,TEMP2+30); TEMP3=min(200,TEMP3+30);  ZONEKEY.fear=min(100,ZONEKEY.fear+20); |
| 826 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 827 | 100 |  |  |
| 827 | 101 |  | TEMP2=TEMP2*90/100 |
| 827 | 103 |  | REGKEY.mind = REGKEY.mind  - (REGKEY.mind * 5/100) |
| 827 | 104 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 5/100) |
| 827 | 105 |  | REGKEY.cult5_relation=TEMP2; |
| 827 | 106 |  | REGKEY.cult5_strength=TEMP3; |
| 828 | 206 |  | REGKEY.cult5_strength=TEMP3; |
| 828 | 205 |  | REGKEY.cult5_relation=TEMP2; |
| 828 | 204 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,5) |
| 828 | 200 |  |  |
| 828 | 201 |  | TEMP2=min(100,TEMP2+10); TEMP3=min(200,TEMP3+10); |
| 828 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 829 | 106 |  | REGKEY.cult6_strength=TEMP3; |
| 829 | 105 |  | REGKEY.cult6_relation=TEMP2; |
| 829 | 104 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 5/100) |
| 829 | 101 |  | TEMP2=TEMP2*90/100 |
| 829 | 100 |  |  |
| 829 | 103 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 5/100) |
| 830 | 200 |  |  |
| 830 | 201 |  | TEMP2=min(100,TEMP2+20); TEMP3=min(200,TEMP3+20); |
| 830 | 203 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 830 | 204 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,5) |
| 830 | 205 |  | REGKEY.cult6_relation=TEMP2; |
| 830 | 206 |  | REGKEY.cult6_strength=TEMP3; |
| 831 | 103 | ZONEKEY.dungeon1_treasure==1 | TEMP1=che(249,8,REGIMEID); exe(346,19,REGIMEID,TEMP1); |
| 831 | 104 | ZONEKEY.dungeon1_treasure==2 | TEMP1=dth(1,3); REGKEY.fp=REGKEY.fp+TEMP1; |
| 831 | 105 | ZONEKEY.dungeon1_treasure==3 | exe(346,38,REGID,401,0) |
| 831 | 106 | ZONEKEY.dungeon1_treasure==4 | TEMP1=dth(2,4); exe(346,11,ZONEID,14,TEMP1); |
| 831 | 107 | ZONEKEY.dungeon1_danger==2 | ZONEKEY.disease1=1; |
| 831 | 110 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 831 | 102 |  | ZONEKEY.dungeon1=4; TEMP1=0; |
| 832 | 204 | ROLL>=DIFF; ZONEKEY.dungeon1_danger==1; |  |
| 832 | 205 | ROLL>=DIFF; ZONEKEY.dungeon1_danger==2; |  |
| 832 | 210 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 832 | 203 | ROLL<DIFF |  |
| 832 | 201 |  | ROLL=che(249,1,CHARID,25) |
| 832 | 200 |  | DIFF=100+dth(1,50) |
| 832 | 202 |  | ZONEKEY.dungeon1=2;  ZONEKEY.dungeon1_turn=ROUND; |
| 833 | 302 |  | ZONEKEY.dungeon1=2;  ZONEKEY.dungeon1_turn=ROUND; |
| 833 | 310 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,2) |
| 834 | 402 |  | ZONEKEY.dungeon1=3 |
| 834 | 410 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 835 | 103 |  | REGKEY.morality=REGKEY.morality-20; |
| 835 | 110 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,3) |
| 835 | 102 |  | ZONEKEY.disease1_sleep=1; |
| 836 | 200 |  | DIFF=50+ZONEKEY.disease1_virality |
| 836 | 201 |  | ROLL=che(249,1,CHARID,14) |
| 836 | 202 |  |  |
| 836 | 203 | ROLL<DIFF |  |
| 836 | 204 | ROLL>=DIFF | ZONEKEY.disease1_virality=ZONEKEY.disease1_virality*dth(2,6)/12; |
| 836 | 210 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,3) |
| 837 | 304 | ROLL>=DIFF | ZONEKEY.disease1_study=1; |
| 837 | 310 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,4) |
| 837 | 303 | ROLL<DIFF |  |
| 837 | 302 |  |  |
| 837 | 301 |  | ROLL=che(249,1,CHARID,22) |
| 837 | 300 |  | DIFF=90+ZONEKEY.disease1_virality-(ZONEKEY.disease1_turns*10) |
| 838 | 402 |  | ZONEKEY.disease1_stage=2; ZONEKEY.disease1_lethality=ZONEKEY.disease1_lethality/2; |
| 838 | 410 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 839 | 502 |  | ZONEKEY.disease1_stage=2; ZONEKEY.disease1_spread=0; |
| 839 | 510 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,8) |
| 840 | 110 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 840 | 107 | ZONEKEY.dungeon1_anger>0 |  |
| 840 | 106 | TEMP1>0 |  |
| 840 | 105 | ROLL>=DIFF | TEMP1=che(249,21,REGIMEID); exe(346,28,REGIMEID,TEMP1); ZONEKEY.dungeon1_danger= ZONEKEY.dungeon1_danger+50; |
| 840 | 103 | ROLL<DIFF | ZONEKEY.dungeon1_anger= ZONEKEY.dungeon1_anger+1; |
| 840 | 102 |  | ZONEKEY.dungeon1=2; ZONEKEY.dungeon1_turn=ROUND; TEMP1=0; |
| 840 | 101 |  | ROLL=che(249,1,CHARID,6) |
| 840 | 100 |  | DIFF=(100 - REGKEY.mind) + (ZONEKEY.dungeon1_danger - ZONEKEY.culture) |
| 840 | 104 | ROLL>=DIFF | ZONEKEY.dungeon1_anger= ZONEKEY.dungeon1_anger-1; |
| 841 | 202 |  | ZONEKEY.dungeon1=2;  ZONEKEY.dungeon1_turn=ROUND; |
| 841 | 210 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,2) |
| 842 | 304 | ROLL>=DIFF | ZONEKEY.dungeon1_dead=1; |
| 842 | 310 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 842 | 303 | ROLL<DIFF | ZONEKEY.dungeon1_anger= ZONEKEY.dungeon1_anger+1; ZONEKEY.dungeon1_dead=0; |
| 842 | 300 |  | DIFF=75 |
| 842 | 301 |  | ROLL=che(249,1,CHARID,23) |
| 842 | 302 |  | ZONEKEY.dungeon1=3;  ZONEKEY.dungeon1_turn=ROUND; |
| 843 | 102 |  | ZONEKEY.militancy=ZONEKEY.militancy*75/100; |
| 843 | 103 |  | exe(346,5,REGIMEID,-10,ZONEID); |
| 843 | 106 |  | ZONEKEY.general1_demand=0; ZONEKEY.general1_timer=0; |
| 843 | 107 |  | ZONEKEY.general1_sleep=1; |
| 843 | 110 |  | REGKEY.militia = REGKEY.militia  - (REGKEY.militia * 5/100) |
| 843 | 111 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,5) |
| 844 | 202 |  | ZONEKEY.general1_demand=0; |
| 844 | 203 |  | TEMP2=dth(3,ZONEKEY.general1_strength); TEMP3=dth(1,ZONEKEY.general1_strength); ZONEKEY.militiaManpower=ZONEKEY.militiaManpower + TEMP2; ZONEKEY.militiaEquipment=ZONEKEY.militiaEquipment + TEMP3; |
| 844 | 205 |  | ZONEKEY.general1_sleep=1; ZONEKEY.general1_timer=0; |
| 844 | 210 |  | REGKEY.militia = REGKEY.militia + inv(REGKEY.militia,5) |
| 844 | 211 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 5/100) |
| 845 | 302 |  | ZONEKEY.general1_sleep=1; |
| 846 | 406 |  | ZONEKEY.general1_sleep=1; |
| 846 | 410 |  | REGKEY.militia = REGKEY.militia + inv(REGKEY.militia,3) |
| 846 | 402 |  | TEMP4=ZONEKEY.general1_strength*2; TEMP4=TEMP4+5; TEMP5=ZONEKEY.general1_strength; TEMP2=inv(ZONEKEY.militancy,TEMP4); TEMP3=dth(1,TEMP5); exe(346,5,REGIMEID,TEMP3,ZONEID); |
| 847 | 500 |  | DIFF=25+ZONEKEY.militancy |
| 847 | 501 |  | ROLL=che(249,1,CHARID,40) |
| 847 | 502 |  |  |
| 847 | 503 | ROLL<DIFF |  |
| 847 | 504 | ROLL>=DIFF |  |
| 847 | 505 | ROLL<DIFF | exe(346,5,REGIMEID,-30,ZONEID); ZONEKEY.militancy=ZONEKEY.militancy*50/100; |
| 847 | 506 |  | ZONEKEY.general1=2; |
| 847 | 510 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 6/100) |
| 847 | 511 |  | REGKEY.militia = REGKEY.militia  - (REGKEY.militia * 15/100) |
| 848 | 111 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 3/100) |
| 848 | 110 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,4) |
| 848 | 106 |  | ZONEKEY.union1_demand=0; |
| 848 | 105 | ROLL>=DIFF |  |
| 848 | 107 |  | ZONEKEY.union1_sleep=1; |
| 848 | 103 | ROLL<DIFF |  |
| 848 | 102 |  |  |
| 848 | 104 | ROLL<DIFF | ZONEKEY.union1_strike=ROUND+1; ZONEKEY.workerhapiness=ZONEKEY.workerhapiness*80/100; |
| 848 | 101 |  | ROLL=che(249,1,CHARID,1) |
| 848 | 100 |  | DIFF=170 - ZONEKEY.workerhapiness |
| 849 | 210 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,4) |
| 849 | 205 |  | ZONEKEY.union1_sleep=1; |
| 849 | 211 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,3) |
| 849 | 203 |  | TEMP2=dth(2,ZONEKEY.union1_strength); TEMP3=inv(ZONEKEY.workerhapiness,TEMP2); ZONEKEY.workerhapiness=ZONEKEY.workerhapiness+TEMP3; |
| 849 | 202 |  | ZONEKEY.union1_demand=0; |
| 849 | 204 |  | ZONEORDERSTAT.2=ZONEORDERSTAT.2+TEMP1; |
| 850 | 302 |  | ZONEKEY.union1_sleep=1; |
| 851 | 410 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,3) |
| 851 | 400 |  | DIFF=240 - (ZONEKEY.workerhapiness * 2) |
| 851 | 401 |  | ROLL=che(249,1,CHARID,6) |
| 851 | 402 |  |  |
| 851 | 403 | ZONEKEY.unrest<1; |  |
| 851 | 404 | ROLL>=DIFF;  ZONEKEY.unrest>0; | TEMP4=ZONEKEY.union1_strength*2; TEMP5=dth(1,TEMP4); TEMP5=min(ZONEKEY.unrest,TEMP5); ZONEKEY.unrest=ZONEKEY.unrest-TEMP5; |
| 851 | 405 | ROLL<DIFF;  ZONEKEY.unrest>0; |  |
| 851 | 406 |  | ZONEKEY.union1_sleep=1; |
| 852 | 507 |  | REGKEY.morality=REGKEY.morality-15; |
| 852 | 506 |  | ZONEKEY.union1=2; |
| 852 | 510 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 4/100) |
| 852 | 505 | ROLL<DIFF | ZONEKEY.workerHapiness=ZONEKEY.workerHapiness*2/3; ZONEKEY.union1_strike=ROUND+2; |
| 852 | 511 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,4) |
| 852 | 503 | ROLL<DIFF |  |
| 852 | 500 |  | DIFF=25+ZONEKEY.militancy |
| 852 | 504 | ROLL>=DIFF |  |
| 852 | 502 |  |  |
| 852 | 501 |  | ROLL=che(249,1,CHARID,40) |
| 853 | 102 |  | ZONEKEY.trader1_sleep=1; |
| 854 | 202 |  | TEMP3=dth(1,20); TEMP4=ZONEKEY.popHapiness*TEMP3/100; ZONEKEY.popHapiness=ZONEKEY.popHapiness-TEMP4; ZONEKEY.pop=ZONEKEY.pop-20; REGKEY.credits=REGKEY.credits+TEMP1; |
| 854 | 203 |  | REGKEY.morality=REGKEY.morality-15; |
| 854 | 206 |  | ZONEKEY.trader1_sleep=1; |
| 854 | 210 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,3) |
| 854 | 211 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 6/100) |
| 855 | 302 |  | TEMP3=dth(2,6); TEMP4=ZONEKEY.popHapiness*TEMP3/100; ZONEKEY.popHapiness=ZONEKEY.popHapiness-TEMP4; ZONEKEY.pop=ZONEKEY.pop+20; |
| 855 | 304 |  | REGKEY.morality=REGKEY.morality-10; |
| 855 | 306 |  | ZONEKEY.trader1_sleep=1; |
| 855 | 310 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,3) |
| 855 | 311 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 3/100) |
| 856 | 404 | ROLL<DIFF |  |
| 856 | 403 | ROLL>=DIFF; | REGKEY.credits=REGKEY.credits+TEMP8; ZONEKEY.trader1_timer=0; |
| 856 | 410 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,3) |
| 856 | 401 |  | ROLL=che(249,1,CHARID,9) |
| 856 | 402 |  |  |
| 856 | 406 |  | ZONEKEY.trader1_sleep=1; |
| 856 | 400 |  | DIFF=max(50,200 - (ZONEKEY.trader1_timer*20)) |
| 857 | 510 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,5) |
| 857 | 500 |  | DIFF=60+dth(1,50); |
| 857 | 501 |  | ROLL=che(249,1,CHARID,40) |
| 857 | 502 |  |  |
| 857 | 503 | ROLL<DIFF | TEMP7=dth(2,10); ZONEKEY.pop=ZONEKEY.pop+ TEMP7; REGKEY.enemySlaver=1; |
| 857 | 504 | ROLL>=DIFF | TEMP7=dth(2,10); ZONEKEY.pop=ZONEKEY.pop+ TEMP7; |
| 857 | 505 |  | REGKEY.morality=REGKEY.morality+20; |
| 857 | 506 |  | ZONEKEY.trader1=2; |
| 857 | 511 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,5) |
| 858 | 102 |  | ZONEKEY.sensei1_sleep=1; |
| 859 | 202 |  | exe(346,1,34,15,TEMP4); |
| 859 | 203 |  | ZONEKEY.sensei1_sleep=1; ZONEKEY.sensei1_timer=0; |
| 859 | 210 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 860 | 302 |  | exe(346,1,52,15,TEMP6); |
| 860 | 303 |  | ZONEKEY.sensei1=2; |
| 860 | 310 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 861 | 102 | ZONEKEY.courtesan1_govid==CHARID; ZONEKEY.courtesan1_timer>0; CHARSTAT.6==10; | TEMP1=1; |
| 861 | 103 | TEMP1<1 |  |
| 861 | 104 |  | ZONEKEY.courtesan1_sleep=1; |
| 862 | 204 | ZONEKEY.courtesan1_govid==CHARID; ZONEKEY.courtesan1_timer>0; CHARSTAT.6==10; | TEMP4=10-ZONEKEY.courtesan1_timer; TEMP4=max(5,TEMP4); CHARSTAT.20=CHARSTAT.20*TEMP4/10; CHARSTAT.19=CHARSTAT.19*TEMP4/10; |
| 862 | 203 |  | ZONEKEY.courtesan1_sleep=1; |
| 862 | 202 |  | exe(346,33,1201,REGIMEID,1); |
| 863 | 102 |  |  |
| 863 | 103 |  |  |
| 863 | 104 |  | ZONEKEY.monster1_sleep=1; |
| 863 | 110 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,5) |
| 864 | 204 | ROLL>=DIFF | ZONEKEY.pop=ZONEKEY.pop-TEMP1; ZONEKEY.monster1=2; |
| 864 | 200 |  | DIFF=50+ZONEKEY.monster1_strengh |
| 864 | 201 |  | ROLL=che(249,1,CHARID,10) |
| 864 | 202 |  | ZONEKEY.monster1_sleep=1; |
| 864 | 203 | ROLL<DIFF | ZONEKEY.monster1=1; ZONEKEY.pop=ZONEKEY.pop-TEMP1; |
| 864 | 205 | ROLL>=DIFF; CHE(249,12,CHARID,2001)<1; | exe(346,20,CHARID,2001); |
| 864 | 206 | ROLL<DIFF; TEMP1<=3; STAT.35>=2; | TEMP2=STAT.35/6; TEMP2+=1;  STAT.35=STAT.35-TEMP2; |
| 864 | 210 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,5) |
| 865 | 102 |  | REGKEY.morality=REGKEY.morality-8; |
| 865 | 104 |  | ZONEKEY.doctor1_sleep=1; |
| 866 | 210 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 4/100) |
| 866 | 206 |  | ZONEKEY.doctor1_sleep=1; ZONEKEY.doctor1=2; |
| 866 | 211 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,4) |
| 866 | 205 | ROLL<DIFF; ZONEKEY.disease1<1; | ZONEKEY.disease1=1; |
| 866 | 204 | ROLL>=DIFF |  |
| 866 | 203 | ROLL<DIFF | exe(346,8,ZONEID, REGIMESTAT.11,13,GAMEKEY.49); exe(346,8,ZONEID, REGIMESTAT.11,13,GAMEKEY.49); |
| 866 | 202 |  |  |
| 866 | 201 |  | ROLL=che(249,1,CHARID,40) |
| 866 | 200 |  | DIFF=25+ZONEKEY.doctor1_strength; |
| 867 | 100 |  |  |
| 867 | 101 |  | TRADEREGKEY.comm=1; TRADEREGKEY.hi=1;TRADEREGKEY.forceContact=0; |
| 867 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,5) |
| 868 | 201 |  | TRADEREGKEY.hi=1; TRADEREGKEY.noMessTill=ROUND+10; TRADEREGKEY.forceContact=0; |
| 868 | 203 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 3/100) |
| 868 | 200 |  |  |
| 869 | 300 |  |  |
| 869 | 301 |  | TRADEREGKEY.hi=1; TRADEREGKEY.noMessTill=ROUND+30; TRADEREGKEY.forceContact=0; |
| 869 | 303 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 870 | 100 |  |  |
| 870 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TEMP1=dth(3,8); TEMP1=TEMP1+(ZONEKEY.pop/20); ZONEKEY.pop=ZONEKEY.pop-TEMP1; |
| 870 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,6) |
| 871 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,6) |
| 871 | 200 |  |  |
| 871 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); TEMP1=dth(2,6); TEMP1=TEMP1+(ZONEKEY.pop/50); ZONEKEY.pop=ZONEKEY.pop-TEMP1; TRADEREGKEY.noFreePop=TRADEREGKEY.noFreePop+1; |
| 872 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+5; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); ZONEKEY.pop=ZONEKEY.pop-TEMP5; TRADEREGKEY.noFreePop=TRADEREGKEY.noFreePop-1; TRADEREGKEY.noFreePop=max(0,TRADEREGKEY.noFreePop); TRADERSTAT.1=TRADERSTAT.1-TEMP3; REGKEY.credits=REGKEY.credits+TEMP3; TRADERSTAT.1=max(0,TRADERSTAT.1); |
| 872 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,4) |
| 872 | 100 |  |  |
| 873 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,3) |
| 873 | 200 |  |  |
| 873 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-3; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); TRADEREGKEY.noFreePop=TRADEREGKEY.noFreePop+1; |
| 874 | 100 |  |  |
| 874 | 101 |  | TEMP7=TEMP5/20; TEMP7=min(5,TEMP7); TRADEREGKEY.relation=TRADEREGKEY.relation+TEMP7; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TRADEREGKEY.noIPsales=TRADEREGKEY.noIPsales-1; TRADEREGKEY.noIPsales=max(0,TRADEREGKEY.noIPsales); TRADERSTAT.1=TRADERSTAT.1-TEMP3; REGKEY.credits=REGKEY.credits+TEMP3; TRADERSTAT.1=max(0,TRADERSTAT.1); TEMP6=0-TEMP5; exe(346,53,ZONEID,8,TEMP6); |
| 874 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,4) |
| 875 | 200 |  |  |
| 875 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-3; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); TRADEREGKEY.noIPsales=TRADEREGKEY.noIPsales+1; |
| 875 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,3) |
| 876 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); |
| 876 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,10) |
| 876 | 100 |  |  |
| 877 | 200 |  |  |
| 877 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); |
| 877 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,7) |
| 878 | 300 |  |  |
| 878 | 301 |  | REGIMEKEY.credits=REGIMEKEY.credits+TEMP1; |
| 878 | 303 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,13) |
| 879 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,12) |
| 879 | 100 |  |  |
| 879 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+dth(4,6); TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TEMP2=chk(238,1); TEMP3=chk(249,44,ZONEID,TRADEID); exe(346,44,TEMP3,TEMP2,8,GAMEKEY.39); exe(346,44,TEMP3,TEMP2,8,GAMEKEY.39); |
| 880 | 203 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,9) |
| 880 | 200 |  |  |
| 880 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); |
| 881 | 100 |  |  |
| 881 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+20; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); exe(346,20,TEMP2,100401); TRADEKEY.currentElderSupport=TRADEKEY.currentElderSupport+dth(1,10); |
| 881 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,14) |
| 882 | 200 |  |  |
| 882 | 203 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,8) |
| 883 | 100 |  |  |
| 883 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+20; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); exe(346,20,TEMP2,100402); |
| 883 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,9) |
| 884 | 200 |  |  |
| 884 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); |
| 884 | 203 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,11) |
| 885 | 100 |  |  |
| 885 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+5; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); REGKEY.stock=REGKEY.stock-1; TRADEKEY.ownstock=TRADEKEY.ownstock+1; TRADERSTAT.1=TRADERSTAT.1-TEMP1; REGKEY.credits=REGKEY.credits+TEMP1; |
| 885 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,8) |
| 886 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-5; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); |
| 886 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,6) |
| 886 | 200 |  |  |
| 887 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,11) |
| 887 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+5; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TRADEREGKEY.stock=TRADEREGKEY.stock+1; TRADEKEY.ownstock=TRADEKEY.ownstock-1; TRADERSTAT.1=TRADERSTAT.1+TEMP1; |
| 887 | 100 |  |  |
| 888 | 200 |  |  |
| 888 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-5; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); |
| 888 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,6) |
| 889 | 100 |  |  |
| 889 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+15; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TRADERSTAT.1=TRADERSTAT.1+TEMP1; TRADEREGKEY.influencePoints=TRADEREGKEY.influencePoints+TEMP3; TRADEKEY.currentElderSupport=TRADEKEY.currentElderSupport+dth(1,10); |
| 889 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,12) |
| 890 | 203 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,6) |
| 890 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+3; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TRADERSTAT.1=TRADERSTAT.1+TEMP3; TRADEREGKEY.influencePoints=TRADEREGKEY.influencePoints+TEMP4; |
| 890 | 200 |  |  |
| 891 | 300 |  |  |
| 891 | 301 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-12; TRADEREGKEY.relation=max(0,TRADEREGKEY.relation); |
| 891 | 302 |  | TRADEKEY.lastAuction=ROUND+dth(3,6); |
| 891 | 303 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,6) |
| 892 | 100 |  |  |
| 892 | 101 |  | TRADEKEY.newElderSupport=TRADEKEY.newElderSupport+TEMP1; TRADEREGKEY.relation=TRADEREGKEY.relation-dth(1,6); TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport+TEMP1; |
| 892 | 103 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,8) |
| 893 | 201 |  | TRADEKEY.currentElderSupport=TRADEKEY.currentElderSupport+TEMP1; TRADEREGKEY.relation=TRADEREGKEY.relation+dth(1,6); TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport-TEMP1; |
| 893 | 203 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 4/100) |
| 893 | 200 |  |  |
| 894 | 100 |  |  |
| 894 | 101 |  | TRADEKEY.newElderSupport=TRADEKEY.newElderSupport+TEMP1; TRADEREGKEY.relation=TRADEREGKEY.relation-dth(1,6); TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport+TEMP1; |
| 894 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,8) |
| 895 | 200 |  |  |
| 895 | 201 |  | TRADEKEY.currentElderSupport=TRADEKEY.currentElderSupport+TEMP1; TRADEREGKEY.relation=TRADEREGKEY.relation+dth(1,6); TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport-TEMP1; |
| 895 | 203 |  | REGKEY.mind = REGKEY.mind  - (REGKEY.mind * 4/100) |
| 896 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,8) |
| 896 | 100 |  |  |
| 896 | 101 |  | TRADEKEY.newElderSupport=TRADEKEY.newElderSupport+TEMP1; TRADEREGKEY.relation=TRADEREGKEY.relation-dth(1,6); TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport+TEMP1; |
| 897 | 203 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 4/100) |
| 897 | 200 |  |  |
| 897 | 201 |  | TRADEKEY.currentElderSupport=TRADEKEY.currentElderSupport+TEMP1; TRADEREGKEY.relation=TRADEREGKEY.relation+dth(1,6); TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport-TEMP1; |
| 898 | 100 |  |  |
| 898 | 101 |  | TRADEKEY.newElderSupport=TRADEKEY.newElderSupport+TEMP1; TRADEREGKEY.relation=TRADEREGKEY.relation-dth(1,6); TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport+TEMP1; |
| 898 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,8) |
| 899 | 201 |  | TRADEKEY.currentElderSupport=TRADEKEY.currentElderSupport+TEMP1; TRADEREGKEY.relation=TRADEREGKEY.relation+dth(1,6); TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport-TEMP1; |
| 899 | 200 |  |  |
| 899 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 4/100) |
| 900 | 103 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,8) |
| 900 | 101 |  | TRADEKEY.currentElderSupport=TRADEKEY.currentElderSupport+TEMP5; TRADEREGKEY.relation=TRADEREGKEY.relation+dth(1,6);  TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport-TEMP5; |
| 900 | 100 |  |  |
| 901 | 200 |  |  |
| 901 | 201 |  | TRADEKEY.newElderSupport=TRADEKEY.newElderSupport+TEMP5; TRADEREGKEY.relation=TRADEREGKEY.relation-dth(1,6); TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); TRADEREGKEY.yourNewElderSupport=TRADEREGKEY.yourNewElderSupport+TEMP5; |
| 901 | 203 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 8/100) |
| 902 | 100 |  |  |
| 902 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-25; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation);  TRADEREGKEY.profileStoryCount= TRADEREGKEY.profileStoryCount+1; |
| 902 | 103 |  | REGKEY.fist = REGKEY.fist  - (REGKEY.fist * 7/100) |
| 903 | 203 |  | REGKEY.fist = REGKEY.fist + inv(REGKEY.fist,7) |
| 903 | 202 | ZONEKEY.pop>5; | ZONEKEY.fear=ZONEKEY.fear+10; ZONEKEY.unrest=ZONEKEY.unrest-10; ZONEKEY.unrest=max(0,ZONEKEY.unrest); |
| 903 | 200 |  |  |
| 903 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); |
| 904 | 100 |  |  |
| 904 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); exe(346,28,REGIMEID,TEMP2); |
| 904 | 103 |  | REGKEY.mind = REGKEY.mind + inv(REGKEY.mind,8) |
| 905 | 203 |  | REGKEY.mind = REGKEY.mind  - (REGKEY.mind * 14/100) |
| 905 | 200 |  |  |
| 905 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation);  TRADEREGKEY.profileStoryCount= TRADEREGKEY.profileStoryCount+1; |
| 906 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP2); ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+TEMP2); TEMP3=chk(249,47,TRADEID,TEMP1); |
| 906 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,13) |
| 906 | 100 |  |  |
| 907 | 200 |  |  |
| 907 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation);  TRADEREGKEY.profileStoryCount= TRADEREGKEY.profileStoryCount+1; ZONEKEY.workerHapiness=max(0,ZONEKEY.workerHapiness-TEMP5); ZONEKEY.popHapiness=max(0,ZONEKEY.popHapiness-TEMP5); |
| 907 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 7/100) |
| 908 | 100 |  |  |
| 908 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); ZONEKEY.workerHapiness=max(0,ZONEKEY.workerHapiness-TEMP2); TRADEREGKEY.profileStoryCount= TRADEREGKEY.profileStoryCount+1; |
| 908 | 103 |  | REGKEY.democracy = REGKEY.democracy  - (REGKEY.democracy * 7/100) |
| 909 | 203 |  | REGKEY.democracy = REGKEY.democracy + inv(REGKEY.democracy,10) |
| 909 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation); ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP2); |
| 909 | 200 |  |  |
| 910 | 100 |  |  |
| 910 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP3; ZONEKEY.pop=ZONEKEY.pop-TEMP2; ZONEKEY.pop=max(ZONEKEY.pop,0); |
| 910 | 103 |  | REGKEY.autocracy = REGKEY.autocracy + inv(REGKEY.autocracy,10) |
| 911 | 200 |  |  |
| 911 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation);  TRADEREGKEY.profileStoryCount= TRADEREGKEY.profileStoryCount+1; Z ZONEKEY.popHapiness=max(0,ZONEKEY.popHapiness-TEMP5); |
| 911 | 203 |  | REGKEY.autocracy = REGKEY.autocracy  - (REGKEY.autocracy * 10/100) |
| 912 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation);  TRADEREGKEY.profileStoryCount= TRADEREGKEY.profileStoryCount+1; |
| 912 | 103 |  | REGKEY.meritocracy = REGKEY.meritocracy + inv(REGKEY.meritocracy,14) |
| 912 | 100 |  |  |
| 913 | 203 |  | REGKEY.meritocracy = REGKEY.meritocracy  - (REGKEY.meritocracy * 12/100) |
| 913 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); REGKEY.credits=REGKEY.credits+TEMP2; REGKEY.mthLeaderRecruit=REGKEY.mthLeaderRecruit+1; |
| 913 | 200 |  |  |
| 914 | 100 |  |  |
| 914 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); REGKEY.credits=REGKEY.credits+TEMP1; |
| 914 | 103 |  | REGKEY.enforcement = REGKEY.enforcement + inv(REGKEY.enforcement,10) |
| 915 | 200 |  |  |
| 915 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation);  TRADEREGKEY.profileStoryCount=TRADEREGKEY.profileStoryCount+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP3; |
| 915 | 203 |  | REGKEY.enforcement = REGKEY.enforcement  - (REGKEY.enforcement * 10/100) |
| 916 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 916 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); ZONEKEY.popCredits=ZONEKEY.popCredits+TEMP1; |
| 916 | 100 |  |  |
| 917 | 200 |  |  |
| 917 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-10; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation);  TRADEREGKEY.profileStoryCount=TRADEREGKEY.profileStoryCount+1; ZONEKEY.popHapiness=max(0,ZONEKEY.popHapiness-TEMP2); |
| 917 | 203 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 918 | 100 |  |  |
| 918 | 101 |  | TRADEREGKEY.relation=TRADEREGKEY.relation+10; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); |
| 918 | 103 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,8) |
| 919 | 201 |  | TRADEREGKEY.relation=TRADEREGKEY.relation-20; TRADEREGKEY.relation=max(-50,TRADEREGKEY.relation);  TRADEREGKEY.profileStoryCount=TRADEREGKEY.profileStoryCount+1; |
| 919 | 203 |  | REGKEY.government = REGKEY.government  - (REGKEY.government * 13/100) |
| 919 | 200 |  |  |
| 920 | 100 |  |  |
| 920 | 101 |  | TRADEKEY.allianceRoundOffer=ROUND; TRADEKEY.AllianceRound=ROUND; TRADEKEY.AllianceLastReview=ROUND; TRADEKEY.AlliancePercentage=0; TRADEKEY.Alliance=REGID; REGKEY.mthAlliance=TRADEID; |
| 920 | 103 |  | REGKEY.commerce = REGKEY.commerce + inv(REGKEY.commerce,10) |
| 921 | 200 |  |  |
| 921 | 201 |  | TRADEKEY.allianceRoundOffer=0; |
| 921 | 203 |  | REGKEY.government = REGKEY.government + inv(REGKEY.government,3) |
| 922 | 303 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 922 | 301 |  | TRADEKEY.allianceRoundOffer=ROUND+20; |
| 922 | 300 |  |  |
| 923 | 100 |  |  |
| 923 | 101 |  | TRADEKEY.AllianceLastReview=ROUND; |
| 924 | 200 |  |  |
| 924 | 201 |  | TRADEKEY.allianceRoundOffer=ROUND+20; TRADEKEY.AllianceLastReview=ROUND; TRADEKEY.Alliance=0; REGKEY.mthLastAlliance=REGKEY.mthAlliance; REGKEY.mthAlliance=0; TRADEKEY.AllianceRound=0; |
| 924 | 203 |  | REGKEY.commerce = REGKEY.commerce  - (REGKEY.commerce * 10/100) |
| 925 | 100 |  |  |
| 925 | 101 |  | TARGETCHARID=che(249,24,TRADEID,1,1004); exe(346,20,TARGETCHARID,100403); |
| 925 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,6) |
| 926 | 200 |  |  |
| 926 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 4/100) |
| 927 | 101 |  | TARGETCHARID=che(249,24,TRADEID,1,1004); exe(346,20,TARGETCHARID,100403); |
| 927 | 100 |  |  |
| 927 | 103 |  | REGKEY.heart = REGKEY.heart + inv(REGKEY.heart,3) |
| 928 | 200 |  |  |
| 928 | 203 |  | REGKEY.heart = REGKEY.heart  - (REGKEY.heart * 2/100) |

