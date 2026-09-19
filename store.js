// AutoMart.uz — data & local "backend" (localStorage-based)

const CATEGORIES = [
  { id: 'motor-oil', name: 'Motor moylari', img: 'https://exzap.uz/uploads/category/150/motornye-masla-6243m-1.webp' },
  { id: 'filters', name: 'Filtrlar', img: 'https://exzap.uz/uploads/category/17/vozdusnye-filtry-4619m-1.webp' },
  { id: 'brakes', name: 'Tormoz tizimi', img: 'https://exzap.uz/uploads/category/6/tormoznye-kolodki-9975z-1.webp' },
  { id: 'batteries', name: 'Akkumulyatorlar', img: 'https://exzap.uz/uploads/category/161/akkumuliatory-16347b-1.webp' },
  { id: 'tires', name: 'Shinalar', img: 'https://exzap.uz/uploads/category/165/siny-i-diski.webp' },
  { id: 'fluids', name: 'Suyuqliklar', img: 'https://exzap.uz/uploads/category/186/antifrizy-i-tosoly.webp' },
  { id: 'spark-plugs', name: 'Svechalar', img: 'https://exzap.uz/uploads/category/104/sveci-zaziganiia-22739z-1.webp' },
  { id: 'engine', name: 'Dvigatel qismlari', img: 'https://exzap.uz/uploads/category/28/dvigatel.webp' },
  { id: 'body-parts', name: 'Kuzov qismlari', img: 'https://exzap.uz/photo_upload/18563z_1.webp' },
  { id: 'tools', name: 'Asboblar', img: 'https://exzap.uz/uploads/category/173/instrumenty.webp' },
  { id: 'accessories', name: 'Aksessuarlar', img: 'https://exzap.uz/uploads/category/174/aksessuary.webp' },
  { id: 'chemicals', name: 'Avtokimyo', img: 'https://exzap.uz/uploads/category/183/avtoximiia-i-avtokosmetika.webp' },
];

const BRANDS = [
  { name: 'Shell', img: 'https://exzap.uz/uploads/brands/78/Shell.webp' },
  { name: 'Michelin', img: 'https://exzap.uz/uploads/brands/11/michelin.webp' },
  { name: 'TRT', img: 'https://exzap.uz/uploads/brands/6/Trt.webp' },
  { name: 'Valesco', img: 'https://exzap.uz/uploads/brands/123/Valesco.webp' },
  { name: 'Winner', img: 'https://exzap.uz/uploads/brands/102/Winner.webp' },
  { name: 'Valesco Oil', img: 'https://exzap.uz/uploads/brands/58/Valesco-oil.webp' },
  { name: 'S-OIL', img: 'https://exzap.uz/uploads/brands/176/S-oil.webp' },
];

