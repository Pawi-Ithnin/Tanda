// 1. FIREBASE CONFIG
const firebaseConfig = { databaseURL: "https://tanda-x-pro-default-rtdb.asia-southeast1.firebasedatabase.app/" };
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// 2. DICTIONARY (Imej Isyarat)
const wordImages = { 
  kami: "https://i.ibb.co/2BQ4Zyw/Kami-b14a9c807d6417a26758-1.jpg",
    saya: "https://i.ibb.co/tTYPQ2YH/Saya-308cf649158d30e78273.jpg",
    makan: "https://i.ibb.co/pd6WB8L/Makan-Makanan-358171f7a0d456b53998.jpg",
    mandi: "https://i.ibb.co/RT8bLtZ/Mandi-36a248a7c1e9603e8ad9.jpg",
    baca: "https://i.ibb.co/WfqmLPZ/Baca-4f6dce926d7cb25e66a3-1.jpg",
    angkat: "https://i.ibb.co/CKyDRtL/Angkat-5a39a6cc3f28b66e33d5-1.jpg",
    hantar: "https://i.ibb.co/zSGdVZ1/Hantar-a700122bd4d677f6426f.jpg",
    lihat: "https://i.ibb.co/2S0LmmK/Lihat-Tengok-40c6f1eb831eb4fa42c4.jpg",
    tengok: "https://i.ibb.co/2S0LmmK/Lihat-Tengok-40c6f1eb831eb4fa42c4.jpg",
    kami: "https://i.ibb.co/2BQ4Zyw/Kami-b14a9c807d6417a26758-1.jpg",
    saya: "https://i.ibb.co/tTYPQ2YH/Saya-308cf649158d30e78273.jpg",
    makan: "https://i.ibb.co/pd6WB8L/Makan-Makanan-358171f7a0d456b53998.jpg",
    mandi: "https://i.ibb.co/RT8bLtZ/Mandi-36a248a7c1e9603e8ad9.jpg",
    baca: "https://i.ibb.co/WfqmLPZ/Baca-4f6dce926d7cb25e66a3-1.jpg",
    angkat: "https://i.ibb.co/CKyDRtL/Angkat-5a39a6cc3f28b66e33d5-1.jpg",
    hantar: "https://i.ibb.co/zSGdVZ1/Hantar-a700122bd4d677f6426f.jpg",
    lihat: "https://i.ibb.co/2S0LmmK/Lihat-Tengok-40c6f1eb831eb4fa42c4.jpg",
    tengok: "https://i.ibb.co/2S0LmmK/Lihat-Tengok-40c6f1eb831eb4fa42c4.jpg",
    kami: "https://i.ibb.co/2BQ4Zyw/Kami-b14a9c807d6417a26758-1.jpg",
    saya: "https://i.ibb.co/tTYPQ2YH/Saya-308cf649158d30e78273.jpg",
    angkat: "https://i.ibb.co/CKyDRtL/Angkat-5a39a6cc3f28b66e33d5-1.jpg",
    baca: "https://i.ibb.co/WfqmLPZ/Baca-4f6dce926d7cb25e66a3-1.jpg",
    dapat: "https://i.ibb.co/frJhvCZ/Dapat-bf3f428e2690fc364f3f.jpg",
    curi: "https://i.ibb.co/y0s9VcZ/Curi-965466ebcc080427c968.jpg",
    gaduh: "https://i.ibb.co/D8jpHzd/Gaduh-94f7a9ac7b4487f0f5d5.jpg",
    hantar: "https://i.ibb.co/zSGdVZ1/Hantar-a700122bd4d677f6426f.jpg",
    hilang: "https://i.ibb.co/RhLpzbk/Hilang-ea5fae36c30c73ba8639-1.jpg",
    ikut: "https://i.ibb.co/CvpSzMX/Ikut-3213bfef8feec620e0a4.jpg",
    jawab: "https://i.ibb.co/948pGWv/Jawab-5f85da19931242278826.jpg",
    jemput: "https://i.ibb.co/WDbsz0v/Jemput-77a702021ba87450b9d7.jpg",
    kira: "https://i.ibb.co/8mZtG4r/Kira-69099b6e5d83c2c31d59.jpg",
    jumpa: "https://i.ibb.co/S0g8D75/Jumpa-II-91a442b67ea89a4a3341.jpg",
    koyak: "https://i.ibb.co/s9zPC4Q/Koyak-13b078e6e2be2737dfb4.jpg",
    langgar: "https://i.ibb.co/Gx20srh/Langgar-224e89d41a0d86ee285a.jpg",
    lihat: "https://i.ibb.co/2S0LmmK/Lihat-Tengok-40c6f1eb831eb4fa42c4.jpg",
    makanan: "https://i.ibb.co/pd6WB8L/Makan-Makanan-358171f7a0d456b53998.jpg",
    mandi: "https://i.ibb.co/RT8bLtZ/Mandi-36a248a7c1e9603e8ad9.jpg",
    mengurangkan: "https://i.ibb.co/wwCkgr0/Mengurangkan-02a18de279f29705e1e5.jpg",
    menyanyi: "https://i.ibb.co/Z6ScJCq/Menyanyi-957427491c8a7484768b.jpg",
    padam: "https://i.ibb.co/dW1gH8N/Padam-307f79819f86d82d7529.jpg",
    panggil: "https://i.ibb.co/28G8D2G/Panggil-Mari-ke-sini-d627c07987fd5023e1bb.jpg",
    pilih: "https://i.ibb.co/x3F0Ltv/Pilih-0af9dbcc68bbb2350ae5.jpg",
    pinjam: "https://i.ibb.co/cvfh18d/Pinjam-98c9761705f9bee16f96.jpg",
    rehat: "https://i.ibb.co/Z2brDNQ/Rehat-7d70da50c89337facb5c.jpg",
    sebut: "https://i.ibb.co/86fbdkk/Sebut-be772ddbb8075d0cab5e.jpg",
    simpan: "https://i.ibb.co/q9wmwmt/Simpan-c64fcc566a6388f523bc.jpg",
    tangkap: "https://i.ibb.co/DVg5fLD/Tangkap-f7c59d36acb760db05ec.jpg",
    tembak: "https://i.ibb.co/N72rk1W/Tembak-a1b48038f522bdb37276.jpg",
    tempah: "https://i.ibb.co/FxrCw9R/Tempah-828ab07f36e120451fe0.jpg",
    tidur: "https://i.ibb.co/Fq5Rwjf/Tidur-cd5c71cae6ac9a187d0e.jpg",
  tinggal: "https://i.ibb.co/h21WTxs/Tinggal-4256d7e6297d18a873c1.jpg", 
  tulis: "https://i.ibb.co/T2GWpqT/Tulis-45016932c60eb1923aaa.jpg", 
  tunggu: "https://i.ibb.co/9WnkLr3/Tunggu-5f10d0c13986a31c2749.jpg",
  umum: "https://i.ibb.co/XxGpbNt/Umum-Pengumuman-Makluman-18c14b2fee63cf67f154.jpg",
  adil: "https://i.ibb.co/hVNdKzS/Adil-66fd8aa49bef87c940ef-1.jpg",
  bagus: "https://i.ibb.co/hBh3wpn/Bagus-52b836b6135e7d1cf228-1.jpg",
  baik: "https://i.ibb.co/JK1Ldq6/Baik-a6058694cd8fb1b44fb9.jpg",
  baru: "https://i.ibb.co/zhZMJMh/Baru-Baharu-73f345f9180dfe75422b.jpg",
  berat: "https://i.ibb.co/rwrD00q/Berat-167d033fd4464d4d1f7c.jpg",
  beza: "https://i.ibb.co/ZhtqK4K/Beza-31ab13b0132f19bf0d5d-1.jpg",
  bukti: "https://i.ibb.co/Ch5y3D5/Bukti-Membuktikan-45841d5839580627a4e3-1.jpg",
  cemerlang: "https://i.ibb.co/5YNgXRs/Cemerlang-ecfb99e902b211bb605a-1.jpg",
  cekap:"https://i.ibb.co/sqynY9M/Cekap-af8604172e39a87303a3.jpg", 
  cukup:"https://i.ibb.co/ZMS2Fzr/Cukup-1544d4da1d5a71170ac4-1.jpg",
  digital:"https://i.ibb.co/syZkWdT/Digital-8de94d31fde61690c99f-1.jpg", 
  gemuk:"https://i.ibb.co/cL53bbN/Gemuk-bd671109050e019e0d3f-1.jpg", 
  istimewa:"https://i.ibb.co/K0jzt8Y/Istimewa-21fd6011b69f29ad987a-1.jpg",
  jahil:"https://i.ibb.co/sPqNNvS/Jahil-5c5a82f0f7ab158cd5e3.jpg",
  jujur:"https://i.ibb.co/xJDKhYW/Jujur-251a38136766d1891174.jpg", 
  kalah: "https://i.ibb.co/svvfDxw/Kalah-74f1ea3050480f86ffc3.jpg", 
  kaya: "https://i.ibb.co/S7HHcyv/Kaya-b3ab35ea7135c8e2b752-1.jpg",
  kecil: "https://i.ibb.co/h7Zd0MW/Kecil-1830fe90565b82fd0e9b.jpg",
  lain: "https://i.ibb.co/YZYFdJK/Lain-f542c7e09fb565c6c96f-1.jpg",
  lapar: "https://i.ibb.co/nwfVkVz/Lapar-2ad5284b47786fdab209.jpg",
  layak: "https://i.ibb.co/Bwc5PF6/Layak-5328b64c2575c33bf147.jpg",
  luar: "https://i.ibb.co/kh7nQ7G/Luar-b174320574d590c76aec.jpg",
  luas: "https://i.ibb.co/ssvhfH9/Luas-b26cd1bca0426b379837-1.jpg",
  masalah: "https://i.ibb.co/wKsVZHy/Masalah-622079c9a5a1549a723d-1.jpg",
 mataduitan: "https://i.ibb.co/nrr4jmY/Mata-duitan-4857552103dc5e705e24.jpg",  // mata duitan
muda: "https://i.ibb.co/vqqpzBv/Muda-ad2b6c2b18246aa1769f.jpg",
  mundarmandir: "https://i.ibb.co/Wps4nw6/Mundar-mandir-e7012280b480fd7ae828.jpg", 
  murah: "https://i.ibb.co/2SCLNW8/Murah-2ba6439d5382d9bb5b0d-1.jpg",
nyalalakanlampu:"https://i.ibb.co/xLzLZYt/Nyalakan-lampu-547b84ae6c6615a4d9f3.jpg", // nyalakan lampu
  panas: "https://i.ibb.co/RgfPy60/Panas-I-e196b76b1b29eb06ed8e.jpg", 
  pandai: "https://i.ibb.co/h97jCkY/Pandai-2902c5e944ac2b957c5d-1.jpg",
  pembohong: "https://i.ibb.co/bvh6T7W/Pembohong-a4817c9a5aeb0a6fb872.jpg",
  pengalaman: "https://i.ibb.co/fqmZk3b/Pengalaman-45c36538c06b26e01363-1.jpg",
  penting: "https://i.ibb.co/c2d26WH/Penting-71768479e2e80a639588-1.jpg",
  penuh: "https://i.ibb.co/pzT4jB8/Penuh-068a277bf75689608e7d.jpg",
  positif: "https://i.ibb.co/Tkff2r6/Positif-fdfeb596790f257faf49.jpg",
  raguragu: "https://i.ibb.co/9bc1sb0/Ragu-ragu-eef95b099e42812a51f1-1.jpg", // ragu ragu
  rahsia: "https://i.ibb.co/h9GFQtN/Rahsia-dfe0f0e430d9f73ec338.jpg", 
  rajin: "https://i.ibb.co/PQkff4f/Rajin-94faa79778869ed1fa87.jpg",
  selesa: "https://i.ibb.co/DRvY6gw/Selesa-8014d711e24b3c3a78e8.jpg",
  setuju: "https://i.ibb.co/7VjVV37/Setuju-0c74c11b505e769529eb-2.jpg",
  sopansantun: "https://i.ibb.co/DGQ7Lx2/Sopan-santun-dda4e6c1868b36289fc3.jpg", // sopan santun
  tahu: "https://i.ibb.co/3rpVLsG/Tahu-902300b7533c63be32c1-1.jpg",
  tegas: "https://i.ibb.co/XkQsSBY/Tegas-955b6526947317bf3289.jpg",
  terpakai: "https://i.ibb.co/DV8qCS1/Terpakai-6304f66e08506b61626b.jpg" ,
  terpengaruh: "https://i.ibb.co/K2B03pp/Terpengaruh-637b858407c6670bd006.jpg", 
  tidakfaham:"https://i.ibb.co/g6YJ2yj/Tidak-faham-178d0d12c0bbf914b5d2.jpg", // tidak faham
  tidakselesa: "https://i.ibb.co/3YRGBRS/Tidak-selesa-5b543bfdc22f75dd1465.jpg", // tidak selesa
  tutup: "https://i.ibb.co/YR54wyj/Tutup-ff04d743e16a1b559727-2.jpg",
  baikhati: "https://i.ibb.co/Dgphznw/Baik-Hati-e899b604f6257aeb799e.jpg",
  bimbang: "https://i.ibb.co/mq7nvHV/Bimbang-II-a891b454d81c882d3545.jpg",
  baikahati: "https://i.ibb.co/Dgphznw/Baik-Hati-e899b604f6257aeb799e.jpg", // baik hati
  letih: "https://i.ibb.co/g4c5mT9/Letih-c3f167daa801aee71591.jpg",
  marah: "https://i.ibb.co/Sm4HdM6/Marah-0b242c261479bb3fa3d6.jpg",
  nikmat: "https://i.ibb.co/G5SjqrM/Nikmat-6e80bc940b75502be9ea.jpg",
  puashati: "https://i.ibb.co/GFv3x6n/Puas-hati-370b0c5df2372c9179ea.jpg" , // puas hati
  putusasa: "https://i.ibb.co/mB93ZST/Putus-asa-07d33bf0e6c29df6bfe8.jpg", // putus asa
  sayasayangawak: "https://i.ibb.co/KDc1MWS/Saya-sayang-awak-d72268e8f8711661636c.jpg", // saya sayang awak
  sayang: "https://i.ibb.co/PwPNP40/Sayang-1a8f421cb139ccb05551.jpg",
  semangat: "https://i.ibb.co/CMjPr0R/Semangat-fec0b7be19b8cd371642.jpg",
  simpati: "https://i.ibb.co/jfJBp02/Simpati-eafdb7b873421827720f.jpg",
  tertekan: "https://i.ibb.co/K612m5m/Tertekan-bab8462d7f982364696b.jpg", 
  almari: "https://i.ibb.co/NmJxHsZ/Almari-89fd881bdc63362f1423.jpg",
  baldi: "https://i.ibb.co/6B6fmG9/Baldi-3781be7ba2f3503472ca.jpg",
  bendera: "https://i.ibb.co/z57B7pq/Bendera-e9183820c2e59f8877c6.jpg",
  benda: "https://i.ibb.co/V2wZLSX/Benda-2000579136ed2e6e80e8.jpg",
  buku: "https://i.ibb.co/34mF9C2/Buku-24d901b3ae9f592ae848.jpg" , 
  gari: "https://i.ibb.co/g3ftQkm/Gari-8775d3b7c9706b6ab755.jpg", 
  gitar: "https://i.ibb.co/SJJspKT/Gitar-774eedfcef890ae97a5e.jpg",
  gunting: "https://i.ibb.co/8r78gkQ/Gunting-21d750be252938b3cd41.jpg", 
  pensil: "https://i.ibb.co/C9RZN33/Pensil-c9e2ed0812646ace349a.jpg" ,
  pintu: "https://i.ibb.co/V9vM5pk/Pintu-c3cc8b561a90d56df709.jpg", 
  selimut: "https://i.ibb.co/7yYN87z/Selimut-f12d4dd8b9ff3ec5423d.jpg" ,  
  seterika: "https://i.ibb.co/kh2h7Jv/Seterika-0268bd6c328f838e3902.jpg" , 
  surat: "https://i.ibb.co/nMWsLKh/Surat-c9cc16c8c10115049ba3.jpg" ,
  tangga: "https://i.ibb.co/DRp8nd3/Tangga-d83d3c5da967f9fa12e4.jpg", 
  teropong:"https://i.ibb.co/sjMg7b2/Teropong-efe71d57af5fe376c40c.jpg", 
  atau: "https://i.ibb.co/tMjKrkG/Atau-74aa6b8c7510d1c349c6.jpg" , 
  dan: "https://i.ibb.co/F6ZZYTv/Dan-77a76ac8a6f790106b68-1.jpg" , 
  Kecuali: "https://i.ibb.co/hCZhkCt/Kecuali-0c145c698b686699423d.jpg", 
  melalui: "https://i.ibb.co/9pmtDrF/Melalui-92a25f64f1bd9a876449.jpg", 
  sebelum: "https://i.ibb.co/L9gKpZh/Sebelum-bc87e4ca007a05dc2939.jpg", 
  selain: "https://i.ibb.co/wg1kGdC/Selain-itu-a2a0c0670b75d252e38f.jpg",
  selepas: "https://i.ibb.co/7YczL8D/Selepas-0fa27a8adb3929ebf684.jpg",
  semua: "https://i.ibb.co/3z0T19z/Semua-595c3f26444e59e1140a.jpg" ,
  tentang: "https://i.ibb.co/V93NvZN/Tentang-8b0d1e2c025970a0c134.jpg",
  tadi: "https://i.ibb.co/dbcWSkF/Tadi-7acc98765ef4cfbc6c92.jpg" ,
  supaya: "https://i.ibb.co/xC6ydhW/Supaya-6bb4775652222604df78.jpg",
  boleh: "https://i.ibb.co/GcLkjKY/Boleh-68f3d2dc078ea01232e0-1.jpg",
  bukan: "https://i.ibb.co/2WTq1ZM/Bukan-1d5d665f1dcff2862c56.jpg",
  hendakmahu: "https://i.ibb.co/R70q6Z0/Hendak-Mahu-8891c2dceb316d4856fb-1.jpg", // hendak mahu
  jangan: "https://i.ibb.co/4FXSzs8/Jangan-3b001ecfeb3de7d37142.jpg",
  mesti: "https://i.ibb.co/hc0Cwm2/Mesti-01a15f326e99cddb670d-1.jpg",
  perlu: "https://i.ibb.co/P1WCqsj/Perlu-52d9e453707139c92905-1.jpg",
  nyaris: "https://i.ibb.co/60RbBQV/Nyaris-3750383b747b018d9050.jpg",
  sudah: "https://i.ibb.co/3y0hYrs/Sudah-f11e39aa9a89c5c94196.jpg",
  tidakada: "https://i.ibb.co/28DtH99/Tidak-ada-27f8fb93856e6971537b.jpg",
  tidakboleh: "https://i.ibb.co/f93rJKr/Tidak-boleh-15d11e4ee50096b856d4-1.jpg",
  ya: "https://i.ibb.co/V3xcrFR/Ya-e20111edd1d7704339c3.jpg",
  wajib: "https://i.ibb.co/z46328w/Wajib-eafd4a4d4d286251082c-1.jpg" ,
 satu: "https://i.ibb.co/RDQBCKh/1-Satu-be2c6afc02b43bc634d4.jpg", 
 dua: "https://i.ibb.co/0VjB3wP/2-Dua-7b9c7a4cdea0a1fad582.jpg" , 
 tiga: "https://i.ibb.co/p4x1N78/3-Tiga-b828372ea85467416eb8.jpg", 
 empat: "https://i.ibb.co/p4x1N78/3-Tiga-b828372ea85467416eb8.jpg",
lima: "https://i.ibb.co/RDQBCKh/1-Satu-be2c6afc02b43bc634d4.jpg",
 enam: "https://i.ibb.co/Wc55Qn3/6-Enam-a3808fa7a23088044480.jpg" ,
 tujuh: "https://i.ibb.co/p3qbc2f/7-Tujuh-bbe317f40bc8c3c97095.jpg",
 lapan:"https://i.ibb.co/XtdjR9m/8-Lapan-327f78de77c469b69a7d.jpg", 
 sembilan: "https://i.ibb.co/87ryNvm/9-Sembilan-6d7c21f07cc6e273e867.jpg", 
 sepuluhttps:"https://i.ibb.co/GfZhhVG/10-Sepuluh-1214a3213d0a5543fe01.jpg", 
 sebelas: "https://i.ibb.co/hR19wBg/11-Sebelas-7601ac76a708edbe44c5.jpg",
 duabelas: "https://i.ibb.co/DRzZNFm/12-Dua-belas-54baac271c048bec19df.jpg", // dua belas
 tigabelas: "https://i.ibb.co/r4D59vb/13-Tiga-belas-58c8e321eb7e05a085b6-1.jpg",
 empatbelas: "https://i.ibb.co/VWt9BbM/14-Empat-belas-8327b75bd2f2f8ab7bce.jpg",
 limbelas: "https://i.ibb.co/3hTXvRS/15-Lima-belas-185ea6db042b998c57cc.jpg",
 enambelas: "https://i.ibb.co/xLq2TZv/16-Enam-belas-1018b8cd0cd3640b5ff1.jpg",
 tujuhbelas: "https://i.ibb.co/7KDgqN4/17-Tujuh-belas-51132c3502d7431d9bea.jpg",
 lapanbelas: "https://i.ibb.co/0219vjv/18-Lapan-belas-d36082da2c7397ba08f2.jpg" ,
 sembilanbelas: "https://i.ibb.co/LzMQFMD/19-Sembilan-belas-2d4b82594acb8430db9f.jpg" ,
 duapuluh: "https://i.ibb.co/FnxCkbZ/20-Dua-puluh-b1585bcde54d33d9884b.jpg" ,
 duapuluhsatu: "https://i.ibb.co/D1pxybP/21-Dua-puluh-satu-16e74dbbe125e6a67715.jpg", 
 duapuluhdua: "https://i.ibb.co/Z65sw2H/22-Dua-puluh-dua-94fdbf4eb637e45c9917.jpg", // dua puluh tiga
 duapuluhtiga: "https://i.ibb.co/s99pvc8/23-Dua-puluh-tiga-150488c4f5272e27cc22.jpg", // dua puluh
 tigapuluh: "https://i.ibb.co/mXjSYrM/30-Tiga-puluh-032299449438f1a7260c.jpg" , // tiga puluh
 empatpuluh: "https://i.ibb.co/wsvV0RN/40-Empat-puluh-fdb9a1f223797624c240.jpg", // empat puluh 
 seratus: "https://i.ibb.co/sPQ6q33/100-Seratus-d5ff48b4c11a7c4d2f1c.jpg" ,
 seribu: "https://i.ibb.co/qDgyq94/1000-Seribu-d1a76db29ae5087da73c.jpg" , 
 sejuta: "https://i.ibb.co/8DYPzWM/1000000-Sejuta-1c7b6d3e14c4db074651.jpg", 
waktu: "https://i.ibb.co/m0xkDd0/Waktu-e615ee5e5a8d2536f73b.jpg", 
tengahhari: "https://i.ibb.co/dfFCfhG/Tengah-Hari-e69443fe25d742eb75bf.jpg",
 tahunini: "https://i.ibb.co/VM2nsjh/Tahun-ini-4add4ece77503a9591a0.jpg", 
 siang: "https://i.ibb.co/18qfrVb/Siang-fde16dd5a35ef670d5cb.jpg",
 semalam: "https://i.ibb.co/hZtRXpp/Semalam-3c1e7e80729d5ec68b02.jpg",
 minit: "https://i.ibb.co/tYSy4SF/Minit-797006439f573a2529ac.jpg",
 musim: "https://i.ibb.co/dLX2Gzd/Musim-87670b94347782619769.jpg",
 malam: "https://i.ibb.co/LN2CCxD/Malam-dae6e38ac19264808c82.jpg",
 hariini: "https://i.ibb.co/JjDPZ4Q/Hari-ini-d563ab5fcbb76750bcef.jpg" ,
 melayu: "https://i.ibb.co/9Z9mmNs/Melayu-Kaum-5c868fae3c1fa93f1c83.jpg" ,
 bangsa: "https://i.ibb.co/3rNSprN/Bangsa-Orang-6a529dc046b0e4d0c37d.jpg", 
 india: "https://i.ibb.co/RB2dCZx/India-Kaum-31ab9d9c0851da59d69d.jpg",
 cina: "https://i.ibb.co/8M6DCvL/Cina-Kaum-810739e5bfe6367db56f.jpg", 
 manis: "https://i.ibb.co/J2CNm2S/Manis-f4084527a2578320cec8.jpg" , 
 masam: "https://i.ibb.co/6WQ7dGN/Masam-29ea15c3839c43ee765e-1.jpg", 
 pahit: "https://i.ibb.co/dMBqLDC/Pahit-4e5ddd2b02f6a8701323.jpg", 
 pedas: "https://i.ibb.co/h1mwXxv/Pedas-4a718fca621038923d67.jpg", 
 asma: "https://i.ibb.co/z5wNgts/Asma-fdea0be0bb7e13926c91.jpg",
batuk: "https://i.ibb.co/VJg7vMs/Batuk-50610c672ecd348c4aee.jpg" , 
timur: "https://i.ibb.co/7GrnKpv/Timur-736bf60383b84fae1cba.jpg",
Utara: "//i.ibb.co/D7qKgtk/Utara-e0bd04ac1b1129dde95d.jpg",
Selatan : "//i.ibb.co/LJ8HZJL/Selatan-3ee41c29bd8976e17035.jpg",
Barat: "//i.ibb.co/khqbhk4/Barat-62551077a732a7148c20.jpg", 
Kanan: "//i.ibb.co/XWfBwv7/Kanan-5b39ee88da259bea25d4.jpg",
Kiri:  "//i.ibb.co/9w3YL8m/Kiri-378d09483b0911ff12c1.jpg", 
Satu: "https://i.ibb.co/608fJ90X/1-Satu-be2c6afc02b43bc634d4-1.jpg" , 
hijau: "https://i.ibb.co/Jj3N1R72/Hijau-7bac86d69ab1abb15f71.jpg" ,
hitam: "https://i.ibb.co/fz8s2SCZ/Hitam-a4146302f4f5d9bb0334.jpg",
jingga: "https://i.ibb.co/5xtLzNLr/Jingga-Oren-51cd97c193b29ab271af-1.jpg", 
 kelabu: "https://i.ibb.co/gQH3tVd/Kelabu-4c96a3de8ddb45c736ac.jpg", 
 kuning: "https://i.ibb.co/b5pwgLgw/Kuning-335ef3711a2d51f79fab.jpg", 
 merah: "https://i.ibb.co/GQp8Pjy2/Merah-b6ae5513335a91bb8360.jpg" , 
  putih: "https://i.ibb.co/cKhfx3qT/Putih-1cdbf16b2534f3c30ed0.jpg" , 
 ampu: "https://i.ibb.co/HfJ5BFd2/Ampu-4da68827093463d11601.jpg" , 
 bertolakansur: "https://i.ibb.co/nMFYLbJn/Bertolak-ansur-73d0fb750cd36d938942.jpg", 
 bunuh: "https://i.ibb.co/Fq4YT3nT/Bunuh-60518a3a973427a4915a.jpg", 
  cium: "https://i.ibb.co/ksnsTHf7/Cium-f6d78ba43a0ece3131d2.jpg", 
 Harap: "https://i.ibb.co/Wp0BfBKT/Harap-8353bd4b0197e6701136.jpg", 
 hina: "https://i.ibb.co/0jMtzRmB/Hina-e54e678d97061f4eecbe.jpg",
 larang: "https://i.ibb.co/N6vhd6nc/Larang-550e0b0fbe36619b4d95.jpg" ,
 lemas: "https://i.ibb.co/hRw6L706/Lemas-b769356f4947f3d1c8f5.jpg",
  memperdayakan: "https://i.ibb.co/j9yQtcsL/Memperdayakan-b1e6a8d66328154f9c51.jpg" ,
 mengapikan: "https://i.ibb.co/V0k2n9wd/Mengapi-apikan-19b78270c6ec33eb0494.jpg" , 
 mengasingkan: "https://i.ibb.co/7NdfSYXD/Mengasingkan-85633da85702133c2ea3.jpg" ,
mengingatkatkan: "https://i.ibb.co/wFf7JhRJ/Mengingatkan-65390875b4187affa665.jpg", 
abang:"https://i.ibb.co/zWRdgHX2/Abang-e5bdd22323a6ee4c262f.jpg" ,
  suami: "https://i.ibb.co/v6fff1t6/Suami-f14ced6fc8b9d8c11414.jpg" ,
perempuan: "https://i.ibb.co/hJtZMZHn/Perempuan-cd4e9db3a361c8669dc4.jpg" ,
 orang: "https://i.ibb.co/chh0VQbK/Orang-da89e55044321089d0e7.jpg", 
  lelaki: "https://i.ibb.co/pBH1XD5s/Lelaki-be5bfe0eccd872c8e8e2.jpg", 
  keturunan: "https://i.ibb.co/0ywxmnqW/Keturunan-Generasi-17afbafd97a21157a047.jpg" ,
 keluarga: "https://i.ibb.co/hxtnFSk1/Keluarga-a59bea1cb025c9f91246.jpg", 
 Kekasih: "https://i.ibb.co/c4HGFVV/Kekasih-4782368daa0315e80216.jpg", 
 kanakkanak: "https://i.ibb.co/8DHqzt5N/Kanak-kanak-a93179989a88a56966bd.jpg" ,
 kahwin: "https://i.ibb.co/gMtWnMwQ/Kahwin-648473470a71b000ef85.jpg" , 
 Isteri: "https://i.ibb.co/7tDjcY07/Isteri-Bini-0763d2dda611a6f7c43f.jpg" ,
 emak: "https://i.ibb.co/hF8xTn3c/Emak-Ibu-Bonda-c7118950c38d42f24e2a.jpg" ,
 cerai: "https://i.ibb.co/WZChyDL/Cerai-4b0d89c1a988bdabc94c.jpg" ,
 bujang: "https://i.ibb.co/G3CmjzTt/Bujang-Belum-berkahwin-d1e03d9f1f87cba23aa6.jpg" ,
 bertunang: "https://i.ibb.co/20TYd8dv/Bertunang-c1a409fdef77e5842343.jpg",
 berduaduaan: "https://i.ibb.co/11byZxK/Berdua-duaan-48e6e97c8ca640df627a.jpg" , 
 anaksulung : "https://i.ibb.co/V0J5jPvK/Anak-sulung-8fa27c2de151d7df85fe.jpg", 
 senior: "https://i.ibb.co/9mFnYMz3/Senior-8dd6c069fea28e375576.jpg" ,
 wakil: "https://i.ibb.co/9mCZhfp1/Wakil-cfa1eb675272f0090de1.jpg" ,
 saksi: "https://i.ibb.co/GvJbh2tR/Saksi-7dabf26b9ea741fb6e80.jpg" , 
 remaja: "https://i.ibb.co/RGh3Tg9r/Remaja-d87fe04c744f5bd2ea1c.jpg" , 
 penonton: "https://i.ibb.co/QFYHPhrv/Penonton-118e391fbc103cbe4f17.jpg" , 
 pengerusi: "https://i.ibb.co/V0s1q4Dv/Pengerusi-aba74992ca64cf5a9ac5.jpg",
 pakar: "https://i.ibb.co/qFBZKn8H/Pakar-6863a2d61e9ed641fc33.jpg" ,
 musuh: "https://i.ibb.co/r2BW4BcX/Musuh-9c27243dc2e1d2b34b92.jpg", 
 akta: "https://i.ibb.co/pVqhGM4/Akta-3ba3bd91e892119592db.jpg" , 
 demokrasi: "https://i.ibb.co/W4WPLyW0/Demokrasi-96329d2bccab0f8965cb.jpg" , 
 ditindas: "https://i.ibb.co/mrTk8Zwk/Ditindas-d76da52f50b9bed2c698.jpg" , 
 masyarakat: "https://i.ibb.co/5X9hpMRk/Masyarakat-bd339cf619a3548c77f6.jpg",  
 mahkamah: "https://i.ibb.co/8t2FrzR/Mahkamah-589e9c98ac1df606c50b.jpg" , 
 jabatan: "https://i.ibb.co/bg7nwkJR/Jabatan-ec553b53f8d59c24aea1.jpg" , 
 ditindas: "https://i.ibb.co/mrTk8Zwk/Ditindas-d76da52f50b9bed2c698.jpg" , 
 demokrasi: "https://i.ibb.co/W4WPLyW0/Demokrasi-96329d2bccab0f8965cb.jpg" , 
 tiadaidea: "https://i.ibb.co/dsT4z1Ty/Tiada-idea-1f0400b6f94d999a69d8.jpg" , 
 tengahberfikir: "https://i.ibb.co/ymqsm86R/Tengah-berfikir-ef31a07c88406e130658.jpg" ,
 pengetahuan: "https://i.ibb.co/23Ftrs5D/Pengetahuan-6700d11244a0aaefd626.jpg" , 
 pendapat: "https://i.ibb.co/5h21VHdX/Pendapat-bf1e1c9cc9153d2f1372.jpg" ,
 dibuangkerja: "https://i.ibb.co/0RQKzXqt/Pecat-Dibuang-kerja-3c7c68d03f73b08ecf9e.jpg" , 
 bersara: "https://i.ibb.co/93qcFK3d/Bersara-a571744c2f4e3d646ef4.jpg" ,
 bonus: "https://i.ibb.co/LXnqK1Gh/Bonus-be399506a62e2dd35766.jpg" , 
 jawatan: "https://i.ibb.co/1tVL093C/Letak-Jawatan-eafa13c8460dea43a000.jpg" ,
 pekerjaan: "https://i.ibb.co/Fbz9xLF9/Pekerjaan-95e85e2a9adf540b88c7.jpg" , 
 profesional: "https://i.ibb.co/G4gWj8Fw/Profesional-03995a53b9e18666c8db.jpg" , 
sah: "https://i.ibb.co/MQRDbf4/Sah-90f22d5d097fe9c300bb.jpg" ,
sementara: "https://i.ibb.co/KpK3XF9z/Sementara-871e9343710a965c1f61.jpg" ,
telinga: "https://i.ibb.co/v492qfNF/Telinga-b753a3572bf0bd3e23ee.jpg" ,
tangan: "https://i.ibb.co/5htqNkVt/Tangan-e042c749cf513be0fdbf.jpg" , 
rambut: "https://i.ibb.co/VYmNBcZb/Rambut-f18a841219e385b93519.jpg" , 
mukawajah: "https://i.ibb.co/R4VV0jz8/Muka-Wajah-978a49628366d3e932db.jpg" , 
mata: "https://i.ibb.co/93WBssmS/Mata-6c492b83aec181db461b.jpg" ,
usaha: "https://i.ibb.co/4RWnKGk9/Usaha-a5e9e011576c07e3134e.jpg" , 
tugasan: "https://i.ibb.co/XfDPh7cB/Tugasan-159ba498f4d28d60424a.jpg" , 
syarat: "https://i.ibb.co/5XzCDk2k/Syarat-20c385b99a1b0ad9dc27.jpg" , 
sistem: "https://i.ibb.co/cKDj58zm/Sistem-d570181f3b08f81c856e.jpg" ,
kualiti: "https://i.ibb.co/N6JgYskr/Kualiti-77a85fabc287e0bb0951.jpg" , 
kerjasama: "https://i.ibb.co/Z1750d4s/Kerjasama-f0b774114c276e795803.jpg" ,
kecemasan: "https://i.ibb.co/93Z9C2Pg/Kecemasan-1e2abe3e623828b2fd2f.jpg", 
tunjuk: "https://i.ibb.co/nNdwXX8p/Tunjuk-0190c8e30053e0878aef.jpg", 
tuduh: "https://i.ibb.co/s9d2C8xD/Tuduh-3154156b682ce1008f5e.jpg",
tidakbersetuju: "https://i.ibb.co/8gWsRxph/Tidak-bersetuju-33db97b9aa0dba966bd6.jpg" ,
pandangrendah: "https://i.ibb.co/SwGyZCvp/Pandang-rendah-0aba3c24ff4d318e34ab.jpg" ,
mengalah: "https://i.ibb.co/6JtL4cbS/Mengalah-2a4ecc7b39ec89415c2e.jpg", 
pedas: "https://i.ibb.co/9k3ZV08n/Pedas-4a718fca621038923d67-1.jpg" ,
pahit: "https://i.ibb.co/kNQzXJF/Pahit-4e5ddd2b02f6a8701323-1.jpg" , 
masam: "https://i.ibb.co/3yvggh1F/Masam-29ea15c3839c43ee765e-2.jpg" ,
manis: "https://i.ibb.co/LDP9BZXh/Manis-f4084527a2578320cec8-1.jpg" , 
tunjuk: "https://i.ibb.co/nNdwXX8p/Tunjuk-0190c8e30053e0878aef.jpg" , 
tuduh: "https://i.ibb.co/s9d2C8xD/Tuduh-3154156b682ce1008f5e.jpg" ,
tidakbersetuju: "https://i.ibb.co/8gWsRxph/Tidak-bersetuju-33db97b9aa0dba966bd6.jpg" , // tidak bersetuju
pandangrendah: "https://i.ibb.co/SwGyZCvp/Pandang-rendah-0aba3c24ff4d318e34ab.jpg", // pandang rendah
mengalah: "https://i.ibb.co/6JtL4cbS/Mengalah-2a4ecc7b39ec89415c2e.jpg", 
pedas: "https://i.ibb.co/9k3ZV08n/Pedas-4a718fca621038923d67-1.jpg", 
pahit: "https://i.ibb.co/kNQzXJF/Pahit-4e5ddd2b02f6a8701323-1.jpg", 
masam: "https://i.ibb.co/3yvggh1F/Masam-29ea15c3839c43ee765e-2.jpg", 
manis: "https://i.ibb.co/LDP9BZXh/Manis-f4084527a2578320cec8-1.jpg",
ulat: "https://i.ibb.co/ycCwQwbK/Ulat-3d8bad380e09964f2866.jpg" , 
ular: "https://i.ibb.co/ZzjNvjFB/Ular-9e228c18aa7b1cdb94ab.jpg", 
stong: "https://i.ibb.co/YFrmKHBS/Sotong-a6a8efe864030d496839.jpg", 
singa: "https://i.ibb.co/7NR6bqVz/Singa-c094d05974668d0d4c84.jpg",
semut: "https://i.ibb.co/2033pGZg/Semut-101a60a37c3eb156b28e.jpg",
lembu: "https://i.ibb.co/KpHdVCHL/Lembu-b130751520517d6185d6.jpg" ,
kelawar: "https://i.ibb.co/PvkpV5BZ/Kelawar-3385ddb88d8711ec8378.jpg",
kambing: "https://i.ibb.co/7dNqG2jn/Kambing-5ab62e242a7d3173d252.jpg" , 
kambingbiri: "https://i.ibb.co/SwS7N1mp/Kambing-biri-biri-30da7ad7f8014604926d.jpg",
harimau: "https://i.ibb.co/Zpdq91Xm/Harimau-2d18ad2961cb14ec24dd.jpg", 
burung: "https://i.ibb.co/fVCkcPBk/Burung-6fdeaba1d9768e98b401.jpg" ,
binatang: "https://i.ibb.co/nNSGn9jW/Binatang-2f8ca7e1363ddf5c9e7b.jpg" , 
alamri: "https://i.ibb.co/5XrN4Gm6/Almari-89fd881bdc63362f1423-1.jpg" , 
bakul: "https://i.ibb.co/spsGjp34/Bakul-I-bc35d57fc56a37815c87.jpg" , 
beg: "https://i.ibb.co/sdLWPByM/Beg-f0aa0f31219ad4cbeee2.jpg",
ubat: "https://i.ibb.co/BVBS9XmW/Ubat-gigi-e33499eccd62bc41acbc.jpg" , 
surat: "https://i.ibb.co/0pFtPjrP/Surat-c9cc16c8c10115049ba3-1.jpg" , 
pen: "https://i.ibb.co/RpxN2Rns/Pen-6aef200195cdd4e9f394.jpg" , 
logo: "https://i.ibb.co/Vp3SyDys/Logo-7e52935adcea48f356e8.jpg" , 
gambar: "https://i.ibb.co/5W0J56BG/Gambar-eacd98b172fa95132f71.jpg",
tudung: "https://i.ibb.co/jkfBtm9P/Tudung-11b1c5672322fc428532.jpg" , 
seluarpendek: "https://i.ibb.co/5h8LHBRb/Seluar-pendek-f8e43bb66910987a9a26.jpg" , // seluar pendek
seluarpanjang: "https://i.ibb.co/C5vfjr1D/Seluar-panjang-5a791a14abd2b2b52e61.jpg" , // seluar panjang
kasut: "https://i.ibb.co/6JpwwVDY/Kasut-09d26bd0b46388fc6b2e.jpg",
bajumelayu: "https://i.ibb.co/vx1dGXyy/Baju-Melayu-ad30bf60d41c91379694.jpg",
cincin: "https://i.ibb.co/fVDrN0cL/Cincin-2f9b9f6c203cfb5964f4.jpg",
agama: "https://i.ibb.co/Mx9BXN4V/Agama-85a3aa0261256caabe03.jpg" ,
tuhan: "https://i.ibb.co/R4kpB5DY/Tuhan-4604f4874defa266bf77.jpg" , 
syurga: "https://i.ibb.co/XZ369LpB/Syurga-121795fa86d707b7d9f7.jpg",
syaitan: "https://i.ibb.co/tw7jd3W0/Syaitan-5dbdfe6ae9d1d8d836d1.jpg" ,
sembayang: "https://i.ibb.co/WWHbXbvD/Sembahyang-Islam-2fe82574e44450a2869e.jpg" , 
rasul: "https://i.ibb.co/W430gmM3/Rasul-de66810bc259c3e6ff67.jpg" , 
puasa: "https://i.ibb.co/yFxthyfJ/Puasa-7bf038f436412805b94b.jpg", 
pahala: "https://i.ibb.co/d0Z4cKDH/Pahala-236f688c4826394fab8c.jpg",
niat: "https://i.ibb.co/1YbDqfSk/Niat-a98db66e2286da582a35.jpg" , 
neraka: "https://i.ibb.co/0yKbqG3v/Neraka-2ca82d0f888fdb89d745.jpg" , 
nafsu: "https://i.ibb.co/HTB49JMD/Nafsu-56a4a0a48c97bcd2f5a6.jpg" ,
nabimuhammad: "https://i.ibb.co/99WwbRPv/Nabi-Muhammad-S-A-W-cc4435a617642e247ed4.jpg", // nabi muhammad
nabi: "https://i.ibb.co/xS64Q640/Nabi-8e95d5a6790eadd136bd.jpg" ,
malaikat: "https://i.ibb.co/FLjT9t70/Malaikat-Islam-8489d59bf5098e93fad1.jpg" , 
islam: "https://i.ibb.co/84zRnVsH/Islam-d840c33817645784cd24.jpg" , 
imam: "https://i.ibb.co/C3fdH0jt/Imam-d154cf50f428fffd09a0.jpg" , 
ibadat: "https://i.ibb.co/CLzQdPd/Ibadat-Islam-220f6db01202ba345ac5.jpg",
dosa: "https://i.ibb.co/twJVp9PV/Dosa-7f4e1132023c8994c163.jpg" , // Dosa
bukapuasa: "https://i.ibb.co/hbxT9Zr/Buka-puasa-c1017bc39c5302ce48d5.jpg" , 
alquran: "https://i.ibb.co/LXzVsDPD/Al-Quran-0ad7921822b517ae4be1.jpg" , 
agama: "https://i.ibb.co/Mx9BXN4V/Agama-85a3aa0261256caabe03.jpg" , 
teater: "https://i.ibb.co/8DcbkTN9/Teater-7c5d6868deee9d1bf31e.jpg" ,
tarian: "https://i.ibb.co/Mxr105kF/Tarian-896f0acdc180536e9fad.jpg" , 
lagu: "https://i.ibb.co/HpFns789/Lagu-7f87916ca896921d1f87.jpg",
komedi: "https://i.ibb.co/p6QHxB0M/Komedi-aa978c074427a5ba75e6.jpg" , 
kartun: "https://i.ibb.co/fzncRJBM/Kartun-a3f454c428be965ab74b.jpg" , 
joget: "https://i.ibb.co/wZcXvy8B/Joget-e53755246923925ca671.jpg" ,
filemgambar: "https://i.ibb.co/DHgx63Bh/Filem-gambar-bergerak-6323d4c42ddbd24251bd.jpg", // filem gambar
drama: "https://i.ibb.co/fKmVy2y/Drama-televisyen-4e50ae593be95b44d4fd.jpg" , 
bunyi: "https://i.ibb.co/LzbJvTtg/Bunyi-8fb65a3c4200788f7089.jpg" , 
satelit: "https://i.ibb.co/JRmJNZz2/Satelit-c35a50ebb64432795fbc.jpg" , 
lapisanozon:  "https://i.ibb.co/hRvK9nVc/Lapisan-ozon-89ebf0a490d8d196c5f4.jpg" , // lapisan ozon
gerhana: "https://i.ibb.co/hRyprVsK/Gerhana-5bb78bf10f0e78a7502a.jpg" ,
institusi: "https://i.ibb.co/6JTqwG4p/Institusi-Institut-d449a0feb13f5987d6e7.jpg", 
tuisyen: "https://i.ibb.co/WNsjzTcY/Tuisyen-Tutorial-264b9aff95a2fdcba1e2.jpg" ,
taska: "https://i.ibb.co/xKng0Dj0/Taska-518551902fb5cc122a31.jpg",  
sekolah:"https://i.ibb.co/RT3Sb6hY/Sekolah-e993381ead46951edee7.jpg", 
kelas: "https://i.ibb.co/7NT43S6Z/Kelas-1fc9912005665a25ad04.jpg",
politeknik: "https://i.ibb.co/Mb3Sppt/Politeknik-1ed5c205ab7f087a800e.jpg", 
universiti: "https://i.ibb.co/KpT3rb5R/Universiti-42bdeb04178a1ca6d2e5.jpg", 
tuan: "https://i.ibb.co/JRrRmwFw/Tuan-3adf9e6d6d94044daf5c.jpg", 
saya: "https://i.ibb.co/tTYPQ2YH/Saya-308cf649158d30e78273.jpg", 
Puan: "https://i.ibb.co/FbY0sD1t/Puan-71e866ca6641595c8b4b.jpg", 
nama: "https://i.ibb.co/VpjLW0n5/Nama-5935f139206a1e7b5fc9.jpg", 
kita: "https://i.ibb.co/PZkh1FG7/Kita-36e7e067e8bbd27180d6.jpg", 
kamu: "https://i.ibb.co/8n1bmBH5/Kamu-0132a9764ea77bdd84a8-1.jpg", 
kami: "https://i.ibb.co/2BQ4Zyw/Kami-b14a9c807d6417a26758-1.jpg",
dia: "https://i.ibb.co/F4KGCZYr/Dia-58a150ee6765f407cf41.jpg" , 
awak: "https://i.ibb.co/CpT6SFbz/Awak-Anda-001ee1698bfb731f20e6.jpg", 
tentang: "https://i.ibb.co/6RdHcWjz/Tentang-8b0d1e2c025970a0c134-1.jpg", 
tetapi: "https://i.ibb.co/ch88rBvV/Tetapi-2c71a5a0c3cce20ff7e8.jpg", 
tadi: "https://i.ibb.co/67ZLnb5D/Tadi-7acc98765ef4cfbc6c92-1.jpg",
selepas: "https://i.ibb.co/h1CMF1tt/Selepas-0fa27a8adb3929ebf684-1.jpg" , 
semenjak: "https://i.ibb.co/SDb6TSgX/Sejak-Semenjak-6b6277138e3c876f2d29.jpg", 
sebab: "https://i.ibb.co/PGRPGQ5T/Sebab-951f0f5aea5f868a56bf.jpg", 
sahaja: "https://i.ibb.co/3mhdDVYF/Sahaja-5df68324ca5b836b5b82.jpg", 
kerana: "https://i.ibb.co/KxCWtCNM/Kerana-27ddf91e624d0799dc95-1.jpg", 
pengangkutan: "https://i.ibb.co/VYdpSfJB/Pengangkutan-fa3d40265f9dc1004350.jpg" ,
timah: "https://i.ibb.co/1J2S5TY0/Timah-24328b129e2398b029aa.jpg",
pasir: "logamhttps://i.ibb.co/679g8MJ6/Pasir-328ffc79dd668ee28339.jpg",
logam: "https://i.ibb.co/zVHyHgKX/Perak-Logam-8c9d505cb3dac97f1ce7.jpg", 
kaca: "https://i.ibb.co/6RxGFQ4p/Kaca-f6e099b721f61c4063a8.jpg",
emas: "https://i.ibb.co/Vcrvfh49/Emas-dcc9d064e751d66b31b0.jpg" , 
debu: "https://i.ibb.co/67W2117c/Debu-4a515c0dd19d45962884.jpg", 
aluminium: "https://i.ibb.co/9mQjYCff/Aluminium-d766fcf98ac4e6039f03.jpg", 
usia: "https://i.ibb.co/8DXs0Wq7/Usia-4e407790a9b469b596e6.jpg" , 
suhu: "https://i.ibb.co/TD5VJcpx/Suhu-4fb6639d1b0796848e34.jpg", 
sesetengah: "https://i.ibb.co/JW0g2zrB/Sesetengah-4cfa9ae70fd430d8cba3.jpg",  
pertengahan: "https://i.ibb.co/tpncFjk5/Pertengahan-eb9c8d014e733f110bd8.jpg" , 
peratus: "https://i.ibb.co/xKR2wjP6/Peratus-d702dcf71e62b59a702b.jpg" , 
gred: "https://i.ibb.co/Mx2q6RvD/Gred-akademik-f6931f11591132d45240.jpg", 
video: "https://i.ibb.co/Cs54Zrp2/Video-75dce9866d26facee508.jpg", 
robot: "https://i.ibb.co/kVR7CHg6/Robot-d669971bf2f9d619a081.jpg",
multimedia: "https://i.ibb.co/bhSQKPH/Multimedia-a7759bf30bda56d220ff.jpg", 
mesin: "https://i.ibb.co/pvSjq1cj/Mesin-9c33ae0331b56483329a.jpg", 
gas: "https://i.ibb.co/ccg9NLLN/Gas-f58a181e2c3ea971107b.jpg", 
formula: "https://i.ibb.co/21frws9d/Formula-7c1a50cd9e852ca3e379.jpg", 
elektronik: "https://i.ibb.co/60LLKn6z/Elektronik-e5c6d81d339cb713ce64.jpg" ,
elektrik: "https://i.ibb.co/JRFw2WqZ/Elektrik-7be25d2231f03dfd7a72.jpg",
bateri: "https://i.ibb.co/xqkJVdHZ/Bateri-2999984545d04a0919b3.jpg", 
permaian: "https://i.ibb.co/rfFXR5tk/Permainan-47089a52105228079a54.jpg", 
perlawananakhir: "https://i.ibb.co/LXVRM5Zh/Perlawanan-akhir-65b7ed77a9813664dab4.jpg", // perlawanan akhir
pertandingan: "https://i.ibb.co/ch89FJT7/Pertandingan-115a5b238d3fc606f9e2.jpg" , 
memanah: "https://i.ibb.co/Wpp98NqP/Memanah-224b550d16e0d4347b78.jpg", 
tempat: "https://i.ibb.co/DD0z0BfB/Tempat-39d65ef07f156f68e998-1.jpg",
asrama: "https://i.ibb.co/7tcpGPGf/Asrama-65db96ef2640639f5a5a-1.jpg" , 
surau: "https://i.ibb.co/1JmtKGZS/Surau-e0779f818583c7846344.jpg" , 
stadium: "https://i.ibb.co/0yBh18L9/Stadium-I-84964342dae94adf8ffd.jpg", 
restoran: "https://i.ibb.co/TMX2m6ZZ/Restoran-dc9126b5e180efd0f6e6.jpg", 
lif: "https://i.ibb.co/rGHjZbTt/Lif-ea2087943301702498f5-1.jpg",
kilang: "https://i.ibb.co/6ckBLmDv/Kilang-26db5b426667fe2944d0-1.jpg",
kampung: "https://i.ibb.co/TBQq0gfY/Kampung-0a0d99255650f9c93fd1-1.jpg" , 
dewan: "https://i.ibb.co/tpWP8NPh/Dewan-1ff3a3fe38c16416c032-1.jpg", 
hotel: "https://i.ibb.co/jkPg3JBR/Hotel-ff4f747da332d15828cc-1.jpg", 
bengkel: "https://i.ibb.co/HDSBBSwJ/Bengkel-bd2ad9acccf65e96aa6b-1.jpg", 
bolasepak: "https://i.ibb.co/RqFrXq5/Bola-sepak-bfb658fa247e21ed37a6-2.jpg", // bola sepak
bolajaring: "https://i.ibb.co/93pkkZXv/Bola-jaring-551684fe82fd59720160-1.jpg", // bola jaring
angkatberat: "https://i.ibb.co/SwhSJ2KL/Angkat-berat-3d3d2e6d1a3a7d71a0e1-1.jpg", // angkat berat
seri: "https://i.ibb.co/RpNJVZYb/Sukan-752622b9074af9e707e9.jpg", 
sepaktarwa: "https://i.ibb.co/rrrgzb3/Sepak-takraw-fa4a60e6db8b26c24e6f.jpg", 
pertandingan: "https://i.ibb.co/MDV9CTWG/Pertandingan-115a5b238d3fc606f9e2-1.jpg", 
perlawanan: "https://i.ibb.co/WvHMQH8S/Perlawanan-akhir-65b7ed77a9813664dab4-1.jpg",
ofsaid: "https://i.ibb.co/RG0LNNJP/Ofsaid-37c3c0cfd8c944e6e981.jpg", 
pecahrekod: "https://i.ibb.co/TBwcY8pW/Pecah-rekod-f7069e863109efeb0d8b.jpg", 
hoki: "https://i.ibb.co/HR8hcpN/Hoki-119228f1a9945096ecfc-1.jpg", 
aras: "https://i.ibb.co/p6SycfRP/Aras-6ba2ec02ea4e77e7436d-1.jpg", 
beberapa: "https://i.ibb.co/XkJZXxHS/Beberapa-c359bddb9257a7b54e8a-1.jpg", 
akademik: "https://i.ibb.co/fVfrHWpM/Gred-akademik-f6931f11591132d45240-1.jpg",
peringkat: "https://i.ibb.co/wFCNBjD3/Peringkat-acb9df07eb86aa827eef-1.jpg", 
pertengahan: "https://i.ibb.co/bgnQwX00/Pertengahan-eb9c8d014e733f110bd8-1.jpg",
saiz: "https://i.ibb.co/sdL3hYbX/Saiz-b9189abaec0305b5c127.jpg", 
suhu: "https://i.ibb.co/fVbWd9v2/Suhu-4fb6639d1b0796848e34-1.jpg",
usia: "https://i.ibb.co/JFrPsM9Y/Usia-4e407790a9b469b596e6-1.jpg" , 
tehtarik: "https://i.ibb.co/TMCS0RkC/Teh-Tarik-ad70872406a1969ef281.jpg" ,
arak: "https://i.ibb.co/zW5M1MCF/Arak-a65ee71a8ef852376f3b.jpg" ,
sirap: "https://i.ibb.co/Ld4rCqPg/Sirap-bbf770554a51bed81024.jpg" , 
nescafe: "https://i.ibb.co/VYwg9Cwm/Nescafe-e4a2f72b6a4b5cd24856.jpg" , 
teh: "https://i.ibb.co/jkMFkMbP/Teh-fe1f3af532222ffa98d9.jpg" , 
kondom: "https://i.ibb.co/8D8xcSHr/Kondom-d010fb097688da8d4c5f.jpg",
luka: "https://i.ibb.co/999wzRFq/Luka-0e49f3a61c13aff2aaf3.jpg" , 
rabun: "https://i.ibb.co/HL8Kf621/Rabun-82074aee38427a0e9ea7.jpg" , 
selesema: "https://i.ibb.co/21z1r6Fs/Selesema-1c2adb3dd3a6885c2e4d.jpg", 
sperma: "https://i.ibb.co/7dnmqsmK/Sperma-71852fc3b48265034342.jpg", 
urut: "https://i.ibb.co/QvWwvhKB/Urut-70e7fc2c77fcf300d04a.jpg" , 
xray: "https://i.ibb.co/rKJx0kk7/X-ray-74b15797d651b6dd8ee8.jpg" , 
vitamin: "https://i.ibb.co/HMkgWtK/Vitamin-aa781c45f280ac1f6bf6.jpg" ,
juri: "https://i.ibb.co/HpMTfbQd/Juri-b7cace7e5f3ae0b25c3c-1.jpg" ,
jururawat: "https://i.ibb.co/bMDv5wTL/Jururawat-1ed9515be06e9d01b59a.jpg", 
pengurus: "https://i.ibb.co/Y7Z6bmcV/Pengurus-27e20f6ccacb55dc09b5.jpg",
polis: "https://i.ibb.co/PsSWfhQW/Polis-3fa95d7b38ba3020ef42.jpg" , 
temuduga: "https://i.ibb.co/1tg9gSBb/Temuduga-387ba83c1aa7874b78ff.jpg" ,
jurubahasa: "https://i.ibb.co/PbHRDYw/Jurubahasa-Isyarat-763bfdaf44e550f26d6c.jpg" , 
bos: "https://i.ibb.co/Fqf2Zkb9/Bos-b9650dc7122a78706fb8.jpg" , 
jurukamera: "https://i.ibb.co/5Wyc8ZmF/Jurukamera-1846bfcf490ce764a30e.jpg" ,
jadual: "https://i.ibb.co/V0D7KHSJ/Jadual-0428bd7bac1a44e7c297.jpg" ,
novel: "https://i.ibb.co/BVSZ7wK2/Novel-1f785b556a45adc52c45-1.jpg" ,
pasport: "https://i.ibb.co/HTJhf1r0/Pasport-574c5f5f40388f5d91d1.jpg" , 
statistik: "https://i.ibb.co/xSmckxnf/Statistik-fb6971ba0093d72004ae.jpg" , 
visa: "https://i.ibb.co/NgBthz49/Visa-15e3af232c1eeb19109c.jpg" , 
sampul: "https://i.ibb.co/fZzSGnn/Sampul-f2d51fb42a252426fc8b.jpg" ,
rekod: "https://i.ibb.co/S7HRXz8m/Rekod-453268191b4216cf6b2d.jpg", 
belajar: "https://i.ibb.co/dN9KRbK/Belajar-88861e428bb0aa10c470.jpg" , 
diploma: "https://i.ibb.co/QjnQGtJD/Diploma-c9ca2041fa0e4ebfa2f2.jpg" , 
fizik: "https://i.ibb.co/N2XF2n9L/Fizik-d39dc9735c9ab79d2fba.jpg" , 
ijazah: "https://i.ibb.co/60LtHWYF/Ijazah-01f4bd302dda40bf45df.jpg" , 
pendidikan: "https://i.ibb.co/nsyFmtLW/Pendidikan-4111b5ed3a78e948a199.jpg" ,
pelajaran: "https://i.ibb.co/R4MqFfGq/Pelajaran-c276ee8367f967a36334.jpg" , 
ponteng: "https://i.ibb.co/RGtCWJhN/Ponteng-1235705e94f36a7028fa.jpg" , 
semester: "https://i.ibb.co/rfQZ6TJH/Semester-d6d3368b0833cf9f465f.jpg", 
ujian: "https://i.ibb.co/rGLDBKsG/Ujian-4197cd6e78075d23363c.jpg" , 
aman: "https://i.ibb.co/JjCnSS3d/Aman-616d20b3eecb8fb90566.jpg",
buruk: "https://i.ibb.co/tMR02xBJ/Buruk-b1f390e55da673b287c4.jpg", 
dahaga:"https://i.ibb.co/23gDGjPt/Dahaga-85d238bb1353e551fcf3-1.jpg", 
kacak: "https://i.ibb.co/B2WvJM82/Kacak-e6f187c95b8a38f8bcc8.jpg", 
lipat: "https://i.ibb.co/FkTjKWX7/Lipat-aa858e1f47f0c79b08ac.jpg", 
pandu: "https://i.ibb.co/bjfxcgL1/Pandu-9ea12a2f407481caa065.jpg", 
sembelih:"https://i.ibb.co/qty7RCy/Sembelih-haiwan-b1e88771bbc1a806f08b.jpg", 
hospital:"https://i.ibb.co/jkGkgwNv/Hospital-e1de8168a6129a770291-1.jpg", 
ambulans:"https://i.ibb.co/gZk2pwkZ/Ambulans-9b9aa1b0fde34732c0f3-1.jpg", 
kanan:"https://i.ibb.co/bg9Qbvnq/Kanan-5b39ee88da259bea25d4-1.jpg", 
kiri: "https://i.ibb.co/62KcdbR/Kiri-378d09483b0911ff12c1-1.jpg",
tidak: "https://i.ibb.co/FRrgzyQ/Tidak-a785ae42f197ad1e523e-1.jpg", 
selalu: "https://i.ibb.co/HTFtffJJ/Selalu-53535a255bbeaf06558c-1.jpg", 
akan: "https://i.ibb.co/39n59FMW/Akan-3bb1faa656300c10097c.jpg", 
juga: "https://i.ibb.co/B2fZJjQh/Juga-8feca30d97f1a840f0b3.jpg" ,
tanpa: "https://i.ibb.co/79dgNVy/Tanpa-50cda4b4d88253ad3040-1.jpg", 
kecuali: "https://i.ibb.co/B5t8TQhZ/Kecuali-0c145c698b686699423d-2.jpg", 
kemudian: "https://i.ibb.co/M5VzySq7/Kemudian-7f4a8a08a8e91827c26c-2.jpg", 
soalan: "https://i.ibb.co/tMymQ8g6/Soalan-7a8711f0b79530118b10.jpg", 
puisi: "https://i.ibb.co/N2mvR7cM/Puisi-025fab03f71ad9f2b0ad-1.jpg",
tariansinga: "https://i.ibb.co/Lz5gLRN7/Tarian-Singa-0f0d3ed786dcde9db0a3.jpg" , // tarian singa
silapmata: "https://i.ibb.co/6RfYxSgm/Silap-mata-7f21b61cdf6a1368cde2.jpg", // silap mata
pencen: "https://i.ibb.co/B2szmDPn/Pencen-a93c846569532755052a-1.jpg",
almari: "https://i.ibb.co/vvVs0qRp/Almari-89fd881bdc63362f1423-2.jpg", 
badan: "https://i.ibb.co/S4Gn6D59/Badan-87f34d5ee3cc8b2cdbed-1.jpg", 
bonus: "https://i.ibb.co/XxS76Fqw/Bonus-be399506a62e2dd35766-1.jpg", 
jiran: "https://i.ibb.co/cKsVJvZN/Jiran-31bd1cc4a9898a87afa9-3.jpg" ,
kampung: "https://i.ibb.co/Lz2CyLJX/Kampung-0a0d99255650f9c93fd1-2.jpg" , 
pasar: "https://i.ibb.co/PsYBW4GL/Pasar-bb015a83e4f3b92eb10b-1.jpg", 
alahan: "https://i.ibb.co/VY8q32P3/Alahan-e0199fd13c15226fef99.jpg" , 
koma: "https://i.ibb.co/gbDy1PMy/Koma-3672073456d5d150c032.jpg", 
lemak: "https://i.ibb.co/9kfvR06K/Lemak-839500fc78de5aa5afd0.jpg" , 
rabun: "https://i.ibb.co/Dg658KRf/Rabun-82074aee38427a0e9ea7-1.jpg" , 
virus: "https://i.ibb.co/6J8MPZr6/Virus-d212b92f52c854d4479c-1.jpg" , 
hanya: "https://i.ibb.co/KxTFd4z8/Hanya-b420f93704f9fd0e5a22-1.jpg", 
tiap: "https://i.ibb.co/cShB7PwT/Tiap-843e17b0a15a8a0cdd30-1.jpg" , 
bawang: "https://i.ibb.co/dwBRD9T9/Bawang-61c3cb7933a64f074ecd-1.jpg" ,
biskut: "https://i.ibb.co/hRpZdBR7/Biskut-76abab4ace2c7bad8977.jpg" ,
daging: "https://i.ibb.co/s9924P2r/Daging-42fc3b365e415b039348.jpg", 
garam: "https://i.ibb.co/k6PJm65P/Garam-192ee12eb33c2ddf2399.jpg" , 
kicap: "https://i.ibb.co/nqKKgfMN/Kicap-afa67c250ef28e7c37de-1.jpg" ,
kurma: "https://i.ibb.co/7dLdVQTb/Kurma-886ef7c573a6f5a510ae-1.jpg", 
lemang: "https://i.ibb.co/BVCTL1HP/Lemang-8d47975c08f946783dd4-1.jpg", 
nasi: "https://i.ibb.co/zHHTTf0q/Nasi-81c4e6ad724545aa8068.jpg", 
roti: "https://i.ibb.co/XZgDcWnP/Roti-8ec35ce96766609e5af3.jpg", 
sarapan: "https://i.ibb.co/fGkJgZGD/Sarapan-df9487cf2c1805e01674-1.jpg" ,
benci: "https://i.ibb.co/KTD1RCY/Benci-0cc240f8b9ecd6ec0ec9.jpg" ,
cinta: "https://i.ibb.co/HLdQjnWK/Cinta-6c7e958d080b126ff423.jpg" , 
dendam: "https://i.ibb.co/C5vkdhzb/Dendam-366067bd6be7943c2d6c-1.jpg", 
kecewa: "https://i.ibb.co/8nCKkGGT/Kecewa-2e845cc0ab6a7b8ae24c.jpg", 
letih: "https://i.ibb.co/mFrv7WRj/Letih-c3f167daa801aee71591-1.jpg", 
bersemuka: "https://i.ibb.co/9H23sGNB/Bersemuka-e1d19d9efd57e173aae5.jpg",
bebel: "https://i.ibb.co/W4SygXTW/Bebel-a0e8232b9113af6a994d.jpg",
berjalan: "https://i.ibb.co/N26HRKFw/Berjalan-43024d3d67e775b3d914-2.jpg" ,
bisik: "https://i.ibb.co/3yCvFx1B/Bisik-676bd4ca2814a5252778-1.jpg",
cerita: "https://i.ibb.co/v4NwL7WS/Cerita-43dc93fee887cc37ad7d-1.jpg",
guna: "https://i.ibb.co/q347PmGN/Guna-98992022527c929b4f6b.jpg",
periksa: "https://i.ibb.co/rRLYhWNy/Periksa-bc66ab4f563b4102b35d.jpg", 
tidur: "https://i.ibb.co/hxndWm25/Tidur-cd5c71cae6ac9a187d0e-1.jpg",
berani: "https://i.ibb.co/HTHrFMFC/Berani-ddeac265ebd8fff84da1.jpg", 
biasa: "https://i.ibb.co/qM2vjwC0/Biasa-aae81c3dc30d98f610d9.jpg",
busuk: "https://i.ibb.co/SXfMYy1N/Busuk-2d535138933dd1500d40.jpg", 
cepat: "https://i.ibb.co/93b5TwhG/Cepat-I-cfd75e83f6444ee56880.jpg",
gelap: "https://i.ibb.co/CpqVDMnn/Gelap-c93ef9825014fde19188.jpg",
malas: "https://i.ibb.co/1YqsZRFb/Malas-457ce82e7a31a822ef4d.jpg", 
pelancong: "https://i.ibb.co/Kpx3tSPc/Pelancong-3d4787f77a687f235ef4-1.jpg", 
remaja: "https://i.ibb.co/2YRsvcfx/Remaja-d87fe04c744f5bd2ea1c-1.jpg",
wanita: "https://i.ibb.co/gMGcgwJr/Wanita-c9a1c55a221875cf5288.jpg",
ansuran: "https://i.ibb.co/SDcVbdrq/Ansuran-0bbc5d6c011dfb1279ca-1.jpg",
maybank: "https://i.ibb.co/ycHtnrj1/Maybank-3717c780f459dd5c7d39.jpg", 
publicbank: "https://i.ibb.co/FvhZMP3/Public-Bank-00c4bc92ccfea4184c81.jpg",
yuran: "https://i.ibb.co/JFdsKTNv/Yuran-1ae4768f6ec5ac9f8483-1.jpg",
andai: "https://i.ibb.co/jksp83Wc/Andai-f95cf360986757f0fbbe-1.jpg",
bantah: "https://i.ibb.co/Y7gmXPtY/Bantah-158057068c160097cce1-1.jpg",
menyalahkan: "https://i.ibb.co/Pbx5VXn/Menyalahkan-ae9103a98a4e8a647bc7-1.jpg",
tuduh: "https://i.ibb.co/twZSHckr/Tuduh-3154156b682ce1008f5e-1.jpg",
keputusan: "https://i.ibb.co/ZRnRKYxG/Keputusan-2d9174b433d265d32a70.jpg",
kuasa: "https://i.ibb.co/SwSbC8fW/Kuasa-933913cbfee56a639f58.jpg", 
tudud: "https://i.ibb.co/twZSHckr/Tuduh-3154156b682ce1008f5e-1.jpg",
keputusan: "https://i.ibb.co/ZRnRKYxG/Keputusan-2d9174b433d265d32a70.jpg",
kuasa: "https://i.ibb.co/SwSbC8fW/Kuasa-933913cbfee56a639f58.jpg", 
curang: "https://i.ibb.co/4ZxtvPVL/Curang-622c67c0f6420301224a.jpg",
dadah: "https://i.ibb.co/nsrwCmCk/Dadah-2f35d71217d4cab9529b.jpg",
fitnah: "https://i.ibb.co/bjCvNvzj/Fitnah-f65e6ef0dcb7e66bf9b6.jpg", 
kemalangan: "https://i.ibb.co/4g32tBWk/Kemalangan-862e3e72c86febfa2b52.jpg", 
khalwat: "https://i.ibb.co/JFr14qwf/Khalwat-7bc480963f528a968ed8.jpg",
maksiat: "https://i.ibb.co/nNDQcd21/Maksiat-60e12dec16fc14cfd7fc.jpg",
rasuah: "https://i.ibb.co/jPr15YnD/Rasuah-bdbd6974a824425f37a3.jpg", 
zina: "https://i.ibb.co/4ZqFz91N/Zina-b23b5fa21ffaec88a545.jpg",
arahan: "https://i.ibb.co/zVKJVXG0/Arahan-c5a950c4cf445d9ee225.jpg", 
cara: "https://i.ibb.co/PZ0JTT1M/Cara-a4b5073b5979196d9e88-1.jpg",
denda: "https://i.ibb.co/HLGs850V/Denda-7eb6294cbb571a3b4aa8-1.jpg",
fungsi: "https://i.ibb.co/PGfYJVsP/Fungsi-930b7565c8a981b484ba-1.jpg",
kerjasama: "https://i.ibb.co/L483ngf/Kerjasama-f0b774114c276e795803-1.jpg",
operasi: "https://i.ibb.co/dw0Q4p7j/Operasi-647eb1b7267ab7632be6.jpg", 
peribadi: "https://i.ibb.co/d4XLtjQW/Peribadi-b33e05a2684fc771ce6a.jpg", 
syarat: "https://i.ibb.co/j9V0y9qG/Syarat-20c385b99a1b0ad9dc27-1.jpg", 
usaha: "https://i.ibb.co/3mqvQ2rG/Usaha-a5e9e011576c07e3134e-1.jpg", 
tarikhluput: "https://i.ibb.co/kV8WLdvs/Tarikh-luput-4c43221cb2a78294b67a.jpg",
sakitjatung: "https://i.ibb.co/J1Cr56G/Sakit-Jantung-ec5a971bc586a4914723.jpg",
ulangtahun: "https://i.ibb.co/BVFNgyMR/Ulang-tahun-db3d48e71a116cf4581e.jpg",
orientasi: "https://i.ibb.co/3ymkGFGz/Orientasi-7bdd75feab81332ea6b5.jpg",
ketawa: "https://i.ibb.co/qX28htz/Ketawa-8933af8845e88bafac8c.jpg",
ketawa: "https://i.ibb.co/qX28htz/Ketawa-8933af8845e88bafac8c.jpg",
spekulasi: "https://i.ibb.co/fVLct5mZ/Spekulasi-dae32054e24e38bd9864.jpg",
kreatif: "https://i.ibb.co/bg9RFrxp/Kreatif-c7905e1ee2884228fbaf-1.jpg",
hidu: "https://i.ibb.co/3YWCfpY3/Hidu-8b016492a37ad3d320c9.jpg",
proses: "https://i.ibb.co/k2QR18xK/Proses-2b51cab46e487a938b5f.jpg",
amatjelas: "https://i.ibb.co/KjZ0VgFS/Amat-jelas-04c27b0e4749cbcddce2.jpg",
bernasibbaik: "https://i.ibb.co/chZ6dSXg/Bernasib-baik-7a52e468caa77b61cc7a.jpg",
buatapa:"https://i.ibb.co/mV1D32nL/Buat-apa-b9a873b18a5508cdc1a9.jpg",
cabutlari: "https://i.ibb.co/v46n7yFC/Cabut-lari-731126b919219367732.jpg",
bukarahsia: "https://i.ibb.co/XZpBD3nV/Buka-rahsia-541b6a23bc34d55ef289.jpg",
ingintahu: "https://i.ibb.co/pty8mMX/Ingin-tahu-9e7c9af06e8c52ecab85.jpg",
lepastangan: "https://i.ibb.co/Q32HBxD6/Lepas-tangan-18547cc740f6df9b39cf.jpg",
lupakansaja: "https://i.ibb.co/1Y14MZT0/Lupakan-saja-9d8f6677627dfd0dac14.jpg",
niat: "https://i.ibb.co/bgBmLBfq/Niat-a98db66e2286da582a35-1.jpg",
islam: "https://i.ibb.co/qMKhLVz9/Islam-d840c33817645784cd24-1.jpg",
bukapuasa: "https://i.ibb.co/TxPqBqPK/Buka-puasa-c1017bc39c5302ce48d5-1.jpg",
terimakasih: "https://i.ibb.co/YBPw7PrL/Terima-Kasih-85e1ad02276e860bc82b-1.jpg",
assalammulaikum: "https://i.ibb.co/NQJvWQf/Assalamualaikum-4c7b028ea9b6b25d2054-1.jpg", 
salin: "https://i.ibb.co/CKxfJCfd/Salin-1a98c6963740615e12bc.jpg",
keju: "https://i.ibb.co/TBZgmzMK/Keju-49c270459c23f1da1680-1.jpg",
buahbuahan: "https://i.ibb.co/7tYJcsbx/Buah-buahan-7e91f5c460c42d9fa386.jpg",
betik: "https://i.ibb.co/Jjmwx3X9/Betik-19c46c4aa3e8f46e62c3-1.jpg",
durian: "https://i.ibb.co/PsWw5hks/Durian-9715d720b41ee4cfe369.jpg", 
kelapa: "https://i.ibb.co/YmDRx2d/Kelapa-ed1e2e81a381044663e6-1.jpg",
pisang: "https://i.ibb.co/jvW2wrvr/Pisang-cd58d73313edadac9d76-1.jpg",
tembikai: "https://i.ibb.co/6R7YT0G4/Tembikai-2fb65d6544e3bb17004a-1.jpg",
suara: "https://i.ibb.co/39RLZRBF/Suara-69b6f9fec6d3c24e99a5-1.jpg" ,
pekak: "https://i.ibb.co/DHmL63HD/Pekak-c3279d45d4015ab00b5f.jpg",
normal: "https://i.ibb.co/LzP85fss/Normal-aa39a5930697e8b36b65-1.jpg",
cacat: "https://i.ibb.co/2Ykqff3f/Cacat-f2d2b78e533fbb9dde98-1.jpg",
badan: "https://i.ibb.co/4ZSqsWZv/Badan-87f34d5ee3cc8b2cdbed-2.jpg",
bulu: "https://i.ibb.co/G3FNQmhY/Bulu-fb1e80ce8bc300876c96-1.jpg" ,
wartawan: "https://i.ibb.co/23tdq2K9/Wartawan-8b142b96eb3b00a02e3a.jpg",
temuduga: "https://i.ibb.co/yFd6fbFC/Temuduga-387ba83c1aa7874b78ff-1.jpg",
polis: "https://i.ibb.co/67MZHCM7/Polis-3fa95d7b38ba3020ef42-1.jpg",
pelakon: "https://i.ibb.co/ccd2YVnL/Pelakon-45ef6055f24fe3c25792.jpg", 
majikan: "https://i.ibb.co/qFdQR7BM/Majikan-5e6844bb52674cda07d3-1.jpg", 
jurutera: "https://i.ibb.co/S7VMxfs4/Jurutera-336c1f318f2bd98d0a2d-1.jpg",
suhu: "https://i.ibb.co/jPc5yktK/Suhu-4fb6639d1b0796848e34-2.jpg", 
kaca: "https://i.ibb.co/SD32k3WB/Kaca-f6e099b721f61c4063a8-1.jpg" ,
timah: "https://i.ibb.co/BKqZBN6Y/Timah-24328b129e2398b029aa-1.jpg",
trak: "https://i.ibb.co/hFt9ypdy/Trak-dd58050abdd8a205f790-1.jpg",
tayar: "https://i.ibb.co/JFWhYwCs/Tayar-cb7ec6236ed68a6a53c4-1.jpg",
roket: "https://i.ibb.co/zh1zHKjN/Roket-d8e95d6e74f0feace5d1.jpg",
petrol: "https://i.ibb.co/fVD2bbzG/Petrol-6e54eadd75d45cafe998.jpg",
pengangkutan: "https://i.ibb.co/WWW38SsV/Pengangkutan-fa3d40265f9dc1004350-1.jpg",
LRT: "https://i.ibb.co/yBy0HzMR/LRT-fc790a3ba8d4a87021a5.jpg",
jambatan: "https://i.ibb.co/fGP38mvq/Jambatan-9c0a955777c49652cc29-1.jpg",
ERL: "https://i.ibb.co/wr31VvLt/ERL-f193cfe3e27871210a9f-1.jpg",
tudung: "https://i.ibb.co/SwG9zWZX/Tudung-11b1c5672322fc428532-1.jpg",
sikat: "https://i.ibb.co/Fq6Mn4Fm/Sikat-e050e294b692385aee22.jpg",
sari: "https://i.ibb.co/xK1Bg96Q/Sari-db32d813b8a184e2c5ea.jpg",
cheongsam: "https://i.ibb.co/yFyX2kcF/Cheong-Sam-bb768bb2bbea9a7d97b2.jpg",
cermin: "https://i.ibb.co/9mLsWhVW/Cermin-a011bddc13e2a2f09897.jpg",
gendang: "https://i.ibb.co/xqpkrXWt/Gendang-e07f7f9b9565c0c2aadb.jpg",
tengok: "https://i.ibb.co/2S0LmmK/Lihat-Tengok-40c6f1eb831eb4fa42c4.jpg",
assalammulaikum: "https://i.ibb.co/hxbm8Fj3/Assalamualaikum-4c7b028ea9b6b25d2054-2.jpg", // assalammulaikum
apakhabar: "https://i.ibb.co/gFgLWWXP/Apa-Khabar-ca2f881ff768dca9c036-1.jpg",// apa khabar
selamatdatang: "https://i.ibb.co/cKcMjz23/Selamat-Datang-0c6d9b3d11f04b337c29-2.jpg", // selamat datang
habislahsaya: "https://i.ibb.co/hxVFV48F/Habislah-saya-2d63d3e93988285e6700.jpg", // habislah saya 
alquran: "https://i.ibb.co/HpV9wSnz/Al-Quran-0ad7921822b517ae4be1-1.jpg",// al qurqn
ahlijawatankuasa: "https://i.ibb.co/ZzSGhkMY/Ahli-Jawatankuasa-51e52cc16404c0e46d12.jpg", // ahli jawatankuasa
agama: "https://i.ibb.co/rKRQRD0q/Agama-85a3aa0261256caabe03-1.jpg",
akadnikad: "https://i.ibb.co/ZpW78y54/Akad-nikah-258408b14c5ef3356645-1.jpg", //akad nikad
assalamulaikum: "https://i.ibb.co/HDscrkbr/Assalamualaikum-4c7b028ea9b6b25d2054-3.jpg",
malam: "https://i.ibb.co/7t9HPkmD/Malam-dae6e38ac19264808c82-1.jpg",
askar: "https://i.ibb.co/5XtB36Rb/Askar-17ecc5612c23c87ff87c.jpg" , 
letup: "https://i.ibb.co/j91rJyjM/Letup-ca905198463801ae3dc4.jpg",
agenda: "https://i.ibb.co/CKjSWW0Z/Agenda-04142735f26310d1e993.jpg",
tindakan: "https://i.ibb.co/zhc0F39q/Tindakan-f816b3b5ca787bad6274.jpg",
kepada: "https://i.ibb.co/00PPPWK/Kepada-e9e9297d86a59c0f77f0-1.jpg",
panjang: "https://i.ibb.co/NgWmYz5L/Panjang-fa1b752a62fac3f57dc2.jpg",
makna: "https://i.ibb.co/zTr0wst1/Makna-debb5e074613e66a66a1.jpg",
saat: "https://i.ibb.co/TqkNQ3Ck/Saat-bb5cb9255d278f88f049-1.jpg",
dengar: "https://i.ibb.co/mCv65wBZ/Dengar-dae950d5cdf91bcda053-1.jpg" ,
kurangpendengaran: "https://i.ibb.co/Xfxfg4KB/Kurang-pendengaran-d0b06a04394ca1977948.jpg" , // kurang pendengaran
minta: "https://i.ibb.co/1twfVWVF/Minta-d1ffa9a3cd5204e70c2f-1.jpg" , 
menang: "https://i.ibb.co/DgwMGSXc/Menang-e1d582b7d005714e6570.jpg" ,
jumpa: "https://i.ibb.co/HT7JVQjq/Jumpa-I-d54c42c9a1c8456be915.jpg",
tulis: "https://i.ibb.co/39v86t07/Tulis-45016932c60eb1923aaa-1.jpg",
baju: "https://i.ibb.co/BJ3QGkX/Baju-168a982fb0da42dcdab9-1.jpg",
tentang: "https://i.ibb.co/DH4j689b/Tentang-8b0d1e2c025970a0c134-2.jpg",
saman: "https://i.ibb.co/XfDxHTjr/Saman-d5231b0bc1ef023e2eb2-1.jpg",
cara: "https://i.ibb.co/Mk2WGNHp/Cara-a4b5073b5979196d9e88-2.jpg",
diteruskan: "https://i.ibb.co/1GTypBnp/Diteruskan-9b48fa4ea9e69c83d940.jpg",
semangat: "https://i.ibb.co/qLcF8R74/Semangat-fec0b7be19b8cd371642-1.jpg",
harirayaaidilfitri: "https://i.ibb.co/spfH0Hhp/Hari-Raya-Aidilfitri-264e4613ec02c5c69560.jpg", // hari raya aidilfitri,
pejabat:"https://i.ibb.co/Q18pYv4/Pejabat-caa1f522b27d9c31935a-1.jpg",
kerajaan: "https://i.ibb.co/xyKRLwN/Kerajaan-cca12bb5e13d3801d6da-1.jpg",
oksigen: "https://i.ibb.co/FqJ3pnRX/Oksigen-e9830b56de9733b31a3b.jpg",
diam: "https://i.ibb.co/1tW9c0js/Diam-Senyap-a3d27645c17c69848d0d.jpg",
senyap: "https://i.ibb.co/1tW9c0js/Diam-Senyap-a3d27645c17c69848d0d.jpg",
jatuh: "https://i.ibb.co/1G7FxPGn/Jatuh-c30885844df5d6888a49.jpg",
tetapi: "https://i.ibb.co/dw9FKwvm/Tetapi-2c71a5a0c3cce20ff7e8-1.jpg",
bahagia: "https://i.ibb.co/4gDx1dSq/Bahagia-Gembira-004a7c536899708bee97.jpg",
dewan: "https://i.ibb.co/b5wxFyrm/Dewan-1ff3a3fe38c16416c032-2.jpg",
hotel: "https://i.ibb.co/84N14G2F/Hotel-ff4f747da332d15828cc-2.jpg",
berak: "https://i.ibb.co/n8Q5c7fs/Berak-d0fe3829afa611b045aa.jpg",
  
};

