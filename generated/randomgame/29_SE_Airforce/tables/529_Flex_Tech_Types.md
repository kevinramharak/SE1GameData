# `Flex Tech Types` (`529`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `29` |
| Name | [SE_Airforce](../) |
| Library ID | `529` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Tech Type ID | `Text` |
| `1` | Name | `Text` |
| `2` | Type | `Text` |
| `3` | OrgType ID | `Text` |
| `4` | or OrgType ID | `Text` |
| `5` | BP for discovery | `Text` |
| `6` | BP for Research Roll | `Text` |
| `7` | Discovery IF Logic | `Text` |
| `8` | Disc. Text | `Text` |
| `9` | Description | `Text` |
| `10` | Group | `Text` |
| `11` | Tech Path: Weapon | `Text` |
| `12` | Tech Path: Economy | `Text` |
| `13` | Tech Path: Artillery | `Text` |
| `14` | Str Path: Offensive | `Text` |
| `15` | Str Path: Defensive | `Text` |
| `16` | Min SHQ Stage | `Text` |
| `17` | Item Shortage | `Text` |
| `18` | Item Surplus | `Text` |
| `19` | AI Boost IF > 0 | `Text` |
| `20` | Always IF | `Text` |
| `21` | New Col | `Text` |

### Data

| Tech Type ID | Name | Type | OrgType ID | or OrgType ID | BP for discovery | BP for Research Roll | Discovery IF Logic | Disc. Text | Description | Group | Tech Path: Weapon | Tech Path: Economy | Tech Path: Artillery | Str Path: Offensive | Str Path: Defensive | Min SHQ Stage | Item Shortage | Item Surplus | AI Boost IF > 0 | Always IF | New Col |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 350 | Propeller Engine | 1 | 61 | 2 | 100 | 80 | RANDOMKEY.21>50; | If we would attach a propeller to a regular Engine wouldn't we be able to create lift? | Allows you to design aircraft that use Propeller Engines. | 202 | 100 |  | 100 | 100 | 200 | 2 |  |  |  |  | 1 |
| 351 | Turboprop Engine | 1 | 61 | 2 | 200 | 400 | TECH.350>=100; RANDOMKEY.21>50; | By supercharging the airflow we should be able to improve on the regular Propeller Engine... | Allows you to design aircraft that use Turboprop Engines. | 204 | 50 |  | 100 | 125 | 100 | 3 |  |  |  |  | 1 |
| 352 | Jet Engine | 1 | 61 | 2 | 300 | 800 | TECH.350>=100; RANDOMKEY.21>50; | Why use a propeller at all? It occured to us that heating the air might make an engine much more powerful... | Allows you to design aircraft that use Jet Engines. | 208 |  |  | 100 | 150 | 50 | 4 |  |  |  |  | 1 |
| 353 | Turbojet Engine | 1 | 61 | 2 | 400 | 1600 | TECH.352>=100; RANDOMKEY.21>50; | If we supercharge the airflow in a Jet Engine we could get even better performance... | Allows you to design aircraft that use Turbojet Engines. | 212 |  |  | 100 | 175 |  | 5 |  |  |  |  | 1 |
| 354 | Plasma Engine | 1 | 61 | 2 | 600 | 3200 | TECH.353>=100; RANDOMKEY.21>50; | This is very theoretical at the moment, but using Plasma containment couldn't we create a super powerful engine? | Allows you to design aircraft that use Plasma Engines. The most powerful engines there are. | 217 |  |  | 100 | 200 |  | 6 |  |  |  |  | 1 |
| 355 | Helicopter Engine | 1 | 61 | 2 | 150 | 400 | TECH.350>=100; RANDOMKEY.21>50; | By changing a propeller design into a much larger rotor design, we would be able to design helicopters, no? | Allows you to design helicopters. | 204 | 100 |  | 100 | 100 | 50 | 3 |  |  |  |  | 1 |
| 356 | Rocket Engine | 1 | 61 | 2 | 200 | 800 |  | What if we place big rockets on our aircraft designs? They would allow flight even in zero-G.... | Allows you to design aircraft that use Light and Medium Rocket Engines. | 203 |  |  | 100 | 150 |  | 3 |  |  |  |  | 2 |
| 357 | Heavy Rocket Engine | 1 | 61 | 2 | 300 | 1600 | TECH.356>=100 | And what if we design even bigger rockets? The sky is the limit, no? | Allows you to design aircraft that use Heavy and Very Heavy Rocket Engines. | 207 |  |  | 100 | 175 |  | 4 |  |  |  |  | 2 |
| 358 | Very Heavy Rocket Engine | 1 | 61 | 2 | 400 | 3200 | TECH.357>=100 | And what if we design even bigger rockets? The sky is the limit, no? | Allows you to design aircraft that use Super Heavy and Mega Heavy Rocket Engines. | 210 |  |  | 100 | 50 |  | 5 |  |  |  |  | 2 |
| 359 | Thopter Wings | 1 | 61 | 2 | 250 | 800 | TECH.352>=100; RANDOMKEY.21>50; | Looking at birds, we asked ourselves if we couldn't design an aircraft that uses that flapping motion... | Allows you to design Thopters. | 209 | 100 |  | 100 | 100 | 25 | 3 |  |  |  |  | 3 |
| 360 | VTOL Turbojet  Engines | 1 | 61 | 2 | 350 | 1600 | TECH.353>=100; RANDOMKEY.21>50; | What if a Jet Engine could rotate to make vertical landing and take-off possible? | Allows you to design aircraft that use VTOL engines that allow for vertical landing and takeoff. | 209 |  |  | 100 | 50 | 50 | 4 |  |  |  |  | 1 |
| 361 | Lightweight Alloys | 2 | 61 | 2 | 100 | 10 | TECH.350>=100 | If we reduce the weight of aircraft components than that would increase its speed.. | This tech allows you to improve the power : weight ratio of your flying designs. | 205 |  |  | 100 | 100 |  | 4 |  |  |  |  | 4 |
| 362 | Propeller Engine Efficiency | 2 | 61 | 2 | 100 | 10 | TECH.350>=100; RANDOMKEY.21>50; | There are a zillion ways we could tinker with Propeller Engine designs to make them more efficient. | This tech allows you to improve the power of Propeller Engines. | 206 |  |  | 100 | 120 |  | 4 |  |  |  |  | 1 |
| 363 | Jet Engine Efficiency | 2 | 61 | 2 | 100 | 10 | TECH.352>=100; RANDOMKEY.21>50; | There are a zillion ways we could tinker with Jet Engine designs to make them more efficient. | This tech allows you to improve the power of Jet Engines. | 206 |  |  | 100 | 140 |  | 5 |  |  |  |  | 1 |
| 364 | Rocket Engine Efficiency | 2 | 61 | 2 | 100 | 10 | TECH.356>=100 | There are a zillion ways we could tinker with Rocket Engine designs to make them more efficient. | This tech allows you to improve the power of Rocket Engines. | 205 |  |  | 100 | 120 |  | 5 |  |  |  |  | 2 |
| 365 | Aerodynamic Design | 2 | 61 | 2 | 100 | 10 | TECH.350>=100 | The aerodynamics of an aircraft are very important for reaching higher speeds. We could focus design on improving this... | This tech allows you to improve the aerodynamics of your flying designs. | 206 |  |  | 100 | 140 |  | 4 |  |  |  |  | 4 |
| 366 | Aircraft Design | 2 | 61 | 2 | 100 | 10 | TECH.350>=100 | What if we just sit back and rethink all our apriori's concerning Aircraft Design? | This tech allows you to improve the general design of your aircraft. | 206 |  |  | 100 | 150 |  | 4 |  |  |  |  | 4 |
| 367 | Helicopter Design | 2 | 61 | 2 | 100 | 10 | TECH.355>=100; RANDOMKEY.21>50; | What if we just sit back and rethink all our apriori's concerning Helicopter Design? | This tech allows you to improve the general design of your helicopters. | 206 |  |  | 100 | 125 |  | 5 |  |  |  |  | 1 |
| 368 | Thopter Design | 2 | 61 | 2 | 100 | 10 | TECH.359>=100; RANDOMKEY.21>50; | What if we just sit back and rethink all our apriori's concerning Thopter Design? | This tech allows you to improve the general design of your thopters. | 206 |  |  | 100 | 175 |  | 5 |  |  |  |  | 3 |
| 369 | Aircraft Ruggedness | 2 | 61 | 2 | 100 | 10 | TECH.350>=100 | The more sturdy the parts and their connections the more of a beating the aircraft will be able to take in battle... | This tech allows you to increase the hitpoints of your flying designs. | 206 |  |  | 100 | 150 |  | 5 |  |  |  |  | 4 |

