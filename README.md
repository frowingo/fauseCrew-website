# FauseCrew website

FauseCrew mobil uygulaması için Türkçe, responsive React tanıtım sitesi.

## Çalıştırma

```sh
npm install
npm run dev
```

Vite terminalde yerel adresi gösterir. Üretim kontrolü:

```sh
npm run build
npm run preview
```

`npm run typecheck` yalnızca TypeScript kontrolü yapar. Node.js 22.12+ önerilir.

## Yapı

- `src/App.tsx`: tanıtım bölümleri, mobil menü, özellik seçimi ve SSS.
- `src/components/AppPreview.tsx`: görev, ekip ve oyun ekranlarının etkileşimli örnekleri.
- `src/components/StoreLinks.tsx`: mağaza bağlantıları / “Çok yakında” durumu.
- `src/styles.css`: uygulamadan türetilmiş tasarım değişkenleri ve responsive düzen.
- `src/lib/config.ts`: ortam değişkenleri; HTTPS URL doğrulaması.
- `src/lib/api.ts`: ileride houseFlow için kullanılabilecek küçük fetch katmanı. Şu anda çağrılmaz.
- `public/app-icon.svg`: houseFlowApp projesinin mevcut marka ikonu.

## Mağaza bağlantıları

Kullanıcı isteğiyle iki mağaza da “Çok yakında” olarak gösterilir. Yayınlandığında `.env.example` dosyasını `.env.local` olarak kopyalayıp `VITE_APP_STORE_URL` ve `VITE_PLAY_STORE_URL` değerlerini doldurun. Yeni build ile otomatik olarak gerçek bağlantıya dönüşür. Değerler boş veya geçersiz olduğunda tıklanamayan, dürüst bir yakında durumu korunur.

## İleride houseFlow API bağlantısı

`VITE_API_BASE_URL` tam sürüm önekini içermelidir (ör. `https://your-api.example/api/v1`). Kaynak mobil uygulama `AppEnvironment.swift` içinde development/production ayrımı yapıyor; bu site hiçbir backend ortamına varsayılan olarak istek atmaz.

Özellik gerektiğinde ilgili servisten `apiRequest<T>('/endpoint', options)` çağrılabilir. Endpoint sözleşmesi, oturum yönetimi ve CORS o aşamada gerçek backend ile doğrulanmalıdır. `RequestInit` üzerinden abort signal / headers iletilebilir. Vite ortam değişkenleri tarayıcıya açıktır; gizli anahtar koymayın. Demo verileri API DTO'su değildir.

## İçerik ve yayın notları

Görsel referans: `../houseFlowApp/FausCrew/Views/Shared/Brand/FausMark.swift`, `MainScreenBackground.swift`, `HouseDashboardView.swift`, `GamesHubView.swift` ve `Design/AppIcon/FausCrew-AppIcon-Light.svg`.

Mobil repo “FausCrew” adını kullanır; bu site kullanıcı briefindeki “FauseCrew” yazımını izler. Önizleme gerçek uygulama ekran görüntüsü değildir: kaynak ekranların web uyarlamasıdır, örnek içerik olarak işaretlenmiştir. Görev değişiklikleri sadece bellektedir, yenilemede sıfırlanır. Fontlar yerel bundle içindedir; uzaktan font / analitik / çerez hizmeti yoktur.

Bu çalışma yereldir, bir hosting ortamına yayınlanmadı. `dist/` herhangi bir statik hosting hizmetine dağıtılabilir. Mağaza başvurusu öncesinde gerçek destek kanalı, gizlilik politikası, kullanım koşulları ve hesap silme yönlendirmesi ürün sahibinin doğruladığı içerikle eklenmelidir. Bu bilgiler verilmediği için hukuki metin veya iletişim adresi uydurulmadı.
