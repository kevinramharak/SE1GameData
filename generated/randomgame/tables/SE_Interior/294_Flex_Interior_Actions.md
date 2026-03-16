## `SE_Interior.'Flex Interior Actions'` (id = `294`)

### Columns (`18`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID | Text 
| `1` | Name | Text 
| `2` | PP Cost | Text 
| `3` | Event Picture | Text 
| `4` | Text | Text 
| `5` | Org ID | Text 
| `6` | Org IF Logic | Text 
| `7` | Target Type | Text 
| `8` | Target IF Logic | Text 
| `9` | Weight SET Logic | Text 
| `10` | BP Cost | Text 
| `11` | Category | Text 
| `12` | Phase | Text 
| `13` | UseHuman | Text 
| `14` | New Col | Text 
| `15` | New Col | Text 
| `16` | New Col | Text 
| `17` | New Col | Text 

### Rows (`17`)

| Card ID | Name | PP Cost | Event Picture | Text | Org ID | Org IF Logic | Target Type | Target IF Logic | Weight SET Logic | BP Cost | Category | Phase | UseHuman | New Col | New Col | New Col | New Col |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|301|Incr Sales Tax|3|4|Increase Sales Tax with +25%|31||0||30|60|4|3|0||||2|
|302|Incr Income Tax|3|5|Increase Income Tax with +10%|31||0||30|60|4|3|0||||2|
|303|Decr Sales Tax|5|6|Decrease Sales Tax with -25%|31|che(249,2,301)>0|0||10|60|4|3|0||||2|
|304|Decr Income Tax|5|7|Decrease Income Tax with -10%|31|che(249,2,302)>0|0||10|60|4|3|0||||2|
|401|Import Tariff Incr|3|8|Increase Import Tariffs with +25% with a specific regime|31||1||15|60|5|4|0||||2|
|402|Import Tariff Decr|3|9|Decrease Import Tariffs with -25% with a specific regime|31|che(249,2,401)>0|1||5|60|5|4|0||||2|
|403|Export Tariff Incr|3|10|Increase Export Tariffs with +25% with a specific regime|31||1||15|60|5|4|0||||2|
|404|Export Tariff Decr|3|11|Decrease Export Tariffs with -25% with a specific regime|31|che(249,2,403)>0|1||5|60|5|4|0||||2|
|501|Recruit Civilian|6-((3*GAMEKEY.characterRecruitmentBonus)/100)|12|Recruit a leader from one of the communities within your borders|31|REGIMEFEAT.101>0|0||10|40|4|5|0||||2|
|502|Recruit Military|8-((4*GAMEKEY.characterRecruitmentBonus)/100)|13|Recruit a commander from one of the units serving you|31||0||10|40|4|5|0|32|||2|
|503|Recruit Special Ops|10-((5*GAMEKEY.characterRecruitmentBonus)/100)|14|Recruit a character that has special ops experience|31|REGIMEFEAT.123>0|0||10|40|4|5|0||||2|
|504|Recruit Talent|20-((10*GAMEKEY.characterRecruitmentBonus)/100)|15|Recruit a young leader that is capable|31|REGIMEFEAT.141>0|0||10|100|4|5|0||||2|
|505|Recruit Senior|20-((10*GAMEKEY.characterRecruitmentBonus)/100)|16|Recruit an older leader with a loads of experience|31||0||10|100|4|5|0||||2|
|551|Recruit Junior|6-((3*GAMEKEY.characterRecruitmentBonus)/100)|12|Recruit a junior Leader. Young, but relatively unskilled.|31||0||20|15|4|5|0|32|||2|
|552|Recruit Merc|40-((10*GAMEKEY.characterRecruitmentBonus)/100)|13|Recruit a Mercenary. Probably at least moderately skilled in the art of war.|31||0||20|15|4|5|0|32|||2|
|562|Increase Rank|10|17|Increase Leader's Rank and pay 5 times more salary.|31||4||30|40|8|5|0||||2|
|563|Decrease Rank|4|18|Decrease Leader's Rank and pay 5 times less salary.|31||4||15|40|8|5|0||||2|