const PRODUCTS = [
  // Motor moylari
  { id: 'oil-ardeca-synth-xl-5w40-5l', name: 'Sintetik moy ARDECA SYNTH-XL 5W-40 SN/CF, 5L', img: 'https://exzap.uz/photo_upload/2476m_1.webp', price: 492000, oldPrice: 547000, discount: 10, category: 'motor-oil' },
  { id: 'oil-takayama-adaptec-5w30-4l', name: 'Sintetik moy TAKAYAMA ADAPTEC 5W-30 SN/CF, 4L', img: 'https://exzap.uz/photo_upload/3048m_1.webp', price: 381000, oldPrice: 433000, discount: 12, category: 'motor-oil' },
  { id: 'oil-shell-rimula-r4x-15w40-18l', name: 'Dizel moyi SHELL RIMULA R4 X 15W-40, 18L', img: 'https://exzap.uz/photo_upload/21848m_1.webp', price: 1262000, oldPrice: 1372000, discount: 8, category: 'motor-oil' },
  { id: 'oil-takayama-5w40-4l', name: 'Sintetik moy TAKAYAMA 5W-40 SN, 4L', img: 'https://exzap.uz/photo_upload/3049m_1.webp', price: 341000, oldPrice: 397000, discount: 14, category: 'motor-oil' },
  { id: 'oil-sintec-moto-2t-1l', name: "Yarim sintetik moy SINTEC Moto 2T TC-FC, 1L", img: 'https://exzap.uz/photo_upload/0519m_1.webp', price: 50000, oldPrice: 55000, discount: 9, category: 'motor-oil' },
  { id: 'oil-takayama-0w20-4l', name: 'Sintetik moy TAKAYAMA 0W-20 SP, 4L', img: 'https://exzap.uz/photo_upload/3051m_1.webp', price: 443000, oldPrice: 498000, discount: 11, category: 'motor-oil' },

  // Filtrlar
  { id: 'filter-air-wix-prado150', name: "Havo filtri WIX Land Cruiser Prado 150 2.7", img: 'https://exzap.uz/photo_upload/4211m_1.webp', price: 142000, oldPrice: 158000, discount: 10, category: 'filters' },
  { id: 'filter-air-bosch-daf-xf105', name: 'Havo filtri BOSCH DAF XF 105 Euro 5', img: 'https://exzap.uz/photo_upload/7491z_1.webp', price: 849000, oldPrice: 913000, discount: 7, category: 'filters' },
  { id: 'filter-air-wix-camry40', name: 'Havo filtri WIX Toyota Camry 40', img: 'https://exzap.uz/photo_upload/4212m_1.webp', price: 99000, oldPrice: 113000, discount: 12, category: 'filters' },
  { id: 'filter-oil-winspeed-tracker1', name: 'Moy filtri WIN SPEED Tracker 1', img: 'https://exzap.uz/photo_upload/17371m_1.webp', price: 27000, oldPrice: 32000, discount: 15, category: 'filters' },
  { id: 'filter-oil-bosch-kodiaq', name: 'Moy filtri BOSCH Skoda Kodiaq 2018-2022', img: 'https://exzap.uz/photo_upload/22740m_1.webp', price: 135000, oldPrice: 148000, discount: 9, category: 'filters' },
  { id: 'filter-oil-wix-cobalt', name: 'Moy filtri WIX Cobalt/Gentra/Spark/Nexia 3', img: 'https://exzap.uz/photo_upload/4215m_1.webp', price: 25000, oldPrice: 29000, discount: 13, category: 'filters' },

  // Tormoz tizimi
  { id: 'brake-icer-daf', name: 'Tormoz kolodkalari ICER, DAF', img: 'https://exzap.uz/photo_upload/14771z_1.webp', price: 1327000, oldPrice: 1443000, discount: 8, category: 'brakes' },
  { id: 'brake-master-keramik-cruze', name: "Old diskli tormoz kolodkalari (keramik) BRAKE MASTER, Cruze/Crider", img: 'https://exzap.uz/photo_upload/18128z_1.webp', price: 239000, oldPrice: 272000, discount: 12, category: 'brakes' },
  { id: 'brake-lpr-cobalt', name: 'Old diskli tormoz kolodkalari (keramik) LPR, Cobalt', img: 'https://exzap.uz/photo_upload/19739z_1.webp', price: 198000, oldPrice: 220000, discount: 10, category: 'brakes' },
  { id: 'brake-brembo-lc120', name: 'Orqa diskli tormoz kolodkalari BREMBO, Land Cruiser 120/150', img: 'https://exzap.uz/photo_upload/9971z_1.webp', price: 421000, oldPrice: 473000, discount: 11, category: 'brakes' },
  { id: 'brake-brembo-x5-e70', name: 'Old tormoz kolodkalari BREMBO, BMW X5 E70', img: 'https://exzap.uz/photo_upload/10158z_1.webp', price: 1401000, oldPrice: 1540000, discount: 9, category: 'brakes' },

  // Akkumulyatorlar
  { id: 'battery-kainar-60-l', name: "Akkumulyator KAINAR 6CT-60, chap qutb", img: 'https://exzap.uz/photo_upload/6584z_1.webp', price: 576000, oldPrice: 619000, discount: 7, category: 'batteries' },
  { id: 'battery-kainar-75-r', name: "Akkumulyator KAINAR 6CT-75, o'ng qutb", img: 'https://exzap.uz/photo_upload/6586z_1.webp', price: 812000, oldPrice: 892000, discount: 9, category: 'batteries' },
  { id: 'battery-kainar-90-r', name: "Akkumulyator KAINAR 6CT-90, o'ng qutb", img: 'https://exzap.uz/photo_upload/6588z_1.webp', price: 978000, oldPrice: 1063000, discount: 8, category: 'batteries' },
  { id: 'battery-bosch-45-400a', name: 'Akkumulyator BOSCH 45Ah, 400A', img: 'https://exzap.uz/photo_upload/7868a_1.webp', price: 555000, oldPrice: 617000, discount: 10, category: 'batteries' },

  // Shinalar
  { id: 'tire-michelin-275-35-r19', name: 'Avtoshina MICHELIN 275/35 R19, CrossClimate 3 Sport', img: 'https://exzap.uz/photo_upload/21445s_1.webp', price: 5688000, oldPrice: 6053000, discount: 6, category: 'tires' },
  { id: 'tire-michelin-265-50-r20', name: 'Avtoshina MICHELIN 265/50 R20, CrossClimate 3', img: 'https://exzap.uz/photo_upload/21455s_1.webp', price: 5688000, oldPrice: 6183000, discount: 8, category: 'tires' },
  { id: 'tire-michelin-225-40-r19', name: 'Avtoshina MICHELIN 225/40 R19, CrossClimate 3 Sport', img: 'https://exzap.uz/photo_upload/21464s_1.webp', price: 3746000, oldPrice: 4028000, discount: 7, category: 'tires' },
  { id: 'tire-hankook-185-65-r14', name: 'Barcha mavsum shina HANKOOK 185/65 R14, Kinergy 4S2', img: 'https://exzap.uz/photo_upload/21869s_1.webp', price: 736000, oldPrice: 836000, discount: 12, category: 'tires' },

  // Suyuqliklar
  { id: 'fluid-rolf-g11-green-1l', name: 'Antifriz ROLF G11 Green -40, 1L', img: 'https://exzap.uz/photo_upload/7370m_1.webp', price: 31000, oldPrice: 36000, discount: 14, category: 'fluids' },
  { id: 'fluid-rolf-g11-green-5l', name: 'Antifriz ROLF G11 Green -40, 5L', img: 'https://exzap.uz/photo_upload/7371m_1.webp', price: 131000, oldPrice: 149000, discount: 12, category: 'fluids' },
  { id: 'fluid-rolf-g12-red-1l', name: 'Antifriz ROLF G12+ Red -40, 1L', img: 'https://exzap.uz/photo_upload/7372m_1.webp', price: 38000, oldPrice: 45000, discount: 16, category: 'fluids' },
  { id: 'fluid-sibiria-g12-red-5kg', name: 'Antifriz SIBIRIA G12+ Red -40, 5kg', img: 'https://exzap.uz/photo_upload/21047m_1.webp', price: 156000, oldPrice: 179000, discount: 13, category: 'fluids' },

  // Svechalar
  { id: 'spark-bosch-super-plus-nexia', name: 'Uchqun shami BOSCH Super Plus, Nexia DOHC', img: 'https://exzap.uz/photo_upload/22739z_1.webp', price: 67000, oldPrice: 74000, discount: 9, category: 'spark-plugs' },
  { id: 'spark-amp-gas-super-spark', name: 'Uchqun shami AMP Gas-Super, Spark/Matiz', img: 'https://exzap.uz/photo_upload/13269z_1.webp', price: 23000, oldPrice: 27000, discount: 15, category: 'spark-plugs' },
  { id: 'spark-amp-gas-super-lacetti', name: 'Uchqun shami AMP Gas-Super, Lacetti 1.8', img: 'https://exzap.uz/photo_upload/13270z_1.webp', price: 26000, oldPrice: 30000, discount: 13, category: 'spark-plugs' },
  { id: 'spark-valeo-nickel-volga', name: 'Uchqun shami VALEO Nickel, Volga/Moskvich', img: 'https://exzap.uz/photo_upload/16806z_1.webp', price: 10000, oldPrice: 11000, discount: 10, category: 'spark-plugs' },

  // Dvigatel qismlari
  { id: 'engine-valve-cover-gasket-malibu', name: "Klapan qopqog'i prokladkasi, Malibu 2.4", img: 'https://exzap.uz/photo_upload/8142z_1.webp', price: 117000, oldPrice: 131000, discount: 11, category: 'engine' },
  { id: 'engine-crankshaft-kolben-nexia', name: 'Tirsakli val KOLBEN, Nexia', img: 'https://exzap.uz/photo_upload/11717z_1.webp', price: 561000, oldPrice: 616000, discount: 9, category: 'engine' },
  { id: 'engine-piston-pin-amp-lada', name: "Porshen barmog'i AMP, Lada 2101", img: 'https://exzap.uz/photo_upload/1683z_1.webp', price: 34000, oldPrice: 40000, discount: 15, category: 'engine' },
  { id: 'engine-poly-vbelt-febi-epica', name: 'Poliklinli tasma FEBI BILSTEIN, Epica', img: 'https://exzap.uz/photo_upload/5000z_1.webp', price: 109000, oldPrice: 121000, discount: 10, category: 'engine' },

  // Kuzov qismlari
  { id: 'body-window-lifter-byd-chazor', name: "Old oyna ko'targich mexanizmi, BYD Chazor", img: 'https://exzap.uz/photo_upload/18563z_1.webp', price: 737000, oldPrice: 801000, discount: 8, category: 'body-parts' },
  { id: 'body-bumper-trim-byd-e2', name: 'Old bamper nakladkasi, BYD E2', img: 'https://exzap.uz/photo_upload/18376z_1.webp', price: 192000, oldPrice: 218000, discount: 12, category: 'body-parts' },
  { id: 'body-wheel-arch-liner-lixiang-l7', name: "Old podkrilok (loy tutgich), LiXiang L7", img: 'https://exzap.uz/photo_upload/19013z_1.webp', price: 590000, oldPrice: 648000, discount: 9, category: 'body-parts' },
  { id: 'body-bumper-bracket-byd-yuan', name: 'Orqa bamper kronshteyni, BYD Yuan Up', img: 'https://exzap.uz/photo_upload/18829z_1.webp', price: 118000, oldPrice: 133000, discount: 11, category: 'body-parts' },

  // Asboblar
  { id: 'tool-socket-elring-10mm', name: "Metrik golovka (xrom-vanadiy), 10mm", img: 'https://exzap.uz/photo_upload/16805z_1.webp', price: 148000, oldPrice: 164000, discount: 10, category: 'tools' },
  { id: 'tool-oil-pump-avtodelo', name: "Moy quyish pompasi (bochkadan)", img: 'https://exzap.uz/photo_upload/6046z_1.webp', price: 279000, oldPrice: 307000, discount: 9, category: 'tools' },

  // Aksessuarlar
  { id: 'acc-wiper-bosch-aerotwin-650', name: "Oyna tozalagich cho'tkasi BOSCH AEROTWIN, 650 mm", img: 'https://exzap.uz/photo_upload/4371z_1.webp', price: 238000, oldPrice: 264000, discount: 10, category: 'accessories' },
  { id: 'acc-wiper-bosch-twin-640', name: "Oyna tozalagich cho'tkasi BOSCH TWIN, 640 mm", img: 'https://exzap.uz/photo_upload/4340z_1.webp', price: 134000, oldPrice: 152000, discount: 12, category: 'accessories' },
  { id: 'acc-wiper-bosch-eco-600', name: "Oyna tozalagich cho'tkasi BOSCH ECO, 600 mm", img: 'https://exzap.uz/photo_upload/4359z_1.webp', price: 47000, oldPrice: 55000, discount: 15, category: 'accessories' },
  { id: 'acc-wiper-bosch-eco-500', name: "Oyna tozalagich cho'tkasi BOSCH ECO, 500 mm", img: 'https://exzap.uz/photo_upload/4357z_1.webp', price: 40000, oldPrice: 46000, discount: 13, category: 'accessories' },
  { id: 'acc-wiper-bosch-eco-450', name: "Oyna tozalagich cho'tkasi BOSCH ECO, 450 mm", img: 'https://exzap.uz/photo_upload/4355z_1.webp', price: 36000, oldPrice: 42000, discount: 14, category: 'accessories' },
  { id: 'acc-wiper-valeo-cobalt-600', name: "Oyna tozalagich cho'tkasi VALEO, Cobalt 600 mm", img: 'https://exzap.uz/photo_upload/3079z_1.webp', price: 59000, oldPrice: 66000, discount: 11, category: 'accessories' },
  { id: 'acc-wiper-valeo-nexia-450', name: "Oyna tozalagich cho'tkasi VALEO, Nexia 450 mm", img: 'https://exzap.uz/photo_upload/0237z_1.webp', price: 36000, oldPrice: 41000, discount: 12, category: 'accessories' },
  { id: 'acc-wiper-valeo-lacetti-500', name: "Oyna tozalagich cho'tkasi VALEO, Lacetti 500 mm", img: 'https://exzap.uz/photo_upload/0238z_1.webp', price: 37000, oldPrice: 42000, discount: 12, category: 'accessories' },
  { id: 'acc-mats-lixiang-l6', name: "Salon gilamchalari to'plami (rezina), LiXiang L6", img: 'https://exzap.uz/photo_upload/17687z_1.webp', price: 2161000, oldPrice: 2349000, discount: 8, category: 'accessories' },
  { id: 'acc-mats-lixiang-l7', name: "Salon gilamchalari to'plami (rezina), LiXiang L7", img: 'https://exzap.uz/photo_upload/17689z_1.webp', price: 2294000, oldPrice: 2467000, discount: 7, category: 'accessories' },
  { id: 'acc-charger-lixiang', name: "Portativ zaryadlovchi qurilma, LiXiang", img: 'https://exzap.uz/photo_upload/17809z_1.webp', price: 2064000, oldPrice: 2219000, discount: 7, category: 'accessories' },
  { id: 'acc-home-charger-lixiang', name: "Uy zaryadlovchi qurilmasi (Wallbox), LiXiang L6/7/8/9", img: 'https://exzap.uz/photo_upload/17666z_1.webp', price: 5920000, oldPrice: 6298000, discount: 6, category: 'accessories' },
  { id: 'acc-charger-stand-lixiang', name: "Zaryadlovchi qurilma stoykasi, LiXiang", img: 'https://exzap.uz/photo_upload/19144z_1.webp', price: 1480000, oldPrice: 1626000, discount: 9, category: 'accessories' },
  { id: 'acc-charge-port-cap-lixiang', name: "Zaryad porti qopqog'i, LiXiang L6/7/8/9", img: 'https://exzap.uz/photo_upload/18872z_1.webp', price: 222000, oldPrice: 247000, discount: 10, category: 'accessories' },
  { id: 'acc-charge-port-lamp-byd-song', name: "Zaryad porti chirog'i, BYD Song L", img: 'https://exzap.uz/photo_upload/18598z_1.webp', price: 74000, oldPrice: 84000, discount: 12, category: 'accessories' },
  { id: 'acc-wheel-cap-lixiang', name: "G'ildirak diski qopqog'i, LiXiang", img: 'https://exzap.uz/photo_upload/17750z_1.webp', price: 45000, oldPrice: 51000, discount: 12, category: 'accessories' },
  { id: 'acc-mudflaps-lixiang-l9', name: "Loy tutgichlar to'plami, LiXiang L9", img: 'https://exzap.uz/photo_upload/17644z_1.webp', price: 133000, oldPrice: 148000, discount: 10, category: 'accessories' },
  { id: 'acc-mudflaps-lixiang-l7', name: "Loy tutgichlar to'plami, LiXiang L7", img: 'https://exzap.uz/photo_upload/17645z_1.webp', price: 134000, oldPrice: 149000, discount: 10, category: 'accessories' },
  { id: 'acc-mudflaps-lixiang-l6', name: "Loy tutgichlar to'plami, LiXiang L6", img: 'https://exzap.uz/photo_upload/17648z_1.webp', price: 148000, oldPrice: 166000, discount: 11, category: 'accessories' },
  { id: 'acc-air-mattress-lixiang-l9', name: "Shishiriladigan matras (avtomobil uchun), LiXiang L9", img: 'https://exzap.uz/photo_upload/17754z_1.webp', price: 2948000, oldPrice: 3136000, discount: 6, category: 'accessories' },
  { id: 'acc-air-mattress-lixiang-l7', name: "Shishiriladigan matras (avtomobil uchun), LiXiang L7", img: 'https://exzap.uz/photo_upload/17755z_1.webp', price: 2960000, oldPrice: 3149000, discount: 6, category: 'accessories' },
  { id: 'acc-tent-lixiang', name: "Avtomobil chodiri (palatka), LiXiang L6/7/8/9", img: 'https://exzap.uz/photo_upload/17803z_1.webp', price: 5180000, oldPrice: 5453000, discount: 5, category: 'accessories' },
  { id: 'acc-trash-bag-lixiang', name: "Magnitli axlat qopi, LiXiang", img: 'https://exzap.uz/photo_upload/17756z_1.webp', price: 339000, oldPrice: 377000, discount: 10, category: 'accessories' },
  { id: 'acc-rear-camera-lixiang', name: "Orqa ko'rish kamerasi, LiXiang L7/8/9", img: 'https://exzap.uz/photo_upload/17682z_1.webp', price: 1003000, oldPrice: 1090000, discount: 8, category: 'accessories' },
  { id: 'acc-rear-camera-byd-e2', name: "Orqa ko'rish kamerasi, BYD E2", img: 'https://exzap.uz/photo_upload/17449z_1.webp', price: 310000, oldPrice: 352000, discount: 12, category: 'accessories' },
  { id: 'acc-side-camera-lixiang', name: "Yon kamera (chap), LiXiang L7/8/9", img: 'https://exzap.uz/photo_upload/18776z_1.webp', price: 1916000, oldPrice: 2083000, discount: 8, category: 'accessories' },
  { id: 'acc-side-camera-right-lixiang', name: "Yon kamera (o'ng), LiXiang L7/8/9", img: 'https://exzap.uz/photo_upload/18777z_1.webp', price: 1924000, oldPrice: 2091000, discount: 8, category: 'accessories' },
  { id: 'acc-bt-key-lixiang', name: "Bluetooth kalit, LiXiang L6/7/8/9", img: 'https://exzap.uz/photo_upload/18782z_1.webp', price: 1121000, oldPrice: 1232000, discount: 9, category: 'accessories' },

  // Avtokimyo
  { id: 'chem-moisture-remover-petrol', name: "Namlik tozalagich (benzinli dvigatel uchun), 150ml", img: 'https://exzap.uz/photo_upload/12476m_1.webp', price: 60000, oldPrice: 70000, discount: 14, category: 'chemicals' },
  { id: 'chem-coolant-flush-felix', name: 'Sovutish tizimini yuvish vositasi FELIX, 500ml', img: 'https://exzap.uz/photo_upload/22073m_1.webp', price: 46000, oldPrice: 52000, discount: 12, category: 'chemicals' },
  { id: 'chem-injector-cleaner-petrol', name: 'Forsunka tozalagich (benzinli), 150ml', img: 'https://exzap.uz/photo_upload/12440m_1.webp', price: 73000, oldPrice: 84000, discount: 13, category: 'chemicals' },
  { id: 'chem-diesel-antigel-felix', name: "Dizel yoqilg'isi uchun antigel FELIX, 340ml", img: 'https://exzap.uz/photo_upload/14433m_1.webp', price: 66000, oldPrice: 74000, discount: 11, category: 'chemicals' },
];

