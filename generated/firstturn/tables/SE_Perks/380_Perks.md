## `SE_Perks.'Perks'` (id = `380`)

### Columns (`14`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | ID | Text 
| `1` | Name | Text 
| `2` | Type | Text 
| `3` | Data | Text 
| `4` | Maximum Value | Text 
| `5` | Increase (CHECK) | Text 
| `6` | Small Gfx | Text 
| `7` | Description | Text 
| `8` | Category | Text 
| `9` | IF | Text 
| `10` | SET 1 per X hex | Text 
| `11` | Zone Center IF | Text 
| `12` | Weight | Text 
| `13` | Event Pic Slot | Text 

### Rows (`381`)

| ID | Name | Type | Data | Maximum Value | Increase (CHECK) | Small Gfx | Description | Category | IF | SET 1 per X hex | Zone Center IF | Weight | Event Pic Slot |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|1|Refugee Camp|1|pop||2|139|Lost clans, tribes fleeing from chaos elsewhere flock to this Camp to be relocated in a welcoming nation. +200 population per turn.|1|ZONEKEY.pop>0|200||100|272|
|2|Hot Baths|1|popHapiness|100|1|140|Natural thermal ponds and lakes. Your population benefits by visiting, swimming, relaxing and enjoying themselves.  Population Happiness +1.|1|GAMEKEY.6<2|200||100|273|
|3|Tiny Degraded AF|3|8||20|144|What the ancients consider tiny, is actually big for our times. The problem is this Automated Factory is severely degraded. However it has still a small production capability. IP +20.|1|COLZONE.2>0|200||60|274|
|4|Very Small Degraded AF|3|8||40|144|What the ancients consider very small, is actually humungous for our times. The problem is this Automated Factory is severely degraded. However it has still a sizeable production capability. IP +40.|1|COLZONE.2>0|200||30|275|
|5|Small Degraded AF|3|8||80|144|What the ancients consider small, is actually extremely humungous for our times. The problem is this Automated Factory spawning several square kilometers is in ruins and severely degraded. However it has some minor systems operational and a sizeable production capability. IP +80.|1|COLZONE.2>0|200||10|276|
|6|Hermits Cave|5|17||10|145|A reclusive old hermit lives here. He has arcane knowledge and is willing to spend some of his time to educate the governor  of the zone. Governor XP +10.|1|ZONEKEY.pop<20; (LANDSCAPE==6|LANDSCAPE==7|LANDSCAPE==16|LANDSCAPE==17)|200||33|277|
|51|Android Cave|5|17||5|145|An old rusty Android is still operational and lives in a Cave. Sometimes the Android remembers something valuable to share with the Governor of the Zone. Governor XP +5.|1||200||60|277|
|52|Free Folk Cave|3|12||1|145|Free Folk often visit this cave. Some of them will decide to join you. They supply you with Colonists in exchange for leaving them be. Colonists +100.|1||200||70|277|
|53|Old Miner's Cave|3|2||10|145|A group of reclusive Miners still keep churning out Metal from an abandoned mine. Metal +10. |1||200||80|277|
|61|Collector's Cave|3|13||1|145|A collector of rare machinery has set up workshop in this reclusive cave. Machinery +1.|1||200||40|277|
|7|Luxury Brothel|4|1||2|146|At a secluded location a magnificent little palace of pleasure houses men and women of exquisite beauty. In exchange for your protection soldiers are allowed to visit now and then. If Unit has Morale growth and is in same Zone as the Brothel then +2 extra Morale growth.|1|COLZONE.15>0|200||100|278|
|8|Ancient Luxury Resort|2|pp||1|147|Hidden between the natural curves of the landscape and ancient luxury resort is still semi-operational. It has hot-baths and still operational entertainment suites. Your leaders love the privilleg to visit. PP +1.|1|ZONEKEY.pop>0; COLZONE.2>0;|200||100|279|
|9|Monastry|2|bp||25|149|A sizeable group of educated men has retreated in this monastry to contemplate existential questions. They however are willing to help you out with paperwork and research projects. BP + 25.|1|COLZONE.14>0|200||100|280|
|10|Geyser Turbine|3|15||50|148|A natural Geyser has been equipped with a turbine harnessing the energy during its discharges. Energy +50.|1|RANDOMKEY.19<1; COLZONE.2>0;|200||100|281|
|11|Waterfall Turbine|3|15||100|150|A waterfall drops over a hundred meters. A turbine has been installed to get free energy. Energy +100.|1|RIVER>0; COLZONE.2>0;|200||40|282|
|12|Mercenary Post|3|9||3|151|Mercenaries are running activities on a remote hilltop. In exchange for you letting them be at 'peace' they provide you with some recruits. Recruits +300.|1|COLZONE.13>0|200||100|283|
|13|Degraded LE Mini-Reactor|3|15||100|152|An ancient miniature Liquid Energy reactor has survived and is still semi-operational. Energy +100.|1|COLZONE.2>0; COLZONE.2>0;|200||20|284|
|14|Derelict Spaceship|2|resBonusPoints||100|153|A burned out skeleton of what was once a proud small spaceship has found its grave here. There is plenty to scavenge though for our researchers. Research Bonus Points +100.|1||200||50|285|
|54|Derelict Device|2|resBonusPoints||80|153|A degraded weather monitoring installation.There is some stuff to scavenge though for our researchers. Research Bonus Points +80.|1||200||60|285|
|62|Degraded GR Truck|2|resBonusPoints||60|153|A gigantic GR truck has been rusting here for decades. There is something to scavenge though for our researchers. Research Bonus Points +60.|1||200||50|285|
|63|GR Garbage Belt|2|resBonusPoints||40|153|Mostly utter junk, but some old garbage is valuable today. Some junior scientists manage to scavenge tech here. Research Bonus Points +40.|1||200||40|285|
|55|Weathered Machinery|2|resBonusPoints||20|153|A giant machine in such a state of degradation its hardly worth the effort to investigate. Some tech interns do this job anyway. Research Bonus Points +20.|1||200||30|285|
|65|Derelict Database|2|resBonusPoints||200|153|A semi-intact basement with some functioning computers. There is plenty to scavenge here for our researchers. Research Bonus Points +200.|1||200||25|285|
|15|Derelict Ancient Mech|2|milResBonusPoints||100|154|An ancient Mech has been incapicitated here. It it a treasure trove for military researchers. Military Research Bonus Points +100.|1||200||66|286|
|56|Derelict Ancient Gun|2|milResBonusPoints||60|154|An ancient gun emplacement has been found here. It it a treasure trove for military researchers. Military Research Bonus Points +60.|1||200||66|286|
|64|Derelict Ancient Bunker|2|milResBonusPoints||40|154|An ancient derelict military bunker from GR era has been found. It is in a state of decay, but still of some use to our military researchers. Military Research Bonus Points +40.|1||200||66|286|
|16|Battle Dojo|3|9||2|160|A place of training for Warriors. It attracts many young man eager to learn the art of combat. In exchange for you leaving the masters of the Dojo alone they supply you with Recruits. Recruits +200.|2|||||287|
|17|Ancient Statue|2|pp||1|161|A very impressive memorial from the era of the Galactic Republic. It impresses your populace and Leaders. PP +1.|2|||||288|
|18|Independent Lab|2|resBonusPoints||100|162|A group of independent Scientists have agreed to share their work with you. +100 Research Bonus Points.|2|COLZONE.2>0|400||80|289|
|19|Computing Node|2|bp||50|163|An ancient but still operative Computer Node. Your people cannot use it as its indended, but it is supplies a lot of calculation power to your  Organisations. BP +50.|2|||||290|
|20|Hidden Village|3|12||2|164|In a narrow valley a seclusive village is hidden. They supply you with Colonists in exchange for leaving them be. Colonists +200.|2||500||50|291|
|21|Blackmarket|2|credits||100|165|Rogues, criminals, shady traders, they all meet here to do their business. You turn a blind eye in exchange for 100 credits per turn.|2||600||50|292|
|830|Scientific Outpost|2|resBonusPoints||200|166|Maybe you think there are just dull rocks out there... But we can learn a lot by studying the geology and climate of remote places. Gives +200 research bonus points.||||||293|
|831|Security Outpost|1|qol_security||100|167|Not every enemy of the state operates from our Cities... Having some outposts helps us survey our perimeters. Gives +100 security points.||||||294|
|839|Viewpoint|1|popLoyalty|100|1|168|Nothing beats an inspiring view. The landmarks, the horizon, the colors... Its just overwhelming. People love to visit and inspires loyalty to our lands. Zone Loyalty +1 per turn.|||500||50|295|
|57|Trade Point|1|popCredits||25|168|Traders flock to this high hill and the Zone benefits. Private Credits +25.|||200||60|295|
|58|Hill Well|3|5||50|168|A mysterious source of drinkable hot water erupts from the top of the hill. Water +50.|||200||70|295|
|59|Fertility Hill|1|pop||1|168|Legend has it that performing the sacred rites upon the top of Fertility Hill will result in pregnancy. Many visit from far and wide. Zone Pop +1.|||200||60|295|
|840|Ecological Station|1|qol_education||100|169|Science is nice, but allowing our populace and youth to learn in the field might be even better. Gives +100 education points.||||||296|
|22|Degraded LE Battery|3|15||30|152|An ancientLiquid Energy battery has survived and is still semi-operational. In theory operational lifespan from this battery should be limited, but at current impaired output it should last you several lifetimes. Energy +30.|1|COLZONE.2>0|200||50|781|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|
||||||||||||||272|

