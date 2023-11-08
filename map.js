//all data
const sbData = [
  [0, 'Ontario Average',                                'Ontario Average',  '27,746',  '32,279',  '14,000',  '14,426',  '63.7%',  '$402,361,333',   '$400,279,451',   '$2,081,883',    '$91,093,962',   '1.2%',   '22.6%',  'N/A',    '29.4',     '0.61'   ],
  [1, 'DSB Ontario North East',                         'English Public',   '6,562',   '13,434',  '19,559',  '21,462',  '46.4%',  '$141,923,740',   '$140,835,432',   '$1,088,308',    '$37,455,778',   '0.8%',   '26.4%',  '659',    '53.89',    '0.956'  ],
  [2, 'Algoma DSB',                                     'English Public',   '9,762',   '15,269',  '16,757',  '19,329',  '56.0%',  '$191,465,792',   '$188,684,148',   '$2,781,644',    '$26,867,275',   '1.5%',   '14.0%',  '628',    '37.17',    '0.802'  ],
  [3, 'Rainbow DSB',                                    'English Public',   '12,987',  '18,367',  '15,926',  '17,671',  '62.7%',  '$231,376,397',   '$229,498,637',   '$1,877,760',    '$33,040,406',   '0.8%',   '14.3%',  '363',    '27.2',     '0.349'  ],
  [4, 'Near North DSB',                                 'English Public',   '9,560',   '13,711',  '16,549',  '17,688',  '52.2%',  '$173,389,398',   '$169,101,700',   '$4,287,698',    '$26,962,597',   '2.5%',   '15.6%',  '313',    '25.79',    '0.918'  ],
  [5, 'Keewatin-Patricia DSB',                          'English Public',   '4,226',   '7,942',   '21,324',  '24,741',  '55.0%',  '$108,916,721',   '$104,563,362',   '$4,353,359',    '$39,725,000',   '4.0%',   '36.5%',  '1,709',  '95.84',    '1'      ],
  [6, 'Rainy River DSB',                                'English Public',   '2,034',   '4,358',   '23,890',  '27,820',  '51.9%',  '$59,046,647',    '$56,586,001',    '$2,460,646',    '$26,913,805',   '4.2%',   '45.6%',  '1,584',  '49.85',    '1'      ],
  [7, 'Lakehead DSB',                                   'English Public',   '8,560',   '11,673',  '15,369',  '16,981',  '59.5%',  '$153,791,983',   '$145,358,947',   '$8,433,036',    '$7,028,000',    '5.5%',   '4.6%',   '1,257',  '25.19',    '0.572'  ],
  [8, 'Superior-Greenstone DSB',                        'English Public',   '1,189',   '4,567',   '32,524',  '41,406',  '43.9%',  '$49,779,957',    '$49,216,925',    '$563,032',      '$13,250,849',   '1.1%',   '26.6%',  '967',    '72.61',    '1'      ],
  [9, 'Bluewater DSB',                                  'English Public',   '17,273',  '20,513',  '13,550',  '13,844',  '59.0%',  '$244,484,140',   '$239,128,969',   '$5,355,171',    '$41,997,859',   '2.2%',   '17.2%',  '<151',   '21.65',    '1'      ],
  [10,'Avon Maitland DSB',                              'English Public',   '14,758',  '20,017',  '14,053',  '14,845',  '65.5%',  '$223,403,653',   '$219,085,718',   '$4,317,935',    '$21,196,891',   '1.9%',   '9.5%',   '<151',   '14.96',    '0.992'  ],
  [11,'Greater Essex County DSB',                       'English Public',   '35,845',  '41,728',  '12,781',  '13,419',  '62.3%',  '$484,549,843',   '$480,988,028',   '$3,561,815',    '$51,461,532',   '0.7%',   '10.6%',  '<151',   '6.82',     '0.465'  ],
  [12,'Lambton Kent DSB',                               'English Public',   '21,109',  '30,161',  '13,359',  '14,466',  '56.1%',  '$313,509,818',   '$305,366,257',   '$8,143,561',    '$51,781,245',   '2.6%',   '16.5%',  '<151',   '15.71',    '0.712'  ],
  [13,'Thames Valley DSB',                              'English Public',   '80,220',  '86,692',  '12,664',  '13,363',  '61.5%',  '$1,063,769,719', '$1,071,998,639', '$(8,228,920)',  '$103,696,000',  '-0.8%',  '9.7%',   '<151',   '9.03',     '0.454'  ],
  [14,'Toronto DSB',                                    'English Public',   '230,847', '294,215', '13,428',  '15,253',  '69.6%',  '$3,433,047,376', '$3,521,113,416', '$(88,066,040)', '$(19,259,000)', '-2.6%',   '-0.6%', '<151',   '3.85',     '0'      ],
  [15,'Durham DSB',                                     'English Public',   '74,094',  '70,847',  '11,991',  '12,617',  '68.3%',  '$945,871,448',   '$934,813,951',   '$11,057,497',   '$311,513,721',  '1.2%',   '32.9%',  '<151',   '5.54',     '0.513'  ],
  [16,'Kawartha Pine Ridge DSB',                        'English Public',   '34,177',  '37,606',  '12,911',  '13,837',  '64.3%',  '$475,915,951',   '$472,913,615',   '$3,002,336',    '$52,550,728',   '0.6%',   '11.0%',  '<151',   '13.94',    '0.816'  ],
  [17,'Trillium Lakelands DSB',                         'English Public',   '16,735',  '23,351',  '13,796',  '13,950',  '61.1%',  '$240,078,114',   '$233,459,149',   '$6,618,965',    '$23,374,000',   '2.8%',   '9.7%',   '<151',   '26.8',     '0.861'  ],
  [18,'York Region DSB',                                'English Public',   '124,808', '133,999', '12,354',  '13,120',  '77.4%',  '$1,663,057,165', '$1,637,506,343', '$25,550,822',   '$955,851,000',  '1.5%',   '57.5%',  '<151',   '6.28',     '0.243'  ],
  [19,'Simcoe County DSB',                              'English Public',   '54,367',  '50,664',  '12,346',  '12,813',  '63.7%',  '$718,239,642',   '$696,612,968',   '$21,626,674',   '$151,795,000',  '3.0%',   '21.1%',  '<151',   '11.6',     '0.759'  ],
  [20,'Upper Grand DSB',                                'English Public',   '34,936',  '37,330',  '12,757',  '13,247',  '67.7%',  '$462,827,922',   '$462,787,378',   '$40,544',       '$95,010,753',   '0.0%',   '20.5%',  '<151',   '9.72',     '0.754'  ],
  [21,'Peel DSB',                                       'English Public',   '150,607', '177,212', '12,512',  '13,389',  '68.1%',  '$2,013,314,390', '$2,016,473,554', '$(3,159,164)',  '$638,973,836',  '-0.2%',  '31.7%',  '<151',   '4.43',     '0.047'  ],
  [22,'Halton DSB',                                     'English Public',   '65,803',  '66,052',  '11,920',  '12,726',  '76.3%',  '$851,697,333',   '$837,408,204',   '$14,289,129',   '$331,317,641',  '1.7%',   '38.9%',  '<151',   '5.65',     '0.306'  ],
  [23,'Hamilton-Wentworth DSB',                         'English Public',   '49,712',  '53,020',  '12,660',  '14,273',  '57.5%',  '$725,297,721',   '$709,546,414',   '$15,751,307',   '$120,074,000',  '2.2%',   '16.6%',  '<151',   '4',        '0'      ],
  [24,'DSB of Niagara',                                 'English Public',   '39,265',  '45,121',  '12,763',  '13,668',  '77.3%',  '$547,161,310',   '$536,658,904',   '$10,502,406',   '$113,710,410',  '1.9%',   '20.8%',  '<151',   '6.57',     '0.724'  ],
  [25,'Grand Erie DSB',                                 'English Public',   '25,761',  '33,003',  '12,911',  '13,723',  '56.3%',  '$357,389,087',   '$353,517,371',   '$3,871,716',    '$14,829,003',   '1.1%',   '4.1%',   '<151',   '10.48',    '0.754'  ],
  [26,'Waterloo Region DSB',                            'English Public',   '64,153',  '66,734',  '12,071',  '12,771',  '67.2%',  '$826,308,396',   '$819,318,947',   '$6,989,449',    '$184,593,774',  '0.8%',   '22.3%',  '<151',   '4.66',     '0.362'  ],
  [27,'Ottawa-Carleton DSB',                            'English Public',   '73,367',  '80,505',  '12,998',  '14,224',  '69.1%',  '$1,055,179,851', '$1,043,553,700', '$11,626,151',   '$141,922,485',  '1.1%',   '13.5%',  '<151',   '5.57',     '0'      ],
  [28,'Upper Canada DSB',                               'English Public',   '26,125',  '35,689',  '14,733',  '15,075',  '56.2%',  '$399,386,502',   '$393,843,298',   '$5,543,204',    '$37,893,842',   '1.4%',   '9.5%',   '<151',   '22.15',    '0.984'  ],
  [29,'Limestone DSB',                                  'English Public',   '19,371',  '24,007',  '14,103',  '14,828',  '59.4%',  '$292,584,988',   '$287,241,352',   '$5,343,636',    '$43,396,355',   '1.8%',   '14.8%',  '165',    '11.36',    '0.668'  ],
  [30,'Renfrew County DSB',                             'English Public',   '8,895',   '13,608',  '15,618',  '16,441',  '59.8%',  '$146,412,051',   '$146,242,030',   '$170,021',      '$14,388,204',   '0.1%',   '9.8%',   '<151',   '23.64',    '1'      ],
  [31,'Hastings and Prince Edward DSB',                 'English Public',   '14,801',  '19,085',  '14,283',  '15,017',  '60.4%',  '$221,480,092',   '$222,260,032',   '$(779,940)',    '$8,838,000',    '-0.4%',  '4.0%',   '167',    '14.26',    '0.926'  ],
  [32,'Northeastern Catholic DSB',                      'English Catholic', '2,232',   '3,460',   '20,295',  '21,073',  '49.0%',  '$47,575,471',    '$47,039,117',    '$536,354',      '$9,428,269',    '1.1%',   '19.8%',  '656',    '62.25',    '0.949'  ],
  [33,'Nipissing-Parry Sound Catholic DSB',             'English Catholic', '2,706',   '4,187',   '18,826',  '19,788',  '56.7%',  '$54,404,619',    '$53,549,950',    '$854,669',      '$7,673,803',    '1.6%',   '14.1%',  '312',    '17.74',    '0.873'  ],
  [34,'Huron-Superior Catholic DSB',                    'English Catholic', '4,016',   '6,856',   '18,334',  '21,217',  '61.2%',  '$85,632,607',    '$85,208,426',    '$424,181',      '$11,933,512',   '0.5%',   '13.9%',  '627',    '65.53',    '0.766'  ],
  [35,'Sudbury Catholic DSB',                           'English Catholic', '6,325',   '7,829',   '15,731',  '16,710',  '54.5%',  '$107,291,107',   '$105,690,221',   '$1,600,886',    '$15,288,598',   '1.5%',   '14.2%',  '365',    '18.52',    '0.228'  ],
  [36,'Northwest Catholic DSB',                         'English Catholic', '1,189',   '1,685',   '22,939',  '23,396',  '54.4%',  '$28,545,343',    '$27,817,680',    '$727,663',      '$16,868,748',   '2.5%',   '59.1%',  '1,587',  '128.72',   '1'      ],
  [37,'Kenora Catholic DSB',                            'English Catholic', '1,233',   '1,805',   '22,874',  '26,773',  '63.3%',  '$33,088,194',    '$33,015,327',    '$72,867',       '$6,722,528',    '0.2%',   '20.3%',  '1,709',  '83.8',     '1'      ],
  [38,'Thunder Bay Catholic DSB',                       'English Catholic', '6,905',   '8,867',   '16,195',  '17,746',  '64.0%',  '$120,175,559',   '$122,544,309',   '$(2,368,750)',  '$15,474,997',   '-2.0%',  '12.9%',  '1,258',  '3.76',     '0.524'  ],
  [39,'Superior North Catholic DSB',                    'English Catholic', '610',     '1,827',   '33,671',  '38,370',  '49.3%',  '$24,063,930',    '$23,406,562',    '$657,368',      '$6,473,731',    '2.7%',   '26.9%',  '1,038',  '90.65',    '1'      ],
  [40,'Bruce-Grey Catholic DSB',                        'English Catholic', '4,598',   '4,090',   '14,887',  '15,985',  '63.9%',  '$72,654,438',    '$73,503,230',    '$(848,792)',    '$10,685,980',   '-1.2%',  '14.7%',  '<151',   '22.44',    '1'      ],
  [41,'Huron Perth Catholic DSB',                       'English Catholic', '4,576',   '5,330',   '15,294',  '16,069',  '71.6%',  '$74,131,961',    '$73,524,549',    '$607,412',      '$7,266,972',    '0.8%',   '9.8%',   '<151',   '20.73',    '0.986'  ],
  [42,'Windsor-Essex Catholic DSB',                     'English Catholic', '20,465',  '23,510',  '13,064',  '13,490',  '73.8%',  '$283,276,771',   '$276,071,757',   '$7,205,014',    '$34,053,010',   '2.5%',   '12.0%',  '<151',   '7.66',     '0.444'  ],
  [43,'London District Catholic School Board',          'English Catholic', '22,502',  '22,146',  '12,914',  '13,167',  '64.7%',  '$307,572,825',   '$296,269,481',   '$11,303,344',   '$51,982,000',   '3.7%',   '16.9%',  '<151',   '10.41',    '0.3'    ],
  [44,'St. Clair Catholic DSB',                         'English Catholic', '8,629',   '9,494',   '13,809',  '14,775',  '64.6%',  '$128,785,260',   '$127,501,180',   '$1,284,080',    '$26,612,831',   '1.0%',   '20.7%',  '<151',   '19.85',    '0.675'  ],
  [45,'Toronto Catholic DSB',                           'English Catholic', '84,032',  '96,466',  '13,532',  '14,996',  '68.0%',  '$1,238,530,193', '$1,260,132,592', '$(21,602,399)', '$494,122,000',  '-1.7%',  '39.9%',  '<151',   '4.46',     '0'      ],
  [46,'Peterborough V N C Catholic DSB',                'English Catholic', '14,666',  '15,779',  '13,351',  '14,214',  '64.4%',  '$208,174,186',   '$208,464,807',   '$(290,621)',    '$32,249,647',   '-0.1%',  '15.5%',  '<151',   '16.08',    '0.752'  ],
  [47,'York Catholic DSB',                              'English Catholic', '50,315',  '59,031',  '12,503',  '13,653',  '76.1%',  '$689,540,869',   '$686,923,654',   '$2,617,215',    '$278,403,000',  '0.4%',   '40.4%',  '<151',   '7.11',     '0.181'  ],
  [48,'Dufferin-Peel Catholic DSB',                     'English Catholic', '73,312',  '88,814',  '12,639',  '14,216',  '70.5%',  '$1,011,786,681', '$1,042,199,810', '$(30,413,129)', '$251,031,000',  '-3.0%',  '24.8%',  '<151',   '4.91',     '0.061'  ],
  [49,'Simcoe Muskoka Catholic DSB',                    'English Catholic', '22,172',  '23,343',  '12,672',  '13,206',  '61.2%',  '$302,064,636',   '$292,797,611',   '$9,267,025',    '$64,167,998',   '3.1%',   '21.2%',  '<151',   '17.76',    '0.74'   ],
  [50,'Durham Catholic DSB',                            'English Catholic', '21,459',  '20,716',  '12,545',  '14,529',  '68.2%',  '$314,365,708',   '$311,773,212',   '$2,592,496',    '$72,734,611',   '0.8%',   '23.1%',  '<151',   '6.94',     '0.485'  ],
  [51,'Halton Catholic DSB',                            'English Catholic', '35,844',  '34,095',  '11,729',  '12,883',  '73.5%',  '$470,361,379',   '$461,788,644',   '$8,572,735',    '$187,259,851',  '1.8%',   '39.8%',  '<151',   '7.02',     '0.323'  ],
  [52,'Hamilton-Wentworth Catholic DSB',                'English Catholic', '29,263',  '30,063',  '12,638',  '13,797',  '69.9%',  '$403,551,809',   '$403,741,120',   '$(189,311)',    '$92,450,573',   '0.0%',   '22.9%',  '<151',   '4.73',     '0'      ],
  [53,'Wellington Catholic DSB',                        'English Catholic', '8,106',   '9,752',   '13,730',  '14,161',  '70.1%',  '$116,054,137',   '$114,795,853',   '$1,258,284',    '$26,106,723',   '1.1%',   '22.5%',  '<151',   '10.38',    '0.536'  ],
  [54,'Waterloo Catholic DSB',                          'English Catholic', '24,231',  '22,622',  '12,419',  '13,823',  '70.4%',  '$351,731,564',   '$334,951,805',   '$16,779,759',   '$55,407,384',   '4.8%',   '15.8%',  '<151',   '6.78',     '0.298'  ],
  [55,'Niagara Catholic DSB',                           'English Catholic', '20,385',  '24,142',  '12,991',  '13,990',  '68.4%',  '$285,140,846',   '$285,176,450',   '$(35,604)',     '$26,802,592',   '0.0%',   '9.4%',   '<151',   '8.4',      '0.715'  ],
  [56,'Brant Haldimand Norfolk Catholic DSB',           'English Catholic', '10,964',  '11,158',  '13,040',  '13,772',  '64.0%',  '$151,075,669',   '$150,993,269',   '$82,400',       '$30,904,607',   '0.1%',   '20.5%',  '<151',   '13.9',     '0.703'  ],
  [57,'Catholic DSB of Eastern Ontario',                'English Catholic', '13,205',  '14,425',  '15,226',  '15,503',  '64.5%',  '$207,215,064',   '$204,713,400',   '$2,501,664',    '$20,403,876',   '1.2%',   '9.8%',   '<151',   '23.69',    '0.979'  ],
  [58,'Ottawa Catholic DSB',                            'English Catholic', '44,713',  '46,290',  '13,120',  '13,790',  '74.3%',  '$631,392,469',   '$616,591,902',   '$14,800,567',   '$140,098,000',  '2.3%',   '22.2%',  '<151',   '6.38',     '0'      ],
  [59,'Renfrew County Catholic DSB',                    'English Catholic', '4,742',   '6,131',   '16,469',  '17,384',  '77.2%',  '$82,221,959',    '$82,434,876',    '$(212,917)',    '$14,559,461',   '-0.3%',  '17.7%',  '<151',   '23.28',    '1'      ],
  [60,'Algonquin and Lakeshore Catholic DSB',           'English Catholic', '11,344',  '11,371',  '14,425',  '15,200',  '59.1%',  '$173,134,812',   '$172,432,949',   '$701,863',      '$21,581,244',   '0.4%',   '12.5%',  '181',    '24.49',    '0.687'  ],
  [61,'CSP du Nord-Est de l&apos;Ontario',              'French Public',    '2,024',   '3,719',   '27,268',  '29,569',  '61.1%',  '$60,455,814',    '$59,847,037',    '$608,777',      '$14,820,072',   '1.0%',   '24.5%',  '313',    '123.84',   '0.931'  ],
  [62,'CSP du Grand Nord de l&apos;Ontario',            'French Public',    '2,629',   '6,198',   '27,517',  '29,151',  '53.0%',  '$76,283,387',    '$76,647,391',    '$(364,004)',    '$11,893,345',   '-0.5%',  '15.6%',  '363',    '103.5',    '0.335'  ],
  [63,'CS Viamonde',                                    'French Public',    '13,105',  '18,674',  '18,175',  '19,404',  '78.3%',  '$252,932,997',   '$254,288,097',   '$(1,355,100)',  '$137,072,020',  '-0.5%',  '54.2%',  '<151',   '40.84',    '0.174'  ],
  [64,'CÉP de l&apos;Est de l&apos;Ontario',            'French Public',    '16,830',  '19,586',  '16,465',  '17,820',  '75.7%',  '$308,467,517',   '$299,907,187',   '$8,560,330',    '$137,311,774',  '2.8%',   '44.5%',  '<151',   '29.83',    '0.231'  ],
  [65,'CSD catholique des Grandes Rivières',            'French Catholic',  '5,494',   '11,745',  '21,514',  '22,261',  '57.3%',  '$123,898,726',   '$122,290,156',   '$1,608,570',    '$23,117,472',   '1.3%',   '18.7%',  '654',    '49.47',    '0.958'  ],
  [66,'CSD catholique Franco-Nord',                     'French Catholic',  '2,535',   '4,913',   '23,563',  '25,848',  '52.6%',  '$65,553,809',    '$65,525,945',    '$27,864',       '$16,003,549',   '0.0%',   '24.4%',  '312',    '25.21',    '0.925'  ],
  [67,'CSD catholique du Nouvel-Ontario',               'French Catholic',  '5,986',   '12,726',  '20,327',  '21,722',  '58.2%',  '$130,418,704',   '$130,033,803',   '$384,901',      '$23,981,872',   '0.3%',   '18.4%',  '364',    '60.34',    '0.386'  ],
  [68,'CSD catholique des Aurores boreales',            'French Catholic',  '815',     '1,725',   '35,192',  '32,376',  '58.6%',  '$27,177,803',    '$26,378,123',    '$799,680',      '$22,671,087',   '2.9%',   '83.4%',  '1,255',  '188.95',   '0.7'    ],
  [69,'CS catholique Providence',                       'French Catholic',  '9,465',   '12,095',  '17,137',  '18,209',  '69.0%',  '$166,968,888',   '$172,351,722',   '$(5,382,834)',  '$49,899,339',   '-3.2%',  '29.9%',  '<151',   '41.42',    '0.578'  ],
  [70,'CS catholique MonAvenir',                        'French Catholic',  '16,287',  '20,273',  '17,477',  '18,844',  '75.7%',  '$321,966,166',   '$306,898,672',   '$15,067,494',   '$191,816,804',  '4.7%',   '59.6%',  '<151',   '32.4',     '0.338'  ],
  [71,'CSD catholique de l&apos;Est ontarien',          'French Catholic',  '10,410',  '17,893',  '17,468',  '18,241',  '67.5%',  '$190,641,135',   '$189,889,392',   '$751,743',      '$23,134,819',   '0.4%',   '12.1%',  '<151',   '15.97',    '0.983'  ],
  [72,'CSD catholique du Centre-Est de l&apos;Ontario', 'French Catholic',  '25,510',  '28,762',  '15,507',  '16,281',  '77.3%',  '$427,053,845',   '$415,325,787',   '$11,728,058',   '$176,144,610',  '2.7%',   '41.2%',  '<151',   '20.45',    '0.082'  ],
];

