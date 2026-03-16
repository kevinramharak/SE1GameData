## `SE_Interior.'FLEX action card target logic'` (id = `347`)

### Columns (`4`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID list [][] | Text 
| `1` | Target IF Logic | Text 
| `2` | Text if not TRUE | Text 
| `3` | TRUE is 1 or 0 | Text 

### Rows (`5`)

| Card ID list [][] | Target IF Logic | Text if not TRUE | TRUE is 1 or 0 |
| --- | --- | --- | --- |
|[401][402][403][404]|TARGETMAJOR==1 | TARGETMAJOR==2  | TARGETMAJOR==4|Target is neither a minor, neither a major with whom you have a trade relation.|1|
|[302]|REGKEY.incomeTax<80|Income Tax is at the maximum 80%.|1|
|[562]|TARGETCHARSTAT.83<4|Leader already has maximum Rank.|1|
|[563]|TARGETCHARSTAT.83>0;|Leader has no Rank.|1|
|[563]|TARGETCHARKEY.rankForLife<1;|Leader has a Rank-for-Life guarantee.|1|

