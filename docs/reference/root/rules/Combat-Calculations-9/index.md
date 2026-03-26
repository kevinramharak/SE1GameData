---
title: "Combat Calculations"
docKind: "type"
fieldsCount: 76
appearsIn: []
library:
  key: "root"
  name: "Root"
  id: -1
typeGroup:
  key: "rules"
  name: "Rules"
type:
  key: "Combat-Calculations-9"
  name: "Combat Calculations"
  id: "9"
---

# Combat Calculations

<!-- @include: ./_notes.md -->

## Fields

| Name | Type | Value |
| --- | --- | --- |
| Bridge attack river penalty modifier | rule | 5 |
| Hex minimum StackMax | rule | 30 |
| AttackMax Per Hexside in FrontagePts | rule | 31 |
| PowerPts Destroyed gives 1 officer XP | rule | 35 |
| Equal to this morale = capitulation chance rnd()>rdn/301 IF also Rdn < rulevar(301) | rule | 37 |
| Panic chance if more casualties than morale can cope | rule | 70 |
| Allow Air Move/Bombing/Recon/Paradrop missions into shroud? (1=yes) | rule | 100 |
| Counter Attack modifier for attacker on land | rule | 101 |
| Counter Attack modifier for defender on land | rule | 102 |
| Counter Attack modifier for attacker on sea/air | rule | 103 |
| Counter Attack modifier for defender on sea/air | rule | 104 |
| Flak assistance outside own hex modifier | rule | 105 |
| Attacker max readiness penalty if attacking | rule | 106 |
| Defender max readiness penalty if attacking | rule | 107 |
| Landsurprise defender modifier | rule | 108 |
| Paradrop defender modifier | rule | 109 |
| Amphibious asault defender modifier | rule | 110 |
| Rebel Advantage modifier | rule | 111 |
| Modifier if shooting at orderly retreating attacker | rule | 112 |
| Modifier if shooting at orderly retreating defender | rule | 113 |
| Modifier if shooting at panicking attacker | rule | 114 |
| Modifier if shooting at panicking defender | rule | 115 |
| Max readiness penalty on hitpoints for defending individual | rule | 116 |
| Minimal xp modifier due to powerpoint difference | rule | 117 |
| Maximal xp modifier due to powerpoint difference | rule | 118 |
| Score Kill gives XP pts | rule | 119 |
| Score Retreat gives XP pts | rule | 120 |
| Score Pinned gives XP pts | rule | 121 |
| Score Retreat Readiness loss % | rule | 122 |
| Score Pinned Readiness loss % | rule | 123 |
| Score Retreat Morale loss % | rule | 124 |
| Score Pinned Morale loss % | rule | 125 |
| Score Retreat Entrench loss % | rule | 126 |
| Score Pinned Entrench loss % | rule | 127 |
| If Air and not a bombing mission anti-struc pts damage done modifier | rule | 128 |
| Morale % penalty if individual panics | rule | 129 |
| Max Supply Consume modifier | rule | 130 |
| Concentric Attack Default 10% bonus | rule | 132 |
| Concentric Attack Default 25% bonus | rule | 133 |
| Concentric Attack Default 50% bonus | rule | 134 |
| Concentric Attack Default 75% bonus | rule | 135 |
| Concentric Attack Default 100% bonus | rule | 136 |
| Concentric Attack Default 150% bonus | rule | 137 |
| Concentric Attack Default 200% bonus | rule | 138 |
| Concentric Attack Default 250% bonus | rule | 139 |
| Allow artillery to fireback if artillery attack. (counter battery fire) 0=no, 1=yes | rule | 142 |
| Divisional Bonus Step 1 | rule | 143 |
| Divisional Bonus Step 2 | rule | 144 |
| Divisional Bonus Step 3 | rule | 145 |
| Divisional Bonus Step 4 | rule | 146 |
| Intercept range as 0.x of normal range | rule | 147 |
| Max division of attackval due to maxattacked | rule | 300 |
| If retreat with rdn <x chance for surrender (0=never) | rule | 301 |
| Non Artillery Land Attacks 1st round modifier. <1 is a penalty. 1=normal | rule | 316 |
| Non Artillery Land Attacks 2nd round modifier. <1 is a penalty. 1=normal | rule | 317 |
| Do airstrike on empty hex? 1=yes 0=no | rule | 318 |
| On startup lower Kill ratio to retreat hit. 1=no changes. 0.x = lower. | rule | 319 |
| Extra AP cost to move into hex (ap combat penalty) per combat round (fought with 100 stack points). Max 10 times this value. | rule | 325 |
| Airstrike always fights up all its action points like bombing attack (0=no 1=yes) | rule | 341 |
| Morale Hit for 1st attacked per round if not received any supplies (even if enough reserves) | rule | 467 |
| Readiness Hit for 1st attacked per round if not received any supplies (even if enough reserves) | rule | 468 |
| No counterattacks. 1=disable counter attacks. 0=keep counterattacks | rule | 807 |
| AttackMax in FrontagePts for Air to Ground battle in hex. 0=not active | rule | 833 |
| AttackMax in FrontagePts for Artillery attack on hex. 0=not active | rule | 834 |
| Airfield suprise start reduce attackpower % in combat. 0=none/rule not active | rule | 835 |
| Airfield suprise reducement diminishment every round. | rule | 836 |
| Intercept Chance Rule. Percentage chance of fail to intercept at edge of radius. 0=dont use rule | rule | 837 |
| Intercept Chance Rule. Percentage chance of fail to intercept at theoretical 0 distance. 0=dont use rule | rule | 838 |
| Put combat kills/loss statistics in the round they happened (as opposed to round they get reported in). 1=yes. | rule | 841 |
| Dont Use only % of xp bonus on hp. 0=normal/default.. 50=50%.. max 100%=no xp bonus on hitpoints. | rule | 876 |
| Dont Use only % of xp bonus on att points. 0=normal/default.. 50=50%.. max 100%=no xp bonus on attack points. | rule | 877 |
| Artillery capable equipment gets retreat kill modifier in NON-artillery attack. 0=no modifier used!. >0 is modifier use: 0.5 = half, 2=double | rule | 895 |
| When location is taking from any side by another side structural points are set to 0. 0=no, 1=yes | rule | 898 |
| Allow counter-attack when already beyond max-attacked. 0=no, 1=yes | rule | 925 |
| Combat Logging. Battles stringlist ID# (<=0 not enabled) | rule | 955 |
| Combat Logging. Historical Units stringlist ID# (<=0 not enabled) | rule | 956 |

