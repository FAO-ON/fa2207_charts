//all data
const sbData = [
  //id,School Board,                               School System,           Enrolment,  Spaces,  PS Funding, PS Revenue, PS Spending, EQAO,    Revenue, Expense,  Surplus, YEA Surplus, as Share,  YEA as Share,  Remoteness,  Dispersion,  Urban Factor
  [0, 'Moyenne de l’Ontario',                      'Moyenne de l’Ontario',  '27 746',  '32 279',  '13 364',   '14 501',   '14 426',  '67,7 %',  '402',    '400',      '2',         '91',     '0,5 %',   '22,6 %',  'N/A',    '29,4',     '0,6' ],
  [1, 'DSB Ontario North East',                    'Public anglais',        '6 562',   '13 434',  '19 559',   '21 628',   '21 462',  '46,4 %',  '142'    ,'141'      ,'1'         ,'37'     ,'0,8 %',   '26,4 %',  '659',    '53,89',    '1,0' ],
  [2, 'Algoma DSB',                                'Public anglais',        '9 762',   '15 269',  '16 757',   '19 614',   '19 329',  '56,0 %',  '191'    ,'189'      ,'3'         ,'27'     ,'1,5 %',   '14,0 %',  '628',    '37,17',    '0,8' ],
  [3, 'Rainbow DSB',                               'Public anglais',        '12 987',  '18 367',  '15 926',   '17 816',   '17 671',  '62,7 %',  '231'    ,'229'      ,'2'         ,'33'     ,'0,8 %',   '14,3 %',  '363',    '27,2',     '0,3' ],
  [4, 'Near North DSB',                            'Public anglais',        '9 560',   '13 711',  '16 549',   '18 137',   '17 688',  '52,2 %',  '173'    ,'169'      ,'4'         ,'27'     ,'2,5 %',   '15,6 %',  '313',    '25,79',    '0,9' ],
  [5, 'Keewatin-Patricia DSB',                     'Public anglais',        '4 226',   '7 942',   '21 324',   '25 771',   '24 741',  '55,0 %',  '109'    ,'105'      ,'4'         ,'40'     ,'4,0 %',   '36,5 %',  '1 709',  '95,84',    '1,0' ],
  [6, 'Rainy River DSB',                           'Public anglais',        '2 034',   '4 358',   '23 890',   '29 030',   '27 820',  '51,9 %',  '59'     ,'57'       ,'2'         ,'27'     ,'4,2 %',   '45,6 %',  '1 584',  '49,85',    '1,0' ],
  [7, 'Lakehead DSB',                              'Public anglais',        '8 560',   '11 673',  '15 369',   '17 967',   '16 981',  '59,5 %',  '154'    ,'145'      ,'8'         ,'7'      ,'5,5 %',   '4,6 %',   '1 257',  '25,19',    '0,6' ],
  [8, 'Superior-Greenstone DSB',                   'Public anglais',        '1 189',   '4 567',   '32 524',   '41 880',   '41 406',  '43,9 %',  '50'     ,'49'       ,'1'         ,'13'     ,'1,1 %',   '26,6 %',  '967',    '72,61',    '1,0' ],
  [9, 'Bluewater DSB',                             'Public anglais',        '17 273',  '20 513',  '13 550',   '14 154',   '13 844',  '59,0 %',  '244'    ,'239'      ,'5'         ,'42'     ,'2,2 %',   '17,2 %',  '< 151',   '21,65',    '1,0' ],
  [10,'Avon Maitland DSB',                         'Public anglais',        '14 758',  '20 017',  '14 053',   '15 138',   '14 845',  '65,5 %',  '223'    ,'219'      ,'4'         ,'21'     ,'1,9 %',   '9,5 %',   '< 151',   '14,96',    '1,0' ],
  [11,'Greater Essex County DSB',                  'Public anglais',        '35 845',  '41 728',  '12 781',   '13 518',   '13 419',  '62,3 %',  '485'    ,'481'      ,'4'         ,'51'     ,'0,7 %',   '10,6 %',  '< 151',   '6,82',     '0,5' ],
  [12,'Lambton Kent DSB',                          'Public anglais',        '21 109',  '30 161',  '13 359',   '14 852',   '14 466',  '56,1 %',  '314'    ,'305'      ,'8'         ,'52'     ,'2,6 %',   '16,5 %',  '< 151',   '15,71',    '0,7' ],
  [13,'Thames Valley DSB',                         'Public anglais',        '80 220',  '86 692',  '12 664',   '13 261',   '13 363',  '61,5 %',  '1 064'  ,'1 072'    ,'(8)'       ,'104'    ,'- 0,8 %',  '9,7 %',   '< 151',   '9,03',     '0,5' ],
  [14,'Toronto DSB',                               'Public anglais',        '230 847', '294 215', '13 428',   '14 872',   '15 253',  '69,6 %',  '3 433'  ,'3 521'    ,'(88)'      ,'(19)'   ,'- 2,6 %',   '- 0,6 %', '< 151',   '3,85',     '0,0'   ],
  [15,'Durham DSB',                                'Public anglais',        '74 094',  '70 847',  '11 991',   '12 766',   '12 617',  '68,3 %',  '946'    ,'935'      ,'11'        ,'312'    ,'1,2 %',   '32,9 %',  '< 151',   '5,54',     '0,5' ],
  [16,'Kawartha Pine Ridge DSB',                   'Public anglais',        '34 177',  '37 606',  '12 911',   '13 925',   '13 837',  '64,3 %',  '476'    ,'473'      ,'3'         ,'53'     ,'0,6 %',   '11,0 %',  '< 151',   '13,94',    '0,8' ],
  [17,'Trillium Lakelands DSB',                    'Public anglais',        '16 735',  '23 351',  '13 796',   '14 346',   '13 950',  '61,1 %',  '240'    ,'233'      ,'7'         ,'23'     ,'2,8 %',   '9,7 %',   '< 151',   '26,8',     '0,9' ],
  [18,'York Region DSB',                           'Public anglais',        '124 808', '133 999', '12 354',   '13 325',   '13 120',  '77,4 %',  '1 663'  ,'1 638'    ,'26'        ,'956'    ,'1,5 %',   '57,5 %',  '< 151',   '6,28',     '0,2' ],
  [19,'Simcoe County DSB',                         'Public anglais',        '54 367',  '50 664',  '12 346',   '13 211',   '12 813',  '63,7 %',  '718'    ,'697'      ,'22'        ,'152'    ,'3,0 %',   '21,1 %',  '< 151',   '11,6',     '0,8' ],
  [20,'Upper Grand DSB',                           'Public anglais',        '34 936',  '37 330',  '12 757',   '13 248',   '13 247',  '67,7 %',  '463'    ,'463'      ,'0'         ,'95'     ,'0,0 %',   '20,5 %',  '< 151',   '9,72',     '0,8' ],
  [21,'Peel DSB',                                  'Public anglais',        '150 607', '177 212', '12 512',   '13 368',   '13 389',  '68,1 %',  '2 013'  ,'2 016'    ,'(3)'       ,'639'    ,'- 0,2 %',  '31,7 %',  '< 151',   '4,43',     '0,0' ],
  [22,'Halton DSB',                                'Public anglais',        '65 803',  '66 052',  '11 920',   '12 943',   '12 726',  '76,3 %',  '852'    ,'837'      ,'14'        ,'331'    ,'1,7 %',   '38,9 %',  '< 151',   '5,65',     '0,3' ],
  [23,'Hamilton-Wentworth DSB',                    'Public anglais',        '49 712',  '53 020',  '12 660',   '14 590',   '14 273',  '57,5 %',  '725'    ,'710'      ,'16'        ,'120'    ,'2,2 %',   '16,6 %',  '< 151',   '4',        '0,0'   ],
  [24,'DSB of Niagara',                            'Public anglais',        '39 265',  '45 121',  '12 763',   '13 935',   '13 668',  '77,3 %',  '547'    ,'537'      ,'11'        ,'114'    ,'1,9 %',   '20,8 %',  '< 151',   '6,57',     '0,7' ],
  [25,'Grand Erie DSB',                            'Public anglais',        '25 761',  '33 003',  '12 911',   '13 873',   '13 723',  '56,3 %',  '357'    ,'354'      ,'4'         ,'15'     ,'1,1 %',   '4,1 %',   '< 151',   '10,48',    '0,8' ],
  [26,'Waterloo Region DSB',                       'Public anglais',        '64 153',  '66 734',  '12 071',   '12 880',   '12 771',  '67,2 %',  '826'    ,'819'      ,'7'         ,'185'    ,'0,8 %',   '22,3 %',  '< 151',   '4,66',     '0,4' ],
  [27,'Ottawa-Carleton DSB',                       'Public anglais',        '73 367',  '80 505',  '12 998',   '14 382',   '14 224',  '69,1 %',  '1 055'  ,'1 044'    ,'12'        ,'142'    ,'1,1 %',   '13,5 %',  '< 151',   '5,57',     '0,0'   ],
  [28,'Upper Canada DSB',                          'Public anglais',        '26 125',  '35 689',  '14 733',   '15 287',   '15 075',  '56,2 %',  '399'    ,'394'      ,'6'         ,'38'     ,'1,4 %',   '9,5 %',   '< 151',   '22,15',    '1,0' ],
  [29,'Limestone DSB',                             'Public anglais',        '19 371',  '24 007',  '14 103',   '15 104',   '14 828',  '59,4 %',  '293'    ,'287'      ,'5'         ,'43'     ,'1,8 %',   '14,8 %',  '165',    '11,36',    '0,7' ],
  [30,'Renfrew County DSB',                        'Public anglais',        '8 895',   '13 608',  '15 618',   '16 460',   '16 441',  '59,8 %',  '146'    ,'146'      ,'0'         ,'14'     ,'0,1 %',   '9,8 %',   '< 151',   '23,64',    '1,0' ],
  [31,'Hastings and Prince Edward DSB',            'Public anglais',        '14 801',  '19 085',  '14 283',   '14 964',   '15 017',  '60,4 %',  '221'    ,'222'      ,'(1)'       ,'9'      ,'- 0,4 %',  '4,0 %',   '167',    '14,26',    '0,9' ],
  [32,'Northeastern Catholic DSB',                 'Catholique anglais',    '2 232',   '3 460',   '20 295',   '21 313',   '21 073',  '49,0 %',  '48'     ,'47'       ,'1'         ,'9'      ,'1,1 %',   '19,8 %',  '656',    '62,25',    '0,9' ],
  [33,'Nipissing-Parry Sound Catholic DSB',        'Catholique anglais',    '2 706',   '4 187',   '18 826',   '20 104',   '19 788',  '56,7 %',  '54'     ,'54'       ,'1'         ,'8'      ,'1,6 %',   '14,1 %',  '312',    '17,74',    '0,9' ],
  [34,'Huron-Superior Catholic DSB',               'Catholique anglais',    '4 016',   '6 856',   '18 334',   '21 322',   '21 217',  '61,2 %',  '86'     ,'85'       ,'0'         ,'12'     ,'0,5 %',   '13,9 %',  '627',    '65,53',    '0,8' ],
  [35,'Sudbury Catholic DSB',                      'Catholique anglais',    '6 325',   '7 829',   '15 731',   '16 963',   '16 710',  '54,5 %',  '107'    ,'106'      ,'2'         ,'15'     ,'1,5 %',   '14,2 %',  '365',    '18,52',    '0,2' ],
  [36,'Northwest Catholic DSB',                    'Catholique anglais',    '1 189',   '1 685',   '22 939',   '24 008',   '23 396',  '54,4 %',  '29'     ,'28'       ,'1'         ,'17'     ,'2,5 %',   '59,1 %',  '1 587',  '128,72',   '1,0' ],
  [37,'Kenora Catholic DSB',                       'Catholique anglais',    '1 233',   '1 805',   '22 874',   '26 832',   '26 773',  '63,3 %',  '33'     ,'33'       ,'0'         ,'7'      ,'0,2 %',   '20,3 %',  '1 709',  '83,8',     '1,0' ],
  [38,'Thunder Bay Catholic DSB',                  'Catholique anglais',    '6 905',   '8 867',   '16 195',   '17 403',   '17 746',  '64,0 %',  '120'    ,'123'      ,'(2)'       ,'15'     ,'- 2,0 %',  '12,9 %',  '1 258',  '3,76',     '0,5' ],
  [39,'Superior North Catholic DSB',               'Catholique anglais',    '610',     '1 827',   '33 671',   '39 448',   '38 370',  '49,3 %',  '24'     ,'23'       ,'1'         ,'6'      ,'2,7 %',   '26,9 %',  '1 038',  '90,65',    '1,0' ],
  [40,'Bruce-Grey Catholic DSB',                   'Catholique anglais',    '4 598',   '4 090',   '14 887',   '15 800',   '15 985',  '63,9 %',  '73'     ,'74'       ,'(1)'       ,'11'     ,'- 1,2 %',  '14,7 %',  '< 151',   '22,44',    '1,0' ],
  [41,'Huron Perth Catholic DSB',                  'Catholique anglais',    '4 576',   '5 330',   '15 294',   '16 202',   '16 069',  '71,6 %',  '74'     ,'74'       ,'1'         ,'7'      ,'0,8 %',   '9,8 %',   '< 151',   '20,73',    '1,0' ],
  [42,'Windsor-Essex Catholic DSB',                'Catholique anglais',    '20 465',  '23 510',  '13 064',   '13 842',   '13 490',  '73,8 %',  '283'    ,'276'      ,'7'         ,'34'     ,'2,5 %',   '12,0 %',  '< 151',   '7,66',     '0,4' ],
  [43,'London District Catholic School Board',     'Catholique anglais',    '22 502',  '22 146',  '12 914',   '13 669',   '13 167',  '64,7 %',  '308'    ,'296'      ,'11'        ,'52'     ,'3,7 %',   '16,9 %',  '< 151',   '10,41',    '0,3' ],
  [44,'St. Clair Catholic DSB',                    'Catholique anglais',    '8 629',   '9 494',   '13 809',   '14 924',   '14 775',  '64,6 %',  '129'    ,'128'      ,'1'         ,'27'     ,'1,0 %',   '20,7 %',  '< 151',   '19,85',    '0,7' ],
  [45,'Toronto Catholic DSB',                      'Catholique anglais',    '84 032',  '96 466',  '13 532',   '14 739',   '14 996',  '68,0 %',  '1 239'  ,'1 260'    ,'(22)'      ,'494'    ,'- 1,7 %',  '39,9 %',  '< 151',   '4,46',     '0,0'   ],
  [46,'Peterborough V N C Catholic DSB',           'Catholique anglais',    '14 666',  '15 779',  '13 351',   '14 195',   '14 214',  '64,4 %',  '208'    ,'208'      ,'(0)'       ,'32'     ,'- 0,1 %',  '15,5 %',  '< 151',   '16,08',    '0,8' ],
  [47,'York Catholic DSB',                         'Catholique anglais',    '50 315',  '59 031',  '12 503',   '13 705',   '13 653',  '76,1 %',  '690'    ,'687'      ,'3'         ,'278'    ,'0,4 %',   '40,4 %',  '< 151',   '7,11',     '0,2' ],
  [48,'Dufferin-Peel Catholic DSB',                'Catholique anglais',    '73 312',  '88 814',  '12 639',   '13 801',   '14 216',  '70,5 %',  '1 012'  ,'1 042'    ,'(30)'      ,'251'    ,'- 3,0 %',  '24,8 %',  '< 151',   '4,91',     '0,1' ],
  [49,'Simcoe Muskoka Catholic DSB',               'Catholique anglais',    '22 172',  '23 343',  '12 672',   '13 623',   '13 206',  '61,2 %',  '302'    ,'293'      ,'9'         ,'64'     ,'3,1 %',   '21,2 %',  '< 151',   '17,76',    '0,7' ],
  [50,'Durham Catholic DSB',                       'Catholique anglais',    '21 459',  '20 716',  '12 545',   '14 650',   '14 529',  '68,2 %',  '314'    ,'312'      ,'3'         ,'73'     ,'0,8 %',   '23,1 %',  '< 151',   '6,94',     '0,5' ],
  [51,'Halton Catholic DSB',                       'Catholique anglais',    '35 844',  '34 095',  '11 729',   '13 122',   '12 883',  '73,5 %',  '470'    ,'462'      ,'9'         ,'187'    ,'1,8 %',   '39,8 %',  '< 151',   '7,02',     '0,3' ],
  [52,'Hamilton-Wentworth Catholic DSB',           'Catholique anglais',    '29 263',  '30 063',  '12 638',   '13 791',   '13 797',  '69,9 %',  '404'    ,'404'      ,'(0)'       ,'92'     ,'0,0 %',   '22,9 %',  '< 151',   '4,73',     '0,0'   ],
  [53,'Wellington Catholic DSB',                   'Catholique anglais',    '8 106',   '9 752',   '13 730',   '14 317',   '14 161',  '70,1 %',  '116'    ,'115'      ,'1'         ,'26'     ,'1,1 %',   '22,5 %',  '< 151',   '10,38',    '0,5' ],
  [54,'Waterloo Catholic DSB',                     'Catholique anglais',    '24 231',  '22 622',  '12 419',   '14 516',   '13 823',  '70,4 %',  '352'    ,'335'      ,'17'        ,'55'     ,'4,8 %',   '15,8 %',  '< 151',   '6,78',     '0,3' ],
  [55,'Niagara Catholic DSB',                      'Catholique anglais',    '20 385',  '24 142',  '12 991',   '13 988',   '13 990',  '68,4 %',  '285'    ,'285'      ,'(0)'       ,'27'     ,'0,0 %',   '9,4 %',   '< 151',   '8,4',      '0,7' ],
  [56,'Brant Haldimand Norfolk Catholic DSB',      'Catholique anglais',    '10 964',  '11 158',  '13 040',   '13 780',   '13 772',  '64,0 %',  '151'    ,'151'      ,'0'         ,'31'     ,'0,1 %',   '20,5 %',  '< 151',   '13,9',     '0,7' ],
  [57,'Catholic DSB of Eastern Ontario',           'Catholique anglais',    '13 205',  '14 425',  '15 226',   '15 693',   '15 503',  '64,5 %',  '207'    ,'205'      ,'3'         ,'20'     ,'1,2 %',   '9,8 %',   '< 151',   '23,69',    '1,0' ],
  [58,'Ottawa Catholic DSB',                       'Catholique anglais',    '44 713',  '46 290',  '13 120',   '14 121',   '13 790',  '74,3 %',  '631'    ,'617'      ,'15'        ,'140'    ,'2,3 %',   '22,2 %',  '< 151',   '6,38',     '0,0'   ],
  [59,'Renfrew County Catholic DSB',               'Catholique anglais',    '4 742',   '6 131',   '16 469',   '17 339',   '17 384',  '77,2 %',  '82'     ,'82'       ,'(0)'       ,'15'     ,'- 0,3 %',  '17,7 %',  '< 151',   '23,28',    '1,0' ],
  [60,'Algonquin and Lakeshore Catholic DSB',      'Catholique anglais',    '11 344',  '11 371',  '14 425',   '15 262',   '15 200',  '59,1 %',  '173'    ,'172'      ,'1'         ,'22'     ,'0,4 %',   '12,5 %',  '181',    '24,49',    '0,7' ],
  [61,'CSP du Nord-Est de l’Ontario',              'Public français',       '2 024',   '3 719',   '27 268',   '29 870',   '29 569',  '61,1 %',  '60'     ,'60'       ,'1'         ,'15'     ,'1,0 %',   '24,5 %',  '313',    '123,84',   '0,9' ],
  [62,'CSP du Grand Nord de l’Ontario',            'Public français',       '2 629',   '6 198',   '27 517',   '29 013',   '29 151',  '53,0 %',  '76'     ,'77'       ,'(0)'       ,'12'     ,'- 0,5 %',  '15,6 %',  '363',    '103,5',    '0,3' ],
  [63,'CS Viamonde',                               'Public français',       '13 105',  '18 674',  '18 175',   '19 300',   '19 404',  '78,3 %',  '253'    ,'254'      ,'(1)'       ,'137'    ,'- 0,5 %',  '54,2 %',  '< 151',   '40,84',    '0,2' ],
  [64,'CÉP de l’Est de l’Ontario',                 'Public français',       '16 830',  '19 586',  '16 465',   '18 328',   '17 820',  '75,7 %',  '308'    ,'300'      ,'9'         ,'137'    ,'2,8 %',   '44,5 %',  '< 151',   '29,83',    '0,2' ],
  [65,'CSD catholique des Grandes Rivières',       'Catholique français',   '5 494',   '11 745',  '21 514',   '22 553',   '22 261',  '57,3 %',  '124'    ,'122'      ,'2'         ,'23'     ,'1,3 %',   '18,7 %',  '654',    '49,47',    '1,0' ],
  [66,'CSD catholique Franco-Nord',                'Catholique français',   '2 535',   '4 913',   '23 563',   '25 859',   '25 848',  '52,6 %',  '66'     ,'66'       ,'0'         ,'16'     ,'0,0 %',   '24,4 %',  '312',    '25,21',    '0,9' ],
  [67,'CSD catholique du Nouvel-Ontario',          'Catholique français',   '5 986',   '12 726',  '20 327',   '21 786',   '21 722',  '58,2 %',  '130'    ,'130'      ,'0'         ,'24'     ,'0,3 %',   '18,4 %',  '364',    '60,34',    '0,4' ],
  [68,'CSD catholique des Aurores boréales',       'Catholique français',   '815',     '1 725',   '35 192',   '33 357',   '32 376',  '58,6 %',  '27'     ,'26'       ,'1'         ,'23'     ,'2,9 %',   '83,4 %',  '1 255',  '188,95',   '0,7' ],
  [69,'CS catholique Providence',                  'Catholique français',   '9 465',   '12 095',  '17 137',   '17 640',   '18 209',  '69,0 %',  '167'    ,'172'      ,'(5)'       ,'50'     ,'- 3,2 %',  '29,9 %',  '< 151',   '41,42',    '0,6' ],
  [70,'CS catholique MonAvenir',                   'Catholique français',   '16 287',  '20 273',  '17 477',   '19 769',   '18 844',  '75,7 %',  '322'    ,'307'      ,'15'        ,'192'    ,'4,7 %',   '59,6 %',  '< 151',   '32,4',     '0,3' ],
  [71,'CSD catholique de l’Est ontarien',          'Catholique français',   '10 410',  '17 893',  '17 468',   '18 313',   '18 241',  '67,5 %',  '191'    ,'190'      ,'1'         ,'23'     ,'0,4 %',   '12,1 %',  '< 151',   '15,97',    '1,0' ],
  [72,'CSD catholique du Centre-Est de l’Ontario', 'Catholique français',   '25 510',  '28 762',  '15 507',   '16 741',   '16 281',  '77,3 %',  '427'    ,'415'      ,'12'        ,'176'    ,'2,7 %',   '41,2 %',  '< 151',   '20,45',    '0,1' ],
];