//rankings data
const sbDataRankings = [
  [0 ,'' ,'' ,0    ,0    ,0    ,0      ,0    ,0    ,0    ,0    ,0    ,0    ,0    ,0     ,0    ,0   ],
  [1 ,'' ,'','53'  ,'46' ,'14' ,'13'   ,'71' ,'50' ,'50' ,'40' ,'34' ,'45' ,'19' ,'N/A' ,'12' ,'17'],
  [2 ,'' ,'','45'  ,'42' ,'21' ,'18'   ,'61' ,'42' ,'43' ,'30' ,'41' ,'29' ,'52' ,'N/A' ,'17' ,'26'],
  [3 ,'' ,'','41'  ,'39' ,'26' ,'25'   ,'40' ,'37' ,'37' ,'35' ,'36' ,'44' ,'49' ,'N/A' ,'20' ,'52'],
  [4 ,'' ,'','46'  ,'44' ,'22' ,'24'   ,'67' ,'44' ,'46' ,'26' ,'39' ,'17' ,'45' ,'N/A' ,'22' ,'22'],
  [5 ,'' ,'','60'  ,'56' ,'11' ,'9'    ,'62' ,'56' ,'57' ,'24' ,'32' ,'5'  ,'13' ,'N/A' ,'5'  ,'1' ],
  [6 ,'' ,'','66'  ,'64' , '6' ,'6'    ,'68' ,'65' ,'65' ,'34' ,'40' ,'4'  ,'6'  ,'N/A' ,'13' ,'1' ],
  [7 ,'' ,'','50'  ,'50' ,'30' ,'27'   ,'49' ,'47' ,'49' ,'16' ,'69' ,'1'  ,'69' ,'N/A' ,'24' ,'42'],
  [8 ,'' ,'','70'  ,'63' , '3' ,'1'    ,'72' ,'67' ,'67' ,'49' ,'61' ,'34' ,'18' ,'N/A' ,'8'  ,'1' ],
  [9 ,'' ,'','32'  ,'33' ,'42' ,'51'   ,'52' ,'35' ,'35' ,'22' ,'31' ,'19' ,'39' ,'N/A' ,'31' ,'1' ],
  [10,'' ,'','37'  ,'35' ,'38' ,'39'   ,'29' ,'38' ,'39' ,'25' ,'51' ,'21' ,'66' ,'N/A' ,'41' ,'11'],
  [11,'' ,'','16'  ,'16' ,'55' ,'61'   ,'41' ,'16' ,'16' ,'28' ,'28' ,'46' ,'60' ,'N/A' ,'57' ,'47'],
  [12,'' ,'','28'  ,'22' ,'45' ,'43'   ,'60' ,'27' ,'27' ,'17' ,'27' ,'14' ,'42' ,'N/A' ,'40' ,'35'],
  [13,'' ,'','5'   ,'6'  ,'59' ,'63'   ,'42' ,'5'  ,'5'  ,'69' ,'19' ,'66' ,'64' ,'N/A' ,'51' ,'48'],
  [14,'' ,'','1'   ,'1'  ,'44' ,'34'   ,'18' ,'1'  ,'1'  ,'72' ,'72' ,'70' ,'72' ,'N/A' ,'71' ,'67'],
  [15,'' ,'','6'   ,'8'  ,'70' ,'72'   ,'22' ,'8'  ,'8'  ,'11' ,'5'  ,'33' ,'14' ,'N/A' ,'64' ,'45'],
  [16,'' ,'','19'  ,'17' ,'53' ,'52'   ,'34' ,'17' ,'17' ,'29' ,'25' ,'47' ,'59' ,'N/A' ,'43' ,'25'],
  [17,'' ,'','34'  ,'28' ,'40' ,'50'   ,'46' ,'36' ,'36' ,'20' ,'46' ,'11' ,'65' ,'N/A' ,'21' ,'24'],
  [18,'' ,'','3'   ,'3'  ,'67' ,'67'   ,'2'  ,'3'  ,'3'  ,'1'  ,'1'  ,'27' ,'4'  ,'N/A' ,'61' ,'59'],
  [19,'' ,'','11'  ,'13' ,'68' ,'69'   ,'38' ,'12' ,'12' ,'2'  ,'12' ,'8'  ,'29' ,'N/A' ,'45' ,'28'],
  [20,'' ,'','18'  ,'18' ,'57' ,'64'   ,'26' ,'19' ,'18' ,'56' ,'20' ,'57' ,'32' ,'N/A' ,'50' ,'29'],
  [21,'' ,'','2'   ,'2'  ,'64' ,'62'   ,'24' ,'2'  ,'2'  ,'67' ,'2'  ,'61' ,'15' ,'N/A' ,'69' ,'66'],
  [22,'' ,'','9'   ,'10' ,'71' ,'71'   ,'6'  ,'9'  ,'9'  ,'7'  ,'4'  ,'25' ,'12' ,'N/A' ,'62' ,'56'],
  [23,'' ,'','13'  ,'12' ,'60' ,'44'   ,'55' ,'11' ,'11' ,'4'  ,'17' ,'20' ,'41' ,'N/A' ,'70' ,'67'],
  [24,'' ,'','15'  ,'15' ,'56' ,'58'   ,'3'  ,'15' ,'15' ,'12' ,'18' ,'22' ,'30' ,'N/A' ,'59' ,'33'],
  [25,'' ,'','22'  ,'21' ,'54' ,'57'   ,'58' ,'23' ,'23' ,'27' ,'57' ,'38' ,'70' ,'N/A' ,'47' ,'29'],
  [26,'' ,'','10'  ,'9'  ,'69' ,'70'   ,'28' ,'10' ,'10' ,'19' ,'10' ,'41' ,'26' ,'N/A' ,'67' ,'51'],
  [27,'' ,'','7'   ,'7'  ,'50' ,'45'   ,'19' ,'6'  ,'6'  ,'9'  ,'13' ,'36' ,'54' ,'N/A' ,'63' ,'67'],
  [28,'' ,'','21'  ,'19' ,'34' ,'36'   ,'59' ,'22' ,'22' ,'21' ,'33' ,'30' ,'67' ,'N/A' ,'30' ,'13'],
  [29,'' ,'','31'  ,'26' ,'37' ,'40'   ,'50' ,'31' ,'31' ,'23' ,'30' ,'23' ,'47' ,'N/A' ,'46' ,'40'],
  [30,'' ,'','48'  ,'45' ,'28' ,'29'   ,'48' ,'49' ,'48' ,'53' ,'60' ,'54' ,'62' ,'N/A' ,'27' ,'1' ],
  [31,'' ,'','36'  ,'37' ,'36' ,'37'   ,'47' ,'39' ,'38' ,'63' ,'66' ,'63' ,'71' ,'N/A' ,'42' ,'20'],
  [32,'' ,'','65'  ,'68' ,'13' ,'15'   ,'70' ,'68' ,'68' ,'50' ,'65' ,'35' ,'35' ,'N/A' ,'10' ,'18'],
  [33,'' ,'','62'  ,'65' ,'15' ,'16'   ,'57' ,'66' ,'66' ,'41' ,'67' ,'26' ,'51' ,'N/A' ,'37' ,'23'],
  [34,'' ,'','61'  ,'58' ,'16' ,'14'   ,'44' ,'58' ,'58' ,'51' ,'62' ,'48' ,'53' ,'N/A' ,'9'  ,'27'],
  [35,'' ,'','54'  ,'57' ,'27' ,'28'   ,'63' ,'57' ,'56' ,'37' ,'56' ,'28' ,'50' ,'N/A' ,'35' ,'61'],
  [36,'' ,'','69'  ,'72' ,'8'  ,'10'   ,'64' ,'70' ,'70' ,'44' ,'53' ,'15' ,'3'  ,'N/A' ,'2'  ,'1' ],
  [37,'' ,'','68'  ,'70' ,'9'  ,'7'    ,'39' ,'69' ,'69' ,'55' ,'70' ,'53' ,'34' ,'N/A' ,'7'  ,'1' ],
  [38,'' ,'','52'  ,'55' ,'25' ,'23'   ,'35' ,'54' ,'53' ,'66' ,'55' ,'69' ,'55' ,'N/A' ,'72' ,'44'],
  [39,'' ,'','72'  ,'69' ,'2'  ,'2'    ,'69' ,'72' ,'72' ,'46' ,'71' ,'13' ,'17' ,'N/A' ,'6'  ,'1' ],
  [40,'' ,'','58'  ,'66' ,'33' ,'32'   ,'37' ,'62' ,'62' ,'64' ,'64' ,'67' ,'48' ,'N/A' ,'29' ,'1' ],
  [41,'' ,'','59'  ,'61' ,'31' ,'31'   ,'13' ,'61' ,'61' ,'48' ,'68' ,'43' ,'63' ,'N/A' ,'32' ,'12'],
  [42,'' ,'','29'  ,'27' ,'48' ,'60'   ,'11' ,'33' ,'33' ,'18' ,'35' ,'16' ,'58' ,'N/A' ,'53' ,'49'],
  [43,'' ,'','25'  ,'31' ,'52' ,'66'   ,'30' ,'29' ,'29' ,'10' ,'26' ,'6'  ,'40' ,'N/A' ,'48' ,'57'],
  [44,'' ,'','49'  ,'54' ,'39' ,'41'   ,'31' ,'52' ,'52' ,'38' ,'43' ,'40' ,'31' ,'N/A' ,'34' ,'39'],
  [45,'' ,'','4'   ,'4'  ,'43' ,'38'   ,'25' ,'4'  ,'4'  ,'70' ,'3'  ,'68' ,'10' ,'N/A' ,'68' ,'67'],
  [46,'' ,'','38'  ,'41' ,'46' ,'47'   ,'33' ,'40' ,'40' ,'61' ,'37' ,'60' ,'46' ,'N/A' ,'38' ,'31'],
  [47,'' ,'','12'  ,'11' ,'65' ,'59'   ,'7'  ,'13' ,'13' ,'31' ,'6'  ,'51' ,'9'  ,'N/A' ,'54' ,'62'],
  [48,'' ,'','8'   ,'5'  ,'61' ,'46'   ,'14' ,'7'  ,'7'  ,'71' ,'7'  ,'71' ,'20' ,'N/A' ,'65' ,'65'],
  [49,'' ,'','26'  ,'29' ,'58' ,'65'   ,'43' ,'30' ,'30' ,'13' ,'23' ,'7'  ,'28' ,'N/A' ,'36' ,'32'],
  [50,'' ,'','27'  ,'32' ,'63' ,'42'   ,'23' ,'26' ,'25' ,'32' ,'22' ,'42' ,'23' ,'N/A' ,'56' ,'46'],
  [51,'' ,'','17'  ,'20' ,'72' ,'68'   ,'12' ,'18' ,'19' ,'14' ,'9'  ,'24' ,'11' ,'N/A' ,'55' ,'55'],
  [52,'' ,'','20'  ,'23' ,'62' ,'54'   ,'17' ,'21' ,'21' ,'59' ,'21' ,'59' ,'24' ,'N/A' ,'66' ,'67'],
  [53,'' ,'','51'  ,'53' ,'41' ,'48'   ,'16' ,'55' ,'55' ,'39' ,'44' ,'37' ,'25' ,'N/A' ,'49' ,'43'],
  [54,'' ,'','24'  ,'30' ,'66' ,'53'   ,'15' ,'24' ,'24' ,'3'  ,'24' ,'2'  ,'43' ,'N/A' ,'58' ,'58'],
  [55,'' ,'','30'  ,'25' ,'51' ,'49'   ,'21' ,'32' ,'32' ,'58' ,'42' ,'58' ,'68' ,'N/A' ,'52' ,'34'],
  [56,'' ,'','43'  ,'52' ,'49' ,'56'   ,'36' ,'48' ,'47' ,'54' ,'38' ,'55' ,'33' ,'N/A' ,'44' ,'36'],
  [57,'' ,'','39'  ,'43' ,'32' ,'33'   ,'32' ,'41' ,'41' ,'33' ,'52' ,'32' ,'61' ,'N/A' ,'26' ,'15'],
  [58,'' ,'','14'  ,'14' ,'47' ,'55'   ,'10' ,'14' ,'14' ,'6'  ,'14' ,'18' ,'27' ,'N/A' ,'60' ,'67'],
  [59,'' ,'','57'  ,'60' ,'23' ,'26'   ,'5'  ,'59' ,'59' ,'60' ,'59' ,'62' ,'38' ,'N/A' ,'28' ,'1' ],
  [60,'' ,'','42'  ,'51' ,'35' ,'35'   ,'51' ,'45' ,'44' ,'45' ,'50' ,'49' ,'56' ,'N/A' ,'25' ,'38'],
  [61,'' ,'','67'  ,'67' ,'5'  ,'4'    ,'45' ,'64' ,'64' ,'47' ,'58' ,'39' ,'21' ,'N/A' ,'3'  ,'19'],
  [62,'' ,'','63'  ,'59' ,'4'  ,'5'    ,'65' ,'60' ,'60' ,'62' ,'63' ,'64' ,'44' ,'N/A' ,'4'  ,'54'],
  [63,'' ,'','40'  ,'38' ,'17' ,'17'   ,'1'  ,'34' ,'34' ,'65' ,'16' ,'65' ,'5'  ,'N/A' ,'16' ,'63'],
  [64,'' ,'','33'  ,'36' ,'24' ,'22'   ,'8'  ,'28' ,'28' ,'15' ,'15' ,'10' ,'7'  ,'N/A' ,'19' ,'60'],
  [65,'' ,'','56'  ,'49' ,'10' ,'11'   ,'56' ,'53' ,'54' ,'36' ,'48' ,'31' ,'36' ,'N/A' ,'14' ,'16'],
  [66,'' ,'','64'  ,'62' ,'7'  ,'8'    ,'66' ,'63' ,'63' ,'57' ,'54' ,'56' ,'22' ,'N/A' ,'23' ,'21'],
  [67,'' ,'','55'  ,'47' ,'12' ,'12'   ,'54' ,'51' ,'51' ,'52' ,'45' ,'52' ,'37' ,'N/A' ,'11' ,'50'],
  [68,'' ,'','71'  ,'71' ,'1'  ,'3'    ,'53' ,'71' ,'71' ,'42' ,'49' ,'9'  ,'1'  ,'N/A' ,'1'  ,'37'],
  [69,'' ,'','47'  ,'48' ,'20' ,'21'   ,'20' ,'46' ,'45' ,'68' ,'29' ,'72' ,'16' ,'N/A' ,'15' ,'41'],
  [70,'' ,'','35'  ,'34' ,'18' ,'19'   ,'9'  ,'25' ,'26' ,'5'  ,'8'  ,'3'  ,'2'  ,'N/A' ,'18' ,'53'],
  [71,'' ,'','44'  ,'40' ,'19' ,'20'   ,'27' ,'43' ,'42' ,'43' ,'47' ,'50' ,'57' ,'N/A' ,'39' ,'14'],
  [72,'' ,'','23'  ,'24' ,'29' ,'30'   ,'3'  ,'20' ,'20' ,'8'  ,'11' ,'12' ,'8'  ,'N/A' ,'33' ,'64'],
];

