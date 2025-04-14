"use strict"

// AOS Config
AOS.init();

// Category Swiper Config
const sliderConfig = () => {
    const swiper = new Swiper("#slide-swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 500,
        preventClicks: true,
        noSwiping: false,
        freeMode: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });
}

// Feedback Swiper Config
const feedbackSwiperConfig = () => {
    const newSwiper = new Swiper("#feedback-swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 500,
        preventClicks: true,
        noSwiping: false,
        freeMode: false,
        navigation: {
            nextEl: ".next-feedback-btn",
            prevEl: ".prev-feedback-btn"
        }
    });
}

// Requirement Variables
const homeButton = $("#home-btn"),
    barsIcon = $("#bars-icon"),
    sideBar = $(".side-bar"),
    closeIcon = $("#close-icon"),
    overlay = $("#overlay"),
    slideContainer = $(".slide-container"),
    listingCardsBox = $(".listing-cards-box"),
    blogsContainer = $(".blogs-container"),
    feedbacksContainer = $(".feedbacks-container"),
    loader = $("#loader");

// Sliders
const slides = [
    {id: 1, source: "./assets/images/Category1.png"},
    {id: 2, source: "./assets/images/Category2.png"},
    {id: 3, source: "./assets/images/Category3.png"},
    {id: 4, source: "./assets/images/Category4.png"},
    {id: 5, source: "./assets/images/Category2.png"},
];

// Create Slides & Append to DOM
const createSlider = () => {
    let slideFragment = document.createDocumentFragment();
    slides.forEach((slide) => {
        let slideElement = document.createElement("div");
        slideElement.classList.add("swiper-slide");
        slideElement.innerHTML = `<img src="${slide.source}" alt="category" class="swiper-img">`;
        slideFragment.append(slideElement);
    });
    slideContainer.append(slideFragment);
}

// Listing Cards
const listingCards = [
    {
        id: 1,
        image: "./assets/images/hotel.png",
        type: "hotel",
        score: 4.8,
        title: "water vibe resorts",
        price: 175,
        location: "washington ave. manchester, kentucky",
        phone: "91 255 267 8790",
        userImage: "./assets/images/user1.png",
        userName: "brooklyn simmons",
        date: 5
    },
    {
        id: 2,
        image: "./assets/images/food.png",
        type: "food",
        score: 4.8,
        title: "salmon and quinoa dish",
        price: 175,
        location: "washington ave. manchester, kentucky",
        phone: "91 255 267 8790",
        userImage: "./assets/images/user2.png",
        userName: "elizabeth gill",
        date: 5
    },
    {
        id: 3,
        image: "./assets/images/wedding.png",
        type: "wedding",
        score: 4.8,
        title: "creative wedding planner",
        price: 175,
        location: "washington ave. manchester, kentucky",
        phone: "91 255 267 8790",
        userImage: "./assets/images/user3.png",
        userName: "esther howard",
        date: 5
    },
    {
        id: 4,
        image: "./assets/images/business.png",
        type: "business",
        score: 4.8,
        title: "AJ corporation",
        price: 175,
        location: "washington ave. manchester, kentucky",
        phone: "91 255 267 8790",
        userImage: "./assets/images/user4.png",
        userName: "leslie alexander",
        date: 5
    },
    {
        id: 5,
        image: "./assets/images/hospital.png",
        type: "hospital",
        score: 4.8,
        title: "madison diagnostics",
        price: 175,
        location: "washington ave. manchester, kentucky",
        phone: "91 255 267 8790",
        userImage: "./assets/images/user5.png",
        userName: "wade warren",
        date: 5
    },
    {
        id: 6,
        image: "./assets/images/office.png",
        type: "office",
        score: 4.8,
        title: "smart work office",
        price: 175,
        location: "washington ave. manchester, kentucky",
        phone: "91 255 267 8790",
        userImage: "./assets/images/user6.png",
        userName: "jane cooper",
        date: 5
    },
];

// Create Listing Cards
const createListingCards = () => {
    let listingCardsFragment = document.createDocumentFragment();
    listingCards.forEach((card) => {
        let listingCard = document.createElement("div");
        listingCard.classList.add("listing-card-container");
        listingCard.insertAdjacentHTML("beforeend", `<div class="listing-img"><img src="${card.image}" alt="${card.type}"><div class="card-subject"><div class="card-type">${card.type}</div><div class="card-rating">⭐ ${card.score}</div></div></div>`);
        listingCard.insertAdjacentHTML("beforeend", `<div class="card-info"><div class="card-title-container"><h5 class="card-title">${card.title}</h5><span class="card-price">$${card.price}<sub>/day</sub></span></div><a href="#" class="card-location-container"><svg><use href="#location"></use></svg><span>${card.location}</span></a><a href="#" class="card-phone-container"><svg><use href="#phone"></use></svg><span>${card.phone}</span></a></div>`);
        listingCard.insertAdjacentHTML("beforeend", `<div class="card-owner-container"><div class="card-owner-info"><img src="${card.userImage}" alt="user"><div><span>${card.userName}</span><span>${card.date} days ago</span></div></div><a href="#" class="card-link"><svg><use href="#arrow"></use></svg></a></div>`);

        listingCardsFragment.append(listingCard);
    });
    listingCardsBox.append(listingCardsFragment);
}

