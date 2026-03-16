# `Laws` (`572`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `31` |
| Name | [SE_Politics](../) |
| Library ID | `572` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | LawID | `Text` |
| `1` | Type | `Text` |
| `2` | FullName | `Text` |
| `3` | ShortName | `Text` |
| `4` | IF Logic | `Text` |
| `5` | - | `Text` |
| `6` | Virtus | `Text` |
| `7` | CoreProf | `Text` |
| `8` | 2ndProf | `Text` |
| `9` | Desc | `Text` |
| `10` | DescFx | `Text` |
| `11` | CostTyp | `Text` |
| `12` | CostQty | `Text` |
| `13` | vb POP | `Text` |
| `14` | vb WORK | `Text` |
| `15` | vb APP | `Text` |
| `16` | vb SOL | `Text` |
| `17` | vb TRAD | `Text` |
| `18` | vb LEA | `Text` |
| `19` | vb CAB-L | `Text` |

### Data

| LawID | Type | FullName | ShortName | IF Logic | - | Virtus | CoreProf | 2ndProf | Desc | DescFx | CostTyp | CostQty | vb POP | vb WORK | vb APP | vb SOL | vb TRAD | vb LEA | vb CAB-L |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 101 | 1 | Compulsory Education Law |  |  |  | 0 | mind | government | Everybody is required to be educated. The road to progress in through education. | QOL Education +50% and new Leaders get extra academic skill levels. | 1 | 1 | 100 | 100 |  |  |  |  |  |
| 102 | 1 | Universal Medical Care Law |  |  |  | 0 | government | mind | We do not let anybody rot away in the gutter. Propper health care will also include focus on fertility. | QOL Health +50% and fertility gets a +30% boost. | 1 | 1 | 100 | 100 |  |  |  |  |  |
| 103 | 1 | Social Assistance Law |  |  |  | 0 | government | mind | By sending social workers to those in distress or economic difficulty can be coached to get back on their feet. | Unrest -2 and Population Happiness +1 per turn. | 1 | 1 | 100 |  |  |  |  |  |  |
| 104 | 1 | Private Economy Stimulation Law |  |  |  | 0 | mind | government | By actively coaching and helping our Private Economy with government experts we'll increase its productivity. Also requires semi-voluntary investments by Traders. | Any public investments in the private economy get doubled by the Traders. | 1 | 1 | 100 | -100 | -100 |  | -100 |  |  |
| 105 | 1 | Worker Wellbeing Law |  |  |  | 0 | government | mind | By providing case managers and propper HR infrastructure at the workfloor level Workers will feel more valued and efficiency gains will be reached as well. | Worker Happiness +1 per turn and Public Economy gets a +10% boost. | 1 | 1 |  | 100 |  |  |  |  |  |
| 106 | 1 | Human Rights Law |  |  |  | 0 | mind | government | All men have inalienable rights like safety and the right to surrender without being executed. We need to respect these rights and ensure we don't regress into barbarism. | Soldier morale -1 per turn, but Free Folk settling increased by +40%. | 1 | 1 |  |  | 100 | -100 |  |  |  |
| 107 | 1 | Progressive Tax Law |  |  |  | 0 | government | mind | It is only fair that those with the most revenue pay a higher share of tax. Increases tax revenues. | Population Happiness -1 per turn as they will pay 33% more Income Tax in practice. | 1 | 1 | -100 | 100 |  |  | -100 |  |  |
| 108 | 1 | Clean Elections Law |  |  |  | 75 | mind | government | It is no longer acceptable that Governors and Commanders influence their subjects on what to vote. | Governors and Commanders no longer influence the votes of their subjects. Leaders with Democracy Profile get +1 per turn. | 1 | 1 | 100 |  | -100 | 100 |  |  |  |
| 109 | 1 | Parliamentary Nominations Primacy Law |  |  |  | 70 | mind | government | A Supreme Leader should not be able to easily ignore the nominations proposed to him. | It becomes costly to ignore nominations. Leaders with Democracy Profile get +1 per turn. | 1 | 1 |  |  | 100 |  |  |  |  |
| 110 | 1 | Governmental Minimum Wage Law |  |  |  | 65 | government | mind | Our Workers and Soldiers should be paid well. This is paramount for a well functioning government. | Minimum Worker salary is 2 times the average private wages in your nation, but max 30 mCr. Also Worker Happiness +1 per turn and Soldier Morale +1 per turn. | 1 | 1 | -100 | 100 |  | 100 |  |  |  |
| 111 | 1 | Impeachment Vote Law |  |  |  | 55 | mind | government | An executive Supreme Leader's high position Leader picks must be able to be corrected by the representitive Political Body. Balance of power will be ensured. | Gives the Political Body the right to switch Leader around between Jobs or Reserve Pool. Any such initiatives will be presented as Decisions. | 1 | 1 | 100 |  | 100 |  |  |  |  |
| 112 | 1 | Science Imperative Law |  |  |  | 50 | government | mind | A minimum percentage of all effort should be focussed on science, theoretical, military, civilian, applied, all sciences. | Requires you to have 50% of BP invested in Science Councils. If not adverse events can trigger. Leaders with Mind Profile get +1 relation per turn. | 1 | 1 |  | 100 |  |  |  |  |  |
| 113 | 1 | Anti-Drafting Law |  |  |  | 45 | mind | government | We have to protect the Populace from to aggressive techniques to draft them in to the military. | Reduces recruitment of recruits by a factor of 3. Populace Happiness goes up with +1 per turn. | 1 | 1 | 100 | 100 |  | -100 |  |  |  |
| 114 | 1 | Peace Law |  |  |  | 40 | mind | government | Declaring War should be something that should be well thought through and in most cases should be avoided. | Going to war will be unpopular and costly. Soldier Base Morale -10. | 1 | 1 | 100 | 100 |  | -100 | 100 |  |  |
| 115 | 1 | Protection from Militarization Law |  |  |  | 35 | mind | government | We have to make sure that our nation does not become to militarized. A limit is imposed to the maximum size of our armed forces and militias. | Maximum 8% of your total manpower can be in the military/militia. Above 4% already giving recruitment reductions. Soldier Base Morale -10. | 1 | 1 | 100 | 100 |  | -100 | 100 |  |  |
| 116 | 1 | International Aid |  |  |  | 30 | government | mind | Let's preserve our humanity in a violent world. It is our moral duty to help neighbours that are suffering more than us. We need to send them part of our revenues to help them out. | A commitment to help poorer nations through thrid party initiatives. Will be presented by Decisions. Worker Happiness -1 per turn. | 1 | 1 |  | -100 | 100 |  | 100 |  |  |
| 117 | 1 | Limited Power Laws |  |  |  | 25 | government | mind | A Supreme Leader that is too powerful will reduce the power of the people. This Law restrains the power of the Supreme Leader for the common good. | Your PP is halved. Population Happiness +1 per turn. | 1 | 1 | 100 |  | 100 |  |  |  |  |
| 118 | 1 | Wealth Tax |  |  |  | 80 | government | mind | We want to avoid Leaders hoarding all the Credits. This tax will ensure their wealth will be redistributed. | Any Leaders with Wealth suffer -1 relation per turn, Wealth is taxed at 3%. | 1 | 1 | 100 | 100 |  |  | -100 | -100 |  |
| 119 | 1 | Super Wealth Tax |  |  |  | 60 | government | mind | It is only fair that those with the most revenue pay a higher share of tax. Increases tax revenues. However it is also only fair they pay tax over their SSF holdings. | The 20% most wealthy Leaders get -2 relation per turn. Wealth is taxed an extra 3% as well as any SSF Assets. | 1 | 1 | 100 | 100 |  |  |  | -100 |  |
| 201 | 1 | Compulsory Military Service Law |  |  |  | 0 | fist | enforcement | The defense of the nation is not something that we can leave to altruists only. All need to sacrifice for our future and report to the recruitment offices. | Recruitment maximum doubled. Soldier Base Morale -10. Population Happiness -1 per turn. Worker Happiness -1 per turn. | 2 | 1 | -100 | -100 |  | 100 |  |  |  |
| 202 | 1 | Martial Education Law |  |  |  | 0 | fist | enforcement | From a young age we will teach our children how to fight and face hardships. It might be brutal, but we live in a brutal world. | Initial XP of Recruits +10. Fertility modified with -10. | 2 | 1 | -100 | -100 |  | 100 |  |  |  |
| 203 | 1 | Military Disciplinary Law |  |  |  | 0 | enforcement | fist | He who runs will not fight today. Using disciplinary measures we'll stop our Soldiers from fleeing the battlefield. | 33% of Retreat Hits suffered will turn into Pinned Hits. -1 Soldier Morale per turn. | 2 | 1 | 100 |  | 100 | -100 |  |  |  |
| 204 | 1 | Poor Quarter Patrolling Law |  |  |  | 0 | enforcement | fist | We all know where thiefs and thugs come from. We need to focus our police efforts on the poor quarters of our Cities. | QOL Security +50%. Population Happiness +1 per turn. | 2 | 1 | 100 |  |  |  |  |  |  |
| 205 | 1 | Private Surveillance Law |  |  |  | 0 | enforcement | fist | This Law makes it possible to install hidden surveillance machines or operatives anywhere among the Population. | QOL Security +50%. Worker Happiness +1 per turn. | 2 | 1 |  | 100 |  |  |  |  |  |
| 206 | 1 | Patriot Law |  |  |  | 0 | fist | enforcement | Sacrifice is obligatory, so if supporting this sacrifice. This Law will make sure that our nation can support a higher casualty rate. | Casualty Tolerance (short and long) are doubled. Population Happiness -1 per turn. | 2 | 1 | -100 | 100 |  |  | -100 |  |  |
| 207 | 1 | Worker Frontline Service Law |  |  |  | 0 | fist | enforcement | Workers will give better support to the Soldiers just behind the frontlines, this will improve the integration and acceptibility of casualties. | Casualty Tolerance (short and long) are doubled. Worker Happiness -1 per turn. | 2 | 1 | 100 | -100 |  |  |  |  |  |
| 208 | 1 | Curfew Laws |  |  |  | 75 | enforcement | fist | To improve security we will impose a curfew during night time. Nobody needs to be on the street anyway during these times. | QOL Security +50%. Fear +1 per turn. Population Happiness -1 per turn. | 2 | 1 | -100 | 100 |  |  |  |  |  |
| 209 | 1 | Production Quotas Law |  |  |  | 70 | enforcement | fist | Public Workers need to be held to account. This Law will ensure they have to meet a minimum standard of productivity. | Public Economy boosted with +10%. Worker Happiness -1 per turn. | 2 | 1 | 100 |  | 100 |  |  |  |  |
| 210 | 1 | Relocation Law |  |  |  | 65 | fist | enforcement | Our Nation needs a mobile Populace to quickly take advantage of opportunities in other Zones. | Colonist recruitment becomes 3x easier. Fear +1 per turn. Population Happiness -1 per turn. | 2 | 1 | -100 | 100 |  |  |  |  |  |
| 211 | 1 | Extended Detention Law |  |  |  | 60 | enforcement | fist | This Law will help our security forces as they'll have more time to bring people to justice, increasing their flexibility and ability to make more arrests. | QOL Security +50%. Fear +1 per turn. Population Happiness -1 per turn. | 2 | 1 |  | 100 |  | 100 |  |  |  |
| 212 | 1 | Home Front Tax Law |  |  |  | 55 | fist | enforcement | The state coffers should be prioritized above any spending on luxuries. | Service Tax is doubled. Fear +1 per turn. Population Happiness -1 per turn. | 2 | 1 | -100 | 100 |  |  |  |  |  |
| 213 | 1 | Universal Military Law |  |  |  | 50 | fist | enforcement | This Law allows our internal security operations to use military engagement rules. Unrest or Strikes will be easier repressed, freeing up troops to fight the real enemy. | Soldiers 3x more effective when confronting civilians. Fear +1 per turn. Population Happiness -1 per turn. | 2 | 1 | -100 | 100 |  | 100 |  |  |  |
| 214 | 1 | Forced Labour Law |  |  |  | 45 | enforcement | fist | When the Nation needs Workers they will be pressed into service if needed. | Worker recruitment twice as easy. 3x less Workers leaving their job because unsatisfaction. Fear +1 per turn. Worker Happiness -1 per turn. | 2 | 1 | 100 | -100 | 100 |  |  |  |  |
| 215 | 1 | Total War Law |  |  |  | 40 | fist | enforcement | This Law will ensure a steady drip feed of new Recruits by randomly selecting Citizens on the street and sending them to base training immediately. | 0.5% of Population is automatically recruited into the military. Fear +1 per turn. Population Happiness -1 per turn. | 2 | 1 |  | 100 |  | 100 |  |  |  |
| 216 | 1 | Home Surveillance Law |  |  |  | 35 | enforcement | fist | Our Workers could be spies and thus minimum surveillance must be obligatory in all their homes. | Counter Espionage efficiency doubles. QOL Security +50%. Fear +1 per turn. Worker Happiness -1 per turn. | 2 | 1 |  | -100 |  | 100 |  |  |  |
| 217 | 1 | Citizen Tracking Law |  |  |  | 30 | enforcement | fist | All our Populace could be spies in fact and thus everybody needs to be tracked. | Counter Espionage efficiency doubles. QOL Security +50%. Fear +1 per turn. Worker and Population Happiness -1 per turn. | 2 | 1 |  |  | 100 | 100 |  |  |  |
| 301 | 1 | Festivities Law |  |  |  |  | heart | commerce | This Law will ensure there are a number of days per year where festivals will be organized. | Population and Worker Happiness +1 per turn. | 3 | 1 | 100 | 100 |  |  |  |  |  |
| 302 | 1 | Decentralization Law |  |  |  |  | commerce | heart | To ensure a flourishing Private Economy we need to make sure the government doesn't meddle too much. This Law ensures that. | Private Economy boosted +25%. Nationalization costs doubled. | 3 | 1 | 100 | -100 |  |  |  |  |  |
| 303 | 1 | Workhouse Law |  |  |  |  | heart | commerce | By promoting the setting up of Workhouses for the poor and sick we will clean up the streets and increase social cohesion. | Population Happiness +1 per turn. | 3 | 1 | 100 |  |  |  |  |  |  |
| 304 | 1 | Private Property Law |  |  |  |  | commerce | heart | This Law ensures that the state cannot just simply confesquate private property, nor that violence can be used by one private party on another to acquire their assets. | Private Economy boosted +25%. Nationalization costs doubled. | 3 | 1 | 100 |  |  |  | 100 |  |  |
| 305 | 1 | Public Brotherhood Law |  |  |  |  | heart | commerce | All Workers will be sworn into a brotherhood. Increases their sense of belonging and purpose. | Worker Happiness +1 per turn. | 3 | 1 |  | 100 |  |  |  |  |  |
| 306 | 1 | Sacrifice Compensation Law |  |  |  |  | heart | commerce | By ensuring the families of Soldiers killed in action will receive preferential treatment we'll improve the willingness to sacrifice of our Soldiers | Base Morale +10. | 3 | 1 |  |  |  | 100 |  |  |  |
| 307 | 1 | Free Trade Law |  |  |  |  | commerce | heart | This Laws makes all tarriffs illegal. Free Trade spirit will attract investment from abroad. | Tariffs are no longer allowed, will be put to 0 at every end of turn. Your Traders will receive more investments from foreign Traders. | 3 | 1 |  |  |  |  | 100 |  |  |
| 308 | 1 | Public-Private partnerships Law |  |  |  |  | commerce | heart | This Law allows parts of our Public activities to join in business activities with the Private Economy. | Private Economy boosted +25%. Public Economy penalized with -10%. | 3 | 1 |  |  | 100 |  |  |  |  |
| 309 | 1 | Joint Vidcom Funding Law |  | TECH.100>=100 |  | 75 | commerce | heart | By financing privately generated Vidcom shows we'll increase overall entertainment for our Populace. | QOL Entertainment +50%. | 3 | 1 | 100 | 100 |  |  |  |  |  |
| 310 | 1 | Front Aid Law |  |  |  | 70 | heart | commerce | This Law will impose collection of food, clothes and luxuries from the Population. To be sent to the front where it is most needed. | Population Happiness -1 per turn. Base Morale +10. | 3 | 1 | -100 |  |  | 100 |  |  |  |
| 311 | 1 | Large Family Law |  |  |  | 65 | heart | commerce | Large families should receive preferential treatment and extra allocations. | Fertility get boosted with +50%. | 3 | 1 | 100 |  |  |  |  |  |  |
| 312 | 1 | Legion of Honour Law |  |  |  | 60 | heart | commerce | This Law will make sure that those most recognized will be rewarded. | Highest 50% Seniority Leaders will receive the Medal of Merit. One medal awarded per round. | 3 | 1 | 100 | -100 | 100 |  |  |  |  |
| 313 | 1 | Small Government Law |  |  |  | 55 | commerce | heart | This Law gives even more freedom to the markets and also makes it harder to produce in the Public Economy. | Private Economy boosted +25%. Public Economy penalized with -15%. | 3 | 1 | 100 | -100 |  |  |  |  |  |
| 314 | 1 | Private Transfer Hub Law |  |  |  | 50 | heart | commerce | Ensures that Traders can best do their business we will turn our nation into a transfer hub for trade. | Traders scrap 10% of Private Debt per turn. Your Traders will receive more investments from foreign Traders. | 3 | 1 |  |  |  |  | 100 |  |  |
| 315 | 1 | Public Anti-Competition Law |  |  |  | 45 | commerce | heart | This Law makes it very difficult for the Public Economy to try to outcompete the Private Economy. | Public Economy penalized with -20%. Worker Happiness +2 per turn. | 3 | 1 |  | 100 |  |  |  |  |  |
| 316 | 1 | Order of the Heroes Law |  |  |  | 40 | heart | commerce | This Law will make sure all heroes get their medals. The rank and file should not go unnoticed. | Every Unit should eventually have a People's Hero. 2-6% chance per unit based on Unit's XP. Soldier Morale +1 per turn. | 3 | 1 |  |  |  | 100 |  |  |  |
| 317 | 1 | Zero Tax Law |  |  |  | 35 | commerce | heart | With this Law in place it will no longer be possible to collect Sales Tax or Income Tax. | Private Economy boosted +25%. No Income or Sales Tax allowed anymore. Will be set to 0 at every end of turn. | 3 | 1 | 100 | -100 |  |  |  |  |  |
| 318 | 1 | Anarcho-Capitalist Law |  |  |  | 30 | commerce | heart | This rather radical Law will allow private actors to appropriate public means of production when not in use or well guarded. | Private Economy boosted +25%. Public Economy penalized with -25%. | 3 | 1 | 100 | -100 |  |  | 100 |  |  |
| 401 | 1 | Militia Tech Share Law |  |  |  |  | militia | mind | This Law allows the Militia access to the same Models as the Regular forces. | Militia will get earlier access to regular army Models. Militia Base Morale +10. | 2 | 2 |  | -100 |  | -100 |  |  |  |
| 402 | 1 | Militia Benefits Law |  |  |  |  | militia | heart | Militia members and their family receive preferential treatment with this Law. | Militia maximum size doubled. Militia Base Morale +10. | 1 | 2 |  |  | -100 | -100 |  |  |  |
| 403 | 1 | Regular Forces Limitations Law |  |  |  |  | militia | commerce | To ensure a dynamic and strong Militia this Law limits the size of the Regular forces. | Regular recruiting becomes much more difficult. Militia maximum size doubled. Militia Base Morale +10. | 2 | 2 | 100 |  |  | -100 |  |  |  |
| 404 | 1 | Militia Funding Law |  |  |  |  | militia | enforcement | This Law pays for the adequate funding of a proffesional command structure for the Militia forces. | Militia sets up surrogate OHQ-like command level embedded in their Units. Gives Militia Units OHQ Skill Rolls. Militia Base Morale +10. | 3 | 2 |  | 100 |  | -100 |  |  |  |
| 901 | 1 | Democratic Constitution | REGKEY.votePop>0|REGKEY.voteWorker>0|REGKEY.voteSoldier>0 |  |  |  | democracy | government | This Constitutional Law ensures that the Political Body can not just decide on a whim to abolish Democracy. This Law would need to be retracted first. | As long as this Constitutional Law is in effect we cannot change our system to become non-democratic. |  |  | 50 | 40 |  | 30 | 20 | 10 |  |