// generate map-info tables

sbData.forEach(thisBoard =>{
  if(thisBoard[0] == 0) return; //skip Ontario Average
  const mapInfoContainer = document.querySelector('.map-info');
  mapInfoContainer.innerHTML += getMapInfoTable(thisBoard[0]);
})



function getMapInfoTable(sbId){
  const thisBoard = sbData[sbId];
  const onAverage = sbData[0];
  const ranking = sbDataRankings[sbId];
  let tableCode = `
<table id="Layer_${thisBoard[0]}_info">
<tr>
  <th>
    <!--<abbr tabindex="0" title="Name of the local School Board">Board</abbr>-->
  </th>
  <th>${thisBoard[1]}</th>
  <th>Ontario Average</th>
  <th>${thisBoard[1]} Rank<br>(out of 72)</th>
</tr>
<tr>
  <td><abbr tabindex="0" title="There are four school systems in Ontario: English Public, English Catholic, French Public and French Catholic">School System</abbr></td>
  <td>${thisBoard[2]}</td>
  <td>N/A</td>
  <td>N/A</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Based on Average Daily Enrolment (ADE), which is a full-time equivalent measure of student enrolment">Enrolment</abbr></td>
  <td>${thisBoard[3]}</td>
  <td>${onAverage[3]}</td>
  <td>${ranking[3]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="School facilities’ on-the-ground capacity (excludes spaces in portable classrooms)">Spaces</abbr></td>
  <td>${thisBoard[4]}</td>
  <td>${onAverage[4]}</td>
  <td>${ranking[4]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total Ministry of Education Funding Per Student">Per-Student Funding ($)</abbr></td>
  <td>${thisBoard[5]}</td>
  <td>${onAverage[5]}</td>
  <td>${ranking[5]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total school board expense per student">Per-Student Spending ($)</abbr></td>
  <td>${thisBoard[6]}</td>
  <td>${onAverage[6]}</td>
  <td>${ranking[6]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="The share of tests administered across all disciplines and grades that were assessed as meeting or exceeding the provincial standard.">EQAO Pass Rate</abbr></td>
  <td>${thisBoard[7]}</td>
  <td>${onAverage[7]}</td>
  <td>${ranking[7]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total school board revenue">Total Revenue ($ million)</abbr></td>
  <td>${thisBoard[8]}</td>
  <td>${onAverage[8]}</td>
  <td>${ranking[8]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total school board expense">Total Expense ($ million)</abbr></td>
  <td>${thisBoard[9]}</td>
  <td>${onAverage[9]}</td>
  <td>${ranking[9]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total school board revenue less  total school board expense">Surplus ($ million)</abbr></td>
  <td>${thisBoard[10]}</td>
  <td>${onAverage[10]}</td>
  <td>${ranking[10]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Year-end accumulated surplus as of August 31, 2022. Represents the sum of surpluses and deficits over time.">Accumulated Surplus ($ million)</abbr></td>
  <td>${thisBoard[11]}</td>
  <td>${onAverage[11]}</td>
  <td>${ranking[11]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="School board surplus as a share of revenue">Surplus as Share of Revenue</abbr></td>
  <td>${thisBoard[12]}</td>
  <td>${onAverage[12]}</td>
  <td>${ranking[12]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Year-end accumulated surplus as a share of revenue as of August 31, 2022">Accumulated Surplus as Share of Revenue</abbr></td>
  <td>${thisBoard[13]}</td>
  <td>${onAverage[13]}</td>
  <td>${ranking[13]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="The distance from a school board's central office to a major urban centre (with a population of at least 200,000)">Remoteness (KM)</abbr></td>
  <td>${thisBoard[14]}</td>
  <td>${onAverage[14]}</td>
  <td>${ranking[14]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="The weighted average of distance between schools within a school board, as well as the distance between a school board's central office and each of its schools">Dispersion (KM)</abbr></td>
  <td>${thisBoard[15]}</td>
  <td>${onAverage[15]}</td>
  <td>${ranking[15]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Urban factor ranges from zero (most urban) to one (most rural), based on the average population of its schools' census divisions, weighted by enrolment">Urban Factor</abbr></td>
  <td>${thisBoard[16]}</td>
  <td>${onAverage[16]}</td>
  <td>${ranking[16]}</td>
</tr>
</table>`;
  return tableCode;
}

