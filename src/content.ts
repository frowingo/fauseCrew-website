/**
 * Every visible text on the site, in Turkish and English. Turkish is the source; the
 * English copy must keep the same shape. The sample screen follows the app's own English
 * strings where it has them ("In progress", "Mark as read", "History", ...).
 */
const tr = {
  meta: {
    title: "FausCrew — Evin ritmini şimdi yakalayın",
    description:
      "FausCrew ile ev görevlerini paylaş, ev arkadaşlarınla aynı planda buluş ve birlikte eğlen. Ortak yaşam için tek bir uygulama. App Store ve Google Play'de yakında.",
  },
  skip: "İçeriğe geç",
  brandHome: "FausCrew ana sayfa",
  lang: { tr: "Türkçe", en: "English" },
  theme: {
    label: "Koyu tema",
    toLight: "Açık temaya geç",
    toDark: "Koyu temaya geç",
  },
  store: {
    download: "Uygulamayı indir",
    soon: "Çok yakında",
    soonLabel: "çok yakında",
  },
  header: {
    nav: "Ana menü",
    mobileNav: "Mobil menü",
    links: {
      ozellikler: { label: "Neler var?", hint: "Görevler, duyurular, ekip" },
      oyunlar: { label: "Oyunlar", hint: "Ev içi mini oyunlar" },
      "nasil-calisir": { label: "Nasıl çalışır?", hint: "Üç adımda başlayın" },
      sorular: { label: "Merak edilenler", hint: "Sık sorulan sorular" },
    },
    cta: "Ekibinle tanış",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    storeNote: "App Store ve Google Play’de yakında",
  },
  hero: {
    before: "Evin ",
    accent: "ritmini",
    after: " şimdi yakalayın",
    description: [
      "Birlikte yaşamanın güzel tarafına",
      "daha çok zaman ayırın.",
    ],
    detail:
      "Görevleri paylaşın, duyuruları kaçırmayın, birlikte eğlenin. Evinizin ortak alanı artık cebinizde.",
    explore: "Evinizin yeni halini keşfet",
    caption: "Örnek ekran · Dokun, keşfet.",
  },
  promise: {
    lead: "Ev paylaşılır.",
    leadStrong: "Hayat kolaylaşır.",
    items: [
      "Daha az “kim yapacak?”",
      "Daha çok haberdar olmak.",
      "Birlikte biraz daha eğlenmek.",
    ],
  },
  features: {
    title: ["Evin akışı,", "ekibin ritmi."],
    intro: [
      "Küçük işler, ortak planlar, güzel molalar.",
      "Bir evin ihtiyacı olan şeyler, bir arada.",
    ],
    listLabel: "Uygulama özellikleri",
    items: {
      chores: {
        title: "“Bugün kimin sırası?”",
        text: "Görevler belli, herkesin içi rahat. Ev işlerini paylaşın, yapılanları tek bir yerden takip edin.",
        detail: "Görevlere dokun, durumunu ilerlet.",
      },
      announcements: {
        title: "Herkes aynı sayfada.",
        text: "Evinize özel bir alan oluşturun. Davet koduyla ekibinizi çağırın, ev arkadaşlarınızı bir arada görün.",
        detail: "Duyurular herkese aynı anda ulaşır.",
      },
      games: {
        title: "Biraz da eğlence.",
        text: "Ev arkadaşlığı yapılacaklar listesinden ibaret değil. Küçük bir mola verin, oyunlarda birbirinize meydan okuyun.",
        detail: "Oyunlar sekmesi uygulamada seni bekliyor.",
      },
    },
    caption: "Uygulamanın ana ekranıyla aynı, etkileşimli örnek.",
  },
  announcement: {
    sampleTitle: "Duyurular",
    sampleUnread: "1 okunmamış duyuru",
    sampleHeading: "Akşam sofrada buluşalım mı?",
    sampleBody: "Ben makarnayı yapıyorum. Sofrayı kim kuruyor?",
    sampleTime: "Az önce",
    samplePublisher: "Ferdi yayınladı",
    sampleLabel: "Örnek duyuru",
    title: ["Grup sohbetinde", "kaybolup gitmesin."],
    text: "Film gecesi, ortak bir plan ya da küçük bir hatırlatma. Eve dair duyurular herkesin görebileceği, evinize ait bir yerde dursun.",
    check: "Okunmamış duyurular en üstte kalır.",
  },
  games: {
    title: ["İşler bitti mi?", "Sıra oyunda."],
    intro:
      "Kısa turlar, tatlı rekabet. İnternet yokken botlara karşı, istediğinde evdekilerle online oyna.",
    bot: {
      label: "Çevrimdışı",
      title: "Botlara karşı",
      text: "İnternet olmasa da botlarla hemen bir tur at.",
    },
    online: {
      label: "Online",
      title: "Evdekilerle",
      text: "Ev arkadaşlarınla aynı maçta, gerçek zamanlı yarışın.",
      live: "Canlı",
    },
    chips: { bot: "Bot", online: "Online" },
    items: {
      rockets: { title: "House Rockets", text: "Ekibinle roket düellosu." },
      tanks: { title: "House Tanks", text: "Haritada tank savaşı." },
      switch: { title: "House Switch", text: "Gece şehrinde refleks testi." },
      skyline: { title: "Skyline Dash", text: "Çatıların üstünden süzül." },
      rps: { title: "Taş, Kağıt, Makas", text: "Kim bulaşık yıkayacak?" },
      spin: { title: "Lucky Spin", text: "Çarkı çevir, şansını dene." },
    },
  },
  how: {
    title: ["Birlikte başlamak", "bu kadar kolay."],
    intro: ["Önce evin, sonra ekibin.", "Gerisi birlikte şekillenir."],
    steps: [
      {
        title: "Evini oluştur.",
        text: "Uygulamada evine bir isim ver. Ortak alanınız hazır.",
      },
      {
        title: "Ekibini davet et.",
        text: "Davet kodunu ev arkadaşlarınla paylaş. Aynı çatı altında buluşun.",
      },
      {
        title: "Hayatı paylaşın.",
        text: "İşleri bölüşün, planları paylaşın. Güzel anlara daha çok yer açın.",
      },
    ],
  },
  faq: {
    title: ["Aklında", "bir şey mi var?"],
    intro: "Başlamadan önce merak ettiklerin.",
    items: [
      {
        question: "FausCrew kimler için?",
        answer:
          "Aynı evi paylaşan herkes için: ev arkadaşları, çiftler ve aileler. Görevleri, ev içi duyuruları ve birlikte geçirilen zamanı ortak bir yerde buluşturur.",
      },
      {
        question: "Ev arkadaşlarımı nasıl davet ederim?",
        answer:
          "Mobil uygulamada evini oluşturduktan sonra evine ait davet kodunu paylaşabilirsin. Ev arkadaşların bu kodla aynı eve katılabilir.",
      },
      {
        question: "Hangi telefonlarda kullanabileceğim?",
        answer:
          "FausCrew, iOS ve Android için hazırlanıyor. App Store ve Google Play bağlantıları yayınlandığında bu sayfadan ulaşabileceksin.",
      },
      {
        question: "Sitedeki önizleme gerçek hesabıma bağlı mı?",
        answer:
          "Hayır. Bu sayfadaki ekran, uygulamayı tanıtan örnek bir deneyimdir. İsimler, görevler ve davet kodu örnektir; yaptığın değişiklikler kaydedilmez ve sayfa yenilendiğinde sıfırlanır.",
      },
    ],
  },
  download: {
    title: ["Birlikte yaşamın", "eğlenceli hali"],
    text: "Ekibini bir araya getir. Gerisini birlikte halledin.",
    note: "iOS ve Android için hazırlanıyoruz. Çok yakında.",
  },
  footer: {
    tagline: "Birlikte yaşamanın güzel tarafı.",
    links: {
      ozellikler: "Özellikler",
      oyunlar: "Oyunlar",
      "nasil-calisir": "Nasıl çalışır?",
      sorular: "Sıkça sorulanlar",
    },
    backTop: "Yukarı dön",
    made: "Bir evden daha fazlası, bir ekip.",
    heart: "Birlikte daha iyi.",
  },
  preview: {
    label: "FausCrew ana ekranının etkileşimli örneği",
    tabsLabel: "Örnek uygulama menüsü",
    tabs: { profile: "Profil", home: "Ev", games: "Oyunlar" },
    status: {
      progress: "Devam ediyor",
      review: "İncelemede",
      completed: "Tamamlandı",
    },
    advance: "Durumu ilerlet.",
    chores: { 1: "Mutfağı toparla", 2: "Bitkileri sula", 3: "Çöpü çıkar" },
    choreDone: "Bir iş daha tamam!",
    hello: "Merhaba, Elif",
    house: "Son Bulaşık Bükücüler",
    createAnnouncement: "Örnek duyuru oluştur",
    announceInApp: "Duyuru oluşturmak uygulamada.",
    announcements: "Duyurular",
    activeCount: "1 aktif duyuru",
    movieTitle: "Bu akşam film gecesi!",
    movieBody: "20.30’da salonda buluşalım. Filmi birlikte seçeriz!",
    movieTime: "Bugün 18:10",
    publisher: "Ferdi yayınladı",
    read: "Okundu",
    markRead: "Okundu say",
    todays: "Bugünün görevleri",
    completedOf: (done: number, total: number) => `${done}/${total} tamamlandı`,
    percent: (value: number) => `%${value}`,
    history: "Geçmiş",
    noteDone: "Bitkileri sula · Ferdi",
    noteAnnouncement: "Yeni duyuru · Ferdi",
  },
};