const INFO_CONTENT = {
  about: { title: 'Kompaniya haqida', body: "AutoMart.uz — O'zbekiston bo'ylab yetkazib berish bilan ishlaydigan avtomobil ehtiyot qismlari va moylar bo'yicha onlayn do'kon. Biz original mahsulotlar, qulay narx va tez yetkazib berishni taklif qilamiz." },
  jurnal: { title: 'Jurnal', body: "Avtomobilni parvarish qilish, ehtiyot qismlarni tanlash va texnik xizmat ko'rsatish bo'yicha maqolalar tez orada shu yerda joylashtiriladi." },
  oferta: { title: 'Ommaviy oferta', body: "AutoMart.uz saytidan foydalanish orqali siz xarid shartlarini qabul qilasiz. To'liq shartnoma matni tez orada e'lon qilinadi." },
  delivery: { title: 'Yetkazib berish shartlari', body: "Toshkent bo'yicha 1-2 kun ichida, viloyatlarga 2-5 kun ichida yetkazib beramiz. Yetkazib berish narxi hudud va buyurtma summasiga qarab belgilanadi." },
  returns: { title: 'Almashtirish va qaytarish', body: "Mahsulotni 14 kun ichida, original qadoqda va ishlatilmagan holatda qaytarish yoki almashtirish mumkin." },
  payment: { title: "To'lov usullari", body: "Naqd pul, plastik karta (Uzcard/Humo) va onlayn to'lov tizimlari orqali to'lov qabul qilinadi. Muddatli to'lov (12 oygacha) imkoniyati mavjud." },
  terms: { title: 'Foydalanish shartlari', body: "Saytdan foydalanish orqali siz ushbu foydalanish shartlariga rozilik bildirasiz. Barcha huquqlar himoyalangan." },
  privacy: { title: 'Maxfiylik siyosati', body: "Sizning shaxsiy ma'lumotlaringiz faqat buyurtmani rasmiylashtirish va aloqa uchun ishlatiladi hamda uchinchi shaxslarga berilmaydi." },
};