const sysData = [
  'ep',
  'ec',
  'fp',
  'fc',
];
sysData.forEach(thisSystem =>{
  const mapInfoContainer = document.querySelector('.map-info');
  mapInfoContainer.innerHTML += `
<table id="${thisSystem}_info">
<tr>
  <td>${thisSystem} info</td>
</tr>
</table>  
  `;
})


// * * * * * * * * * * * * * * * * * * * * * * * * * //
// set up event listeners on page load
const mapAreas = document.querySelectorAll('svg#map-svg > g:not(#base) > g');
mapAreas.forEach(area => {
  //hover map
  area.addEventListener('pointerenter', handleHoverMap);
  //tab-select map
  area.addEventListener('focus', handleHoverMap);
  //click map
  area.addEventListener('pointerdown', handleClickMap);
});
//change distrct option
const mapSelect = document.getElementById('map-select');
mapSelect.addEventListener('change', handleChangeOption);
//change school system option
const systemSelect = document.getElementById('map-system');
systemSelect.addEventListener('change', handleSystemChangeOption);

// event handlers
function handleHoverMap(event){
  const sbId = event.target.id;
  displayNone();
  displaySchoolBoard(sbId);
}
function handleClickMap(event){
  const sbId = event.target.parentElement.id;
  displayNone();
  displaySchoolBoard(sbId);
}
function handleChangeOption(event){
  const sbId = event.target.value;
  displayNone();
  displaySchoolBoard(sbId);
}
function handleSystemChangeOption(event){
  const systemId = event.target.value;
  console.log('systemId',systemId);
  displayNone();
  displaySystem(systemId);
}