export type Content = typeof tr;

const en: Content = {
  meta: {
    title: "FausCrew — Find your home’s rhythm now",
    description:
      "Share chores with FausCrew, stay on the same plan with your housemates and have fun together. One app for shared living. Coming soon to the App Store and Google Play.",
  },
  skip: "Skip to content",
  brandHome: "FausCrew home",
  lang: { tr: "Türkçe", en: "English" },
  theme: {
    label: "Dark theme",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  store: {
    download: "Download the app",
    soon: "Coming soon",
    soonLabel: "coming soon",
  },
  header: {
    nav: "Main menu",
    mobileNav: "Mobile menu",
    links: {
      ozellikler: {
        label: "What’s inside?",
        hint: "Chores, announcements, crew",
      },
      oyunlar: { label: "Games", hint: "Mini games for the home" },
      "nasil-calisir": { label: "How it works", hint: "Start in three steps" },
      sorular: { label: "FAQ", hint: "Frequently asked questions" },
    },
    cta: "Meet your crew",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    storeNote: "Coming soon to the App Store and Google Play",
  },
  hero: {
    before: "Find your home’s ",
    accent: "rhythm",
    after: " now",
    description: ["Spend more time on the good side", "of living together."],
    detail:
      "Share chores, never miss an announcement, have fun together. Your home’s shared space now fits in your pocket.",
    explore: "See your home in a new light",
    caption: "Sample screen · Tap to explore.",
  },
  promise: {
    lead: "A shared home.",
    leadStrong: "An easier life.",
    items: [
      "Less “who’s doing it?”",
      "Always in the loop.",
      "A little more fun together.",
    ],
  },
  features: {
    title: ["Your home’s flow,", "your crew’s rhythm."],
    intro: [
      "Small chores, shared plans, nice breaks.",
      "Everything a home needs, in one place.",
    ],
    listLabel: "App features",
    items: {
      chores: {
        title: "“Whose turn is it today?”",
        text: "Chores are clear, so everyone is at ease. Split the housework and follow what’s done from one place.",
        detail: "Tap a chore to move it forward.",
      },
      announcements: {
        title: "Everyone on the same page.",
        text: "Create a space just for your home. Invite your crew with a code and see your housemates together.",
        detail: "Announcements reach everyone at once.",
      },
      games: {
        title: "A little fun, too.",
        text: "Sharing a home is more than a to-do list. Take a short break and challenge each other in games.",
        detail: "The Games tab is waiting for you in the app.",
      },
    },
    caption: "An interactive copy of the app’s home screen.",
  },
  announcement: {
    sampleTitle: "Announcements",
    sampleUnread: "1 unread announcement",
    sampleHeading: "Dinner together tonight?",
    sampleBody: "I’m making pasta. Who’s setting the table?",
    sampleTime: "Just now",
    samplePublisher: "Published by Ferdi",
    sampleLabel: "Sample announcement",
    title: ["Don’t let it get lost", "in the group chat."],
    text: "Movie night, a shared plan or a small reminder. Keep home announcements in a place that belongs to your home, where everyone can see them.",
    check: "Unread announcements stay on top.",
  },
  games: {
    title: ["Chores done?", "Game time."],
    intro:
      "Short rounds, friendly rivalry. Play against bots when you’re offline, or online with your housemates whenever you like.",
    bot: {
      label: "Offline",
      title: "Against bots",
      text: "No internet? Start a round with bots right away.",
    },
    online: {
      label: "Online",
      title: "With your housemates",
      text: "Join the same match and compete in real time.",
      live: "Live",
    },
    chips: { bot: "Bot", online: "Online" },
    items: {
      rockets: {
        title: "House Rockets",
        text: "A rocket duel with your crew.",
      },
      tanks: { title: "House Tanks", text: "Tank battles across the map." },
      switch: {
        title: "House Switch",
        text: "A reflex test in the night city.",
      },
      skyline: { title: "Skyline Dash", text: "Glide across the rooftops." },
      rps: { title: "Rock, Paper, Scissors", text: "Who’s doing the dishes?" },
      spin: { title: "Lucky Spin", text: "Spin the wheel, try your luck." },
    },
  },
  how: {
    title: ["Getting started together", "is this easy."],
    intro: [
      "First your home, then your crew.",
      "The rest takes shape together.",
    ],
    steps: [
      {
        title: "Create your home.",
        text: "Give your home a name in the app. Your shared space is ready.",
      },
      {
        title: "Invite your crew.",
        text: "Share the invite code with your housemates. Meet under one roof.",
      },
      {
        title: "Share life.",
        text: "Split the chores, share plans. Make more room for the good moments.",
      },
    ],
  },
  faq: {
    title: ["Something", "on your mind?"],
    intro: "What you might want to know before you start.",
    items: [
      {
        question: "Who is FausCrew for?",
        answer:
          "Everyone who shares a home: housemates, couples and families. It brings chores, home announcements and time spent together into one shared place.",
      },
      {
        question: "How do I invite my housemates?",
        answer:
          "After you create your home in the mobile app, you can share your home’s invite code. Your housemates can join the same home with that code.",
      },
      {
        question: "Which phones can I use it on?",
        answer:
          "FausCrew is being built for iOS and Android. Once the App Store and Google Play links are live, you’ll find them on this page.",
      },
      {
        question: "Is the preview on this site linked to my real account?",
        answer:
          "No. The screen on this page is a sample experience that introduces the app. Names, chores and the invite code are examples; your changes aren’t saved and reset when the page reloads.",
      },
    ],
  },
  download: {
    title: ["Make living", "together fun"],
    text: "Bring your crew together. Handle the rest as a team.",
    note: "We’re getting ready for iOS and Android. Coming soon.",
  },
  footer: {
    tagline: "The good side of living together.",
    links: {
      ozellikler: "Features",
      oyunlar: "Games",
      "nasil-calisir": "How it works",
      sorular: "FAQ",
    },
    backTop: "Back to top",
    made: "More than a home: a crew.",
    heart: "Better together.",
  },
  preview: {
    label: "Interactive sample of the FausCrew home screen",
    tabsLabel: "Sample app menu",
    tabs: { profile: "Profile", home: "Home", games: "Games" },
    status: {
      progress: "In progress",
      review: "In review",
      completed: "Completed",
    },
    advance: "Move the status forward.",
    chores: {
      1: "Tidy the kitchen",
      2: "Water the plants",
      3: "Take out the trash",
    },
    choreDone: "One more chore done!",
    hello: "Hello, Elif",
    house: "The Last Dishbenders",
    createAnnouncement: "Create a sample announcement",
    announceInApp: "Announcements are created in the app.",
    announcements: "Announcements",
    activeCount: "1 active announcement",
    movieTitle: "Movie night tonight!",
    movieBody:
      "Let’s meet in the living room at 8:30 PM. We’ll pick the film together!",
    movieTime: "Today 6:10 PM",
    publisher: "Published by Ferdi",
    read: "Read",
    markRead: "Mark as read",
    todays: "Today’s chores",
    completedOf: (done: number, total: number) => `${done}/${total} completed`,
    percent: (value: number) => `${value}%`,
    history: "History",
    noteDone: "Water the plants · Ferdi",
    noteAnnouncement: "New announcement · Ferdi",
  },
};

export const content = { tr, en };
