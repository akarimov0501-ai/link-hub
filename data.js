/**
 * ============================================
 *  LinkHub Pro — Data Layer
 *  Barcha ma'lumotlar shu yerda saqlanadi.
 * ============================================
 */

const PROFILE = {
    name: "Muhammadaziz",
    role: "UI/UX Designer & Digital Creator",
    bio: "Designing brands and digital experiences that make an impact. Creating beautiful interfaces and meaningful user experiences.",
    avatarUrl: "", // Will use initials fallback
    avatarInitials: "MA",
    isVerified: true,
    isPro: true,
    status: "available", // available, busy, offline
    socialLinks: [
        { id: "instagram-social", icon: "instagram", url: "https://instagram.com/example", label: "Instagram" },
        { id: "telegram-social", icon: "send", url: "https://t.me/example", label: "Telegram" },
        { id: "youtube-social", icon: "youtube", url: "https://youtube.com/@example", label: "YouTube" },
        { id: "behance-social", icon: "pen-tool", url: "https://behance.net/example", label: "Behance" },
        { id: "linkedin-social", icon: "linkedin", url: "https://linkedin.com/in/example", label: "LinkedIn" },
        { id: "dribbble-social", icon: "dribbble", url: "https://dribbble.com/example", label: "Dribbble" },
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
        category: "work",
        isFeatured: true,
    },
    {
        id: "instagram",
        title: "Instagram",
        description: "Behind the scenes & daily stories",
        url: "https://instagram.com/example",
        icon: "instagram",
        accentColor: "hsl(340, 82%, 52%)",
        bgColor: "hsl(340, 82%, 95%)",
        category: "social",
        isFeatured: false,
    },
    {
        id: "youtube",
        title: "YouTube Channel",
        description: "Design tutorials & tips",
        url: "https://youtube.com/@example",
        icon: "youtube",
        accentColor: "hsl(0, 85%, 55%)",
        bgColor: "hsl(0, 85%, 95%)",
        category: "social",
        isFeatured: true,
    },
    {
        id: "behance",
        title: "Behance",
        description: "Creative projects on Behance",
        url: "https://behance.net/example",
        icon: "pen-tool",
        accentColor: "hsl(230, 85%, 55%)",
        bgColor: "hsl(230, 85%, 95%)",
        category: "work",
        isFeatured: false,
    },
    {
        id: "store",
        title: "My Store",
        description: "Check out my digital products",
        url: "https://example.com/store",
        icon: "shopping-bag",
        accentColor: "hsl(150, 70%, 42%)",
        bgColor: "hsl(150, 70%, 93%)",
        category: "shop",
        isFeatured: true,
    },
    {
        id: "contact",
        title: "Contact Me",
        description: "Let's work together",
        url: "mailto:hello@example.com",
        icon: "mail",
        accentColor: "hsl(252, 85%, 60%)",
        bgColor: "hsl(252, 85%, 95%)",
        category: "contact",
        isFeatured: false,
    },
    {
        id: "services",
        title: "Services",
        description: "UI/UX design & branding",
        url: "https://example.com/services",
        icon: "layers",
        accentColor: "hsl(280, 75%, 55%)",
        bgColor: "hsl(280, 75%, 95%)",
        category: "work",
        isFeatured: true,
    },
    {
        id: "blog",
        title: "Blog",
        description: "Articles about design & tech",
        url: "https://example.com/blog",
        icon: "file-text",
        accentColor: "hsl(30, 90%, 55%)",
        bgColor: "hsl(30, 90%, 95%)",
        category: "content",
        isFeatured: false,
    },
];

const STATS = [
    { id: "views", value: "12.4K", label: "Views", icon: "eye" },
    { id: "clicks", value: "3.2K", label: "Clicks", icon: "mouse-pointer-click" },
    { id: "subscribers", value: "1.8K", label: "Subscribers", icon: "users" },
];

const NEWSLETTER = {
    title: "Yangiliklarga obuna bo'ling",
    description: "Eng so'nggi loyihalar va dizayn maslahatlari.",
    buttonText: "Obuna",
    placeholder: "Email manzilingiz",
    successMessage: "Rahmat! Obuna bo'ldingiz.",
};

const FOOTER = {
    text: `© ${new Date().getFullYear()} LinkHub Pro. Designed with ❤️`,
};

// Categories for filtering
const CATEGORIES = [
    { id: "all", label: "All", icon: "grid" },
    { id: "work", label: "Work", icon: "briefcase" },
    { id: "social", label: "Social", icon: "users" },
    { id: "shop", label: "Shop", icon: "shopping-bag" },
    { id: "content", label: "Content", icon: "file-text" },
];
