/**
 * ============================================
 *  LinkHub — Data Layer
 *  Barcha ma'lumotlar shu yerda saqlanadi.
 * ============================================
 */

const PROFILE = {
    name: "Muhammadaziz",
    role: "UI/UX Designer & Digital Creator",
    bio: "Designing brands and digital experiences that make an impact.",
    avatarUrl: "", // Will use initials fallback
    avatarInitials: "MA",
    socialLinks: [
        { id: "instagram-social", icon: "instagram", url: "https://instagram.com/example" },
        { id: "telegram-social", icon: "send", url: "https://t.me/example" },
        { id: "youtube-social", icon: "youtube", url: "https://youtube.com/@example" },
        { id: "behance-social", icon: "pen-tool", url: "https://behance.net/example" },
        { id: "linkedin-social", icon: "linkedin", url: "https://linkedin.com/in/example" },
    ],
};

const LINKS = [
    {
        id: "portfolio",
        title: "My Portfolio",
        description: "See my latest projects and case studies",
        url: "https://example.com/portfolio",
        icon: "briefcase",
        accentColor: "hsl(252, 85%, 60%)",
        bgColor: "hsl(252, 85%, 95%)",
    },
    {
        id: "instagram",
        title: "Instagram",
        description: "Behind the scenes & daily stories",
        url: "https://instagram.com/example",
        icon: "instagram",
        accentColor: "hsl(340, 82%, 52%)",
        bgColor: "hsl(340, 82%, 95%)",
    },
    {
        id: "youtube",
        title: "YouTube Channel",
        description: "Design tutorials & tips",
        url: "https://youtube.com/@example",
        icon: "youtube",
        accentColor: "hsl(0, 85%, 55%)",
        bgColor: "hsl(0, 85%, 95%)",
    },
    {
        id: "behance",
        title: "Behance",
        description: "Creative projects on Behance",
        url: "https://behance.net/example",
        icon: "pen-tool",
        accentColor: "hsl(230, 85%, 55%)",
        bgColor: "hsl(230, 85%, 95%)",
    },
    {
        id: "store",
        title: "My Store",
        description: "Check out my digital products",
        url: "https://example.com/store",
        icon: "shopping-bag",
        accentColor: "hsl(150, 70%, 42%)",
        bgColor: "hsl(150, 70%, 93%)",
    },
    {
        id: "contact",
        title: "Contact Me",
        description: "Let's work together",
        url: "mailto:hello@example.com",
        icon: "mail",
        accentColor: "hsl(252, 85%, 60%)",
        bgColor: "hsl(252, 85%, 95%)",
    },
];

const STATS = [
    { id: "views", value: "12.4K", label: "Views", icon: "eye" },
    { id: "clicks", value: "3.2K", label: "Clicks", icon: "mouse-pointer-click" },
    { id: "subscribers", value: "1.8K", label: "Subscribers", icon: "users" },
];

const NEWSLETTER = {
    title: "Subscribe to my newsletter",
    description: "Get updates on new projects and content.",
    buttonText: "Subscribe",
    placeholder: "Enter your email",
};

const FOOTER = {
    text: `© ${new Date().getFullYear()} LinkHub`,
};
