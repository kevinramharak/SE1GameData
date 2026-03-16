# `Flex Model Type Stats` (`247`)

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
| `1` | Stat ID | `Text` |
| `2` | Formula | `Text` |
| `3` | Fixed | `Text` |
| `4` | IF Clause | `Text` |
| `5` | n/a | `Text` |
| `6` | Comments | `Text` |
| `7` | Model Type Stat | `Text` |

### Data

| Model Type ID | Stat ID | Formula | Fixed | IF Clause | n/a | Comments | Model Type Stat |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [1][2][3][4][5][21][22][11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][13][131][133][132] | 401 | 1 | 2 |  |  | PROD POP COST for all non automated |  |
| [1][2][3][4][5][21][22][11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][13][131][133][132] | 301 | STAT.401 | 2 |  |  | FOOD UPKEEP COST |  |
| [1][2][3][4][5][21][22][13][132][133] | 403 | GAMEKEY.76 | 2 | STAT.42>=24 |  | PROD COST for Hazard Surplus Cost |  |
| [11] | 101 | 5 | 2 | STAT.101>0 |  | FUEL/ENERGY base usage |  |
| [11] | 102 | 5 | 2 | STAT.102>0 |  | FUEL/ENERGY base usage |  |
| [11] | 402 | 5 | 2 |  |  | PROD METAL COST for all vehicles, cost for the basic structure |  |
| [11] | 408 | 4 | 2 |  |  | Trucks need less Pop |  |
| [11] | 6 | 1 | 2 |  |  | SIZE for Truck |  |
| [11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][13][72][73][131] | 402 | STAT.6 * 2 | 2 |  |  | PROD METAL COST for all vehicles, cost for the chasis |  |
| [11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][13][72][73][131] | 403 | STAT.6 * 1 | 2 |  |  | PROD IP COST for all vehicles, cost for the chasis |  |
| [11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][131][101][102][103][104][105][106][107][108][111][112][113][121][122][123] | 403 | 3*GAMEKEY.76*max(SIZE/2,1) | 2 |  |  | PROD COST for Hazard Surplus Cost |  |
| [12] | 6 | 3 | 2 |  |  | SIZE for APC |  |
| [12] | 90 | 5 |  |  |  |  |  |
| [12] | 72 | 4 | 2 |  |  | Better RECON for APC, |  |
| [12][31][32][33][34][35][41][23][51][52][61][62][91][36][63][64][81][131] | 102 | 10 | 2 | STAT.102>0 |  | FUEL/ENERGY base usage |  |
| [12][31][32][33][34][35][41][23][51][52][61][62][91][36][63][64][81][131] | 402 | 10 | 2 |  |  | PROD METAL COST for all vehicles, cost for the basic structure |  |
| [12][31][32][33][34][35][41][23][51][52][61][62][91][36][63][64][81][131] | 101 | 10 | 2 | STAT.101>0 |  | FUEL/ENERGY base usage |  |
| [12][41] | 408 | 2 | 2 |  |  | APCs and Buggies need less Pop |  |
| [13] | 101 | 2 | 2 |  |  | MOVE FUEL COST for motorbikes (no engine choice) |  |
| [13] | 72 | 6 | 2 |  |  | Better RECON for Motorbike Infantry |  |
| [13] | 6 | 2 | 2 |  |  | SIZE for Motorbike Infantry |  |
| [131] | 537 | 2 | 2 |  |  | AA RANGE for SAM Launcher |  |
| [22] | 44 | 1 | 2 |  |  | RANGE for Artillery |  |
| [23] | 44 | 1 | 2 |  |  | RANGE for Mechanized Artillery |  |
| [31][81] | 72 | 3 | 2 |  |  | Better RECON for Light Tank, Mechanized Quad MG |  |
| [31][81] | 6 | 4 | 2 |  |  | SIZE for Light Tank, Mechanized Quad MG |  |
| [32][34][23] | 6 | 6 | 2 |  |  | SIZE for Medium Tank,Assault Gun,Mechanized Artillery |  |
| [32][34][23] | 72 | 2 | 2 |  |  | Better RECON for Medium Tank,Assault Gun, Mechanized Artillery |  |
| [33][35] | 6 | 8 | 2 |  |  | SIZE for Heavy Tank,Tank Destroyer (Hvy) |  |
| [34] | 24 | 1 | 2 |  |  | Assault Gun has no Cupola functionality |  |
| [35] | 24 | 1 | 2 |  |  | Tank Destroyer has no Cupola functionality |  |
| [36] | 6 | 10 | 2 |  |  | SIZE for Monitor Tank |  |
| [41] | 6 | 3 | 2 |  |  | SIZE for Buggy |  |
| [41] | 72 | 6 | 2 |  |  | Better RECON for Buggy |  |
| [5] | 404 | 1 | 2 |  |  | PROD MACHINE COST for jetpack |  |
| [5] | 23 | 1 | 2 |  |  | JETPACK ACTIVE for Jetpack Infantry |  |
| [5] | 72 | 6 | 2 |  |  | Better RECON for Jetpack Infantry |  |
| [51] | 72 | 4 | 2 |  |  | Better RECON for Walker (Light) |  |
| [51] | 6 | 6 | 2 |  |  | SIZE for Walker (Light) |  |
| [51][52][61][62][63][64][91][92][71][131] | 404 | STAT.6 / 2 | 2 |  |  | PROD MACHINERY COST for walkers, launchers and platforms |  |
| [52] | 6 | 8 | 2 |  |  | SIZE for Heavy Walker (Hvy) |  |
| [52] | 72 | 3 | 2 |  |  | Better RECON for Heavy Walker (Hvy) |  |
| [61] | 44 | 2 | 2 |  |  | RANGE for Rocket Launcher |  |
| [61] | 6 | 6 | 2 |  |  | SIZE for Rocket Launcher (Med) |  |
| [61][13][41] | 90 | 2 | 2 |  |  | MOVETYPE=Wheel for RocketLauncher |  |
| [62] | 44 | 4 | 2 |  |  | RANGE for Missile Launcher |  |
| [62][63][131] | 6 | 8 | 2 |  |  | SIZE for Missile Launcher (Hvy) and Atomic Launcher |  |
| [62][63][23][131] | 90 | 5 | 2 |  |  | MOVETYPE=Tracked for other Launchers and Mech Artillery |  |
| [63] | 44 | 4 | 2 |  |  | RANGE for Atomic Launcher |  |
| [64] | 44 | 999 | 2 |  |  | RANGE for ICBM Launcher |  |
| [64][61][62][63][23][131] | 91 | 3 | 2 |  |  | UNITGROUP = Tank |  |
| [64][63][91][92] | 94 | 1 | 2 | Gas |  | RATIOVERRULE=1 for Platforms and Atmomic Launcher |  |
| [64][92] | 6 | 10 | 2 |  |  | SIZE for Immobile Platforms (wide area shield, icbm) |  |
| [71][72][73] | 405 | 1 | 2 |  |  | PROD HI-TECH  COST for automated or robot models |  |
| [71][72][73] | 302 | 3 | 2 |  |  | ENERGY UPKEEP COST for automated or robot models |  |
| [72][73] | 6 | 4 | 2 |  |  | SIZE for Automated Emplacements |  |
| [72][73][92][64] | 90 | 7 | 2 |  |  | MOVETYPE = Immobile |  |
| [91] | 76 | 1 | 2 |  |  | deplete hp rule |  |
| [91] | 6 | 10 | 2 |  |  | SIZE for Mobile Shield Generator (Mon) |  |
| [92] | 76 | 1 | 2 |  |  | deplete rule hp |  |
| [all] | 4 | 100 | 2 |  |  | ARMOUR STRENGTH for Padded Envirosuit | 42 |
| [all] | 4 | 50 | 2 |  |  | ARMOUR STRENGTH for Envirosuit | 42 |
| [all] | 4 | 1200 | 2 |  |  | ARMOUR STRENGTH for 150mm Steel Plating | 42 |
| [all] | 4 | 0 | 2 |  |  | ARMOUR STRENGTH for Filters + Thermosuit | 42 |
| [all] | 4 | 0 | 2 |  |  | ARMOUR STRENGTH for Thermosuit | 42 |
| [all] | 4 | 0 | 2 |  |  | ARMOUR STRENGTH for Filters | 42 |
| [all] | 73 | 80 | 2 |  |  | OVERRULE KILL% for Heavy Surface-Air Missiles | 534 |
| [all] | 73 | 60 | 2 |  |  | OVERRULE KILL% for Medium Surface-Air Missiles | 534 |
| [all] | 4 | 200 | 2 |  |  | ARMOUR STRENGTH for Combat Armour | 42 |
| [all] | 4 | 300 | 2 |  |  | ARMOUR STRENGTH for Heavy Combat Armour | 42 |
| [all] | 4 | 500 | 2 |  |  | ARMOUR STRENGTH for Envirosuit and Personal Shield Generator | 42 |
| [all] | 4 | 1000 | 2 |  |  | ARMOUR STRENGTH for Heavy Battledress | 42 |
| [all] | 4 | 3000 | 2 |  |  | ARMOUR STRENGTH for 400mm Steel Plating | 42 |
| [all] | 4 | 50 | 2 |  |  | ARMOUR STRENGTH for Minimal 5mm Steel Plating | 42 |
| [all] | 4 | 200 | 2 |  |  | ARMOUR STRENGTH for 25mm Steel Plating | 42 |
| [all] | 4 | 2400 | 2 |  |  | ARMOUR STRENGTH for 300mm Steel Plating | 42 |
| [all] | 73 | 40 | 2 |  |  | OVERRULE KILL% for Light Surface-Air Missiles | 534 |
| [all] | 4 | 400 | 2 |  |  | ARMOUR STRENGTH for 50mm Steel Plating | 42 |
| [all] | 4 | 800 | 2 |  |  | ARMOUR STRENGTH for 100mm Steel Plating | 42 |
| [all] | 4 | 1600 | 2 |  |  | ARMOUR STRENGTH for 200mm Steel Plating | 42 |
| [all] | 4 | 500 | 2 |  |  | ARMOUR STRENGTH for Battledress | 42 |
| [all] | 73 | 50 | 2 |  |  | OVERRULE KILL% for Tactical Nuke Grenade Launcher | 41 |
| [all] | 4 | 30 | 2 |  |  | Armour Strength = 30, free start |  |
| [all] | 73 | 70 | 2 |  |  | OVERRULE KILL% for 50 MegaTon ICBM | 41 |
| [all] | 405 | 4 | 2 |  |  | PROD HIGH TECH for Beam Gun | 41 |
| [all] | 405 | 6 | 2 |  |  | PROD HIGH TECH for Combined Beam Gun | 41 |
| [all] | 405 | 5 | 2 |  |  | PROD HIGH TECH for Light Plasma Blast Gun | 41 |
| [all] | 405 | 8 | 2 |  |  | PROD HIGH TECH for Medium Plasma Blast Gun | 41 |
| [all] | 405 | 11 | 2 |  |  | PROD HIGH TECH for Heavy Plasma Blast Gun | 41 |
| [all] | 405 | 14 | 2 |  |  | PROD HIGH TECH for Very Heavy Plasma Blast Gun | 41 |
| [all] | 404 | 2 | 2 |  |  | PROD MACHINERY for Micro Nuke RPG | 41 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for Light Conventional Missiles | 41 |
| [all] | 4 | 400 | 2 |  |  | ARMOUR STRENGTH for 25mm Polymer Plating | 42 |
| [all] | 404 | 12 | 2 |  |  | PROD MACHINERY for Medium Conventional Missiles | 41 |
| [all] | 404 | 14 | 2 |  |  | PROD MACHINERY for Heavy Conventional Missiles | 41 |
| [all] | 73 | 90 | 2 |  |  | OVERRULE KILL% for 100 MegaTon ICBM | 41 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for Atomic 1 MT Fission Missile | 41 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for 10 MegaTon ICBM | 41 |
| [all] | 404 | 20 | 2 |  |  | PROD MACHINERY for 50 MegaTon ICBM | 41 |
| [all] | 404 | 30 | 2 |  |  | PROD MACHINERY for 100 MegaTon ICBM | 41 |
| [all] | 404 | 5 | 2 |  |  | PROD MACHINERY for Tactical Nuke Grenade Launcher | 41 |
| [all] | 404 | 8 | 2 |  |  | PROD MACHINERY for Light Surface-Air Missiles | 534 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for Medium Surface-Air Missiles | 534 |
| [all] | 404 | 12 | 2 |  |  | PROD MACHINERY for Heavy Surface-Air Missiles | 534 |
| [all] | 73 | 50 | 2 |  |  | OVERRULE KILL% for Micro Nuke RPG | 41 |
| [all] | 73 | 30 | 2 |  |  | OVERRULE KILL% for Atomic 1 MT Fission Missile | 41 |
| [all] | 73 | 50 | 2 |  |  | OVERRULE KILL% for Atomic 10 MT Fusion Missile | 41 |
| [all] | 73 | 50 | 2 |  |  | OVERRULE KILL% for 10 MegaTon ICBM | 41 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for Atomic 10 MT Fusion Missile | 41 |
| [all] | 4 | 800 | 2 |  |  | ARMOUR STRENGTH for 50mm Polymer Plating | 42 |
| [all] | 78 | 70 | 2 |  |  | PROTECT CHANCE for Large Shield Generator | 42 |
| [all] | 4 | 2000 | 2 |  |  | ARMOUR STRENGTH for 150mm Polymer Plating | 42 |
| [all] | 78 | 90 | 2 |  |  | PROTECT CHANCE for XL Shield Generator | 42 |
| [all] | 78 | 100 | 2 |  |  | PROTECT CHANCE for XXL Shield Generator | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Filters | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Thermosuit | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Filters + Thermosuit | 42 |
| [all] | 402 | 1 | 2 |  |  | PROD COST METAL for Envirosuit | 42 |
| [all] | 402 | 2 | 2 |  |  | PROD COST METAL for Padded Envirosuit | 42 |
| [all] | 402 | 3 | 2 |  |  | PROD COST METAL for Combat Armour | 42 |
| [all] | 402 | 4 | 2 |  |  | PROD COST METAL for Heavy Combat Armour | 42 |
| [all] | 402 | 5 | 2 |  |  | PROD COST METAL for Battledress | 42 |
| [all] | 78 | 80 | 2 |  |  | PROTECT CHANCE for Very Large Shield Generator | 42 |
| [all] | 402 | 6 | 2 |  |  | PROD COST METAL for Heavy Battledress | 42 |
| [all] | 402 | 2   * SIZE / 2 | 2 |  |  | PROD COST METAL for Minimal 5mm Steel Plating | 42 |
| [all] | 402 | 6   * SIZE / 2 | 2 |  |  | PROD COST METAL for 25mm Steel Plating | 42 |
| [all] | 402 | 9  * SIZE / 2 | 2 |  |  | PROD COST METAL for 50mm Steel Plating | 42 |
| [all] | 402 | 14   * SIZE / 2 | 2 |  |  | PROD COST METAL for 100mm Steel Plating | 42 |
| [all] | 402 | 19  * SIZE / 2 | 2 |  |  | PROD COST METAL for 150mm Steel Plating | 42 |
| [all] | 402 | 24  * SIZE / 2 | 2 |  |  | PROD COST METAL for 200mm Steel Plating | 42 |
| [all] | 402 | 34  * SIZE / 2 | 2 |  |  | PROD COST METAL for 300mm Steel Plating | 42 |
| [all] | 402 | 44  * SIZE / 2 | 2 |  |  | PROD COST METAL for 400mm Steel Plating | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 25mm Polymer Plating | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 50mm Polymer Plating | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Envirosuit and Personal Shield Generator | 42 |
| [all] | 4 | 1400 | 2 |  |  | ARMOUR STRENGTH for 100mm Polymer Plating | 42 |
| [all] | 405 | 25 | 2 |  |  | PROD HIGH TECH for 100 MegaTon ICBM | 41 |
| [all] | 78 | 50 | 2 |  |  | PROTECT CHANCE for Small Shield Generator | 42 |
| [all] | 4 | 2600 | 2 |  |  | ARMOUR STRENGTH for 200mm Polymer Plating | 42 |
| [all] | 4 | 3400 | 2 |  |  | ARMOUR STRENGTH for 300mm Polymer Plating | 42 |
| [all] | 4 | 4200 | 2 |  |  | ARMOUR STRENGTH for 400mm Polymer Plating | 42 |
| [all] | 4 | 300 | 2 |  |  | ARMOUR STRENGTH for 25mm Liquid Armour | 42 |
| [all] | 4 | 600 | 2 |  |  | ARMOUR STRENGTH for 50mm Liquid Armour | 42 |
| [all] | 4 | 1200 | 2 |  |  | ARMOUR STRENGTH for 100mm Liquid Armour | 42 |
| [all] | 4 | 1800 | 2 |  |  | ARMOUR STRENGTH for 150mm Liquid Armour | 42 |
| [all] | 4 | 2400 | 2 |  |  | ARMOUR STRENGTH for 200mm Liquid Armour | 42 |
| [all] | 4 | 3200 | 2 |  |  | ARMOUR STRENGTH for 300mm Liquid Armour | 42 |
| [all] | 4 | 4000 | 2 |  |  | ARMOUR STRENGTH for 400mm Liquid Armour | 42 |
| [all] | 78 | 60 | 2 |  |  | PROTECT CHANCE for Medium Shield Generator | 42 |
| [all] | 4 | 6000 | 2 |  |  | ARMOUR STRENGTH for Small Shield Generator | 42 |
| [all] | 4 | 18000 | 2 |  |  | ARMOUR STRENGTH for Large Shield Generator | 42 |
| [all] | 4 | 24000 | 2 |  |  | ARMOUR STRENGTH for Very Large Shield Generator | 42 |
| [all] | 4 | 30000 | 2 |  |  | ARMOUR STRENGTH for XL Shield Generator | 42 |
| [all] | 4 | 36000 | 2 |  |  | ARMOUR STRENGTH for XXL Shield Generator | 42 |
| [all] | 202 | 100 | 2 |  |  | ENERGY CONSUMPTION COMBAT for Small Shield Generator | 42 |
| [all] | 202 | 200 | 2 |  |  | ENERGY CONSUMPTION COMBAT for Medium Shield Generator | 42 |
| [all] | 202 | 300 | 2 |  |  | ENERGY CONSUMPTION COMBAT for Large Shield Generator | 42 |
| [all] | 202 | 400 | 2 |  |  | ENERGY CONSUMPTION COMBAT for Very Large Shield Generator | 42 |
| [all] | 202 | 600 | 2 |  |  | ENERGY CONSUMPTION COMBAT for XL Shield Generator | 42 |
| [all] | 202 | 800 | 2 |  |  | ENERGY CONSUMPTION COMBAT for XXL Shield Generator | 42 |
| [all] | 4 | 12000 | 2 |  |  | ARMOUR STRENGTH for Medium Shield Generator | 42 |
| [all] | 405 | 20 | 2 |  |  | PROD HIGH TECH for 50 MegaTon ICBM | 41 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Very Heavy Plasma Blast Gun | 41 |
| [all] | 405 | 10 | 2 |  |  | PROD HIGH TECH for Atomic 10 MT Fusion Missile | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for Twin High Speed Heavy Machinegun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Twin Gauss Heavy Machinegun | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 403 | 24 | 2 |  |  | PROD IP for Twin Heavy Plasma Blaster | 41 |
| [all] | 403 | 20 | 2 |  |  | PROD IP for Small Rockets | 41 |
| [all] | 403 | 30 | 2 |  |  | PROD IP for Medium Rockets | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for Big Rockets | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for Light Conventional Missiles | 41 |
| [all] | 403 | 60 | 2 |  |  | PROD IP for Medium Conventional Missiles | 41 |
| [all] | 403 | 80 | 2 |  |  | PROD IP for Heavy Conventional Missiles | 41 |
| [all] | 403 | 20 | 2 |  |  | PROD IP for Plasma Missiles | 41 |
| [all] | 403 | 160 | 2 |  |  | PROD IP for Atomic 1 MT Fission Missile | 41 |
| [all] | 403 | 240 | 2 |  |  | PROD IP for Atomic 10 MT Fusion Missile | 41 |
| [all] | 403 | 320 | 2 |  |  | PROD IP for 10 MegaTon ICBM | 41 |
| [all] | 403 | 480 | 2 |  |  | PROD IP for 50 MegaTon ICBM | 41 |
| [all] | 403 | 640 | 2 |  |  | PROD IP for 100 MegaTon ICBM | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for 25mm Howitzer Gun | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for 40mm Howitzer Gun | 41 |
| [all] | 403 | 20 | 2 |  |  | PROD IP for 60mm Howitzer Gun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Twin Heavy Adv. Machinegun | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Twin Heavy Machinegun | 41 |
| [all] | 403 | 10 | 2 |  |  | PROD IP for Micro Nuke RPG | 41 |
| [all] | 403 | 7 | 2 |  |  | PROD IP for Heavy RPG | 41 |
| [all] | 403 | 3 | 2 |  |  | PROD IP for Charged Gauss Rifle | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Laser Rifle | 41 |
| [all] | 403 | 6 | 2 |  |  | PROD IP for Plasma Rifle | 41 |
| [all] | 403 | 2 | 2 |  |  | PROD IP for Machinegun | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Advcanced Machinegun | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for High Speed Machinegun | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Gas Powered Machinegun | 41 |
| [all] | 403 | 6 | 2 |  |  | PROD IP for Gauss Machinegun | 41 |
| [all] | 403 | 6 | 2 |  |  | PROD IP for Charged Gauss Machinegun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Tripod Assault Laser Rifle | 41 |
| [all] | 403 | 24 | 2 |  |  | PROD IP for 88mm Howitzer Gun | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Light Plasma Blaster | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Quad Adv. Machinegun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Quad High Speed Machinegun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Quad Gas Powered Machinegun | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Quad Gauss Machinegun | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Quad Charged Gauss Machinegun | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 403 | 24 | 2 |  |  | PROD IP for Quad Light Plasma Blaster | 41 |
| [all] | 403 | 1 | 2 |  |  | PROD IP for Bazooka | 41 |
| [all] | 403 | 3 | 2 |  |  | PROD IP for RPG | 41 |
| [all] | 403 | 5 | 2 |  |  | PROD IP for Guided RPG | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Quad Machinegun | 41 |
| [all] | 403 | 28 | 2 |  |  | PROD IP for 105mm Howitzer Gun | 41 |
| [all] | 403 | 32 | 2 |  |  | PROD IP for 150mm Howitzer Gun | 41 |
| [all] | 403 | 36 | 2 |  |  | PROD IP for 180mm Howitzer Gun | 41 |
| [all] | 403 | 50 | 2 |  |  | PROD IP for 88mm HV AA Gun | 534 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for 100mm SHV AA Gun | 534 |
| [all] | 403 | 200 | 2 |  |  | PROD IP for Twin-100mm SHV AA-Gun | 534 |
| [all] | 403 | 10 | 2 |  |  | PROD IP for MANPAD | 534 |
| [all] | 403 | 15 | 2 |  |  | PROD IP for Heavy MANPAD | 534 |
| [all] | 403 | 20 | 2 |  |  | PROD IP for Super-Heavy MANPAD | 534 |
| [all] | 407 | 2 | 2 |  |  | PROD RARE METALS for Laser Rifle | 41 |
| [all] | 407 | 4 | 2 |  |  | PROD RARE METALS for Tripod Assault Laser Rifle | 41 |
| [all] | 407 | 8 | 2 |  |  | PROD RARE METALS for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 407 | 8 | 2 |  |  | PROD RARE METALS for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 403 | 25 | 2 |  |  | PROD IP for 50mm HV AA Gun | 534 |
| [all] | 407 | 5 | 2 |  |  | PROD RARE METALS for Plasma Missiles | 41 |
| [all] | 407 | 15 | 2 |  |  | PROD RARE METALS for Medium Laser Gun | 41 |
| [all] | 407 | 20 | 2 |  |  | PROD RARE METALS for Heavy Laser Gun | 41 |
| [all] | 407 | 25 | 2 |  |  | PROD RARE METALS for Very Heavy Laser Gun | 41 |
| [all] | 407 | 20 | 2 |  |  | PROD RARE METALS for Beam Gun | 41 |
| [all] | 407 | 30 | 2 |  |  | PROD RARE METALS for Combined Beam Gun | 41 |
| [all] | 405 | 1 | 2 |  |  | PROD HIGH TECH for Plasma Rifle | 41 |
| [all] | 405 | 2 | 2 |  |  | PROD HIGH TECH for Light Plasma Blaster | 41 |
| [all] | 405 | 8 | 2 |  |  | PROD HIGH TECH for Quad Light Plasma Blaster | 41 |
| [all] | 405 | 4 | 2 |  |  | PROD HIGH TECH for Twin Heavy Plasma Blaster | 41 |
| [all] | 405 | 5 | 2 |  |  | PROD HIGH TECH for Plasma Missiles | 41 |
| [all] | 407 | 10 | 2 |  |  | PROD RARE METALS for Light Laser Gun | 41 |
| [all] | 405 | 15 | 2 |  |  | PROD HIGH TECH for 10 MegaTon ICBM | 41 |
| [all] | 403 | 80 | 2 |  |  | PROD IP for Heavy Surface-Air Missiles | 534 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for Light Surface-Air Missiles | 534 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for 240mm Howitzer Gun | 41 |
| [all] | 403 | 44 | 2 |  |  | PROD IP for 300mm Howitzer Gun | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for 25mm High Velocity Gun | 41 |
| [all] | 403 | 24 | 2 |  |  | PROD IP for 40mm High Velocity Gun | 41 |
| [all] | 403 | 32 | 2 |  |  | PROD IP for 60mm High Velocity Gun | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for 88mm High Velocity Gun | 41 |
| [all] | 403 | 48 | 2 |  |  | PROD IP for 105mm High Velocity Gun | 41 |
| [all] | 403 | 56 | 2 |  |  | PROD IP for 150mm High Velocity Gun | 41 |
| [all] | 403 | 64 | 2 |  |  | PROD IP for 180mm High Velocity Gun | 41 |
| [all] | 403 | 72 | 2 |  |  | PROD IP for 240mm High Velocity Gun | 41 |
| [all] | 403 | 60 | 2 |  |  | PROD IP for Medium Surface-Air Missiles | 534 |
| [all] | 403 | 80 | 2 |  |  | PROD IP for 300mm High Velocity Gun | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for Medium Laser Gun | 41 |
| [all] | 403 | 50 | 2 |  |  | PROD IP for Heavy Laser Gun | 41 |
| [all] | 403 | 60 | 2 |  |  | PROD IP for Very Heavy Laser Gun | 41 |
| [all] | 403 | 50 | 2 |  |  | PROD IP for Beam Gun | 41 |
| [all] | 403 | 70 | 2 |  |  | PROD IP for Combined Beam Gun | 41 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Light Plasma Blast Gun | 41 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Medium Plasma Blast Gun | 41 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Heavy Plasma Blast Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 100mm Polymer Plating | 42 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Tactical Nuke Grenade Launcher | 41 |
| [all] | 403 | 30 | 2 |  |  | PROD IP for Light Laser Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 150mm Polymer Plating | 42 |
| [all] | 403 | 10  * SIZE / 2 | 2 |  |  | PROD COST IP for 100mm Steel Plating | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 300mm Polymer Plating | 42 |
| [all] | 3 | 600 | 2 |  |  | ENGINE POWER for Triple Electric Engine | 43 |
| [all] | 3 | 1200 | 2 |  |  | ENGINE POWER for Nuclear Engine | 43 |
| [all] | 3 | 1800 | 2 |  |  | ENGINE POWER for Double Nuclear Engine | 43 |
| [all] | 3 | 2400 | 2 |  |  | ENGINE POWER for Triple Nuclear Engine | 43 |
| [all] | 5 | 45 | 2 |  |  | WEIGHT for Light Diesel | 43 |
| [all] | 5 | 60 | 2 |  |  | WEIGHT for Medium Diesel | 43 |
| [all] | 5 | 75 | 2 |  |  | WEIGHT for Heavy Diesel | 43 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Double Diesel | 43 |
| [all] | 5 | 125 | 2 |  |  | WEIGHT for Triple Diesel | 43 |
| [all] | 5 | 20 | 2 |  |  | WEIGHT for Light Electric | 43 |
| [all] | 5 | 30 | 2 |  |  | WEIGHT for Medium Electric | 43 |
| [all] | 5 | 40 | 2 |  |  | WEIGHT for Heavy Electric | 43 |
| [all] | 5 | 60 | 2 |  |  | WEIGHT for Double Electric | 43 |
| [all] | 5 | 80 | 2 |  |  | WEIGHT for Triple Electric | 43 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Nuclear | 43 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for Double Nuclear | 43 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Triple Nuclear | 43 |
| [all] | 101 | 1*SIZE*((50+stat.5)/100) +1 | 2 |  |  | FUEL/ENERGY USE for Light Diesel Engine | 43 |
| [all] | 101 | 1*SIZE*((50+stat.5)/100) +5 | 2 |  |  | FUEL/ENERGY USE for Medium Diesel Engine | 43 |
| [all] | 101 | 1*SIZE*((50+stat.5)/100) +10 | 2 |  |  | FUEL/ENERGY USE for Heavy Diesel Engine | 43 |
| [all] | 101 | 2*SIZE*((50+stat.5)/100) +15 | 2 |  |  | FUEL/ENERGY USE for Double Diesel Engine | 43 |
| [all] | 3 | 400 | 2 |  |  | ENGINE POWER for Double Electric Engine | 43 |
| [all] | 3 | 200 | 2 |  |  | ENGINE POWER for Heavy Electric Engine | 43 |
| [all] | 3 | 150 | 2 |  |  | ENGINE POWER for Medium Electric Engine | 43 |
| [all] | 3 | 100 | 2 |  |  | ENGINE POWER for Light Electric Engine | 43 |
| [all] | 5 | 100 * SIZE / 2 | 2 |  |  | WEIGHT for 150mm Polymer Plating | 42 |
| [all] | 5 | 125 * SIZE / 2 | 2 |  |  | WEIGHT for 200mm Polymer Plating | 42 |
| [all] | 5 | 150 * SIZE / 2 | 2 |  |  | WEIGHT for 300mm Polymer Plating | 42 |
| [all] | 5 | 175 * SIZE /2 | 2 |  |  | WEIGHT for 400mm Polymer Plating | 42 |
| [all] | 5 | 50 * SIZE / 2 | 2 |  |  | WEIGHT for 25mm Liquid Armour | 42 |
| [all] | 5 | 100 * SIZE / 2 | 2 |  |  | WEIGHT for 50mm Liquid Armour | 42 |
| [all] | 5 | 150 * SIZE / 2 | 2 |  |  | WEIGHT for 100mm Liquid Armour | 42 |
| [all] | 5 | 200 * SIZE / 2 | 2 |  |  | WEIGHT for 150mm Liquid Armour | 42 |
| [all] | 5 | 250 * SIZE / 2 | 2 |  |  | WEIGHT for 200mm Liquid Armour | 42 |
| [all] | 5 | 300 * SIZE / 2 | 2 |  |  | WEIGHT for 300mm Liquid Armour | 42 |
| [all] | 101 | 3*SIZE*((50+stat.5)/100) +20 | 2 |  |  | FUEL/ENERGY USE for Triple Diesel Engine | 43 |
| [all] | 5 | 350 * SIZE / 2 | 2 |  |  | WEIGHT for 400mm Liquid Armour | 42 |
| [all] | 5 | 600 | 2 |  |  | WEIGHT for Medium Shield Generator | 42 |
| [all] | 5 | 800 | 2 |  |  | WEIGHT for Large Shield Generator | 42 |
| [all] | 5 | 1200 | 2 |  |  | WEIGHT for Very Large Shield Generator | 42 |
| [all] | 5 | 1600 | 2 |  |  | WEIGHT for XL Shield Generator | 42 |
| [all] | 5 | 2000 | 2 |  |  | WEIGHT for XXL Shield Generator | 42 |
| [all] | 3 | 200 | 2 |  |  | ENGINE POWER for Light Diesel Engine | 43 |
| [all] | 3 | 300 | 2 |  |  | ENGINE POWER for Medium Diesel Engine | 43 |
| [all] | 3 | 400 | 2 |  |  | ENGINE POWER for Heavy Diesel Engine | 43 |
| [all] | 3 | 800 | 2 |  |  | ENGINE POWER for Double Diesel Engine | 43 |
| [all] | 3 | 1200 | 2 |  |  | ENGINE POWER for Triple Diesel Engine | 43 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Small Shield Generator | 42 |
| [all] | 102 | 1*SIZE*((50+stat.5)/100) +1 | 2 |  |  | FUEL/ENERGY USE for Light Electric Engine | 43 |
| [all] | 102 | 1*SIZE*((50+stat.5)/100) +5 | 2 |  |  | FUEL/ENERGY USE for Medium Electric Engine | 43 |
| [all] | 102 | 1*SIZE*((50+stat.5)/100) +10 | 2 |  |  | FUEL/ENERGY USE for Heavy Electric Engine | 43 |
| [all] | 405 | 2 | 2 |  |  | PROD COST for Double Nuclear Engine | 43 |
| [all] | 405 | 3 | 2 |  |  | PROD COST for Triple Nuclear Engine | 43 |
| [all] | 404 | 1 | 2 |  |  | PROD COST for Light Electric Engine | 43 |
| [all] | 404 | 2 | 2 |  |  | PROD COST for Medium Electric Engine | 43 |
| [all] | 404 | 3 | 2 |  |  | PROD COST for Heavy Electric Engine | 43 |
| [all] | 404 | 4 | 2 |  |  | PROD COST for Double Electric Engine | 43 |
| [all] | 404 | 5 | 2 |  |  | PROD COST for Triple Electric Engine | 43 |
| [all] | 406 | 1 | 2 |  |  | PROD COST for Nuclear Engine | 43 |
| [all] | 406 | 2 | 2 |  |  | PROD COST for Double Nuclear Engine | 43 |
| [all] | 406 | 3 | 2 |  |  | PROD COST for Triple Nuclear Engine | 43 |
| [all] | 405 | 1 | 2 |  |  | PROD COST for Nuclear Engine | 43 |
| [all] | 25 | (STAT.7/2 + dth(4,20)) * STAT.151/100 | 4 |  |  | ENGINE DESIGN based on BASE DESIGN. Modified for STRUC.DESIGN |  |
| [all] | 27 | (STAT.7/2 + dth(4,20)) * STAT.151/100 | 4 |  |  | WEAPON DESIGN based on BASE DESIGN. Modified for STRUC.DESIGN |  |
| [all] | 97 | dth(1,3) | 1 |  |  | DETAIL TYPE is fixed for the whol series to provide graphical consistency |  |
| [all] | 96 | 1 | 2 |  |  | Graphical Base Type is set to ONE |  |
| [all] | 96 | 1 | 2 | (STAT.3/STAT.6)>(40+dth(2,40)) |  | Chance for Graphical Base Type TWO |  |
| [all] | 96 | 1 | 2 | (STAT.3/STAT.6)>(60+dth(3,40)) |  | Chance for Graphical Base Type THREE |  |
| [all] | 96 | 1 | 2 | STAT.96<3; dth(1,100)<33; |  | Chance for Graphical Base Type TWO |  |
| [all] | 96 | -1 | 2 | STAT.96>1; dth(1,100)<33; |  | Chance for Graphical Base Type TWO |  |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for 100mm Mass Driver Gun | 41 |
| [all] | 201 | 345 | 2 |  |  | COMBAT AMMO/ENERGY for 100mm Mass Driver Gun | 41 |
| [all] | 5 | 250 | 2 |  |  | WEIGHT for 100mm Mass Driver gun | 41 |
| [all] | 26 | (STAT.7/2 + dth(4,20)) * STAT.151/100 | 4 |  |  | ARMOUR DESIGN based on BASE DESIGN. Modified for STRUC.DESIGN |  |
| [all] | 5 | 75 * SIZE / 2 | 2 |  |  | WEIGHT for 100mm Polymer Plating | 42 |
| [all] | 407 | 5 | 2 |  |  | PROD COST for Triple Electric Engine | 43 |
| [all] | 407 | 3 | 2 |  |  | PROD COST for Heavy Electric Engine | 43 |
| [all] | 102 | 2*SIZE*((50+stat.5)/100) +15 | 2 |  |  | FUEL/ENERGY USE for Double Electric Engine | 43 |
| [all] | 102 | 3*SIZE*((50+stat.5)/100) +20 | 2 |  |  | FUEL/ENERGY USE for Triple Electric Engine | 43 |
| [all] | 403 | 8 | 2 |  |  | PROD COST for Light Diesel Engine | 43 |
| [all] | 403 | 12 | 2 |  |  | PROD COST for Medium Diesel Engine | 43 |
| [all] | 403 | 18 | 2 |  |  | PROD COST for Heavy Diesel Engine | 43 |
| [all] | 403 | 22 | 2 |  |  | PROD COST for Double Diesel Engine | 43 |
| [all] | 403 | 26 | 2 |  |  | PROD COST for Triple Diesel Engine | 43 |
| [all] | 403 | 4 | 2 |  |  | PROD COST for Light Electric Engine | 43 |
| [all] | 403 | 6 | 2 |  |  | PROD COST for Medium Electric Engine | 43 |
| [all] | 403 | 8 | 2 |  |  | PROD COST for Heavy Electric Engine | 43 |
| [all] | 407 | 4 | 2 |  |  | PROD COST for Double Electric Engine | 43 |
| [all] | 403 | 10 | 2 |  |  | PROD COST for Double Electric Engine | 43 |
| [all] | 403 | 24 | 2 |  |  | PROD COST for Nuclear Engine | 43 |
| [all] | 403 | 36 | 2 |  |  | PROD COST for Double Nuclear Engine | 43 |
| [all] | 403 | 48 | 2 |  |  | PROD COST for Triple Nuclear Engine | 43 |
| [all] | 402 | 2 | 2 |  |  | PROD COST for Light Diesel Engine | 43 |
| [all] | 402 | 4 | 2 |  |  | PROD COST for Medium Diesel Engine | 43 |
| [all] | 402 | 6 | 2 |  |  | PROD COST for Heavy Diesel Engine | 43 |
| [all] | 402 | 8 | 2 |  |  | PROD COST for Double Diesel Engine | 43 |
| [all] | 402 | 10 | 2 |  |  | PROD COST for Triple Diesel Engine | 43 |
| [all] | 407 | 1 | 2 |  |  | PROD COST for Light Electric Engine | 43 |
| [all] | 407 | 2 | 2 |  |  | PROD COST for Medium Electric Engine | 43 |
| [all] | 403 | 12 | 2 |  |  | PROD COST for Triple Electric Engine | 43 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 200mm Polymer Plating | 42 |
| [all] | 5 | 50 * SIZE / 2 | 2 |  |  | WEIGHT for 50mm Polymer Plating | 42 |
| [all] | 5 | 350 * SIZE /2 | 2 |  |  | WEIGHT for 400mm Steel Plating | 42 |
| [all] | 403 | 8  * SIZE / 2 | 2 |  |  | PROD COST IP for 50mm Steel Plating | 42 |
| [all] | 403 | 3 | 2 |  |  | PROD IP for Gauss Rifle | 41 |
| [all] | 403 | 12  * SIZE / 2 | 2 |  |  | PROD COST IP for 150mm Steel Plating | 42 |
| [all] | 403 | 14 * SIZE / 2 | 2 |  |  | PROD COST IP for 200mm Steel Plating | 42 |
| [all] | 403 | 16 * SIZE / 2 | 2 |  |  | PROD COST IP for 300mm Steel Plating | 42 |
| [all] | 403 | 18 * SIZE / 2 | 2 |  |  | PROD COST IP for 400mm Steel Plating | 42 |
| [all] | 403 | 6 * SIZE / 2 | 2 |  |  | PROD COST IP for 25mm Polymer Plating | 42 |
| [all] | 403 | 12  * SIZE / 2 | 2 |  |  | PROD COST IP for 50mm Polymer Plating | 42 |
| [all] | 403 | 20 * SIZE / 2 | 2 |  |  | PROD COST IP for 100mm Polymer Plating | 42 |
| [all] | 403 | 30 * SIZE / 2 | 2 |  |  | PROD COST IP for 150mm Polymer Plating | 42 |
| [all] | 403 | 42  * SIZE / 2 | 2 |  |  | PROD COST IP for 200mm Polymer Plating | 42 |
| [all] | 403 | 56 * SIZE / 2 | 2 |  |  | PROD COST IP for 300mm Polymer Plating | 42 |
| [all] | 403 | 72 * SIZE / 2 | 2 |  |  | PROD COST IP for 400mm Polymer Plating | 42 |
| [all] | 403 | 20 * SIZE / 2 | 2 |  |  | PROD COST IP for  25mm Liquid Armour | 42 |
| [all] | 403 | 30 * SIZE / 2 | 2 |  |  | PROD COST IP for 50mm Liquid Armour | 42 |
| [all] | 403 | 40 * SIZE / 2 | 2 |  |  | PROD COST IP for 100mm Liquid Armour | 42 |
| [all] | 403 | 50 * SIZE / 2 | 2 |  |  | PROD COST IP for 150mm Liquid Armour | 42 |
| [all] | 403 | 60 * SIZE / 2 | 2 |  |  | PROD COST IP for 200mm Liquid Armour | 42 |
| [all] | 403 | 70 * SIZE / 2 | 2 |  |  | PROD COST IP for 300mm Liquid Armour | 42 |
| [all] | 403 | 80 * SIZE / 2 | 2 |  |  | PROD COST IP for 400mm Liquid Armour | 42 |
| [all] | 403 | 100 | 2 |  |  | PROD COST IP for Small Shield Generator | 42 |
| [all] | 403 | 6  * SIZE / 2 | 2 |  |  | PROD COST IP for 25mm Steel Plating | 42 |
| [all] | 403 | 2 * SIZE / 2 | 2 |  |  | PROD COST IP for Minimal 5mm Steel Plating | 42 |
| [all] | 403 | 16 | 2 |  |  | PROD COST IP for Envirosuit and Personal Shield Generator | 42 |
| [all] | 403 | 10 | 2 |  |  | PROD COST IP for Heavy Battledress | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 400mm Polymer Plating | 42 |
| [all] | 402 | 4 * SIZE / 2 | 2 |  |  | PROD COST METAL for  25mm Liquid Armour | 42 |
| [all] | 402 | 6  * SIZE / 2 | 2 |  |  | PROD COST METAL for 50mm Liquid Armour | 42 |
| [all] | 402 | 8  * SIZE / 2 | 2 |  |  | PROD COST METAL for 100mm Liquid Armour | 42 |
| [all] | 402 | 10  * SIZE / 2 | 2 |  |  | PROD COST METAL for 150mm Liquid Armour | 42 |
| [all] | 402 | 12  * SIZE / 2 | 2 |  |  | PROD COST METAL for 200mm Liquid Armour | 42 |
| [all] | 402 | 14  * SIZE / 2 | 2 |  |  | PROD COST METAL for 300mm Liquid Armour | 42 |
| [all] | 402 | 16  * SIZE / 2 | 2 |  |  | PROD COST METAL for 400mm Liquid Armour | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Small Shield Generator | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Medium Shield Generator | 42 |
| [all] | 403 | 150 | 2 |  |  | PROD COST IP for Medium Shield Generator | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Large Shield Generator | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for XL Shield Generator | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for XXL Shield Generator | 42 |
| [all] | 403 | 1 | 2 |  |  | PROD COST IP for Filters | 42 |
| [all] | 403 | 1 | 2 |  |  | PROD COST IP for Thermosuit | 42 |
| [all] | 403 | 2 | 2 |  |  | PROD COST IP for Filters + Thermosuit | 42 |
| [all] | 403 | 2 | 2 |  |  | PROD COST IP for Envirosuit | 42 |
| [all] | 403 | 3 | 2 |  |  | PROD COST IP for Padded Envirosuit | 42 |
| [all] | 403 | 4 | 2 |  |  | PROD COST IP for Combat Armour | 42 |
| [all] | 403 | 5 | 2 |  |  | PROD COST IP for Heavy Combat Armour | 42 |
| [all] | 403 | 8 | 2 |  |  | PROD COST IP for Battledress | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Very Large Shield Generator | 42 |
| [all] | 403 | 200 | 2 |  |  | PROD COST IP for Large Shield Generator | 42 |
| [all] | 403 | 250 | 2 |  |  | PROD COST IP for Very Large Shield Generator | 42 |
| [all] | 403 | 300 | 2 |  |  | PROD COST IP for XL Shield Generator | 42 |
| [all] | 407 | 6 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 100mm Polymer Plating | 42 |
| [all] | 407 | 8 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 150mm Polymer Plating | 42 |
| [all] | 407 | 10 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 200mm Polymer Plating | 42 |
| [all] | 407 | 12 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 300mm Polymer Plating | 42 |
| [all] | 407 | 14 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 400mm Polymer Plating | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Filters | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Thermosuit | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Filters + Thermosuit | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Envirosuit | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Padded Envirosuit | 42 |
| [all] | 407 | 4 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 50mm Polymer Plating | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Combat Armour | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Battledress | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Heavy Battledress | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Envirosuit and Personal Shield Generator | 42 |
| [all] | 5 | 10 * SIZE / 2 | 2 |  |  | WEIGHT for Minimal 5mm Steel Plating | 42 |
| [all] | 5 | 50 * SIZE / 2 | 2 |  |  | WEIGHT for 25mm Steel Plating | 42 |
| [all] | 5 | 100 * SIZE / 2 | 2 |  |  | WEIGHT for 50mm Steel Plating | 42 |
| [all] | 5 | 150 * SIZE / 2 | 2 |  |  | WEIGHT for 100mm Steel Plating | 42 |
| [all] | 5 | 200 * SIZE / 2 | 2 |  |  | WEIGHT for 150mm Steel Plating | 42 |
| [all] | 5 | 250 * SIZE / 2 | 2 |  |  | WEIGHT for 200mm Steel Plating | 42 |
| [all] | 5 | 300 * SIZE / 2 | 2 |  |  | WEIGHT for 300mm Steel Plating | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Heavy Combat Armour | 42 |
| [all] | 5 | 25 * SIZE / 2 | 2 |  |  | WEIGHT for 25mm Polymer Plating | 42 |
| [all] | 407 | 2 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 25mm Polymer Plating | 42 |
| [all] | 405 | 16 | 2 |  |  | PROD HI-TECH for XXL Shield Generator | 42 |
| [all] | 403 | 350 | 2 |  |  | PROD COST IP for XXL Shield Generator | 42 |
| [all] | 404 | 1 | 2 |  |  | PROD COST MACHINERY for Battledress | 42 |
| [all] | 404 | 2 | 2 |  |  | PROD COST MACHINERY for Heavy Battledress | 42 |
| [all] | 404 | 4 | 2 |  |  | PROD COST MACHINERY for Small Shield Generator | 42 |
| [all] | 404 | 8 | 2 |  |  | PROD COST MACHINERY for Medium Shield Generator | 42 |
| [all] | 404 | 12 | 2 |  |  | PROD COST MACHINERY for Large Shield Generator | 42 |
| [all] | 404 | 16 | 2 |  |  | PROD COST MACHINERY for Very Large Shield Generator | 42 |
| [all] | 404 | 20 | 2 |  |  | PROD COST MACHINERY for XL Shield Generator | 42 |
| [all] | 404 | 24 | 2 |  |  | PROD COST MACHINERY for XXL Shield Generator | 42 |
| [all] | 405 | 1 | 2 |  |  | PROD HI-TECH for Envirosuit and Personal Shield Generator | 42 |
| [all] | 406 | 1 | 2 |  |  | PROD RADIOACTIVES for Envirosuit and Personal Shield Generator | 42 |
| [all] | 405 | 1 | 2 |  |  | PROD HI-TECH for  25mm Liquid Armour | 42 |
| [all] | 405 | 3 | 2 |  |  | PROD HI-TECH for 100mm Liquid Armour | 42 |
| [all] | 405 | 4 | 2 |  |  | PROD HI-TECH for 150mm Liquid Armour | 42 |
| [all] | 405 | 5 | 2 |  |  | PROD HI-TECH for 200mm Liquid Armour | 42 |
| [all] | 405 | 6 | 2 |  |  | PROD HI-TECH for 300mm Liquid Armour | 42 |
| [all] | 405 | 7 | 2 |  |  | PROD HI-TECH for 400mm Liquid Armour | 42 |
| [all] | 405 | 6 | 2 |  |  | PROD HI-TECH for Small Shield Generator | 42 |
| [all] | 405 | 8 | 2 |  |  | PROD HI-TECH for Medium Shield Generator | 42 |
| [all] | 405 | 10 | 2 |  |  | PROD HI-TECH for Large Shield Generator | 42 |
| [all] | 405 | 12 | 2 |  |  | PROD HI-TECH for Very Large Shield Generator | 42 |
| [all] | 405 | 14 | 2 |  |  | PROD HI-TECH for XL Shield Generator | 42 |
| [all] | 405 | 2 | 2 |  |  | PROD HI-TECH for 50mm Liquid Armour | 42 |
| [all] | 403 | 2 | 2 |  |  | PROD IP for Gas Powered Carbine | 41 |
| [all] | 402 | 54 | 2 |  |  | PROD METAL for 180mm High Velocity Gun | 41 |
| [all] | 403 | 2 | 2 |  |  | PROD IP for Carbine | 41 |
| [all] | 201 | 650 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Charged Gauss Machinegun | 41 |
| [all] | 202 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 202 | 165 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Light Plasma Blaster | 41 |
| [all] | 201 | 30 | 2 |  |  | COMBAT AMMO/ENERGY for Bazooka | 41 |
| [all] | 201 | 50 | 2 |  |  | COMBAT AMMO/ENERGY for RPG | 41 |
| [all] | 201 | 60 | 2 |  |  | COMBAT AMMO/ENERGY for Guided RPG | 41 |
| [all] | 201 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy RPG | 41 |
| [all] | 203 | 1 | 2 |  |  | COMBAT AMMO/ENERGY for Micro Nuke RPG | 41 |
| [all] | 201 | 120 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Heavy Machinegun | 41 |
| [all] | 201 | 200 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Heavy Adv. Machinegun | 41 |
| [all] | 201 | 650 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Gauss Machinegun | 41 |
| [all] | 201 | 320 | 2 |  |  | COMBAT AMMO/ENERGY for Twin High Speed Heavy Machinegun | 41 |
| [all] | 201 | 320 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Gauss Heavy Machinegun | 41 |
| [all] | 201 | 320 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 202 | 40 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 202 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Heavy Plasma Blaster | 41 |
| [all] | 201 | 660 | 2 |  |  | COMBAT AMMO/ENERGY for Small Rockets | 41 |
| [all] | 201 | 1200 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Rockets | 41 |
| [all] | 201 | 1740 | 2 |  |  | COMBAT AMMO/ENERGY for Big Rockets | 41 |
| [all] | 201 | 3000 | 2 |  |  | COMBAT AMMO/ENERGY for Light Conventional Missiles | 41 |
| [all] | 201 | 4200 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Conventional Missiles | 41 |
| [all] | 201 | 5400 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy Conventional Missiles | 41 |
| [all] | 201 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 202 | 250 | 2 |  |  | COMBAT AMMO/ENERGY for Plasma Missiles | 41 |
| [all] | 201 | 175 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Gas Powered Machinegun | 41 |
| [all] | 201 | 400 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Adv. Machinegun | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER VS GROUND for 100mm SHV AA Gun | 534 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER VS GROUND for Twin-100mm SHV AA-Gun | 534 |
| [all] | 2 | 40 | 2 |  |  | FIREPOWER VS GROUND for MANPAD | 534 |
| [all] | 2 | 50 | 2 |  |  | FIREPOWER VS GROUND for Heavy MANPAD | 534 |
| [all] | 2 | 60 | 2 |  |  | FIREPOWER VS GROUND for Super-Heavy MANPAD | 534 |
| [all] | 201 | 5 | 2 |  |  | COMBAT AMMO/ENERGY for Slugthrower | 41 |
| [all] | 201 | 10 | 2 |  |  | COMBAT AMMO/ENERGY for Carbine | 41 |
| [all] | 201 | 15 | 2 |  |  | COMBAT AMMO/ENERGY for Automatic Rifle | 41 |
| [all] | 201 | 3 | 2 |  |  | COMBAT AMMO/ENERGY for Gas Powered Carbine | 41 |
| [all] | 201 | 15 | 2 |  |  | COMBAT AMMO/ENERGY for Gauss Rifle | 41 |
| [all] | 201 | 650 | 2 |  |  | COMBAT AMMO/ENERGY for Quad High Speed Machinegun | 41 |
| [all] | 201 | 15 | 2 |  |  | COMBAT AMMO/ENERGY for Charged Gauss Rifle | 41 |
| [all] | 202 | 13 | 2 |  |  | COMBAT AMMO/ENERGY for Plasma Rifle | 41 |
| [all] | 201 | 60 | 2 |  |  | COMBAT AMMO/ENERGY for Machinegun | 41 |
| [all] | 201 | 100 | 2 |  |  | COMBAT AMMO/ENERGY for Advcanced Machinegun | 41 |
| [all] | 201 | 160 | 2 |  |  | COMBAT AMMO/ENERGY for High Speed Machinegun | 41 |
| [all] | 201 | 40 | 2 |  |  | COMBAT AMMO/ENERGY for Gas Powered Machinegun | 41 |
| [all] | 201 | 160 | 2 |  |  | COMBAT AMMO/ENERGY for Gauss Machinegun | 41 |
| [all] | 201 | 160 | 2 |  |  | COMBAT AMMO/ENERGY for Charged Gauss Machinegun | 41 |
| [all] | 202 | 20 | 2 |  |  | COMBAT AMMO/ENERGY for Tripod Assault Laser Rifle | 41 |
| [all] | 202 | 40 | 2 |  |  | COMBAT AMMO/ENERGY for Light Plasma Blaster | 41 |
| [all] | 201 | 260 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Machinegun | 41 |
| [all] | 202 | 6 | 2 |  |  | COMBAT AMMO/ENERGY for Laser Rifle | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER VS GROUND for 88mm HV AA Gun | 534 |
| [all] | 203 | 100 | 2 |  |  | COMBAT AMMO/ENERGY for Atomic 1 MT Fission Missile | 41 |
| [all] | 203 | 500 | 2 |  |  | COMBAT AMMO/ENERGY for 10 MegaTon ICBM | 41 |
| [all] | 202 | 120 | 2 |  |  | COMBAT AMMO/ENERGY for Light Plasma Blast Gun | 41 |
| [all] | 202 | 160 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Plasma Blast Gun | 41 |
| [all] | 202 | 195 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy Plasma Blast Gun | 41 |
| [all] | 202 | 240 | 2 |  |  | COMBAT AMMO/ENERGY for Very Heavy Plasma Blast Gun | 41 |
| [all] | 203 | 10 | 2 |  |  | COMBAT AMMO/ENERGY for Tactical Nuke Grenade Launcher | 41 |
| [all] | 201 | 1250 | 2 |  |  | COMBAT AMMO/ENERGY for Light Surface-Air Missiles | 534 |
| [all] | 201 | 2500 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Surface-Air Missiles | 534 |
| [all] | 201 | 4000 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy Surface-Air Missiles | 534 |
| [all] | 201 | 225 | 2 |  |  | COMBAT AMMO/ENERGY for 50mm HV AA Gun | 534 |
| [all] | 201 | 300 | 2 |  |  | COMBAT AMMO/ENERGY for 88mm HV AA Gun | 534 |
| [all] | 202 | 120 | 2 |  |  | COMBAT AMMO/ENERGY for Combined Beam Gun | 41 |
| [all] | 201 | 375 | 2 |  |  | COMBAT AMMO/ENERGY for 100mm SHV AA Gun | 534 |
| [all] | 201 | 180 | 2 |  |  | COMBAT AMMO/ENERGY for MANPAD | 534 |
| [all] | 201 | 240 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy MANPAD | 534 |
| [all] | 201 | 300 | 2 |  |  | COMBAT AMMO/ENERGY for Super-Heavy MANPAD | 534 |
| [all] | 95 | 1 | 2 |  |  | RAD for Micro Nuke RPG | 41 |
| [all] | 95 | 200 | 2 |  |  | RAD for Atomic 1 MT Fission Missile | 41 |
| [all] | 95 | 1000 | 2 |  |  | RAD for Atomic 10 MT Fusion Missile | 41 |
| [all] | 95 | 1000 | 2 |  |  | RAD for 10 MegaTon ICBM | 41 |
| [all] | 95 | 2000 | 2 |  |  | RAD for 50 MegaTon ICBM | 41 |
| [all] | 95 | 4000 | 2 |  |  | RAD for 100 MegaTon ICBM | 41 |
| [all] | 95 | 50 | 2 |  |  | RAD for Tactical Nuke Grenade Launcher | 41 |
| [all] | 201 | 750 | 2 |  |  | COMBAT AMMO/ENERGY for Twin-100mm SHV AA-Gun | 534 |
| [all] | 203 | 200 | 2 |  |  | COMBAT AMMO/ENERGY for Atomic 10 MT Fusion Missile | 41 |
| [all] | 202 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Beam Gun | 41 |
| [all] | 202 | 60 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy Laser Gun | 41 |
| [all] | 203 | 800 | 2 |  |  | COMBAT AMMO/ENERGY for 50 MegaTon ICBM | 41 |
| [all] | 203 | 1200 | 2 |  |  | COMBAT AMMO/ENERGY for 100 MegaTon ICBM | 41 |
| [all] | 201 | 90 | 2 |  |  | COMBAT AMMO/ENERGY for 25mm Howitzer Gun | 41 |
| [all] | 201 | 150 | 2 |  |  | COMBAT AMMO/ENERGY for 40mm Howitzer Gun | 41 |
| [all] | 201 | 195 | 2 |  |  | COMBAT AMMO/ENERGY for 60mm Howitzer Gun | 41 |
| [all] | 201 | 300 | 2 |  |  | COMBAT AMMO/ENERGY for 88mm Howitzer Gun | 41 |
| [all] | 201 | 345 | 2 |  |  | COMBAT AMMO/ENERGY for 105mm Howitzer Gun | 41 |
| [all] | 201 | 390 | 2 |  |  | COMBAT AMMO/ENERGY for 150mm Howitzer Gun | 41 |
| [all] | 201 | 450 | 2 |  |  | COMBAT AMMO/ENERGY for 180mm Howitzer Gun | 41 |
| [all] | 201 | 480 | 2 |  |  | COMBAT AMMO/ENERGY for 240mm Howitzer Gun | 41 |
| [all] | 202 | 90 | 2 |  |  | COMBAT AMMO/ENERGY for Very Heavy Laser Gun | 41 |
| [all] | 201 | 540 | 2 |  |  | COMBAT AMMO/ENERGY for 300mm Howitzer Gun | 41 |
| [all] | 201 | 150 | 2 |  |  | COMBAT AMMO/ENERGY for 40mm High Velocity Gun | 41 |
| [all] | 201 | 195 | 2 |  |  | COMBAT AMMO/ENERGY for 60mm High Velocity Gun | 41 |
| [all] | 201 | 300 | 2 |  |  | COMBAT AMMO/ENERGY for 88mm High Velocity Gun | 41 |
| [all] | 201 | 345 | 2 |  |  | COMBAT AMMO/ENERGY for 105mm High Velocity Gun | 41 |
| [all] | 201 | 390 | 2 |  |  | COMBAT AMMO/ENERGY for 150mm High Velocity Gun | 41 |
| [all] | 201 | 450 | 2 |  |  | COMBAT AMMO/ENERGY for 180mm High Velocity Gun | 41 |
| [all] | 201 | 480 | 2 |  |  | COMBAT AMMO/ENERGY for 240mm High Velocity Gun | 41 |
| [all] | 201 | 540 | 2 |  |  | COMBAT AMMO/ENERGY for 300mm High Velocity Gun | 41 |
| [all] | 202 | 24 | 2 |  |  | COMBAT AMMO/ENERGY for Light Laser Gun | 41 |
| [all] | 202 | 36 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Laser Gun | 41 |
| [all] | 201 | 90 | 2 |  |  | COMBAT AMMO/ENERGY for 25mm High Velocity Gun | 41 |
| [all] | 2 | 100 | 2 |  |  | FIREPOWER VS GROUND for 50mm HV AA Gun | 534 |
| [all] | 2 | 0 | 2 |  |  | FIREPOWER VS GROUND for Heavy Surface-Air Missiles | 534 |
| [all] | 2 | 0 | 2 |  |  | FIREPOWER VS GROUND for Medium Surface-Air Missiles | 534 |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for Quad Adv. Machinegun | 41 |
| [all] | 2 | 900 | 2 |  |  | FIREPOWER for Quad High Speed Machinegun | 41 |
| [all] | 2 | 800 | 2 |  |  | FIREPOWER for Quad Gas Powered Machinegun | 41 |
| [all] | 2 | 1500 | 2 |  |  | FIREPOWER for Quad Gauss Machinegun | 41 |
| [all] | 2 | 2250 | 2 |  |  | FIREPOWER for Quad Charged Gauss Machinegun | 41 |
| [all] | 2 | 3000 | 2 |  |  | FIREPOWER for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 2 | 4500 | 2 |  |  | FIREPOWER for Quad Light Plasma Blaster | 41 |
| [all] | 2 | 100 | 2 |  |  | FIREPOWER for Bazooka | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for RPG | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for Guided RPG | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for Quad Machinegun | 41 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER for Heavy RPG | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for Twin Heavy Machinegun | 41 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER for Twin Heavy Adv. Machinegun | 41 |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for Twin High Speed Heavy Machinegun | 41 |
| [all] | 2 | 525 | 2 |  |  | FIREPOWER for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 2 | 1125 | 2 |  |  | FIREPOWER for Twin Gauss Heavy Machinegun | 41 |
| [all] | 2 | 1500 | 2 |  |  | FIREPOWER for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 2 | 2000 | 2 |  |  | FIREPOWER for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 2 | 3000 | 2 |  |  | FIREPOWER for Twin Heavy Plasma Blaster | 41 |
| [all] | 2 | 4000 | 2 |  |  | FIREPOWER for Small Rockets | 41 |
| [all] | 2 | 5000 | 2 |  |  | FIREPOWER for Medium Rockets | 41 |
| [all] | 2 | 650 | 2 |  |  | FIREPOWER for Micro Nuke RPG | 41 |
| [all] | 2 | 6000 | 2 |  |  | FIREPOWER for Big Rockets | 41 |
| [all] | 2 | 1500 | 2 |  |  | FIREPOWER for Light Plasma Blaster | 41 |
| [all] | 2 | 750 | 2 |  |  | FIREPOWER for Charged Gauss Machinegun | 41 |
| [all] | 7 | 70+dth(3,10) | 0 |  |  | Base Design between 70 and 100 initially |  |
| [all] | 151 | 70+dth(3,20) | 1 |  |  | Structural Design between 70 and 130 |  |
| [all] | 6 | 1 | 2 |  |  | Default Size = 1 |  |
| [all] | 8 | STAT.7 | 3 |  |  | The Base Design value copy at creation (before Field Testing) |  |
| [all] | 408 | 1 | 2 |  |  | Normally no Pop Prod Cost Divider |  |
| [all] | 5 | STAT.6 * 10 | 2 |  |  | WEIGHT |  |
| [all] | 1 | MODELTYPEID | 2 |  |  | Model Type ID so that subsequent algorithm can interpret better |  |
| [all] | 4 | STAT.6 * 20 | 2 |  |  | Extra ARMOUR Strength for shear size |  |
| [all] | 72 | 1 | 2 |  |  | Base Recon Points |  |
| [all] | 2 | 50 | 2 |  |  | FIREPOWER for Slugthrower | 41 |
| [all] | 2 | 1000 | 2 |  |  | FIREPOWER for Tripod Assault Laser Rifle | 41 |
| [all] | 2 | 75 | 2 |  |  | FIREPOWER for Carbine | 41 |
| [all] | 2 | 85 | 2 |  |  | FIREPOWER for Gas Powered Carbine | 41 |
| [all] | 2 | 160 | 2 |  |  | FIREPOWER for Gauss Rifle | 41 |
| [all] | 2 | 230 | 2 |  |  | FIREPOWER for Charged Gauss Rifle | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for Laser Rifle | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for Plasma Rifle | 41 |
| [all] | 2 | 100 | 2 |  |  | FIREPOWER for Machinegun | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for Advcanced Machinegun | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for High Speed Machinegun | 41 |
| [all] | 2 | 266 | 2 |  |  | FIREPOWER for Gas Powered Machinegun | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for Gauss Machinegun | 41 |
| [all] | 2 | 100 | 2 |  |  | FIREPOWER for Automatic Rifle | 41 |
| [all] | 2 | 8000 | 2 |  |  | FIREPOWER for Light Conventional Missiles | 41 |
| [all] | 2 | 10000 | 2 |  |  | FIREPOWER for Medium Conventional Missiles | 41 |
| [all] | 2 | 12000 | 2 |  |  | FIREPOWER for Heavy Conventional Missiles | 41 |
| [all] | 2 | 2000 | 2 |  |  | FIREPOWER for Very Heavy Laser Gun | 41 |
| [all] | 2 | 3000 | 2 |  |  | FIREPOWER for Beam Gun | 41 |
| [all] | 2 | 6000 | 2 |  |  | FIREPOWER for Combined Beam Gun | 41 |
| [all] | 2 | 3000 | 2 |  |  | FIREPOWER for Light Plasma Blast Gun | 41 |
| [all] | 2 | 4500 | 2 |  |  | FIREPOWER for Medium Plasma Blast Gun | 41 |
| [all] | 2 | 6000 | 2 |  |  | FIREPOWER for Heavy Plasma Blast Gun | 41 |
| [all] | 2 | 7500 | 2 |  |  | FIREPOWER for Very Heavy Plasma Blast Gun | 41 |
| [all] | 2 | 12500 | 2 |  |  | FIREPOWER for Tactical Nuke Grenade Launcher | 41 |
| [all] | 537 | 1 | 2 |  |  | flak range | 534 |
| [all] | 537 | 1 | 2 |  |  | flak range | 534 |
| [all] | 2 | 1500 | 2 |  |  | FIREPOWER for Heavy Laser Gun | 41 |
| [all] | 537 | 1 | 2 |  |  | flak range | 534 |
| [all] | 525 | 260 | 2 |  |  | FIREPOWER VS AIR for Medium Surface-Air Missiles | 534 |
| [all] | 525 | 300 | 2 |  |  | FIREPOWER VS AIR for Heavy Surface-Air Missiles | 534 |
| [all] | 525 | 50 | 2 |  |  | FIREPOWER VS AIR for 50mm HV AA Gun | 534 |
| [all] | 525 | 75 | 2 |  |  | FIREPOWER VS AIR for 88mm HV AA Gun | 534 |
| [all] | 525 | 100 | 2 |  |  | FIREPOWER VS AIR for 100mm SHV AA Gun | 534 |
| [all] | 525 | 200 | 2 |  |  | FIREPOWER VS AIR for Twin-100mm SHV AA-Gun | 534 |
| [all] | 525 | 40 | 2 |  |  | FIREPOWER VS AIR for MANPAD | 534 |
| [all] | 525 | 50 | 2 |  |  | FIREPOWER VS AIR for Heavy MANPAD | 534 |
| [all] | 525 | 60 | 2 |  |  | FIREPOWER VS AIR for Super-Heavy MANPAD | 534 |
| [all] | 2 | 0 | 2 |  |  | FIREPOWER VS GROUND for Light Surface-Air Missiles | 534 |
| [all] | 525 | 200 | 2 |  |  | FIREPOWER VS AIR for Light Surface-Air Missiles | 534 |
| [all] | 2 | 1000 | 2 |  |  | FIREPOWER for Medium Laser Gun | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for Light Laser Gun | 41 |
| [all] | 2 | 1200 | 2 |  |  | FIREPOWER for 300mm High Velocity Gun | 41 |
| [all] | 2 | 30000 | 2 |  |  | FIREPOWER for Plasma Missiles | 41 |
| [all] | 2 | 30000 | 2 |  |  | FIREPOWER for Atomic 1 MT Fission Missile | 41 |
| [all] | 2 | 100000 | 2 |  |  | FIREPOWER for Atomic 10 MT Fusion Missile | 41 |
| [all] | 2 | 100000 | 2 |  |  | FIREPOWER for 10 MegaTon ICBM | 41 |
| [all] | 2 | 300000 | 2 |  |  | FIREPOWER for 50 MegaTon ICBM | 41 |
| [all] | 2 | 500000 | 2 |  |  | FIREPOWER for 100 MegaTon ICBM | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for 25mm Howitzer Gun | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for 40mm Howitzer Gun | 41 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER for 60mm Howitzer Gun | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for 88mm Howitzer Gun | 41 |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for 105mm Howitzer Gun | 41 |
| [all] | 2 | 700 | 2 |  |  | FIREPOWER for 150mm Howitzer Gun | 41 |
| [all] | 2 | 800 | 2 |  |  | FIREPOWER for 180mm Howitzer Gun | 41 |
| [all] | 2 | 1000 | 2 |  |  | FIREPOWER for 240mm Howitzer Gun | 41 |
| [all] | 2 | 1200 | 2 |  |  | FIREPOWER for 300mm Howitzer Gun | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for 25mm High Velocity Gun | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for 40mm High Velocity Gun | 41 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER for 60mm High Velocity Gun | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for 88mm High Velocity Gun | 41 |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for 105mm High Velocity Gun | 41 |
| [all] | 2 | 700 | 2 |  |  | FIREPOWER for 150mm High Velocity Gun | 41 |
| [all] | 2 | 800 | 2 |  |  | FIREPOWER for 180mm High Velocity Gun | 41 |
| [all] | 2 | 1000 | 2 |  |  | FIREPOWER for 240mm High Velocity Gun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Machinegun | 41 |
| [all] | 403 | 2 | 2 |  |  | PROD IP for Automatic Rifle | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Adv. Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Gas Powered Machinegun | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Light Plasma Blaster | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Adv. Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad High Speed Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Gas Powered Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Gauss Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Charged Gauss Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Light Plasma Blaster | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Bazooka | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Tripod Assault Laser Rifle | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for RPG | 41 |
| [all] | 402 | 4 | 2 |  |  | PROD METAL for Heavy RPG | 41 |
| [all] | 402 | 10 | 2 |  |  | PROD METAL for Micro Nuke RPG | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Heavy Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Heavy Adv. Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin High Speed Heavy Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Gauss Heavy Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Heavy Plasma Blaster | 41 |
| [all] | 402 | 3 | 2 |  |  | PROD METAL for Guided RPG | 41 |
| [all] | 402 | 40 | 2 |  |  | PROD METAL for Small Rockets | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Charged Gauss Machinegun | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Gas Powered Machinegun | 41 |
| [all] | 22 | 0 | 2 |  |  | AMMOSAVER for Gas Powered Carbine | 41 |
| [all] | 22 | 0 | 2 |  |  | AMMOSAVER for Gas Powered Machinegun | 41 |
| [all] | 22 | 0 | 2 |  |  | AMMOSAVER for Quad Gas Powered Machinegun | 41 |
| [all] | 22 | 0 | 2 |  |  | AMMOSAVER for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 44 | 1 | 2 |  |  | RANGE for Medium Rockets | 41 |
| [all] | 44 | 2 | 2 |  |  | RANGE for Big Rockets | 41 |
| [all] | 44 | 1 | 2 |  |  | RANGE for Medium Conventional Missiles | 41 |
| [all] | 44 | 2 | 2 |  |  | RANGE for Heavy Conventional Missiles | 41 |
| [all] | 44 | 3 | 2 |  |  | RANGE for Plasma Missiles | 41 |
| [all] | 537 | 1 | 2 |  |  | RANGE for Medium Surface-Air Missiles | 534 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Gauss Machinegun | 41 |
| [all] | 537 | 2 | 2 |  |  | RANGE for Heavy Surface-Air Missiles | 534 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Carbine | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Automatic Rifle | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Gas Powered Carbine | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Gauss Rifle | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Charged Gauss Rifle | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Laser Rifle | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Plasma Rifle | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Machinegun | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Advcanced Machinegun | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for High Speed Machinegun | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Slugthrower | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Heavy Surface-Air Missiles | 534 |
| [all] | 402 | 60 | 2 |  |  | PROD METAL for Medium Rockets | 41 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for Light Conventional Missiles | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Light Laser Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Medium Laser Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Heavy Laser Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Very Heavy Laser Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Beam Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Combined Beam Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Light Plasma Blast Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Medium Plasma Blast Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Heavy Plasma Blast Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Very Heavy Plasma Blast Gun | 41 |
| [all] | 402 | 66 | 2 |  |  | PROD METAL for 300mm High Velocity Gun | 41 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for Tactical Nuke Grenade Launcher | 41 |
| [all] | 402 | 140 | 2 |  |  | PROD METAL for Medium Surface-Air Missiles | 534 |
| [all] | 402 | 160 | 2 |  |  | PROD METAL for Heavy Surface-Air Missiles | 534 |
| [all] | 402 | 25 | 2 |  |  | PROD METAL for 50mm HV AA Gun | 534 |
| [all] | 402 | 50 | 2 |  |  | PROD METAL for 88mm HV AA Gun | 534 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for 100mm SHV AA Gun | 534 |
| [all] | 402 | 200 | 2 |  |  | PROD METAL for Twin-100mm SHV AA-Gun | 534 |
| [all] | 402 | 4 | 2 |  |  | PROD METAL for MANPAD | 534 |
| [all] | 402 | 6 | 2 |  |  | PROD METAL for Heavy MANPAD | 534 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Super-Heavy MANPAD | 534 |
| [all] | 403 | 1 | 2 |  |  | PROD IP for Slugthrower | 41 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for Light Surface-Air Missiles | 534 |
| [all] | 402 | 80 | 2 |  |  | PROD METAL for Big Rockets | 41 |
| [all] | 402 | 60 | 2 |  |  | PROD METAL for 240mm High Velocity Gun | 41 |
| [all] | 402 | 48 | 2 |  |  | PROD METAL for 150mm High Velocity Gun | 41 |
| [all] | 402 | 140 | 2 |  |  | PROD METAL for Medium Conventional Missiles | 41 |
| [all] | 402 | 160 | 2 |  |  | PROD METAL for Heavy Conventional Missiles | 41 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for Plasma Missiles | 41 |
| [all] | 402 | 200 | 2 |  |  | PROD METAL for Atomic 1 MT Fission Missile | 41 |
| [all] | 402 | 400 | 2 |  |  | PROD METAL for Atomic 10 MT Fusion Missile | 41 |
| [all] | 402 | 600 | 2 |  |  | PROD METAL for 10 MegaTon ICBM | 41 |
| [all] | 402 | 800 | 2 |  |  | PROD METAL for 50 MegaTon ICBM | 41 |
| [all] | 402 | 1000 | 2 |  |  | PROD METAL for 100 MegaTon ICBM | 41 |
| [all] | 402 | 18 | 2 |  |  | PROD METAL for 25mm Howitzer Gun | 41 |
| [all] | 402 | 24 | 2 |  |  | PROD METAL for 40mm Howitzer Gun | 41 |
| [all] | 402 | 42 | 2 |  |  | PROD METAL for 100mm Mass Driver gun | 41 |
| [all] | 402 | 30 | 2 |  |  | PROD METAL for 60mm Howitzer Gun | 41 |
| [all] | 402 | 42 | 2 |  |  | PROD METAL for 105mm Howitzer Gun | 41 |
| [all] | 402 | 48 | 2 |  |  | PROD METAL for 150mm Howitzer Gun | 41 |
| [all] | 402 | 54 | 2 |  |  | PROD METAL for 180mm Howitzer Gun | 41 |
| [all] | 402 | 60 | 2 |  |  | PROD METAL for 240mm Howitzer Gun | 41 |
| [all] | 402 | 66 | 2 |  |  | PROD METAL for 300mm Howitzer Gun | 41 |
| [all] | 402 | 18 | 2 |  |  | PROD METAL for 25mm High Velocity Gun | 41 |
| [all] | 402 | 24 | 2 |  |  | PROD METAL for 40mm High Velocity Gun | 41 |
| [all] | 402 | 30 | 2 |  |  | PROD METAL for 60mm High Velocity Gun | 41 |
| [all] | 402 | 36 | 2 |  |  | PROD METAL for 88mm High Velocity Gun | 41 |
| [all] | 402 | 42 | 2 |  |  | PROD METAL for 105mm High Velocity Gun | 41 |
| [all] | 402 | 36 | 2 |  |  | PROD METAL for 88mm Howitzer Gun | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Medium Surface-Air Missiles | 534 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Light Surface-Air Missiles | 534 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Tactical Nuke Grenade Launcher | 41 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for 60mm Howitzer Gun | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for 88mm Howitzer Gun | 41 |
| [all] | 5 | 250 | 2 |  |  | WEIGHT for 105mm Howitzer Gun | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for 150mm Howitzer Gun | 41 |
| [all] | 5 | 350 | 2 |  |  | WEIGHT for 180mm Howitzer Gun | 41 |
| [all] | 5 | 500 | 2 |  |  | WEIGHT for 240mm Howitzer Gun | 41 |
| [all] | 5 | 650 | 2 |  |  | WEIGHT for 300mm Howitzer Gun | 41 |
| [all] | 5 | 50 | 2 |  |  | WEIGHT for 25mm High Velocity Gun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for 40mm High Velocity Gun | 41 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for 60mm High Velocity Gun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for 40mm Howitzer Gun | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for 88mm High Velocity Gun | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for 150mm High Velocity Gun | 41 |
| [all] | 5 | 350 | 2 |  |  | WEIGHT for 180mm High Velocity Gun | 41 |
| [all] | 5 | 500 | 2 |  |  | WEIGHT for 240mm High Velocity Gun | 41 |
| [all] | 5 | 650 | 2 |  |  | WEIGHT for 300mm High Velocity Gun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Light Laser Gun | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Medium Laser Gun | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Heavy Laser Gun | 41 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Very Heavy Laser Gun | 41 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Beam Gun | 41 |
| [all] | 5 | 800 | 2 |  |  | WEIGHT for Combined Beam Gun | 41 |
| [all] | 5 | 250 | 2 |  |  | WEIGHT for 105mm High Velocity Gun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Light Plasma Blast Gun | 41 |
| [all] | 5 | 50 | 2 |  |  | WEIGHT for 25mm Howitzer Gun | 41 |
| [all] | 5 | 1200 | 2 |  |  | WEIGHT for 50 MegaTon ICBM | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Gauss Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Charged Gauss Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Light Plasma Blaster | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Heavy Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Heavy Adv. Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin High Speed Heavy Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Gauss Heavy Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 5 | 1400 | 2 |  |  | WEIGHT for 100 MegaTon ICBM | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Small Rockets | 41 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for Medium Rockets | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Big Rockets | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Light Conventional Missiles | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Medium Conventional Missiles | 41 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Heavy Conventional Missiles | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Plasma Missiles | 41 |
| [all] | 5 | 500 | 2 |  |  | WEIGHT for Atomic 1 MT Fission Missile | 41 |
| [all] | 5 | 700 | 2 |  |  | WEIGHT for Atomic 10 MT Fusion Missile | 41 |
| [all] | 5 | 1000 | 2 |  |  | WEIGHT for 10 MegaTon ICBM | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Heavy Plasma Blaster | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Medium Plasma Blast Gun | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Heavy Plasma Blast Gun | 41 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Very Heavy Plasma Blast Gun | 41 |
| [all] | 75 | 10 | 2 |  |  | ATTACKS OVERRULE for Light Conventional Missiles | 41 |
| [all] | 75 | 12 | 2 |  |  | ATTACKS OVERRULE for Medium Conventional Missiles | 41 |
| [all] | 75 | 14 | 2 |  |  | ATTACKS OVERRULE for Heavy Conventional Missiles | 41 |
| [all] | 75 | 20 | 2 |  |  | ATTACKS OVERRULE for Plasma Missiles | 41 |
| [all] | 75 | 60 | 2 |  |  | ATTACKS OVERRULE for Atomic 1 MT Fission Missile | 41 |
| [all] | 75 | 200 | 2 |  |  | ATTACKS OVERRULE for Atomic 10 MT Fusion Missile | 41 |
| [all] | 75 | 200 | 2 |  |  | ATTACKS OVERRULE for 10 MegaTon ICBM | 41 |
| [all] | 75 | 600 | 2 |  |  | ATTACKS OVERRULE for 50 MegaTon ICBM | 41 |
| [all] | 75 | 1000 | 2 |  |  | ATTACKS OVERRULE for 100 MegaTon ICBM | 41 |
| [all] | 75 | 100 | 2 |  |  | ATTACKS OVERRULE for Tactical Nuke Grenade Launcher | 41 |
| [all] | 75 | 8 | 2 |  |  | ATTACKS OVERRULE for Big Rockets | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Small Rockets | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Big Rockets | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Light Conventional Missiles | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Medium Conventional Missiles | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Heavy Conventional Missiles | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Plasma Missiles | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Atomic 1 MT Fission Missile | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Atomic 10 MT Fusion Missile | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for 10 MegaTon ICBM | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for 50 MegaTon ICBM | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for 100 MegaTon ICBM | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Medium Rockets | 41 |
| [all] | 75 | 6 | 2 |  |  | ATTACKS OVERRULE for Medium Rockets | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Small Rockets | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Heavy Plasma Blaster | 41 |
| [all] | 5 | 600 | 2 |  |  | WEIGHT for Tactical Nuke Grenade Launcher | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Light Surface-Air Missiles | 534 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Medium Surface-Air Missiles | 534 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Heavy Surface-Air Missiles | 534 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for 50mm HV AA Gun | 534 |
| [all] | 5 | 250 | 2 |  |  | WEIGHT for 88mm HV AA Gun | 534 |
| [all] | 5 | 325 | 2 |  |  | WEIGHT for 100mm SHV AA Gun | 534 |
| [all] | 5 | 550 | 2 |  |  | WEIGHT for Twin-100mm SHV AA-Gun | 534 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Machinegun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Adv. Machinegun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad High Speed Machinegun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Gas Powered Machinegun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Gauss Machinegun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Charged Gauss Machinegun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Light Plasma Blaster | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Heavy Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Heavy Adv. Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin High Speed Heavy Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Gauss Heavy Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad High Speed Machinegun | 41 |
| [all] | 403 | 48 | 2 |  |  | PROD IP for 100mm Mass Driver Gun | 41 |