// 3. NAVIGATION & LOGOUT (Dibaiki)
window.logKeluar = () => {
    // Memberhentikan sesi dan reload halaman ke Login
    window.location.reload(); 
};

window.tukarKeDaftar = () => { 
    document.getElementById('login-screen').style.display = 'none'; 
    document.getElementById('register-screen').style.display = 'block'; 
};

window.tukarKeLogin = () => { 
    document.getElementById('login-screen').style.display = 'block'; 
    document.getElementById('register-screen').style.display = 'none'; 
};

// 4. PROSES AUTH & ADMIN
window.prosesRegister = () => {
    const n = document.getElementById('regName').value, 
          u = document.getElementById('regUser').value.toLowerCase(), 
          p = document.getElementById('regPass').value, 
          ph = document.getElementById('regPhone').value;
    if(!n || !u || !p) return alert("Sila isi semua ruangan!");
    db.ref('users/' + u).set({ nama: n, pass: p, telefon: ph, status: "pending" })
      .then(() => { alert("Pendaftaran Berjaya! Tunggu kelulusan Admin."); tukarKeLogin(); });
};

window.prosesLogin = () => {
    const u = document.getElementById('userInput').value.toLowerCase(), 
          p = document.getElementById('passInput').value;
    // Logik Admin
    if (u === "admin" && p === "1234") return bukaAdmin();
    // Logik User
    db.ref('users/' + u).once('value', (s) => {
        const d = s.val();
        if (d && d.pass === p) {
            if (d.status === "active") { 
                document.getElementById('login-screen').style.display = 'none'; 
                document.getElementById('mainAppSection').style.display = 'block'; 
            } else alert("Akaun anda masih Pending!");
        } else alert("Username atau Password salah!");
    });
};

