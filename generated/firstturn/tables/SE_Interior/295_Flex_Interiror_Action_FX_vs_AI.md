## `SE_Interior.'Flex Interiror Action FX vs AI'` (id = `295`)

### Columns (`7`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID | Text 
| `1` | IF Logic | Text 
| `2` | SET Logic | Text 
| `3` | Text | Text 
| `4` | Talk Code | Text 
| `5` | group code | Text 
| `6` | New Col | Text 

### Rows (`32`)

| Card ID | IF Logic | SET Logic | Text | Talk Code | group code | New Col |
| --- | --- | --- | --- | --- | --- | --- |
|[301]||DIFF=50||||Difficulty will be 50.|
|[302]||DIFF=20||||Difficulty will be 20.|
|[302]||DIFF=DIFF+((REGKEY.incomeTax*250)/100)||||Difficulty will be +25 higher per 10% tax bracket.|
|[303][304]||DIFF=25+ (100-REGKEY.incomeTax);||||Difficulty will be inverse to current income tax. And then +25.|
|[401][403]||DIFF=70||||Difficulty will be 70|
|[402][404]||DIFF=50||||Difficulty will be 50.|
|[301][302][303][304][401][402][403][404]||ROLL=che(249,1,CHARID,14)||||An administration skill roll will be made by <CHARNAME>.|
|[301][302][303][304][401][402][403][404]|ROLL>=DIFF|RESULT=1|||||
|[301][302][303][304][401][402][403][404]|ROLL<DIFF|RESULT=2|||||
|[301][302][303][304][401][402][403][404]|RESULT==1||Success! The rates have been changed|1|1||
|[301][302][303][304][401][402][403][404]|RESULT==2||Failure! I really tried, but did not manage to sort out the paperwork.|1|1||
|[301][302][303][304][401][402][403][404]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2||
|[301]|RESULT==1|REGKEY.salesTax=REGKEY.salesTax+25; REGKEY.salesTax=min(100,REGKEY.salesTax);||||If successful roll the sales tax will increase with +25%.|
|[302]|RESULT==1|REGKEY.incomeTax=REGKEY.incomeTax+10; REGKEY.incomeTax=min(100,REGKEY.incomeTax);||||If successful roll the income tax will increase with +10%.|
|[303]|RESULT==1|REGKEY.salesTax=REGKEY.salesTax-25; REGKEY.salesTax=max(0,REGKEY.salesTax);||||If successful roll the sales tax will decrease with -25%.|
|[304]|RESULT==1|REGKEY.incomeTax=REGKEY.incomeTax-10; REGKEY.incomeTax=max(0,REGKEY.incomeTax);||||If successful roll the income tax will decrease with -10%.|
|[401]|RESULT==1|IMPORTTARIFFKEY=IMPORTTARIFFKEY+25; IMPORTTARIFFKEY=min(100,IMPORTTARIFFKEY);||||If successful roll the import tariff will increase with +25%.|
|[402]|RESULT==1|IMPORTTARIFFKEY=IMPORTTARIFFKEY-25; IMPORTTARIFFKEY=max(0,IMPORTTARIFFKEY);||||If successful roll the import tariff will decrease with -25%.|
|[403]|RESULT==1|EXPORTTARIFFKEY=EXPORTTARIFFKEY+25; EXPORTTARIFFKEY=min(100,EXPORTTARIFFKEY);||||If successful roll the export tariff will increase with +25%.|
|[404]|RESULT==1|EXPORTTARIFFKEY=EXPORTTARIFFKEY-25; EXPORTTARIFFKEY=max(0,EXPORTTARIFFKEY);||||If successful roll the exportt tariff will decrease with -25%.|
|[501]||exe(346,1,-1,12,-1)|||||
|[502]||exe(346,1,-1,13,-1)|||||
|[503]||exe(346,1,-1,2,-1)|||||
|[504]||exe(346,1,30,-1,3)|||||
|[505]||exe(346,1,60,-1,-1)|||||
|[551]||exe(346,1,20,-1,-1)|||||
|[552]||exe(346,1,40,13,2)|||||
|[501][502][503][504][505][551][552]|||Success! A new leader has been added to the Reserve Pool.|1|1|No tests. Character will be recruited and joined to the pool.|
|[562]||TARGETCHARSTAT.83=TARGETCHARSTAT.83+1; TEMP1=TARGETCHARSTAT.83;|<TARGETCHARNAME> now has Rank #<TEMP1>.|1|1||
|[562]||TEMP2=10*TARGETCHARSTAT.83; TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP2; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20);|Leader was happy with his reward. Relation with Leader went up +<TEMP2>.|1|2||
|[563]||TEMP2=20*TARGETCHARSTAT.83; TARGETCHARSTAT.20=TARGETCHARSTAT.20-TEMP2; TARGETCHARSTAT.20=max(0,TARGETCHARSTAT.20);|Leader was angry to see his Rank stripped down. Relation with Leader went down -<TEMP2>.|1|1||
|[563]||TARGETCHARSTAT.83=TARGETCHARSTAT.83-1; TEMP1=TARGETCHARSTAT.83;|<TARGETCHARNAME> now has Rank #<TEMP1>.|1|2||

