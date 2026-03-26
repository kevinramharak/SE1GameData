---
title: "LIS, UDS, Se1 Gen features"
docKind: "type"
fieldsCount: 30
appearsIn: []
library:
  key: "root"
  name: "Root"
  id: -1
typeGroup:
  key: "rules"
  name: "Rules"
type:
  key: "LIS--UDS--Se1-Gen-features-22"
  name: "LIS, UDS, Se1 Gen features"
  id: "22"
---

# LIS, UDS, Se1 Gen features

<!-- @include: ./_notes.md -->

## Fields

| Name | Type | Value |
| --- | --- | --- |
| GUI: Show Zone Boundaries on Map. (0=no, 1=yes), (needs setting of groupname 742,743 as well to read zone numbers) | rule | 401 |
| Use event# for set units ready. 0=no, >0 = event slot called by each unit | rule | 402 |
| Enable LIS systems 0/1. | rule | 403 |
| LIS systems: Stringlist ID for items stringlist | rule | 404 |
| LIS systems: Stringlist ID for transport mode stringlist | rule | 405 |
| LIS systems: Stringlist ID for location points and free AP | rule | 406 |
| LIS systems: Stringlist ID for SFType requests and uses | rule | 407 |
| UDS Order Bar Active. 0=no, >0 = event number to call | rule | 408 |
| UDS Order Bar Stringlist | rule | 409 |
| UDS Unit Tab. 0=no >0 = event number to call | rule | 410 |
| Stringlist ID info to be shown in top bar. Col 0 = Regime Slot, Col 1= 'name specified in | rule | 411 |
| LIS systems: Stringlist ID for SFType - RegimeId quality levels | rule | 412 |
| Regime sprites: use composite sprite system? 1=yes, 0=no | rule | 413 |
| SFType Illustrations: use composite SFType var sprite system? 0=no, >0 = stringlist ID | rule | 414 |
| UDS: Bottom Page UDS active. 0/1. 1=it will use the extraTab system to call eventNr's and get name for tab. | rule | 440 |
| UDS: Management Tab pages Stringlist ID | rule | 441 |
| Random Screen Event# (0>0 means Random Screen will be activated) | rule | 442 |
| Randomscreen Tab pages stringlist ID# | rule | 443 |
| Randomscreen Map Tab (0=no map shown, 1=yes show the map) | rule | 444 |
| Dynamic Sound System turned on (0=no, 1=yes) | rule | 446 |
| Dynamic Tracks stringlist ID (<=0 = none) | rule | 447 |
| Mix Points stringlist ID (<=0 = none) | rule | 448 |
| Highlights stringlist ID (<=0 = none) | rule | 449 |
| UDS: Small Right Bottom UDS window | rule | 450 |
| Enable LIS Midcore rules 0/1. | rule | 611 |
| New Left/Right Click movement 0/1. | rule | 701 |
| LIS: Infra setup. 0=no, >0=event Nr | rule | 702 |
| LIS: Infra feedback. 0=no, >0=event Nr | rule | 703 |
| LIS: Infra execute. 0=no, >0=event Nr | rule | 704 |
| LIS: Infra select order. 0=no, >0=event Nr | rule | 705 |

