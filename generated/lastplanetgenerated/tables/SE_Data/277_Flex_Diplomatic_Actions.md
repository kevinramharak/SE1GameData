## `SE_Data.'Flex Diplomatic Actions'` (id = `277`)

### Columns (`39`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID | Text 
| `1` | Name | Text 
| `2` | PP Cost | Text 
| `3` | Event Picture | Text 
| `4` | Text | Text 
| `5` | Org ID | Text 
| `6` | IF Logic | Text 
| `7` | Target Type | Text 
| `8` | Mouse Over | Text 
| `9` | Weight SET Logic | Text 
| `10` | BP Cost | Text 
| `11` | Category | Text 
| `12` | Phase | Text 
| `13` | Use Human | Text 
| `14` | Org 2 ID | Text 
| `15` | Max in Hand | Text 
| `16` | Never Consumed | Text 
| `17` | overlay event pic | Text 
| `18` | med.overlay.ev | Text 
| `19` | PlayOnSelfAllowed | Text 
| `20` | Ext.Gfx | Text 
| `21` | Ext.Gfx | Text 
| `22` | Ext.Gfx | Text 
| `23` | Ext.Gfx | Text 
| `24` | New Col | Text 
| `25` | New Col | Text 
| `26` | New Col | Text 
| `27` | New Col | Text 
| `28` | New Col | Text 
| `29` | New Col | Text 
| `30` | New Col | Text 
| `31` | New Col | Text 
| `32` | New Col | Text 
| `33` | New Col | Text 
| `34` | New Col | Text 
| `35` | New Col | Text 
| `36` | New Col | Text 
| `37` | New Col | Text 
| `38` | New Col | Text 

### Rows (`287`)

