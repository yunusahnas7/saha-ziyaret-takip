-- Soru 1: En çok ziyaret gerçekleştiren ilk 5 kullanıcı
SELECT u."Name", COUNT(v."Id") AS "TotalVisits"
FROM "Users" u
JOIN "Visits" v ON u."Id" = v."UserId"
GROUP BY u."Id", u."Name"
ORDER BY "TotalVisits" DESC
LIMIT 5;

-- Soru 2: Son 30 gün içerisinde hiç ziyaret gerçekleştirmemiş kullanıcılar
SELECT u."Id", u."Name"
FROM "Users" u
LEFT JOIN "Visits" v ON u."Id" = v."UserId" AND v."VisitDate" >= CURRENT_DATE - INTERVAL '30 days'
WHERE v."Id" IS NULL;

-- Soru 3: Kullanıcı Adı, Toplam Ziyaret Sayısı, Son Ziyaret Tarihi içeren rapor
SELECT u."Name" AS "Kullanıcı Adı", 
       COUNT(v."Id") AS "Toplam Ziyaret Sayısı", 
       MAX(v."VisitDate") AS "Son Ziyaret Tarihi"
FROM "Users" u
LEFT JOIN "Visits" v ON u."Id" = v."UserId"
GROUP BY u."Id", u."Name";

-- Soru 4: Merkez tarafından onaylanmamış ziyaretleri listeleyiniz
SELECT *
FROM "Visits"
WHERE "Status" != 'Approved';
