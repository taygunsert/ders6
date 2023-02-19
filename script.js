haberRow = document.querySelector("#haberRow");

function haberYukleme() {
  haberRow.innerHTML = "";

  fetch("https://hn.algolia.com/api/v1/search?query=chatgpt")
    .then((sonuc) => sonuc.json())
    .then((veri) => {
      console.log(veri);

      let haberArray = veri.hits;

      haberArray.forEach((element) => {
        let baslik = element.title;
        let yazar = element.author;
        let haberLink = element.url;
        let yorumSayisi = element.num_comments;

        let yeniKolon = document.createElement("div");
        yeniKolon.classList.add("col-md-3");

        let haberSablonHTML = `
      <div class="card" style="width: 100%">
            <div class="card-body">
              <h5 class="card-title">${baslik}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${yazar}</h6>

              <a href="#" class="card-link">${haberLink}</a>
              Yorum: <span>${yorumSayisi}</span>
            </div>
          </div>`;

        yeniKolon.innerHTML = haberSablonHTML;
        haberRow.append(yeniKolon);
      });
    });
}

setTimeout(haberYukleme, 3000);
