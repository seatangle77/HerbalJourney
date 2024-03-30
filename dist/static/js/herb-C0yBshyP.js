import{_ as b}from"./plugin-vueexport-helper-BMQQWPAP.js";import{o,c as d,a as e,T as i,S as n,F as g,a7 as f,av as P,aw as S,ah as l,M as y,O as h,U as u,as as $}from"./@vue-1w769d10.js";import{i as H}from"./element-plus-31Y6-Jnk.js";import"./lodash-es-WEemOz_S.js";import"./@vueuse-CwK-ZWOg.js";import"./@element-plus-BvmR4Vcl.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Ct2Knyoi.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-CtcGg-6p.js";const I={name:"HerbDetails",props:{herb:{type:Object,default:()=>({})}}},t=c=>(P("data-v-e6adfebd"),c=c(),S(),c),T=t(()=>e("strong",null,"Scientific Name:",-1)),D=t(()=>e("strong",null,"别名：",-1)),E=t(()=>e("strong",null,"Family:",-1)),x=t(()=>e("strong",null,"Habitat:",-1)),j=t(()=>e("strong",null,"Used Part:",-1)),G=t(()=>e("strong",null,"Main Components:",-1)),B=t(()=>e("h2",null,"Therapeutic Effects",-1)),L=t(()=>e("strong",null,"Usage and Dosage:",-1)),F=t(()=>e("strong",null,"Cautions:",-1)),R={class:"images"},W=["src"];function M(c,p,a,z,m,w){return o(),d("div",null,[e("h1",null,i(a.herb.herb)+" / "+i(a.herb.englishName),1),e("p",null,[T,n(" "+i(a.herb.details.scientificName.en),1)]),e("p",null,[D,n(" "+i(a.herb.details.alternativeNames.zh.join(", "))+" / "+i(a.herb.details.alternativeNames.en.join(", ")),1)]),e("p",null,[E,n(" "+i(a.herb.details.family.zh)+" / "+i(a.herb.details.family.en),1)]),e("p",null,[x,n(" "+i(a.herb.details.habitat.zh)+" / "+i(a.herb.details.habitat.en),1)]),e("p",null,[j,n(" "+i(a.herb.details.usedPart.zh)+" / "+i(a.herb.details.usedPart.en),1)]),e("p",null,[G,n(" "+i(a.herb.details.mainComponents.zh)+" / "+i(a.herb.details.mainComponents.en),1)]),e("div",null,[B,e("ul",null,[(o(!0),d(g,null,f(a.herb.details.therapeuticEffects,s=>(o(),d("li",{key:s.en},i(s.zh)+" / "+i(s.en),1))),128))])]),e("p",null,[L,n(" "+i(a.herb.details.usageAndDosage.zh)+" / "+i(a.herb.details.usageAndDosage.en),1)]),e("p",null,[F,n(" "+i(a.herb.details.cautions.zh)+" / "+i(a.herb.details.cautions.en),1)]),e("div",R,[(o(!0),d(g,null,f(a.herb.images,s=>(o(),d("img",{key:s,src:s.substring(7),alt:"Herb Image"},null,8,W))),128))])])}const U=b(I,[["render",M],["__scopeId","data-v-e6adfebd"]]),q="茯苓",V="Poria",J="poria",K={scientificName:{zh:"茯苓",en:"Poria cocos (Schw.) Wolf"},alternativeNames:{zh:["茯苓","白茯苓","土茯苓"],en:["Poria","Fu Ling","China Root","Tuckahoe","Indian Bread"]},family:{zh:"多孔菌科",en:"Polyporaceae"},habitat:{zh:"茯苓主要生长在平原和低山地区，特别是松树林中。中国的华东、华中和东北地区是其主要的生长地。",en:"Poria mushrooms grow primarily in the subtropical and temperate forests of China, on the roots of pine trees. They are also found in various regions across East Asia."},usedPart:{zh:"药用的主要部分为菌核，即茯苓体。在松树根部形成的白色或略带黄色的固体块，质地坚硬。",en:"The sclerotium, a mass of mycelium that absorbs nutrients from the host tree."},mainComponents:{zh:"主要成分包括多糖、三萜类、瓜氨酸及各种矿物质。",en:"Poria contains several bioactive compounds including polysaccharides, triterpenoids, pachymic acid, and various minerals."},therapeuticEffects:[{zh:"健脾利湿：对于脾虚所致的食欲不振、身体乏力有显著的改善作用。",en:"Diuretic and Dampness Resolving: It is traditionally used to promote urination and resolve dampness in the body, aiding conditions such as edema."},{zh:"利水渗湿：能够促进体内水分代谢，适用于治疗水肿、小便不畅等症状。",en:"Spleen Strengthening: Enhances digestion and alleviates symptoms of spleen deficiency like fatigue and loose stools."},{zh:"宁心安神：对于心悸、失眠、多梦等由心脾两虚引起的症状有很好的治疗效果。",en:"Calming the Mind: It is utilized to calm the mind and ease sleep disturbances, making it a common ingredient in formulas addressing insomnia and anxiety."}],usageAndDosage:{zh:"常用于煎汤、磨粉或提取物形式使用；剂量视形式而定，但在煎汤中通常为9到15克。",en:"Used in decoctions, powders, and extracts; the dosage varies depending on the form but typically ranges from 9 to 15 grams in decoctions."},cautions:{zh:"一般认为安全，但过量使用可能导致消化问题或由于其利尿性质而导致脱水。建议在使用前咨询医疗提供者，特别是对于孕妇或哺乳期妇女，以及脾胃虚寒的个体。",en:"Generally considered safe, but excessive use may lead to digestive issues or dehydration due to its diuretic properties. It is advised to consult a healthcare provider before use, especially for pregnant or breastfeeding women, and individuals with spleen and stomach coldness."}},O=["@asset('herbs/poria/Poria1.jpg')","@asset('herbs/poria/Poria2.jpg')","@asset('herbs/poria/Poria.png')"],Z={herb:q,englishName:V,key:J,details:K,images:O},Q="甘草",X="Licorice",Y="licorice",ee={scientificName:{zh:"甘草",en:"Glycyrrhiza uralensis Fisch."},alternativeNames:{zh:["甜根","国老","甜木"],en:["Licorice","Sweet Root"]},family:{zh:"豆科",en:"Fabaceae (Leguminosae)"},habitat:{zh:"甘草适应性强，能够在多种土壤条件下生长，但更喜欢沙质或砂质壤土，需要良好的排水条件和充足的阳光。它主要分布在中国的东北、西北以及华北等地区的平原和沙漠边缘地带。",en:"Licorice is native to the Mediterranean region, parts of Asia, including China, and parts of Europe. It grows in sub-tropical and warm temperate climates, preferring well-drained soils in sunny locations."},usedPart:{zh:"主要利用甘草的根和根茎，采挖后清洗干净，干燥后即可使用。",en:"The root is the primary part used for its medicinal properties."},mainComponents:{zh:"甘草含有甘草甜素（Glycyrrhizin）、甘草酸、黄酮类化合物、异黄酮、挥发油等多种有效成分。",en:"Glycyrrhizin (glycyrrhizic acid), flavonoids, coumarins, and asparagine."},therapeuticEffects:[{zh:"调和药性：甘草能够调和各种药物的性能，缓和药物的剧烈作用。",en:"Anti-inflammatory and Antiviral: Widely used for its anti-inflammatory properties, helpful in treating conditions like sore throat, arthritis, and for antiviral purposes."},{zh:"解毒：对于某些毒物有解毒作用，如食物中毒、药物中毒等。",en:"Adrenal Support: Licorice can support adrenal function, making it useful in addressing adrenal fatigue and stress."},{zh:"抗炎抗过敏：甘草具有抗炎和抗过敏的效果，用于治疗咽喉痛、皮肤病等。",en:"Digestive Health: It has a soothing effect on the gastrointestinal tract, helping to relieve heartburn, indigestion, and stomach ulcers."}],usageAndDosage:{zh:"甘草在中医配方中经常被用作调和剂，与多种药材配伍，以减少药物的副作用和增强药效。它与其他药材的配合使用可以广泛应用于消化系统、呼吸系统、免疫系统等多个系统的疾病治疗。",en:"Licorice can be used in various forms, including teas, extracts, tablets, and as a flavoring in foods. The recommended dosage varies depending on the form and use but should be limited to short-term usage due to potential side effects."},cautions:{zh:"长期过量使用甘草可能会导致钾流失，引起水肿、高血压等问题。心脏病和高血压患者应谨慎使用。孕妇和哺乳期妇女应避免使用。",en:"Excessive consumption of licorice or glycyrrhizin can lead to adverse effects like hypertension, low potassium levels, and fluid retention. It is advised to avoid high doses or long-term use, especially for individuals with high blood pressure, kidney disease, or pregnant women."}},ae=["path/to/image1.jpg","path/to/image2.jpg"],ie={herb:Q,englishName:X,key:Y,details:ee,images:ae},ne="当归",te="Angelica Sinensis",se="angelica",oe={scientificName:{zh:"当归",en:"ngelica sinensis (Oliv.) Diels"},alternativeNames:{zh:["女参","唐参","中国当归"],en:["Dong Quai","Chinese Angelica","Female Ginseng"]},family:{zh:"伞形科",en:"Apiaceae (Umbelliferae)"},habitat:{zh:"当归喜欢冷凉、湿润的环境，通常生长在海拔1000米至3000米的山区或平原地带。它需要肥沃、排水良好的土壤，并且能够承受低温环境。在中国的甘肃、四川、云南等省份有大量栽培。",en:"Native to China, found predominantly in the cool high-altitude mountains of Gansu, Hubei, Sichuan, and Yunnan provinces. It is also cultivated in Japan and Korea."},usedPart:{zh:"主要药用部分为干燥的根，通常在秋季采挖，除去细根和泥土，晒干或阴干。",en:"The root is the primary medicinal part used in this plant."},mainComponents:{zh:"当归含有多种有效成分，包括挥发油、叶绿素、维生素A、维生素B12、钙、铁等，以及多种抗氧化剂。",en:"Contains various compounds including phytosterols, polysaccharides, ibutilide, ferulic acid, and vitamins A and E."},therapeuticEffects:[{zh:"补血调经：当归能够促进血液生成，调整月经，用于治疗贫血、月经不调等症状。",en:"Blood Tonic: Widely used to nourish and invigorate the blood, making it beneficial for conditions related to blood deficiency such as anemia, pale complexion, and dizziness."},{zh:"活血化瘀：适用于跌打损伤、血瘀引起的疼痛。",en:"Menstrual Regulator: Helps regulate menstrual cycles and alleviate menstrual discomforts such as cramps and irregular periods."},{zh:"滋阴润燥：对于身体虚弱、皮肤干燥等有很好的效果。",en:"Immune System Modulator: It has been suggested to modulate the immune system and promote the health of the cardiovascular system."}],usageAndDosage:{zh:"当归可以单独使用，也常与其他药材配伍，以增强效果。例如，与白芍配伍，用于调经止痛；与黄芪配合，用于补血益气。",en:"Commonly used in the form of decoctions, powders, tinctures, and dietary supplements. The typical dosage ranges from 4.5 to 15 grams in decoction."},cautions:{zh:"孕妇及月经过多者应谨慎使用。因其具有较强的活血作用，手术前后应避免使用。",en:"Dong quai is generally safe for most people when used appropriately. However, it should be used with caution by those with bleeding disorders, hormone-sensitive conditions, and during pregnancy. It may increase the skin's sensitivity to the sun and interact with blood-thinning medications."}},re=["path/to/image1.jpg","path/to/image2.jpg"],le={herb:ne,englishName:te,key:se,details:oe,images:re},de="桔梗",ce="Platycodon",he="platycodon",me={scientificName:{zh:"桔梗",en:"Platycodon grandiflorus (Jacq.) A. DC."},alternativeNames:{zh:["川桔梗","大花桔梗"],en:["Balloon Flower","Chinese Bellflower","Jie Geng"]},family:{zh:"桔梗科，桔梗属",en:"Campanulaceae, Platycodon"},habitat:{zh:"桔梗偏爱温和的气候和阳光充足的环境，适应性强，能够在多种土壤类型中生长，但最适宜于排水良好、肥沃的砂质壤土。它主要分布在中国的东北、华北及西北等地的山地、丘陵以及平原地带。",en:"Native to East Asia (China, Japan, Korea, and Eastern Siberia). It grows in meadows, mountain slopes, and edges of fields and roads. Prefers full sun to partial shade and well-drained, loamy soil."},usedPart:{zh:"主要利用桔梗的干燥根部，采挖时间通常在秋季植物落叶后或春季发芽前。",en:"The root is the primary medicinal part used."},mainComponents:{zh:"桔梗根含有桔梗苷、皂苷、黄酮、挥发油等多种化学成分，这些成分共同赋予桔梗其药用价值。",en:"Contains saponins, flavonoids, and glycosides, which contribute to its medicinal properties."},therapeuticEffects:[{zh:"开胸理气：桔梗能够促进气体在胸腔内的流通，缓解胸闷胸痛等症状。",en:"Respiratory Health: Traditionally used to treat coughs and to expel phlegm. It is known for its ability to open up and bring relief to the lungs and throat."},{zh:"利咽消痰：对于咽喉肿痛、声音嘶哑、咳嗽有痰等症状有良好的治疗效果。",en:"Anti-inflammatory and Analgesic: Exhibits anti-inflammatory and pain-relieving effects, making it useful in treating sore throat and other inflammatory conditions."},{zh:"抗炎作用：桔梗还具有一定的抗炎作用，能够缓解因感染引起的炎症。",en:"Immune Support: Enhances immune function and has been used to prevent and treat common colds and other respiratory infections."}],usageAndDosage:{zh:"桔梗经常与其他药材如百部、甘草等配合使用，以增强其缓解咳嗽、消炎的效果。在治疗咽喉炎、支气管炎等疾病时，桔梗是常用的药材之一。",en:"Commonly used in decoctions, powders, and as an extract in various traditional Chinese medicine formulations. The typical dosage in decoction form ranges from 3 to 10 grams."},cautions:{zh:"桔梗性温，使用时需根据个人体质调整剂量。孕妇及胃肠功能较弱者应谨慎使用。",en:"While generally considered safe, it should be used with caution in patients with gastritis or peptic ulcers due to its stimulating effects on the stomach. Pregnant and breastfeeding women should consult a healthcare provider before use."}},ue=["path/to/image1.jpg","path/to/image2.jpg"],pe={herb:de,englishName:ce,key:he,details:me,images:ue},ge="山楂",fe="Hawthorn",ye="hawthorn",be={scientificName:{zh:"山楂",en:"Crataegus pinnatifida Bunge"},alternativeNames:{zh:["红山果","山里红"],en:["Hawthorn","Chinese Hawthorn","Shan Zha"]},family:{zh:"蔷薇科，山楂属",en:"Rosaceae, Crataegus"},habitat:{zh:"山楂树适应性强，喜光、耐寒。它们通常生长在海拔1000米以下的山地、丘陵以及平原地带，尤其是在中国的北方和中部地区。山楂树对土壤要求不严，但以排水良好、肥沃的土壤为佳。",en:"Widely cultivated and found in the wild in various parts of Asia, especially in China, as well as in Europe and North America. It thrives in sunny and slightly shaded areas, preferring well-drained soils."},usedPart:{zh:"主要使用其成熟的果实，采收后晒干或鲜用。除了果实，山楂的叶片和花也可用作药用。",en:"Primarily the fruit, but leaves and flowers are also used medicinally."},mainComponents:{zh:"山楂含有多种有益成分，包括黄酮类化合物、有机酸（如柠檬酸、苹果酸）、蔗糖、维生素C等，这些成分赋予了山楂多方面的药用价值。",en:"Hawthorn is rich in flavonoids, oligomeric proanthocyanidins (OPCs), organic acids, and various antioxidants."},therapeuticEffects:[{zh:"健脾消食：山楂能增强胃液分泌，促进食物消化，用于治疗食积不消、胃胀等症状。",en:"Digestive Aid: Helps in digestion and relieves food stagnation, especially after consuming meat or greasy foods. It is commonly used for indigestion and abdominal discomfort."},{zh:"活血化瘀：对于血瘀所致的经痛、痛经有良好效果。",en:"Cardiovascular Health: Supports heart health by improving blood flow, reducing blood pressure, and lowering cholesterol levels."},{zh:"降血脂、降血压：山楂有助于调节血脂和血压，预防心血管疾病。",en:"Antioxidant Properties: The antioxidants present in hawthorn can neutralize free radicals and reduce inflammation, contributing to overall health and prevention of chronic diseases."}],usageAndDosage:{zh:"山楂可以单独使用，也常与其他药材配伍以增强效果，如与陈皮配合以加强健脾消食的作用。",en:"Hawthorn can be consumed in various forms, including teas, extracts, capsules, and even as candied fruit snacks. The dosage varies depending on the form and the specific health concern being addressed."},cautions:{zh:"山楂具有促进血液循环的作用，因此在血压过低或使用抗凝血药物的情况下应谨慎使用。孕妇在使用山楂时应咨询医师，以免引起子宫收缩。",en:"Generally considered safe for most people when used appropriately. However, it should be used with caution in individuals with cardiac or blood pressure medications due to potential interactions."}},ve=["path/to/image1.jpg","path/to/image2.jpg"],ze={herb:ge,englishName:fe,key:ye,details:be,images:ve},we="泽泻",Ce="Alisma",_e="alisma",Ne={scientificName:{zh:"泽泻",en:"Alisma plantago-aquatica"},alternativeNames:{zh:["水蜜桃","慈姑"],en:["Water Plantain","Alisma","Ze Xie"]},family:{zh:"泽泻科 Alismataceae",en:"Alismataceae"},habitat:{zh:"泽泻喜欢生长在湿润的环境中，常见于池塘、河边或湿地。这种植物对土壤的要求不高，能够适应多种水质，广泛分布于中国的东部、中部和南部地区。",en:"Commonly found in shallow water or marshes throughout temperate regions of the Northern Hemisphere, including Europe, Asia, and North America. It prefers full or partial sun and grows in muddy or sandy soils."},usedPart:{zh:"主要使用其干燥的块根（泽泻根），在秋季采挖，清洗干净后，切片晒干。",en:"The dried rhizomes (underground stems) are used medicinally."},mainComponents:{zh:"泽泻富含多种有效成分，包括萜类化合物、黄酮类、多糖等，这些成分赋予泽泻良好的利水渗湿作用。",en:"Alisma contains triterpenoids, flavonoids, and essential oils, contributing to its diuretic and lipid-lowering effects."},therapeuticEffects:[{zh:"利水渗湿：泽泻能有效促进体内水分代谢，对于治疗水肿、小便不利等症状有显著效果。",en:"Diuretic and Dampness Elimination: Promotes urination and helps to eliminate dampness in the body, making it useful for addressing edema and urinary difficulty."},{zh:"调节水道：通过促进肾脏功能，帮助调节体内的水电解质平衡，适用于尿频、尿急等泌尿系统疾病。",en:"Lipid Regulation: Has been used to help manage blood lipid levels, potentially beneficial for cardiovascular health."},{zh:"清热解毒：泽泻还具有一定的清热解毒作用，可以用于治疗由湿热引起的黄疸、脚气等症状。",en:"Kidney Support: Traditionally used to strengthen the kidneys and spleen, enhancing their function in water metabolism."}],usageAndDosage:{zh:"在中医治疗中，泽泻常与其他药材配合使用，以增强其利水渗湿的效果。例如，与茯苓、白术等同用，可增强健脾利湿的效果；与决明子、菊花配伍，可用于治疗眼疾。",en:"Typically used in decoctions, often in combination with other herbs to enhance its diuretic and dampness-eliminating effects. The standard dosage in decoction form ranges from 6 to 12 grams."},cautions:{zh:"泽泻具有较强的利水作用，因此在使用时需注意水分和电解质的平衡，避免脱水。肾功能不全或严重脱水的患者应慎用。",en:"Generally considered safe when used as directed, but excessive use can lead to electrolyte imbalances due to its diuretic effect. It is advised to use under the guidance of a healthcare professional, especially for individuals with kidney disorders or those taking diuretic medications."}},Ae=["path/to/image1.jpg","path/to/image2.jpg"],ke={herb:we,englishName:Ce,key:_e,details:Ne,images:Ae},Pe="香附",Se="Cyperus rotundus",$e="cyperus",He={scientificName:{zh:"香附",en:"Cyperus rotundus"},alternativeNames:{zh:["香附子","莎草"],en:["Nut Grass","Purple Nutsedge","Xiang Fu"]},family:{zh:"莎草科 Cyperaceae",en:"Cyperaceae"},habitat:{zh:"香附原产于印度，但在亚洲、非洲、欧洲和澳大利亚等地均有分布。它适应性极强，既可以生长在干旱地区，也能适应湿润环境。在中国，香附主要生长在南方的湿地和水田边缘。",en:"Widely distributed in warm temperate, tropical, and subtropical regions worldwide, including Asia, Africa, Southern Europe, and the Pacific Islands. It thrives in various habitats, including agricultural lands, roadsides, and gardens, preferring moist conditions."},usedPart:{zh:"主要使用其干燥的块茎，采集后清洗干净，切片晒干或阴干。",en:"The tuberous rhizomes are the part used medicinally."},mainComponents:{zh:"香附含有挥发油，其主要成分包括α-蒎烯、β-蒎烯等，还含有黄酮、酚酸类化合物等多种有效成分。",en:"Contains essential oils (including cyperene, cyperotundone), flavonoids, and sesquiterpenes, which contribute to its medicinal properties."},therapeuticEffects:[{zh:"疏肝解郁：香附能够疏通肝气，调节情绪，用于治疗由肝气郁结引起的胸闷、乳房胀痛等症状。",en:"Regulates Qi and Alleviates Pain: Used to regulate liver qi, addressing symptoms like abdominal pain, bloating, and menstrual discomfort."},{zh:"调经止痛：对于月经不调、经期疼痛有良好的缓解作用。",en:"Emotional Well-being: Due to its qi-regulating properties, it's also used to relieve stress, frustration, and depression."},{zh:"消炎止痛：香附的挥发油具有一定的消炎作用，可以用于治疗外伤、关节炎等。",en:"Promotes Blood Circulation: It helps in promoting blood flow, which is beneficial in treating menstrual irregularities and pain."}],usageAndDosage:{zh:"香附常与其他药材配合使用，以增强其疗效。例如，与当归、白芍配伍，可用于调经止痛；与柴胡、白术等配伍，可以疏肝解郁、健脾益气。",en:"Cyperus rotundus can be used in decoctions, powders, and as an extract. The typical dosage in decoction form ranges from 6 to 12 grams."},cautions:{zh:"香附性温，因此体内有实热、湿热的人应慎用。孕妇应在医师指导下使用。",en:"Generally considered safe when used as directed, but patients with liver disease or those taking medication that affects the liver should use it under healthcare supervision. Pregnant women should consult a healthcare provider before use."}},Ie=["path/to/image1.jpg","path/to/image2.jpg"],Te={herb:Pe,englishName:Se,key:$e,details:He,images:Ie},De="丹参",Ee="Salvia miltiorrhiza",xe="salvia",je={scientificName:{zh:"丹参",en:"Salvia miltiorrhiza Bunge"},alternativeNames:{zh:["红花丹参","赤丹参"],en:["Red Sage","Chinese Sage","Dan Shen"]},family:{zh:"唇形科（Lamiaceae），鼠尾草属（Salvia）",en:"Lamiaceae (Mint family)"},habitat:{zh:"丹参喜欢生长在阳光充足、排水良好的环境中，通常在海拔200-1500米的地区。它主要分布在中国的中部和西部，如四川、陕西、甘肃等地。",en:"Native to China and Japan, Salvia miltiorrhiza grows in a wide range of habitats but prefers well-drained, sandy soils in sunny locations. It is cultivated extensively in China, particularly in the provinces of Shaanxi, Gansu, and Sichuan."},usedPart:{zh:"主要使用其干燥的根和根茎，具有很高的药用价值。丹参的采挖通常在秋季进行，此时药效成分较为丰富。",en:"The root is the primary part used in traditional medicine."},mainComponents:{zh:"丹参含有多种有益成分，包括丹参酮、难参酚酸B、水溶性酚酸等，这些成分赋予了丹参良好的药理活性。",en:"Contains tanshinones, salvianolic acids, and other phenolic compounds, which contribute to its cardiovascular and cerebrovascular benefits."},therapeuticEffects:[{zh:"活血化瘀：丹参能有效改善血液循环，用于治疗由血瘀引起的各种症状，如胸痹心痛、经闭等。",en:"Cardiovascular Health: Widely used to improve blood circulation, reduce blood viscosity, and treat heart conditions such as angina and myocardial infarction."},{zh:"心脑血管保护：丹参对心脑血管系统具有明显的保护作用，能够预防和治疗冠心病、心绞痛、脑血栓等疾病。",en:"Anti-inflammatory and Antioxidant: Exhibits strong anti-inflammatory and antioxidant properties, making it useful in treating chronic diseases and reducing oxidative stress."},{zh:"抗炎作用：丹参还具有抗炎、抗氧化的效果，能减少炎症反应，保护身体免受自由基的伤害。",en:"Sedative and Anxiolytic Effects: This has been shown to have calming effects on the nervous system, helping to reduce anxiety and insomnia."}],usageAndDosage:{zh:"丹参可以单独使用，也可以与其他药材配伍，以增强效果。例如，与黄芪、红花配伍，用于心血管疾病的治疗；与川芎、桃仁配伍，用于活血化瘀。",en:"Salvia miltiorrhiza can be used in various forms, including decoctions, powders, and injectable extracts in modern medical practices. The dosage varies depending on the form and the condition being treated but typically ranges from 9 to 30 grams."},cautions:{zh:"由于丹参具有较强的活血化瘀作用，因此在出血性疾病（如胃溃疡出血）或术后患者中应谨慎使用。使用丹参期间，建议监测血压和肝功能，以防可能出现的不良反应。",en:"Generally considered safe for most adults when used appropriately. However, because of its blood-thinning properties, it should be used with caution in people taking anticoagulant or antiplatelet medications. Pregnant and breastfeeding women should consult a healthcare provider before use."}},Ge=["path/to/image1.jpg","path/to/image2.jpg"],Be={herb:De,englishName:Ee,key:xe,details:je,images:Ge},Le="菊花",Fe="Chrysanthemum",Re="chrysanthemum",We={scientificName:{zh:"菊花",en:"Chrysanthemum morifolium Ramat."},alternativeNames:{zh:["波斯菊","秋菊"],en:["Chrysanthemum","Florist's Chrysanthemum","Ju Hua"]},family:{zh:"菊科（Asteraceae）菊属（Chrysanthum）",en:"Asteraceae (Daisy family)"},habitat:{zh:"菊花适应性强，喜光照充足、通风良好且排水良好的环境。在中国，几乎各地均有栽培，尤其是江苏、浙江、安徽等地的菊花品质更为上乘。",en:"Native to Asia, especially China, where it has been cultivated for over 2,500 years. It thrives in well-drained, fertile soil under full sun to partial shade. Today, it is grown worldwide for its ornamental value and medicinal properties."},usedPart:{zh:"主要使用其干燥的花朵。采摘时机一般为花朵刚刚开放时，此时药用成分含量较高。采摘后应迅速晒干或阴干保存。",en:"The flowers are the primary part used for medicinal purposes."},mainComponents:{zh:"菊花含有挥发油、黄酮类化合物、萜类化合物等多种生物活性成分。其中黄酮类化合物具有良好的抗氧化性，对人体健康有益。",en:"Contains flavonoids, such as acacetin and luteolin, volatile oils, and vitamins, contributing to its health benefits."},therapeuticEffects:[{zh:"清热解毒：用于治疗风热感冒、头痛、喉痛等症状。",en:"Anti-inflammatory and Cooling: Used to clear heat and relieve inflammation, making it beneficial for treating fever, sore throat, and headaches."},{zh:"平肝明目：对于肝火旺盛引起的眼睛红肿痛、头晕头痛等有很好的疗效。",en:"Liver Health and Vision Improvement: Traditionally used to support liver health and improve vision, especially in conditions related to liver heat or yin deficiency causing eye discomfort."},{zh:"降血压：长期饮用菊花茶有助于降低血压，预防心血管疾病。",en:"Cardiovascular Health: Helps in lowering blood pressure and cholesterol levels, contributing to cardiovascular health."}],usageAndDosage:{zh:"菊花可以单独泡茶饮用，也可与其他药材如枸杞、甘草等配伍，增强其清热解毒、明目降压的效果。常见的菊花茶，是日常生活中广受欢迎的保健饮品。",en:"Chrysanthemum can be consumed as a tea, used in tinctures, or included in dietary supplements. For tea, 5-10 grams of dried flowers per day is a common dosage."},cautions:{zh:"菊花性寒，因此脾胃虚寒、容易腹泻的人应少量食用或避免食用。孕妇在使用菊花前应咨询医生。",en:"Generally considered safe for most people when consumed in amounts typically found in food and tea. However, it may cause allergic reactions in some individuals, especially those allergic to daisy family plants. Pregnant and breastfeeding women should consult a healthcare provider before use."}},Me=["path/to/image1.jpg","path/to/image2.jpg"],Ue={herb:Le,englishName:Fe,key:Re,details:We,images:Me},qe="白术",Ve="Atractylodes Macrocephala",Je="atractylodes",Ke={scientificName:{zh:"白术",en:"Atractylodes macrocephala Koidz."},alternativeNames:{zh:["大白术","白术（与苍术区分）"],en:["Largehead Atractylodes Rhizome","Bai Zhu"]},family:{zh:"菊科（Asteraceae），苍术属（Atractylodes）",en:"Asteraceae (Daisy family)"},habitat:{zh:"白术喜欢生长在阳光充足、湿润而排水良好的土壤中。它主要生长在海拔200米至1200米的山坡、山谷和林缘地带。中国浙江、江苏、安徽等省的白术质量尤为出众。",en:"Native to China, particularly found in the provinces of Zhejiang, Hubei, and Henan. It thrives in light, sandy, and well-drained soils in sunny locations. The plant prefers mountainous regions and is cultivated for its medicinal root."},usedPart:{zh:"主要使用其干燥的根茎，即白术的块茎。收获期通常在秋季植物落叶后，此时药材中的有效成分含量最高。",en:"The dried rhizome is used medicinally."},mainComponents:{zh:"白术含有挥发油、多糖、生物碱等多种有效成分。其中挥发油含有驱风、温中、止汗等药效，多糖具有增强免疫力的作用。",en:"Contains essential oils, polysaccharides, sesquiterpenoids, and other bioactive compounds that contribute to its medicinal properties."},therapeuticEffects:[{zh:"健脾胃：对于脾胃虚弱、食欲不振、泄泻等症状有良好的治疗效果。",en:"Spleen and Stomach Strengthening: Traditionally used to strengthen the spleen and stomach, promoting digestion and alleviating symptoms of diarrhea and fatigue due to spleen deficiency."},{zh:"驱湿邪：能有效调节体内湿气，用于治疗因湿邪引起的身体沉重、头晕等症状。",en:"Dampness Elimination: Helps to dry dampness and promote diuresis, useful in treating edema and damp-related conditions."},{zh:"安胎作用：在传统中医中，白术还用于预防妊娠早期的流产。",en:"Immune System Support: Its polysaccharides have been shown to enhance immune system function, making it beneficial for preventing colds and flu."}],usageAndDosage:{zh:"白术可以单独使用，也常与其他药材如茯苓、甘草等配合使用，以增强健脾利湿的效果。在复方中，白术能够和多种药材相配伍，用于治疗各种由脾胃虚弱引起的疾病。",en:"Commonly used in decoctions, powders, and as an ingredient in various traditional Chinese medicine formulations. The standard dosage ranges from 6 to 12 grams in decoction."},cautions:{zh:"白术性温，因此对于体质偏热、患有热性疾病的人应慎用。长期过量使用可能导致口干舌燥等症状。",en:"Generally well-tolerated, but it should be used with caution in cases of yin deficiency with dry symptoms or in those without significant dampness or digestive issues. As always, consultation with a healthcare provider is recommended, especially for pregnant or breastfeeding women."}},Oe=["path/to/image1.jpg","path/to/image2.jpg"],Ze={herb:qe,englishName:Ve,key:Je,details:Ke,images:Oe},Qe={components:{HerbDetails:U},data(){return{activeHerbName:"poria",herbs:[Z,ie,le,pe,ze,ke,Te,Be,Ue,Ze]}},mounted(){this.activeHerbName=window.location.hash.substring(1)||"poria"}};function Xe(c,p,a,z,m,w){const s=l("el-header"),C=l("herb-details"),_=l("el-tab-pane"),N=l("el-tabs"),A=l("el-main"),k=l("el-container");return o(),y(k,null,{default:h(()=>[u(s,null,{default:h(()=>[n("中医草药介绍")]),_:1}),u(A,null,{default:h(()=>[u(N,{modelValue:m.activeHerbName,"onUpdate:modelValue":p[0]||(p[0]=r=>m.activeHerbName=r),"tab-position":"left",style:{height:"100vh"}},{default:h(()=>[(o(!0),d(g,null,f(m.herbs,r=>(o(),y(_,{key:r.key,label:`${r.herb} / ${r.englishName}`,name:r.key},{default:h(()=>[u(C,{herb:r},null,8,["herb"])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}const Ye=b(Qe,[["render",Xe],["__scopeId","data-v-bd9d3f30"]]),v=$(Ye);v.use(H);v.mount("#app-herb");
