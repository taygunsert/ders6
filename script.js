let prObje = new Promise((basarili, basarisiz) => {
  //..... zaman alan işlemler burada kodlanır
  for (let i = 0; i < 100000; i++) {
    console.log(i);
  }

  basarili("97346");
});

prObje.then((deger) => {
  console.log("SMS gönderimi tamamlandı. " + deger + " adet SMS başarılı şekilde gönderildi.");
});

prObje.catch((hata) => {
  console.log(hata);
});

//Promiseler içerisinde süre alan kodlar barındırır. İşlemler tamamlanınca negatrif veya pozitif bir sonuc döndürürler..

//Programcılar, promiseleri dinleyerek, promiseler işini bitirince farklı işlemler yaptırmak üzere kodlarını yazabilir...
