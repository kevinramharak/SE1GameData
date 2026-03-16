## `SE_Linked.'Flex Story Logic'` (id = `464`)

### Properties

Is linked with library reference: (libId = `464`, libSlot = `26`)

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
|0|3|ZONEKEY.disease1_spread>0|ZONEKEY.disease1_spread=max(0,ZONEKEY.disease1_spread-dth(1,6));||3||||||
|0|3|(ZONEKEY.disease1>0|ZONEKEY.disease1_init>0); ZONEKEY.disease1_spread<1;|ZONEKEY.disease1=0; ZONEKEY.disease1_init=0;||3||||||

