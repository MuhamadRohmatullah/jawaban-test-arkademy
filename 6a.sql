-- perintah menampilkan tabel
SELECT cashier.name as cashier,
produk.name as product,
category.name as category, produk.price
FROM cashier join produk ON cashier.id=produk.id_cashier
JOIN category ON category.id = produk.id_category;