// Blogs
const blogs = [
    {
        id: 1,
        cover: "./assets/images/blog-cover1.png",
        title: "30 popular business listings of this pandemic year 2021",
        description: "You’ve probably noticed there are dozens of platforms that offer business listings. Let’s look at a few of the most popular sites and ...",
        date: "24th Dec, 2021 .",
        time: 5
    },
    {
        id: 2,
        cover: "./assets/images/blog-cover2.png",
        title: "Most visited places & top rated shops from our listing",
        description: "You’ve probably noticed there are dozens of platforms that offer business listings. Let’s look at a few of the most popular sites and ...",
        date: "17th Oct, 2021 .",
        time: 5
    },
    {
        id: 3,
        cover: "./assets/images/blog-cover3.png",
        title: "Optimize your business page for national/global customers",
        description: "You’ve probably noticed there are dozens of platforms that offer business listings. Let’s look at a few of the most popular sites and ...",
        date: "24th June, 2021 .",
        time: 5
    },
];

// Create Blogs
const createBlog = () => {
    let blogFragment = document.createDocumentFragment();
    blogs.forEach((blog) => {
        let blogBox = document.createElement("div");
        blogBox.classList.add("blogs");
        blogBox.insertAdjacentHTML("beforeend", `<a href="#" target="_blank" class="blog-link"><img src="${blog.cover}" alt="blog"><div class="p-6"><h5 class="font-interBold text-spacialBlue text-xl">${blog.title}</h5><span class="text-base text-spacialGray line-clamp-3 mt-2 mb-6">${blog.description}</span><span class="text-spacialOrange text-sm font-interSemiBold">${blog.date} <span class="text-spacialGray">${blog.time} min read</span></span></div></a>`);

        blogFragment.append(blogBox);
    });
    blogsContainer.append(blogFragment);
}

// Feedbacks
const feedbacks = [
    {
        id: 1,
        description: "I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.",
        userImage: "./assets/images/new-client1.png",
        userName: "adam l. brian",
        type: "traveler"
    },
    {
        id: 2,
        description: "I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.",
        userImage: "./assets/images/new-client2.png",
        userName: "braiyan lee",
        type: "traveler"
    },
];

// Create Feedbacks & Append To DOM
const createFeedbacks = () => {
    let feedbacksFragment = document.createDocumentFragment();
    feedbacks.forEach((feedback) => {
        let feedbackBox = document.createElement("div");
        feedbackBox.className = "feedback-box swiper-slide";
        feedbackBox.insertAdjacentHTML("beforeend", `<img src="./assets/images/quote.png" alt="quote"><p class="text-base text-spacialGray my-[30px] sm:w-[514px]">${feedback.description}</p><div class="flex justify-start items-center gap-x-2"><img src="${feedback.userImage}" alt="client"><div class="flex flex-col justify-center items-start"><span class="font-interBold text-base text-spacialBlue capitalize">${feedback.userName}</span><span class="text-spacialGray text-sm capitalize">${feedback.type}</span></div></div>`);
        feedbacksFragment.append(feedbackBox);
    });
    feedbacksContainer.append(feedbacksFragment);
}

const scrollHandler = () => {
    if ($(document).scrollTop() === 0) {
        homeButton.removeClass("flex").addClass("hidden");
    } else {
        homeButton.removeClass("hidden").addClass("flex");
    }
};

const backToHomeHandler = () => {
    $(document).scrollTop(0);
};

const openSideBarHandler = () => {
    sideBar.removeClass("-left-64").addClass("left-0");
    overlay.removeClass("hidden")
}

const closeSideBarHandler = () => {
    sideBar.removeClass("left-0").addClass("-left-64");
    overlay.addClass("hidden");
};

const onLoad = () => {
    createSlider();
    sliderConfig();
    createFeedbacks();
    feedbackSwiperConfig();
    createListingCards();
    createBlog();
    loader.addClass("hidden");
}

$(onLoad);
$(document).scroll(scrollHandler);
homeButton.click(backToHomeHandler);
barsIcon.click(openSideBarHandler);
closeIcon.click(closeSideBarHandler);
overlay.click(closeSideBarHandler);