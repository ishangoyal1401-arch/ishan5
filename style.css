* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --primary: #5b4cf6;
    --primary-dark: #493bd1;
    --ink: #111827;
    --muted: #667085;
    --line: #e8eaf0;
    --bg: #f7f8fc;
    --green: #12a36a;
    --red: #dc3545;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Inter, Arial, sans-serif;
    color: var(--ink);
    background: white;
    line-height: 1.5;
}

button,
input,
select,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
    border: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: min(1160px, calc(100% - 40px));
    margin: auto;
}


/* ================= HEADER ================= */

.header {
    height: 74px;
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(255,255,255,.92);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
}

.nav {
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
}

.brand {
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -.7px;

    display: flex;
    align-items: center;
    gap: 9px;
}

.brand > span:last-child span {
    color: var(--primary);
}

.brand-icon {
    width: 34px;
    height: 34px;

    border-radius: 10px;

    background: var(--primary);
    color: white;

    display: grid;
    place-items: center;
}

nav {
    display: flex;
    gap: 28px;
    margin-left: auto;
}

nav a {
    font-size: 14px;
    color: #596174;
    font-weight: 600;
}

nav a:hover {
    color: var(--primary);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.location-btn,
.login-btn {
    background: #f6f7fa;
    border: 1px solid var(--line);

    border-radius: 10px;

    padding: 9px 13px;

    color: #475467;
    font-weight: 600;
}

.login-btn {
    background: white;
    border: 0;
}

.primary-btn {
    background: var(--primary);
    color: white;

    padding: 13px 20px;

    border-radius: 11px;

    font-weight: 700;

    box-shadow: 0 8px 20px rgba(91,76,246,.2);

    transition: .2s;
}

.primary-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.primary-btn.small {
    padding: 9px 16px;
    font-size: 14px;
}

.secondary-btn {
    background: white;

    border: 1px solid #d9dce5;

    padding: 12px 18px;

    border-radius: 10px;

    font-weight: 700;

    color: #344054;
}

.menu-btn {
    display: none;
    background: none;
    font-size: 24px;
}


/* ================= MOBILE NAV ================= */

.mobile-nav {
    display: none;

    position: absolute;

    top: 74px;
    left: 0;
    right: 0;

    background: white;

    border-bottom: 1px solid var(--line);

    padding: 12px 20px;

    box-shadow: 0 15px 30px #0000000b;
}

.mobile-nav.open {
    display: block;
}

.mobile-nav a,
.mobile-nav button {
    display: block;

    width: 100%;

    text-align: left;

    padding: 12px;

    background: none;

    font-weight: 600;

    color: #475467;
}


/* ================= LOCATION MENU ================= */

.location-menu {
    display: none;

    position: fixed;

    top: 74px;
    right: 12px;

    background: white;

    border: 1px solid var(--line);

    border-radius: 12px;

    box-shadow: 0 15px 30px #0002;

    padding: 6px;

    z-index: 60;
}

.location-menu.open {
    display: block;
}

.location-menu button {
    display: block;

    background: white;

    padding: 9px 14px;

    width: 160px;

    text-align: left;

    border-radius: 8px;
}

.location-menu button:hover {
    background: #f3f2ff;
    color: var(--primary);
}


/* ================= HERO ================= */

.hero {
    position: relative;

    overflow: hidden;

    background: #f5f3ff;

    border-bottom: 1px solid #ebe8ff;
}

.hero-content {
    position: relative;

    text-align: center;

    padding: 85px 0 70px;
}

.hero-glow {
    position: absolute;

    border-radius: 50%;

    filter: blur(60px);

    opacity: .45;
}

.glow-one {
    width: 300px;
    height: 300px;

    background: #c9c1ff;

    left: -100px;
    top: 20px;
}

.glow-two {
    width: 350px;
    height: 350px;

    background: #d4f5e8;

    right: -100px;
    bottom: -100px;
}

.trust-pill {
    display: inline-block;

    background: white;

    border: 1px solid #ddd8ff;

    color: #4f46b9;

    padding: 8px 14px;

    border-radius: 99px;

    font-size: 12px;

    font-weight: 700;

    margin-bottom: 24px;
}

h1 {
    font-size: clamp(42px, 6vw, 70px);

    line-height: 1.02;

    letter-spacing: -3.5px;

    max-width: 800px;

    margin: auto;

    font-weight: 800;
}

h1 span {
    color: var(--primary);
}

.hero-content > p {
    max-width: 650px;

    margin: 24px auto 34px;

    color: #667085;

    font-size: 17px;
}


/* ================= SEARCH ================= */

.search-box {
    background: white;

    padding: 8px;

    border: 1px solid #e1e3ea;

    border-radius: 15px;

    box-shadow: 0 15px 45px #3931a018;

    display: flex;

    max-width: 900px;

    margin: auto;
}

.search-field {
    flex: 1;

    display: flex;

    align-items: center;

    gap: 11px;

    padding: 0 15px;

    color: #98a2b3;
}

.search-field input,
.search-field select {
    border: 0;

    outline: 0;

    width: 100%;

    padding: 14px 0;

    color: #344054;

    background: transparent;
}

.search-field input::placeholder {
    color: #98a2b3;
}

.location-field {
    border-left: 1px solid var(--line);
}

.search-btn {
    padding: 14px 23px;
}

.popular {
    display: flex;

    justify-content: center;

    gap: 9px;

    align-items: center;

    margin-top: 17px;

    color: #98a2b3;

    font-size: 12px;
}

.popular button {
    background: white;

    border: 1px solid #e0e2e8;

    border-radius: 99px;

    padding: 6px 10px;

    color: #667085;

    font-size: 12px;
}

.popular button:hover {
    border-color: var(--primary);
    color: var(--primary);
}


/* ================= STATS ================= */

.stats {
    border-bottom: 1px solid var(--line);
}

.stats-grid {
    display: grid;

    grid-template-columns: repeat(4,1fr);

    padding: 23px 0;
}

.stats-grid div {
    display: flex;

    flex-direction: column;

    align-items: center;

    border-right: 1px solid var(--line);
}

.stats-grid div:last-child {
    border: 0;
}

.stats-grid strong {
    font-size: 21px;
}

.stats-grid span {
    font-size: 12px;

    color: #98a2b3;

    margin-top: 2px;
}


/* ================= SECTIONS ================= */

.section {
    padding: 78px 0;
}

.section-heading {
    display: flex;

    align-items: end;

    justify-content: space-between;

    gap: 30px;

    margin-bottom: 34px;
}

.eyebrow {
    font-size: 11px;

    letter-spacing: 1.5px;

    color: var(--primary);

    font-weight: 800;

    display: block;

    margin-bottom: 9px;
}

.section h2,
.center-heading h2 {
    font-size: 32px;

    letter-spacing: -1.2px;

    line-height: 1.15;
}

.section-heading p {
    color: #98a2b3;

    font-size: 14px;

    margin-top: 7px;
}

.text-btn {
    background: none;

    color: var(--primary);

    font-weight: 700;
}


/* ================= CATEGORIES ================= */

.category-grid {
    display: grid;

    grid-template-columns: repeat(4,1fr);

    gap: 14px;
}

.category {
    padding: 23px;

    background: white;

    border: 1px solid var(--line);

    border-radius: 16px;

    transition: .2s;

    text-align: left;
}

.category:hover {
    transform: translateY(-4px);

    box-shadow: 0 14px 30px #1018280d;

    border-color: #d8d4ff;
}

.category-icon {
    width: 43px;
    height: 43px;

    background: #f0efff;

    color: var(--primary);

    border-radius: 12px;

    display: grid;

    place-items: center;

    font-size: 21px;

    margin-bottom: 16px;
}

.category h3 {
    font-size: 15px;
}

.category p {
    font-size: 12px;

    color: #98a2b3;

    margin-top: 4px;
}


/* ================= PROFESSIONALS ================= */

.pros-section {
    background: var(--bg);
}

.pros-grid {
    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 18px;
}

.pro-card {
    background: white;

    border: 1px solid var(--line);

    border-radius: 17px;

    padding: 20px;

    transition: .2s;

    display: flex;

    flex-direction: column;
}

.pro-card:hover {
    box-shadow: 0 16px 40px #1018280c;

    transform: translateY(-3px);
}

.pro-top {
    display: flex;

    gap: 12px;

    align-items: center;
}

.avatar {
    width: 52px;
    height: 52px;

    border-radius: 15px;

    background: #eceaff;

    color: #5146d8;

    display: grid;

    place-items: center;

    font-weight: 800;
}

.pro-name {
    font-size: 15px;

    font-weight: 800;
}

.verified {
    color: #1687d8;
}

.role {
    font-size: 12px;

    color: #98a2b3;
}

.rating {
    margin: 15px 0;

    color: #344054;

    font-size: 12px;
}

.rating span {
    color: #f4b400;

    font-size: 16px;
}

.badges {
    display: flex;

    gap: 6px;

    flex-wrap: wrap;

    margin-bottom: 15px;
}

.badge {
    background: #f1f8f5;

    color: #087b4c;

    border-radius: 99px;

    padding: 5px 8px;

    font-size: 10px;

    font-weight: 700;
}

.history {
    background: #f8f9fc;

    border-radius: 12px;

    padding: 12px;

    display: grid;

    grid-template-columns: repeat(3,1fr);

    text-align: center;

    margin-bottom: 15px;
}

.history strong {
    font-size: 13px;
}

.history span {
    display: block;

    color: #98a2b3;

    font-size: 9px;

    margin-top: 2px;
}

.price {
    border-top: 1px solid var(--line);

    padding-top: 13px;

    margin-top: auto;

    display: flex;

    justify-content: space-between;

    align-items: end;

    margin-bottom: 14px;
}

.price span {
    font-size: 10px;

    color: #98a2b3;
}

.price strong {
    font-size: 16px;
}

.book-btn {
    width: 100%;

    padding: 11px;

    border-radius: 10px;

    background: #f0efff;

    color: var(--primary);

    font-weight: 800;
}

.book-btn:hover {
    background: var(--primary);

    color: white;
}


/* ================= HOW ================= */

.center-heading {
    text-align: center;

    margin-bottom: 42px;
}

.steps {
    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 18px;
}

.step {
    border: 1px solid var(--line);

    border-radius: 18px;

    padding: 27px;

    background: white;

    position: relative;
}

.step-num {
    position: absolute;

    right: 20px;

    top: 18px;

    font-size: 11px;

    color: #c2c6d0;

    font-weight: 800;
}

.step-icon {
    width: 46px;
    height: 46px;

    border-radius: 13px;

    background: #f0efff;

    color: var(--primary);

    display: grid;

    place-items: center;

    font-size: 21px;

    margin-bottom: 20px;
}

.step h3 {
    font-size: 17px;

    margin-bottom: 7px;
}

.step p {
    font-size: 13px;

    color: #98a2b3;
}


/* ================= REVIEWS ================= */

.reviews-section {
    background: #fafbfc;
}

.reviews-grid {
    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 18px;
}

.review {
    background: white;

    border: 1px solid var(--line);

    padding: 23px;

    border-radius: 16px;
}

.stars {
    color: #f4b400;

    letter-spacing: 2px;

    margin-bottom: 12px;
}

.review p {
    font-size: 13px;

    color: #475467;

    line-height: 1.7;

    margin-bottom: 18px;
}

.reviewer {
    display: flex;

    align-items: center;

    gap: 9px;
}

.reviewer-avatar {
    width: 34px;
    height: 34px;

    border-radius: 50%;

    background: #e8e6ff;

    color: #5146d8;

    display: grid;

    place-items: center;

    font-size: 11px;

    font-weight: 800;
}

.reviewer strong {
    font-size: 12px;

    display: block;
}

.reviewer span {
    font-size: 10px;

    color: #98a2b3;
}


/* ================= CTA ================= */

.cta-section {
    padding: 50px 0;

    background: #17152e;

    color: white;
}

.cta {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 40px;
}

.cta .eyebrow {
    color: #aaa4ff;
}

.cta h2 {
    font-size: 32px;

    letter-spacing: -1px;
}

.cta p {
    color: #aaa7bd;

    font-size: 13px;

    margin-top: 7px;
}


/* ================= FOOTER ================= */

footer {
    background: #10101b;

    color: white;

    padding: 50px 0 20px;
}

.footer-grid {
    display: grid;

    grid-template-columns: 2fr 1fr 1fr 1fr;

    gap: 40px;
}

.footer-grid p,
.footer-grid a {
    font-size: 12px;

    color: #8d8da0;

    display: block;

    margin-top: 9px;
}

.footer-grid h4 {
    font-size: 13px;
}

.footer-grid a:hover {
    color: white;
}

.footer-bottom {
    border-top: 1px solid #272734;

    margin-top: 40px;

    padding-top: 18px;

    display: flex;

    justify-content: space-between;

    color: #676779;

    font-size: 10px;
}


/* ================= MODALS ================= */

.modal {
    position: fixed;

    inset: 0;

    background: #080914a8;

    backdrop-filter: blur(6px);

    z-index: 100;

    display: none;

    place-items: center;

    padding: 20px;
}

.modal.open {
    display: grid;
}

.modal-card {
    background: white;

    border-radius: 20px;

    width: min(460px,100%);

    padding: 30px;

    position: relative;

    box-shadow: 0 30px 80px #0004;
}

.close {
    position: absolute;

    right: 17px;

    top: 14px;

    background: #f3f4f7;

    width: 31px;

    height: 31px;

    border-radius: 50%;

    font-size: 20px;

    color: #667085;
}

.modal-card h2 {
    font-size: 25px;

    letter-spacing: -.8px;
}

.muted {
    color: #98a2b3;

    font-size: 13px;

    margin: 5px 0 18px;
}

.price-box {
    background: #f3f2ff;

    border: 1px solid #e3e0ff;

    padding: 15px;

    border-radius: 12px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin: 20px 0;
}

.price-box span {
    font-size: 11px;

    color: #667085;
}

.price-box strong {
    font-size: 20px;
}

.protection {
    display: flex;

    gap: 10px;

    margin: 15px 0;
}

.protection > div {
    background: #e9f8f1;

    color: #0b9b61;

    border-radius: 50%;

    width: 23px;
    height: 23px;

    display: grid;

    place-items: center;

    flex: none;
}

.protection p {
    font-size: 11px;

    color: #667085;
}

.protection strong {
    color: #344054;
}

.full {
    width: 100%;

    margin-top: 8px;
}

.modal-card small {
    display: block;

    text-align: center;

    color: #adb1ba;

    font-size: 9px;

    margin-top: 12px;
}

.success {
    text-align: center;
}

.success-icon {
    width: 60px;
    height: 60px;

    border-radius: 50%;

    background: #e7f8f0;

    color: #0b9b61;

    display: grid;

    place-items: center;

    font-size: 28px;

    margin: 4px auto 16px;
}

.success p {
    font-size: 13px;

    color: #667085;

    margin: 7px 0;
}

.booking-id {
    background: #f6f7f9;

    border-radius: 8px;

    padding: 8px;

    font-size: 11px !important;
}

.success .secondary-btn {
    margin-top: 12px;
}

.modal-card label {
    font-size: 12px;

    font-weight: 700;

    display: block;

    margin: 15px 0;

    color: #344054;
}

.modal-card select,
.modal-card textarea {
    display: block;

    width: 100%;

    margin-top: 6px;

    padding: 11px;

    border: 1px solid #dfe2e8;

    border-radius: 10px;

    outline: none;

    background: white;
}

.modal-card textarea {
    height: 100px;

    resize: vertical;
}

.danger-btn {
    background: var(--red);

    color: white;

    padding: 12px 18px;

    border-radius: 10px;

    font-weight: 700;
}

.red {
    color: var(--red);
}

.info-card {
    text-align: center;
}

.info-icon {
    width: 55px;
    height: 55px;

    border-radius: 15px;

    background: #f0efff;

    color: var(--primary);

    display: grid;

    place-items: center;

    font-size: 25px;

    margin: 0 auto 15px;
}

.info-card p {
    color: #667085;

    font-size: 13px;

    margin: 10px 0 20px;
}

.hidden {
    display: none !important;
}


/* ================= TOAST ================= */

.toast {
    position: fixed;

    right: 22px;

    bottom: 22px;

    background: #16151e;

    color: white;

    padding: 12px 16px;

    border-radius: 10px;

    font-size: 12px;

    z-index: 200;

    transform: translateY(20px);

    opacity: 0;

    pointer-events: none;

    transition: .25s;
}

.toast.show {
    transform: none;

    opacity: 1;
}


/* ================= RESPONSIVE ================= */

@media(max-width:850px) {

    .container {
        width: min(100% - 28px,700px);
    }

    nav,
    .login-btn,
    .nav-actions > .location-btn {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    .search-box {
        flex-direction: column;
    }

    .location-field {
        border-left: 0;

        border-top: 1px solid var(--line);
    }

    .search-btn {
        width: 100%;
    }

    .stats-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .category-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .pros-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .reviews-grid,
    .steps {
        grid-template-columns: 1fr;
    }

    .footer-grid {
        grid-template-columns: 1fr 1fr;
    }

    .cta {
        align-items: flex-start;

        flex-direction: column;
    }
}


@media(max-width:560px) {

    h1 {
        font-size: 43px;

        letter-spacing: -2px;
    }

    .hero-content {
        padding: 60px 0 50px;
    }

    .section {
        padding: 55px 0;
    }

    .section h2,
    .center-heading h2,
    .cta h2 {
        font-size: 25px;
    }

    .section-heading {
        align-items: flex-start;

        flex-direction: column;

        gap: 10px;
    }

    .category-grid,
    .pros-grid {
        grid-template-columns: 1fr;
    }

    .footer-grid {
        grid-template-columns: 1fr 1fr;
    }

    .footer-bottom {
        flex-direction: column;

        gap: 5px;
    }

    .modal-card {
        padding: 25px 20px;
    }
}
