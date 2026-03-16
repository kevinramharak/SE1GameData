# `Flex Model Type` (`225`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
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
| `9` | Reinf ID (lib ID initially) | `Text` |
| `10` | Reinf Lib Name | `Text` |
| `11` | New Col | `Text` |
| `12` | New Col | `Text` |
| `13` | Upgradeable | `Text` |
| `14` | Replaceable | `Text` |
| `15` | Choice 3 ID | `Text` |
| `16` | Drawing Type | `Text` |
| `17` | Illustration | `Text` |
| `18` | New Col | `Text` |
| `19` | New Col | `Text` |
| `20` | New Col | `Text` |
| `21` | Choice4 | `Text` |
| `22` | Choice5 | `Text` |
| `23` | Choice6 | `Text` |

### Data

| Model Type ID | Name | SFType Base ID | BP Base Cost | Choice 1 ID | Choice 2 ID | IF Logic for Discovery | Org Type ID | OR org Type ID | Reinf ID (lib ID initially) | Reinf Lib Name | New Col | New Col | Upgradeable | Replaceable | Choice 3 ID | Drawing Type | Illustration | New Col | New Col | New Col | Choice4 | Choice5 | Choice6 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Infantry | 1 | 120 | 1 | 2 |  | 13 |  | 0 | Shadow Troops | -1 |  | 1 | 1 |  | 1 | Infantry is cheap and provides you with defensive strength. Especially if entrenched and in defensible terrain. | 20 | 80 | 1 |  |  |  |
| 2 | MG | 1 | 160 | 4 | 2 | model.1>0 | 13 |  | 7 | Shadow Troops | -1 |  | 1 | 2 |  | 1 | Like infantry, but equipped with a machine gun, which is an excellent defensive weapon. |  | 100 | 1 |  |  |  |
| 3 | Bazooka | 1 | 160 | 6 | 2 | model.1>0 | 13 |  | 8 | Shadow Troops | -1 |  | 1 | 3 |  | 1 | Like infantry, but equipped with a bazooka or RPG, which for its production cost is an excellent weapon against Armour. | 30 | 70 | 1 |  |  |  |
| 4 | Quad MG | 1 | 160 | 5 | 2 | model.2>0 & tech.311>=100 | 13 |  | 7 | Shadow Troops | -1 |  |  | 4 |  | 1 | By combining 4 regular MGs in to a Quad MG a phenomenal amount of fire power can be brought to bear on advancing enemy troops. | 25 | 200 | 4 |  |  |  |
| 5 | Jetpack Infantry | 1 | 240 | 1 | 2 | model.1>0 & tech.315>=100 | 13 |  | 25 | Shadow Troops | -1 |  |  | 5 |  | 1 | Jetpacks allow the Infantry to make small jumps giving them the mobility to be much more effective in offensive roles. |  |  |  |  |  |  |
| 11 | Truck | 9 | 120 | 24 | 0 | model.1>0 | 13 |  | 1 | Shadow Troops | -1 |  |  | 11 |  | 11 | A bare-bones design that allows you to motorize your Infantry or Artillery forces. They provide plenty of mobility, but they require more upkeep. |  |  | 3 |  |  |  |
| 12 | APC | 129 | 160 | 4 | 20 | model.41>0 | 13 |  | 6 | Shadow Troops | -1 |  |  | 12 | 24 | 12 | Like a Truck, but equipped with Tracks instead of Wheels and with Armour. Furthermore the APC has a MG mounted which gives it some punch. For cost calculations its size is level 3. | 66 | 33 | 4 |  |  |  |
| 13 | Motorbike Infantry | 1 | 120 | 1 | 2 | model.1>0 | 13 |  | 5 | Shadow Troops | -1 |  |  | 13 |  | 13 | This is the best price - quality Model Type to use for Reconnaissance.  Except for its mobility and recon capability it is much like regular Infantry when it is in combat. | 80 | 30 | 2 |  |  |  |
| 21 | Anti-Tank Gun | 3 | 120 | 8 | 2 | model.22>0; tech.302>=100; | 13 |  | 20 | Shadow Troops | -1 |  |  | 21 |  | 21 | If Bazooka’s are not cutting it anymore against enemy armour consider producing AT-Guns. These can use the newest tech in High Velocity Guns and pack as much punch as armour. They perform best in a defensive role. | 25 | 100 | 3 |  |  |  |
| 22 | Artillery | 5 | 160 | 8 | 2 | model.1>0 | 13 |  | 2 | Shadow Troops | -1 |  |  | 22 |  | 22 | Allows you to engage in Ranged Fire from adjoining hex of target. It guzzles ammunitions, but it allows you to do damage without engaging. | 80 | 50 | 2 |  |  |  |
| 23 | Mechanized Artillery | 5 | 240 | 8 | 20 | model.22>0 | 13 |  | 16 | Shadow Troops | -1 |  |  | 23 | 24 | 23 | Same as artillery but mounted on a medium chassis. It will be mobile and can be equipped with armour, allowing these guns to live longer in hot combat zones or to survive enemy shelling. | 100 | 20 | 6 |  |  |  |
| 31 | Light Tank | 10 | 160 | 8 | 20 | model.11>0 | 13 |  | 3 | Shadow Troops | -1 |  |  | 31 | 24 | 31 | A small chassis design that can support up to 100mm of armour and up to a 60mm gun. For cost calculations its size is level 4. | 110 | 30 | 2 |  |  |  |
| 32 | Medium Tank | 10 | 320 | 8 | 20 | model.31>0 | 13 |  | 4 | Shadow Troops | -1 |  |  | 32 | 24 | 32 | A medium chassis design that can support up to 200mm of armour and up to a 105mm gun. For cost calculations its size is level 6. | 130 | 40 | 3 |  |  |  |
| 33 | Heavy Tank | 10 | 480 | 8 | 20 | model.32>0 | 13 |  | 13 | Shadow Troops | -1 |  |  | 33 | 24 | 33 | A large chassis design that can support up to 300mm of armour and up to a 180mm gun. For cost calculations its size is level 8. | 150 | 50 | 5 |  |  |  |
| 34 | Assault Gun | 10 | 240 | 8 | 20 | model.32>0 | 13 |  | 4 | Shadow Troops | -1 |  |  | 34 | 24 | 34 | Much like a Medium Tank but without a Cupola, making it cheaper to produce, but less effective in an offensive role. | 80 | 100 | 4 |  |  |  |
| 35 | Tank Destroyer | 10 | 480 | 8 | 20 | model.33>0 | 13 |  | 14 | Shadow Troops | -1 |  |  | 35 | 24 | 35 | Much like a Heavy Tank, but without a Cupola, making it cheaper to produce, but less effective in an offensive role. Furthermore the design is really focussed on killing enemy armour and much less on killing softer targets. | 60 | 120 | 5 |  |  |  |
| 36 | Monitor Tank | 10 | 640 | 8 | 20 | model.33>0 & tech.329>=100 | 13 |  | 13 | Shadow Troops | -1 |  |  | 36 | 24 | 36 | An extra large chassis design that can support up to 400mm of armour and up to a 300mm gun. For cost calculations its size is level 10. | 100 | 100 | 6 |  |  |  |
| 41 | Recon Buggy | 10 | 120 | 4 | 20 | model.1>0 | 13 |  | 15 | Shadow Troops | -1 |  |  | 41 | 24 | 41 | It is cheap, it is small, it can easily be given an overpowered motor and on top of that it has a MG. Furthermore it has excellent Recon capabilities. Use Buggies as Scouts or for harassing enemy soft targets. Keep them away from enemy tanks. | 70 | 10 | 2 |  |  |  |
| 51 | Walker | 127 | 480 | 14 | 20 | model.33>0 & tech.101>=100 | 13 |  | 9 | Shadow Troops | -1 |  |  | 51 | 24 | 51 | The Walker is a hydraulics based biped that functions much like tank but due to its locomotion can traverse hard terrains (much like infantry). Due to its Heavy Machine Guns it is very effective against especially softer targets. | 130 | 30 | 6 |  |  |  |
| 52 | Heavy Walker | 127 | 720 | 8 | 20 | model.51>0 | 13 |  | 17 | Shadow Troops | -1 |  |  | 52 | 24 | 52 | Much like regular Walker, but build with a larger chassis. It can support a Gun of up to 180mm. Its main role would be to destroy enemy Walkers and heavier equipment. | 170 | 30 | 7 |  |  |  |
| 61 | Rocket Launcher | 5 | 320 | 15 | 20 | model.23>0 & tech.102>=100 | 13 |  | 18 | Shadow Troops | -1 |  |  | 61 | 24 | 61 | Depending on the type of Rockets used these Launchers can do Ranged Fire up to 4 Hexes away. | 100 | 100 | 4 |  |  |  |
| 62 | Missile Launcher | 5 | 640 | 16 | 20 | model.61>0 & tech.103>=100 | 13 |  | 19 | Shadow Troops | -1 |  |  | 62 | 24 | 62 | Missiles are much like Rockets only bigger. Missile Launchers can do Ranged Fire up to 7 Hexes away. | 140 | 140 | 5 |  |  |  |
| 63 | Atomic Launcher | 5 | 640 | 18 | 20 | model.62>0 & tech.320>=100 | 13 |  | 27 | Shadow Troops | -1 |  |  | 63 | 24 | 63 | Much like a regular Missile Launcher except for the fact it is able to launcher Atomic Missiles. Its base range is 4. It support launching up to 10MT warheads. | 150 | 150 | 7 |  |  |  |
| 64 | ICBM Launcher | 5 | 960 | 19 | 20 | model.63>0 & tech.331>=100 | 13 |  | 26 | Shadow Troops | -1 |  |  | 64 |  | 64 | The Intercontinental Ballistic Missile Launch Platform is immobile but can launch its missiles planet-wide. It can launch the biggest of warheads you can research and once you have them operational will change the nature of warfare. | 200 | 200 | 7 |  |  |  |
| 71 | Robotic Infantry | 1 | 800 | 1 | 2 | model.51>0 & tech.342>=100 | 13 |  | 0 | Shadow Troops | -1 |  |  | 71 |  | 1 | These are very much the same as regular Infantry, except that they are robotic. They thus do not require manpower to produce. They are however less intelligent than humans and will perform more poorly especially when used in an offensive role. | 10 | 130 | 6 |  |  |  |
| 72 | Automated Turret | 10 | 240 | 8 | 20 | model.73>0 & tech.326>=100 | 13 |  | 21 | Shadow Troops | -1 |  |  | 72 |  | 72 | These are fully automated systems that function reasonably well. It allows you to save manpower and upkeep costs. They are however fully immobile. So only strategic transfer can relocate them. These robotic systems are less intelligent than humans and will perform slightly less well. | 0 | 100 | 6 |  |  |  |
| 73 | Automated MG | 1 | 160 | 4 | 20 | model.2>0 & tech.326>=100 | 13 |  | 22 | Shadow Troops | -1 |  |  | 73 |  | 73 | These are fully automated systems that function reasonably well. It allows you to save manpower and upkeep costs. They are however fully immobile. So only strategic transfer can relocate them. These robotic systems are less intelligent than humans and will perform slightly less well. | 0 | 150 | 6 |  |  |  |
| 81 | Mechanized Quad MG | 10 | 320 | 5 | 20 | model.4>0 & tech.311>=100 | 13 |  | 28 | Shadow Troops | -1 |  |  | 81 | 24 | 81 | This is basically a Quad MG mounted on a small chassis. It allows for armour and speed and is an excellent complement to join in an attack of heavier armour as it will be especially adept at neutralizing soft targets. | 125 | 25 | 5 |  |  |  |
| 91 | Mobile Shield | 130 | 480 | 23 | 24 | model.32>0 & tech.338>=100 | 13 |  | 23 | Shadow Troops | -1 |  |  | 91 |  | 91 | Shield Generators extend an energy shield over all friendly troops to protect them from enemy fire. This mobile version is the most useful as it can be used in an offensive role. | 200 | 200 | 6 |  |  |  |
| 92 | Wide Area Shield | 130 | 720 | 23 |  | model.91>0 & tech.338>=100 | 13 |  | 24 | Shadow Troops | -1 |  |  | 92 |  | 92 | Shield Generators extend an energy shield over all friendly troops to protect them from enemy fire. This is an immobile installation that can only be moved by strategic transfer. It can be equipped with the strongest of Shield Generators. | 0 | 300 | 6 |  |  |  |
| 101 | Ultralight Aircraft | 46 | 160 | 28 | 30 | model.1>0; tech.350>=100|TECH.356>=100; | 13 |  | 30 | Shadow Troops | -1 |  |  | 101 | 40 | 101 | A very small frame makes this aircraft the cheapest to produce, but due to its size mostly useful for recon purposes. MG allowed, Cupola not allowed, No rockets or missiles allowed, Max bombs 1.000kg. Minimum Airbase Lvl 1. | 100 | 100 | 2 | 42 | 50 | 60 |
| 102 | Light Aircraft | 46 | 160 | 28 | 30 | model.101>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 102 | 40 | 102 | A small frame makes for hi-performance fighter potential. MG allowed, Cupola not allowed, Max Rocket Lvl 3, Max Missile Lvl 2, Max bombs 5.000kg. Minimum Airbase Lvl 2. | 100 | 100 | 3 | 42 | 50 | 60 |
| 103 | Medium Aircraft (1e) | 46 | 160 | 28 | 30 | model.102>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 103 | 40 | 103 | A good frame size for a fighter-bomber or long-range fighter. MG allowed, Cupola not allowed, Max Rocket Lvl 4, Max Missile Lvl 3, Max bombs 20.000kg. Minimum Airbase Lvl 3. | 100 | 100 | 4 | 42 | 50 | 60 |
| 104 | Medium Aircraft (2e) | 46 | 160 | 28 | 30 | model.103>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 104 | 40 | 104 | A good frame size for a light bomber or long range fighter. MG allowed, Cupola not allowed, Max Rocket Lvl 4, Max Missile Lvl 3, Max bombs 20.000kg. Minimum Airbase Lvl 3. | 100 | 100 | 5 | 42 | 50 | 60 |
| 105 | Heavy Aircraft (2e) | 46 | 160 | 28 | 30 | model.103>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 105 | 40 | 105 | A heavy frame like this one is best used for designing transporters or bombers. MG not allowed, Cupola is allowed, No Rockets allowed, Max Missile Lvl 4, Max bombs 80.000kg. Minimum Airbase Lvl 4. | 100 | 100 | 6 | 42 | 50 | 60 |
| 106 | Heavy Aircraft (4e) | 46 | 160 | 28 | 30 | model.105>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 106 | 40 | 106 | A frame with 4 engines allows for a lot of potential lift. Ideal for a heavy bomber or transport. MG not allowed, Cupola is allowed, No Rockets allowed, Max Missile Lvl 4, Max bombs 80.000kg. Minimum Airbase Lvl 4. | 100 | 100 | 7 | 42 | 50 | 60 |
| 107 | X-Heavy Aircraft (4e) | 46 | 160 | 28 | 30 | model.105>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 107 | 40 | 107 | A frame with 4 engines allows for a lot of potential lift. Ideal for a heavy bomber or transport. MG not allowed, Cupola is allowed, No Rockets allowed, Max Missile Lvl 4, Max bombs 160.000kg. Minimum Airbase Lvl 5. | 100 | 100 | 8 | 42 | 50 | 60 |
| 108 | X-Heavy Aircraft (6e) | 46 | 160 | 28 | 30 | model.107>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 108 | 40 | 108 | For the hypotethical need of a frame with 6 engines. For ultra-heavy designs! MG not allowed, Cupola is allowed, No Rockets allowed, Max Missile Lvl 4, Max bombs 160.000kg. Minimum Airbase Lvl 5. | 100 | 100 | 9 | 42 | 50 | 60 |
| 111 | Light Helicopter | 46 | 160 | 28 | 30 | model.1>0 & tech.355>=100 | 13 |  | 30 | Shadow Troops | -1 |  |  | 111 | 42 | 111 | The advantage of helicopters is they can land anywhere. However they are always relatively slow. MG allowed, Cupola not allowed, Max Rockets Lvl 1, No Missiles allowed, Max bombs 2.000kg. | 100 | 100 | 3 | 50 | 60 | 70 |
| 112 | Medium Helicopter | 46 | 160 | 28 | 30 | model.111>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 112 | 42 | 112 | The advantage of helicopters is they can land anywhere. However they are always relatively slow. MG allowed, Cupola not allowed, Max Rockets Lvl 2, Max Missile Lvl 1, Max bombs 5.000kg. | 100 | 100 | 4 | 50 | 60 | 70 |
| 113 | Heavy Helicopter | 46 | 160 | 28 | 30 | model.112>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 113 | 42 | 113 | The advantage of helicopters is they can land anywhere. However they are always relatively slow. The Heavy Helicopter has 2 rotors for extra lift. MG allowed, Cupola not allowed, Max Rockets Lvl 3, Max Missile Lvl 2, Max bombs 10.000kg. | 100 | 100 | 5 | 50 | 60 | 70 |
| 121 | Light Thopter | 46 | 160 | 28 | 30 | model.1>0 & tech.359>=100 | 13 |  | 30 | Shadow Troops | -1 |  |  | 121 | 42 | 121 | The advantage of thopters is they can land anywhere without sacrificing speed. MG allowed, Cupola not allowed, Max Rockets Lvl 2, Max Missile Lvl 2, Max bombs 5.000kg. | 100 | 100 | 3 | 50 | 60 | 70 |
| 122 | Medium Thopter | 46 | 160 | 28 | 30 | model.121>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 122 | 42 | 122 | The advantage of thopters is they can land anywhere without sacrificing speed. MG allowed, Cupola not allowed, Max Rockets Lvl 3, Max Missile Lvl 3, Max bombs 20.000kg. | 100 | 100 | 4 | 50 | 60 | 70 |
| 123 | Heavy Thopter | 46 | 160 | 28 | 30 | model.122>0 | 13 |  | 30 | Shadow Troops | -1 |  |  | 123 | 42 | 123 | The advantage of thopters is they can land anywhere without sacrificing speed. MG allowed, Cupola not allowed, Max Rockets Lvl 4, Max Missile Lvl 4, Max bombs 80.000kg. | 100 | 100 | 5 | 50 | 60 | 70 |
| 131 | SAM Launcher | 5 | 640 | 75 | 20 | model.62>0 & tech.103>=100 | 13 |  | 35 | Shadow Troops | -1 |  |  | 131 | 24 | 62 | Long range anti-air defences with a multiple-hex range. Very powerful weaponry. | 50 | 100 | 4 |  |  |  |
| 132 | Flak Gun | 5 | 240 | 76 | 2 | model.21>0 & tech.302>=100 | 13 |  | 36 | Shadow Troops | -1 |  |  | 132 |  | 132 | Flak guns are a classic air defense, reasonably cheap and with a range of 1 Hex. | 50 | 100 | 2 |  |  |  |
| 133 | Manpad | 1 | 320 | 77 | 2 | model.3>0; tech.305>=100; | 13 |  | 37 | Shadow Troops | -1 |  | 1 | 133 |  | 1 | Man portable launchers, they are only effective in their own Hex. | 50 | 100 | 3 |  |  |  |
| 901 | Auxilliary Troops | -1 | 0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

