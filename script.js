document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */
    const menuBtn = document.querySelector(".menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");

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
       LOCATION MENU
    ========================= */
    const locationBtn = document.querySelector(".location-btn");
    const locationMenu = document.querySelector(".location-menu");

    if (locationBtn && locationMenu) {
        locationBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            locationMenu.classList.toggle("open");
        });

        locationMenu.querySelectorAll("button").forEach(button => {
            button.addEventListener("click", () => {
                locationBtn.textContent = button.textContent;
                locationMenu.classList.remove("open");
                showToast("Location selected");
            });
        });

        document.addEventListener("click", () => {
            locationMenu.classList.remove("open");
        });
    }


    /* =========================
       TOAST MESSAGE
    ========================= */
    function showToast(message) {
        let toast = document.querySelector(".toast");

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
       MODALS
    ========================= */
    const modals = document.querySelectorAll(".modal");

    function openModal(modal) {
        if (modal) {
            modal.classList.add("open");
            document.body.style.overflow = "hidden";
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove("open");
            document.body.style.overflow = "";
        }
    }

    document.querySelectorAll(".close").forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            closeModal(modal);
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
            modals.forEach(modal => closeModal(modal));
        }
    });


    /* =========================
       BOOK / PRIMARY BUTTONS
    ========================= */
    document.querySelectorAll(".primary-btn").forEach(button => {

        button.addEventListener("click", () => {

            const target =
                button.dataset.modal ||
                button.dataset.target;

            if (target) {
                const modal = document.querySelector(target);

                if (modal) {
                    openModal(modal);
                    return;
                }
            }

            if (
                button.textContent.toLowerCase().includes("book") ||
                button.textContent.toLowerCase().includes("get started")
            ) {
                showToast("Please select a professional to continue.");
            }
        });
    });


    /* =========================
       PROFESSIONAL CARDS
    ========================= */
    document.querySelectorAll(".pro-card").forEach(card => {

        const buttons = card.querySelectorAll("button");

        buttons.forEach(button => {
            button.addEventListener("click", () => {

                const name =
                    card.querySelector(".pro-name")?.textContent.trim() ||
                    "Professional";

                showToast(`${name} selected`);

                const modal =
                    document.querySelector("#bookingModal") ||
                    document.querySelector(".booking-modal");

                if (modal) {
                    openModal(modal);

                    const modalName =
                        modal.querySelector(".pro-name");

                    if (modalName) {
                        modalName.textContent = name;
                    }
                }
            });
        });
    });


    /* =========================
       SEARCH
    ========================= */
    const searchBox = document.querySelector(".search-box");
    const searchInput =
        searchBox?.querySelector("input[type='text'], input:not([type])");

    const searchButton =
        searchBox?.querySelector(".search-btn");

    if (searchButton && searchInput) {

        searchButton.addEventListener("click", () => {

            const query = searchInput.value.trim().toLowerCase();

            if (!query) {
                showToast("Please enter a service.");
                return;
            }

            const cards = document.querySelectorAll(".pro-card");
            let found = false;

            cards.forEach(card => {

                const text = card.textContent.toLowerCase();

                if (text.includes(query)) {
                    card.style.display = "";
                    found = true;
                } else {
                    card.style.display = "none";
                }
            });

            if (found) {
                showToast("Professionals found.");
            } else {
                showToast("No professionals found.");
            }
        });

        searchInput.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                searchButton.click();
            }
        });
    }


    /* =========================
       CATEGORY BUTTONS
    ========================= */
    document.querySelectorAll(".category").forEach(category => {

        category.addEventListener("click", () => {

            const categoryName =
                category.querySelector("h3")?.textContent.trim();

            if (categoryName) {
                showToast(`${categoryName} selected`);

                if (searchInput) {
                    searchInput.value = categoryName;
                    searchButton?.click();
                }
            }
        });
    });


    /* =========================
       FORM SUBMISSION
    ========================= */
    document.querySelectorAll("form").forEach(form => {

        form.addEventListener("submit", event => {

            event.preventDefault();

            showToast("Your request has been submitted.");

            const modal = form.closest(".modal");

            if (modal) {
                setTimeout(() => {
                    closeModal(modal);
                }, 1000);
            }

            form.reset();
        });
    });


    /* =========================
       SMOOTH SCROLL
    ========================= */
    document.querySelectorAll("a[href^='#']").forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});
