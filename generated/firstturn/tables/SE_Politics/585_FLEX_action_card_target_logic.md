## `SE_Politics.'FLEX action card target logic'` (id = `585`)

### Properties

Is linked with library reference: (libId = `585`, libSlot = `31`)

### Columns (`4`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID list [][] | Text 
| `1` | Target IF Logic | Text 
| `2` | Text if not TRUE | Text 
| `3` | TRUE is 1 or 0 | Text 

### Rows (`9`)

| Card ID list [][] | Target IF Logic | Text if not TRUE | TRUE is 1 or 0 |
| --- | --- | --- | --- |
|[961][962][963][964][965][966][967]|REGKEY.compuLevel>0|The Computer is not currently online.|1|
|[961]|TARGETCHARKEY.compuInfo<ROUND|You already have access to this Leader's Computer records.|1|
|[963]|REGIMEFEAT.454<1|REGIMEFEAT.464<1|REGIMEFEAT.474<1|No more upgrades to the Syndic Computer are possible. |1|
|[965]|TARGETCHARKEY.clearanceLevel<2|Targetted Leader's Clearance Level too high for this Stratagem.|1|
|[2590][2591][2592]|ZONESTAT.1<2|You can only target Land Zones|1|
|[2590][2591][2592]|TARGETREGIMEID==SOURCEREGIMEID|You can only target friendly Zones.|1|
|[2594][2955][2956]|REGZONEKEY.recon>=0|You have no recon on zone.|1|
|[2594][2955][2956]|ZONESTAT.1<2|You can only target Land Zones|1|
|[2594][2955][2956]|TARGETREGIMEID!=SOURCEREGIMEID|You cannot target yourself.|1|

