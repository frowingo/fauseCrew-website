# FausCrew website

FausCrew mobil uygulaması için Türkçe, responsive React tanıtım sitesi.

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

Resmi uygulama adı **FausCrew**, örnek kullanıcı adı **Elif**tir. `npm run check:content`, kaynaklarda ve proje dokümanlarında eski yazımların kalmadığını kontrol eder; üretim derlemesinin başında da otomatik çalışır.

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

Uygulamanın ve sitenin resmi adı “FausCrew” olarak kullanılmalıdır. Örnek kullanıcı adı “Elif”tir. Önizleme gerçek uygulama ekran görüntüsü değildir: kaynak ekranların web uyarlamasıdır, örnek içerik olarak işaretlenmiştir. Görev değişiklikleri sadece bellektedir, yenilemede sıfırlanır. Fontlar yerel bundle içindedir; uzaktan font / analitik / çerez hizmeti yoktur.

`dist/` herhangi bir statik hosting hizmetine dağıtılabilir. Mağaza başvurusu öncesinde gerçek destek kanalı, gizlilik politikası, kullanım koşulları ve hesap silme yönlendirmesi ürün sahibinin doğruladığı içerikle eklenmelidir. Bu bilgiler verilmediği için hukuki metin veya iletişim adresi uydurulmadı.

## Fly.io yayını

`Dockerfile`, React uygulamasını Node.js ile derler ve yalnızca derlenen dosyaları Nginx imajına kopyalar. `.dockerignore`, derleme bağlamını gereken kaynak dosyalarıyla sınırlar; yerel ortam dosyaları gönderilmez.

`fly.toml`, özel alan adının ve TLS sertifikasının bağlı olduğu mevcut Fly uygulamasını hedefler; bölge Frankfurt (`fra`) olarak tanımlıdır. Fly uygulamasının dahili kimliği marka metni değildir; alan adı taşınmadan değiştirilmemelidir. Tek paylaşımlı CPU ve 256 MB RAM yeterlidir. Trafik yokken makine durur, istek geldiğinde otomatik açılır; ilk istekte kısa bir açılış gecikmesi olabilir. HTTPS zorunludur, sağlık kontrolü `/healthz` üzerinden yapılır. Veritabanı veya disk volume gerekmez.

Mevcut yayın hesabına giriş:

```sh
flyctl auth login
```

Yayınlama ve sonraki güncellemeler:

```sh
flyctl config validate
flyctl deploy --remote-only --ha=false
flyctl status
flyctl checks list
```

Üretim yayını normal geliştirme akışında elle yapılmaz. `dev` dalından
`master` dalına açılan pull request merge edildiğinde GitHub Actions,
`.github/workflows/deploy-production.yml` üzerinden Fly.io dağıtımını başlatır.
Workflow, GitHub Actions secret'ı olarak `FLY_API_TOKEN` bekler. `master` dalı
doğrudan push'a kapalıdır; değişiklikler pull request ile birleştirilmelidir.

`--ha=false`, bu ilk sürüm için ikinci bir yedek makine oluşturulmasını önler. Uzak derleyici kullanıldığı için yerel Docker servisinin çalışması gerekmez. Ana yayın adresi: `https://fauscrew.iworf.com/`.

Özel alan adının bağlı olduğu uygulama siteyi doğrudan sunar; `nginx.conf` dosyasında başka bir alan adına yönlendirme yoktur. Önceki yönlendirme yapılandırması kaldırılmıştır. Fly dosya enjeksiyonlarını güncellerken `/etc/nginx/conf.d/default.conf` için `nginx.conf` kullanılmalıdır.

Vite ayarları derleme sırasında gömülür. Mağaza bağlantıları yayınlandığında değerleri build arg olarak iletip yeniden yayınlayın; yalnızca `fly secrets set` ile runtime değişkeni eklemek statik siteyi değiştirmez:

```sh
flyctl deploy --remote-only --ha=false \
  --build-arg VITE_APP_STORE_URL=https://apps.apple.com/your-listing \
  --build-arg VITE_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=your.package
```

Bu ayarlar herkese açık URL'ler içindir; gizli anahtar göndermeyin. Linkler verilmediğinde iki mağaza da “Çok yakında” olarak kalır.
