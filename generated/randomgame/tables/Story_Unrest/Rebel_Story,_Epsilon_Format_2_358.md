## `Story_Unrest.'Rebel Story, Epsilon Format 2'` (id = `358`)

### Columns (`6`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | NAME | Text 
| `1` | DECISION NUMBER | Text 
| `2` | IF | Text 
| `3` | SET | Text 
| `4` | TEXT | Text 
| `5` | TALK CODe | Text 

### Rows (`9`)

| NAME | DECISION NUMBER | IF | SET | TEXT | TALK CODe |
| --- | --- | --- | --- | --- | --- |
|[Rebels1]|1,2||TEMP1=REGIMESTAT.11;|Rebels deployed in <ZONENAME>.|1|
|[Rebels1]|1||TEMP2=dth(1,100);||0|
|[Rebels1]|2||TEMP2=100|||
|[Rebels1]|1,2|TEMP2<=66; ZONEKEY.rebelManpower<120;|exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-20;|Our efforts reduced the Rebel deployment.|1|
|[Rebels1]|1,2|TEMP2>66; ZONEKEY.rebelManpower<120;|exe(346,8,ZONEID,TEMP1,1); exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-20;|We tried, but more Rebels than expected deployed.|1|
|[Rebels1]|1,2|TEMP2<=66; ZONEKEY.rebelManpower>=120;|exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-40;|Our efforts reduced the Rebel deployment.|1|
|[Rebels1]|1,2|TEMP2>66; ZONEKEY.rebelManpower>=120;|exe(346,8,ZONEID,TEMP1,6); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-80;|We tried, but more Rebels than expected deployed.|1|
|[Rebels1]|1,2||ZONEKEY.rebelManpower=ZONEKEY.rebelManpower*7/10;|||
|[Rebels1]|1,2||ZONEKEY.rebelManpower=max(0,ZONEKEY.rebelManpower);|||

