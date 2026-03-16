## `SE_Corporate.'FLEX action card target logic'` (id = `477`)

### Properties

Is linked with library reference: (libId = `477`, libSlot = `27`)

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
|[100202]|che(249,12,TARGETCHARID,100201)<1|Already is a Board Member.|1|
|[100201]|REGKEY.corp_active>0|Corporation is not yet active or no longer active.|1|
|[100203]|ZONEKEY.corp_control>0|Corporation has no Control in Zone.|1|
|[100201]|REGKEY.corp_meeting<1|You have already scheduled a meeting.|1|
|[100203][100208][100209][100210]|TARGETREGIMEID==REGIMEID|Is not a friendly Zone.|1|
|[100209]|ZONEKEY.syndicate_crew>0|No Syndicate Crews active in Zone.|1|
|[100210]|ZONEKEY.unrest>0|No Unrest in Zone.|1|
|[100205]|che(249,8,REGIMEID,1)>0|No breakthrough possible without discovered Techs that are still at 0 research progress.|1|
|[100206]|che(249,21,REGIMEID,1)>0|No discoveries possible with the current Tech base.|1|

