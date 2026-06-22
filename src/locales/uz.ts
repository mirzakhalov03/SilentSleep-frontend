const uz = {
  nav: {
    apnea: "Xurrak va Apnoe",
    treatment: "Davolash",
    about: "Biz haqimizda",
    services: "Xizmatlar",
    branches: "Filiallar",
    blog: "Blog",
    test: "Uyqu testi",
    cta: "UyquLab",
  },
  hero: {
    eyebrow: "AASM standartlari",
    headline: "Xurrak va uyqudagi nafas to'xtashi sizni bezovta qiladimi?",
    subtext:
      "Sokin Uyqu — zamonaviy va xalqaro standartlardagi usullar bilan xurrak va uyqu apnoesini (OSA) samarali davolaydigan markaz. Birinchi qadamni bugun qo'ying.",
    ctaPrimary: "Bepul uyqu testidan o'tish",
    ctaSecondary: "Ko'proq bilish",
    stats: [
      { value: "3", label: "filial: Toshkent · Andijon · Farg'ona" },
      { value: "~3 soat", label: "uy testi natijasi (HSAT)" },
      { value: "AASM", label: "xalqaro tashxis standarti" },
    ],
  },
  location: {
    title: "Bizning manzil",
    address: "Qashqar dahasi, 24A, 100017, Toshkent",
    phone: "77 103 38 83",
    hoursTitle: "Ish vaqti",
    hours: [
      { day: "Dushanba", time: "09:00 – 20:00" },
      { day: "Seshanba", time: "09:00 – 20:00" },
      { day: "Chorshanba", time: "09:00 – 20:00" },
      { day: "Payshanba", time: "09:00 – 20:00" },
      { day: "Juma", time: "09:00 – 20:00" },
      { day: "Shanba", time: "09:00 – 17:00" },
      { day: "Yakshanba", time: "Dam olish kuni" },
    ],
  },
  apnea: {
    subtitle: "KASALLIKNI TUSHUNISH",
    title: "Uyqu apnoesi nima?",
    description:
      "Uyqu apnoesi — uyqu davomida nafas qayta-qayta to'xtab, yana boshlanadigan buzilish. Bunday pauzalar bir kechada yuzlab marta yuz berishi mumkin. Har bir pauza miya va tanani kisloroddan mahrum etadi, tiklovchi uyquni parchalaydi. Davolanmasa, gipertoniya, insult va 2-tip qandli diabet xavfini sezilarli oshiradi.",
    ahiTitle: "AHI ko'rsatkichi",
    ahiBody:
      "Kasallik og'irligi Apnoe-Gipopnoe indeksi (AHI) — bir soatlik uyqudagi nafas hodisalari soni bilan o'lchanadi.",
    ahiLevels: [
      { range: "5–14", label: "Yengil" },
      { range: "15–29", label: "O'rta" },
      { range: "30+", label: "Og'ir" },
    ],
    ahiNote:
      "Tashxis qo'yish uchun laboratoriyada polisomnografiya (PSG) yoki tasdiqlangan uy testi (HSAT) talab etiladi.",
    types: [
      {
        icon: "obstructive",
        title: "Obstruktiv apnoe (OSA)",
        description:
          "Eng keng tarqalgan turi. Tomoq mushaklari bo'shashib nafas yo'lini yopadi — odam nafas olishga urinsa-da, havo o'tmaydi.",
      },
      {
        icon: "central",
        title: "Markaziy apnoe",
        description:
          "Miya nafas mushaklariga signal yuborishni qisqa muddatga to'xtatadi. Ko'pincha yurak yetishmovchiligi yoki insult bilan bog'liq.",
      },
      {
        icon: "complex",
        title: "Aralash (murakkab) apnoe",
        description:
          "Obstruktiv va markaziy apnoening belgilarini birlashtiradi. Ba'zan CPAP boshlangach yuzaga keladi va ehtiyotkor sozlashni talab qiladi.",
      },
    ],
  },
  blog: {
    title: "Blogimiz",
    viewAll: "Barchasini ko'rish",
    readMore: "Ko'proq o'qish",
    posts: [
      {
        id: "1",
        title: "Uyqu apnoesining 7 ta asosiy belgisi",
        excerpt:
          "Ko'pchilik xurrakni oddiy holat deb biladi. Ammo ba'zi belgilar apnoe mavjudligini ko'rsatishi mumkin.",
        date: "12.05.2026",
        imageUrl: "",
        slug: "apnoe-belgilari",
      },
      {
        id: "2",
        title: "CPAP terapiyasi: nima va qanday ishlaydi?",
        excerpt:
          "CPAP — uyqu apnoesini davolashda oltin standart. Qurilma qanday ishlashini bilib oling.",
        date: "05.05.2026",
        imageUrl: "",
        slug: "cpap-terapiyasi",
      },
      {
        id: "3",
        title: "Sog'lom uyqu uchun 10 ta maslahat",
        excerpt:
          "Uyqu gigienasi — sifatli uyquning asosi. Har kuni amal qilishingiz mumkin bo'lgan oddiy ko'rsatmalar.",
        date: "28.04.2026",
        imageUrl: "",
        slug: "soglom-uyqu-maslahatlari",
      },
    ],
  },
  test: {
    title: "Uyqu testini o'ting",
    subtitle:
      "STOP-BANG anketasi: 8 ta savolga «Ha» yoki «Yo'q» deb javob bering va uyqu apnoesi xavfingizni bilib oling.",
    next: "Keyingisi",
    result: "Natija",
    restart: "Qaytadan boshlash",
    contact: "Shifokor bilan bog'lanish",
    progress: (current: number, total: number) => `${current} / ${total}`,
    questions: [
      {
        id: 1,
        question: "Baland xurraklayman (xurragim yopiq eshik ortidan ham eshitiladi).",
        options: [
          { label: "Ha", score: 1 },
          { label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 2,
        question: "Kunduzi ko'pincha charchagan, holsiz yoki uyquchan bo'laman.",
        options: [
          { label: "Ha", score: 1 },
          { label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 3,
        question: "Kimdir uyquda nafasim to'xtaganini kuzatgan.",
        options: [
          { label: "Ha", score: 1 },
          { label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 4,
        question: "Qon bosimim yuqori yoki uni davolayapman.",
        options: [
          { label: "Ha", score: 1 },
          { label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 5,
        question: "Tana vazn indeksim (BMI) 35 dan yuqori.",
        options: [
          { label: "Ha", score: 1 },
          { label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 6,
        question: "Yoshim 50 dan katta.",
        options: [
          { label: "Ha", score: 1 },
          { label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 7,
        question: "Bo'yin aylanam 40 sm dan katta.",
        options: [
          { label: "Ha", score: 1 },
          { label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 8,
        question: "Erkak jinsiga mansubman.",
        options: [
          { label: "Ha", score: 1 },
          { label: "Yo'q", score: 0 },
        ],
      },
    ],
    results: {
      low: {
        level: "low" as const,
        title: "Past xavf",
        message:
          "STOP-BANG bo'yicha xavf past. Agar baribir kuchli xurrak yoki kunduzgi charchoq bezovta qilsa, konsultatsiya foydali bo'ladi.",
      },
      medium: {
        level: "medium" as const,
        title: "O'rta xavf",
        message:
          "O'rta darajadagi xavf aniqlandi. Obyektiv tekshiruv (HSAT yoki PSG) holatni aniqlashtirishni tavsiya qilamiz.",
      },
      high: {
        level: "high" as const,
        title: "Yuqori xavf",
        message:
          "Yuqori xavf aniqlandi. Iloji boricha tezroq somnolog konsultatsiyasi va uyqu tekshiruvidan o'tish tavsiya etiladi.",
      },
    },
  },
  process: {
    eyebrow: "Biz haqimizda",
    title: "Tinch uyquga ilmiy yondashuv",
    lead:
      "Sokin Uyqu — xurrak va uyqu apnoesini (OSA) xalqaro AASM standartlari bo'yicha tashxislash va davolashga ixtisoslashgan markaz. Biz har bir bemorga aniq tashxisdan boshlab, shaxsiy davolash rejasigacha to'liq yo'lni taklif qilamiz. Maqsadimiz — odamni shunchaki «xurrakdan» emas, uning sog'lig'iga ta'sir qiladigan sababdan xalos qilish.",
    steps: [
      {
        num: "01",
        title: "Tashxis",
        description:
          "Konsultatsiya, so'ngra uy uyqu testi (HSAT) yoki klinikada polisomnografiya (PSG) — muammoning og'irligini (AHI) aniq o'lchaymiz.",
      },
      {
        num: "02",
        title: "Sababni topish",
        description:
          "DISE (dori uyqusida endoskopiya) yordamida nafas yo'li qaysi darajada yopilishini aniqlaymiz.",
      },
      {
        num: "03",
        title: "Davolash",
        description:
          "CPAP terapiyasi, og'iz qurilmalari yoki zarur bo'lsa ko'p darajali jarrohlik — har biriga moslab tanlanadi.",
      },
    ],
  },
  why: {
    eyebrow: "Nega Sokin Uyqu?",
    title: "Ishonchli, ilmiy va to'liq yondashuv",
    items: [
      {
        icon: "shield",
        title: "AASM standartlari",
        description: "Tashxis va davolash xalqaro somnologiya standartlari bo'yicha.",
      },
      {
        icon: "check",
        title: "To'liq yo'l bir joyda",
        description: "Konsultatsiyadan tashxis, CPAP va jarrohlikkacha — bitta markazda.",
      },
      {
        icon: "pulse",
        title: "Zamonaviy diagnostika",
        description: "HSAT, polisomnografiya (PSG) va DISE — aniq va obyektiv.",
      },
      {
        icon: "pin",
        title: "3 shaharda",
        description: "Toshkent, Andijon va Farg'onada qabul qilamiz.",
      },
    ],
  },
  services: {
    eyebrow: "Xizmatlar va narxlar",
    title: "Tashxisdan davolashgacha — to'liq yo'l",
    lead: "Narxlar so'mda ko'rsatilgan. Aniq summa va sizga mos format konsultatsiyada belgilanadi.",
    columns: { service: "Xizmat", price: "Narx (so'm, …dan)", note: "Izoh" },
    rows: [
      { service: "Birinchi konsultatsiya (40 daq)", price: "250 000", note: "Kirish nuqtasi" },
      { service: "Uy uyqu testi (HSAT)", price: "1 950 000", note: "Uyda; natija ~3 soatda" },
      { service: "HSAT — klinikada", price: "2 450 000", note: "Natija ~3 soatda" },
      { service: "Polisomnografiya (PSG)", price: "2 900 000", note: "To'liq laboratoriya tekshiruvi" },
      { service: "Split-night", price: "3 500 000", note: "Tashxis + titratsiya bir kechada" },
      { service: "DISE (dori uyqusida endoskopiya)", price: "2 500 000", note: "Nafas yo'lini baholash" },
      { service: "CPAP titratsiya (statsionar)", price: "2 000 000", note: "Optimal bosimni topish" },
      { service: "Telemeditsina", price: "200 000", note: "Masofaviy konsultatsiya" },
    ],
    footnotePre:
      "Operativ davolash (burundan til asosigacha, 4 daraja + ko'p darajali jarrohlik) narxi konsultatsiyada belgilanadi. CPAP/BiPAP qurilma ijarasi va uy testi ",
    footnoteLink: "UyquLab",
    footnotePost: " orqali. Aniq narxni registraturadan aniqlang.",
  },
  branches: {
    eyebrow: "Filiallar",
    title: "Bizni 3 shaharda topasiz",
    routeLabel: "Yo'lni ko'rsatish →",
    items: [
      {
        tag: "Asosiy",
        city: "Toshkent",
        lines: [
          "Qashqar dahasi, 24A, 100017",
          "Dush–Juma · 09:00–20:00 · Shanba · 09:00–17:00",
          "Eng yaqin metro — Abdulla Qodiriy",
        ],
        routeUrl: "https://yandex.uz/maps/-/CPspZAjD",
        mapSrc:
          "https://www.google.com/maps?q=Qashqar%20dahasi%2024A%20Toshkent%20Abdulla%20Qodiriy&output=embed",
        mapTitle: "Toshkent filiali xaritasi",
      },
      {
        tag: "Farg'ona vodiysi",
        city: "Andijon",
        lines: [
          "Qabul jadvali bo'yicha somnolog konsultatsiyasi va uy testi (HSAT).",
          "Aniq manzil va kunlar registraturada.",
        ],
        routeUrl: null,
        mapSrc: "https://www.google.com/maps?q=Andijon&output=embed",
        mapTitle: "Andijon filiali xaritasi",
      },
      {
        tag: "Farg'ona vodiysi",
        city: "Farg'ona",
        lines: [
          "Vodiy hududidagi bemorlar uchun konsultatsiya va tashxis xizmatlari.",
          "Aniq manzil va kunlar registraturada.",
        ],
        routeUrl: null,
        mapSrc: "https://www.google.com/maps?q=Farg'ona&output=embed",
        mapTitle: "Farg'ona filiali xaritasi",
      },
    ],
  },
  faq: {
    eyebrow: "Savol-javob",
    title: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "Xurrak — bu kasallikmi?",
        a: "Xurrakning o'zi har doim ham kasallik emas, ammo u uyqu apnoesining eng keng tarqalgan belgisi bo'lishi mumkin. Agar xurrak kuchli bo'lsa, kunduzi charchoq, uyg'onganda bosh og'rig'i yoki nafas to'xtashi kuzatilsa — tekshiruvdan o'tish kerak.",
      },
      {
        q: "Uyqu apnoesi qanday aniqlanadi?",
        a: "Aniq tashxis uchun obyektiv test kerak: uyda HSAT yoki klinikada polisomnografiya (PSG). Ular bir soatlik uyqudagi nafas to'xtashlari sonini (AHI) o'lchaydi.",
      },
      {
        q: "AHI nima va qancha bo'lishi normal?",
        a: "AHI — Apnoe-Gipopnoe indeksi. Yengil: 5–14, o'rta: 15–29, og'ir: 30+. 5 dan past odatda normal hisoblanadi.",
      },
      {
        q: "CPAP — bu umrbod-mi?",
        a: "CPAP og'ir holatlarda eng samarali usul. Ba'zi bemorlarda vazn kamaytirish, jarrohlik yoki og'iz qurilmasi muqobil bo'lishi mumkin. Reja har doim individual.",
      },
      {
        q: "Tekshiruvga tayyorgarlik kerakmi?",
        a: "Uy testi (HSAT) uchun maxsus tayyorgarlik shart emas — qurilmani uyda tunab, ertasiga qaytarasiz. Batafsil ko'rsatmalar konsultatsiyada beriladi.",
      },
      {
        q: "Bolalarda ham uyqu apnoesi bo'ladimi?",
        a: "Ha. Bolalarda ko'pincha bodomsimon bezlar yoki adenoid kattalashuvi sabab bo'ladi. Bola xurrak qilsa, og'zi ochiq uxlasa yoki kunduzi diqqati zaif bo'lsa — LOR ko'rigi tavsiya etiladi.",
      },
    ],
  },
  contact: {
    eyebrow: "Bog'lanish",
    title: "Birinchi qadamni bugun qo'ying",
    socialsLabel: "Ijtimoiy tarmoqlar",
    formTitle: "Qayta qo'ng'iroq so'rash",
    nameLabel: "Ismingiz",
    phoneLabel: "Telefon raqamingiz",
    phonePlaceholder: "+998 __ ___ __ __",
    commentLabel: "Izoh (ixtiyoriy)",
    submit: "Yuborish",
    success: "Rahmat! Tez orada bog'lanamiz.",
  },
  footer: {
    tagline:
      "Sog'lom uyqu — sog'lom hayot. Xurrak va uyqu apnoesini xalqaro standartlar bo'yicha davolaymiz.",
    rights: "© 2026 Sokin Uyqu. Barcha huquqlar himoyalangan.",
    contact: "Aloqa",
    nav: "Sahifalar",
  },
  about: {
    badge: "Biz haqimizda",
    headline: "Uyqu sog'lig'ingiz — bizning maqsadimiz",
    paragraphs: [
      "Sokin Uyqu — uyqu apnoesi va xurrak muammolarini zamonaviy usullar bilan davolashga ixtisoslashgan tibbiyot markazi. Biz har bir bemorga individual yondashuv va ilmiy asoslangan davolash usullarini taklif etamiz.",
      "Klinikamiz uyqu laboratoriyasi, diagnostika va davolash bo'limlari bilan to'liq jihozlangan. Mutaxassislarimiz uyqu tibbiyoti sohasida keng tajribaga ega bo'lib, CPAP terapiyasi va boshqa zamonaviy davolash usullarini qo'llaydi.",
    ],
    values: [
      {
        icon: "diagnosis",
        title: "Aniq tashxis",
        description: "Polisomnografiya va uy uyqu testlari orqali to'g'ri va tezkor tashxis qo'yiladi.",
      },
      {
        icon: "treatment",
        title: "Zamonaviy davolash",
        description: "CPAP terapiyasi, jarrohlik va boshqa ilg'or usullar bilan samarali davolash.",
      },
      {
        icon: "care",
        title: "Shaxsiy yondashuv",
        description: "Har bir bemor uchun alohida davolash rejasi va doimiy kuzatuv ta'minlanadi.",
      },
    ],
    teamBadge: "Jamoamiz",
    teamTitle: "Bizning shifokorlar",
    teamSubtitle: "Uyqu tibbiyoti sohasida tajribali mutaxassislar jamoasi.",
    doctors: [
      {
        name: "Dr. Tuygunxon Muzaffarov",
        title: "LOR · rinoxirurg · somnolog-xirurg · Bosh shifokor",
        bio: "Xurrak va uyqu apnoesini jarrohlik hamda konservativ usullar bilan davolashga ixtisoslashgan.",
        imageUrl: "",
      },
      {
        name: "Dr. [Ism Familiya]",
        title: "Pulmonolog",
        bio: "Nafas yo'llari va o'pka kasalliklarini davolashda ixtisoslashgan.",
        imageUrl: "",
      },
      {
        name: "Dr. [Ism Familiya]",
        title: "Nevrolog",
        bio: "Uyqu buzilishlari va markaziy asab tizimi kasalliklari bo'yicha mutaxassis.",
        imageUrl: "",
      },
    ],
  },
  placeholders: {
    treatment: {
      title: "Davolash",
      body: "Bu sahifa tez orada tayyorlanadi.",
    },
    sleeptrack: {
      title: "SleepTrack",
      body: "Bu sahifa tez orada tayyorlanadi.",
    },
  },
  sleeptrack: {
    hero: {
      headline: "Uyqu sifatingizni uydan turib aniqlang",
      subtext:
        "SleepTrack — zamonaviy qurilma yordamida uyda uxlagan holda uyqu diagnostikasi. Klinikaga kelmasdan tashxis qo'ying.",
    },
    tabs: {
      doctors: "Shifokorlar",
      equipments: "Uskunalar",
      services: "Xizmatlar",
      benefits: "Afzalliklar",
    },
    doctors: {
      slogan:
        "UYQU PAYTIDA BEMOR BILAN NIMA BO'LAYOTGANINI QANCHA KO'P BILSAK — SHUNCHA YAXSHI DAVOLAYMIZ!",
      paragraphs: [
        "Bemor uchun sezilmay boshlanadigan va rivojlanadigan kasalliklar eng xavflisi hisoblanadi. Inson ularni o'z vaqtida tana olmasa, o'ziga o'z vaqtida yordam ko'rsata olmaydi…",
        "Bunday kasalliklarga SOAS ham kiradi (obstruktiv uyqu apnoe sindromi).",
        "SOAS uyqu bilan bevosita bog'liq eng keng tarqalgan patologik holatlardan biri bo'lib, iqtisodiy rivojlangan mamlakatlarda undan aziyat chekuvchi bemorlar soni tobora ortib bormoqda.",
        "Ilmiy jihatdan isbotlanganki, SOAS arterial gipertenziya (AG), yurak ishemik kasalligi (YuIK), yurak ritmi va o'tkazuvchanlik buzilishlari, o'ng qorincha yurak etishmovchiligi va miya insultining xavf omili bo'lishi mumkin.",
        "Shifokorlarga ma'lumki, SOAS instrumental diagnostikasining «oltin standarti» polisomnografiya (PSG) yoki kardiorespiratur monitoring (KRM) hisoblanadi. Ushbu usullar o'qitilgan xodimlar bilan ixtisoslashtirilgan tibbiy bo'limni talab qiladi. Bunday bo'limlar har bir tibbiy muassasada mavjud emasligini sir emas. Va muhtoj bo'lganlarga hamisha qulay ham emas.",
      ],
      optionsIntro:
        "Amaliyotchi shifokorlar (terapevtlar, endokrinologlar, LOR, kardiologlar, dietologlar, bariatrlar, pulmonologlar va boshqalar) ko'pincha o'z bemorlarini uyquda nafas buzilishi bo'yicha tekshirish zarurati bilan duch kelishadi (ko'pincha keyingi davolash taktikasi shunga bog'liq, chunki SOAS ko'plab qo'shimcha tashxislarning sababi bo'lishi mumkin). Bunday hollarda shifokorning ikki varianti bor:",
      options: [
        "Bemorni PSG o'tkazish uchun uyqu buzilishlari bo'limiga yo'naltirish;",
        "Bemorni o'z vositalari yordamida SOAS aniqlash maqsadida tekshirish (skrining respirator monitoring yordamida).",
      ],
      afterOptions: [
        "Birinchi holda bemor boshqa tibbiy muassasaga yo'naltiriladi va u qaytib kelishi dargumon (chunki uyqu buzilishlari bo'limida ko'p tarmoqli shifokorlar tarkibi mavjud bo'lib, ular diagnostikadan so'ng bemorni o'zlari davolashga qodir).",
        "Ikkinchi holda shifokor «qo'l ostida» skrining respirator qurilma, vaqt va bu tadqiqot bilan shug'ullanish ishtiyoqiga ega bo'lishi kerak.",
        "Natijada — SOAS tashxisini qo'yish yoki rad etish masalasi, qoida tariqasida, hal etilmay qoladi. Va buning oqibatida davolash samaradorligi zarar ko'rishi mumkin.",
      ],
    },
    equipments: [
      {
        title: "WatchPAT One",
        description:
          "Bir martalik foydalanish uchun mo'ljallangan qurilma. Barmoqqa, bilakka va ko'krakka biriktiriladi. Uyda ishlatish juda qulay.",
        imageUrl: "",
        cta: { label: "Batafsil", href: "#" },
      },
      {
        title: "WatchPAT 300",
        description:
          "Qayta ishlatish mumkin bo'lgan model. Klinikalar va diagnostika markazlari uchun ideal.",
        imageUrl: "",
      },
    ],
    services: {
      title: "Xizmatlar va narxlar",
      packages: [
        {
          name: '"Kompyuter somnografiyasi"',
          price: "800 000 so'm",
          salePrice: null,
          features: [
            "WatchPAT qurilmasini sozlash va dasturlash",
            "Qurilmani berish",
            "Yo'riqnoma",
            "Ma'lumotlarni o'qish va texnik hisobot tuzish",
          ],
        },
        {
          name: '"Kompyuter somnografiyasi Premium"',
          price: "1 200 000 so'm",
          salePrice: "990 000 so'm",
          features: [
            "Xizmat O'zbekistonning istalgan hududida ko'rsatiladi",
            "WatchPAT One qurilmasini sozlash va dasturlash",
            "Qurilmani berish",
            "Mobil ilova o'rnatishda yordam va yo'riqnoma",
            "Ma'lumotlarni o'qish va texnik hisobot tuzish",
          ],
        },
      ],
      packageLabel: "Xizmat",
      priceLabel: "Narx",
      saleLabel: "Aksiya",
      paymentTitle: "To'lov usullari",
      paymentCash: {
        title: "NAQD PUL:",
        items: ["Klinikaga kelib to'lash."],
      },
      paymentCard: {
        title: "NAQD PULSIZ:",
        items: [
          "Istalgan bank orqali pul o'tkazma.",
          "Humo, Uzcard, Visa, Mastercard kartalar bilan to'lash.",
          "Payme yoki Click orqali onlayn to'lash (komissiyasiz).",
        ],
      },
    },
    benefits: [
      {
        icon: "home",
        title: "Uydan turib",
        description: "Klinikaga kelishning hojati yo'q — o'z to'shagingizda uxlaysiz.",
      },
      {
        icon: "fast",
        title: "Tez natija",
        description: "Tashxis 24 soat ichida tayyorlanadi.",
      },
      {
        icon: "accurate",
        title: "Yuqori aniqlik",
        description: "Avtomatik hisobot 90% ishonchlilik darajasiga ega.",
      },
      {
        icon: "affordable",
        title: "Qulay narx",
        description: "Klinikadagi uyqu laboratoriyasiga nisbatan ancha arzonroq.",
      },
    ],
  },
}

export default uz
export type Translations = typeof uz
