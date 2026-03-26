---
title: "DC2 AI"
docKind: "type"
fieldsCount: 68
appearsIn: []
library:
  key: "root"
  name: "Root"
  id: -1
typeGroup:
  key: "rules"
  name: "Rules"
type:
  key: "DC2-AI-19"
  name: "DC2 AI"
  id: "19"
---

# DC2 AI

<!-- @include: ./_notes.md -->

## Fields

| Name | Type | Value |
| --- | --- | --- |
| DC2 AI: AI only change HQs if no HQ left... 0=no keep to default behaviour, 1=yes limit AI HQ changing | rule | 465 |
| DC4 AI: Do not wait out enemy pockets... keep attacking.. 0=no/default, 1=yes hammer them out. | rule | 466 |
| DC2 AI: Maximum number of Battlegroups created by the AI per round. | rule | 600 |
| DC2 AI: Prevent small low-mobility units to be seen as garrisons 0/1 | rule | 601 |
| DC2 AI: Block Product6 overruling of garrison rules 0/1 | rule | 602 |
| DC2 AI: Assume city level X will be able to receive air supply (0=no assumption here) | rule | 603 |
| DC2 AI: Play Cards that put Supply Bases on hexes (0=no, 1=yes rarely, 2=yes sometimes, 4=when needed,8=often) | rule | 604 |
| DC2 AI: U meta relocations every X rounds | rule | 706 |
| DC2 AI: Use meta relocations stringlist slot | rule | 707 |
| Sand AI: Use the Sand AI? 0/1 (strategic upgrade of DC2 AI) | rule | 709 |
| DC2 AI: Do not assign strict front HQ to OTHER front if that front has origAverageStr > x : (0=dont use) | rule | 745 |
| DC2 AI: Do not assign strict front HQ from ORIGIN front if that front has origAverageStr < x : (0=dont use) | rule | 746 |
| DC2 AI: Multiplier for distance negative effect for front HQ change to another front (0=dont use) | rule | 747 |
| DC2 AI: Do not allow wiping of offensive zone assignments if other closer HQs are already assigned (0=dont use, 1=do not allow wipe) | rule | 748 |
| DC2 AI: AI uses dynamic OOB+regime cards. 0=no, 1=yes, -1=no, but uses regime cards | rule | 913 |
| DC2 AI: AI gets free units, hq switches, officer assignments. 0=no, 1=yes | rule | 914 |
| DC2 AI: General hisvar type best for officers in ANY command (0=dont use) | rule | 915 |
| DC2 AI: Officer hisvar type best for officers in NOT lowest HQ command (0=dont use) | rule | 916 |
| DC2 AI: Disable FULL RETREAT stance to avoid encirclement. 1=disable. | rule | 917 |
| DC2 AI: Disable normal RETREAT stance to keep line always. 1=disable | rule | 918 |
| DC2 AI: Garrison I only hex with X vp or more. 0=dont do | rule | 919 |
| DC2 AI: Garrison I only hex within X distance of enemy. 0=dont do | rule | 920 |
| DC2 AI: Always garrison port hexes irrespective of VP. 0=dont do, 1=yes do | rule | 921 |
| DC2 AI: Garrison hex with X vp or more always (irrespective enemy dist). 0=dont do | rule | 922 |
| DC2 AI: Garrison II only hex with X vp or more. 0=dont do | rule | 923 |
| DC2 AI: Garrison II only hex within X distance of enemy. 0=dont do | rule | 924 |
| DC2 AI: Top Operations (Panzer Focus). 0=dont do. 1=100% are, 2=50% are, 3=33.3% are.. | rule | 928 |
| DC2 AI: Power Points in reinforcements expected for FRIENDLY. | rule | 929 |
| DC2 AI: Power Points in reinforcements expected for ENEMY. | rule | 930 |
| DC2 AI: Max iterations into the future for strategic (0=default, 4=normal). | rule | 931 |
| DC2 AI: Max frontline depth  (0=default value 3). | rule | 932 |
| DC2 AI: Max frontline length  (0=default value 12). | rule | 933 |
| DC2 AI: Also allow creation of new HQ if not officers in officerpool. 0=no, 1=yes | rule | 934 |
| DC2 AI: Maximum units per corps (for new corps HQ calculations). 0=unlimited. | rule | 935 |
| DC2 AI: Maximum corps per army (for new army HQ calculations). 0=unlimited. | rule | 936 |
| DC2 AI: Howmany subparts must a 'armour' unit have to be considered a TOPunit. | rule | 937 |
| DC2 AI: UberRegime gives all units except airTransport+Sea to unterRegime. 1=yes. | rule | 938 |
| DC2 AI: Fortress Mode for encircled troops if >= then X VP. 0=never do. | rule | 939 |
| DC2 AI: Always Protect VP in frontline fronts. 0=no, 1=yes, 2=yes even if retreat front (Delay action) | rule | 940 |
| DC2 AI: Turn on debug screenshots and logs. 0=no, 1=yes. (can create lot of files, delete often) | rule | 941 |
| DC2 AI: Modify minimum attack. 0=no mod. 1=no mod. <1 is less offensive power needed. >1 more offensive power needed. | rule | 942 |
| DC2 AI: Modify own strength perception. 0=no mod. 1=no mod. <1 is less strong. >1 stronger. | rule | 943 |
| DC2 AI: Superfront use by looking at hex of HQ level at type X <=0 = disabled.  type=6=hq of lowest hq,7=hq of hq of lowest hq , etc.. | rule | 958 |
| DC2 AI: if Superfront use. Uses event X to set superfront numbers to hexes. -1=do not call an event all values of 960 areaslot will be 0. | rule | 959 |
| DC2 AI: if Superfront use. Uses areaslot X to read superfront numbers from hexes. (0-9) | rule | 960 |
| DC2 AI: Stricter HQ-Front assignments. Set to 1 to use. Usefull for scenarios where re-assigning HQs for units is not possible. | rule | 961 |
| DC2 AI: Long term prognosis enemy movement (ap) capacity. -1=increased, 0=default, 1=half, 2=none | rule | 962 |
| DC2 AI: Use offensive or defensive zones? 0=no, 1=offensive zones, 2=defensive zones | rule | 963 |
| DC2 AI: Offensive/defensive/retreat_mod zones. Use areaslot X to read zone numbers. (0-9) | rule | 964 |
| DC2 AI: Use event X to set offensive/defensive zone numbers to hexes. -1=do not call an event all values of 964 areaslot will be 0. | rule | 965 |
| DC2 AI: Set >0 to enable Subgroups in Strict HQs (SSHQ). >=1 = max in subgroup. | rule | 967 |
| DC2 AI: Set >0 to enable different sized 2nd,3rd,etc.. groups in Strict HQs (SSHQ). >=1 = max in 2nd,3rd,etc.. subgroup. | rule | 968 |
| DC2 AI: Use MLA >0 = yes. if >0 it specifies range of MLA average construction. | rule | 969 |
| DC2 AI: Minimal HQ re-assignment for regular units. (works better with StrictHQs). 0=off/1=on | rule | 970 |
| DC2 AI: At what hex size does a classic defensive zone becomes a broad defensive zone? 0=off/>0=hexes. | rule | 979 |
| DC2 AI: Use event X to set retreat modifier. -1=do not call an event all values of 964 areaslot will be 100. | rule | 980 |
| DC2 AI: Use event X to set strength modifier. -1=do not call an event all values of 964 areaslot will be 100. | rule | 981 |
| DC2 AI: Favorise top-unit attacks. 0=don't. >=1 is extra strength in % point + >=1 means unit favorised as attack choice. | rule | 982 |
| DC2 AI: Strength modifier is also minimum combat advantage modifier. 0=no. 1=yes. | rule | 985 |
| DC2 AI: Offensive zones go ALL-OUT for breakthrough and terrain gain. 0=no. 1=yes. 2=extremely so. | rule | 986 |
| DC2 AI: AI uses different rulevar73 hexes of 100% hq power. 0=no >0 = the value used. | rule | 987 |
| DC2 AI: AI Siege Artillery simulation. 0=not used. >0 is maximum entrenchment of enemy in that hex. example: 20 is max 20 entrenchment pts. | rule | 991 |
| DC2 AI: AI suplementary combat bonus. 0=not used. >0 = extra combat bonus. | rule | 992 |
| DC2 AI: AI never gets it concentric bonus reduced due to using units from different HQs. Plus extra emphasis on concentric. 0=no, 1=yes | rule | 993 |
| DC2 AI: More emphasis on preventing enemy concentric attacks. 0=no, 1=yes | rule | 994 |
| DC2 AI: AI never gets RdnLossPer100ap used. 0=no, 1=yes, 2=only half | rule | 995 |
| Revised Panic Rules (always possible) (0=no, 1=yes) | rule | 996 |
| DC2 AI: Use Different Distance Importance Weights for StrictHQ reshuffles. 0=no, 1=dist less important, 2=much less | rule | 997 |

