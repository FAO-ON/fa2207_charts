//all data
const sbData = [
  [0,'Ontario Average','Ontario Average','27,746','32,279','14,000','63.7%','402,361,333','400,279,451','2,081,883','91,093,962','1.2%','22.6%','200','29.4','0.61'],
  [1,'DSB Ontario North East','English Public','6,562','13,434','19,559','46.4%','$141,923,740','$140,835,432','$1,088,308','$37,455,778','0.8%','26.4%','659','53.89','0.956'],
  [2,'Algoma DSB','English Public','9,762','15,269','16,757','56.0%','$191,465,792','$188,684,148','$2,781,644','$26,867,275','1.5%','14.0%','628','37.17','0.802'],
  [3,'Rainbow DSB','English Public','12,987','18,367','15,926','62.7%','$231,376,397','$229,498,637','$1,877,760','$33,040,406','0.8%','14.3%','363','27.2','0.349'],
  [4,'Near North DSB','English Public','9,560','13,711','16,549','52.2%','$173,389,398','$169,101,700','$4,287,698','$26,962,597','2.5%','15.6%','313','25.79','0.918'],
  [5,'Keewatin-Patricia DSB','English Public','4,226','7,942','21,324','55.0%','$108,916,721','$104,563,362','$4,353,359','$39,725,000','4.0%','36.5%','1,709','95.84','1'],
  [6,'Rainy River DSB','English Public','2,034','4,358','23,890','51.9%','$59,046,647','$56,586,001','$2,460,646','$26,913,805','4.2%','45.6%','1,584','49.85','1'],
  [7,'Lakehead DSB','English Public','8,560','11,673','15,369','59.5%','$153,791,983','$145,358,947','$8,433,036','$7,028,000','5.5%','4.6%','1,257','25.19','0.572'],
  [8,'Superior-Greenstone DSB','English Public','1,189','4,567','32,524','43.9%','$49,779,957','$49,216,925','$563,032','$13,250,849','1.1%','26.6%','967','72.61','1'],
  [9,'Bluewater DSB','English Public','17,273','20,513','13,550','59.0%','$244,484,140','$239,128,969','$5,355,171','$41,997,859','2.2%','17.2%','<151','21.65','1'],
  [10,'Avon Maitland DSB','English Public','14,758','20,017','14,053','65.5%','$223,403,653','$219,085,718','$4,317,935','$21,196,891','1.9%','9.5%','<151','14.96','0.992'],
  [11,'Greater Essex County DSB','English Public','35,845','41,728','12,781','62.3%','$484,549,843','$480,988,028','$3,561,815','$51,461,532','0.7%','10.6%','<151','6.82','0.465'],
  [12,'Lambton Kent DSB','English Public','21,109','30,161','13,359','56.1%','$313,509,818','$305,366,257','$8,143,561','$51,781,245','2.6%','16.5%','<151','15.71','0.712'],
  [13,'Thames Valley DSB','English Public','80,220','86,692','12,664','61.5%','$1,063,769,719','$1,071,998,639','$(8,228,920)','$103,696,000','-0.8%','9.7%','<151','9.03','0.454'],
  [14,'Toronto DSB','English Public','230,847','294,215','13,428','69.6%','$3,433,047,376','$3,521,113,416','$(88,066,040)','$(19,259,000)','-2.6%','-0.6%','<151','3.85','0'],
  [15,'Durham DSB','English Public','74,094','70,847','11,991','68.3%','$945,871,448','$934,813,951','$11,057,497','$311,513,721','1.2%','32.9%','<151','5.54','0.513'],
  [16,'Kawartha Pine Ridge DSB','English Public','34,177','37,606','12,911','64.3%','$475,915,951','$472,913,615','$3,002,336','$52,550,728','0.6%','11.0%','<151','13.94','0.816'],
  [17,'Trillium Lakelands DSB','English Public','16,735','23,351','13,796','61.1%','$240,078,114','$233,459,149','$6,618,965','$23,374,000','2.8%','9.7%','<151','26.8','0.861'],
  [18,'York Region DSB','English Public','124,808','133,999','12,354','77.4%','$1,663,057,165','$1,637,506,343','$25,550,822','$955,851,000','1.5%','57.5%','<151','6.28','0.243'],
  [19,'Simcoe County DSB','English Public','54,367','50,664','12,346','63.7%','$718,239,642','$696,612,968','$21,626,674','$151,795,000','3.0%','21.1%','<151','11.6','0.759'],
  [20,'Upper Grand DSB','English Public','34,936','37,330','12,757','67.7%','$462,827,922','$462,787,378','$40,544','$95,010,753','0.0%','20.5%','<151','9.72','0.754'],
  [21,'Peel DSB','English Public','150,607','177,212','12,512','68.1%','$2,013,314,390','$2,016,473,554','$(3,159,164)','$638,973,836','-0.2%','31.7%','<151','4.43','0.047'],
  [22,'Halton DSB','English Public','65,803','66,052','11,920','76.3%','$851,697,333','$837,408,204','$14,289,129','$331,317,641','1.7%','38.9%','<151','5.65','0.306'],
  [23,'Hamilton-Wentworth DSB','English Public','49,712','53,020','12,660','57.5%','$725,297,721','$709,546,414','$15,751,307','$120,074,000','2.2%','16.6%','<151','4','0'],
  [24,'DSB of Niagara','English Public','39,265','45,121','12,763','77.3%','$547,161,310','$536,658,904','$10,502,406','$113,710,410','1.9%','20.8%','<151','6.57','0.724'],
  [25,'Grand Erie DSB','English Public','25,761','33,003','12,911','56.3%','$357,389,087','$353,517,371','$3,871,716','$14,829,003','1.1%','4.1%','<151','10.48','0.754'],
  [26,'Waterloo Region DSB','English Public','64,153','66,734','12,071','67.2%','$826,308,396','$819,318,947','$6,989,449','$184,593,774','0.8%','22.3%','<151','4.66','0.362'],
  [27,'Ottawa-Carleton DSB','English Public','73,367','80,505','12,998','69.1%','$1,055,179,851','$1,043,553,700','$11,626,151','$141,922,485','1.1%','13.5%','<151','5.57','0'],
  [28,'Upper Canada DSB','English Public','26,125','35,689','14,733','56.2%','$399,386,502','$393,843,298','$5,543,204','$37,893,842','1.4%','9.5%','<151','22.15','0.984'],
  [29,'Limestone DSB','English Public','19,371','24,007','14,103','59.4%','$292,584,988','$287,241,352','$5,343,636','$43,396,355','1.8%','14.8%','165','11.36','0.668'],
  [30,'Renfrew County DSB','English Public','8,895','13,608','15,618','59.8%','$146,412,051','$146,242,030','$170,021','$14,388,204','0.1%','9.8%','<151','23.64','1'],
  [31,'Hastings and Prince Edward DSB','English Public','14,801','19,085','14,283','60.4%','$221,480,092','$222,260,032','$(779,940)','$8,838,000','-0.4%','4.0%','167','14.26','0.926'],
  [32,'Northeastern Catholic DSB','English Catholic','2,232','3,460','20,295','49.0%','$47,575,471','$47,039,117','$536,354','$9,428,269','1.1%','19.8%','656','62.25','0.949'],
  [33,'Nipissing-Parry Sound Catholic DSB','English Catholic','2,706','4,187','18,826','56.7%','$54,404,619','$53,549,950','$854,669','$7,673,803','1.6%','14.1%','312','17.74','0.873'],
  [34,'Huron-Superior Catholic DSB','English Catholic','4,016','6,856','18,334','61.2%','$85,632,607','$85,208,426','$424,181','$11,933,512','0.5%','13.9%','627','65.53','0.766'],
  [35,'Sudbury Catholic DSB','English Catholic','6,325','7,829','15,731','54.5%','$107,291,107','$105,690,221','$1,600,886','$15,288,598','1.5%','14.2%','365','18.52','0.228'],
  [36,'Northwest Catholic DSB','English Catholic','1,189','1,685','22,939','54.4%','$28,545,343','$27,817,680','$727,663','$16,868,748','2.5%','59.1%','1,587','128.72','1'],
  [37,'Kenora Catholic DSB','English Catholic','1,233','1,805','22,874','63.3%','$33,088,194','$33,015,327','$72,867','$6,722,528','0.2%','20.3%','1,709','83.8','1'],
  [38,'Thunder Bay Catholic DSB','English Catholic','6,905','8,867','16,195','64.0%','$120,175,559','$122,544,309','$(2,368,750)','$15,474,997','-2.0%','12.9%','1,258','3.76','0.524'],
  [39,'Superior North Catholic DSB','English Catholic','610','1,827','33,671','49.3%','$24,063,930','$23,406,562','$657,368','$6,473,731','2.7%','26.9%','1,038','90.65','1'],
  [40,'Bruce-Grey Catholic DSB','English Catholic','4,598','4,090','14,887','63.9%','$72,654,438','$73,503,230','$(848,792)','$10,685,980','-1.2%','14.7%','<151','22.44','1'],
  [41,'Huron Perth Catholic DSB','English Catholic','4,576','5,330','15,294','71.6%','$74,131,961','$73,524,549','$607,412','$7,266,972','0.8%','9.8%','<151','20.73','0.986'],
  [42,'Windsor-Essex Catholic DSB','English Catholic','20,465','23,510','13,064','73.8%','$283,276,771','$276,071,757','$7,205,014','$34,053,010','2.5%','12.0%','<151','7.66','0.444'],
  [43,'London District Catholic School Board','English Catholic','22,502','22,146','12,914','64.7%','$307,572,825','$296,269,481','$11,303,344','$51,982,000','3.7%','16.9%','<151','10.41','0.3'],
  [44,'St. Clair Catholic DSB','English Catholic','8,629','9,494','13,809','64.6%','$128,785,260','$127,501,180','$1,284,080','$26,612,831','1.0%','20.7%','<151','19.85','0.675'],
  [45,'Toronto Catholic DSB','English Catholic','84,032','96,466','13,532','68.0%','$1,238,530,193','$1,260,132,592','$(21,602,399)','$494,122,000','-1.7%','39.9%','<151','4.46','0'],
  [46,'Peterborough V N C Catholic DSB','English Catholic','14,666','15,779','13,351','64.4%','$208,174,186','$208,464,807','$(290,621)','$32,249,647','-0.1%','15.5%','<151','16.08','0.752'],
  [47,'York Catholic DSB','English Catholic','50,315','59,031','12,503','76.1%','$689,540,869','$686,923,654','$2,617,215','$278,403,000','0.4%','40.4%','<151','7.11','0.181'],
  [48,'Dufferin-Peel Catholic DSB','English Catholic','73,312','88,814','12,639','70.5%','$1,011,786,681','$1,042,199,810','$(30,413,129)','$251,031,000','-3.0%','24.8%','<151','4.91','0.061'],
  [49,'Simcoe Muskoka Catholic DSB','English Catholic','22,172','23,343','12,672','61.2%','$302,064,636','$292,797,611','$9,267,025','$64,167,998','3.1%','21.2%','<151','17.76','0.74'],
  [50,'Durham Catholic DSB','English Catholic','21,459','20,716','12,545','68.2%','$314,365,708','$311,773,212','$2,592,496','$72,734,611','0.8%','23.1%','<151','6.94','0.485'],
  [51,'Halton Catholic DSB','English Catholic','35,844','34,095','11,729','73.5%','$470,361,379','$461,788,644','$8,572,735','$187,259,851','1.8%','39.8%','<151','7.02','0.323'],
  [52,'Hamilton-Wentworth Catholic DSB','English Catholic','29,263','30,063','12,638','69.9%','$403,551,809','$403,741,120','$(189,311)','$92,450,573','0.0%','22.9%','<151','4.73','0'],
  [53,'Wellington Catholic DSB','English Catholic','8,106','9,752','13,730','70.1%','$116,054,137','$114,795,853','$1,258,284','$26,106,723','1.1%','22.5%','<151','10.38','0.536'],
  [54,'Waterloo Catholic DSB','English Catholic','24,231','22,622','12,419','70.4%','$351,731,564','$334,951,805','$16,779,759','$55,407,384','4.8%','15.8%','<151','6.78','0.298'],
  [55,'Niagara Catholic DSB','English Catholic','20,385','24,142','12,991','68.4%','$285,140,846','$285,176,450','$(35,604)','$26,802,592','0.0%','9.4%','<151','8.4','0.715'],
  [56,'Brant Haldimand Norfolk Catholic DSB','English Catholic','10,964','11,158','13,040','64.0%','$151,075,669','$150,993,269','$82,400','$30,904,607','0.1%','20.5%','<151','13.9','0.703'],
  [57,'Catholic DSB of Eastern Ontario','English Catholic','13,205','14,425','15,226','64.5%','$207,215,064','$204,713,400','$2,501,664','$20,403,876','1.2%','9.8%','<151','23.69','0.979'],
  [58,'Ottawa Catholic DSB','English Catholic','44,713','46,290','13,120','74.3%','$631,392,469','$616,591,902','$14,800,567','$140,098,000','2.3%','22.2%','<151','6.38','0'],
  [59,'Renfrew County Catholic DSB','English Catholic','4,742','6,131','16,469','77.2%','$82,221,959','$82,434,876','$(212,917)','$14,559,461','-0.3%','17.7%','<151','23.28','1'],
  [60,'Algonquin and Lakeshore Catholic DSB','English Catholic','11,344','11,371','14,425','59.1%','$173,134,812','$172,432,949','$701,863','$21,581,244','0.4%','12.5%','181','24.49','0.687'],
  [61,'CSP du Nord-Est de l&apos;Ontario','French Public','2,024','3,719','27,268','61.1%','$60,455,814','$59,847,037','$608,777','$14,820,072','1.0%','24.5%','313','123.84','0.931'],
  [62,'CSP du Grand Nord de l&apos;Ontario','French Public','2,629','6,198','27,517','53.0%','$76,283,387','$76,647,391','$(364,004)','$11,893,345','-0.5%','15.6%','363','103.5','0.335'],
  [63,'CS Viamonde','French Public','13,105','18,674','18,175','78.3%','$252,932,997','$254,288,097','$(1,355,100)','$137,072,020','-0.5%','54.2%','<151','40.84','0.174'],
  [64,'CÉP de l&apos;Est de l&apos;Ontario','French Public','16,830','19,586','16,465','75.7%','$308,467,517','$299,907,187','$8,560,330','$137,311,774','2.8%','44.5%','<151','29.83','0.231'],
  [65,'CSD catholique des Grandes Rivières','French Catholic','5,494','11,745','21,514','57.3%','$123,898,726','$122,290,156','$1,608,570','$23,117,472','1.3%','18.7%','654','49.47','0.958'],
  [66,'CSD catholique Franco-Nord','French Catholic','2,535','4,913','23,563','52.6%','$65,553,809','$65,525,945','$27,864','$16,003,549','0.0%','24.4%','312','25.21','0.925'],
  [67,'CSD catholique du Nouvel-Ontario','French Catholic','5,986','12,726','20,327','58.2%','$130,418,704','$130,033,803','$384,901','$23,981,872','0.3%','18.4%','364','60.34','0.386'],
  [68,'CSD catholique des Aurores bor<e9>ales','French Catholic','815','1,725','35,192','58.6%','$27,177,803','$26,378,123','$799,680','$22,671,087','2.9%','83.4%','1,255','188.95','0.7'],
  [69,'CS catholique Providence','French Catholic','9,465','12,095','17,137','69.0%','$166,968,888','$172,351,722','$(5,382,834)','$49,899,339','-3.2%','29.9%','<151','41.42','0.578'],
  [70,'CS catholique MonAvenir','French Catholic','16,287','20,273','17,477','75.7%','$321,966,166','$306,898,672','$15,067,494','$191,816,804','4.7%','59.6%','<151','32.4','0.338'],
  [71,'CSD catholique de l&apos;Est ontarien','French Catholic','10,410','17,893','17,468','67.5%','$190,641,135','$189,889,392','$751,743','$23,134,819','0.4%','12.1%','<151','15.97','0.983'],
  [72,'CSD catholique du Centre-Est de l&apos;Ontario','French Catholic','25,510','28,762','15,507','77.3%','$427,053,845','$415,325,787','$11,728,058','$176,144,610','2.7%','41.2%','<151','20.45','0.082'],
];

