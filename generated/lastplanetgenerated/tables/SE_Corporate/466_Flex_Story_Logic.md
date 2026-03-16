## `SE_Corporate.'Flex Story Logic'` (id = `466`)

### Properties

Is linked with library reference: (libId = `466`, libSlot = `27`)

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

### Rows (`4`)

| Complex Story ID | Check Type | Check Logic | Set Logic | Log Text | Mode | Group | Det.News.Type | Cust.Rep.Name | Cust.Subhead | Uds Placement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|1002|0|ROUND==1|REGKEY.corp_relation=0||0||||||
|1002|0|REGKEY.corp_active>0|REGKEY.corp_initialize>0|exe(346,39,REGIMEID)||0||||||
||3|ZONEKEY.corp_control>0; ZONEKEY.corp_regimeid!=REGIMEID; ZONEKEY.corp_regimeid>0;|ZONEKEY.corp_control=0; ZONEKEY.corp_regimeid=0; ZONEKEY.corp_blockgovid=0;|//for ai|3||||||
||4|REGKEY.corp_active<1; ZONEKEY.corp_control>0; ZONEKEY.corp_regimeid!=REGIMEID; ZONEKEY.corp_regimeid>0;|ZONEKEY.corp_control=0; ZONEKEY.corp_regimeid=0; ZONEKEY.corp_blockgovid=0;|//delte for human if no Corp story active|||||||