// reset display
displayNone();
displaySystem('ep');




// * * * * * * * * * * * * * * * * * * * * * * * * * //

// hide any displayed info/highlighted SB
function displayNone(){
  //force de-focus
  document.activeElement.blur();
  //district select
  const mapSelect = document.getElementById('map-select');
  mapSelect.value = '';
  //district info
  const mapInfos = document.querySelectorAll('.map-info > *');
  mapInfos.forEach(info => { info.classList.remove('visible'); });
  //select#map-system
  const mapSystemSelect = document.getElementById('map-system');
  mapSystemSelect.value = '';
  //map-svg
  const mapGs = document.querySelectorAll('#map-svg > g:not(#base)');
  mapGs.forEach(g => { 
    g.classList.remove('visible');
    const districts = g.querySelectorAll('g');
    districts.forEach(d => { d.classList.remove('highlighted'); });
   });
}





// Display selected school board + info
function displaySchoolBoard(sbId = null){
  console.log('Display',sbId);
  
  if(sbId == null){ 
    console.log('sbId error:',sbId);
    return; 
  }
  
  // #map-select
  const mapSelect = document.getElementById('map-select');
  mapSelect.value = sbId;
  
  // #map-info
  const mapInfo = document.getElementById(sbId + '_info');
  console.log('make visible mapInfo:',mapInfo);
  mapInfo.classList.add('visible');
  
  // #map-svg
  const districtG = document.getElementById(sbId);
  districtG.classList.add('highlighted');
  const systemG = districtG.parentElement;
  systemG.classList.add('visible');
  
  displaySystem(systemG.id);
}



function displaySystem(systemId = 'ep'){
  console.log('Display',systemId);
  
  if(systemId == null){ 
    console.log('systemId error:',systemId);
    return; 
  }
  
  // #map-svg
  const systemG = document.getElementById(systemId);
  systemG.classList.add('visible');
  
  // #map-system
  const selectId = systemId + '-system';
  // div#map-system
  const mapSystem = document.querySelector('div#map-system > #' + selectId);
  if(mapSystem) mapSystem.classList.add('visible');
  // select#map-system
  const systemSelect = document.querySelector('select#map-system');
  if(systemSelect) systemSelect.value = systemG.id;

  //district select
  const mapSelect = document.getElementById('map-select');
  if(mapSelect.value == ''){
    console.log('no district selected');
    //district info
    // const mapInfos = document.querySelectorAll('.map-info > *');
    // mapInfos.forEach(info => { info.classList.remove('visible'); });
    const mapInfo = document.getElementById(systemId + '_info');
    console.log('systemId:',systemId);
    console.log('make visible mapInfo:',mapInfo);
    mapInfo.classList.add('visible');
  }
}

