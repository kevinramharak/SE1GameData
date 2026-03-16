## `SE_Cult.'Flex Story Logic'` (id = `483`)

### Properties

Is linked with library reference: (libId = `483`, libSlot = `28`)

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
|1003|0|ROUND==1|REGKEY.cult_count=0||0||||||
|1003|0|REGKEY.cult_active>0|REGKEY.cult_initialize>0|exe(346,40,REGIMEID)||0||||||

