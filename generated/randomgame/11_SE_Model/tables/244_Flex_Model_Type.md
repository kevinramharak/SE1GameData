# `Flex Model Type` (`244`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `11` |
| Name | [SE_Model](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Model Type ID | `Text` |
| `1` | Name | `Text` |
| `2` | SFType Base ID | `Text` |
| `3` | BP Base Cost | `Text` |
| `4` | Choice 1 ID | `Text` |
| `5` | Choice 2 ID | `Text` |
| `6` | IF Logic for Discovery | `Text` |
| `7` | Org Type ID | `Text` |
| `8` | OR org Type ID | `Text` |
| `9` | Reinf Lib ID | `Text` |
| `10` | Reinf Lib Name | `Text` |
| `11` | New Col | `Text` |
| `12` | New Col | `Text` |
| `13` | Upgradeable | `Text` |
| `14` | Replaceable | `Text` |
| `15` | Choice 3 ID | `Text` |
| `16` | DrawTypeID | `Text` |
| `17` | Description | `Text` |
| `18` | warpath_off | `Text` |
| `19` | warpath_def | `Text` |

### Data

| Model Type ID | Name | SFType Base ID | BP Base Cost | Choice 1 ID | Choice 2 ID | IF Logic for Discovery | Org Type ID | OR org Type ID | Reinf Lib ID | Reinf Lib Name | New Col | New Col | Upgradeable | Replaceable | Choice 3 ID | DrawTypeID | Description | warpath_off | warpath_def |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Infantry | 1 | 60 | 1 | 2 |  | 13 |  | 26 | Shadow Troops |  |  | 1 | 1 |  | 1 | Infantry is cheap and provides you with defensive strength. Especially if entrenched and in defensible terrain. | 20 | 80 |
| 2 | MG | 1 | 80 | 4 | 2 | model.1>0 | 13 |  | 37 | Shadow Troops |  |  | 1 | 2 |  | 1 | Like infantry, but equipped with a machine gun, which is an excellent defensive weapon. |  | 100 |
| 3 | Bazooka | 1 | 80 | 6 | 2 | model.1>0 | 13 |  | 38 | Shadow Troops |  |  | 1 | 3 |  | 1 | Like infantry, but equipped with a bazooka or RPG, which for its production cost is an excellent weapon against Armour. | 30 | 70 |
| 4 | Quad MG | 1 | 80 | 5 | 2 | model.2>0 & tech.311>=100 | 13 |  | 37 | Shadow Troops |  |  |  | 4 |  | 1 | By combining 4 regular MGs in to a Quad MG a phenomenal amount of fire power can be brought to bear on advancing enemy troops. | 25 | 200 |
| 5 | Jetpack Infantry | 1 | 120 | 1 | 2 | model.1>0 & tech.315>=100 | 13 |  | 55 | Shadow Troops |  |  |  | 5 |  | 1 | Jetpacks allow the Infantry to make small jumps giving them the mobility to be much more effective in offensive roles. |  |  |
| 11 | Truck | 9 | 60 | 24 | 0 | model.1>0 | 13 |  | 27 | Shadow Troops |  |  |  | 11 |  | 11 | A bare-bones design that allows you to motorize your Infantry or Artillery forces. They provide plenty of mobility, but they require more upkeep. |  |  |
| 12 | APC | 129 | 80 | 4 | 20 | model.41>0 | 13 |  | 34 | Shadow Troops |  |  |  | 12 | 24 | 12 | Like a Truck, but equipped with Tracks instead of Wheels and with Armour. Furthermore the APC has a MG mounted which gives it some punch. For cost calculations its size is level 3. | 66 | 33 |
| 13 | Motorbike Infantry | 1 | 60 | 1 | 2 | model.1>0 | 13 |  | 31 | Shadow Troops |  |  |  | 13 |  | 13 | This is the best price - quality Model Type to use for Reconnaissance.  Except for its mobility and recon capability it is much like regular Infantry when it is in combat. | 80 | 30 |
| 21 | Anti-Tank Gun | 3 | 60 | 8 | 2 | model.22>0; tech.302>=100; | 13 |  | 40 | Shadow Troops |  |  |  | 21 |  | 21 | If Bazooka’s are not cutting it anymore against enemy armour consider producing AT-Guns. These can use the newest tech in High Velocity Guns and pack as much punch as armour. They perform best in a defensive role. | 25 | 100 |
| 22 | Artillery | 5 | 80 | 8 | 2 | model.1>0 | 13 |  | 28 | Shadow Troops |  |  |  | 22 |  | 22 | Allows you to engage in Ranged Fire from adjoining hex of target. It guzzles ammunitions, but it allows you to do damage without engaging. | 80 | 50 |
| 23 | Mechanized Artillery | 5 | 120 | 8 | 20 | model.22>0 | 13 |  | 47 | Shadow Troops |  |  |  | 23 | 24 | 23 | Same as artillery but mounted on a medium chassis. It will be mobile and can be equipped with armour, allowing these guns to live longer in hot combat zones or to survive enemy shelling. | 100 | 20 |
| 31 | Light Tank | 10 | 80 | 8 | 20 | model.11>0 | 13 |  | 29 | Shadow Troops |  |  |  | 31 | 24 | 31 | A small chassis design that can support up to 100mm of armour and up to a 60mm gun. For cost calculations its size is level 4. | 110 | 30 |
| 32 | Medium Tank | 10 | 160 | 8 | 20 | model.31>0 | 13 |  | 30 | Shadow Troops |  |  |  | 32 | 24 | 32 | A medium chassis design that can support up to 200mm of armour and up to a 105mm gun. For cost calculations its size is level 6. | 130 | 40 |
| 33 | Heavy Tank | 10 | 240 | 8 | 20 | model.32>0 | 13 |  | 44 | Shadow Troops |  |  |  | 33 | 24 | 33 | A large chassis design that can support up to 300mm of armour and up to a 180mm gun. For cost calculations its size is level 8. | 150 | 50 |
| 34 | Assault Gun | 10 | 120 | 8 | 20 | model.32>0 | 13 |  | 30 | Shadow Troops |  |  |  | 34 | 24 | 34 | Much like a Medium Tank but without a Cupola, making it cheaper to produce, but less effective in an offensive role. | 80 | 100 |
| 35 | Tank Destroyer | 10 | 240 | 8 | 20 | model.33>0 | 13 |  | 45 | Shadow Troops |  |  |  | 35 | 24 | 35 | Much like a Heavy Tank, but without a Cupola, making it cheaper to produce, but less effective in an offensive role. Furthermore the design is really focussed on killing enemy armour and much less on killing softer targets. | 60 | 120 |
| 36 | Monitor Tank | 10 | 320 | 8 | 20 | model.33>0 & tech.329>=100 | 13 |  | 44 | Shadow Troops |  |  |  | 36 | 24 | 36 | An extra large chassis design that can support up to 400mm of armour and up to a 300mm gun. For cost calculations its size is level 10. | 100 | 100 |
| 41 | Recon Buggy | 10 | 60 | 4 | 20 | model.1>0 | 13 |  | 46 | Shadow Troops |  |  |  | 41 | 24 | 41 | It is cheap, it is small, it can easily be given an overpowered motor and on top of that it has a MG. Furthermore it has excellent Recon capabilities. Use Buggies as Scouts or for harassing enemy soft targets. Keep them away from enemy tanks. | 70 | 10 |
| 51 | Walker | 127 | 240 | 14 | 20 | model.33>0 & tech.101>=100 | 13 |  | 39 | Shadow Troops |  |  |  | 51 | 24 | 51 | The Walker is a hydraulics based biped that functions much like tank but due to its locomotion can traverse hard terrains (much like infantry). Due to its Heavy Machine Guns it is very effective against especially softer targets. | 130 | 30 |
| 52 | Heavy Walker | 127 | 360 | 8 | 20 | model.51>0 | 13 |  | 48 | Shadow Troops |  |  |  | 52 | 24 | 52 | Much like regular Walker, but build with a larger chassis. It can support a Gun of up to 180mm. Its main role would be to destroy enemy Walkers and heavier equipment. | 170 | 30 |
| 61 | Rocket Launcher | 5 | 160 | 15 | 20 | model.23>0 & tech.102>=100 | 13 |  | 49 | Shadow Troops |  |  |  | 61 | 24 | 61 | Depending on the type of Rockets used these Launchers can do Ranged Fire up to 4 Hexes away. | 100 | 100 |
| 62 | Missile Launcher | 5 | 320 | 16 | 20 | model.61>0 & tech.103>=100 | 13 |  | 50 | Shadow Troops |  |  |  | 62 | 24 | 62 | Missiles are much like Rockets only bigger. Missile Launchers can do Ranged Fire up to 7 Hexes away. | 140 | 140 |
| 63 | Atomic Launcher | 5 | 320 | 18 | 20 | model.62>0 & tech.320>=100 | 13 |  | 57 | Shadow Troops |  |  |  | 63 | 24 | 63 | Much like a regular Missile Launcher except for the fact it is able to launcher Atomic Missiles. Its base range is 4. It support launching up to 10MT warheads. | 150 | 150 |
| 64 | ICBM Launcher | 5 | 480 | 19 | 20 | model.63>0 & tech.331>=100 | 13 |  | 56 | Shadow Troops |  |  |  | 64 |  | 64 | The Intercontinental Ballistic Missile Launch Platform is immobile but can launch its missiles planet-wide. It can launch the biggest of warheads you can research and once you have them operational will change the nature of warfare. | 200 | 200 |
| 71 | Robotic Infantry | 1 | 400 | 1 | 2 | model.51>0 & tech.342>=100 | 13 |  | 26 | Shadow Troops |  |  |  | 71 |  | 1 | These are very much the same as regular Infantry, except that they are robotic. They thus do not require manpower to produce. They are however less intelligent than humans and will perform more poorly especially when used in an offensive role. | 10 | 130 |
| 72 | Automated Turret | 10 | 120 | 8 | 20 | model.73>0 & tech.326>=100 | 13 |  | 51 | Shadow Troops |  |  |  | 72 |  | 72 | These are fully automated systems that function reasonably well. It allows you to save manpower and upkeep costs. They are however fully immobile. So only strategic transfer can relocate them. These robotic systems are less intelligent than humans and will perform slightly less well. | 0 | 100 |
| 73 | Automated MG | 1 | 80 | 4 | 20 | model.2>0 & tech.326>=100 | 13 |  | 52 | Shadow Troops |  |  |  | 73 |  | 73 | These are fully automated systems that function reasonably well. It allows you to save manpower and upkeep costs. They are however fully immobile. So only strategic transfer can relocate them. These robotic systems are less intelligent than humans and will perform slightly less well. | 0 | 150 |
| 81 | Mechanized Quad MG | 10 | 160 | 5 | 20 | model.4>0 & tech.311>=100 | 13 |  | 58 | Shadow Troops |  |  |  | 81 | 24 | 81 | This is basically a Quad MG mounted on a small chassis. It allows for armour and speed and is an excellent complement to join in an attack of heavier armour as it will be especially adept at neutralizing soft targets. | 125 | 25 |
| 91 | Mobile Shield | 130 | 240 | 23 | 24 | model.32>0 & tech.338>=100 | 13 |  | 53 | Shadow Troops |  |  |  | 91 |  | 91 | Shield Generators extend an energy shield over all friendly troops to protect them from enemy fire. This mobile version is the most useful as it can be used in an offensive role. | 200 | 200 |
| 92 | Wide Area Shield | 130 | 360 | 23 |  | model.91>0 & tech.338>=100 | 13 |  | 54 | Shadow Troops |  |  |  | 92 |  | 92 | Shield Generators extend an energy shield over all friendly troops to protect them from enemy fire. This is an immobile installation that can only be moved by strategic transfer. It can be equipped with the strongest of Shield Generators. | 0 | 300 |