function bukaAdmin() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('adminSection').style.display = 'block';
    db.ref('users').on('value', (snapshot) => {
        const users = snapshot.val();
        let pT = '<table><tr><th>User</th><th>Telefon</th><th>Aksi</th></tr>', aT = pT;
        let pc = 0, ac = 0;
        for (let id in users) {
            let d = users[id], tel = d.telefon || "-", row = `<tr><td>${id}</td><td>${tel}</td>`;
            if (d.status === "pending") { pT += row + `<td><button onclick="approve('${id}')">Lulus</button></td></tr>`; pc++; }
            else { aT += row + `<td><button onclick="deactivate('${id}')">OFF</button></td></tr>`; ac++; }
        }
        document.getElementById('pendingList').innerHTML = pT + '</table>';
        document.getElementById('activeList').innerHTML = aT + '</table>';
        document.getElementById('pTitle').innerText = `⏳ Menunggu (${pc})`;
        document.getElementById('aTitle').innerText = `✅ Aktif (${ac})`;
    });
}

window.approve = (id) => db.ref('users/' + id).update({ status: "active" });
window.deactivate = (id) => db.ref('users/' + id).update({ status: "pending" });

// 5. YOUTUBE & SPEECH RECOGNITION (SEQUENTIAL DISPLAY)
document.getElementById('btnYT').onclick = () => { 
    const s = document.getElementById('youtubeSection'); 
    s.style.display = (s.style.display === "none") ? "block" : "none"; 
};

