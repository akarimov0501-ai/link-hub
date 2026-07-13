/**
 * ============================================
 *  LinkHub — Application Logic
 *  Components and render logic for the
 *  light-themed LinkHub profile page.
 * ============================================
 */

/* ── Component: Navbar ─────────────────────── */
function NavbarComponent() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const themeIcon = isDark ? "sun" : "moon";
    return `
        <nav class="navbar" id="navbar">
            <div class="navbar__brand">
                <div class="navbar__brand-icon">
                    <i data-lucide="link"></i>
                </div>
                <span>LinkHub</span>
            </div>
            <div class="navbar__actions">
                <button class="navbar__theme-btn" id="theme-toggle" aria-label="Toggle theme">
                    <i data-lucide="${themeIcon}"></i>
                </button>
                <button class="navbar__btn" id="share-btn" aria-label="Share">
                    <i data-lucide="share-2"></i>
                    <span>Share</span>
                </button>
                <button class="navbar__menu-btn" id="menu-btn" aria-label="Menu">
                    <i data-lucide="more-horizontal"></i>
                </button>
            </div>
        </nav>
    `;
}

/* ── Component: Avatar ─────────────────────── */
function AvatarComponent(profile) {
    const innerContent = profile.avatarUrl
        ? `<img class="avatar__img" src="${profile.avatarUrl}" alt="${profile.name}" />`
        : `<span class="avatar__initials">${profile.avatarInitials}</span>`;

    return `
        <div class="avatar" aria-label="Profil rasmi">
            <div class="avatar__ring"></div>
            <div class="avatar__inner">
                ${innerContent}
            </div>
        </div>
    `;
}

/* ── Component: Profile Header ─────────────── */
function HeaderComponent(profile) {
    return `
        <header class="header" id="profile-header">
            ${AvatarComponent(profile)}
            <h1 class="header__name">${profile.name}</h1>
            <p class="header__role">${profile.role}</p>
            <p class="header__bio">${profile.bio}</p>
        </header>
    `;
}

/* ── Component: Social Icons Row ───────────── */
function SocialIconsComponent(socialLinks) {
    const icons = socialLinks.map(link => `
        <a
            href="${link.url}"
            class="social-icon"
            id="social-${link.id}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${link.id}"
        >
            <i data-lucide="${link.icon}"></i>
        </a>
    `).join("");

    return `
        <div class="social-icons" id="social-icons">
            ${icons}
        </div>
    `;
}

/* ── Component: Link Card ──────────────────── */
function LinkCardComponent(link, index) {
    return `
        <a
            href="${link.url}"
            class="link-card"
            id="link-${link.id}"
            target="_blank"
            rel="noopener noreferrer"
            style="--card-accent: ${link.accentColor}; --card-bg: ${link.bgColor}; --card-index: ${index}"
            aria-label="${link.title} — ${link.description}"
        >
            <div class="link-card__icon-wrapper">
                <i data-lucide="${link.icon}" class="link-card__icon"></i>
            </div>
            <div class="link-card__content">
                <span class="link-card__title">${link.title}</span>
                <span class="link-card__description">${link.description}</span>
            </div>
            <div class="link-card__arrow">
                <i data-lucide="arrow-up-right" class="link-card__arrow-icon"></i>
            </div>
        </a>
    `;
}

/* ── Component: Links Section ──────────────── */
function LinksSectionComponent(links) {
    const cards = links.map((link, i) => LinkCardComponent(link, i)).join("");
    return `
        <section class="links-section" id="links-section" aria-label="Havolalar">
            ${cards}
        </section>
    `;
}

/* ── Component: Newsletter ─────────────────── */
function NewsletterComponent(newsletter) {
    return `
        <section class="newsletter" id="newsletter">
            <h2 class="newsletter__title">${newsletter.title}</h2>
            <p class="newsletter__description">${newsletter.description}</p>
            <form class="newsletter__form" id="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
                <input
                    type="email"
                    class="newsletter__input"
                    id="newsletter-email"
                    placeholder="${newsletter.placeholder}"
                    required
                    aria-label="Email address"
                />
                <button type="submit" class="newsletter__btn" id="newsletter-submit">
                    ${newsletter.buttonText}
                </button>
            </form>
        </section>
    `;
}

/* ── Component: Stats Bar ──────────────────── */
function StatsBarComponent(stats) {
    const items = stats.map((stat, i) => {
        const divider = i < stats.length - 1 ? '<div class="stat-divider"></div>' : '';
        return `
            <div class="stat-item" id="stat-${stat.id}">
                <i data-lucide="${stat.icon}" class="stat-item__icon"></i>
                <span class="stat-item__value">${stat.value}</span>
                <span class="stat-item__label">${stat.label}</span>
            </div>
            ${divider}
        `;
    }).join("");

    return `
        <div class="stats-bar" id="stats-bar">
            ${items}
        </div>
    `;
}

/* ── Component: Footer ─────────────────────── */
function FooterComponent(footer) {
    return `
        <footer class="footer" id="page-footer">
            <p class="footer__text">${footer.text}</p>
        </footer>
    `;
}

/* ── Event Handlers ────────────────────────── */
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById("newsletter-email");
    const submitBtn = document.getElementById("newsletter-submit");

    if (emailInput.value) {
        submitBtn.textContent = "Subscribed! ✓";
        submitBtn.style.background = "hsl(150, 70%, 42%)";
        emailInput.value = "";
        emailInput.disabled = true;
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = NEWSLETTER.buttonText;
            submitBtn.style.background = "";
            emailInput.disabled = false;
            submitBtn.disabled = false;
        }, 3000);
    }
}

function handleShareClick() {
    if (navigator.share) {
        navigator.share({
            title: `${PROFILE.name} — LinkHub`,
            text: PROFILE.bio,
            url: window.location.href,
        }).catch(() => {});
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => {
            const btn = document.getElementById("share-btn");
            const original = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="check"></i><span>Copied!</span>';
            if (window.lucide) lucide.createIcons({ nodes: [btn] });
            setTimeout(() => {
                btn.innerHTML = original;
                if (window.lucide) lucide.createIcons({ nodes: [btn] });
            }, 2000);
        });
    }
}

function handleThemeToggle() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        const isDark = newTheme === "dark";
        themeToggleBtn.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}"></i>`;
        if (window.lucide) {
            lucide.createIcons({ nodes: [themeToggleBtn] });
        }
    }
}

/* ── Render Application ────────────────────── */
function renderApp() {
    const app = document.getElementById("app");

    app.innerHTML = `
        ${NavbarComponent()}
        ${HeaderComponent(PROFILE)}
        ${SocialIconsComponent(PROFILE.socialLinks)}
        ${LinksSectionComponent(LINKS)}
        ${NewsletterComponent(NEWSLETTER)}
        ${StatsBarComponent(STATS)}
        ${FooterComponent(FOOTER)}
    `;

    // Initialize Lucide icons after DOM is populated
    if (window.lucide) {
        lucide.createIcons();
    }

    // Attach event listeners
    const shareBtn = document.getElementById("share-btn");
    if (shareBtn) {
        shareBtn.addEventListener("click", handleShareClick);
    }

    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", handleThemeToggle);
    }

    // Trigger staggered entrance animations
    requestAnimationFrame(() => {
        app.classList.add("app--loaded");
    });
}

/* ── Initialize ────────────────────────────── */
document.addEventListener("DOMContentLoaded", renderApp);
