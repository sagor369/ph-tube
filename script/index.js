// // alert("hello")
// // lodecetegoris
// function lodeCetegoris (){
// // fetch data

// fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//           .then((res) => res.json())
//           .then((data) => disfalyCtegoris(data.categories))
// }

// // {
// //     "category_id": "1001",
// //     "category": "Music"
// // }

// function disfalyCtegoris (categories){
//           // get tha categoris
//           const creyatCategeri = document.getElementById("creyat-categeri")
//           // lop operetion on array of object
//           for (let cat of categories){
//                     console.log(cat)
// //                     // create element
// //           const categoriDiv = document.createElement("div")
// //           categoriDiv.innerHTML= `
// //  <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
// //           `;
// //           // append the element
// //           creyatCategeri.appendChild(categoriDiv)
//           }
// }
// lodeCetegoris()

// ---------------categori fetch--------------------------
function loadeCategori() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((ras) => ras.json())
    .then((data) => disflayCategoris(data.categories));
}
// ---------------vidio fetch-----------------------------
const loadeVidios = (search = "") => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`)
    .then((responsip) => responsip.json())
    .then((data) => {
      actibeBattone();
      document.getElementById("btn-all").classList.add("actibe");
      vidioOpereton(data.videos);
    });
};
// actibe batton
function actibeBattone() {
  const actibeClass = document.getElementsByClassName("actibe");
  for (let btn of actibeClass) {
    btn.classList.remove("actibe");
  }
}
// ---------------categori and video fetch----------------------
const categoriAndVideo = (id) => {
  console.log(id);
  const url = `
  https://openapi.programming-hero.com/api/phero-tube/category/${id}
  `;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      actibeBattone();
      const clickBtn = document.getElementById(`btn-${id}`);
      console.log(clickBtn);
      clickBtn.classList.add("actibe");
      vidioOpereton(data.category);
    });
};
// -----------------------loade video titel-----------------------
const loadevideotitels = (videoId) => {
  console.log(videoId);
  const url = `
 https://openapi.programming-hero.com/api/phero-tube/video/${videoId}
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => disflayvideo(data.video));
};
const disflayvideo = (video) => {
  console.log(video);
  document.getElementById("video_title").showModal();
  const disflayvideocontayner = document.getElementById("video_conteyner");

  disflayvideocontayner.innerHTML = `
  <div class="card bg-base-100 shadow-sm">
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  <div class="card-body">
    <h2 class="card-title">
      <div class="badge badge-secondary">${video.title}</div>
    </h2>
    <p>${video.description}</>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
  `;
};

// ---------------categori function -----------------------------
function disflayCategoris(categoriese) {
  // klsjfd
  const creyatcategeri = document.getElementById("creyat-categeri");
  //  lop
  for (let cat of categoriese) {
    // console.log(cat)
    // craet element
    const categoriDiv = document.createElement("div");
    categoriDiv.innerHTML = `
     <button id="btn-${cat.category_id}" onclick="categoriAndVideo(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D]
     hover:text-white">${cat.category}</button>
                    `;
    //appendchild
    creyatcategeri.appendChild(categoriDiv);
  }
}
// -------------------------------------------------
/**
 * {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
} 
 **/
// ------------------vidio function------------------------------
const vidioOpereton = (videos) => {
  const vidioCategori = document.getElementById("vidio-categori");
  vidioCategori.innerHTML = "";
  // -----darwing----------------
  if (videos.length == 0) {
    vidioCategori.innerHTML = `
            <div class="py-5 col-span-full flex flex-col justify-center text-center items-center">
        <img class="w-28" src="./Icon.png" alt="" />
        <h1 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h1>
      </div>
            `;
  }
  videos.forEach((video) => {
    // console.log(video)
    const greyatEliment = document.createElement("div");
    greyatEliment.innerHTML = `
              <div class="card bg-base-100">
        <figure class="relative">
          <img
            class="h-50 object-cover"
            src="${video.thumbnail}"
            alt="Shoes"
          />
          <span
            class="absolute bottom-2 right-2 bg-[#2a1717] text-white p-1 rounded-sm"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 py-5">
          <!-- profil -->
          <div>
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <!-- taitle -->
           <div>
            <p class="font-bold">${video.title}</p>
            <h3 class="text-gray-500 flex gap-1">${video.authors[0].profile_name}
            ${video.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">` : ``}
            </h3>
            <h3 class="text-gray-500">${video.others.views} views</h3>
           </div>
        </div>
        <button onclick="loadevideotitels('${video.video_id}')" class="btn btn-block">show dateils</button>
      </div>
                    `;
    vidioCategori.appendChild(greyatEliment);
  });
};
// --------------------search input ------------------------
document.getElementById("search_input").addEventListener("keyup", (e) => {
  const input = e.target.value;
  console.log(input)
  loadeVidios(input)
})

loadeCategori();
loadeVidios();