document.getElementById('btnLoad').onclick = () => {
    const url = document.getElementById('youtubeUrl').value, 
          id = url.match(/(?:v=|youtu\.be\/)([^"&?\/\s]{11})/);
    if (id) document.getElementById('player').innerHTML = `<iframe src="https://www.youtube.com/embed/${id[1]}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
};

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (Recognition) {
    const rec = new Recognition(); rec.lang = 'ms-MY'; rec.continuous = true;
    
    rec.onresult = async (e) => {
        const t = e.results[e.results.length - 1][0].transcript.toLowerCase().trim();
        document.getElementById('transcriptDisplay').innerText = `"${t}"`;
        
        const words = t.split(" ");
        // Loop setiap perkataan satu demi satu
        for (const word of words) {
            if (wordImages[word]) {
                document.getElementById('signImage').src = wordImages[word];
                document.getElementById('outputWord').innerText = word.toUpperCase();
                // Tunggu 1.2 saat sebelum tukar ke perkataan seterusnya
                await new Promise(resolve => setTimeout(resolve, 1200));
            }
        }
    };

    document.getElementById('btnStart').onclick = () => { 
        rec.start(); 
        document.getElementById('statusText').innerText = "MENDENGAR"; 
        document.getElementById('statusIndicator').classList.add('active'); 
    };
    document.getElementById('btnStop').onclick = () => { 
        rec.stop(); 
        document.getElementById('statusText').innerText = "SEDIA"; 
        document.getElementById('statusIndicator').classList.remove('active'); 
    };
}

// 6. ANIMASI RAMADHAN
setInterval(() => {
    const icon = document.createElement('div');
    icon.style.cssText = `position:fixed; top:-50px; left:${Math.random()*100}vw; animation: fall ${Math.random()*3+4}s linear forwards; pointer-events:none; z-index:9999; font-size:20px;`;
    icon.innerText = ['🌙', '⭐', '✨', '🕌'][Math.floor(Math.random()*4)];
    document.body.appendChild(icon);
    setTimeout(() => icon.remove(), 5000);
}, 2000);







