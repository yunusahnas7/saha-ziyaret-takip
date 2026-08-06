# Junior Software Developer Teknik Değerlendirme

**AI Chat Linki:** https://share.gemini.google/b5QNLlLNNnxx

## Bölüm 4 - AI Usage Report

**Hangi yapay zeka araçlarını kullandınız?**
* Gemini 

**En faydalı bulduğunuz 5 prompt:**
1. "PostgreSQL'de son 30 gün içinde hiç kayıt oluşturmamış kullanıcıları getiren LEFT JOIN sorgusunu yazar mısın?"
2. ".NET 9'da sadece 'Approved' durumundaki entity'lerin değiştirilmesini engelleyecek iş kuralını nasıl kurmalıyım?"
3. "React Native'de FlatList kullanarak müşteri adı ve tarihi gösteren okunabilir bir liste yazar mısın?"
4. "Merkez onay mekanizması için Visit tablosuna 'Status' Enum alanı eklemek en mantıklı yol mudur?"
5. "C# metodunda request'teki verileri kontrol edip hata fırlatırken en doğru Exception tipleri nelerdir?"

**Yapay zekanın yanlış yönlendirdiği noktalar oldu mu?**
* AI, React Native'de tarihler için `moment.js` kütüphanesini önerdi. Projenin sade olması ve gereksiz bağımlılık olmaması için bunu reddedip basit string manipülasyonu kullanmayı tercih ettim.

**Hangi bölümleri yapay zeka kullanmadan geliştirdiniz?**
* Dosyaların isimlendirilmesi, projenin dizin yapısının kurulması ve GitHub repoya parça parça commitlenmesi kısımlarını doğrudan kendi inisiyatifimle yönettim.

## Bölüm 5 - AI ile İletişim Becerisi

**Senaryo 1 - Hata Araştırması (Aynı gün aynı müşteri ziyareti problemi):**
* **Prompt:** "Veritabanındaki `Visits` tablosunda kullanıcıların aynı `CustomerName` için aynı gün (`VisitDate`) içinde sadece tek kayıt oluşturabilmesini sağlamak istiyorum. Backend'de if bloğu ile kontrolü nasıl yaparım ve PostgreSQL'de tabloya nasıl Unique Constraint eklerim?"

**Senaryo 2 - Performans Problemi (100.000 kayıt sonrası yavaşlama):**
* **Prompt:** "Ziyaretleri listelediğim GET endpoint'i 100.000 kayıttan sonra yavaşladı. .NET tarafında Pagination'ı nasıl entegre ederim? PostgreSQL'de sorgunun hızlanması için hangi sütunlara Index atmam gerekir?"

**Senaryo 3 - Yeni Özellik Geliştirme (Konum bilgisi tutma):**
* **Prompt:** "`Visits` tabloma `Latitude` ve `Longitude` eklemek için EF Core Migration'ı nasıl yazarım? React Native tarafında kullanıcının konumunu alıp backend'e post edecek kodu verebilir misin?"

## Bölüm 6 - Yapay Zeka Kod İncelemesi

**İncelenen Kodda Görülen Problemler:**
1. **Validasyon Eksikliği:** İş kurallarındaki "CustomerName boş bırakılamaz", "Geçmiş tarihli oluşturulamaz" ve "Not alanı max 500 karakter olabilir" kurallarının hiçbirinin kontrolü yapılmamış[span_0](start_span)[span_0](end_span).
2. **Hata Yönetimi:** Hatalı durumlarda anlamlı bir hata mesajı (Exception) dönülmüyor[span_1](start_span)[span_1](end_span).
3. **Eksik Veri Ataması:** Yeni oluşturulan ziyarete tarihi (`CreatedDate`) ve durumu (`Status`) gibi varsayılan kritik atamalar yapılmamış.
