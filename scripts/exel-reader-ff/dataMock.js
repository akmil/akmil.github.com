var uiHandler = uiHandler || {}
uiHandler.dataMock = [
    [" Рахунок ", " Номер угоди ", " Тікер ", " ISIN ", " Тип інструменту/угоди ", " Місце ", " Операція ", " Кількість ", " Ціна ", " Валюта ", " Сума ", " Прибуток ", " Курс валюти ", " Прибуток у EUR ", " Комісія ", " Дата розрахунків "],
    ["1078644", "296159880", "TTD.US", "US88339J1051", "Акції", "NYSE/NASDAQ", " Купівля ", "6", "46.6", "USD", "279.6", "0", "0.93380536", "0", "2.60USD", "2023-01-13"],
    ["1078644", "296160341", "SWK.US", "US8545021011", "Акції", "NYSE/NASDAQ", " Купівля ", "2", "85.05", "USD", "170.1", "0", "0.93380536", "0", "2.05USD", "2023-01-13"],
    ["1078644", "297411803", "TTD.US", "US88339J1051", "Акції", "NYSE/NASDAQ", " Купівля ", "1", "47.14", "USD", "47.14", "0", "0.924954422", "0", "1.44USD", "2023-01-19"],
    ["1078644", "298182329", "DIS.US", "US2546871060", "Акції", "NYSE/NASDAQ", " Купівля ", "5", "102.9", "USD", "514.5", "0", "0.925286738", "0", "3.77USD", "2023-01-24"],
    ["1078644", "298339871", "MHPC.EU", "US55302T2042", "Акції", "Europe", " Купівля ", "18", "3.59", "USD", "64.62", "0", "0.923627383", "0", "1.74USD", "2023-01-25"],
    ["1078644", "299540119", "W.US", "US94419L1017", "Акції", "NYSE/NASDAQ", " Купівля ", "4", "60.93", "USD", "243.72", "0", "0.917587888", "0", "2.42USD", "2023-01-31"],
    ["1078644", "299540853", "ZIM.US", "IL0065100930", "Акції", "NYSE/NASDAQ", " Купівля ", "18", "18.5372", "USD", "333.67", "0", "0.917587888", "0", "2.87USD", "2023-01-31"],
    ["1078644", "299915721", "DIS.US", "US2546871060", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "107.95", "USD", "1079.5", "125.3", "0.919515902", "115.22", "6.60USD", "2023-02-01"],
    ["1078644", "299916214", "NVDA.US", "US67066G1040", "Акції", "NYSE/NASDAQ", " Продаж ", "1", "192.75", "USD", "192.75", "23.91", "0.919515902", "21.99", "2.16USD", "2023-02-01"],
    ["1078644", "300114177", "HLGN.US", "US42329E2046", "Акції", "NYSE/NASDAQ", " Купівля ", "100", "0.6343", "USD", "63.43", "0", "0.91835302", "0", "1.52USD", "2023-02-02"],
    ["1078644", "300117257", "AMZN.US", "US0231351067", "Акції", "NYSE/NASDAQ", " Купівля ", "11", "102.68", "USD", "1129.48", "0", "0.91835302", "0", "6.85USD", "2023-02-02"],
    ["1078644", "300118796", "C.US", "US1729674242", "Акції", "NYSE/NASDAQ", " Купівля ", "1", "51.8", "USD", "51.8", "0", "0.91835302", "0", "1.46USD", "2023-02-02"],
    ["1078644", "300122383", "PLUG.US", "US72919P2020", "Акції", "NYSE/NASDAQ", " Купівля ", "30", "16.59", "USD", "497.7", "0", "0.91835302", "0", "3.69USD", "2023-02-02"],
    ["1078644", "300347317", "SOFI.US", "US83406F1021", "Акції", "NYSE/NASDAQ", " Продаж ", "11", "7.03", "USD", "77.33", "10.23", "0.924207475", "9.45", "1.59USD", "2023-02-03"],
    ["1078644", "300743345", "TTD.US", "US88339J1051", "Акції", "NYSE/NASDAQ", " Купівля ", "1", "57.14", "USD", "57.14", "0", "0.919936503", "0", "1.49USD", "2023-02-06"],
    ["1078644", "300798444", "ZIM.US", "IL0065100930", "Акції", "NYSE/NASDAQ", " Продаж ", "18", "22.22", "USD", "399.96", "66.29", "0.919936503", "60.98", "3.20USD", "2023-02-06"],
    ["1078644", "300811920", "UPWK.US", "US91688F1049", "Акції", "NYSE/NASDAQ", " Купівля ", "28", "14.33", "USD", "401.24", "0", "0.919936503", "0", "3.21USD", "2023-02-06"],
    ["1078644", "301219521", "W.US", "US94419L1017", "Акції", "NYSE/NASDAQ", " Продаж ", "8", "68.12", "USD", "544.96", "72.76", "0.910143926", "66.22", "3.92USD", "2023-02-07"],
    ["1078644", "301229962", "SQQQ.US", "US74347G1922", "Акції", "NYSE/NASDAQ", " Купівля ", "15", "34.8063", "USD", "522.09", "0", "0.910143926", "0", "3.81USD", "2023-02-07"],
    ["1078644", "301486430", "PYPL.US", "US70450Y1038", "Акції", "NYSE/NASDAQ", " Купівля ", "2", "82.98", "USD", "165.96", "0", "0.917250933", "0", "2.03USD", "2023-02-08"],
    ["1078644", "301987460", "EUR/USD", null, "Валюта", "OTC", " Купівля ", "0.72", "1.0807", "USD", "0.78", "0", "0.933916666", "0", "0.00USD", "2023-02-08"],
    ["1078644", "302854114", "MHPC.EU", "US55302T2042", "Акції", "Europe", " Купівля ", "1", "3.39", "USD", "3.39", "0", "0.932586587", "0", "1.22USD", "2023-02-15"],
    ["1078644", "302854115", "MHPC.EU", "US55302T2042", "Акції", "Europe", " Купівля ", "31", "3.39", "USD", "105.09", "0", "0.932586587", "0", "1.73USD", "2023-02-15"],
    ["1078644", "303285269", "ADSK.US", "US0527691069", "Акції", "NYSE/NASDAQ", " Продаж ", "3", "228.43", "USD", "685.29", "69.79", "0.935931919", "65.32", "4.63USD", "2023-02-16"],
    ["1078644", "303433743", "DAL.US", "US2473617023", "Акції", "NYSE/NASDAQ", " Купівля ", "17", "38.69", "USD", "657.73", "0", "0.931039698", "0", "4.49USD", "2023-02-17"],
    ["1078644", "303569661", "WBD.US", "US9344231041", "Акції", "NYSE/NASDAQ", " Купівля ", "32", "15.12", "USD", "483.84", "0", "0.931039698", "0", "3.62USD", "2023-02-17"],
    ["1078644", "303739718", "CF.US", "US1252691001", "Акції", "NYSE/NASDAQ", " Купівля ", "4", "84.18", "USD", "336.72", "0", "0.932662941", "0", "2.88USD", "2023-02-21"],
    ["1078644", "305209808", "SBNY.US", "US82669G1040", "Акції", "NYSE/NASDAQ", " Купівля ", "4", "114.14", "USD", "456.56", "0", "0.938886487", "0", "3.48USD", "2023-02-28"],
    ["1078644", "305210588", "UPWK.US", "US91688F1049", "Акції", "NYSE/NASDAQ", " Купівля ", "3", "10.98", "USD", "32.94", "0", "0.938886487", "0", "1.36USD", "2023-02-28"],
    ["1078644", "306294213", "SBNY.US", "US82669G1040", "Акції", "NYSE/NASDAQ", " Купівля ", "1", "113.72", "USD", "113.72", "0", "0.941179478", "0", "1.77USD", "2023-03-07"],
    ["1078644", "306295204", "PLUG.US", "US72919P2020", "Акції", "NYSE/NASDAQ", " Купівля ", "5", "13.9453", "USD", "69.73", "0", "0.941179478", "0", "1.55USD", "2023-03-07"],
    ["1078644", "306494691", "SQQQ.US", "US74347G1922", "Акції", "NYSE/NASDAQ", " Продаж ", "15", "35.49", "USD", "532.35", "10.26", "0.94268735", "9.67", "3.86USD", "2023-03-08"],
    ["1078644", "306876904", "UPWK.US", "US91688F1049", "Акції", "NYSE/NASDAQ", " Купівля ", "10", "11.58", "USD", "115.8", "0", "0.936785533", "0", "1.78USD", "2023-03-10"],
    ["1078644", "306877945", "SBNY.US", "US82669G1040", "Акції", "NYSE/NASDAQ", " Купівля ", "4", "104.36", "USD", "417.44", "0", "0.936785533", "0", "3.29USD", "2023-03-10"],
    ["1078644", "307652860", "EUR/USD", null, "Валюта", "OTC", " Продаж ", "341.25", "1.07325", "USD", "366.25", "0", "0.944524253", "0", "0.00USD", "2023-03-13"],
    ["1078644", "307811879", "MHPC.EU", "US55302T2042", "Акції", "Europe", " Купівля ", "100", "3.4", "USD", "340", "0", "0.936120987", "0", "2.90USD", "2023-03-16"],
    ["1078644", "312359624", "SBNY.US", "US82669G1040", "Акції", "NYSE/NASDAQ", " Продаж ", "2", "0.17", "USD", "0.34", "-219.15", "0.912747401", "-200.03", "1.20USD", "2023-04-11"],
    ["1078644", "312825545", "MHPC.EU", "US55302T2042", "Акції", "Europe", " Купівля ", "6", "3.3", "USD", "19.8", "0", "0.916683955", "0", "1.30USD", "2023-04-13"],
    ["1078644", "314520993", "SBNY.US", "US82669G1040", "Акції", "NYSE/NASDAQ", " Продаж ", "4", "70", "USD", "280", "-158.99", "0.911037352", "-144.85", "2.60USD", "2023-04-21"],
    ["1078644", "316192370", "MHPC.EU", "US55302T2042", "Акції", "Europe", " Купівля ", "80", "3.62", "USD", "289.6", "0", "0.904190913", "0", "2.65USD", "2023-05-02"],
    ["1078644", "316266920", "DIS.US", "US2546871060", "Акції", "NYSE/NASDAQ", " Купівля ", "6", "101.54", "USD", "609.24", "0", "0.904190913", "0", "4.25USD", "2023-05-02"],
    ["1078644", "319840017", "PLTR.US", "US69608A1088", "Акції", "NYSE/NASDAQ", " Продаж ", "18", "11.74", "USD", "211.32", "26.36", "0.92223", "24.31", "2.26USD", "2023-05-22"],
    ["1078644", "320560978", "MHPC.EU", "US55302T2042", "Акції", "Europe", " Купівля ", "100", "3.74", "USD", "374", "0", "0.924177104", "0", "3.07USD", "2023-05-25"],
    ["1078644", "320570874", "WBD.US", "US9344231041", "Акції", "NYSE/NASDAQ", " Купівля ", "10", "12.14", "USD", "121.4", "0", "0.924177104", "0", "1.81USD", "2023-05-25"],
    ["1078644", "320585436", "UPWK.US", "US91688F1049", "Акції", "NYSE/NASDAQ", " Купівля ", "20", "8.36", "USD", "167.2", "0", "0.924177104", "0", "2.04USD", "2023-05-25"],
    ["1078644", "320633991", "TTD.US", "US88339J1051", "Акції", "NYSE/NASDAQ", " Продаж ", "15", "68.83", "USD", "1032.45", "171.82", "0.924177104", "158.79", "6.36USD", "2023-05-25"],
    ["1078644", "320634436", "TTD.US", "US88339J1051", "Акції", "NYSE/NASDAQ", " Продаж ", "1", "68.75", "USD", "68.75", "0", "0.924177104", "0", "1.54USD", "2023-05-25"],
    ["1078644", "320973676", "DIS.US", "US2546871060", "Акції", "NYSE/NASDAQ", " Купівля ", "7", "89.05", "USD", "623.35", "0", "0.926242805", "0", "4.32USD", "2023-05-26"],
    ["1078644", "321150005", "WBD.US", "US9344231041", "Акції", "NYSE/NASDAQ", " Купівля ", "20", "11.57", "USD", "231.4", "0", "0.927695636", "0", "2.36USD", "2023-05-30"],
    ["1078644", "321150053", "CF.US", "US1252691001", "Акції", "NYSE/NASDAQ", " Купівля ", "4", "64.85", "USD", "259.4", "0", "0.927695636", "0", "2.50USD", "2023-05-30"],
    ["1078644", "323106246", "VEGI.US", "US4642863504", "Акції", "NYSE/NASDAQ", " Купівля ", "3", "38.4144", "USD", "115.24", "0", "0.928526653", "0", "1.78USD", "2023-06-07"],
    ["1078644", "323901993", "EPAM.US", "US29414B1044", "Акції", "NYSE/NASDAQ", " Купівля ", "2", "209.5372", "USD", "419.07", "0", "0.934526548", "0", "3.30USD", "2023-06-12"],
    ["1078644", "324801189", "TSLA.US", "US88160R1014", "Акції", "NYSE/NASDAQ", " Продаж ", "3", "255.35", "USD", "766.05", "41.74", "0.928498961", "38.76", "5.03USD", "2023-06-15"],
    ["1078644", "324847104", "ADSK.US", "US0527691069", "Акції", "NYSE/NASDAQ", " Купівля ", "5", "212.1", "USD", "1060.5", "0", "0.928498961", "0", "6.50USD", "2023-06-15"],
    ["1078644", "325115485", "AMZN.US", "US0231351067", "Акції", "NYSE/NASDAQ", " Продаж ", "2", "126.31", "USD", "252.62", "48.35", "0.925330153", "44.74", "2.46USD", "2023-06-16"],
    ["1078644", "325131489", "SMTC.US", "US8168501018", "Акції", "NYSE/NASDAQ", " Купівля ", "7", "23.2", "USD", "162.4", "0", "0.925330153", "0", "2.01USD", "2023-06-16"],
    ["1078644", "325168873", "HLGN.US", "US42329E2046", "Акції", "NYSE/NASDAQ", " Купівля ", "100", "0.2101", "USD", "21.01", "0", "0.925330153", "0", "1.31USD", "2023-06-16"],
    ["1078644", "325398835", "TSLA.US", "US88160R1014", "Акції", "NYSE/NASDAQ", " Продаж ", "2", "256.25", "USD", "512.5", "29.62", "0.925967532", "27.43", "3.76USD", "2023-06-20"],
    ["1078644", "325758592", "TSLA.US", "US88160R1014", "Акції", "NYSE/NASDAQ", " Продаж ", "2", "259.17", "USD", "518.34", "35.46", "0.922989232", "32.73", "3.79USD", "2023-06-21"],
    ["1078644", "325759536", "EPAM.US", "US29414B1044", "Акції", "NYSE/NASDAQ", " Продаж ", "2", "221.7983", "USD", "443.6", "24.52", "0.922989232", "22.63", "3.42USD", "2023-06-21"],
    ["1078644", "325794889", "TTD.US", "US88339J1051", "Акції", "NYSE/NASDAQ", " Купівля ", "2", "76.47", "USD", "152.94", "-15.36", "0.922989232", "-14.18", "1.96USD", "2023-06-21"],
    ["1078644", "326442085", "PYPL.US", "US70450Y1038", "Акції", "NYSE/NASDAQ", " Купівля ", "6", "68.95", "USD", "413.7", "0", "0.914841786", "0", "3.27USD", "2023-06-23"],
    ["1078644", "326442247", "WBD.US", "US9344231041", "Акції", "NYSE/NASDAQ", " Купівля ", "30", "12.19", "USD", "365.7", "0", "0.914841786", "0", "3.03USD", "2023-06-23"],
    ["1078644", "326442844", "ZIM.US", "IL0065100930", "Акції", "NYSE/NASDAQ", " Купівля ", "20", "12.4378", "USD", "248.76", "0", "0.914841786", "0", "2.44USD", "2023-06-23"],
    ["1078644", "326475591", "DIS.US", "US2546871060", "Акції", "NYSE/NASDAQ", " Купівля ", "4", "88.85", "USD", "355.4", "0", "0.914841786", "0", "2.98USD", "2023-06-23"],
    ["1078644", "327284367", "F.US", "US3453708600", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "14.05", "USD", "140.5", "0", "0.909342745", "0", "1.90USD", "2023-06-27"],
    ["1078644", "328814059", "F.US", "US3453708600", "Акції", "NYSE/NASDAQ", " Купівля ", "10", "15.16", "USD", "151.6", "-11.1", "0.915135029", "-10.16", "1.96USD", "2023-07-05"],
    ["1078644", "329471229", "SCHD.US", "US8085247976", "Акції", "NYSE/NASDAQ", " Купівля ", "6", "72.88", "USD", "437.28", "0", "0.916171978", "0", "3.39USD", "2023-07-07"],
    ["1078644", "329473205", "STM.US", "US8610121027", "Акції", "NYSE/NASDAQ", " Купівля ", "4", "49.28", "USD", "197.12", "0", "0.916171978", "0", "2.19USD", "2023-07-07"],
    ["1078644", "329474019", "ETSY.US", "US29786A1060", "Акції", "NYSE/NASDAQ", " Купівля ", "3", "83.82", "USD", "251.46", "0", "0.916171978", "0", "2.46USD", "2023-07-07"],
    ["1078644", "329692940", "SOFI.US", "US83406F1021", "Акції", "NYSE/NASDAQ", " Купівля ", "5", "8.24", "USD", "41.2", "0", "0.917934774", "0", "1.41USD", "2023-07-10"],
    ["1078644", "330817116", "SBNY.US", "US82669G1040", "Акції", "NYSE/NASDAQ", " Купівля ", "40", "0.205", "USD", "8.2", "0", "0.907973214", "0", "1.24USD", "2023-07-14"],
    ["1078644", "333047383", "TSLA.US", "US88160R1014", "Акції", "NYSE/NASDAQ", " Продаж ", "5", "259.0533", "USD", "1295.27", "88.07", "0.892191136", "78.58", "7.68USD", "2023-07-25"],
    ["1078644", "333047703", "AMZN.US", "US0231351067", "Акції", "NYSE/NASDAQ", " Продаж ", "14", "128.94", "USD", "1805.16", "375.25", "0.892191136", "334.79", "10.23USD", "2023-07-25"],
    ["1078644", "333097257", "SMTC.US", "US8168501018", "Акції", "NYSE/NASDAQ", " Продаж ", "7", "27.39", "USD", "191.73", "29.33", "0.892191136", "26.17", "2.16USD", "2023-07-25"],
    ["1078644", "333385494", "HLGN.US", "US42329E2046", "Акції", "NYSE/NASDAQ", " Купівля ", "200", "0.2828", "USD", "56.56", "0", "0.897953628", "0", "2.68USD", "2023-07-26"],
    ["1078644", "333588145", "CF.US", "US1252691001", "Акції", "NYSE/NASDAQ", " Купівля ", "8", "81.32", "USD", "650.56", "0", "0.901631504", "0", "4.45USD", "2023-07-27"],
    ["1078644", "333591503", "SOFI.US", "US83406F1021", "Акції", "NYSE/NASDAQ", " Купівля ", "50", "9.43", "USD", "471.5", "0", "0.901631504", "0", "3.56USD", "2023-07-27"],
    ["1078644", "333594740", "DIS.US", "US2546871060", "Акції", "NYSE/NASDAQ", " Купівля ", "13", "85.38", "USD", "1109.94", "0", "0.901631504", "0", "6.75USD", "2023-07-27"],
    ["1078644", "333637448", "DAL.US", "US2473617023", "Акції", "NYSE/NASDAQ", " Продаж ", "17", "45.5", "USD", "773.5", "115.77", "0.901631504", "104.38", "5.07USD", "2023-07-27"],
    ["1078644", "333865718", "WBD.US", "US9344231041", "Акції", "NYSE/NASDAQ", " Купівля ", "60", "12.56", "USD", "753.6", "0", "0.903730297", "0", "4.97USD", "2023-07-28"],
    ["1078644", "333895992", "STM.US", "US8610121027", "Акції", "NYSE/NASDAQ", " Купівля ", "10", "51.31", "USD", "513.1", "0", "0.903730297", "0", "3.77USD", "2023-07-28"],
    ["1078644", "334216662", "USB.US", "US9029733048", "Акції", "NYSE/NASDAQ", " Купівля ", "10", "39.21", "USD", "392.1", "0", "0.903036235", "0", "3.16USD", "2023-07-31"],
    ["1078644", "334814383", "SOFI.US", "US83406F1021", "Акції", "NYSE/NASDAQ", " Купівля ", "5", "11.16", "USD", "55.8", "0", "0.910159806", "0", "1.48USD", "2023-08-02"],
    ["1078644", "335358114", "DIS.US", "US2546871060", "Акції", "NYSE/NASDAQ", " Купівля ", "4", "88.3", "USD", "353.2", "0", "0.911386233", "0", "2.97USD", "2023-08-04"],
    ["1078644", "337223597", "C.US", "US1729674242", "Акції", "NYSE/NASDAQ", " Купівля ", "4", "44.62", "USD", "178.48", "0", "0.911218761", "0", "2.14USD", "2023-08-14"],
    ["1078644", "337223931", "PYPL.US", "US70450Y1038", "Акції", "NYSE/NASDAQ", " Купівля ", "5", "62.23", "USD", "311.15", "0", "0.911218761", "0", "2.82USD", "2023-08-14"],
    ["1078644", "337224216", "SOFI.US", "US83406F1021", "Акції", "NYSE/NASDAQ", " Купівля ", "15", "8.99", "USD", "134.85", "0", "0.911218761", "0", "2.05USD", "2023-08-14"],
    ["1078644", "342320963", "COIN.US", "US19260Q1076", "Акції", "NYSE/NASDAQ", " Купівля ", "3", "77.76", "USD", "233.28", "0", "0.929783622", "0", "2.41USD", "2023-09-08"],
    ["1078644", "342565407", "ENPH.US", "US29355A1079", "Акції", "NYSE/NASDAQ", " Купівля ", "3", "120.93", "USD", "362.79", "0", "0.931146976", "0", "3.05USD", "2023-09-11"],
    ["1078644", "346180180", "GOOGL.US", "US02079K3059", "Акції", "NYSE/NASDAQ", " Продаж ", "4", "129.58", "USD", "518.32", "87.85", "0.943611455", "82.9", "3.84USD", "2023-09-29"],
    ["1078644", "346631724", "STM.US", "US8610121027", "Акції", "NYSE/NASDAQ", " Купівля ", "6", "43.75", "USD", "262.5", "0", "0.950086143", "0", "2.58USD", "2023-10-03"],
    ["1078644", "346632821", "DAL.US", "US2473617023", "Акції", "NYSE/NASDAQ", " Купівля ", "7", "37.34", "USD", "261.38", "0", "0.950086143", "0", "2.59USD", "2023-10-03"],
    ["1078644", "347919921", "SWK.US", "US8545021011", "Акції", "NYSE/NASDAQ", " Купівля ", "3", "78.76", "USD", "236.28", "0", "0.95122042", "0", "2.42USD", "2023-10-11"],
    ["1078644", "347924291", "SOFI.US", "US83406F1021", "Акції", "NYSE/NASDAQ", " Купівля ", "10", "8", "USD", "80", "0", "0.95122042", "0", "1.72USD", "2023-10-11"],
    ["1078644", "350441759", "ENPH.US", "US29355A1079", "Акції", "NYSE/NASDAQ", " Купівля ", "2", "100.4179", "USD", "200.84", "0", "0.948179546", "0", "2.22USD", "2023-10-24"],
    ["1078644", "350962168", "COIN.US", "US19260Q1076", "Акції", "NYSE/NASDAQ", " Продаж ", "3", "87.75", "USD", "263.25", "29.97", "0.944220013", "28.3", "2.56USD", "2023-10-26"],
    ["1078644", "350965366", "SCHD.US", "US8085247976", "Акції", "NYSE/NASDAQ", " Купівля ", "5", "69.38", "USD", "346.9", "0", "0.944220013", "0", "2.99USD", "2023-10-26"],
    ["1078644", "351256108", "+GOOGL.03NOV2023.P125", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "2.23", "USD", "223", "0", "0.939419447", "0", "13.00USD", "2023-10-26"],
    ["1078644", "351428620", "META.US", "US30303M1027", "Акції", "NYSE/NASDAQ", " Продаж ", "2", "290.78", "USD", "581.56", "0", "0.944213278", "0", "4.13USD", "2023-10-30"],
    ["1078644", "351448612", "+GOOGL.03NOV2023.P125", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "3.17", "USD", "317", "94", "0.944213278", "88.76", "13.00USD", "2023-10-27"],
    ["1078644", "351507415", "+UPS.03NOV2023.P134", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "2", "0.61", "USD", "122", "0", "0.944213278", "0", "16.00USD", "2023-10-27"],
    ["1078644", "351722931", "+UPS.03NOV2023.P134", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "2", "0.91", "USD", "182", "60", "0.947578228", "56.85", "16.00USD", "2023-10-30"],
    ["1078644", "351725392", "+VLO.03NOV2023.P122", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "2", "2.11", "USD", "422", "0", "0.947578228", "0", "16.00USD", "2023-10-30"],
    ["1078644", "351725532", "+ADSK.03NOV2023.P190", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "2", "1.55", "USD", "310", "0", "0.947578228", "0", "16.00USD", "2023-10-30"],
    ["1078644", "351966111", "META.US", "US30303M1027", "Акції", "NYSE/NASDAQ", " Купівля ", "2", "303.176", "USD", "606.35", "-24.79", "0.947809058", "-23.5", "4.25USD", "2023-11-01"],
    ["1078644", "352023960", "+COIN.10NOV2023.C75", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "4.4", "USD", "440", "0", "0.947809058", "0", "13.00USD", "2023-10-31"],
    ["1078644", "352030553", "+SWK.17NOV2023.C85", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "2", "2.25", "USD", "450", "0", "0.947809058", "0", "16.00USD", "2023-10-31"],
    ["1078644", "352231792", "+COIN.10NOV2023.C75", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "5", "USD", "500", "60", "0.945517176", "56.73", "13.00USD", "2023-11-01"],
    ["1078644", "352243589", "EUR/USD", null, "Валюта", "OTC", " Продаж ", "400", "1.05981", "USD", "423.92", "0", "0.945517176", "0", "0.00USD", "2023-10-31"],
    ["1078644", "352451851", "+SOFI.19JAN2024.C9", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "10", "0.4", "USD", "400", "0", "0.939634143", "0", "40.00USD", "2023-11-02"],
    ["1078644", "352455533", "+PINS.24NOV2023.C32", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "0.4", "USD", "40", "0", "0.939634143", "0", "13.00USD", "2023-11-02"],
    ["1078644", "352455534", "+PINS.24NOV2023.C32", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "0.4", "USD", "40", "0", "0.939634143", "0", "3.00USD", "2023-11-02"],
    ["1078644", "352455535", "+PINS.24NOV2023.C32", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "3", "0.4", "USD", "120", "0", "0.939634143", "0", "9.00USD", "2023-11-02"],
    ["1078644", "352759134", "+PINS.24NOV2023.C32", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.66", "USD", "66", "26", "0.947616992", "24.64", "13.00USD", "2023-11-03"],
    ["1078644", "352759136", "+PINS.24NOV2023.C32", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "4", "0.66", "USD", "264", "104", "0.947616992", "98.55", "12.00USD", "2023-11-03"],
    ["1078644", "352973670", "+SWK.17NOV2023.C85", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "2", "6", "USD", "1200", "750", "0.941146167", "705.86", "16.00USD", "2023-11-06"],
    ["1078644", "352975382", "PYPL.US", "US70450Y1038", "Акції", "NYSE/NASDAQ", " Купівля ", "2", "55.848", "USD", "111.7", "0", "0.941146167", "0", "1.78USD", "2023-11-07"],
    ["1078644", "352978019", "+ZIM.17NOV2023.C8", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "0.49", "USD", "49", "0", "0.941146167", "0", "13.00USD", "2023-11-06"],
    ["1078644", "352978021", "+ZIM.17NOV2023.C8", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "0.49", "USD", "49", "0", "0.941146167", "0", "3.00USD", "2023-11-06"],
    ["1078644", "352978022", "+ZIM.17NOV2023.C8", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "3", "0.48", "USD", "144", "0", "0.941146167", "0", "9.00USD", "2023-11-06"],
    ["1078644", "352978023", "+ZIM.17NOV2023.C8", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "0.49", "USD", "49", "0", "0.941146167", "0", "3.00USD", "2023-11-06"],
    ["1078644", "352979454", "+KO.24NOV2023.C58", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "4", "0.44", "USD", "176", "0", "0.941146167", "0", "22.00USD", "2023-11-06"],
    ["1078644", "352979455", "+KO.24NOV2023.C58", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "4", "0.44", "USD", "176", "0", "0.941146167", "0", "12.00USD", "2023-11-06"],
    ["1078644", "352979456", "+KO.24NOV2023.C58", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "0.44", "USD", "44", "0", "0.941146167", "0", "3.00USD", "2023-11-06"],
    ["1078644", "352979457", "+KO.24NOV2023.C58", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "0.44", "USD", "44", "0", "0.941146167", "0", "3.00USD", "2023-11-06"],
    ["1078644", "353175788", "+ADSK.03NOV2023.P190", null, "Експірація опціону", "NYSE/NASDAQ", " Продаж ", "2", "0", "USD", "0", "-310", "0.941146167", "-291.76", "0.00USD", "2023-11-06"],
    ["1078644", "353175789", "+VLO.03NOV2023.P122", null, "Експірація опціону", "NYSE/NASDAQ", " Продаж ", "2", "0", "USD", "0", "-422", "0.941146167", "-397.16", "0.00USD", "2023-11-06"],
    ["1078644", "353219221", "ETSY.US", "US29786A1060", "Акції", "NYSE/NASDAQ", " Продаж ", "6", "64.272", "USD", "385.63", "-58.64", "0.939643131", "-55.1", "3.20USD", "2023-11-08"],
    ["1078644", "353232008", "+SOFI.19JAN2024.C9", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "5", "0.34", "USD", "170", "-30", "0.939643131", "-28.19", "25.00USD", "2023-11-07"],
    ["1078644", "353232487", "+ETSY.01DEC2023.P58", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "4", "0.98", "USD", "392", "0", "0.939643131", "0", "22.00USD", "2023-11-07"],
    ["1078644", "353687591", "+ZIM.17NOV2023.C8", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.24", "USD", "24", "-24.5", "0.935505227", "-22.92", "13.00USD", "2023-11-09"],
    ["1078644", "353687593", "+ZIM.17NOV2023.C8", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.24", "USD", "24", "-24.5", "0.935505227", "-22.92", "3.00USD", "2023-11-09"],
    ["1078644", "353687594", "+ZIM.17NOV2023.C8", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.23", "USD", "23", "-25.5", "0.935505227", "-23.86", "3.00USD", "2023-11-09"],
    ["1078644", "353885537", "+ETSY.01DEC2023.P58", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.81", "USD", "81", "-17", "0.936580852", "-15.92", "13.00USD", "2023-11-10"],
    ["1078644", "353885585", "ETSY.US", "US29786A1060", "Акції", "NYSE/NASDAQ", " Продаж ", "2", "63.242", "USD", "126.48", "0", "0.936580852", "0", "1.85USD", "2023-11-13"],
    ["1078644", "353886163", "ETSY.US", "US29786A1060", "Акції", "NYSE/NASDAQ", " Купівля ", "3", "63.168", "USD", "189.5", "2.08", "0.936580852", "1.95", "2.19USD", "2023-11-13"],
    ["1078644", "353887314", "+DIS.24NOV2023.C92", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "1.39", "USD", "139", "0", "0.936580852", "0", "13.00USD", "2023-11-10"],
    ["1078644", "353887315", "+DIS.24NOV2023.C92", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "1.39", "USD", "139", "0", "0.936580852", "0", "3.00USD", "2023-11-10"],
    ["1078644", "354136546", "UPWK.US", "US91688F1049", "Акції", "NYSE/NASDAQ", " Продаж ", "75", "13.882", "USD", "1041.15", "129.62", "0.934141266", "121.08", "7.31USD", "2023-11-14"],
    ["1078644", "354204989", "UPWK.US", "US91688F1049", "Акції", "NYSE/NASDAQ", " Купівля ", "14", "13.7", "USD", "191.8", "2.55", "0.936307093", "2.39", "2.33USD", "2023-11-15"],
    ["1078644", "354214586", "+DIS.24NOV2023.C92", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "2", "0.31", "USD", "62", "-216", "0.936307093", "-202.24", "16.00USD", "2023-11-14"],
    ["1078644", "354215153", "UPWK.US", "US91688F1049", "Акції", "NYSE/NASDAQ", " Купівля ", "14", "13.508", "USD", "189.11", "0", "0.936307093", "0", "2.32USD", "2023-11-15"],
    ["1078644", "354223480", "+RUM.24NOV2023.P4.5", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "10", "0.35", "USD", "350", "0", "0.936307093", "0", "40.00USD", "2023-11-14"],
    ["1078644", "354707870", "ETSY.US", "US29786A1060", "Акції", "NYSE/NASDAQ", " Купівля ", "2", "73.068", "USD", "146.14", "-18.42", "0.933307152", "-17.19", "1.95USD", "2023-11-17"],
    ["1078644", "354950246", "+ZIM.17NOV2023.C8", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "3", "0.01", "USD", "3", "-142.5", "0.920965394", "-131.24", "19.00USD", "2023-11-17"],
    ["1078644", "355396283", "+KO.24NOV2023.C58", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.05", "USD", "5", "-39", "0.920992423", "-35.92", "13.00USD", "2023-11-21"],
    ["1078644", "356136732", "+KO.24NOV2023.C58", null, "Експірація опціону", "NYSE/NASDAQ", " Продаж ", "9", "0", "USD", "0", "-396", "0.915754677", "-362.64", "0.00USD", "2023-11-27"],
    ["1078644", "356136733", "KO.US", "US1912161007", "Акції", "NYSE/NASDAQ", " Купівля ", "900", "58", "USD", "52200", "0", "0.915754677", "0", "273.00USD", "2023-11-28"],
    ["1078644", "356137375", "+RUM.24NOV2023.P4.5", null, "Експірація опціону", "NYSE/NASDAQ", " Продаж ", "10", "0", "USD", "0", "-350", "0.915754677", "-320.51", "0.00USD", "2023-11-27"],
    ["1078644", "356979710", "SWK.US", "US8545021011", "Акції", "NYSE/NASDAQ", " Продаж ", "5", "90.86", "USD", "454.3", "47.92", "0.910228642", "43.62", "3.53USD", "2023-12-04"],
    ["1078644", "357212710", "DIS.US", "US2546871060", "Акції", "NYSE/NASDAQ", " Продаж ", "34", "91.992", "USD", "3127.73", "76.6", "0.914321133", "70.04", "17.25USD", "2023-12-05"],
    ["1078644", "357407543", "+ETSY.01DEC2023.P58", null, "Експірація опціону", "NYSE/NASDAQ", " Продаж ", "3", "0", "USD", "0", "-294", "0.914321133", "-268.81", "0.00USD", "2023-12-04"],
    ["1078644", "357481269", "KO.US", "US1912161007", "Акції", "NYSE/NASDAQ", " Продаж ", "200", "58.8308", "USD", "11766.16", "166.16", "0.916755351", "152.33", "62.43USD", "2023-12-06"],
    ["1078644", "358861644", "KO.US", "US1912161007", "Акції", "NYSE/NASDAQ", " Продаж ", "300", "58.97", "USD", "17691", "291", "0.927686336", "269.96", "93.26USD", "2023-12-14"],
    ["1078644", "358863907", "KO.US", "US1912161007", "Акції", "NYSE/NASDAQ", " Продаж ", "100", "59.21", "USD", "5921", "121", "0.927686336", "112.25", "32.01USD", "2023-12-14"],
    ["1078644", "358869005", "KO.US", "US1912161007", "Акції", "NYSE/NASDAQ", " Продаж ", "100", "59.3", "USD", "5930", "130", "0.927686336", "120.6", "32.05USD", "2023-12-14"],
    ["1078644", "359080982", "KO.US", "US1912161007", "Акції", "NYSE/NASDAQ", " Продаж ", "50", "59.5", "USD", "2975", "75", "0.926211718", "69.47", "16.68USD", "2023-12-15"],
    ["1078644", "359082926", "DAL.US", "US2473617023", "Акції", "NYSE/NASDAQ", " Продаж ", "7", "40.632", "USD", "284.42", "23.04", "0.926211718", "21.34", "2.70USD", "2023-12-15"],
    ["1078644", "359097290", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Купівля ", "150", "105.0215", "USD", "15753.23", "0", "0.926211718", "0", "81.77USD", "2023-12-15"],
    ["1078644", "359101100", "LAMR.US", "US5128161099", "Акції", "NYSE/NASDAQ", " Купівля ", "50", "104.438", "USD", "5221.9", "0", "0.926211718", "0", "27.91USD", "2023-12-15"],
    ["1078644", "359101173", "CCI.US", "US22822V1017", "Акції", "NYSE/NASDAQ", " Купівля ", "50", "113.932", "USD", "5696.6", "0", "0.926211718", "0", "30.28USD", "2023-12-15"],
    ["1078644", "359120738", "KO.US", "US1912161007", "Акції", "NYSE/NASDAQ", " Продаж ", "25", "59.68", "USD", "1492", "42", "0.926211718", "38.9", "8.96USD", "2023-12-15"],
    ["1078644", "359340349", "LAMR.US", "US5128161099", "Акції", "NYSE/NASDAQ", " Продаж ", "50", "110.97", "USD", "5548.5", "326.6", "0.927205776", "302.83", "29.54USD", "2023-12-18"],
    ["1078644", "359351238", "KO.US", "US1912161007", "Акції", "NYSE/NASDAQ", " Продаж ", "25", "59.46", "USD", "1486.5", "36.5", "0.927205776", "33.84", "8.93USD", "2023-12-18"],
    ["1078644", "359353676", "CCI.US", "US22822V1017", "Акції", "NYSE/NASDAQ", " Продаж ", "50", "116.39", "USD", "5819.5", "122.9", "0.927205776", "113.95", "30.90USD", "2023-12-18"],
    ["1078644", "359387152", "+SOFI.19JAN2024.C9", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "1.04", "USD", "104", "64", "0.927205776", "59.34", "13.00USD", "2023-12-15"],
    ["1078644", "359390622", "ENPH.US", "US29355A1079", "Акції", "NYSE/NASDAQ", " Продаж ", "5", "120.652", "USD", "603.26", "39.63", "0.927205776", "36.75", "4.28USD", "2023-12-18"],
    ["1078644", "359392672", "+PFE.19APR2024.C27.5", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "3", "1.23", "USD", "369", "0", "0.927205776", "0", "19.00USD", "2023-12-15"],
    ["1078644", "359407018", "KO.US", "US1912161007", "Акції", "NYSE/NASDAQ", " Продаж ", "100", "58.8435", "USD", "5884.35", "84.35", "0.927205776", "78.21", "31.82USD", "2023-12-18"],
    ["1078644", "359597516", "USB.US", "US9029733048", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "44.508", "USD", "445.08", "52.98", "0.917497547", "48.61", "3.55USD", "2023-12-19"],
    ["1078644", "359621931", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Продаж ", "50", "105.21", "USD", "5260.5", "9.43", "0.917497547", "8.65", "28.10USD", "2023-12-19"],
    ["1078644", "359844003", "+KO.05JAN2024.P58", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "2", "0.38", "USD", "76", "0", "0.91137854", "0", "16.00USD", "2023-12-19"],
    ["1078644", "359844011", "+KO.05JAN2024.P58", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "1", "0.38", "USD", "38", "0", "0.91137854", "0", "3.00USD", "2023-12-19"],
    ["1078644", "359844014", "+KO.05JAN2024.P58", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "2", "0.38", "USD", "76", "0", "0.91137854", "0", "6.00USD", "2023-12-19"],
    ["1078644", "359853076", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Продаж ", "20", "106.536", "USD", "2130.72", "30.29", "0.91137854", "27.61", "12.09USD", "2023-12-20"],
    ["1078644", "359855522", "+PFE.19APR2024.C27.5", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "1.48", "USD", "148", "25", "0.91137854", "22.78", "13.00USD", "2023-12-19"],
    ["1078644", "359858810", "+SOFI.19JAN2024.C9", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "1", "USD", "100", "60", "0.91137854", "54.68", "13.00USD", "2023-12-19"],
    ["1078644", "360085010", "+LUV.12JAN2024.P28", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "2", "0.82", "USD", "164", "0", "0.915534773", "0", "16.00USD", "2023-12-20"],
    ["1078644", "360095947", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "106.518", "USD", "1065.18", "14.97", "0.915534773", "13.71", "6.65USD", "2023-12-21"],
    ["1078644", "360109455", "+SOFI.19JAN2024.C9", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "1.31", "USD", "131", "91", "0.915534773", "83.31", "13.00USD", "2023-12-20"],
    ["1078644", "360146497", "+DAL.26JAN2024.C42", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "2", "1.52", "USD", "304", "0", "0.915534773", "0", "16.00USD", "2023-12-20"],
    ["1078644", "360342944", "+SOFI.19JAN2024.C9", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "1.46", "USD", "146", "106", "0.913879996", "96.87", "13.00USD", "2023-12-21"],
    ["1078644", "360344677", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "106.662", "USD", "1066.62", "16.41", "0.913879996", "15", "6.65USD", "2023-12-22"],
    ["1078644", "360347879", "ZIM.US", "IL0065100930", "Акції", "NYSE/NASDAQ", " Купівля ", "20", "10.1774", "USD", "203.55", "0", "0.913879996", "0", "2.46USD", "2023-12-22"],
    ["1078644", "360363739", "+KO.05JAN2024.P58", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.44", "USD", "44", "6", "0.913879996", "5.48", "13.00USD", "2023-12-21"],
    ["1078644", "360371462", "+KO.05JAN2024.P58", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.48", "USD", "48", "10", "0.913879996", "9.14", "13.00USD", "2023-12-21"],
    ["1078644", "360371679", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "106.694", "USD", "1066.94", "16.73", "0.913879996", "15.29", "6.65USD", "2023-12-22"],
    ["1078644", "360397077", "+SMTC.16FEB2024.C27", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "6", "0.45", "USD", "270", "0", "0.913879996", "0", "28.00USD", "2023-12-21"],
    ["1078644", "360592443", "+KO.05JAN2024.P58", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.64", "USD", "64", "26", "0.912745336", "23.73", "13.00USD", "2023-12-22"],
    ["1078644", "360592447", "+KO.05JAN2024.P58", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.64", "USD", "64", "26", "0.912745336", "23.73", "3.00USD", "2023-12-22"],
    ["1078644", "360592448", "+KO.05JAN2024.P58", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "0.65", "USD", "65", "27", "0.912745336", "24.64", "3.00USD", "2023-12-22"],
    ["1078644", "360821602", "USB.US", "US9029733048", "Акції", "NYSE/NASDAQ", " Купівля ", "50", "43.438", "USD", "2171.9", "0", "0.912396915", "0", "12.66USD", "2023-12-27"],
    ["1078644", "360821628", "COIN.US", "US19260Q1076", "Акції", "NYSE/NASDAQ", " Купівля ", "10", "169.796", "USD", "1697.96", "0", "0.912396915", "0", "9.81USD", "2023-12-27"],
    ["1078644", "360822323", "IIPR.US", "US45781V1017", "Акції", "NYSE/NASDAQ", " Купівля ", "20", "100.6006", "USD", "2012.01", "0", "0.912396915", "0", "11.50USD", "2023-12-27"],
    ["1078644", "360822355", "BXMT.US", "US09257W1009", "Акції", "NYSE/NASDAQ", " Купівля ", "100", "22.8624", "USD", "2286.24", "0", "0.912396915", "0", "13.83USD", "2023-12-27"],
    ["1078644", "360829446", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "107.6", "USD", "1076", "25.79", "0.912396915", "23.53", "6.70USD", "2023-12-27"],
    ["1078644", "360832133", "COIN.US", "US19260Q1076", "Акції", "NYSE/NASDAQ", " Продаж ", "5", "174.422", "USD", "872.11", "23.13", "0.912396915", "21.1", "5.62USD", "2023-12-27"],
    ["1078644", "360839386", "OXY.US", "US6745991058", "Акції", "NYSE/NASDAQ", " Купівля ", "30", "61.798", "USD", "1853.94", "0", "0.912396915", "0", "10.83USD", "2023-12-27"],
    ["1078644", "360847066", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "107.544", "USD", "1075.44", "25.23", "0.912396915", "23.02", "6.70USD", "2023-12-27"],
    ["1078644", "360847305", "COIN.US", "US19260Q1076", "Акції", "NYSE/NASDAQ", " Продаж ", "131", "175.6946", "USD", "23015.99", "29.49", "0.912396915", "26.91", "117.85USD", "2023-12-27"],
    ["1078644", "360847368", "COIN.US", "US19260Q1076", "Акції", "NYSE/NASDAQ", " Купівля ", "126", "175.69", "USD", "22136.94", "0.58", "0.912396915", "0.53", "113.39USD", "2023-12-27"],
    ["1078644", "360848952", "+ZIM.16FEB2024.C12.5", null, "Опціони", "NYSE/NASDAQ", " Купівля ", "4", "1.63", "USD", "652", "0", "0.912396915", "0", "22.00USD", "2023-12-26"],
    ["1078644", "360856525", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "108", "USD", "1080", "29.79", "0.912396915", "27.18", "6.72USD", "2023-12-27"],
    ["1078644", "360856957", "+PFE.19APR2024.C27.5", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "2.29", "USD", "229", "106", "0.912396915", "96.71", "13.00USD", "2023-12-26"],
    ["1078644", "360856959", "+PFE.19APR2024.C27.5", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "2.29", "USD", "229", "106", "0.912396915", "96.71", "3.00USD", "2023-12-26"],
    ["1078644", "361108885", "CMCSA.US", "US20030N1019", "Акції", "NYSE/NASDAQ", " Купівля ", "3", "43.95", "USD", "131.85", "0", "0.905401853", "0", "1.90USD", "2023-12-28"],
    ["1078644", "361349918", "MRK.US", "US58933Y1055", "Акції", "NYSE/NASDAQ", " Продаж ", "10", "107.31", "USD", "1073.1", "22.89", "0.906931322", "20.76", "6.69USD", "2023-12-29"],
    ["1078644", "361592047", "+SOFI.19JAN2024.C9", null, "Опціони", "NYSE/NASDAQ", " Продаж ", "1", "1.41", "USD", "141", "101", "0.904879466", "91.39", "13.00USD", "2023-12-29"]
];
