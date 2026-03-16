## `SE_Crime.'FLEX action card target logic'` (id = `431`)

### Properties

Is linked with library reference: (libId = `431`, libSlot = `25`)

### Columns (`4`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID list [][] | Text 
| `1` | Target IF Logic | Text 
| `2` | Text if not TRUE | Text 
| `3` | TRUE is 1 or 0 | Text 

### Rows (`15`)

| Card ID list [][] | Target IF Logic | Text if not TRUE | TRUE is 1 or 0 |
| --- | --- | --- | --- |
|[100101]|ZONEKEY.syndicate_crimeLevel>0|Is not a Zone with Crime Syndicate Activity.|1|
|[100101]|ZONEKEY.city>0|Has no City.|1|
|[100101]|(ZONEKEY.pop+ZONEKEY.worker)>100|Has less than 10K Populace.|1|
|[100102]|REGKEY.syndicate_relation>0|No Crime Syndicate is active in your Regime.|1|
|[100103]|REGKEY.syndicate_relation>0|No Crime Syndicate is active in your Regime.|1|
|[100104]|REGKEY.syndicate_relation>0|No Crime Syndicate is active in your Regime.|1|
|[100103][100101][100102][100104]|REGKEY.syndicate_war<1|Not possible while Crime Syndicate is on a war footing with you.|1|
|[100103]|REGKEY.syndicate_deal==0|Not possible if you already have a Deal.|1|
|[100104]|REGKEY.syndicate_deal<2|Not possible if you already have a Kickback Deal.|1|
|[100105][100106]|ZONEKEY.syndicate_crimeLevel>0|Is not a Zone with Crime Syndicate Activity.|1|
|[100105][100106]|ZONEKEY.city>0|Has no City.|1|
|[100107]|che(249,12,TARGETCHARID,808)<1|Already has a Consiglieri in retinue.|1|
|[100109]|che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100101)*8)<(che(249,20,HISID)-2);|Has to many Unit Feats to assign another one.|1|
|[100110]|che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100102)*4)<(che(249,20,HISID)-2);|Has to many Unit Feats to assign another one.|1|
|[100101][100105][100106]|TARGETREGIMEID==REGIMEID|Is not a friendly Zone.|1|

