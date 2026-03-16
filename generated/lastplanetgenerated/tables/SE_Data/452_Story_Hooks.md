## `SE_Data.'Story Hooks'` (id = `452`)

### Properties

Is linked with library reference: (libId = `452`, libSlot = `4`)

### Columns (`7`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Type | Text 
| `1` | IF | Text 
| `2` | Button Name | Text 
| `3` | Button Desc | Text 
| `4` | Button PP | Text 
| `5` | SET Logic | Text 
| `6` | Text | Text 

### Rows (`10`)

| Type | IF | Button Name | Button Desc | Button PP | SET Logic | Text |
| --- | --- | --- | --- | --- | --- | --- |
|3|ZONEKEY.dungeon1==2;ZONEKEY.dungeon1_turn<ROUND; ZONEKEY.dungeon1_type==1;|Sealed Door|Revisiting the tunnels will allow you to reconsider opening that intriguing sealed door...|3|ZONEKEY.dungeon1=0|Hold on... we are heading into those tunnels...|
|3|ZONEKEY.disease1_sleep>0; ZONEKEY.disease1_init>0;|Check Disease|Check up on the status of the disease that is still active in the Zone.|3|ZONEKEY.disease1_sleep=0;|Let me brief you on the latest developments...|
|3|ZONEKEY.dungeon1==2;ZONEKEY.dungeon1_turn<ROUND; ZONEKEY.dungeon1_type==2;|Mainframe AI|Revisiting the underground complex will allow you to interact with the ancient mainframe AI present there...|3|ZONEKEY.dungeon1=0|Hold on... we are heading down into the complex...|
|3|ZONEKEY.general1_sleep>0; ZONEKEY.general1==1; ZONEKEY.general1_round<ROUND;|General|Check up on our retired Militia general...|3|ZONEKEY.general1_sleep=0;|Yes sir. I am heading out to his compound right now...|
|3|ZONEKEY.union1_sleep>0; ZONEKEY.union1==1; ZONEKEY.union1_round<ROUND;|Union Chief|Visit the tavern where the Chief and his compatriots drink and plot...|3|ZONEKEY.union1_sleep=0;|I am heading out to to the Chiefs tavern right now....|
|3|ZONEKEY.trader1_sleep>0; ZONEKEY.trader1==1; ZONEKEY.trader1_round<ROUND;|Slave Trader|Visit the shady compound of this dark trader...|3|ZONEKEY.trader1_sleep=0;|I am heading out to to the edge of town right now...|
|3|ZONEKEY.sensei1_sleep>0; ZONEKEY.sensei1==1; ZONEKEY.sensei1_round<ROUND;|Sensei|Visit the Dojo of a great sensei and gladiator trainer|3|ZONEKEY.sensei1_sleep=0;|I am heading out to to the Dojo as we speak...|
|3|ZONEKEY.courtesan1_sleep>0; ZONEKEY.courtesan1==1; ZONEKEY.courtesan1_round<ROUND;|Courtesan|Visit the Hazebo of the courtesan|3|ZONEKEY.courtesan1_sleep=0;|I am heading out to to her right now!|
|3|ZONEKEY.monster1_sleep>0; ZONEKEY.monster1==1; ZONEKEY.monster1_round<ROUND;|Monster|Reconsider what to do about the monster lurking out there...|3|ZONEKEY.monster1_sleep=0;|Yes sir... as you request...|
|3|ZONEKEY.doctor1_sleep>0; ZONEKEY.doctor1==1; ZONEKEY.doctor1_round<ROUND;|Doc Fr.Stein|Visit the suspicious doctor nicknamed Doctor Frankenstein|3|ZONEKEY.doctor1_sleep=0;|I am heading out to to his lab right now...|

