const uz = {
  nav: {
    apnea: "Xurrak va Apnoe",
    treatment: "Davolash",
    about: "Biz Haqimizda",
    blog: "Blog",
    test: "Uyqu testi",
    cta: "SleepTrack",
  },
  hero: {
    headline: "Xurrak va uyqudagi nafas to'xtashi sizni bezovta qiladimi?",
    subtext:
      "SilentSleep klinikasi zamonaviy usullar yordamida xurrak va uyqu apnoesini samarali davolaydi. Birinchi qadamni bugun qo'ying.",
    ctaPrimary: "Bog'lanish",
    ctaSecondary: "Ko'proq bilish",
  },
  location: {
    title: "Bizning manzil",
    address: "Qashqar dahasi, 24A, 100017, Toshkent",
    phone: "77 113 38 83",
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
      "Uyqu apnoesi — uyqu davomida nafas qayta-qayta to'xtab, yana boshlanadigan buzilish. Bunday pauzalar bir kechada yuzlab marta yuz berishi mumkin. Har bir pauza miya va tanani kisloroddan mahrum etadi, tiklovchi uyquni parchalaydi, vaqt o'tib yurak, miya va modda almashinuviga zarba beradi. Davolanmasa, gipertoniya, insult va 2-tip qandli diabet xavfini sezilarli oshiradi.",
    ahiTitle: "AHI KO'RSATKICHI",
    ahiBody:
      "Kasallik og'irligi Apnoe-Gipopnoe indeksi (AHI) — bir soatlik uyqudagi nafas hodisalari soni bilan o'lchanadi. Yengil: 5–14 · O'rta: 15–29 · Og'ir: 30+. Tashxis qo'yish uchun laboratoriyada polisomnografiya yoki tasdiqlangan uy testi talab etiladi.",
    types: [
      {
        icon: "obstructive",
        title: "Obstruktiv uyqu apnoesi",
        description:
          "Eng keng tarqalgan turi. Tomoq mushaklari bo'shashib nafas yo'lini yopadi — odam nafas olishga urinsa-da, havo o'tmaydi.",
      },
      {
        icon: "central",
        title: "Markaziy uyqu apnoesi",
        description:
          "Miya nafas mushaklariga signal yuborishni qisqa muddatga to'xtatadi. Ko'pincha yurak yetishmovchiligi, insult yoki opioid iste'moli bilan bog'liq.",
      },
      {
        icon: "complex",
        title: "Aralash murakkab apnoe",
        description:
          "Obstruktiv va markaziy apnoening belgilarini birlashtiradi. Ba'zan CPAP davolanishi boshlangach yuzaga keladi va ehtiyotkor sozlashni talab qiladi.",
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
        title: "Uyqu apnoesining 7 ta asosiy belgilari",
        excerpt:
          "Ko'pchilik xurrakni oddiy holat deb hisoblaydi. Ammo ba'zi belgilar apnoe mavjudligini ko'rsatishi mumkin.",
        date: "12 May, 2026",
        imageUrl: "",
        slug: "apnoe-belgilari",
      },
      {
        id: "2",
        title: "CPAP terapiyasi: nima va qanday ishlaydi?",
        excerpt:
          "CPAP — uyqu apnoesini davolashda oltin standart. Qurilma qanday ishlashini va undan qanday foydalanishni bilib oling.",
        date: "5 May, 2026",
        imageUrl: "",
        slug: "cpap-terapiyasi",
      },
      {
        id: "3",
        title: "Sog'lom uyqu uchun 10 ta maslahat",
        excerpt:
          "Uyqu gigienasi — sifatli uyquning asosi. Har kuni amal qilishingiz mumkin bo'lgan oddiy ko'rsatmalar.",
        date: "28 Aprel, 2026",
        imageUrl: "",
        slug: "soglom-uyqu-maslahatlari",
      },
    ],
  },
  test: {
    title: "Uyqu testini o'ting",
    subtitle:
      "5 ta savolga javob bering va uyqu sog'lig'ingiz haqida darhol natija oling.",
    next: "Keyingisi",
    result: "Natija",
    restart: "Qaytadan boshlash",
    contact: "Shifokor bilan bog'lanish",
    progress: (current: number, total: number) => `${current} / ${total}`,
    questions: [
      {
        id: 1,
        question: "Siz qanchalik tez-tez baland xurrak otasiz?",
        options: [
          { label: "Hech qachon", score: 0 },
          { label: "Ba'zan", score: 1 },
          { label: "Tez-tez", score: 2 },
          { label: "Deyarli har kuni", score: 3 },
        ],
      },
      {
        id: 2,
        question: "Uyqudan keyin ham o'zingizni charchagan yoki uyqusi yetmagandek his qilasizmi?",
        options: [
          { label: "Yo'q, deyarli hech qachon", score: 0 },
          { label: "Ba'zan", score: 1 },
          { label: "Haftada bir necha marta", score: 2 },
          { label: "Har kuni yoki deyarli har kuni", score: 3 },
        ],
      },
      {
        id: 3,
        question: "Siz uxlayotganda nafas to'xtab qolishi yoki bo'g'ilib uyg'onishingizni kimdir sezganmi?",
        options: [
          { label: "Hech qachon", score: 0 },
          { label: "Ishonchim komil emas", score: 1 },
          { label: "Ha, bir necha marta aytishgan", score: 2 },
          { label: "Ha, tez-tez kuzatilgan", score: 3 },
        ],
      },
      {
        id: 4,
        question: "Sizda quyidagi holatlardan qaysi biri mavjud?",
        options: [
          { label: "Hech biri", score: 0 },
          { label: "Yuqori qon bosimi", score: 1 },
          { label: "Ortiqcha vazn yoki semizlik", score: 2 },
          { label: "Yuqori qon bosimi va ortiqcha vazn ikkalasi ham mavjud", score: 3 },
        ],
      },
      {
        id: 5,
        question: "Kunduz kuni quyidagi holatlar sizda qanchalik uchraydi?",
        options: [
          { label: "Hech qachon uyqu bosmaydi", score: 0 },
          { label: "Ba'zan uyqu bosadi", score: 1 },
          { label: "Mashina, dars yoki ish payti uyqu keladi", score: 2 },
          { label: "Kunduz kuni tez-tez uxlab qolaman yoki juda kuchli uyqu bosadi 😴", score: 3 },
        ],
      },
    ],
    results: {
      low: {
        level: "low" as const,
        title: "Past xavf",
        message:
          "Sizning natijalaringiz uyqu apnoesi xavfining past ekanligini ko'rsatmoqda. Sog'lom uyqu odatlarini saqlab boring.",
      },
      medium: {
        level: "medium" as const,
        title: "O'rtacha xavf",
        message:
          "Sizda uyqu apnoesiga xos ba'zi belgilar mavjud. Shifokor bilan maslahatlashish tavsiya etiladi.",
      },
      high: {
        level: "high" as const,
        title: "Yuqori xavf",
        message:
          "Natijalaringiz uyqu apnoesining yuqori xavfini ko'rsatmoqda. Tezroq shifokorga murojaat qilishni tavsiya etamiz.",
      },
    },
  },
  footer: {
    tagline: "Sog'lom uyqu — sog'lom hayot.",
    rights: "© 2026 SilentSleep. Barcha huquqlar himoyalangan.",
    contact: "Aloqa",
    nav: "Sahifalar",
  },
  about: {
    badge: "Biz haqimizda",
    headline: "Uyqu sog'lig'ingiz — bizning maqsadimiz",
    paragraphs: [
      "SilentSleep — uyqu apnoesi va xurrak muammolarini zamonaviy usullar bilan davolashga ixtisoslashgan tibbiyot markazi. Biz har bir bemorga individual yondashuv va ilmiy asoslangan davolash usullarini taklif etamiz.",
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
        name: "Dr. [Ism Familiya]",
        title: "Uyqu tibbiyoti mutaxassisi",
        bio: "Uyqu apnoesi va nafas yo'llari kasalliklari bo'yicha 10 yillik tajribaga ega.",
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
