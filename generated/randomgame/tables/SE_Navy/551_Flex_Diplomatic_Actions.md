## `SE_Navy.'Flex Diplomatic Actions'` (id = `551`)

### Properties

Is linked with library reference: (libId = `551`, libSlot = `30`)

### Columns (`18`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID | Text 
| `1` | Name | Text 
| `2` | PP Cost | Text 
| `3` | Event Picture | Text 
| `4` | Text | Text 
| `5` | Org ID | Text 
| `6` | IF Logic | Text 
| `7` | Target Type | Text 
| `8` | Mouse Over | Text 
| `9` | Weight SET Logic | Text 
| `10` | BP Cost | Text 
| `11` | Category | Text 
| `12` | Phase | Text 
| `13` | Use Human | Text 
| `14` | Org 2 ID | Text 
| `15` | Max in Hand | Text 
| `16` | Never Consumed | Text 
| `17` | New Col | Text 

### Rows (`15`)

| Card ID | Name | PP Cost | Event Picture | Text | Org ID | IF Logic | Target Type | Mouse Over | Weight SET Logic | BP Cost | Category | Phase | Use Human | Org 2 ID | Max in Hand | Never Consumed | New Col |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|100401|Information Contract|8|4|Schedule a meeting to sign an information exchange contract with a Maritime Trading House.|1|chk(249,42,-1,REGIMEID,2)>0|2||100|20|13|14||32|||5|
|100402|Transport Contract|12|7|Schedule meeting with a MTH  to sign a contract for transport or invasion.|1|chk(249,42,-1,REGIMEID,2)>0|2||125|40|13|14||32|||5|
|100403|Contact MTH|5|8|Try to enter in communication with a Maritime Trade House.|1|chk(249,42,-1,REGIMEID,8)>0|2||50|20|13|14||32|||5|
|100404|Makeshift Port|16|9|Ask an MTH to construct a makeshift port on a coastal Hex that has naval Logistics.|1|chk(249,42,-1,REGIMEID,2)>0|2|A makeshift harbour is an improvised harbour. Could be some docks, a pier or something like a mini-mulberry. It allows the ships to get close to shore and they provide some MTH workers and machinery/tools there to help unload the ships. Without a harbour you'll lose at least 75% of the Naval Logistical Points. When you play this Stratagem the MTH will propose to build a Makeshift Port on any Coastal Hex connecting to the target Zone that has incoming/outgoing Naval Logistical Points, but that does not have a Port.|75|30|13|14||32|||5|
|100405|Policy Meeting|20|10|As a shareholder you can try to influence the MTH.|1|chk(249,42,-1,REGIMEID,4)>0|2||50|50|13|14|||||5|
|100406|Shipyarding|6|11|Build more ships under supervision of, and for the MTH. Cost: 2000 Credits.|1|chk(249,42,-1,REGIMEID,2)>0|2||33|60|13|14|||||5|
|100407|Intel Support|10|12|Help the current MTH leadership stay in power.|1|chk(249,42,-1,REGIMEID,2)>0|2||33|70|13|14|||||5|
|100408|Sell A Share|4|13|Auction off one of your shares in an MTH.|1|chk(249,42,-1,REGIMEID,4)>0|2||33|35|13|14|||||5|
|100409|Demand Auction|36|14|Demand an MTH to sell off some extra shares.|1|chk(249,42,-1,REGIMEID,2)>0|2||33|50|13|14|||||5|
|100410|Startup MTH|24|15|Finance the startup of a new MTH in a Sea that hasn't any yet. Costs 500 Credits.|1|chk(249,42,-1,REGIMEID,9)>0|2||10|50|13|14|||||5|
|100411|Recon Contract|16|4|Schedule a meeting to sign a recon contract with a Maritime Trading House.|1|chk(249,42,-1,REGIMEID,2)>0|2||75|20|13|14|||||5|
|100412|Change of Heart|1|19|MTH sees you in a sudden new and beautiful light.|-1|chk(249,42,-1,REGIMEID,2)>0|2||200|1|9|9|||||36|
|100413|Stock Emission|2|18|MTH decides to issue more stock. Oh.. the Dilution...|-1|chk(249,42,-1,REGIMEID,2)>0|2||200|1|9|9|||||36|
|100414|Maritime Breakup|3|17|Sometimes Captains part ways. This is such a moment. A new MTH will be born!|-1|chk(249,42,-1,REGIMEID,2)>0|2||100|1|9|9|||||36|
|100415|Resource Rumours|6|20|Talk and bribe MTH staff to learn information on a Zone. Costs 100 Credits.|18|chk(249,42,-1,REGIMEID,2)>0|2||90|20|3|2|||||5|

