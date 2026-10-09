// =====================================
// TASKMATE - WEBSITE FUNCTIONALITY
// =====================================

const professionals = [
    {
        id: 1,
        name: "Aman Sharma",
        service: "Home cleaning",
        category: "Cleaning",
        city: "Chandigarh",
        price: 499,
        rating: 4.9,
        reviews: 128,
        emoji: "🧹",
        color: "#f8e8d9",
        description: "Deep cleaning, kitchens and everyday home care."
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        service: "Plumbing expert",
        category: "Plumbing",
        city: "Rajpura",
        price: 299,
        rating: 4.8,
        reviews: 96,
        emoji: "🔧",
        color: "#e1edfc",
        description: "Leak repairs, taps, pipes and bathroom fittings."
    },
    {
        id: 3,
        name: "Priya Verma",
        service: "Beauty at home",
        category: "Beauty",
        city: "Chandigarh",
        price: 599,
        rating: 5.0,
        reviews: 84,
        emoji: "💇🏻‍♀️",
        color: "#f9e2ed",
        description: "Convenient beauty and personal care services."
    },
    {
        id: 4,
        name: "Vikram Singh",
        service: "Electrician",
        category: "Electrical",
        city: "Delhi",
        price: 349,
        rating: 4.8,
        reviews: 112,
        emoji: "⚡",
        color: "#fff0c8",
        description: "Electrical repairs, lights, fans and installations."
    },
    {
        id: 5,
        name: "Arjun Mehta",
        service: "Home repairs",
        category: "Repair",
        city: "Mumbai",
        price: 399,
        rating: 4.7,
        reviews: 76,
        emoji: "🛠️",
        color: "#e0f0e3",
        description: "Furniture fixes, shelves and everyday repairs."
    },
    {
        id: 6,
        name: "Neha Gupta",
        service: "Home cleaning",
        category: "Cleaning",
        city: "Delhi",
        price: 549,
        rating: 4.9,
        reviews: 103,
        emoji: "🧽",
        color: "#f8e8d9",
        description: "Reliable home cleaning with attention to detail."
    },
    {
        id: 7,
        name: "Sahil Bansal",
        service: "Plumbing expert",
        category: "Plumbing",
        city: "Chandigarh",
        price: 329,
        rating: 4.8,
        reviews: 67,
        emoji: "🚿",
        color: "#e1edfc",
        description: "Quick help with leaking pipes and blocked drains."
    },
    {
        id: 8,
        name: "Rohit Malhotra",
        service: "Electrician",
        category: "Electrical",
        city: "Mumbai",
        price: 399,
        rating: 4.9,
        reviews: 91,
        emoji: "💡",
        color: "#fff0c8",
        description: "Safe electrical maintenance and home installations."
    },
    {
        id: 9,
        name: "Meera Joshi",
        service: "Beauty at home",
        category: "Beauty",
        city: "Rajpura",
        price: 499,
        rating: 4.8,
        reviews: 58,
        emoji: "💆🏻‍♀️",
        color: "#f9e2ed",
        description: "Personal care services from the comfort of home."
    }
];

// Current website filters
let selectedCategory = "All";
let searchQuery = "";
let selectedProfessional = null;
let toastTimeout;

// Get HTML elements
const proGrid = document.getElementById("proGrid");
const citySelect = document.getElementById("citySelect");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");

const bookingModal = document.getElementById("bookingModal");
const bookingForm = document.getElementById("bookingForm");
const selectedProText = document.getElementById("selectedProText");
const bookingDate = document.getElementById("bookingDate");
const toast = document.getElementById("toast");

// =====================================
// RENDER PROFESSIONAL CARDS
// =====================================

function renderProfessionals() {
    const selectedCity = citySelect.value;

    const filteredProfessionals = professionals.filter(function (pro) {
        const matchesCity =
            selectedCity === "All" || pro.city === selectedCity;

        const matchesCategory =
            selectedCategory === "All" ||
            pro.category === selectedCategory;

        const searchableText = (
            pro.name + " " +
            pro.service + " " +
            pro.category + " " +
            pro.city + " " +
            pro.description
        ).toLowerCase();

        const matchesSearch = searchableText.includes(searchQuery);

        return matchesCity && matchesCategory && matchesSearch;
    });

    proGrid.innerHTML = filteredProfessionals.map(function (pro) {
        return `
            <article class="pro-card">
                <div class="pro-top">
                    <div class="pro-avatar"
                         style="background:${pro.color}">
                        ${pro.emoji}
                    </div>

                    <div class="pro-info">
                        <h3>${pro.name}</h3>
                        <p>${pro.service} · ${pro.city}</p>
                    </div>

                    <span class="verified">✓ LISTED</span>
                </div>

                <p class="pro-description">
                    ${pro.description}
                </p>

                <div class="pro-meta">
                    <div class="pro-rating">
                        <span>★</span> ${pro.rating}
                        <span style="color:#858a80;font-weight:400">
                            (${pro.reviews})
                        </span>
                    </div>

                    <div class="pro-price">
                        ₹${pro.price}
                        <small>/ starting</small>
                    </div>
                </div>

                <button
                    class="book-button"
                    data-book-id="${pro.id}">
                    Book this professional →
                </button>
            </article>
        `;
    }).join("");

    resultCount.textContent =
        filteredProfessionals.length + " professional" +
        (filteredProfessionals.length === 1 ? "" : "s");

    emptyMessage.hidden = filteredProfessionals.length !== 0;
}