| Card ID | Name | PP Cost | Event Picture | Text | Org ID | IF Logic | Target Type | Mouse Over | Weight SET Logic | BP Cost | Category | Phase | Use Human | Org 2 ID | Max in Hand | Never Consumed | overlay event pic | med.overlay.ev | PlayOnSelfAllowed | Ext.Gfx | Ext.Gfx | Ext.Gfx | Ext.Gfx | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col | New Col |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|1|Open Contact|5|9|Open communication so that you can propose deals.|30||1||20|20|1|1|1|32|||386|387|||||||15||||||||||||||
|2|Embassy|10|18|Exchanging ambassadors increases communication and recon|30|che(249,2,1)>0;|1||6|40|1|1|1||||386|387|||||||30||||||||||||||
|3|Cultural Exchange|20|19|Exchanging experts increases communication and recon|30|che(249,2,1)>0; che(249,2,2)>0;|1||3|80|1|1|1||||386|387|||||||45||||||||||||||
|4|Expel Diplomats|20|20|Unilaterally reduce communication level|30|che(249,2,1)>0|1||6|80|1|1|0|32|||386|387|||||||-20||||||||||||||
|5|Trade|5|21|Allows trade to take place between you|30|che(249,2,1)>0|1||10|40|1|1|1|32|||386|387|||||||15||||||||||||||
|6|Free Trade|10|22|Makes it impossible to impose tariffs on cross border trade|30|che(249,2,1)>0; che(249,2,5)>0;|1||6|80|1|1|1||||386|387|||||||30||||||||||||||
|7|Free Movement|20|23|Makes it possible for population to cross your borders.|30|che(249,2,1)>0; che(249,2,6)>0;|1||3|160|1|1|1||||386|387|||||||45||||||||||||||
|8|Limit Trade|20|24|Unilateraly reduce trade level|30|che(249,2,1)>0;|1||6|80|1|1|0|32|||386|387|||||||-20||||||||||||||
|9|Scientific Cooperation|5|25|Try to share discoveries, but not actual tech levels|30|che(249,2,1)>0;|1||10|40|1|1|1|32|||386|387|||||||15||||||||||||||
|10|Scientific Exchange|10|26|Share tech levels will be attempted if 50 points ahead|30|che(249,2,1)>0; che(249,2,9)>0;|1||6|80|1|1|1||||386|387|||||||30||||||||||||||
|11|Scientific Joint Effort|20|27|Full sharing of tech levels will be attempted|30|che(249,2,1)>0; che(249,2,10)>0;|1||3|160|1|1|1||||386|387|||||||45||||||||||||||
|12|Limit Science Coop|20|28|Unilateraly reduce the scientific cooperation level.|30|che(249,2,1)>0; che(249,2,9)>0|1||6|80|1|1|0|32|||386|387|||||||-20||||||||||||||
|13|Non-Agression Pact|5|29|Makes it impossible for both to declare war|30|che(249,2,1)>0;|1||10|40|1|1|1|32|||386|387|||||||15||||||||||||||
|14|Friendship Pact|10|30|Anybody who attacks you will be our enemy|30|che(249,2,1)>0; che(249,2,13)>0;|1||6|80|1|1|1||||386|387|||||||30||||||||||||||
|15|Victory Pact|20|31|Your enemies will be our enemies and we conquer the planet together|30|che(249,2,1)>0; che(249,2,14)>0;|1||3|160|1|1|1||||386|387|||||||45||||||||||||||
|16|Cancel Pact Clause|40|32|Unilaterally reduce military pact level|30||1||6|80|1|1|0|32|||386|387|||||||-20||||||||||||||
|25|Provocation|20|33|A successful provocation will cause a relation drop|30||1||10|80|1|1|0||||386|387|||||||-20||||||||||||||
|26|Propose Peace|10|34|End the war and go to peace|30||1||20|80|1|1|1||||386|387|||||||75||||||||||||||
|27|Major War|20|676|Go to war with Major Regime! allows your units to conquer their zones. Note that this can cause severe loyalty/relation penalties if relation is high.|30|che(261,2)>0|1||40|80|1|1|0|32|||386|387|||||||-100||||||||||||||
|28|Gift 400 Crd|1|35|A token gift could improve relations|30||1||20|60|1|1|1|32|||386|387|||||||10||||||||||||||
|29|Gift 1000 Crd|3|36|A substantial gift will improve relations|30|che(249,2,28)>0|1||10|120|1|1|1||||386|387|||||||15||||||||||||||
|30|Gift 2500 Crd|5|37|A big gift will surely improve relations|30|che(249,2,29)>0|1||5|200|1|1|1||||386|387|||||||20||||||||||||||
|31|Support Faction|10|733|Send special operatives to support a foreign Faction.|18||1||10|20|3|8|0||||388|389|||||||0||||||||||||||
|32|Ask For Help|2|734|Ask a Friend for help, either Credits or PP|30||1||15|20|1|1|0|32|||386|387|||||||||||||||||||||
|33|Ouverture|30|674|Communicate willingness to end the war|30||1||15|40|1|1|1||||386|387|||||||10||||||||||||||
|41|Shadow Spy|5|612|Assign a master Spy to a Leader to help with Leaders next Skill Roll.|18||4||10|20|8|2|0|32|||388|389|1||||||||||||||||||||
|42|Shadow Diplomat|10|613|Assign a Veteran Diplomat to a Leader to help with Leaders next Skill Roll.|30||4||10|20|8|1|0|32|||386|387|1||||||||||||||||||||
|49|Minor War|10|676|Go to war with Minor Regime! allows your units to conquer their zones. Note that this can cause some loyalty/relation penalties if relation is high.||che(261,2)>0|1||40|40|2|6|0|32|||386|387|||||||-50||||||||||||||
|101|Invade|10|-1|Attack a minor regime|0||1||20|10|999|6|0||||386|387|||||||-50||||||||||||||
|102|Offer Protection|2|38|Offer yourself as protector. You will defend them when attacked|30||1||10|20|2|6|0|32|||386|387|||||||10||||||||||||||
|103|Offer Client|3|39|Offer them to become a client state. They'll be docile and pay tax.|30||1||10|40|2|6|0||||386|387|||||||20||||||||||||||
|104|Propose Peace|5|735|End the war and go to peace|30||1||10|20|2|6|0|32|||386|387|||||||50||||||||||||||
|105|Unification|20|675|Consider the advantages of being part of our great <NATION>...|30||1||10|30|2|6|0||||386|387|||||||-5||||||||||||||
|106|Annexation|30|676|You are either with us or against us!|30||1||10|60|2|6|0||||386|387|||||||-20||||||||||||||
|107|Xeno Diplomat|20|755|Send an emissary to invite the Alien natives to a meeting.|30|GAMEKEY.58>0|1||10|30|2|6|0||||386|387|||||||||||||||||||||
|108|Xeno Diplomat Team|45|755|Send a team of emissaries to invite the alien natives for a meeting.|30|GAMEKEY.58>0|1||5|40|2|6|0||||386|387|||||||||||||||||||||
|201|Send Spy|3|40|Send 1 spy|18||2||30|10|3|2|0|32|||388|389|||||||-2||||||||||||||
|202|Send Spy Team|4|41|Send 3 spies|18|che(249,2,201)>0|2||10|20|3|2|0||||388|389|||||||-4||||||||||||||
|203|Send Spy Ring|5|42|Send 6 spies|18|che(249,2,202)>0|2||5|30|3|2|0||||388|389|||||||-6||||||||||||||
|701|Call to Success I|50|390|Make capable population and workers leave to join Free Folk and eventually come to you.|18|REGIMEFEAT.144>0|2||20|100|3|8|0||||388|389|||||||-10||||||||||||||
|702|Call to Success II|100|391|Make capable population and workers leave to join Free Folk and eventually come to you.|18|REGIMEFEAT.145>0|2||10|200|3|8|0||||388|389|||||||-20||||||||||||||
|703|Call to Success III|150|392|Make capable population and workers leave to join Free Folk and eventually come to you.|18|REGIMEFEAT.146>0|2||5|300|3|8|0||||388|389|||||||-30||||||||||||||
|704|Call to Rebellion I|50|393|Send agitators and propaganda to sow discontent with their masters.|18|REGIMEFEAT.104>0|2||20|100|3|8|0||||388|389|||||||-10||||||||||||||
|705|Call to Rebellion II|100|394|Send agitators and propaganda to sow discontent with their masters.|18|REGIMEFEAT.105>0|2||10|200|3|8|0||||388|389|||||||-20||||||||||||||
|706|Call to Rebellion III|150|395|Send agitators and propaganda to sow discontent with their masters.|18|REGIMEFEAT.106>0|2||5|300|3|8|0||||388|389|||||||-30||||||||||||||
|707|Call to Power I|50|396|Sow the seeds of ambition among their soldiers and NCOs.|18|REGIMEFEAT.121>0|2||20|100|3|8|0||||388|389|||||||-10||||||||||||||
|708|Call to Power II|100|397|Sow the seeds of ambition among their soldiers and NCOs.|18|REGIMEFEAT.123>0|2||10|200|3|8|0||||388|389|||||||-20||||||||||||||
|709|Call to Power III|150|398|Sow the seeds of ambition among their soldiers and NCOs.|18|REGIMEFEAT.124>0|2||5|300|3|8|0||||388|389|||||||-30||||||||||||||
|601|Defense|2|407|Infantry forces get +40% on defense and -30% on attack.|14||3||50|50|6|7|0|32|||405|406|||||||||||||||||||||
|602|Retreat|4|408|Defense +30% and attack -40%. Retreat at 10% losses.|14|REGIMEFEAT.343>0|3||60|50|6|7|0||||405|406|||||||||||||||||||||
|603|Forced March|7|409|Infantry + Artillery get +50% action points. Infantry + Artillery -40% on attack and readiness -10%.|14|REGIMEFEAT.342>0|3||70|50|6|7|0||||405|406|||||||||||||||||||||
|604|Hold the Line|12|410|Infantry forces get +50% on defense and -60% on attack. Retreat at 80% losses.|14|REGIMEFEAT.341>0|3||80|50|6|7|0||||405|406|||||||||||||||||||||
|605|Recon in Force|2|411|Mechanized forces get +20% on attack and -40% on defense. Retreat at 20% losses. No initial attacker penalty.|14||3||50|50|6|7|0||||405|406|||||||||||||||||||||
|606|Infiltration|4|412|Infantry forces get +40% on attack and -30% on defense.|14|REGIMEFEAT.321>0|3||60|50|6|7|0||||405|406|||||||||||||||||||||
|607|Fluid Defense|7|413|Infantry + Artillery get +40% on defense, mechanized forces get -30% on defense but +30% on attack.|14|REGIMEFEAT.322>0|3||70|50|6|7|0||||405|406|||||||||||||||||||||
|608|Small Pockets|12|414|Infantry get +40% on attack, Mechanized forces get +30% on attack. Infantry gets -30% on defense. Morale growth +100%.|14|REGIMEFEAT.326>0|3||80|50|6|7|0||||405|406|||||||||||||||||||||
|609|Field Training|2|415|Experience growth +100%. Attack -60% and Defense -40%.|14||3||50|50|6|7|0|32|||405|406|||||||||||||||||||||
|610|Rush|4|416|Action points +30% and Defense -20%.|14|REGIMEFEAT.323>0|3||60|50|6|7|0||||405|406|||||||||||||||||||||
|611|Siege|7|417|Artillery attacks +100%, infantry attacks +50% but -30% action points and -50% overall on defense.|14|REGIMEFEAT.324>0|3||70|50|6|7|0||||405|406|||||||||||||||||||||
|612|Mobile Ops|12|418|Action points +30% and mechanized forces attack +30%, but -40% overall on defense.|14|REGIMEFEAT.325>0|3||80|50|6|7|0||||405|406|||||||||||||||||||||
|613|Entrench|2|419|Entrenchment and maximum entrenchment +50% but overall attack -40%.|14||3||50|50|6|7|0||||405|406|||||||||||||||||||||
|614|Economize|4|420|Half the food cost, but morale growth -50%.|14|REGIMEFEAT.345>0|3||60|50|6|7|0||||405|406|||||||||||||||||||||
|615|Charge|7|421|Infantry attack +80%, but morale and experience growth -75% as well as overall defense -40%.|14|REGIMEFEAT.344>0|3||70|50|6|7|0||||405|406|||||||||||||||||||||
|616|Fortress|12|422|Entrenchment and maximum entrenchment +70% and overall defense +30%, but action points and overall attack -70%.|14|REGIMEFEAT.346>0|3||80|50|6|7|0||||405|406|||||||||||||||||||||
|617|Blitzkrieg|2|423|Mechanized forces attack +60% and action points +30%. Overall defensive power -30%, entrenchment impossible and 60 AP oil consumption start of turn.|14||3||50|50|6|7|0|32|||405|406|||||||||||||||||||||
|618|Ambush|4|424|Mechanized forces defense +75%, other forces defense +40%. Retreat at 10% losses. Overall attack -50% and 5% to lose troops on retreat.|14|REGIMEFEAT.302>0|3||60|50|6|7|0||||405|406|||||||||||||||||||||
|619|Defeat in Detail|7|425|Double concentric attack bonus, but overall defense -30%.|14|REGIMEFEAT.304>0|3||70|50|6|7|0||||405|406|||||||||||||||||||||
|620|Shock and Awe|12|426|Mechanized forces and artillery +100%, but overall defense -50%. Costs 5 combat rounds of ammo and fuel at start of turn.|14|REGIMEFEAT.306>0|3||80|50|6|7|0||||405|406|||||||||||||||||||||
|621|All Out Attack|2|427|Infantry attack +75%, infantry defense -75%. No Retreat allowed. No entrechment. 50% die on retreat.|14||3||50|50|6|7|0||||405|406|||||||||||||||||||||
|622|No Retreat|4|428|Infantry defense +75%, infantry attack -75%. No Retreat allowed. 50% less action points. 50% chance to suffer a hit when attacked during retreating.|14|REGIMEFEAT.301>0|3||60|50|6|7|0||||405|406|||||||||||||||||||||
|623|Suicidal Offensive|7|429|Infantry attack +100%, infantry defense -75%. No Retreat allowed. No entrechment. 20% chance to die under fire. |14|REGIMEFEAT.305>0|3||70|50|6|7|0||||405|406|||||||||||||||||||||
|624|Glorious War|12|430|Morale growth and max morale +100%. Attack and defense gets a bonus % equal to the morale difference with the enemy.|14|REGIMEFEAT.303>0|3||80|50|6|7|0||||405|406|||||||||||||||||||||
|801|Radiation Leak|0|148|Don't touch that lever! This ancient machine is highly unstable.Gain 3 FP.|-1|REGKEY.techLevel<=5|0||300|1|9|9|0|0|||434|435|||||||||||||||||||||
|802|Chemical High|0|150|A new doctor is in town. Selling pills of many colors and many pleasures. Want one? Gain 2 FP.|-1|REGKEY.techLevel<=5|0||300|1|9|9|0|0|||434|435|||||||||||||||||||||
|803|Eager Industrialist|1|151|I have the Ambition. I have the Capital! Let me start my industrial empire here!|-1|REGKEY.techLevel<=5|2||300|1|9|9|0|0|||436|437|||||||||||||||||||||
|804|Motherload|2|152|Holy Moly! How could we have missed those fat juicy deposits!|-1|REGKEY.techLevel<=5|2||300|1|9|9|0|0|||436|437|||||||||||||||||||||
|805|Treasure Hoard|2|153|A bolted metal door in the rock face. Who knows what we'll find if we open it?|-1|REGKEY.techLevel<=5|2||500|1|9|9|0|0|||436|437|||||||||||||||||||||
|806|Ancient Archive|4|154|We are in possession of tons of ancient books and discs. Maybe we should study them?|-1|REGKEY.techLevel<=5|0||90|1|9|9|0|0|||436|437|||||||||||||||||||||
|807|Docile AI|1|155|First everybody was scared shitless, but then we understood the AI accepted our authority.|-1|REGKEY.techLevel<=5|2||150|1|9|9|0|0|||436|437|||||||||||||||||||||
|808|Propaganda Assistant|1|156|If you use the right words everybody will accept what you propose|-1|REGKEY.techLevel<=5|4||500|1|9|9|0|0|||436|437|1||||||||||||||||||||
|809|Tacticus Genius|2|157|An autistic little man that whispers brilliant tactical moves in the ear of commanders.|-1|REGKEY.techLevel<=5|4||60|1|9|9|0|0|||436|437|1||||||||||||||||||||
|810|Sage|3|158|Do you know what Liquid Energy actually is? I do...|-1|REGKEY.techLevel<=5|0||30|1|9|9|0|0|||436|437|||||||||||||||||||||
|811|Lifesupport Failure|0|159|Damnation! Outside air is entering our domes! We need to... cough... argh... Gain 4 FP.|-1|REGKEY.techLevel<=5; GAMEKEY.1>=4;|0||300|1|9|9|0|0|||434|435|||||||||||||||||||||
|812|Bad Rations|0|160|We sent spoiled food to the front. They'll be furious when they find out... Gain 2 FP.|-1|REGKEY.cultureLevel<=5|0||300|1|9|9|0|0|||434|435|||||||||||||||||||||
|813|Paranoia|0|161|You are surrounded by idiots. Why do they not go away? Die? Disappear? Gain 2 FP.|-1|REGKEY.cultureLevel<=5|0||300|1|9|9|0|0|||434|435|||||||||||||||||||||
|814|Militia Loss of Faith|0|162|Our blood and sacrifice just benefits the powerful. Not us... Gain 2 FP.|-1|REGKEY.cultureLevel<=5|0||300|1|9|9|0|0|||434|435|||||||||||||||||||||
|815|Boom Town|1|163|This is the place to be! Opportunities abound. Join us!|-1|REGKEY.cultureLevel<=5|2||500|1|9|9|0|0|||436|437|||||||||||||||||||||
|816|Labour Day|1|164|An ancient feast to celebrate the toil and labours of the workers.|-1|REGKEY.cultureLevel<=5|2||500|1|9|9|0|0|||436|437|||||||||||||||||||||
|817|Gladiators|1|165|We are not afraid of Death. Let us fight each other! You'll enjoy it!|-1|REGKEY.cultureLevel<=5|2||150|1|9|9|0|0|||436|437|||||||||||||||||||||
|818|Banker Ally|2|166|I will charge no interest. Impose no repayments. Le me help you...|-1|REGKEY.cultureLevel<=5|0||40|1|9|9|0|0|||436|437|||||||||||||||||||||
|819|Travelling Teachers|1|167|What is a greater purpose than transferring knowledge?|-1|REGKEY.cultureLevel<=5|2||150|1|9|9|0|0|||436|437|||||||||||||||||||||
|820|Fat Merchant|1|168|Yeah you heard me! I want to construct my new Casino right here.|-1|REGKEY.cultureLevel<=5|2||300|1|9|9|0|0|||436|437|||||||||||||||||||||
|821|Feasts|1|169|There is meat, there is music and the drinks are on the <NATIONLEADER>|-1|REGKEY.cultureLevel<=5|2||300|1|9|9|0|0|||436|437|||||||||||||||||||||
|822|Great Speech|2|170|Silence! Silence! The <NATIONLEADER> is about to speak.|-1|REGKEY.cultureLevel<=5|2||70|1|9|9|0|0|||436|437|||||||||||||||||||||
|823|Calm Them Down|1|171|Listen to the sound of my voice. Everything will be ok. I promise.|-1|REGKEY.cultureLevel<=5|2||300|1|9|9|0|0|||436|437|||||||||||||||||||||
|851|50 Political Points|1|621|I need more Political Points right now! Help me!|-1||0||750|1|9|9|0|0|||436|437|||||||||||||||||||||
|852|1000 Credits|1|622|The coffers are empty. I need more Credits right now!|-1||0||500|1|9|9|0|0|||436|437|||||||||||||||||||||
|901|Ancient Exosuit|0|481|A very fine powered suit. Crafted by the long dead master artisans of the Galactic Republic.|-1||4||4|1|10|999|0|0|||479|480|1||||||||||||||||||||
|902|Cortical Simulator|0|482|An ancient cybernetic device easily applied behind the ear. It stimulates the learning centers of the brain.|-1||4||3|1|10|999|0|0|||479|480|1||||||||||||||||||||
|903|Protocol Android|0|483|A faithful and trusty companion that always has a word of advice and of calculation.|-1||4||2|1|10|999|0|0|||479|480|1||||||||||||||||||||
|904|Pheromone Device|0|484|A small tool, the shape of a vial of perfume. Careful use can influence the attitude of the people around its operator.|-1||4||4|1|10|999|0|0|||479|480|1||||||||||||||||||||
|905|Holographic Freud|0|485|Who is that guys calling himself Sigmund appearing in the palm of my hand? Source of wisdom and willpower.|-1||4||1|1|10|999|0|0|||479|480|1||||||||||||||||||||
|906|Dopaminator|0|486|A small metal patch that can give a Dopamine boost to its wearer.|-1||4||3|1|10|999|0|0|||479|480|1||||||||||||||||||||
|911|Energy Lance|0|487|An ancient weapon that can pierce any known armour. Ever seen a tank cut in two?|-1||5||4|1|10|999|0|0|||479|480|||||||||||||||||||||
|912|Gravimetric Shield|0|488|It warps gravity. This advanced ancient device protects a bubble from incoming fire.|-1||5||2|1|10|999|0|0|||479|480|||||||||||||||||||||
|913|Wasp Hive|0|489|Tiny robotic wasps will launch in the direction they are faced. Infantry beware!|-1||5||4|1|10|999|0|0|||479|480|||||||||||||||||||||
|914|Warrior Android|0|490|Mean lean android that fights the enemies of its controller with high precision rapid rifle fire.|-1||5||4|1|10|999|0|0|||479|480|||||||||||||||||||||
|915|Antigrav Lifter|0|491|A gravitybending device that lifts up to 10 tons. Ideal for overcoming terrain difficulties.|-1||5||4|1|10|999|0|0|||479|480|||||||||||||||||||||
|916|Assassin Android|0|492|A very advanced droid from the Galactic Republic era. Its speed and blades are without par.|-1||5||3|1|10|999|0|0|||479|480|||||||||||||||||||||
|921|Gravitonic Collector|0|493|Lost and incomprehensible technology allows this Asset to transform gravity to energy.|-1||2||2|1|10|999|0|0|||479|480|||||||||||||||||||||
|922|Cloning Facility|0|494|Fully automated ancient Asset that will allow you to increase your population quicker.|-1||2||1|1|10|999|0|0|||479|480|||||||||||||||||||||
|923|Automated Clinic|0|495|This emergency clinic from an era long gong has many robotic arms that perform better than many doctor.|-1||2||3|1|10|999|0|0|||479|480|||||||||||||||||||||
|924|Automated Factory|0|496|A miniature version of the fabled Automated Factories of yore.|-1||2||2|1|10|999|0|0|||479|480|||||||||||||||||||||
|925|Subterran Sensor|0|497|This ancient Asset and accompanying handheld sensors will help you make Archaeological Finds.|-1||2||3|1|10|999|0|0|||479|480|||||||||||||||||||||
|926|Subvocalizer Tower|0|498|A nasty piece of ancient technology. This asset uses specific waves to calm down your populace.|-1||2||2|1|10|999|0|0|||479|480|||||||||||||||||||||
|824|Auxilliary Chemical|1|440|An rare auxiliary team specialized in launching chemical bombs.|-1|REGKEY.techLevel>=4|5||150|1|9|9|0|0|||436|437|||||||||||||||||||||
|825|Spotter Drones|1|441|A specialist team that is using long distance drones specifically to aid artillery target better.|-1|REGKEY.techLevel>=4|5||300|1|9|9|0|0|||436|437|||||||||||||||||||||
|826|Ear Lock|2|442|A modified ancient device that is placed behind the ear to monitor the thoughts and ensure Leader loyalty.|-1|REGKEY.techLevel>=4|4||100|1|9|9|0|0|||436|437|1||||||||||||||||||||
|827|Personal Guard|2|443|A personal guard protects a Leader from bodily harm. It is a great honor to have such a guard.|-1|REGKEY.techLevel>=4|4||500|1|9|9|0|0|||436|437|1||||||||||||||||||||
|828|Exotic Combat Drug|2|444|We managed to obtain a one-time-use dose of Shiksai. It will provide an immediate boost in attack value to all our troops!|-1|REGKEY.techLevel>=4|0||100|1|9|9|0|0|||436|437|||||||||||||||||||||
|829|High-Tech Vault|3|445|A treasure trove of rare metals and machinery.|-1|REGKEY.techLevel>=4|2||150|1|9|9|0|0|||436|437|||||||||||||||||||||
|830|Scientific Outpost|2|446|Maybe you think there are just dull rocks out there... But we can learn a lot by studying the geology and climate of remote places.|-1|REGKEY.techLevel>=4|2||300|1|9|9|0|0|||436|437|||||||||||||||||||||
|831|Security Outpost|1|447|Not every enemy of the state operates from our Cities... Having some outposts helps us survey our perimeters.|-1|REGKEY.techLevel>=4|2||500|1|9|9|0|0|||436|437|||||||||||||||||||||
|832|Rebellion|0|448|A dark plot we never knew existed has come to fruition. Rebels are rising up against us! Fate Points +6|-1|REGKEY.techLevel>=4|0||300|1|9|9|0|0|||434|435|||||||||||||||||||||
|833|Mountaineer Team|1|449|The mountaineers can advice your troops how best to fight in the Mountains.|-1|REGKEY.cultureLevel>=4|5||150|1|9|9|0|0|||436|437|||||||||||||||||||||
|834|Sandline Rangers|1|450|These expert rangers will help lead your troops to victory in the sandy terrain of the deserts.|-1|REGKEY.cultureLevel>=4|5||300|1|9|9|0|0|||436|437|||||||||||||||||||||
|835|Personal Wealth|2|451|A large fortune allows a Leader to stop worrying and scheming for gain. |-1|REGKEY.cultureLevel>=4|4||30|1|9|9|0|0|||436|437|1||||||||||||||||||||
|836|Happy Family|2|452|What provides more happiness than a family in good health?|-1|REGKEY.cultureLevel>=4|4||500|1|9|9|0|0|||436|437|1||||||||||||||||||||
|837|Supreme Leader Day|1|453|Sometimes it is good to indulge and bask in the admiration of your populace.|-1|REGKEY.cultureLevel>=4|0||70|1|9|9|0|0|||436|437|||||||||||||||||||||
|838|Ancient Depot|2|454|A search of a hidden depot yields 3 random ancient Artifacts.|-1|REGKEY.cultureLevel>=4|0||150|1|9|9|0|0|||436|437|||||||||||||||||||||
|839|Viewpoint|2|455|Nothing beats an inspiring view. The landmarks, the horizon, the colors... Its just overwhelming.|-1|REGKEY.cultureLevel>=4|2||500|1|9|9|0|0|||436|437|||||||||||||||||||||
|840|Ecological Station|1|456|Science is nice, but allowing our populace and youth to learn in the field might be even better.|-1|REGKEY.cultureLevel>=4|2||300|1|9|9|0|0|||436|437|||||||||||||||||||||
|841|Disease!|0|457|A freak unidentified disease causes mass casualties, but burns out almost immediately after. Gain 9 FP.|-1|REGKEY.cultureLevel>=4|0||300|1|9|9|0|0|||434|435|||||||||||||||||||||
|1001|Double Shifts|5|458|Workers of our <NATION>! It is time to give even more to your motherland!|-1||0||100|242|11|999|0|0|||438|439|||||||||||||||||||||
|1002|All for the Front|5|459|More casualties are to be expected and we need you to accept the sacrifice...|-1||0||100|202|11|999|0|0|||438|439|||||||||||||||||||||
|1003|Breakthrough Now!|5|460|Sometimes it does not require time, but inspiration to make a new Tech discovery|-1||0||100|325|11|999|0|0|||438|439|||||||||||||||||||||
|1004|Political Aid Truck|5|461|Your political forces have chosen the troops their Aid Truck is embedded with to receive special extras.|-1||5||100|101|11|999|0|0|||438|439|||||||||||||||||||||
|1005|Political Lieutenant|5|462|This Lieutenant might be a nuisance but as long as things are going good he is increasing their do and dare.|-1||5||100|304|11|999|0|0|||438|439|||||||||||||||||||||
|1006|Militant Propagandist|5|463|This fellow is a common thug, but he knows how to preach hate against the enemy.|-1||5||100|341|11|999|0|0|||438|439|||||||||||||||||||||
|1007|Crackdown on Unrest|5|464|This Unrest is intolerable. Send in assassins to kill the leaders of the unrest mongers.|-1||2||100|123|11|999|0|0|||438|439|||||||||||||||||||||
|1008|Local Referendum|5|465|To trust the people is to let them vote. You will organize a referendum on your governorship.|-1||4||100|103|11|999|0|0|||438|439|||||||||||||||||||||
|1009|Worker Privileges|5|466|Why not give our Workers some little privileges? Like better housing, better food...|-1||2||100|142|11|999|0|0|||438|439|||||||||||||||||||||
|1010|Zoo Project|5|467|A place to relax and learn for the whole family. It will provide education opportunities and give a sense of pride.|-1||2||100|322|11|999|0|0|||438|439|||||||||||||||||||||
|1011|Commercial Project|5|468|Our populace likes to feel prosperity is growing. Nothing gives that feel like some nice store fronts and buisy markets.|-1||2||100|221|11|999|0|0|||438|439|||||||||||||||||||||
|1012|Militia Project|5|469|Our militia will appreciate a proper barrack and a Zone HQ of their own.|-1||2||100|301|11|999|0|0|||438|439|||||||||||||||||||||
|1013|Insult|5|470|Politicians insult this foreign power on one of their party meetings.|-1||1||100|303|11|999|0|0|||438|439|||||||||||||||||||||
|1014|Civil Delegation|5|471|Politicians decide to visit this foreign power to learn from them and to pay their respects.|-1||1||100|105|11|999|0|0|||438|439|||||||||||||||||||||
|1015|Plea of Friendship|5|472|We'll send our most gifted and spirited envoy. He'll tell them how much we care for our joint future.|-1||1||100|141|11|999|0|0|||438|439|||||||||||||||||||||
|1016|Investor Backing|5|473|Private capital sees opportunities in this Zone. An influx of Private Credits is to be expected. |-1||2||100|223|11|999|0|0|||438|439|||||||||||||||||||||
|1017|Popular Rally|5|474|Let the people march, chant and sing for their ideals.|-1||2||100|343|11|999|0|0|||438|439|||||||||||||||||||||
|1018|Cooptation|5|475|To be in the inner circle of the powerful players brings great benefits.|-1||4||100|225|11|999|0|0|||438|439|||||||||||||||||||||
|1019|Sacred Oath|5|476|Swear unconditional obedience to the Supreme Leader.|-1||4||100|204|11|999|0|0|||438|439|||||||||||||||||||||
|1020|Hero of the Nation|5|477|A medal, a ceremony... The Leader is chosen by one of your Factions as the National Hero.|-1||4||100|122|11|999|0|0|||438|439|1||||||||||||||||||||
|1021|Administrative Review|5|478|A bureaucratic committee will be formed to review this specific Leader. |-1||4||100|244|11|999|0|0|||438|439|||||||||||||||||||||
|651|Prospecting Push I|35|523|Using people outside the Prospectors office we can make much more triangulations.|1||2||20|50|7|13|||||501|502|||||||||||||||||||||
|510|Give 500 to Populace|2|503|Let's make an effort to show the people we mean well. 500 Credits has to make an impression.|31|REGIMEFEAT.222>0|2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|511|Give 2000 to Populace|2|504|Let's make an effort to show the people we mean well. 2000 Credits should really make an impression.|31|REGIMEFEAT.222>0|2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|512|Volunteer Drive|20|505|We need Recruits right now! Let's send out the press gangs!|31||2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|513|Miltia Enthusiasm|40|506|The Militancy in this Zone needs to go up again. Let's boost the local Militia.|31|REGIMEFEAT.201>0|2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|514|Patriotic Collection|25|507|Everybody! everybody! give a donation! for your country needs you...|31|REGIMEFEAT.143>0|2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|515|Cabinet Retreat|20|508|Nothing better to socialize and brainstorm together than some days in the countryside.|31|REGIMEFEAT.102>0|0||10|30|4|5|0|0|||499|500|||||||||||||||||||||
|516|Governor Convention|20|509|Governors love to be assembled and give speeches of their local policies to eachother.|31|REGIMEFEAT.241>0|0||10|30|4|5|0|0|||499|500|||||||||||||||||||||
|517|Wargames|30|510|A social get-together for all Commanders, but also an opportunity to learn.|31||0||10|30|4|5|0|0|||499|500|||||||||||||||||||||
|518|Grand Convention|40|511|A rare thing. A Grand Convention assembles all your Leaders together for rallies and workshops.|31|REGIMEFEAT.142>0|0||10|30|4|5|0|0|||499|500|||||||||||||||||||||
|519|Bureaucratic Push|10|512|We'll use all our clout to press our bureaucrats and scientists to deliver.|31|REGIMEFEAT.241>0|0||10|30|4|10|0|0|||499|500|||||||||||||||||||||
|520|Efficiency Drive|25|513|We think there is surplus equipment and funds in our bureaucracy.|31|REGIMEFEAT.202>0|0||10|30|4|10|0|0|||499|500|||||||||||||||||||||
|521|Mission Impossible|50|514|If we really focus... Really focus our political power we could perform a miracle.|31||0||10|30|4|10|0|0|||499|500|||||||||||||||||||||
|522|Medal of Merit|15|515|A personal visit by you to welcome the Leader in the Order of Merit.|31||4||10|30|8|5|0|32|||499|500|1||||||||||||||||||||
|523|Commercial Gift|5|516|Spend 300 Credits to organize the privatisation of a state enterprise gift to Leader.|31|REGIMEFEAT.223>0|4||10|30|8|5|0|0|||499|500|||||||||||||||||||||
|524|Estate Gift|15|517|Spent some political effort to give a national estate as a gift to the Leader.|31|REGIMEFEAT.223>0|4||10|30|8|5|0|0|||499|500|||||||||||||||||||||
|544|Bonus|3|756|Spend 100 Credits and allocate it to the Leader as a bonus payment.|31||4||10|30|8|5||32|||499|500|||||||||||||||||||||
|545|Official Gift|4|757|Spend 200 Credits for a gift, reception and acclamation for the Leader.|31||4||10|30|8|5|||||499|500|||||||||||||||||||||
|549|Zero Retirement|10|739|Spend NO Credits and have 50% chance to retire Seniority-10 Leader.|31||4||7|30|8|5|||||499|500|||||||||||||||||||||
|546|Bronze Retirement|5|736|Spend 250 Credits and have 50% chance to retire Seniority-30 Leader.|31||4||10|30|8|5|||||499|500|||||||||||||||||||||
|547|Silver Retirement|10|737|Spend 500 Credits and have 50% chance to retire Seniority-50 Leader.|31||4||7|30|8|5|||||499|500|||||||||||||||||||||
|548|Golden Retirement|20|738|Spend 1000 Credits and have 50% chance to retire Seniority-70 Leader.|31||4||4|30|8|5|||||499|500|||||||||||||||||||||
|525|Supress Unrest|10|541|Send in the Army and the Militia to wipe the Unrest of the streets.|14|REGIMEFEAT.122>0|REGIMEFEAT.203>0|2||10|30|7|11|0|0|||539|540|||||||||||||||||||||
|526|Razzia|20|542|Curfews, martial law, random arrests... Whatever it takes to instill Fear!|14|REGIMEFEAT.126>0|2||10|30|7|11|0|0|||539|540|||||||||||||||||||||
|527|Forced Relocation|15|543|Round up barbaric Free Folk from the countryside and force them to relocate to the City.|14|REGIMEFEAT.121>0|REGIMEFEAT.243>0|2||10|30|7|11|0|0|||539|540|||||||||||||||||||||
|528|Pillage|10|544|Send in the Army and Militia to take all Food and Credits we can find.|14|REGIMEFEAT.122>0|2||10|30|7|11|0|0|||539|540|||||||||||||||||||||
|529|Raze|20|545|Send in the Army and Militia to destroy and pillage as much as possible.|14|REGIMEFEAT.125>0|2||10|30|7|11|0|0|||539|540|||||||||||||||||||||
|530|Expel Population|10|546|Send in the Army and Militia to expell unloyal subjects.|14||2||10|30|7|11|0|0|||539|540|||||||||||||||||||||
|531|Give 500 to Militia|2|518|Make a monetary gift of 500 Credits to the Militia in this Zone.|31||2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|532|Assassinate Leader|20|401|We know were everybody sleeps at night. And we know our assasins knives are sharpened.|18|REGIMEFEAT.122>0|4||10|30|8|12|0|0|||399|400|||||||||||||||||||||
|533|Threaten Leader|10|402|Subjects need to know their place in the hierarchy! And if not...|18|REGIMEFEAT.202>0|4||10|30|8|12|0|0|||399|400|||||||||||||||||||||
|534|Gift to Faction|10|403|Make a monetary gift of 1000 Credits to the Faction the chosen Leader belongs to.|18|REGIMEFEAT.221>0|4||10|30|8|12|0|0|||399|400|||||||||||||||||||||
|535|Investigate Leader|10|404|Try to recoup as much stolen Credits from a corrupt Leader as possible.|18||4||10|30|8|12|0|0|||399|400|||||||||||||||||||||
|536|Emergency Tax|10|519|There is no time to explain. We need funds right now!|31|REGIMEFEAT.201>0|2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|537|Draft Workers|5|520|There is no time to explain. We need more Workers right now.|31|REGIMEFEAT.242>0|2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|538|Draft Colonists|10|521|There is no time to explain. We need more Colonists right now.|31|REGIMEFEAT.243>0|2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|539|Draft Recruits|20|522|There is no time to explain. We need more Recruits right now.|31|REGIMEFEAT.203>0|2||10|30|7|10|0|0|||499|500|||||||||||||||||||||
|540|Prospecting Push II|40|523|Using people outside the Prospectors office we can make much more triangulations.|1|REGIMEFEAT.103>0|2||10|30|7|13|0|0|||501|502|||||||||||||||||||||
|541|Archaeology Effort|10|524|There is always more leads to investigate than manpower. Lets change that around for a change.|1||2||10|30|7|13|0|0|||501|502|||||||||||||||||||||
|542|Private Investment|20|525|With a relatively small effort we can persuade some of our capitalists to invest in this Zone. |1|REGIMEFEAT.221>0|2||10|30|7|13|0|0|||501|502|||||||||||||||||||||
|543|Attract Free Folk|40|526|A campaign to sell the great life in our Cities. We'll convince those Free Folk to come.|1|REGIMEFEAT.242>0|2||10|30|7|13|0|0|||501|502|||||||||||||||||||||
|581|Peripheral Mining|20|786|Extend one of the mines into lower grade deposit areas. Gain reserves, lose efficiency.|1||2||20|50|7|13|||||501|502|||||||||||||||||||||
|930|Frontline Inspirator|1|788|Commander is hailed by the troops whenever he/she is close.|-1||4||300|1|9|9|||||436|437|||||||||||||||||||||
|931|Strain Solver|2|789|There is always a way to better manage a Zone!|-1||4||40|1|9|9|||||436|437|||||||||||||||||||||
|932|Cultural Integrator|1|790|To make them become like us, we have to become a little bit like them...|-1||4||300|1|9|9|||||436|437|||||||||||||||||||||
|933|Former Gladiator|1|791|Old Gladiators-in-arms will flock to help. That's how gladiators are. Loyalty is forever.|-1||4||100|1|9|9|||||436|437|||||||||||||||||||||
|934|Child of the Stars|3|792|It is rumoured this Leader was actualy brought up by parents that arrived recently by spaceship.|-1||4||80|1|9|9|||||436|437|||||||||||||||||||||
|945|GR Phantasma|1|803|We found some intact GR Recon Buggies. Excellent recon and hide!|-1||2||300|1|9|9|||||436|437|||||||||||||||||||||
|946|GR Vortex|1|804|We found some very fast GR Medium Tanks. The Vortex brings credit to its name.|-1||2||300|1|9|9|||||436|437|||||||||||||||||||||
|947|GR Thunderous|2|805|We found a rare battery of GR Artillery. Use it to judge it. It is rumoured to be very lethal.|-1||2||100|1|9|9|||||436|437|||||||||||||||||||||
|948|GR Gargantuous|3|806|We found the most heavy of GR Tanks. It does not get any heavier than this...|-1||2||40|1|9|9|||||436|437|||||||||||||||||||||
|935|GR Optics|3|793|New methods to construct sights will increase accuracy of your weapons.|-1|TECH.401<100|0|Increases the kill chance of your equipment with +33%.|80|1|9|9|||||436|437|||||||||||||||||||||
|936|GR Coating|3|794|Ingenious method to layer base materials to increase hardness of the tip of projectiles.|-1|TECH.402<100|0|Increases conventional weapon effectiveness against hard targets with +33%.|40|1|9|9|||||436|437|||||||||||||||||||||
|937|GR Supercharger|3|795|Get more bang out of your energy discharges.|-1|TECH.403<100; REGKEY.techLevel>6;|0|Laser/Beam weapons get +25% more firepower.|40|1|9|9|||||436|437|||||||||||||||||||||
|938|GR Shell Camera|2|796|It might be just a few seconds of imagery before impact, but it is worth it...|-1|TECH.404<100|0|Gives 1 Recon Point per ranged attack.|90|1|9|9|||||436|437|||||||||||||||||||||
|939|GR Infiltration Methods|2|797|The GR Manual reveals many ghost-like ancient methods to sneak past the enemy.|-1|TECH.405<100|0|Specialist coded GR instructions work well and give your troops more chances to break through to the enemy’s rear during combat.|100|1|9|9|||||436|437|||||||||||||||||||||
|940|GR Combat Simulator|2|798|Finally away to get some combat experience without actually biting a bullet.|-1|TECH.406<100|0|Allows XP to go up +10 points higher, without needing to get in actual combat.|90|1|9|9|||||436|437|||||||||||||||||||||
|941|GR Combat Drugs|3|799|Better than coffee or vodka. And no hangovers. GR medicinal knowledge is truly the best!|-1|TECH.407<100|0|Allows to gain extra Readiness at start of combat if Readiness is low.|35|1|9|9|||||436|437|||||||||||||||||||||
|942|GR Ringmail|3|800|A simple technique to reinforce low tech armour. Ingenious and easy to implement.|-1|TECH.408<100|0|Lower Tech armour will be improved with this Tech. Envirosuit +75%, Padded +50%, Combat +25%.|90|1|9|9|||||436|437|||||||||||||||||||||
|943|GR Mass Driver|4|801|The Mass Driver Gun is able to tackle targets far above its paygrade.|-1|TECH.409<100; REGKEY.techLevel>5;|0|New super-HV (high velocity) 100mm conventional gun that actually counts as 300 mm in caliber calculations.|25|1|9|9|||||436|437|||||||||||||||||||||
|944|GR Chaingun|4|802|Revolving barrels increase the fire rate potential. It can literally dig through armour.|-1|TECH.410<100|0|All conventional/flechette MGs get +50% against hard targets.|80|1|9|9|||||436|437|||||||||||||||||||||
|949|Blame it on the Vodka|0|808|One of your happiest and most intelligent Leaders becomes alcoholic. Gain 1 FP.|||4||300|1|9|9|||||434|435|||||||||||||||||||||
|950|You're a Liar!|0|809|Unbased accusations lead the Populace to believe you are a liar. Gain 3 FP.|||0||300|1|9|9|||||434|435|||||||||||||||||||||
|951|Lab Leak|0|810|A virus reducing fertility escapes from a laboratory. Gain 3 FP.|||0||200|1|9|9|||||434|435|||||||||||||||||||||
|952|Prestige Damage|0|811|Lack of eloquance during an important meeting causes shame and prestige damage. Gain 4 FP.|||0||200|1|9|9|||||434|435|||||||||||||||||||||
|953|Pacifist Scientists|0|812|Radical scientists protest for disarmament and cause Populace to dislike Mind. Gain 2 FP.|||0||150|1|9|9|||||434|435|||||||||||||||||||||
|954|Head Injury|0|813|One of your more charismatic Leaders suffers a terrible head injury. Gain 1 FP.|||4||125|1|9|9|||||434|435|||||||||||||||||||||
|561|Improvised IP|25|815|Mobilize the artisans to produce IP in their workshops. Req 500 Cr, not all might be spent.|1|REGIMEFEAT.222>0|2||20|50|7|13|||||501|502|||||||||||||||||||||
|301|Incr Sales Tax|3|549|Increase Sales Tax with +25%|31||0||30|60|4|3|0||||547|548|||||||||||||||||||||
|302|Incr Income Tax|3|550|Increase Income Tax with +10%|31||0||30|60|4|3|0||||547|548|||||||||||||||||||||
|303|Decr Sales Tax|5|551|Decrease Sales Tax with -25%|31|che(249,2,301)>0|0||10|60|4|3|0||||547|548|||||||||||||||||||||
|304|Decr Income Tax|5|552|Decrease Income Tax with -10%|31|che(249,2,302)>0|0||10|60|4|3|0||||547|548|||||||||||||||||||||
|401|Import Tariff Incr|3|553|Increase Import Tariffs with +25% with a specific regime|31||1||15|60|5|4|0||||547|548|||||||||||||||||||||
|402|Import Tariff Decr|3|554|Decrease Import Tariffs with -25% with a specific regime|31|che(249,2,401)>0|1||5|60|5|4|0||||547|548|||||||||||||||||||||
|403|Export Tariff Incr|3|555|Increase Export Tariffs with +25% with a specific regime|31||1||15|60|5|4|0||||547|548|||||||||||||||||||||
|404|Export Tariff Decr|3|556|Decrease Export Tariffs with -25% with a specific regime|31|che(249,2,403)>0|1||5|60|5|4|0||||547|548|||||||||||||||||||||
|501|Recruit Civilian|6-((3*GAMEKEY.characterRecruitmentBonus)/100)|557|Recruit a leader from one of the communities within your borders|31|REGIMEFEAT.101>0|0||10|40|4|5|0||||547|548|||||||||||||||||||||
|502|Recruit Military|8-((4*GAMEKEY.characterRecruitmentBonus)/100)|558|Recruit a commander from one of the units serving you|31||0||10|40|4|5|0|32|||547|548|||||||||||||||||||||
|503|Recruit Special Ops|10-((5*GAMEKEY.characterRecruitmentBonus)/100)|559|Recruit a character that has special ops experience|31|REGIMEFEAT.123>0|0||10|40|4|5|0||||547|548|||||||||||||||||||||
|504|Recruit Talent|20-((10*GAMEKEY.characterRecruitmentBonus)/100)|560|Recruit a young leader that is capable|31|REGIMEFEAT.141>0|0||10|100|4|5|0||||547|548|||||||||||||||||||||
|505|Recruit Senior|20-((10*GAMEKEY.characterRecruitmentBonus)/100)|561|Recruit an older leader with a loads of experience|31||0||10|100|4|5|0||||547|548|||||||||||||||||||||
|551|Recruit Junior|6-((3*GAMEKEY.characterRecruitmentBonus)/100)|557|Recruit a junior Leader. Young, but relatively unskilled.|31||0||20|15|4|5|0|32|||547|548|||||||||||||||||||||
|552|Recruit Merc|40-((10*GAMEKEY.characterRecruitmentBonus)/100)|558|Recruit a Mercenary. Probably at least moderately skilled in the art of war.|31||0||20|15|4|5|0|32|||547|548|||||||||||||||||||||
|562|Increase Rank|10|825|Increase Leader's Rank and pay 5 times more salary.|31||4||30|40|8|5|0||||547|548|||||||||||||||||||||
|563|Decrease Rank|4|826|Decrease Leader's Rank and pay 5 times less salary.|31||4||15|40|8|5|0||||547|548|||||||||||||||||||||
|100101|Syndicate Governor|15|529|Offer the Godfather the enormous honor to nominate a Governor for the selected Zone.|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|2||0|0|7|0|0|32|1|1|527|528|||||||||||||||||||||
|100102|Meet Godfather|5|530|Organize a low key meeting with the Godfather. A drink, a cigar, a good talk...|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|0||0|0|4|0|0|32|1|1|527|528|||||||||||||||||||||
|100103|Co-Existence|10|531|Why not reduce the violence a bit? Propose a Co-Existence Deal to the Godfather.|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|0||0|0|4|0|0|32|1|1|527|528|||||||||||||||||||||
|100104|Demand a Share|10|532|Why should the Syndicate keep all the profits? Propose a Kickback Deal to the Godfather.|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|0||0|0|4|0|0|32|1|1|527|528|||||||||||||||||||||
|100105|Crime Raid|5|533|Send in the Troops to root out those pesky Criminals in the Zone. Give them a bloody nose...|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|2||0|0|7|0|0|32|1|1|527|528|||||||||||||||||||||
|100106|Crackdown on Crime|10|534|Launch a truly savage military operation to weed out all criminal elements in the selected Zone.|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|2||0|0|7|0|0|32|1|1|527|528|||||||||||||||||||||
|100107|Consiglieri|0|535|An old Syndicate advisor that has seen most things that are to be seen. On top of that: clever as a bat.|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|4||0|0|8|999|0|32|0|0|527|528|||||||||||||||||||||
|100108|Wiseguy|0|536|Recruit a Wise-Guy from the Crime Syndicate. Tough rogues, streetwise, but probably slightly corrupt.|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|0||0|0|4|999|0|32|0|0|527|528|||||||||||||||||||||
|100109|Dirty Dozen|0|537|A band of hardened street fighters. They'll do especially well supporting troops in urban combat.|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|5||0|0|9|999|0|32|0|0|527|528|||||||||||||||||||||
|100110|Hitman|0|538|A mean and experienced Wiseguy that can tag along your troops to act as an assasin or a sniper.|31|REGKEY.syndicate_relation>0; REGKEY.syndicate_totalCrimeLevel>0;|5||0|0|9|999|0|32|0|0|527|528|||||||||||||||||||||
|100201|Meet CEO|10|631|Schedule a meeting with the CEO of the Corporation.|1|REGKEY.corp_active>0|0||0|0|4|0|0|32|1|1|629|630|||||||||||||||||||||
|100202|Board Member|5|632|A Leader will be welcomed to the board of directors of the Corporation.|1|REGKEY.corp_active>0|4||0|0|8|999|0|32|0|0|629|630|1||||||||||||||||||||
|100203|Antitrust Ops|10|633|Reduce the amount of Control of the Corporation in the Zone.|1|REGKEY.corp_active>0|2||0|0|7|0|0|32|1|1|629|630|||||||||||||||||||||
|100204|Corp. Scientist|20|634|Recruit an experienced Scientist from the Corporate workforce.|1|REGKEY.corp_active>0|0||0|0|4|999|0|32|0|0|629|630|||||||||||||||||||||
|100205|Corp. Tech|50|635|The Corporation finishes research on a Tech and shares it with you.|1|REGKEY.corp_active>0|0||0|0|4|999|0|32|0|0|629|630|||||||||||||||||||||
|100206|Corp. Discovery|20|636|The Corporation discovers a new Tech and shares it with you.|1|REGKEY.corp_active>0|0||0|0|4|999|0|32|0|0|629|630|||||||||||||||||||||
|100207|Corp. Manager|10|637|Recruit an experienced Manager from the Corporate workforce.|1|REGKEY.corp_active>0|0||0|0|4|999|0|32|0|0|629|630|||||||||||||||||||||
|100208|Prospect Ops|10|638|Corporation makes a major prospecting effort in the Zone.|1|REGKEY.corp_active>0|2||0|0|7|999|0|32|0|0|629|630|||||||||||||||||||||
|100209|Anti-Crime Ops|5|639|Corporation sends in paramilitary forces to reduce Crime in the Zone.|1|REGKEY.corp_active>0|2||0|0|7|999|0|32|0|0|629|630|||||||||||||||||||||
|100210|Crowd Control|10|640|Corporation sends in paramilitary forces to break up Unrest in the Zone.|1|REGKEY.corp_active>0|2||0|0|7|999|0|32|0|0|629|630|||||||||||||||||||||
|100301|Shadow Sect|10|645|Discuss our policy regarding this Cult.|1|REGKEY.cult1_follower>0|0||||4|0||32|1|1|643|644|||||||||||||||||||||
|100302|Anima Circle|10|646|Discuss our policy regarding this Cult.|1|REGKEY.cult2_follower>0|0||||4|||32|1|1|643|644|||||||||||||||||||||
|100303|Church of Syndic|10|647|Discuss our policy regarding this Cult.|1|REGKEY.cult3_follower>0|0||||4|||32|1|1|643|644|||||||||||||||||||||
|100304|Apocrypha Order|10|648|Discuss our policy regarding this Cult.|1|REGKEY.cult4_follower>0|0||||4|||32|1|1|643|644|||||||||||||||||||||
|100305|Eternity Movement|10|649|Discuss our policy regarding this Cult.|1|REGKEY.cult5_follower>0|0||||4|||32|1|1|643|644|||||||||||||||||||||
|100306|Mystic Temple|10|650|Discuss our policy regarding this Cult.|1|REGKEY.cult6_follower>0|0||||4|||32|1|1|643|644|||||||||||||||||||||
|100307|Shadow Priest|0|651|Assign to Regular or Militia Unit. Avoids retreats.|14|REGKEY.cult1_follower>0; REGKEY.cult1_relation>33;|5||||9|999||32|9||643|644|||||||||||||||||||||
|100308|Anima Priest|0|652|Assign to Regular or Militia Unit. Increase XP through combat.|14|REGKEY.cult2_follower>0; REGKEY.cult2_relation>33;|5||||9|999||32|9||643|644|||||||||||||||||||||
|100309|Syndic Priest|0|653|Assign to Regular or Militia Unit. Increase defensive power.|14|REGKEY.cult3_follower>0; REGKEY.cult3_relation>33;|5||||9|999||32|9||643|644|||||||||||||||||||||
|100310|Apocrypha Paladin|0|654|Assign to Regular or Militia Unit. Increase offensive power.|14|REGKEY.cult4_follower>0; REGKEY.cult4_relation>33;|5||||9|999||32|9||643|644|||||||||||||||||||||
|100311|Eternity Guru|0|655|Assign to Regular or Militia Unit. Keeps morale up.|14|REGKEY.cult5_follower>0; REGKEY.cult5_relation>33;|5||||9|999||32|9||643|644|||||||||||||||||||||
|100312|Mystic Priest|0|656|Assign to Regular or Militia Unit. Keeps readiness up.|14|REGKEY.cult6_follower>0; REGKEY.cult6_relation>33;|5||||9|999||32|9||643|644|||||||||||||||||||||
|1201|Courtesan|5|625|A legendary courtesan guaranteed to improve your relations for you...|31||4||0|0|8|999|0|32|0|0|499|500|||||||||||||||||||||
|100401|Information Contract|8|762|Schedule a meeting to sign an information exchange contract with a Maritime Trading House.|1|chk(249,42,-1,REGIMEID,2)>0|2||100|20|13|14||32|||763|764|||||||||||||||||||||
|100402|Transport Contract|12|765|Schedule meeting with a MTH  to sign a contract for transport or invasion.|1|chk(249,42,-1,REGIMEID,2)>0|2||125|40|13|14||32|||763|764|||||||||||||||||||||
|100403|Contact MTH|5|766|Try to enter in communication with a Maritime Trade House.|1|chk(249,42,-1,REGIMEID,8)>0|2||50|20|13|14||32|||763|764|||||||||||||||||||||
|100404|Makeshift Port|16|767|Ask an MTH to construct a makeshift port on a coastal Hex that has naval Logistics.|1|chk(249,42,-1,REGIMEID,2)>0|2|A makeshift harbour is an improvised harbour. Could be some docks, a pier or something like a mini-mulberry. It allows the ships to get close to shore and they provide some MTH workers and machinery/tools there to help unload the ships. Without a harbour you'll lose at least 75% of the Naval Logistical Points. When you play this Stratagem the MTH will propose to build a Makeshift Port on any Coastal Hex connecting to the target Zone that has incoming/outgoing Naval Logistical Points, but that does not have a Port.|75|30|13|14||32|||763|764|||||||||||||||||||||
|100405|Policy Meeting|20|768|As a shareholder you can try to influence the MTH.|1|chk(249,42,-1,REGIMEID,4)>0|2||50|50|13|14|||||763|764|||||||||||||||||||||
|100406|Shipyarding|6|769|Build more ships under supervision of, and for the MTH. Cost: 2000 Credits.|1|chk(249,42,-1,REGIMEID,2)>0|2||33|60|13|14|||||763|764|||||||||||||||||||||
|100407|Intel Support|10|770|Help the current MTH leadership stay in power.|1|chk(249,42,-1,REGIMEID,2)>0|2||33|70|13|14|||||763|764|||||||||||||||||||||
|100408|Sell A Share|4|771|Auction off one of your shares in an MTH.|1|chk(249,42,-1,REGIMEID,4)>0|2||33|35|13|14|||||763|764|||||||||||||||||||||
|100409|Demand Auction|36|772|Demand an MTH to sell off some extra shares.|1|chk(249,42,-1,REGIMEID,2)>0|2||33|50|13|14|||||763|764|||||||||||||||||||||
|100410|Startup MTH|24|773|Finance the startup of a new MTH in a Sea that hasn't any yet. Costs 500 Credits.|1|chk(249,42,-1,REGIMEID,9)>0|2||10|50|13|14|||||763|764|||||||||||||||||||||
|100411|Recon Contract|16|762|Schedule a meeting to sign a recon contract with a Maritime Trading House.|1|chk(249,42,-1,REGIMEID,2)>0|2||75|20|13|14|||||763|764|||||||||||||||||||||
|100412|Change of Heart|1|777|MTH sees you in a sudden new and beautiful light.|-1|chk(249,42,-1,REGIMEID,2)>0|2||200|1|9|9|||||436|437|||||||||||||||||||||
|100413|Stock Emission|2|776|MTH decides to issue more stock. Oh.. the Dilution...|-1|chk(249,42,-1,REGIMEID,2)>0|2||200|1|9|9|||||436|437|||||||||||||||||||||
|100414|Maritime Breakup|3|775|Sometimes Captains part ways. This is such a moment. A new MTH will be born!|-1|chk(249,42,-1,REGIMEID,2)>0|2||100|1|9|9|||||436|437|||||||||||||||||||||
|100415|Resource Rumours|6|778|Talk and bribe MTH staff to learn information on a Zone. Costs 100 Credits.|18|chk(249,42,-1,REGIMEID,2)>0|2||90|20|3|2|||||763|764|||||||||||||||||||||