function money(n) {
  return Math.round(n).toLocaleString('ru-RU').replace(/,/g, ' ') + " so'm";
}

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// ---- Search (ranked, works from a single letter) ----
function normText(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/[‘’`ʻʼ']/g, "'")
    .replace(/o'/g, 'o').replace(/g'/g, 'g')
    .replace(/[^a-z0-9а-яё\s\/\-\.]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
function editDistance(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  const prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let last = prev[0]; prev[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, last + (a[i - 1] === b[j - 1] ? 0 : 1));
      last = tmp;
    }
  }
  return prev[n];
}
function scoreProduct(p, tokens) {
  const cat = CATEGORIES.find((c) => c.id === p.category);
  const name = normText(p.name);
  const catName = normText(cat ? cat.name : '');
  const words = name.split(/[\s\/\-,]+/).filter(Boolean);
  let score = 0;
  for (const t of tokens) {
    let best = 0;
    if (name.startsWith(t)) best = 10;
    else if (words.some((w) => w.startsWith(t))) best = 7;
    else if (name.includes(t)) best = 4;
    else if (t.length >= 4 && words.some((w) => Math.abs(w.length - t.length) <= 2 && editDistance(w, t) <= 1)) best = 3;
    if (catName.includes(t)) best = Math.max(best, catName.startsWith(t) ? 5 : 3);
    score += best;
  }
  return score;
}
function searchProducts(query, list) {
  const q = normText(query);
  const src = list || PRODUCTS;
  if (!q) return src.slice();
  const tokens = q.split(' ').filter(Boolean);
  return src
    .map((p) => ({ p, s: scoreProduct(p, tokens) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || b.p.discount - a.p.discount)
    .map((x) => x.p);
}

function readJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function writeJSON(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

// ---- Cart ----
function getCart() { return readJSON('automart_cart', []); }
function setCart(cart) { writeJSON('automart_cart', cart); updateCartBadge(); }
function addToCart(id, qty = 1) {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item) item.qty += qty; else cart.push({ id, qty });
  setCart(cart);
}
function removeFromCart(id) { setCart(getCart().filter((i) => i.id !== id)); }
function setQty(id, qty) {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  if (qty <= 0) { removeFromCart(id); return; }
  item.qty = qty;
  setCart(cart);
}
function cartItemsWithData() {
  return getCart()
    .map((i) => ({ ...i, product: PRODUCTS.find((p) => p.id === i.id) }))
    .filter((i) => i.product);
}
function cartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }
function cartTotal() { return cartItemsWithData().reduce((s, i) => s + i.product.price * i.qty, 0); }

// ---- Favorites ----
function getFavorites() { return readJSON('automart_favs', []); }
function setFavorites(f) { writeJSON('automart_favs', f); updateFavBadge(); }
function isFavorite(id) { return getFavorites().includes(id); }
function toggleFavorite(id) {
  const f = getFavorites();
  const idx = f.indexOf(id);
  if (idx >= 0) f.splice(idx, 1); else f.push(id);
  setFavorites(f);
  return f.includes(id);
}
function favCount() { return getFavorites().length; }

// ---- Orders ----
function getOrders() { return readJSON('automart_orders', []); }
function placeOrder() {
  const items = cartItemsWithData();
  if (!items.length) return null;
  const order = {
    id: 'AM-' + Date.now().toString().slice(-6),
    date: new Date().toISOString(),
    items: items.map((i) => ({ id: i.id, name: i.product.name, qty: i.qty, price: i.product.price })),
    total: cartTotal(),
  };
  const orders = getOrders();
  orders.unshift(order);
  writeJSON('automart_orders', orders);
  setCart([]);
  return order;
}

// ---- Garage ----
function getGarage() { return readJSON('automart_garage', []); }
function addVehicle(v) {
  const g = getGarage();
  g.push({ ...v, id: 'v' + Date.now() });
  writeJSON('automart_garage', g);
}
function removeVehicle(id) { writeJSON('automart_garage', getGarage().filter((v) => v.id !== id)); }

// ---- Profile ----
function getProfile() { return readJSON('automart_profile', null); }
function setProfile(p) { writeJSON('automart_profile', p); }
function clearProfile() { localStorage.removeItem('automart_profile'); }

// ---- Badges (header) ----
function bumpBadge(el) {
  el.classList.remove('animate-pop');
  void el.offsetWidth;
  el.classList.add('animate-pop');
}
function updateCartBadge() {
  document.querySelectorAll('.js-cart-count').forEach((el) => {
    const c = cartCount();
    const changed = el.textContent !== String(c);
    el.textContent = c;
    el.classList.toggle('hidden', c === 0);
    if (changed && c > 0) bumpBadge(el);
  });
}
function updateFavBadge() {
  document.querySelectorAll('.js-fav-count').forEach((el) => {
    const c = favCount();
    const changed = el.textContent !== String(c);
    el.textContent = c;
    el.classList.toggle('hidden', c === 0);
    if (changed && c > 0) bumpBadge(el);
  });
}
