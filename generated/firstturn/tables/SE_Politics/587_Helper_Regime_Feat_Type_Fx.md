## `SE_Politics.'Helper Regime Feat Type Fx'` (id = `587`)

### Properties

Is linked with library reference: (libId = `587`, libSlot = `31`)

### Columns (`5`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | ID | Text 
| `1` | Type | Text 
| `2` | Sequence | Text 
| `3` | IF | Text 
| `4` | THEN | Text 

### Rows (`25`)

| ID | Type | Sequence | IF | THEN |
| --- | --- | --- | --- | --- |
|451|1|2|ZONEKEY.pop>0|ZONEKEY.pop=ZONEKEY.pop+((ZONEKEY.pop/1000)+1);|
|452|1|2|ZONEKEY.pop>0|ZONEKEY.pop=ZONEKEY.pop+((ZONEKEY.pop/500)+1);|
|453|1|2|ZONEKEY.pop>0|ZONEKEY.pop=ZONEKEY.pop+((ZONEKEY.pop/333)+1);|
|454|1|2|ZONEKEY.pop>0|ZONEKEY.pop=ZONEKEY.pop+((ZONEKEY.pop/250)+1);|
|461|1|5|REGKEY.ecoBonus=REGKEY.ecoBonus+10;||
|462|1|5|REGKEY.ecoBonus=REGKEY.ecoBonus+20;||
|463|1|5|REGKEY.ecoBonus=REGKEY.ecoBonus+30;||
|464|1|5|REGKEY.ecoBonus=REGKEY.ecoBonus+40;||
|471|1|2|ZONEKEY.pop>0|ZONEKEY.worker>0;|ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+1); ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+1);|
|472|1|2|ZONEKEY.pop>0|ZONEKEY.worker>0;|ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+2); ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+2);|
|473|1|2|ZONEKEY.pop>0|ZONEKEY.worker>0;|ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+3); ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+3);|
|474|1|2|ZONEKEY.pop>0|ZONEKEY.worker>0;|ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+4); ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+4);|
|512|3|2|2|10|
|551|3|2|40|10|
|561|3|2|14|10|
|562|3|2|29|20|
|562|3|2|26|20|
|562|3|2|27|20|
|563|3|2|10|30|
|564|3|2|33|40|
|564|3|2|37|40|
|564|3|2|39|40|
|565|3|2|17|50|
|566|5|5||REGKEY.combatBonus=REGKEY.combatBonus+20|
|596|5|2||REGKEY.combatBonus=REGKEY.combatBonus+30|

