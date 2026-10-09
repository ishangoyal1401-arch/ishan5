document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       DATA
    ========================= */

    const categories = [
        {
            name: "AC Service",
            description: "Repair, service & installation",
            icon: "❄️"
        },
        {
            name: "Home Cleaning",
            description: "Deep cleaning & regular cleaning",
            icon: "🧹"
        },
        {
            name: "Plumbing",
            description: "Leaks, pipes & fittings",
            icon: "🔧"
        },
        {
            name: "Electrical",
            description: "Repairs, wiring & installation",
            icon: "⚡"
        },
        {
            name: "Painting",
            description: "Interior & exterior painting",
            icon: "🎨"
        },
        {
            name: "Carpentry",
            description: "Furniture & woodwork",
            icon: "🪚"
        },
        {
            name: "Appliance Repair",
            description: "Repair household appliances",
            icon: "🔌"
        },
        {
            name: "Pest Control",
            description: "Safe pest treatment",
            icon: "🛡️"
        }
    ];


    const professionals = [
        {
            name: "Rahul Sharma",
            role: "AC & Appliance Expert",
            city: "Bengaluru",
            rating: "4.9",
            jobs: "328",
            experience: "7 yrs",
            price: "₹499",
            avatar: "RS",
            services: ["AC Service", "Appliance Repair"]
        },
        {
            name: "Aman Verma",
            role: "Professional Plumber",
            city: "Bengaluru",
            rating: "4.8",
            jobs: "241",
            experience: "6 yrs",
            price: "₹399",
            avatar: "AV",
            services: ["Plumbing"]
        },
        {
            name: "Vikas Kumar",
            role: "Electrician",
            city: "Bengaluru",
            rating: "4.9",
            jobs: "415",
            experience: "9 yrs",
            price: "₹349",
            avatar: "VK",
            services: ["Electrical"]
        },
        {
            name: "Rohit Singh",
            role: "Home Cleaning Expert",
            city: "Mumbai",
            rating: "4.8",
            jobs: "198",
            experience: "5 yrs",
            price: "₹599",
            avatar: "RS",
            services: ["Home Cleaning"]
        },
        {
            name: "Neeraj Gupta",
            role: "Painting Specialist",
            city: "Delhi",
            rating: "4.9",
            jobs: "276",
            experience: "8 yrs",
            price: "₹699",
            avatar: "NG",
            services: ["Painting"]
        },
        {
            name: "Arjun Mehta",
            role: "Carpentry Expert",
            city: "Chandigarh",
            rating: "4.9",
            jobs: "312",
            experience: "8 yrs",
            price: "₹499",
            avatar: "AM",
            services: ["Carpentry"]
        },
        {
            name: "Karan Malhotra",
            role: "Pest Control Expert",
            city: "Chennai",
            rating: "4.8",
            jobs: "189",
            experience: "5 yrs",
            price: "₹549",
            avatar: "KM",
            services: ["Pest Control"]
        }
    ];


    const reviews = [
        {
            text: "TaskMate made finding a reliable professional incredibly easy. The price was clear from the beginning.",
            name: "Priya",
            city: "Bengaluru",
            initials: "PS"
        },
        {
            text: "I liked being able to compare ratings and previous work before booking. No unnecessary calls.",
            name: "Rohan",
            city: "Mumbai",
            initials: "RK"
        },
        {
            text: "The protected booking system makes the whole process feel much safer.",
            name: "Ananya",
            city: "Delhi",
            initials: "AS"
        }
    ];


    /* =========================
       ELEMENTS
    ========================= */

    const categoryGrid = document.getElementById("categoryGrid");
    const prosGrid = document.getElementById("prosGrid");
    const reviewsGrid = document.getElementById("reviewsGrid");

    const searchInput = document.getElementById("searchInput");
    const findBtn = document.getElementById("findBtn");
    const citySelect = document.getElementById("citySelect");

    const currentCity = document.getElementById("currentCity");
    const prosCity = document.getElementById("prosCity");

    const resultCount = document.getElementById("resultCount");
    const emptyState = document.getElementById("emptyState");
    const clearSearch = document.getElementById("clearSearch");

    const locationBtn = document.getElementById("locationBtn");
    const locationMenu = document.getElementById("locationMenu");

    const mobileNav = document.getElementById("mobileNav");
    const menuBtn = document.getElementById("menuBtn");


    /* =========================
       TOAST
    ========================= */

    function showToast(message) {

        const toast = document.getElementById("toast");

        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("show");

        clearTimeout(window.toastTimer);

        window.toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }


    window.showToast = showToast;


    /* =========================
       RENDER CATEGORIES
    ========================= */

    function renderCategories() {

        if (!categoryGrid) return;

        categoryGrid.innerHTML = categories.map(category => `
            <button class="category" data-category="${category.name}">
                <div class="category-icon">
                    ${category.icon}
                </div>

                <h3>${category.name}</h3>

                <p>${category.description}</p>
            </button>
        `).join("");
    }


    /* =========================
       RENDER REVIEWS
    ========================= */

    function renderReviews() {

        if (!reviewsGrid) return;

        reviewsGrid.innerHTML = reviews.map(review => `
            <article class="review">

                <div class="stars">
                    ★★★★★
                </div>

                <p>
                    ${review.text}
                </p>

                <div class="reviewer">

                    <div class="reviewer-avatar">
                        ${review.initials}
                    </div>

                    <div>
                        <strong>${review.name}</strong>
                        <span>${review.city}</span>
                    </div>

                </div>

            </article>
        `).join("");
    }


    /* =========================
       RENDER PROFESSIONALS
    ========================= */

    function renderProfessionals(list) {

        if (!prosGrid) return;

        if (list.length === 0) {

            prosGrid.innerHTML = "";

            if (emptyState) {
                emptyState.classList.remove("hidden");
            }

            if (resultCount) {
                resultCount.textContent = "0 professionals";
            }

            return;
        }


        if (emptyState) {
            emptyState.classList.add("hidden");
        }


        prosGrid.innerHTML = list.map(pro => `
            <article class="pro-card">

                <div class="pro-top">

                    <div class="avatar">
                        ${pro.avatar}
                    </div>

                    <div>
                        <div class="pro-name">
                            ${pro.name}
                            <span class="verified">✓</span>
                        </div>

                        <div class="role">
                            ${pro.role}
                        </div>
                    </div>

                </div>


                <div class="rating">
                    <span>★</span>
                    <strong>${pro.rating}</strong>
                    · ${pro.jobs} jobs
                </div>


                <div class="badges">

                    <span class="badge">
                        Verified
                    </span>

                    <span class="badge">
                        Top Pro
                    </span>

                </div>


                <div class="history">

                    <div>
                        <strong>${pro.jobs}</strong>
                        <span>Jobs</span>
                    </div>

                    <div>
                        <strong>${pro.experience}</strong>
                        <span>Experience</span>
                    </div>

                    <div>
                        <strong>${pro.rating}/5</strong>
                        <span>Rating</span>
                    </div>

                </div>


                <div class="price">

                    <div>
                        <span>Starting from</span>
                        <strong>${pro.price}</strong>
                    </div>

                </div>


                <button
                    class="book-btn"
                    data-name="${pro.name}"
                    data-role="${pro.role}"
                    data-price="${pro.price}"
                >
                    Book now
                </button>

            </article>
        `).join("");


        if (resultCount) {
            resultCount.textContent =
                `${list.length} professional${list.length === 1 ? "" : "s"}`;
        }
    }


    /* =========================
       SEARCH
    ========================= */

    function searchProfessionals() {

        const query = searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

        const city = citySelect
            ? citySelect.value
            : "Bengaluru";


        const filtered = professionals.filter(pro => {

            const matchesCity =
                pro.city.toLowerCase() === city.toLowerCase();

            const matchesSearch =
                !query ||
                pro.name.toLowerCase().includes(query) ||
                pro.role.toLowerCase().includes(query) ||
                pro.services.some(service =>
                    service.toLowerCase().includes(query)
                );

            return matchesCity && matchesSearch;
        });


        if (prosCity) {
            prosCity.textContent = city;
        }

        renderProfessionals(filtered);


        if (filtered.length > 0) {
            document.getElementById("pros")
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        }
    }


    if (findBtn) {
        findBtn.addEventListener("click", searchProfessionals);
    }


    if (searchInput) {

        searchInput.addEventListener("keydown", event => {

            if (event.key === "Enter") {
                searchProfessionals();
            }

        });
    }


    /* =========================
       POPULAR SEARCHES
    ========================= */

    document.querySelectorAll("[data-search]").forEach(button => {

        button.addEventListener("click", () => {

            const search = button.dataset.search;

            if (searchInput) {
                searchInput.value = search;
            }

            searchProfessionals();

        });

    });


    /* =========================
       CATEGORY CLICK
    ========================= */

    document.addEventListener("click", event => {

        const category = event.target.closest(".category");

        if (!category) return;

        const name = category.dataset.category;

        if (searchInput) {
            searchInput.value = name;
        }

        searchProfessionals();
    });


    /* =========================
       CITY SELECT
    ========================= */

    if (citySelect) {

        citySelect.addEventListener("change", () => {

            const city = citySelect.value;

            if (currentCity) {
                currentCity.textContent = city;
            }

            if (prosCity) {
                prosCity.textContent = city;
            }

            searchProfessionals();

        });
    }


    /* =========================
       LOCATION MENU
    ========================= */

    if (locationBtn && locationMenu) {

        locationBtn.addEventListener("click", event => {

            event.stopPropagation();

            locationMenu.classList.toggle("open");

        });


        locationMenu.querySelectorAll("button").forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                const city = button.dataset.city;

                if (currentCity) {
                    currentCity.textContent = city;
                }

                if (prosCity) {
                    prosCity.textContent = city;
                }

                if (citySelect) {
                    citySelect.value = city;
                }

                locationMenu.classList.remove("open");

                searchProfessionals();

                showToast(`Location changed to ${city}`);
            });

        });


        document.addEventListener("click", () => {
            locationMenu.classList.remove("open");
        });

    }


    /* =========================
       MOBILE MENU
    ========================= */

    if (menuBtn && mobileNav) {

        menuBtn.addEventListener("click", () => {
            mobileNav.classList.toggle("open");
        });


        mobileNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                mobileNav.classList.remove("open");
            });

        });

    }


    /* =========================
       MODALS
    ========================= */

    const modals = document.querySelectorAll(".modal");


    function openModal(modal) {

        if (!modal) return;

        modal.classList.add("open");
        document.body.style.overflow = "hidden";

    }


    function closeModal(modal) {

        if (!modal) return;

        modal.classList.remove("open");
        document.body.style.overflow = "";

    }


    document.querySelectorAll("[data-close]").forEach(button => {

        button.addEventListener("click", () => {

            const modalId = button.dataset.close;

            closeModal(document.getElementById(modalId));

        });

    });


    document.querySelectorAll(".close").forEach(button => {

        button.addEventListener("click", () => {

            closeModal(button.closest(".modal"));

        });

    });


    modals.forEach(modal => {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeModal(modal);
            }

        });

    });


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            modals.forEach(modal => {
                closeModal(modal);
            });

        }

    });


    /* =========================
       BOOKING
    ========================= */

    document.addEventListener("click", event => {

        const bookButton = event.target.closest(".book-btn");

        if (!bookButton) return;


        const bookingModal =
            document.getElementById("bookingModal");


        document.getElementById("bookingName").textContent =
            bookButton.dataset.name;

        document.getElementById("bookingRole").textContent =
            bookButton.dataset.role;

        document.getElementById("bookingPrice").textContent =
            bookButton.dataset.price;


        document.getElementById("bookingContent")
            .classList.remove("hidden");

        document.getElementById("bookingSuccess")
            .classList.add("hidden");


        openModal(bookingModal);

    });


    /* =========================
       CONFIRM BOOKING
    ========================= */

    const confirmBooking =
        document.getElementById("confirmBooking");


    if (confirmBooking) {

        confirmBooking.addEventListener("click", () => {

            const name =
                document.getElementById("bookingName").textContent;


            document.getElementById("successName")
                .textContent = name;


            const bookingId =
                "TM-" +
                Math.floor(100000 + Math.random() * 900000);


            document.getElementById("bookingId")
                .textContent = bookingId;


            document.getElementById("bookingContent")
                .classList.add("hidden");

            document.getElementById("bookingSuccess")
                .classList.remove("hidden");


            showToast("Booking confirmed!");

        });

    }


    /* =========================
       DISPUTE
    ========================= */

    const openDispute =
        document.getElementById("openDispute");


    if (openDispute) {

        openDispute.addEventListener("click", () => {

            closeModal(
                document.getElementById("bookingModal")
            );

            openModal(
                document.getElementById("disputeModal")
            );

        });

    }


    const submitDispute =
        document.getElementById("submitDispute");


    if (submitDispute) {

        submitDispute.addEventListener("click", () => {

            const note =
                document.getElementById("disputeNote").value.trim();


            if (!note) {

                showToast("Please describe the issue.");

                return;
            }


            closeModal(
                document.getElementById("disputeModal")
            );


            showToast("Dispute submitted successfully.");

            document.getElementById("disputeNote").value = "";

        });

    }


    /* =========================
       LOGIN / SIGNUP / INFO
    ========================= */

    function showInfo(title, text) {

        document.getElementById("infoTitle").textContent =
            title;

        document.getElementById("infoText").textContent =
            text;

        openModal(
            document.getElementById("infoModal")
        );

    }


    const loginButtons = [
        "loginBtn",
        "mobileLogin"
    ];


    loginButtons.forEach(id => {

        const button = document.getElementById(id);

        if (button) {

            button.addEventListener("click", () => {

                showInfo(
                    "Log in",
                    "This is a demo website. Login functionality is not connected to a real account system."
                );

                mobileNav?.classList.remove("open");

            });

        }

    });


    const signupButtons = [
        "signupBtn",
        "mobileSignup"
    ];


    signupButtons.forEach(id => {

        const button = document.getElementById(id);

        if (button) {

            button.addEventListener("click", () => {

                showInfo(
                    "Sign up",
                    "This is a demo website. Account registration is not connected to a real backend."
                );

                mobileNav?.classList.remove("open");

            });

        }

    });


    /* =========================
       PROFESSIONAL SIGNUP
    ========================= */

    const proSignup =
        document.getElementById("proSignup");

    const footerPro =
        document.getElementById("footerPro");


    [proSignup, footerPro].forEach(button => {

        if (!button) return;

        button.addEventListener("click", event => {

            event.preventDefault();

            showInfo(
                "Join TaskMate",
                "Professional registration is a demo feature. In a real version, professionals would create a verified profile here."
            );

        });

    });


    /* =========================
       HELP CENTER
    ========================= */

    const helpLink =
        document.getElementById("helpLink");


    if (helpLink) {

        helpLink.addEventListener("click", event => {

            event.preventDefault();

            showInfo(
                "Help Center",
                "Welcome to TaskMate support. This demo does not have a live support team connected."
            );

        });

    }


    /* =========================
       VIEW ALL
    ========================= */

    const showAllBtn =
        document.getElementById("showAllBtn");


    if (showAllBtn) {

        showAllBtn.addEventListener("click", () => {

            if (searchInput) {
                searchInput.value = "";
            }

            searchProfessionals();

            document.getElementById("services")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        });

    }


    /* =========================
       CLEAR SEARCH
    ========================= */

    if (clearSearch) {

        clearSearch.addEventListener("click", () => {

            if (searchInput) {
                searchInput.value = "";
            }

            searchProfessionals();

        });

    }


    /* =========================
       FOOTER / BRAND SCROLL
    ========================= */

    document.querySelectorAll("a[href='#']").forEach(link => {

        link.addEventListener("click", event => {

            if (
                link.id === "footerPro" ||
                link.id === "helpLink"
            ) {
                return;
            }

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });


    /* =========================
       INITIAL LOAD
    ========================= */

    renderCategories();

    renderReviews();

    renderProfessionals(
        professionals.filter(
            pro => pro.city === "Bengaluru"
        )
    );

});