//rankings data
const sbDataRankings = [
  [0,'','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,'','',53,46,14,13,13,71,50,50,40,34,45,19,"N/A",12,17],
  [2,'','',45,42,21,18,18,61,42,43,30,41,29,52,"N/A",17,26],
  [3,'','',41,39,26,24,25,40,37,37,35,36,44,49,"N/A",20,52],
  [4,'','',46,44,22,22,24,67,44,46,26,39,17,45,"N/A",22,22],
  [5,'','',60,56,11,9,9,62,56,57,24,32,5,13,"N/A",5,1],
  [6,'','',66,64,6,5,6,68,65,65,34,40,4,6,"N/A",13,1],
  [7,'','',50,50,30,23,27,49,47,49,16,69,1,69,"N/A",24,42],
  [8,'','',70,63,3,1,1,72,67,67,49,61,34,18,"N/A",8,1],
  [9,'','',32,33,42,50,51,52,35,35,22,31,19,39,"N/A",31,1],
  [10,'','',37,35,38,36,39,29,38,39,25,51,21,66,"N/A",41,11],
  [11,'','',16,16,55,63,61,41,16,16,28,28,46,60,"N/A",57,47],
  [12,'','',28,22,45,41,43,60,27,27,17,27,14,42,"N/A",40,35],
  [13,'','',5,6,59,66,63,42,5,5,69,19,66,64,"N/A",51,48],
  [14,'','',1,1,44,40,34,18,1,1,72,72,70,72,"N/A",71,67],
  [15,'','',6,8,70,72,72,22,8,8,11,5,33,14,"N/A",64,45],
  [16,'','',19,17,53,54,52,34,17,17,29,25,47,59,"N/A",43,25],
  [17,'','',34,28,40,47,50,46,36,36,20,46,11,65,"N/A",21,24],
  [18,'','',3,3,67,65,67,2,3,3,1,1,27,4,"N/A",61,59],
  [19,'','',11,13,68,68,69,38,12,12,2,12,8,29,"N/A",45,28],
  [20,'','',18,18,57,67,64,26,19,18,56,20,57,32,"N/A",50,29],
  [21,'','',2,2,64,64,62,24,2,2,67,2,61,15,"N/A",69,66],
  [22,'','',9,10,71,70,71,6,9,9,7,4,25,12,"N/A",62,56],
  [23,'','',13,12,60,44,44,55,11,11,4,17,20,41,"N/A",70,67],
  [24,'','',15,15,56,53,58,3,15,15,12,18,22,30,"N/A",59,33],
  [25,'','',22,21,54,55,57,58,23,23,27,57,38,70,"N/A",47,29],
  [26,'','',10,9,69,71,70,28,10,10,19,10,41,26,"N/A",67,51],
  [27,'','',7,7,50,46,45,19,6,6,9,13,36,54,"N/A",63,67],
  [28,'','',21,19,34,34,36,59,22,22,21,33,30,67,"N/A",30,13],
  [29,'','',31,26,37,37,40,50,31,31,23,30,23,47,"N/A",46,40],
  [30,'','',48,45,28,30,29,48,49,48,53,60,54,62,"N/A",27,1],
  [31,'','',36,37,36,38,37,47,39,38,63,66,63,71,"N/A",42,20],
  [32,'','',65,68,13,15,15,70,68,68,50,65,35,35,"N/A",10,18],
  [33,'','',62,65,15,16,16,57,66,66,41,67,26,51,"N/A",37,23],
  [34,'','',61,58,16,14,14,44,58,58,51,62,48,53,"N/A",9,27],
  [35,'','',54,57,27,28,28,63,57,56,37,56,28,50,"N/A",35,61],
  [36,'','',69,72,8,10,10,64,70,70,44,53,15,3,"N/A",2,1],
  [37,'','',68,70,9,7,7,39,69,69,55,70,53,34,"N/A",7,1],
  [38,'','',52,55,25,26,23,35,54,53,66,55,69,55,"N/A",72,44],
  [39,'','',72,69,2,2,2,69,72,72,46,71,13,17,"N/A",6,1],
  [40,'','',58,66,33,32,32,37,62,62,64,64,67,48,"N/A",29,1],
  [41,'','',59,61,31,31,31,13,61,61,48,68,43,63,"N/A",32,12],
  [42,'','',29,27,48,56,60,11,33,33,18,35,16,58,"N/A",53,49],
  [43,'','',25,31,52,61,66,30,29,29,10,26,6,40,"N/A",48,57],
  [44,'','',49,54,39,39,41,31,52,52,38,43,40,31,"N/A",34,39],
  [45,'','',4,4,43,42,38,25,4,4,70,3,68,10,"N/A",68,67],
  [46,'','',38,41,46,49,47,33,40,40,61,37,60,46,"N/A",38,31],
  [47,'','',12,11,65,60,59,7,13,13,31,6,51,9,"N/A",54,62],
  [48,'','',8,5,61,57,46,14,7,7,71,7,71,20,"N/A",65,65],
  [49,'','',26,29,58,62,65,43,30,30,13,23,7,28,"N/A",36,32],
  [50,'','',27,32,63,43,42,23,26,25,32,22,42,23,"N/A",56,46],
  [51,'','',17,20,72,69,68,12,18,19,14,9,24,11,"N/A",55,55],
  [52,'','',20,23,62,58,54,17,21,21,59,21,59,24,"N/A",66,67],
  [53,'','',51,53,41,48,48,16,55,55,39,44,37,25,"N/A",49,43],
  [54,'','',24,30,66,45,53,15,24,24,3,24,2,43,"N/A",58,58],
  [55,'','',30,25,51,52,49,21,32,32,58,42,58,68,"N/A",52,34],
  [56,'','',43,52,49,59,56,36,48,47,54,38,55,33,"N/A",44,36],
  [57,'','',39,43,32,33,33,32,41,41,33,52,32,61,"N/A",26,15],
  [58,'','',14,14,47,51,55,10,14,14,6,14,18,27,"N/A",60,67],
  [59,'','',57,60,23,27,26,5,59,59,60,59,62,38,"N/A",28,1],
  [60,'','',42,51,35,35,35,51,45,44,45,50,49,56,"N/A",25,38],
  [61,'','',67,67,5,4,4,45,64,64,47,58,39,21,"N/A",3,19],
  [62,'','',63,59,4,6,5,65,60,60,62,63,64,44,"N/A",4,54],
  [63,'','',40,38,17,19,17,1,34,34,65,16,65,5,"N/A",16,63],
  [64,'','',33,36,24,20,22,8,28,28,15,15,10,7,"N/A",19,60],
  [65,'','',56,49,10,11,11,56,53,54,36,48,31,36,"N/A",14,16],
  [66,'','',64,62,7,8,8,66,63,63,57,54,56,22,"N/A",23,21],
  [67,'','',55,47,12,12,12,54,51,51,52,45,52,37,"N/A",11,50],
  [68,'','',71,71,1,3,3,53,71,71,42,49,9,1,"N/A",1,37],
  [69,'','',47,48,20,25,21,20,46,45,68,29,72,16,"N/A",15,41],
  [70,'','',35,34,18,17,19,9,25,26,5,8,3,2,"N/A",18,53],
  [71,'','',44,40,19,21,20,27,43,42,43,47,50,57,"N/A",39,14],
  [72,'','',23,24,29,29,30,3,20,20,8,11,12,8,"N/A",33,64],
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
  <th></th>
  <th>${thisBoard[1]}</th>
  <th>Moyenne de l’Ontario</th>
  <th>Classement (sur&nbsp;72)</th>
</tr>
<tr>
  <td>Système scolaire</td>
  <td>${thisBoard[2]}</td>
  <td>N/A</td>
  <td>N/A</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Effectif quotidien moyen qui est une mesure équivalent plein temps des effectifs d’élèves">Effectif</abbr></td>
  <td>${thisBoard[3]}</td>
  <td>${onAverage[3]}</td>
  <td>${ranking[3]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Capacité physique des établissements scolaires (à l’exclusion des places en classes mobiles)">Places</abbr></td>
  <td>${thisBoard[4]}</td>
  <td>${onAverage[4]}</td>
  <td>${ranking[4]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Financement total du ministère de l’Éducation par élève, année scolaire 2021-2022">Financement par élève (en dollars)</abbr></td>
  <td>${thisBoard[5]}</td>
  <td>${onAverage[5]}</td>
  <td>${ranking[5]}</td>
</tr>
<tr>
<td><abbr tabindex="0" title="Revenus totaux des conseils scolaires par élève, année scolaire 2021-2022">Revenu par élève (en dollars)</abbr></td>
  <td>${thisBoard[6]}</td>
  <td>${onAverage[6]}</td>
  <td>${ranking[6]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Dépenses totales des conseils scolaires par élève, année scolaire 2021-2022">Dépenses par élève (en dollars)</abbr></td>
  <td>${thisBoard[7]}</td>
  <td>${onAverage[7]}</td>
  <td>${ranking[7]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Proportion de tests OQRE réalisés pour l’ensemble des disciplines et niveaux scolaires et qui ont été évalués comme atteignant ou dépassant le niveau de référence de la province">Taux de réussite OQRE</abbr></td>
  <td>${thisBoard[8]}</td>
  <td>${onAverage[8]}</td>
  <td>${ranking[8]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Revenus totaux des conseils scolaires, année scolaire 2021-2022">Revenu total (en millions de dollars)</abbr></td>
  <td>${thisBoard[9]}</td>
  <td>${onAverage[9]}</td>
  <td>${ranking[9]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Dépenses totales des conseils scolaires, année scolaire 2021-2022">Dépenses totales (en millions de dollars)</abbr></td>
  <td>${thisBoard[10]}</td>
  <td>${onAverage[10]}</td>
  <td>${ranking[10]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Revenus totaux des conseils scolaires moins les dépenses totales des conseils scolaires, année scolaire 2021-2022 ">Excédent/(déficit) (en millions de dollars)</abbr></td>
  <td>${thisBoard[11]}</td>
  <td>${onAverage[11]}</td>
  <td>${ranking[11]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Excédent accumulé en fin d’année/(déficit), au 31 août 2022. Représente la somme des excédents et des déficits sur la durée">Excédent cumulé/(déficit) (en millions de dollars)</abbr></td>
  <td>${thisBoard[12]}</td>
  <td>${onAverage[12]}</td>
  <td>${ranking[12]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Excédent du conseil scolaire/(déficit) en proportion de ses revenus totaux, année scolaire 2021-2022">Excédent/(déficit) en proportion des revenus</abbr></td>
  <td>${thisBoard[13]}</td>
  <td>${onAverage[13]}</td>
  <td>${ranking[13]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Excédent cumulé en fin d’année/(déficit) en proportion des revenus, au 31 août 2022">Excédent cumulé/(déficit) en proportion des revenus</abbr></td>
  <td>${thisBoard[14]}</td>
  <td>${onAverage[14]}</td>
  <td>${ranking[14]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Distance entre le bureau central d’un conseil scolaire et un centre urbain de grande taille (avec une population d’au moins 200 000 habitants)">Isolement (en km)</abbr></td>
  <td>${thisBoard[15]}</td>
  <td>${onAverage[15]}</td>
  <td>${ranking[15]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Distance moyenne pondérée entre les écoles d’un conseil scolaire, ainsi que la distance entre le bureau central d’un conseil scolaire et chacune de ses écoles">Dispersion (en km)</abbr></td>
  <td>${parseFloat(thisBoard[16]).toFixed(1)}</td>
  <td>${parseFloat(onAverage[16]).toFixed(1)}</td>
  <td>${ranking[16]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Facteur allant de 0 (le plus urbain) à 1 (le plus rural), selon la population moyenne des divisions de recensement des écoles, pondérée par les effectifs">Facteur urbain</abbr></td>
  <td>${thisBoard[17]}</td>
  <td>${onAverage[17]}</td>
  <td>${ranking[17]}</td>
</tr>
</table>`;
  return tableCode;
}
const sysData = [
  //id,  System,               Enrolment,    Spaces,       Per-student Funding,  Per-student Revenue,  Per-student Spending,  EQAO,        Total Revenue,  Total Expense,  Surplus,  Year-end Surplus,  Surplus as Share of Revenue,  Year-end Surplus as Share of Revenue
  ['on', 'Moyenne de l’Ontario', '499 434',    '581 018',    '13 364',              '14 501',              '14 426',              '67,7 %',    '7 243',         '7 205',        '37',      '1 640',          '0,5 %',                       '22,6 %'], 
  ['ep', 'Public anglais',       '1 331 907',  '1 550 480',  '13 027',              '14 126',              '14 059',              '66,8 %',    '18 815',        '18 726',       '89',      '3 702',          '0,5 %',                       '19,7 %'],
  ['ec', 'Catholique anglais',   '554 739',    '615 284',    '13 252',              '14 428',              '14 376',              '69,0 %',    '8 004',         '7 975',        '28',      '2 029',          '0,4 %',                       '25,3 %'], 
  ['fp', 'Public français',      '34 588',     '48 177',     '18 585',              '20 184',              '19 969',              '74,2 %',    '698',           '691',          '7',       '301',            '1,1 %',                       '43,1 %'], 
  ['fc', 'Catholique français',  '76 501',     '110 132',    '17 680',              '19 002',              '18 675',              '70,7 %',    '1 454',         '1 429',        '25',      '527',            '1,7 %',                       '36,2 %'], 
];
sysData.forEach(thisSystem =>{
  if(thisSystem[0] == 'on') return; //skip Ontario Average
  const mapInfoContainer = document.querySelector('.map-info');
  mapInfoContainer.innerHTML += getSysInfoTable(thisSystem);
})

function getSysInfoTable(thisSystem){
  const onAverage = sysData[0];
  let tableCode = `
<table id="${thisSystem[0]}_info">
  <tr>
    <th></th>
    <th>${thisSystem[1]}</th>
    <th>Moyenne de l’Ontario</th>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Effectif quotidien moyen qui est une mesure équivalent plein temps des effectifs d’élèves">Effectif</abbr></td>
    <td>${thisSystem[2]}</td>
    <td>${onAverage[2]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Capacité physique des établissements scolaires (à l’exclusion des places en classes mobiles)">Places</abbr></td>
    <td>${thisSystem[3]}</td>
    <td>${onAverage[3]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Financement total du ministère de l’Éducation par élève, année scolaire 2021-2022">Financement par élève (en dollars)</abbr></td>
    <td>${thisSystem[4]}</td>
    <td>${onAverage[4]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Revenus totaux des conseils scolaires par élève, année scolaire 2021-2022">Revenu par élève (en dollars)</abbr></td>
    <td>${thisSystem[5]}</td>
    <td>${onAverage[5]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Dépenses totales des conseils scolaires par élève, année scolaire 2021-2022">Dépenses par élève (en dollars)</abbr></td>
    <td>${thisSystem[6]}</td>
    <td>${onAverage[6]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Proportion de tests OQRE réalisés pour l’ensemble des disciplines et niveaux scolaires et qui ont été évalués comme atteignant ou dépassant le niveau de référence de la province">Taux de réussite OQRE</abbr></td>
    <td>${thisSystem[7]}</td>
    <td>${onAverage[7]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Revenus totaux des conseils scolaires, année scolaire 2021-2022">Revenu total (en millions de dollars)</abbr></td>
    <td>${thisSystem[8]}</td>
    <td>${onAverage[8]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Dépenses totales des conseils scolaires, année scolaire 2021-2022">Dépenses totales (en millions de dollars)</abbr></td>
    <td>${thisSystem[9]}</td>
    <td>${onAverage[9]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Revenus totaux des conseils scolaires moins les dépenses totales des conseils scolaires, année scolaire 2021-2022 ">Excédent/(déficit) (en millions de dollars)</abbr></td>
    <td>${thisSystem[10]}</td>
    <td>${onAverage[10]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Excédent accumulé en fin d’année/(déficit), au 31 août 2022. Représente la somme des excédents et des déficits sur la durée">Excédent cumulé/(déficit) (en millions de dollars)</abbr></td>
    <td>${thisSystem[11]}</td>
    <td>${onAverage[11]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Excédent du conseil scolaire/(déficit) en proportion de ses revenus totaux, année scolaire 2021-2022">Excédent/(déficit) en proportion des revenus</abbr></td>
    <td>${thisSystem[12]}</td>
    <td>${onAverage[12]}</td>
  </tr>
  <tr>
    <td><abbr tabindex="0" title="Excédent cumulé en fin d’année/(déficit) en proportion des revenus, au 31 août 2022">Excédent cumulé/(déficit) en proportion des revenus</abbr></td>
    <td>${thisSystem[13]}</td>
    <td>${onAverage[13]}</td>
  </tr>
</table>`;
  return tableCode;
}


// * * * * * * * * * * * * * * * * * * * * * * * * * //
// set up event listeners on page load
const mapAreas = document.querySelectorAll('svg#map-svg > g:not(#base) > g');
mapAreas.forEach(area => {
  //hover map
  area.addEventListener('pointerenter', handleHoverMap);
  area.addEventListener('pointerleave', handleUnHoverMap);
  //tab-select map
  // area.addEventListener('focus', handleClickMap);
  //click map
  area.addEventListener('pointerdown', handleClickMap);
});
//add listener for clicking on non-SB map area
const mapBase = document.querySelector('svg#map-svg g#base');
mapBase.addEventListener('pointerdown', handleClickBase);

//change distrct option
const mapSelect = document.getElementById('map-select');
mapSelect.addEventListener('change', handleChangeOption);
//change school system option
const systemSelect = document.getElementById('map-system');
systemSelect.addEventListener('change', handleSystemChangeOption);

// event handlers
function handleHoverMap(event){
  let sbId = event.target.id;
  // displayNone();
  // displaySchoolBoard(sbId);
  sbId = sbId.replace('Layer_','');
  sbToolTip(sbId,event);
}
function handleUnHoverMap(){
  sbClearTooltip();
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
  console.log('handleSystemChangeOption: systemId',systemId);
  displayNone();
  displaySystem(systemId);
}
function handleClickBase(event){
  const systemId = document.getElementById('map-system').value;
  console.log('handleSystemChangeOption: systemId',systemId);
  displayNone();
  displaySystem(systemId);
}
// reset display
displayNone();
displaySystem('ep');









function sbToolTip(sbId,event){
  const thisBoard = sbData[sbId];
  // //remove previous tooltip
  sbClearTooltip();
  //create tooltip element
  const tooltip = document.createElement('div');
  tooltip.classList.add('map-tooltip');
  tooltip.innerText = thisBoard[1];
  //position tooltip
  const mapSvg = document.getElementById('map-svg');
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const mapX = mapSvg.getBoundingClientRect().x;
  const mapY = mapSvg.getBoundingClientRect().y;
  const mapWidth = mapSvg.getBoundingClientRect().width;
  const mapHeight = mapSvg.getBoundingClientRect().height;
  const tooltipX = mouseX - mapX;
  const tooltipY = mouseY - mapY;
  // tooltip.style.bottom  =  100 * (1 - (tooltipY / mapHeight)) + '%';
  tooltip.style.top  =  tooltipY + 'px';
  // tooltip.style.transform = 'translateY(-100%)';
  //if mouse is on the right side of the map, position relative to right
  if(tooltipX / mapWidth > 0.5){
    tooltip.style.right =  100 * (1 - (tooltipX / mapWidth)) + '%';
  }else{
    tooltip.style.left =  100 * tooltipX / mapWidth + '%';
  }
  console.log(tooltipX / mapWidth);

  //append tooltip to map
  const container = document.querySelector('.map-container');
  container.appendChild(tooltip);
}

function sbClearTooltip(){
  //remove previous tooltip
  const oldTooltip = document.querySelector('.map-tooltip');
  if(oldTooltip) oldTooltip.remove();
}






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

