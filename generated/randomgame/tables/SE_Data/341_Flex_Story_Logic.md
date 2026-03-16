## `SE_Data.'Flex Story Logic'` (id = `341`)

### Columns (`11`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Complex Story ID | Text 
| `1` | Check Type | Text 
| `2` | Check Logic | Text 
| `3` | Set Logic | Text 
| `4` | Log Text | Text 
| `5` | Mode | Text 
| `6` | Group | Text 
| `7` | Det.News.Type | Text 
| `8` | Cust.Rep.Name | Text 
| `9` | Cust.Subhead | Text 
| `10` | Uds Placement | Text 

### Rows (`2`)

| Complex Story ID | Check Type | Check Logic | Set Logic | Log Text | Mode | Group | Det.News.Type | Cust.Rep.Name | Cust.Subhead | Uds Placement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|0|3|ZONEKEY.rebelManpower>=20; REGIMESTAT.11>0; REGIMESTAT.1==1;|TEMP1=REGIMESTAT.11; exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-20;|Rebels deployed in <ZONENAME>.|3||||||
|0|3|ZONEKEY.rebelManpower>=80; REGIMESTAT.11>0; REGIMESTAT.1==1;|TEMP1=REGIMESTAT.11; exe(346,8,ZONEID,TEMP1,6); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-80;|Rebels deployed in <ZONENAME>.|3||||||

