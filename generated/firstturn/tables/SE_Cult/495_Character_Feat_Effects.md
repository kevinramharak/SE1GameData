## `SE_Cult.'Character Feat Effects'` (id = `495`)

### Properties

Is linked with library reference: (libId = `495`, libSlot = `28`)

### Columns (`5`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Feat Type ID | Text 
| `1` | Effect Type | Text 
| `2` | Effect Target | Text 
| `3` | Effect Qty | Text 
| `4` | Start turn IF | Text 

### Rows (`14`)

| Feat Type ID | Effect Type | Effect Target | Effect Qty | Start turn IF |
| --- | --- | --- | --- | --- |
|100301|1|38|10||
|100302|1|37|10||
|100303|1|39|10||
|100304|1|36|10||
|100305|1|38|10||
|100306|2|6|20||
|100306|2|3|20||
|100301||||dth(1,90)>CHARSTAT.49;|
|100302||||dth(1,CHARSTAT.49)>10;|
|100303||||dth(1,90)>CHARSTAT.46;|
|100304||||dth(1,90)>CHARSTAT.48;|
|100305||||dth(1,CHARSTAT.45)>10;|
|100306||||dth(1,90)>CHARSTAT.45;|
|100306||||dth(1,90)>CHARSTAT.19;|

