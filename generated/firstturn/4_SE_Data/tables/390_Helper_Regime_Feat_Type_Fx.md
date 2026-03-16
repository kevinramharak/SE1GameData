# `Helper Regime Feat Type Fx` (`390`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | ID | `Text` |
| `1` | Type | `Text` |
| `2` | Sequence | `Text` |
| `3` | IF | `Text` |
| `4` | THEN | `Text` |

### Data

| ID | Type | Sequence | IF | THEN |
| --- | --- | --- | --- | --- |
| 11 | 2 | 2 | CHARSTAT.47<dth(1,100) | CHARSTAT.19=min(100,CHARSTAT.19+1); |
| 11 | 2 | 2 | CHARSTAT.47<dth(1,100); CHARSTAT.49>CHARSTAT.47; | CHARSTAT.49=max(0,CHARSTAT.49-2); |
| 28 | 2 | 2 | CHARSTAT.47<dth(1,100) | CHARSTAT.20=min(100,CHARSTAT.20+2); |
| 29 | 2 | 2 | CHARSTAT.47>dth(1,100); CHARSTAT.49<CHARSTAT.47; (CHARSTAT.6==4|CHARSTAT.6==5|CHARSTAT.6==6|CHARSTAT.6==8); | CHARSTAT.49=min(100,CHARSTAT.49+2); |
| 29 | 2 | 2 | CHARSTAT.46>dth(1,100); (CHARSTAT.6==4|CHARSTAT.6==5|CHARSTAT.6==6|CHARSTAT.6==8); | CHARSTAT.20=max(0,CHARSTAT.20-2); |
| 101 | 5 | 2 |  | REGKEY.politicalBonus=REGKEY.politicalBonus+40 |
| 102 | 5 | 2 |  | REGKEY.qolBonus=REGKEY.qolBonus+50 |
| 103 | 5 | 2 |  | REGKEY.politicalBonus=REGKEY.politicalBonus+60 |
| 104 | 5 | 2 |  | REGKEY.qolBonus=REGKEY.qolBonus+100 |
| 105 | 5 | 2 |  | REGKEY.politicalBonus=REGKEY.politicalBonus+80 |
| 106 | 5 | 2 |  | REGKEY.qolBonus=REGKEY.qolBonus+150 |
| 141 | 3 | 2 | 2 | 30 |
| 142 | 1 | 2 |  | TEMP1=max(1,((ZONEKEY.worker+ZONEKEY.pop)/10)); exe(346,11,ZONEID,7,TEMP1); |
| 143 | 3 | 2 | 24 | 30 |
| 144 | 3 | 2 | 14 | 30 |
| 145 | 1 | 2 |  | TEMP1=max(1,((ZONEKEY.worker+ZONEKEY.pop)/5)); REGKEY.credits=REGKEY.credits+ TEMP1; |
| 146 | 5 | 2 |  | REGKEY.characterCapabilityBonus=REGKEY.characterCapabilityBonus+50 |
| 201 | 5 | 2 |  | REGKEY.taxBonus=REGKEY.taxBonus+50 |
| 202 | 5 | 2 |  | REGKEY.logBonus=REGKEY.logBonus+50 |
| 203 | 5 | 2 |  | REGKEY.recruitBonus=REGKEY.recruitBonus+100 |
| 204 | 5 | 2 |  | REGKEY.taxBonus=REGKEY.taxBonus+100 |
| 205 | 5 | 2 |  | REGKEY.logBonus=REGKEY.logBonus+100 |
| 206 | 5 | 2 |  | REGKEY.recruitBonus=REGKEY.recruitBonus+200 |
| 221 | 5 | 2 |  | REGKEY.privateBonus=REGKEY.privateBonus+40 |
| 222 | 5 | 2 |  | REGKEY.popHapinessBonus=REGKEY.popHapinessBonus+50 |
| 223 | 5 | 2 |  | REGKEY.commerceBonus=REGKEY.commerceBonus+100 |
| 224 | 5 | 2 |  | REGKEY.privateBonus=REGKEY.privateBonus+80 |
| 225 | 5 | 2 |  | REGKEY.popHapinessBonus=REGKEY.popHapinessBonus+50 |
| 226 | 5 | 2 |  | REGKEY.commerceBonus=REGKEY.commerceBonus+200 |
| 241 | 5 | 2 |  | REGKEY.buroBonus=REGKEY.buroBonus+40 |
| 242 | 5 | 2 |  | REGKEY.ecoBonus=REGKEY.ecoBonus+40 |
| 243 | 5 | 2 |  | REGKEY.workerHapinessBonus=REGKEY.workerHapinessBonus+50 |
| 244 | 5 | 2 |  | REGKEY.buroBonus=REGKEY.buroBonus+60 |
| 245 | 5 | 2 |  | REGKEY.ecoBonus=REGKEY.ecoBonus+60 |
| 246 | 5 | 2 |  | REGKEY.workerHapinessBonus=REGKEY.workerHapinessBonus+100 |
| 301 | 5 | 2 | 33>=dth(1,100); ROUND<20; | exe(346,10,REGIMEID,CULTUREID,10) |
| 301 | 5 | 2 | 3>=dth(1,100); ROUND>=100; | exe(346,10,REGIMEID,CULTUREID,12) |
| 301 | 5 | 2 | 10>=dth(1,100); ROUND>=20; ROUND<100; | exe(346,10,REGIMEID,CULTUREID,11) |
| 302 | 5 | 2 |  | REGKEY.casualtyBonus=REGKEY.casualtyBonus+50 |
| 303 | 5 | 2 |  | REGKEY.combatBonus=REGKEY.combatBonus+25 |
| 304 | 5 | 2 |  | REGKEY.casualtyBonus=REGKEY.casualtyBonus+100 |
| 305 | 5 | 2 |  | REGKEY.combatBonus=REGKEY.combatBonus+40 |
| 306 | 5 | 2 |  | REGKEY.casualtyBonus=REGKEY.casualtyBonus+200 |
| 321 | 5 | 2 |  | REGKEY.resBonus=REGKEY.resBonus+30 |
| 322 | 5 | 2 |  | REGKEY.culturalAdjustmentBonus=REGKEY.culturalAdjustmentBonus+40 |
| 323 | 5 | 2 |  | REGKEY.resBonus=REGKEY.resBonus+40 |
| 324 | 5 | 2 |  | REGKEY.culturalAdjustmentBonus=REGKEY.culturalAdjustmentBonus+60 |
| 325 | 5 | 2 |  | REGKEY.resBonus=REGKEY.resBonus+50 |
| 326 | 5 | 2 |  | REGKEY.culturalAdjustmentBonus=REGKEY.culturalAdjustmentBonus+80 |
| 341 | 5 | 2 |  | REGKEY.moraleBonus=REGKEY.moraleBonus+40 |
| 342 | 5 | 2 |  | REGKEY.characterLoyaltyBonus=REGKEY.characterLoyaltyBonus+40 |
| 343 | 5 | 2 |  | REGKEY.popLoyaltyBonus=REGKEY.popLoyaltyBonus+50 |
| 344 | 5 | 2 |  | REGKEY.moraleBonus=REGKEY.moraleBonus+60 |
| 345 | 5 | 2 |  | REGKEY.characterLoyaltyBonus=REGKEY.characterLoyaltyBonus+80 |
| 346 | 5 | 2 |  | REGKEY.popLoyaltyBonus=REGKEY.popLoyaltyBonus+100 |
| 401 | 5 | 2 |  | REGKEY.healthBonus=REGKEY.healthBonus+50 |

