---
title: "Height, Los, Dc4 Gen features"
docKind: "type"
fieldsCount: 84
appearsIn: []
library:
  key: "root"
  name: "Root"
  id: -1
typeGroup:
  key: "rules"
  name: "Rules"
type:
  key: "Height--Los--Dc4-Gen-features-21"
  name: "Height, Los, Dc4 Gen features"
  id: "21"
---

# Height, Los, Dc4 Gen features

<!-- @include: ./_notes.md -->

## Fields

| Name | Type | Value |
| --- | --- | --- |
| The turn after the night turn? 1=yes, 0=no | rule | 393 |
| Vigor rules. Maximum vigor loss per power point. (to avoid very small units excessive vigor loss) | rule | 396 |
| Vigor rules. Loss of 1/1000th vigor per casualty % point | rule | 397 |
| Vigor reduction in points if did move/attack (5) | rule | 398 |
| Vigor rules. 0=off , >0 is the number of points recovered for no move/no attack (15) | rule | 399 |
| Use LAND Height Map Feature? 0=no, >0 = stringlist ID | rule | 415 |
| Use SEA Height Map Feature? 0=no, >0 = stringlist ID | rule | 416 |
| Use Beach Coloring Feature? 0=no, >0 = stringlist ID | rule | 417 |
| Use River Canyoning? 0=no, >0 = stringlist ID | rule | 418 |
| Use Advanced Recon Rules (LOS) System 0/1. Also enables Direct Fire. | rule | 419 |
| Advanced Recon Rules. 1st Hex Divider | rule | 420 |
| Advanced Recon Rules. 2nd+ Hex Divider | rule | 421 |
| Advanced Recon Rules. Maximum Range. 0=no range | rule | 422 |
| Advanced Recon Rules. XP Level switch point penalty and bonus on Recon/Hide Pts | rule | 423 |
| Height Map Rules. Base Height Level Defending Units Hitpoint Modifier for being lower | rule | 424 |
| Height Map Rules. Base Height Level Defending Units Hitpoint Modifier for being higher | rule | 425 |
| Height Map Rules. Base Height Level Modifier for Movement without Road | rule | 426 |
| Height Map Rules. Base Height Level Modifier for Movement with Road | rule | 427 |
| Intercept Fire: 0=off, >=1=on, 1=1 round, 2=2 rounds, etc... | rule | 428 |
| Direct Fire can Target Rear-Area Troops chance. 0=no, 1=yes | rule | 429 |
| Indirect Ranged Fire gets bonus if LOS% on hex. 0=no, 1.0=100% bonus, 0.5=50% bonus (modified for Los%) | rule | 430 |
| Combat Recon: 0=off, 1=on | rule | 431 |
| Combat Recon: Hitpoint Maximum Increase Factor (*X) | rule | 432 |
| Combat Recon: Markers: 0=off, 1=on | rule | 433 |
| Simple Supply Need Rules: 0=off, 1=on | rule | 434 |
| Unit-based Fuel: 0=off, 1=on | rule | 435 |
| Intercept Fire: Reduction in Consumption and Rdn loss 0.x (0=free. 0.5=half cost) | rule | 436 |
| Simple Supply Need Rules: Maximum Supply Consume % loss in absolute points | rule | 437 |
| Simple Supply Need Rules: Maximum extra Morale Hit if hit while on reduced consumption rations | rule | 438 |
| Simple Supply Need Rules: Lowest reduced consumption ration allowed in % (25=always triest at least 25% of full consumption) | rule | 439 |
| Fuzzy Ownership: Hide normal Hex owner, use alternative indication for others. 0=off, 1=on | rule | 455 |
| Fuzzy Ownership: Are Blocked Markers visible? 0=no never, 1=on road/bridge, 2=on all hexes | rule | 456 |
| Wider order bar buttons. 0=no, >0 = extra width | rule | 458 |
| Use Road Traffic Points Rules 0=no, 1=yes | rule | 459 |
| Use Bigger Info Window for Trooptypes 0=no, 1=yes | rule | 460 |
| High HQs are Static, also OOB-wise, 0=no, 1=yes | rule | 461 |
| Supply Base System Active, 0=no, 1=yes | rule | 462 |
| Supply Base Supply Capture Percentage, 0=none, 50=half, 100=all | rule | 463 |
| Movement Type that uses towing rules. 0=none ... >= 100 uses these rules. 100=movement type 0, 101=movtype 1, etc.. | rule | 464 |
| Morale Hit at start of turn if out-of-supply (even if enough reserves) | rule | 469 |
| Night Mode 0=no, 1=yes (graphical and some combat and movement effects). | rule | 470 |
| Use Supply Source Rules 0=off / >0 = loctype slot used. | rule | 471 |
| Use AP Reserve rules 0=off / >0 = AP gained per turn | rule | 472 |
| Maximum AP Reserve. | rule | 473 |
| Transport Movement Mode. 0=off >0 = minimum percentage Transport Movement Type of Unit. | rule | 474 |
| Battelgroup and Limited Transfer rules. 0=off, 1=on. | rule | 475 |
| Minimum Power Points for Battlegroup. | rule | 476 |
| Maximum Power Points for Battlegroup. | rule | 477 |
| Battlegroup Rulevar that is unused for now. | rule | 478 |
| Optional Stringlist ID for Battlegroup Names. 0=none, >=1 is ID. | rule | 479 |
| Counter-Battery Fire Revised Rules (they become priority targets) 0=no,1=yes. | rule | 480 |
| Modified Retreat/Panic percentages. 0=no,1=yes. | rule | 481 |
| Attack Type Option Available. 0=no,1=yes. | rule | 482 |
| Engineers can construct bridge even if enemy on other side. 0=no,1=yes. | rule | 483 |
| Different Move Modes available. 0=no, 1=yes | rule | 484 |
| Intercept+Ranged Fire List feature. 0=no, 1=yes | rule | 485 |
| Scrapping Rules. 0=no, >=1 is the ID of the Stringlist for instructions | rule | 486 |
| New turn resets x% of Traffic Points to 0 (0=all, 5=only 5%, 50=50%, 75=75, 100=all) | rule | 487 |
| Fuel Weight 0.x... | rule | 488 |
| Binary Fuel deliveries.. 0=no, 1=yes | rule | 489 |
| Linear Carry Capacity.. 0=no, >0 = maximum extra carry cap% (for example 33 for 33%) | rule | 490 |
| New Landscape Type Graphics System 0=no, 1=yes | rule | 491 |
| New Trooptype Graphics System 0=no, 1=yes | rule | 492 |
| Allow partial-troop attacks (who can move in) 0=no, 1=yes | rule | 493 |
| Snow entrenchment modifier  (0= dont use , 50=half, 100=norm, 200=double). default=50 | rule | 494 |
| Icy + slippery. For offroad and road. Increase AP cost per height lvl (0=nothing,50=50%) default=100 | rule | 495 |
| NOT YET USED. Snowy roads not yet cleaned (0=nothing, 25=+25% , 50=+50%) default=+100 | rule | 496 |
| Extra Morale impact based on power point loss and kill ratio of Unit…. 1dX …. Base = 6 | rule | 497 |
| NOT YET USED. If enemy opposite when constructing bridge.. how much % it fails (0=none) default=50 | rule | 498 |
| Supply Log Stringlist ID | rule | 499 |
| Use Break Contact Fire rules 0/1. | rule | 710 |
| Use Defensive Line Mode 0/1. | rule | 711 |
| Use Improvised River Crossing Rules 0=no >0=manpower req. | rule | 712 |
| Use Improvised River Crossing Rules MovmTypeProv=X. | rule | 713 |
| Use Fire Brigade Mode 0/1. | rule | 714 |
| Use Fieldwork rules 0/1. | rule | 721 |
| Max Weight for Type1 Bridge. | rule | 722 |
| Use Rail Gauge rules 0/1. | rule | 723 |
| Road Traffic Impact Rules Start 0=no | rule | 724 |
| Road Traffic Impact Rules Step Size | rule | 725 |
| Optimized Supply Source rules 0/1 | rule | 726 |
| Winter Preparedness Rules 0/1 | rule | 727 |
| Dynamic Trooptype Graphics 0/1 | rule | 728 |
| Bind Attack Option 0/1 | rule | 729 |

