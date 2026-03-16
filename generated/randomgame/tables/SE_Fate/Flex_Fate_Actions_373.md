## `SE_Fate.'Flex Fate Actions'` (id = `373`)

### Columns (`19`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID | Text 
| `1` | Name | Text 
| `2` | PP Cost | Text 
| `3` | Event Picture | Text 
| `4` | Text | Text 
| `5` | Org ID | Text 
| `6` | Org IF Logic | Text 
| `7` | Target Type | Text 
| `8` | Target IF Logic | Text 
| `9` | Weight SET Logic | Text 
| `10` | BP Cost | Text 
| `11` | Category | Text 
| `12` | Phase | Text 
| `13` | UseHuman | Text 
| `14` | New Col | Text 
| `15` | New Col | Text 
| `16` | New Col | Text 
| `17` | New Col | Text 
| `18` | New Col | Text 

### Rows (`150`)

| Card ID | Name | PP Cost | Event Picture | Text | Org ID | Org IF Logic | Target Type | Target IF Logic | Weight SET Logic | BP Cost | Category | Phase | UseHuman | New Col | New Col | New Col | New Col | New Col |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|801|Radiation Leak|0|1|Don't touch that lever! This ancient machine is highly unstable.Gain 3 FP.|-1|REGKEY.techLevel<=5|0||300|1|9|9|0|0|||34|35|
|802|Chemical High|0|2|A new doctor is in town. Selling pills of many colors and many pleasures. Want one? Gain 2 FP.|-1|REGKEY.techLevel<=5|0||300|1|9|9|0|0|||34|35|
|803|Eager Industrialist|1|3|I have the Ambition. I have the Capital! Let me start my industrial empire here!|-1|REGKEY.techLevel<=5|2||300|1|9|9|0|0|||36|37|
|804|Motherload|2|4|Holy Moly! How could we have missed those fat juicy deposits!|-1|REGKEY.techLevel<=5|2||300|1|9|9|0|0|||36|37|
|805|Treasure Hoard|2|5|A bolted metal door in the rock face. Who knows what we'll find if we open it?|-1|REGKEY.techLevel<=5|2||500|1|9|9|0|0|||36|37|
|806|Ancient Archive|4|6|We are in possession of tons of ancient books and discs. Maybe we should study them?|-1|REGKEY.techLevel<=5|0||90|1|9|9|0|0|||36|37|
|807|Docile AI|1|7|First everybody was scared shitless, but then we understood the AI accepted our authority.|-1|REGKEY.techLevel<=5|2||150|1|9|9|0|0|||36|37|
|808|Propaganda Assistant|1|8|If you use the right words everybody will accept what you propose|-1|REGKEY.techLevel<=5|4||500|1|9|9|0|0|||36|37|
|809|Tacticus Genius|2|9|An autistic little man that whispers brilliant tactical moves in the ear of commanders.|-1|REGKEY.techLevel<=5|4||60|1|9|9|0|0|||36|37|
|810|Sage|3|10|Do you know what Liquid Energy actually is? I do...|-1|REGKEY.techLevel<=5|0||30|1|9|9|0|0|||36|37|
|811|Lifesupport Failure|0|11|Damnation! Outside air is entering our domes! We need to... cough... argh... Gain 4 FP.|-1|REGKEY.techLevel<=5; GAMEKEY.1>=4;|0||300|1|9|9|0|0|||34|35|
|812|Bad Rations|0|12|We sent spoiled food to the front. They'll be furious when they find out... Gain 2 FP.|-1|REGKEY.cultureLevel<=5|0||300|1|9|9|0|0|||34|35|
|813|Paranoia|0|13|You are surrounded by idiots. Why do they not go away? Die? Disappear? Gain 2 FP.|-1|REGKEY.cultureLevel<=5|0||300|1|9|9|0|0|||34|35|
|814|Militia Loss of Faith|0|14|Our blood and sacrifice just benefits the powerful. Not us... Gain 2 FP.|-1|REGKEY.cultureLevel<=5|0||300|1|9|9|0|0|||34|35|
|815|Boom Town|1|15|This is the place to be! Opportunities abound. Join us!|-1|REGKEY.cultureLevel<=5|2||500|1|9|9|0|0|||36|37|
|816|Labour Day|1|16|An ancient feast to celebrate the toil and labours of the workers.|-1|REGKEY.cultureLevel<=5|2||500|1|9|9|0|0|||36|37|
|817|Gladiators|1|17|We are not afraid of Death. Let us fight each other! You'll enjoy it!|-1|REGKEY.cultureLevel<=5|2||150|1|9|9|0|0|||36|37|
|818|Banker Ally|2|18|I will charge no interest. Impose no repayments. Le me help you...|-1|REGKEY.cultureLevel<=5|0||40|1|9|9|0|0|||36|37|
|819|Travelling Teachers|1|19|What is a greater purpose than transferring knowledge?|-1|REGKEY.cultureLevel<=5|2||150|1|9|9|0|0|||36|37|
|820|Fat Merchant|1|20|Yeah you heard me! I want to construct my new Casino right here.|-1|REGKEY.cultureLevel<=5|2||300|1|9|9|0|0|||36|37|
|821|Feasts|1|21|There is meat, there is music and the drinks are on the <NATIONLEADER>|-1|REGKEY.cultureLevel<=5|2||300|1|9|9|0|0|||36|37|
|822|Great Speech|2|22|Silence! Silence! The <NATIONLEADER> is about to speak.|-1|REGKEY.cultureLevel<=5|2||70|1|9|9|0|0|||36|37|
|823|Calm Them Down|1|23|Listen to the sound of my voice. Everything will be ok. I promise.|-1|REGKEY.cultureLevel<=5|2||300|1|9|9|0|0|||36|37|
|851|50 Political Points|1|135|I need more Political Points right now! Help me!|-1||0||750|1|9|9|0|0|||36|37|
|852|1000 Credits|1|136|The coffers are empty. I need more Credits right now!|-1||0||500|1|9|9|0|0|||36|37|
|901|Ancient Exosuit|0|81|A very fine powered suit. Crafted by the long dead master artisans of the Galactic Republic.|-1||4||4|1|10|999|0|0|||79|80|
|902|Cortical Simulator|0|82|An ancient cybernetic device easily applied behind the ear. It stimulates the learning centers of the brain.|-1||4||3|1|10|999|0|0|||79|80|
|903|Protocol Android|0|83|A faithful and trusty companion that always has a word of advice and of calculation.|-1||4||2|1|10|999|0|0|||79|80|
|904|Pheromone Device|0|84|A small tool, the shape of a vial of perfume. Careful use can influence the attitude of the people around its operator.|-1||4||4|1|10|999|0|0|||79|80|
|905|Holographic Freud|0|85|Who is that guys calling himself Sigmund appearing in the palm of my hand? Source of wisdom and willpower.|-1||4||1|1|10|999|0|0|||79|80|
|906|Dopaminator|0|86|A small metal patch that can give a Dopamine boost to its wearer.|-1||4||3|1|10|999|0|0|||79|80|
|911|Energy Lance|0|87|An ancient weapon that can pierce any known armour. Ever seen a tank cut in two?|-1||5||4|1|10|999|0|0|||79|80|
|912|Gravimetric Shield|0|88|It warps gravity. This advanced ancient device protects a bubble from incoming fire.|-1||5||2|1|10|999|0|0|||79|80|
|913|Wasp Hive|0|89|Tiny robotic wasps will launch in the direction they are faced. Infantry beware!|-1||5||4|1|10|999|0|0|||79|80|
|914|Warrior Android|0|90|Mean lean android that fights the enemies of its controller with high precision rapid rifle fire.|-1||5||4|1|10|999|0|0|||79 |80|
|915|Antigrav Lifter|0|91|A gravitybending device that lifts up to 10 tons. Ideal for overcoming terrain difficulties.|-1||5||4|1|10|999|0|0|||79|80|
|916|Assassin Android|0|92|A very advanced droid from the Galactic Republic era. Its speed and blades are without par.|-1||5||3|1|10|999|0|0|||79|80|
|921|Gravitonic Collector|0|93|Lost and incomprehensible technology allows this Asset to transform gravity to energy.|-1||2||2|1|10|999|0|0|||79|80|
|922|Cloning Facility|0|94|Fully automated ancient Asset that will allow you to increase your population quicker.|-1||2||1|1|10|999|0|0|||79|80|
|923|Automated Clinic|0|95|This emergency clinic from an era long gong has many robotic arms that perform better than many doctor.|-1||2||3|1|10|999|0|0|||79|80|
|924|Automated Factory|0|96|A miniature version of the fabled Automated Factories of yore.|-1||2||2|1|10|999|0|0|||79|80|
|925|Subterran Sensor|0|97|This ancient Asset and accompanying handheld sensors will help you make Archaeological Finds.|-1||2||3|1|10|999|0|0|||79|80|
|926|Subvocalizer Tower|0|98|A nasty piece of ancient technology. This asset uses specific waves to calm down your populace.|-1||2||2|1|10|999|0|0|||79|80|
|824|Auxilliary Chemical|1|40|An rare auxiliary team specialized in launching chemical bombs.|-1|REGKEY.techLevel>=4|5||150|1|9|9|0|0|||36|37|
|825|Spotter Drones|1|41|A specialist team that is using long distance drones specifically to aid artillery target better.|-1|REGKEY.techLevel>=4|5||300|1|9|9|0|0|||36|37|
|826|Ear Lock|2|42|A modified ancient device that is placed behind the ear to monitor the thoughts and ensure Leader loyalty.|-1|REGKEY.techLevel>=4|4||100|1|9|9|0|0|||36|37|
|827|Personal Guard|2|43|A personal guard protects a Leader from bodily harm. It is a great honor to have such a guard.|-1|REGKEY.techLevel>=4|4||500|1|9|9|0|0|||36|37|
|828|Exotic Combat Drug|2|44|We managed to obtain a one-time-use dose of Shiksai. It will provide an immediate boost in attack value to all our troops!|-1|REGKEY.techLevel>=4|0||100|1|9|9|0|0|||36|37|
|829|High-Tech Vault|3|45|A treasure trove of rare metals and machinery.|-1|REGKEY.techLevel>=4|2||150|1|9|9|0|0|||36|37|
|830|Scientific Outpost|2|46|Maybe you think there are just dull rocks out there... But we can learn a lot by studying the geology and climate of remote places.|-1|REGKEY.techLevel>=4|2||300|1|9|9|0|0|||36|37|
|831|Security Outpost|1|47|Not every enemy of the state operates from our Cities... Having some outposts helps us survey our perimeters.|-1|REGKEY.techLevel>=4|2||500|1|9|9|0|0|||36|37|
|832|Rebellion|0|48|A dark plot we never knew existed has come to fruition. Rebels are rising up against us! Fate Points +6|-1|REGKEY.techLevel>=4|0||300|1|9|9|0|0|||34|35|
|833|Mountaineer Team|1|49|The mountaineers can advice your troops how best to fight in the Mountains.|-1|REGKEY.cultureLevel>=4|5||150|1|9|9|0|0|||36|37|
|834|Sandline Rangers|1|50|These expert rangers will help lead your troops to victory in the sandy terrain of the deserts.|-1|REGKEY.cultureLevel>=4|5||300|1|9|9|0|0|||36|37|
|835|Personal Wealth|2|51|A large fortune allows a Leader to stop worrying and scheming for gain. |-1|REGKEY.cultureLevel>=4|4||30|1|9|9|0|0|||36|37|
|836|Happy Family|2|52|What provides more happiness than a family in good health?|-1|REGKEY.cultureLevel>=4|4||500|1|9|9|0|0|||36|37|
|837|Supreme Leader Day|1|53|Sometimes it is good to indulge and bask in the admiration of your populace.|-1|REGKEY.cultureLevel>=4|0||70|1|9|9|0|0|||36|37|
|838|Ancient Depot|2|54|A search of a hidden depot yields 3 random ancient Artifacts.|-1|REGKEY.cultureLevel>=4|0||150|1|9|9|0|0|||36|37|
|839|Viewpoint|2|55|Nothing beats an inspiring view. The landmarks, the horizon, the colors... Its just overwhelming.|-1|REGKEY.cultureLevel>=4|2||500|1|9|9|0|0|||36|37|
|840|Ecological Station|1|56|Science is nice, but allowing our populace and youth to learn in the field might be even better.|-1|REGKEY.cultureLevel>=4|2||300|1|9|9|0|0|||36|37|
|841|Disease!|0|57|A freak unidentified disease causes mass casualties, but burns out almost immediately after. Gain 9 FP.|-1|REGKEY.cultureLevel>=4|0||300|1|9|9|0|0|||34|35|
|1001|Double Shifts|5|58|Workers of our <NATION>! It is time to give even more to your motherland!|-1||0||100|242|11|999|0|0|||38|39|
|1002|All for the Front|5|59|More casualties are to be expected and we need you to accept the sacrifice...|-1||0||100|202|11|999|0|0|||38|39|
|1003|Breakthrough Now!|5|60|Sometimes it does not require time, but inspiration to make a new Tech discovery|-1||0||100|325|11|999|0|0|||38|39|
|1004|Political Aid Truck|5|61|Your political forces have chosen the troops their Aid Truck is embedded with to receive special extras.|-1||5||100|101|11|999|0|0|||38|39|
|1005|Political Lieutenant|5|62|This Lieutenant might be a nuisance but as long as things are going good he is increasing their do and dare.|-1||5||100|304|11|999|0|0|||38|39|
|1006|Militant Propagandist|5|63|This fellow is a common thug, but he knows how to preach hate against the enemy.|-1||5||100|341|11|999|0|0|||38|39|
|1007|Crackdown on Unrest|5|64|This Unrest is intolerable. Send in assassins to kill the leaders of the unrest mongers.|-1||2||100|123|11|999|0|0|||38|39|
|1008|Local Referendum|5|65|To trust the people is to let them vote. You will organize a referendum on your governorship.|-1||4||100|103|11|999|0|0|||38|39|
|1009|Worker Privileges|5|66|Why not give our Workers some little privileges? Like better housing, better food...|-1||2||100|142|11|999|0|0|||38|39|
|1010|Zoo Project|5|67|A place to relax and learn for the whole family. It will provide education opportunities and give a sense of pride.|-1||2||100|322|11|999|0|0|||38|39|
|1011|Commercial Project|5|68|Our populace likes to feel prosperity is growing. Nothing gives that feel like some nice store fronts and buisy markets.|-1||2||100|221|11|999|0|0|||38|39|
|1012|Militia Project|5|69|Our militia will appreciate a proper barrack and a Zone HQ of their own.|-1||2||100|301|11|999|0|0|||38|39|
|1013|Insult|5|70|Politicians insult this foreign power on one of their party meetings.|-1||1||100|303|11|999|0|0|||38|39|
|1014|Civil Delegation|5|71|Politicians decide to visit this foreign power to learn from them and to pay their respects.|-1||1||100|105|11|999|0|0|||38|39|
|1015|Plea of Friendship|5|72|We'll send our most gifted and spirited envoy. He'll tell them how much we care for our joint future.|-1||1||100|141|11|999|0|0|||38|39|
|1016|Investor Backing|5|73|Private capital sees opportunities in this Zone. An influx of Private Credits is to be expected. |-1||2||100|223|11|999|0|0|||38|39|
|1017|Popular Rally|5|74|Let the people march, chant and sing for their ideals.|-1||2||100|343|11|999|0|0|||38|39|
|1018|Cooptation|5|75|To be in the inner circle of the powerful players brings great benefits.|-1||4||100|225|11|999|0|0|||38|39|
|1019|Sacred Oath|5|76|Swear unconditional obedience to the Supreme Leader.|-1||4||100|204|11|999|0|0|||38|39|
|1020|Hero of the Nation|5|77|A medal, a ceremony... The Leader is chosen by one of your Factions as the National Hero.|-1||4||100|122|11|999|0|0|||38|39|
|1021|Administrative Review|5|78|A bureaucratic committee will be formed to review this specific Leader. |-1||4||100|244|11|999|0|0|||38|39|
|651|Prospecting Push I|35|123|Using people outside the Prospectors office we can make much more triangulations.|1||2||20|50|7|13|||||101|102|
|510|Give 500 to Populace|2|103|Let's make an effort to show the people we mean well. 500 Credits has to make an impression.|31|REGIMEFEAT.222>0|2||10|30|7|10|0|0|||99|100|
|511|Give 2000 to Populace|2|104|Let's make an effort to show the people we mean well. 2000 Credits should really make an impression.|31|REGIMEFEAT.222>0|2||10|30|7|10|0|0|||99|100|
|512|Volunteer Drive|20|105|We need Recruits right now! Let's send out the press gangs!|31||2||10|30|7|10|0|0|||99|100|
|513|Miltia Enthusiasm|40|106|The Militancy in this Zone needs to go up again. Let's boost the local Militia.|31|REGIMEFEAT.201>0|2||10|30|7|10|0|0|||99|100|
|514|Patriotic Collection|25|107|Everybody! everybody! give a donation! for your country needs you...|31|REGIMEFEAT.143>0|2||10|30|7|10|0|0|||99|100|
|515|Cabinet Retreat|20|108|Nothing better to socialize and brainstorm together than some days in the countryside.|31|REGIMEFEAT.102>0|0||10|30|4|5|0|0|||99|100|
|516|Governor Convention|20|109|Governors love to be assembled and give speeches of their local policies to eachother.|31|REGIMEFEAT.241>0|0||10|30|4|5|0|0|||99|100|
|517|Wargames|30|110|A social get-together for all Commanders, but also an opportunity to learn.|31||0||10|30|4|5|0|0|||99|100|
|518|Grand Convention|40|111|A rare thing. A Grand Convention assembles all your Leaders together for rallies and workshops.|31|REGIMEFEAT.142>0|0||10|30|4|5|0|0|||99|100|
|519|Bureaucratic Push|10|112|We'll use all our clout to press our bureaucrats and scientists to deliver.|31|REGIMEFEAT.241>0|0||10|30|4|10|0|0|||99|100|
|520|Efficiency Drive|25|113|We think there is surplus equipment and funds in our bureaucracy.|31|REGIMEFEAT.202>0|0||10|30|4|10|0|0|||99|100|
|521|Mission Impossible|50|114|If we really focus... Really focus our political power we could perform a miracle.|31||0||10|30|4|10|0|0|||99|100|
|522|Medal of Merit|15|115|A personal visit by you to welcome the Leader in the Order of Merit.|31||4||10|30|8|5|0|32|||99|100|
|523|Commercial Gift|5|116|Spend 300 Credits to organize the privatisation of a state enterprise gift to Leader.|31|REGIMEFEAT.223>0|4||10|30|8|5|0|0|||99|100 |
|524|Estate Gift|15|117|Spent some political effort to give a national estate as a gift to the Leader.|31|REGIMEFEAT.223>0|4||10|30|8|5|0|0|||99|100|
|544|Bonus|3|183|Spend 100 Credits and allocate it to the Leader as a bonus payment.|31||4||10|30|8|5||32|||99|100|
|545|Official Gift|4|184|Spend 200 Credits for a gift, reception and acclamation for the Leader.|31||4||10|30|8|5|||||99|100|
|549|Zero Retirement|10|182|Spend NO Credits and have 50% chance to retire Seniority-10 Leader.|31||4||7|30|8|5|||||99|100|
|546|Bronze Retirement|5|179|Spend 250 Credits and have 50% chance to retire Seniority-30 Leader.|31||4||10|30|8|5|||||99|100|
|547|Silver Retirement|10|180|Spend 500 Credits and have 50% chance to retire Seniority-50 Leader.|31||4||7|30|8|5|||||99|100|
|548|Golden Retirement|20|181|Spend 1000 Credits and have 50% chance to retire Seniority-70 Leader.|31||4||4|30|8|5|||||99|100|
|525|Supress Unrest|10|129|Send in the Army and the Militia to wipe the Unrest of the streets.|14|REGIMEFEAT.122>0|REGIMEFEAT.203>0|2||10|30|7|11|0|0|||127|128|
|526|Razzia|20|130|Curfews, martial law, random arrests... Whatever it takes to instill Fear!|14|REGIMEFEAT.126>0|2||10|30|7|11|0|0|||127|128|
|527|Forced Relocation|15|131|Round up barbaric Free Folk from the countryside and force them to relocate to the City.|14|REGIMEFEAT.121>0|REGIMEFEAT.243>0|2||10|30|7|11|0|0|||127|128|
|528|Pillage|10|132|Send in the Army and Militia to take all Food and Credits we can find.|14|REGIMEFEAT.122>0|2||10|30|7|11|0|0|||127|128|
|529|Raze|20|133|Send in the Army and Militia to destroy and pillage as much as possible.|14|REGIMEFEAT.125>0|2||10|30|7|11|0|0|||127|128|
|530|Expel Population|10|134|Send in the Army and Militia to expell unloyal subjects.|14||2||10|30|7|11|0|0|||127|128|
|531|Give 500 to Militia|2|118|Make a monetary gift of 500 Credits to the Militia in this Zone.|31||2||10|30|7|10|0|0|||99|100|
|532|Assassinate Leader|20|30|We know were everybody sleeps at night. And we know our assasins knives are sharpened.|18|REGIMEFEAT.122>0|4||10|30|8|12|0|0|||28|29|
|533|Threaten Leader|10|31|Subjects need to know their place in the hierarchy! And if not...|18|REGIMEFEAT.202>0|4||10|30|8|12|0|0|||28|29|
|534|Gift to Faction|10|32|Make a monetary gift of 1000 Credits to the Faction the chosen Leader belongs to.|18|REGIMEFEAT.221>0|4||10|30|8|12|0|0|||28|29|
|535|Investigate Leader|10|33|Try to recoup as much stolen Credits from a corrupt Leader as possible.|18||4||10|30|8|12|0|0|||28|29|
|536|Emergency Tax|10|119|There is no time to explain. We need funds right now!|31|REGIMEFEAT.201>0|2||10|30|7|10|0|0|||99|100|
|537|Draft Workers|5|120|There is no time to explain. We need more Workers right now.|31|REGIMEFEAT.242>0|2||10|30|7|10|0|0|||99|100|
|538|Draft Colonists|10|121|There is no time to explain. We need more Colonists right now.|31|REGIMEFEAT.243>0|2||10|30|7|10|0|0|||99|100|
|539|Draft Recruits|20|122|There is no time to explain. We need more Recruits right now.|31|REGIMEFEAT.203>0|2||10|30|7|10|0|0|||99|100|
|540|Prospecting Push II|40|123|Using people outside the Prospectors office we can make much more triangulations.|1|REGIMEFEAT.103>0|2||10|30|7|13|0|0|||101|102|
|541|Archaeology Effort|10|124|There is always more leads to investigate than manpower. Lets change that around for a change.|1||2||10|30|7|13|0|0|||101|102|
|542|Private Investment|20|125|With a relatively small effort we can persuade some of our capitalists to invest in this Zone. |1|REGIMEFEAT.221>0|2||10|30|7|13|0|0|||101|102|
|543|Attract Free Folk|40|126|A campaign to sell the great life in our Cities. We'll convince those Free Folk to come.|1|REGIMEFEAT.242>0|2||10|30|7|13|0|0|||101|102|
|581|Peripheral Mining|20|185|Extend one of the mines into lower grade deposit areas. Gain reserves, lose efficiency.|1||2||20|50|7|13|||||101|102|
|930|Frontline Inspirator|1|186|Commander is hailed by the troops whenever he/she is close.|-1||4||300|1|9|9|||||36|37|
|931|Strain Solver|2|187|There is always a way to better manage a Zone!|-1||4||40|1|9|9|||||36|37|
|932|Cultural Integrator|1|188|To make them become like us, we have to become a little bit like them...|-1||4||300|1|9|9|||||36|37|
|933|Former Gladiator|1|189|Old Gladiators-in-arms will flock to help. That's how gladiators are. Loyalty is forever.|-1||4||100|1|9|9|||||36|37|
|934|Child of the Stars|3|190|It is rumoured this Leader was actualy brought up by parents that arrived recently by spaceship.|-1||4||80|1|9|9|||||36|37|
|945|GR Phantasma|1|201|We found some intact GR Recon Buggies. Excellent recon and hide!|-1||2||300|1|9|9|||||36|37|
|946|GR Vortex|1|202|We found some very fast GR Medium Tanks. The Vortex brings credit to its name.|-1||2||300|1|9|9|||||36|37|
|947|GR Thunderous|2|203|We found a rare battery of GR Artillery. Use it to judge it. It is rumoured to be very lethal.|-1||2||100|1|9|9|||||36|37|
|948|GR Gargantuous|3|204|We found the most heavy of GR Tanks. It does not get any heavier than this...|-1||2||40|1|9|9|||||36|37|
|935|GR Optics|3|191|New methods to construct sights will increase accuracy of your weapons.|-1|TECH.401<100|0|Increases the kill chance of your equipment with +33%.|80|1|9|9|||||36|37|
|936|GR Coating|3|192|Ingenious method to layer base materials to increase hardness of the tip of projectiles.|-1|TECH.402<100|0|Increases conventional weapon effectiveness against hard targets with +33%.|40|1|9|9|||||36|37|
|937|GR Supercharger|3|193|Get more bang out of your energy discharges.|-1|TECH.403<100; REGKEY.techLevel>6;|0|Laser/Beam weapons get +25% more firepower.|40|1|9|9|||||36|37|
|938|GR Shell Camera|2|194|It might be just a few seconds of imagery before impact, but it is worth it...|-1|TECH.404<100|0|Gives 1 Recon Point per ranged attack.|90|1|9|9|||||36|37|
|939|GR Infiltration Methods|2|195|The GR Manual reveals many ghost-like ancient methods to sneak past the enemy.|-1|TECH.405<100|0|Specialist coded GR instructions work well and give your troops more chances to break through to the enemy’s rear during combat.|100|1|9|9|||||36|37|
|940|GR Combat Simulator|2|196|Finally away to get some combat experience without actually biting a bullet.|-1|TECH.406<100|0|Allows XP to go up +10 points higher, without needing to get in actual combat.|90|1|9|9|||||36|37|
|941|GR Combat Drugs|3|197|Better than coffee or vodka. And no hangovers. GR medicinal knowledge is truly the best!|-1|TECH.407<100|0|Allows to gain extra Readiness at start of combat if Readiness is low.|35|1|9|9|||||36|37|
|942|GR Ringmail|3|198|A simple technique to reinforce low tech armour. Ingenious and easy to implement.|-1|TECH.408<100|0|Lower Tech armour will be improved with this Tech. Envirosuit +75%, Padded +50%, Combat +25%.|90|1|9|9|||||36|37|
|943|GR Mass Driver|4|199|The Mass Driver Gun is able to tackle targets far above its paygrade.|-1|TECH.409<100; REGKEY.techLevel>5;|0|New super-HV (high velocity) 100mm conventional gun that actually counts as 300 mm in caliber calculations.|25|1|9|9|||||36|37|
|944|GR Chaingun|4|200|Revolving barrels increase the fire rate potential. It can literally dig through armour.|-1|TECH.410<100|0|All conventional/flechette MGs get +50% against hard targets.|80|1|9|9|||||36|37|
|949|Blame it on the Vodka|0|205|One of your happiest and most intelligent Leaders becomes alcoholic. Gain 1 FP.|||4||300|1|9|9|||||34|35|
|950|You're a Liar!|0|206|Unbased accusations lead the Populace to believe you are a liar. Gain 3 FP.|||0||300|1|9|9|||||34|35|
|951|Lab Leak|0|207|A virus reducing fertility escapes from a laboratory. Gain 3 FP.|||0||200|1|9|9|||||34|35|
|952|Prestige Damage|0|208|Lack of eloquance during an important meeting causes shame and prestige damage. Gain 4 FP.|||0||200|1|9|9|||||34|35|
|953|Pacifist Scientists|0|209|Radical scientists protest for disarmament and cause Populace to dislike Mind. Gain 2 FP.|||0||150|1|9|9|||||34|35|
|954|Head Injury|0|210|One of your more charismatic Leaders suffers a terrible head injury. Gain 1 FP.|||4||125|1|9|9|||||34|35|
|561|Improvised IP|25|211|Mobilize the artisans to produce IP in their workshops. Req 500 Cr, not all might be spent.|1|REGIMEFEAT.222>0|2||20|50|7|13|||||101|102|

