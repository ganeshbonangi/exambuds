/*eslint no-process-env:0*/

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 9000;
// List of user roles
export const userRoles = ['guest', 'user', 'admin'];

export default {
    env,
    port,
    userRoles,
    	'subjects':{
		'telugu':[ 
			// {
			// 	'topicname':'Arithmetic',
			// 	'displaytext':'testing' ప్రాక్టీస్ టెస్ట్,
			// 	'chapters':[
			// 		{
			// 			'url':'testing',
			// 			'displaytext':'testing ప్రాక్టీస్ టెస్ట్'
			// 		}
			// 	]
			// },
			{
				'topicname':'Arithmetic',
				'displaytext':'అర్థమెటిక్ ప్రాక్టీస్ టెస్ట్',
				'isInProd':true,
				'chapters':[
					{
						'url':'averages-TEL',
						'displaytext':'సరాసరి ప్రాక్టీస్ టెస్ట్'
					},/*{
						'url':'calender-TEL',
						'displaytext':'క్యాలెండర్ ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'clocks-TEL',
						'displaytext':'గడియారాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'interests-TEL',
						'displaytext':'బారువడ్డీ-చక్రవడ్డీ ప్రాక్టీస్ టెస్ట్'
					},*/{
						'url':'lcmgcd-TEL',
						'displaytext':'క.సా.గు-గ.సా.భా ప్రాక్టీస్ టెస్ట్'
					},/*{
						'url':'karunalu-TEL',
						'displaytext':'క్షేత్రమితి ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'mixers-TEL',
						'displaytext':'మిశ్రమాలు ప్రాక్టీస్ టెస్ట్'
					},*/{
						'url':'numseries-TEL',
						'displaytext':'నంబర్ సిరీస్ ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'numsys-TEL',
						'displaytext':'నంబర్ సిస్టం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'patnership-TEL',
						'displaytext':'భాగస్వామ్యం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'percent-TEL',
						'displaytext':'శాతాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'5b7b058e07c0b10004f08722',
						'displaytext':'లాభనష్టాలు ప్రాక్టీస్ టెస్ట్'
					}/*,{
						'url':'proposinal-TEL',
						'displaytext':'నిష్పత్తి-అనుపాతం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'simplification-TEL',
						'displaytext':'సూక్ష్మీకరణ ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'power-TEL',
						'displaytext':'ఘాతంకాలు-కరణలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'timedist-TEL',
						'displaytext':'కాలం-దూరం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'timework-TEL',
						'displaytext':'కాలం-పని ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'pobability-TEL',
						'displaytext':'సంభావ్యత ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'samitilu-TEL',
						'displaytext':'సమితిలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'samvargamanalu-TEL',
						'displaytext':'సంవర్గమానాలు ప్రాక్టీస్ టెస్ట్'
					}*/
				]
			},{
				'topicname':'Reasoning',
				'displaytext':'రీజనింగ్',
				'isInProd':false,
				'chapters':[{
							'url':'RK-seatingarrange-TEL',
								'displaytext':'సీటింగ్ అరేంజ్ మెంట్ ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-series-TEL',
								'displaytext':'సంఖ్యా శ్రేణి ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-ranking-TEL',
								'displaytext':'ర్యాంకింగ్ పరీక్షఎడిషన్ ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-puzzle-TEL',
								'displaytext':'పజిల్ టెస్ట్ ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-direction-TEL',
								'displaytext':'దిక్కులు ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-dies-TEL',
								'displaytext':'పాచికలు ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-codingdecoding-TEL',
								'displaytext':'కోడింగ్ -  డీకోడింగ్ ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-blodrelation-TEL',
								'displaytext':'రక్త సంబంధాలు ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-plika-TEL',
								'displaytext':'పోలిక పరీక్ష ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-vendiagroms-TEL',
								'displaytext':'వెన్ డయాగ్రమ్స్ ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-statementconclusion-TEL',
								'displaytext':'ప్రకటనలు - తీర్మానాలు ప్రాక్టీస్ టెస్ట్'
							}
						]
			},{
				'topicname':'RK Mocktest',
				'displaytext':'RK Content',
				'isInProd':false,
				'chapters':[{
							'url':'RK-Time-Work-TEL',
							'displaytext':'RK-Time-Work-TEL ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-Profit-Loss-TEL',
							'displaytext':'RK-Profit-Loss-TEL ప్రాక్టీస్ టెస్ట్'
							},{
							'url':'RK-Time-Distance-TEL',
							'displaytext':'RK-Time-Distance-TEL ప్రాక్టీస్ టెస్ట్'
							}
						]
			},
			{
				'topicname':'General Knowledge',
				'isInProd':true,
				'displaytext':'జనరల్ నాలెడ్జ్ ప్రాక్టీస్ టెస్ట్',
				'chapters':[
					{
						'url':'indiaarea-TEL',
						'displaytext':'భారతదేశం ఉనికి విస్తరణ ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indianpopulation-TEL',
						'displaytext':'భారతదేశ జనాభా లెక్కలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indianstateinfo-TEL',
						'displaytext':'రాష్ట్రాలు, కేంద్రపాలిత ప్రాంతాలు, ఆంధ్రప్రదేశ్ జిల్లా సమాచారం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'importcontryinfo-TEL',
						'displaytext':'ముఖ్య దేశాల సమాచారం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'countrycap-TEL',
						'displaytext':'దేశాలు-రాజధానులు, కరెన్సీ, పాత పేర్లు-కొత్త పేర్లు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'nationalsym-TEL',
						'displaytext':'జాతీయ చిహ్నాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indianlongest-TEL',
						'displaytext':'భారతదేశంలో ఎత్తైనవి పొడవైనవి ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'firstinindia-TEL',
						'displaytext':'భారతదేశంలో ప్రప్రధములు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'firstinworld-TEL',
						'displaytext':'ప్రపంచంలో ప్రప్రథమలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'awards-TEL',
						'displaytext':'అవార్డులు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'unitednation-TEL',
						'displaytext':'ఐక్యరాజ్యసమితి ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'unitednationsubsys-TEL',
						'displaytext':'ఐక్యరాజ్యసమితి అనుబంధ సంస్థలు, అంతర్జాతీయ కూటములు, సమాఖ్యలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'spacesys-TEL',
						'displaytext':'అంతరిక్ష రంగం, రక్షణ రంగం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'games-TEL',
						'displaytext':'క్రీడారంగం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indiantranspotsys-TEL',
						'displaytext':'భారత రవాణా వ్యవస్థ ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indianinfosys-TEL',
						'displaytext':'భారత సమాచార వ్యవస్థ ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'inventeddivices-TEL',
						'displaytext':'పరికరాలు కొనుక్కున్న శాస్త్రవేత్తలు వాటి ఉపయోగం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'diffsciences-TEL',
						'displaytext':'వివిధ అధ్యయన శాస్త్రాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'placesndpetname-TEL',
						'displaytext':'ప్రదేశాలు, పర్యాయపదాలు, వ్యక్తులు బిరుదులు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'operations-TEL',
						'displaytext':'ముఖ్యమైన దినోత్సవాలు, ఆపరేషన్లు, కమిటీలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'slogans-TEL',
						'displaytext':'ప్రముఖ వ్యక్తుల పలుకులు ఆత్మకథలు గ్రంథలు రచయితలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'historicbooks-TEL',
						'displaytext':'చరిత్ర గ్రంథాలు,  వివిధ మతాలు, గిరిజన జాతులు, కుటీర పరిశ్రమలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'parlamentnames-TEL',
						'displaytext':'దేశాలు,  పార్లమెంట్ పేర్లు,   నదీతీర నగరాలు, సమాధులు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'localdance-TEL',
						'displaytext':'వివిధ సామాజిక మత సంస్కరణ ఉద్యమాలు, జానపద నృత్యాలు,  కళాకారులు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'plannet-TEL',
						'displaytext':'గ్రహాలు కొన్ని ముఖ్యాంశాలు, చక్రవాతాలు,  గడ్డి భూములు, అంతర్జాతీయ సరిహద్దులు,  ప్రముఖులు వేతనాలు, ప్రోటోకాల్,  రాజకీయ పార్టీలు-గుర్తులు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'fobio-TEL',
						'displaytext':'వివిధ రకాల మిశ్రమ లోహాలు, మూడు  ఖనిజాలు, పరిశోధన సంస్థలు, ఫోబియాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'hills-TEL',
						'displaytext':'ఎవరెస్టు శిఖరం, సినిమా రంగం, న్యూ వండర్స్,  కట్టడాలు, డిజైన్ కథలు,  ప్రభుత్వ భవనాలు  మారుపేర్లు, వివిధ దేశాల  అధికార నివాసాలు,  అధికార పుస్తకాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'impcities-TEL',
						'displaytext':'ప్రపంచంలో మరియు భారతదేశంలో ముఖ్యమైన నగరాలు ప్రాముఖ్యతలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'historicplaces-TEL',
						'displaytext':'భారతదేశం ముఖ్యమైన నిర్మాణాలు-స్మారక చిహ్నాలు- ప్రాచీనమైన ప్రాంతాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'abbr-TEL',
						'displaytext':'అబ్రివేషన్ ప్రాక్టీస్ టెస్ట్'
					}
				]
			},{
				'topicname':'Inidan Economy',
				'displaytext':'ఇండియన్ ఎకానమీ',
				'isInProd':true,
				'chapters':[
					{
					'url':'indianplanning-TEL',
						'displaytext':'భారత ప్రణాళికలు ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianpoverty-TEL',
						'displaytext':'పేదరికం ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indiannationalincom-TEL',
						'displaytext':'జాతీయ ఆదాయం ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianeconsys-TEL',
						'displaytext':'ప్రభుత్వ విత్తం ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianmoney-TEL',
						'displaytext':'ద్రవ్యం ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianbanking-TEL',
						'displaytext':'బ్యాంకింగ్ రంగం ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianaggri-TEL',
						'displaytext':'వ్యవసాయ రంగం ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianindust-TEL',
						'displaytext':'పారిశ్రామిక రంగం ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianstock-TEL',
						'displaytext':'అంతర్జాతీయ వ్యాపారం-  సంస్థలు - స్టాక్ మార్కెట్లు ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianbudget-TEL',
						'displaytext':'బడ్జెట్ ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianecodev-TEL',
						'displaytext':'ఆర్థిక వృద్ధి-  ఆర్థికావృద్ధి ప్రాక్టీస్ టెస్ట్'
					},{
					'url':'indianesocialsch-TEL',
						'displaytext':'భారతదేశం- ఆంధ్ర ప్రదేశ్ సంక్షేమ పథకాలు ప్రాక్టీస్ టెస్ట్'
					}
				]
			},{
				'topicname':'Indian Polytics',
				'displaytext':'ఇండియన్ పాలిటిక్స్',
				'isInProd':true,
				'chapters':[
					{
						'url':'indianconsthist-TEL',
						'displaytext':'భారత రాజ్యాంగం చారిత్రక నేపథ్యం - బ్రిటిష్ వారు చేసిన చట్టాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indianconstwrit-TEL',
						'displaytext':'భారత రాజ్యాంగం పరిచయం - రచన ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indianforeigncontimp-TEL',
						'displaytext':'వివిధ దేశాలు రాజ్యాంగాల  నుండి  స్వీకరించిన  ముఖ్యమైన అంశాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'prevesika-TEL',
						'displaytext':'ప్రవేశిక/పీఠిక ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indianconstsymptoms-TEL',
						'displaytext':'భారత రాజ్యాంగ లక్షణాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'centeralgov-TEL',
						'displaytext':'కేంద్ర ప్రభుత్వం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'stategov-TEL',
						'displaytext':'రాష్ట్ర ప్రభుత్వం ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'localinst-TEL',
						'displaytext':'స్థానిక సంస్థలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indianconstparts-TEL',
						'displaytext':'భారత రాజ్యాంగంలోని అధి కారణలు మరియు భాగాలు ప్రాక్టీస్ టెస్ట్'
					},{
						'url':'indianconstchanges-TEL',
						'displaytext':'రాజ్యాంగ సవరణలు ప్రాక్టీస్ టెస్ట్'
					}/*,{
						'url':'indianeconsys-TEL',
						'displaytext':'సబ్-  ఇన్      ప్రీవియస్  పేపర్స్ ప్రాక్టీస్ టెస్ట్'
					}*/
				]
			}
		],
		'english':[
			{
				'topicname':'Arithmetic',
				'displaytext':'Arithmetic practice test',
				'isInProd':true,
				'chapters':[
					{
						'url':'averages-EN',
						'displaytext':'Averages practice test'
					},{
						'url':'calender-EN',
						'displaytext':'Calender practice test'
					},{
						'url':'clocks-EN',
						'displaytext':'Clocks practice test'
					},{
						'url':'interests-EN',
						'displaytext':'Simple Interest and Compond Interest practice test'
					},{
						'url':'lcmgcd-EN',
						'displaytext':'LCM and GCD practice test'
					},{
						'url':'timework-EN',
						'displaytext':'Time and Distance practice test' 
					}
				]
			}
		]
	}
};

