const uz = {
  nav: {
    apnea: "Xurrak va Apnoe",
    treatment: "Davolash",
    about: "Biz Haqimizda",
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
    title: "Apnoe nima?",
    body: [
      "Uyqu apnoesi — uyqu paytida nafas olishning vaqtincha to'xtab qolishi bilan tavsiflanadigan tibbiy holat. Bu to'xtashlar bir necha soniyadan bir necha daqiqagacha davom etishi mumkin va tun davomida ko'p marta takrorlanishi mumkin.",
      "Eng keng tarqalgan turi — obstruktiv uyqu apnoesi (OSA), bu holda tomoqdagi mushaklarning bo'shashishi nafas yo'llarini to'sib qo'yadi. Natijada miyaga va organizmga yetarli kislorod yetib bormaydi.",
      "Davolanmagan apnoe yurak-qon tomir kasalliklari, qandli diabet va boshqa jiddiy muammolarga olib kelishi mumkin. O'z vaqtida tashxis va davolash sog'liqni sezilarli darajada yaxshilaydi.",
    ],
    symptoms: [
      { icon: "snore", label: "Xurrak" },
      { icon: "pause", label: "Nafas to'xtashi" },
      { icon: "tired", label: "Kunduzgi charchoq" },
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
        question: "Siz qanchalik tez-tez xurrak qilasiz?",
        options: [
          { label: "Hech qachon", score: 0 },
          { label: "Kamdan-kam (haftada 1-2 marta)", score: 1 },
          { label: "Tez-tez (haftada 3-4 marta)", score: 2 },
          { label: "Deyarli har kuni", score: 3 },
        ],
      },
      {
        id: 2,
        question:
          "Uyqu paytida nafasingiz to'xtab qolganini kuzatganmisiz (yoki yaqinlaringiz aytganmi)?",
        options: [
          { label: "Yo'q, hech qachon", score: 0 },
          { label: "1-2 marta bo'lgan", score: 1 },
          { label: "Ba'zida sodir bo'ladi", score: 2 },
          { label: "Tez-tez sodir bo'ladi", score: 3 },
        ],
      },
      {
        id: 3,
        question: "Kunduzgi vaqtda o'zingizni qanchalik charchagan his qilasiz?",
        options: [
          { label: "Umuman charchamayman", score: 0 },
          { label: "Ozgina charchoq sezaman", score: 1 },
          { label: "Ko'pincha charchagan bo'laman", score: 2 },
          { label: "Doimo uyqum kelib turadi", score: 3 },
        ],
      },
      {
        id: 4,
        question: "Ertalab bosh og'rig'i yoki og'ir his bilan uyg'onasizmi?",
        options: [
          { label: "Yo'q", score: 0 },
          { label: "Kamdan-kam", score: 1 },
          { label: "Haftada bir necha marta", score: 2 },
          { label: "Deyarli har kuni", score: 3 },
        ],
      },
      {
        id: 5,
        question: "Uyquingiz sifatini qanday baholaysiz?",
        options: [
          { label: "Juda yaxshi", score: 0 },
          { label: "Yaxshi", score: 1 },
          { label: "Qoniqarsiz", score: 2 },
          { label: "Juda yomon", score: 3 },
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
  placeholders: {
    treatment: {
      title: "Davolash",
      body: "Bu sahifa tez orada tayyorlanadi.",
    },
    about: {
      title: "Biz Haqimizda",
      body: "Bu sahifa tez orada tayyorlanadi.",
    },
    sleeptrack: {
      title: "SleepTrack",
      body: "Bu sahifa tez orada tayyorlanadi.",
    },
  },
}

export default uz
export type Translations = typeof uz