//rankings data
const sbDataRankings = [
  [0,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [5,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [6,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [7,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [8,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [9,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [10,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [11,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [12,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [13,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [14,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [15,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [16,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [17,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [18,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [19,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [20,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [21,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [22,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [23,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [24,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [25,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [26,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [27,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [28,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [29,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [30,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [31,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [32,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [33,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [34,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [35,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [36,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [37,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [38,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [39,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [40,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [41,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [42,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [43,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [44,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [45,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [46,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [47,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [48,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [49,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [50,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [51,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [52,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [53,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [54,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [55,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [56,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [57,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [58,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [59,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [60,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [61,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [62,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [63,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [64,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [65,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [66,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [67,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [68,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [69,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [70,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [71,'','',0,0,0,0,0,0,0,0,0,0,0,0,0],
  [72,'','',0,0,0,0,0,0,0,0,0,0,0,0,0]
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
  <th>Ontario<br>Average</th>
  <th>${thisBoard[1]} Rank</th>
</tr>
<tr>
  <td><abbr tabindex="0" title="Parent School Board category">School System</abbr></td>
  <td>${thisBoard[2]}</td>
  <td>N/A</td>
  <td>N/A</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total number of students registered">Enrolment</abbr></td>
  <td>${thisBoard[3]}</td>
  <td>${onAverage[3]}</td>
  <td>${ranking[3]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Maximum number of possible students">Capacity</abbr></td>
  <td>${thisBoard[4]}</td>
  <td>${onAverage[4]}</td>
  <td>${ranking[4]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total Revenue divided by number of enrolled students">Per-Student Funding ($)</abbr></td>
  <td>${thisBoard[5]}</td>
  <td>${onAverage[5]}</td>
  <td>${ranking[5]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Rating given by the Education Quality and Accountability Office">EQAO Avg.</abbr></td>
  <td>${thisBoard[6]}</td>
  <td>${onAverage[6]}</td>
  <td>${ranking[6]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total revenue from all sources">Total Revenue</abbr></td>
  <td>${thisBoard[7]}</td>
  <td>${onAverage[7]}</td>
  <td>${ranking[7]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total expenditures">Total Expense</abbr></td>
  <td>${thisBoard[8]}</td>
  <td>${onAverage[8]}</td>
  <td>${ranking[8]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Difference between Expenses and Revenue">Surplus</abbr></td>
  <td>${thisBoard[9]}</td>
  <td>${onAverage[9]}</td>
  <td>${ranking[9]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Total surplus">Year-End Accumulated Surplus (August 31, 2022)</abbr></td>
  <td>${thisBoard[10]}</td>
  <td>${onAverage[10]}</td>
  <td>${ranking[10]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Relative difference between expenses and revenue">Surplus as Share of Revenue</abbr></td>
  <td>${thisBoard[11]}</td>
  <td>${onAverage[11]}</td>
  <td>${ranking[11]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Relative difference between expenses and revenue">Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)</abbr></td>
  <td>${thisBoard[12]}</td>
  <td>${onAverage[12]}</td>
  <td>${ranking[12]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="How far from an urban center the district is">Remoteness (KM)</abbr></td>
  <td>${thisBoard[13]}</td>
  <td>${onAverage[13]}</td>
  <td>${ranking[13]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="How large the district is">Dispersion (KM)</abbr></td>
  <td>${thisBoard[14]}</td>
  <td>${onAverage[14]}</td>
  <td>${ranking[14]}</td>
</tr>
<tr>
  <td><abbr tabindex="0" title="Inverse of Remoteness">Urban Factor</abbr></td>
  <td>${thisBoard[15]}</td>
  <td>${onAverage[15]}</td>
  <td>${ranking[15]}</td>
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
  //get first district in system
  const mapG = document.getElementById(systemId);
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
}

