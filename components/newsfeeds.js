import React from 'react'


function Newsfeeds() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide relative carousel-dark" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full text-center">
      <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
       NEWS FEED 1
      </p>
      <div class="mt-12 mb-6 flex justify-center">
        <img
          src="../assests/btc.png"
          class="rounded-full w-24 h-24 shadow-lg"
          alt="smaple image"
        />
      </div>
      <p class="text-gray-500">- News Source 1</p>
    </div>
    <div class="carousel-item relative float-left w-full text-center">
      <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
        "NEWS FEED 2"
      </p>
      <div class="mt-12 mb-6 flex justify-center">
        <img
          src=""
          class="rounded-full w-24 h-24 shadow-lg"
          alt="smaple image"
        />
      </div>
      <p class="text-gray-500">- News Source 2</p>
    </div>
    <div class="carousel-item relative float-left w-full text-center">
      <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
        "NEWS FEED 3"
      </p>
      <div class="mt-12 mb-6 flex justify-center">
        <img
          src=""
          class="rounded-full w-24 h-24 shadow-lg"
          alt="smaple image"
        />
      </div>
      <p class="text-gray-500">- News Source 3</p>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    </div>
  )
}

export default Newsfeeds