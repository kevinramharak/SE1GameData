---
title: "DC1 AI"
docKind: "type"
fieldsCount: 57
appearsIn: []
library:
  key: "root"
  name: "Root"
  id: -1
typeGroup:
  key: "rules"
  name: "Rules"
type:
  key: "DC1-AI-18"
  name: "DC1 AI"
  id: "18"
---

# DC1 AI

<!-- @include: ./_notes.md -->

## Fields

| Name | Type | Value |
| --- | --- | --- |
| NEW AI/DC2 AI: If falls below or equal this ammount of VP. It means (DEAD) end of game. 0=not used. | rule | 265 |
| NEW AI: Areagroups are defined in slot# (1-9). 0=not used. | rule | 267 |
| NEW AI. expect divisions / multi-united historical units. 0=do expect. 1=do not expect | rule | 356 |
| NEW AI. VP without locations are areacenters too. 0=no they are not 1=yes they are | rule | 357 |
| NEW AI. Attack from X points. 0=default. >0 overrule=> 20=aggressive very much. 80=cautious. | rule | 358 |
| NEW AI. Hex occupation modifier for ATTacker. 0=default. 100%. 50%=half. 200%=double. | rule | 359 |
| NEW AI. Hex occupation modifier for DEFender. 0=default. 100%. 50%=half. 200%=double. | rule | 360 |
| NEW AI. Air Penalty distance. 0=default. >0 is number of hexes equal below gives penalty. | rule | 361 |
| NEW AI. Normal HQ Penalty distance. 0=default. >0 is number of hexes equal below gives penalty. | rule | 362 |
| NEW AI. Penalties given to Air/HQ. 0=default. >0 is number of points. | rule | 363 |
| NEW AI. Penalties given to Air/HQ in Port hex. 0=default. >0 is number of points. | rule | 364 |
| NEW AI. Is HQ on supplyline/advancematrixline penalty mod. 0=default. 100%. 50%=half. 200%=double. | rule | 365 |
| NEW AI. Is average HQ power below 100% penalties. 0=default. 100%. 50%=half. 200%=double. | rule | 366 |
| NEW AI. Score modifier for Attacks for Attacker. 0=default. 100%. 50%=half. 200%=double. | rule | 367 |
| NEW AI. Score modifier for Attacks for Defender. 0=default. 100%. 50%=half. 200%=double. | rule | 368 |
| NEW AI. Moving in modifier for Attacker. 0=default. 100%. 50%=half. 200%=double. | rule | 369 |
| NEW AI. Moving in modifier for Defender. 0=default. 100%. 50%=half. 200%=double. | rule | 370 |
| NEW AI. Counterattack modifier for attacker. 0=default. 100%. 50%=half. 200%=double. | rule | 371 |
| NEW AI. Counterattack modifier for Defender. 0=default. 100%. 50%=half. 200%=double. | rule | 372 |
| NEW AI. Countermove modifier for attacker. 0=default. 100%. 50%=half. 200%=double. | rule | 373 |
| NEW AI. Countermove modifier for Defender. 0=default. 100%. 50%=half. 200%=double. | rule | 374 |
| NEW AI. Get ourselves encircled for attacker. 0=default. 100%. 50%=half. 200%=double. | rule | 375 |
| NEW AI. Get ourselves encircled for Defender. 0=default. 100%. 50%=half. 200%=double. | rule | 376 |
| NEW AI. Entrenchment points modifier for Attacker. 0=default (def=low). 100%. 50%=half. 200%=double. | rule | 377 |
| NEW AI. Entrenchments points modifier for Defender. 0=default. 100%. 50%=half. 200%=double. | rule | 378 |
| NEW AI. Stacking penalty modifier. 0=default. 100%. 50%=half. 200%=double. | rule | 379 |
| NEW AI. Enemy encircled modifier for Attacker. 0=default (def=25%). 100%. 50%=half. 200%=double. | rule | 380 |
| NEW AI. Enemy encircled modifier for Defender. 0=default (def=25%). 100%. 50%=half. 200%=double. | rule | 381 |
| NEW AI. AdvanceMatrix for units for Attacker. 0=default (def=30%). 100%. 50%=half. 200%=double. | rule | 382 |
| NEW AI. AdvanceMatrix for hexes for Attacker. 0=default (def=15%). 100%. 50%=half. 200%=double. | rule | 383 |
| NEW AI. Combat Target Size modifier Above X powpts. 0=default(def=80) >0 is X powpts | rule | 384 |
| NEW AI. Allow areas without road to be connected. 0=no. 1=yes | rule | 385 |
| NEW AI. Give defender full attacks in Strategy Simulation. 0=no. 1=yes | rule | 386 |
| NEW AI. Modifier for strategy calcs for attack casualty rate. >1 less <1 more. 0=dont use | rule | 394 |
| NEW AI. Modifier for strategy calcs for counterattack casualty rate. >1 less <1 more. 0=dont use | rule | 395 |
| NEW AI. Allow joining of non kampfgruppes. 0=dont. 1=do. | rule | 800 |
| NEW AI. Unlimited Strategic Transfer for AI. 0=dont. 1=do. | rule | 802 |
| NEW AI. Forbid AI to blow bridges. 1=forbid. 0=allow. | rule | 809 |
| NEW AI. Friendly Strategic Corps Movement speed-up. 0=none.. 1=double... 2=triple | rule | 811 |
| NEW AI. LOG OPTION. Make screenshot of areas. 0=no. 1=yes | rule | 812 |
| NEW AI. AI CONSERVATIVE. 0=use always. 1=strategic only. 2=tactical only | rule | 813 |
| NEW AI. STRATEGIC CALCS. Prohibit enemy from moving fast. 0=no, 1=yes | rule | 826 |
| NEW AI. STRATEGIC CALCS. Prohibit making alarm groups + offensive detachments. 0=no, 1=yes, 2=attacker only alarm | rule | 827 |
| NEW AI. STRATEGIC CALCS. Prohibit enemy transfer+relocate. 0=no, >1 is divided by that number. the more the less transfer | rule | 828 |
| NEW AI. STRATEGIC CALCS. STRATEGIC. Counter attack damage modifier. 0 is no. >1 is divided by that number | rule | 829 |
| NEW AI. STRATEGIC CALCS. Allow aggressive relocate of enemy. (is std if enemy is attacker/meeting) 0=no 1=yes | rule | 830 |
| NEW AI. STRATEGIC CALCS. Extra (virtual) Hex Distance between areas to make counterattack slower. (4hex p.r) | rule | 831 |
| NEW AI. STRATEGIC CALCS IMPLEMENTATION. Add 1 round Inertia to changing attack plans. 0=no, 1=yes. | rule | 832 |
| NEW AI. Allow changing of SO Air intercept stance by AI. 0=no. >0 is the multiplication of own strenght in cosidering. | rule | 842 |
| NEW AI: Games last round. Used for predicting losing scn for attacker. 0=not used. | rule | 844 |
| NEW AI: All Corps(5) HQs act as if they are fixed | rule | 888 |
| NEW AI: Work with Sub-Corps groups. 0=no, 1=yes [not fully developed, only use in few round scenarios] | rule | 889 |
| NEW AI/DC2 AI: Enemy uses different supply movetype. 0=no, >0 = movetype used by enemy. | rule | 890 |
| NEW AI: Test method. 0=dont use. >0= ID of historical unit HQ who's group is only tactical test | rule | 891 |
| NEW AI: Test method. 0=dont use. >0= ID of historical unit HQ who's group is only tactical test | rule | 892 |
| NEW AI: Test method. 0=dont use. >0= ID of historical unit HQ who's group is only tactical test | rule | 893 |
| NEW AI: Offensive Zone Distance Agnosticity. 0=dont use. >0 = % of AP distance more allowed of top result. When active uses enemyPower as deciding | rule | 989 |