// =====================================
// CATEGORY FILTERS
// =====================================

document.querySelectorAll(".category-card").forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.category;

        document.querySelectorAll(".category-card").forEach(function (card) {
            card.classList.remove("active");
        });

        button.classList.add("active");

        renderProfessionals();

        document.getElementById("professionals").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// =====================================
// SEARCH
// =====================================

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    searchQuery = searchInput.value.trim().toLowerCase();

    renderProfessionals();

    document.getElementById("professionals").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    if (searchQuery !== "" && emptyMessage.hidden) {
        showToast("Here are the matching professionals!");
    } else if (searchQuery !== "") {
        showToast("No matches found. Try another search.");
    }
});

// Update results while typing
searchInput.addEventListener("input", function () {
    searchQuery = searchInput.value.trim().toLowerCase();
    renderProfessionals();
});

// Popular search buttons
document.querySelectorAll(".popular-tag").forEach(function (button) {
    button.addEventListener("click", function () {
        const query = button.dataset.search;

        const categoryMap = {
            cleaning: "Cleaning",
            plumbing: "Plumbing",
            electrician: "Electrical"
        };

        searchInput.value = query;
        searchQuery = query;

        selectedCategory = categoryMap[query] || "All";

        document.querySelectorAll(".category-card").forEach(function (card) {
            card.classList.toggle(
                "active",
                card.dataset.category === selectedCategory
            );
        });

        renderProfessionals();

        document.getElementById("professionals").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// =====================================
// CITY FILTER
// =====================================

citySelect.addEventListener("change", function () {
    renderProfessionals();

    showToast(
        citySelect.value === "All"
            ? "Showing all cities."
            : "Showing professionals in " + citySelect.value + "."
    );
});

// Reset all filters
document.getElementById("clearFilters").addEventListener("click", function () {
    selectedCategory = "All";
    searchQuery = "";

    searchInput.value = "";
    citySelect.value = "All";

    document.querySelectorAll(".category-card").forEach(function (card) {
        card.classList.toggle(
            "active",
            card.dataset.category === "All"
        );
    });

    renderProfessionals();
    showToast("All filters cleared!");
});

// =====================================
// BOOKING MODAL
// =====================================

function openBooking(proId) {
    selectedProfessional = professionals.find(function (pro) {
        return pro.id === Number(proId);
    });

    if (!selectedProfessional) {
        showToast("Professional not found.");
        return;
    }

    selectedProText.textContent =
        selectedProfessional.name + " · " +
        selectedProfessional.service + " · Starting at ₹" +
        selectedProfessional.price;

    bookingModal.hidden = false;
    document.body.style.overflow = "hidden";

    document.getElementById("customerName").focus();
}

function closeBooking() {
    bookingModal.hidden = true;
    document.body.style.overflow = "";
    selectedProfessional = null;
}

// Event delegation: works for all rendered booking buttons
proGrid.addEventListener("click", function (event) {
    const button = event.target.closest("[data-book-id]");

    if (button) {
        openBooking(button.dataset.bookId);
    }
});

document.getElementById("closeModal").addEventListener("click", closeBooking);

bookingModal.addEventListener("click", function (event) {
    if (event.target === bookingModal) {
        closeBooking();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !bookingModal.hidden) {
        closeBooking();
    }
});

// Set today's date as the earliest booking date
function getLocalDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

bookingDate.min = getLocalDateString();

// =====================================
// SUBMIT A DEMO BOOKING
// =====================================

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!selectedProfessional) {
        showToast("Please select a professional first.");
        return;
    }

    if (!bookingForm.reportValidity()) {
        return;
    }

    const booking = {
        id: Date.now(),
        professional: selectedProfessional.name,
        service: selectedProfessional.service,
        city: selectedProfessional.city,
        customer: document.getElementById("customerName").value.trim(),
        phone: document.getElementById("customerPhone").value.trim(),
        date: bookingDate.value,
        address: document.getElementById("bookingAddress").value.trim(),
        createdAt: new Date().toISOString()
    };

    // Save demo bookings in this browser
    try {
        const existingBookings = JSON.parse(
            localStorage.getItem("taskmateBookings") || "[]"
        );

        existingBookings.push(booking);

        localStorage.setItem(
            "taskmateBookings",
            JSON.stringify(existingBookings)
        );
    } catch (error) {
        console.error("Could not save the booking:", error);
    }

    closeBooking();
    bookingForm.reset();
    bookingDate.min = getLocalDateString();

    showToast("Demo booking saved! No real booking was made.");
});

// =====================================
// MOBILE NAVIGATION
// =====================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

// =====================================
// TOAST NOTIFICATIONS
// =====================================

function showToast(message) {
    clearTimeout(toastTimeout);

    toast.textContent = message;
    toast.classList.add("show");

    toastTimeout = setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

// =====================================
// START THE WEBSITE
// =====================================

renderProfessionals();

console.log("TaskMate website loaded successfully!");
