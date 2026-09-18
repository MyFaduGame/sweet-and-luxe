/* ===================================
   BUSINESS CONFIGURATION & DATA
   =================================== */

// ===================================
// BUSINESS CONFIGURATION
// ===================================
const businessConfig = {
    name: "Sweet Moments",
    tagline: "Handcrafted chocolates for life's sweetest moments",
    whatsapp: "919876543210", // UPDATE THIS - Format: CountryCode + Number (no spaces, +, or -)
    phone: "+91 98765 43210",
    email: "hello@sweetmoments.com",
    city: "Mumbai",
    country: "India",
    instagram: "", // Leave empty if not available - "https://instagram.com/yourbusiness"
    facebook: "", // Leave empty if not available

    // Pre-configured WhatsApp messages
    messages: {
        general: "Hi! I'd like to know more about your handcrafted chocolates and gifting options.",
        customGift: "Hi! I'd like to create a customised chocolate gift. Could you please help me with the available options?",
        corporate: "Hi! I'd like to discuss a corporate gifting requirement. Please share your options for bulk and custom branded chocolate gifts.",
    }
};

// ===================================
// ANNOUNCEMENT BAR
// ===================================
const announcement = "Handcrafted with Love • Custom Gifting Available • Pan-India Delivery";

// ===================================
// TRUST POINTS
// ===================================
const trustPoints = [
    {
        icon: "heart-handshake",
        title: "Handcrafted With Care",
        description: "Every piece made by hand"
    },
    {
        icon: "gem",
        title: "Premium Ingredients",
        description: "Only the finest quality"
    },
    {
        icon: "sparkles",
        title: "Customised Gifting",
        description: "Personalised for you"
    },
    {
        icon: "truck",
        title: "Pan-India Delivery",
        description: "We deliver across India"
    },
    {
        icon: "calendar-heart",
        title: "Every Occasion",
        description: "Perfect for all celebrations"
    }
];

// ===================================
// COLLECTIONS
// ===================================
const collections = [
    {
        id: "birthday",
        title: "Birthday Gifting",
        description: "Make their day a little sweeter.",
        image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80",
        message: "Hi! I'm looking for birthday chocolate gifts. Could you please share your birthday collection and customization options?"
    },
    {
        id: "wedding",
        title: "Wedding & Anniversary",
        description: "Thoughtful gifts for beautiful beginnings.",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
        message: "Hi! I'm interested in wedding/anniversary chocolate gifts. Could you share details about your wedding collection?"
    },
    {
        id: "baby",
        title: "Baby Celebrations",
        description: "Celebrate tiny moments with something special.",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80",
        message: "Hi! I'd like to know about chocolate gifts for baby showers and celebrations."
    },
    {
        id: "festive",
        title: "Festive Gifting",
        description: "Share sweetness this festive season.",
        image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&q=80",
        message: "Hi! I'm looking for festive chocolate gifts. What options do you have for festivals?"
    },
    {
        id: "corporate",
        title: "Corporate Gifting",
        description: "Thoughtful gifts for clients, teams and partners.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
        message: "Hi! I'd like to discuss corporate gifting options for bulk orders. Please share details."
    }
];

// ===================================
// PRODUCTS
// ===================================
const products = [
    {
        id: "classic-box",
        name: "Classic Chocolate Box",
        description: "A curated assortment of handcrafted chocolates in elegant packaging.",
        price: "Starting from ₹799",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&q=80",
        category: "bestseller"
    },
    {
        id: "truffle-box",
        name: "Assorted Truffle Box",
        description: "Rich, melt-in-your-mouth truffles in multiple flavours.",
        price: "Starting from ₹999",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4cff2b99?w=500&q=80",
        category: "bestseller"
    },
    {
        id: "luxury-hamper",
        name: "Luxury Celebration Hamper",
        description: "A premium gifting experience with chocolates, treats and beautiful packaging.",
        price: "Starting from ₹1,499",
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80",
        category: "premium"
    },
    {
        id: "personalized-box",
        name: "Personalised Chocolate Box",
        description: "Custom wrappers with names, messages or photos.",
        price: "Starting from ₹899",
        image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=500&q=80",
        category: "custom"
    },
    {
        id: "wedding-favours",
        name: "Wedding Favour Box",
        description: "Beautifully packaged wedding favours for your guests.",
        price: "Starting from ₹99 per piece",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80",
        category: "wedding"
    },
    {
        id: "corporate-hamper",
        name: "Corporate Gift Hamper",
        description: "Premium hampers with custom branding for corporate gifting.",
        price: "Starting from ₹1,299",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4cff2b99?w=500&q=80",
        category: "corporate"
    },
    {
        id: "chocolate-bouquet",
        name: "Chocolate Bouquet",
        description: "A stunning bouquet made entirely of handcrafted chocolates.",
        price: "Starting from ₹1,199",
        image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=500&q=80",
        category: "special"
    },
    {
        id: "festive-hamper",
        name: "Premium Festive Hamper",
        description: "Celebrate festivals with our specially curated festive collections.",
        price: "Starting from ₹1,399",
        image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=500&q=80",
        category: "festive"
    }
];

// ===================================
// OCCASIONS
// ===================================
const occasions = [
    { icon: "cake", name: "Birthdays" },
    { icon: "heart", name: "Weddings" },
    { icon: "calendar-heart", name: "Anniversaries" },
    { icon: "baby", name: "Baby Showers" },
    { icon: "gift", name: "Baby Announcements" },
    { icon: "home", name: "Housewarming" },
    { icon: "heart", name: "Valentine's Day" },
    { icon: "flower", name: "Mother's Day" },
    { icon: "award", name: "Father's Day" },
    { icon: "sparkles", name: "Diwali" },
    { icon: "gift", name: "Rakhi" },
    { icon: "tree-pine", name: "Christmas" },
    { icon: "briefcase", name: "Corporate Events" }
];

// ===================================
// TESTIMONIALS
// ===================================
const testimonials = [
    {
        id: 1,
        text: "The chocolates were absolutely divine! The custom packaging with our wedding theme was perfect. All our guests loved them.",
        author: "Happy Customer",
        occasion: "Wedding Favours"
    },
    {
        id: 2,
        text: "Beautiful presentation and delicious chocolates. The personalised messages made it extra special for our corporate clients.",
        author: "Satisfied Client",
        occasion: "Corporate Gifting"
    },
    {
        id: 3,
        text: "Ordered a custom chocolate box for my mother's birthday. She was absolutely delighted! The quality and taste were exceptional.",
        author: "Delighted Customer",
        occasion: "Birthday Gift"
    },
    {
        id: 4,
        text: "The team was incredibly helpful in customising our bulk order. Fast delivery and excellent quality. Highly recommend!",
        author: "Happy Customer",
        occasion: "Festival Gifting"
    }
];

// ===================================
// GALLERY IMAGES
// ===================================
const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&q=80",
        alt: "Handcrafted chocolate boxes"
    },
    {
        url: "https://images.unsplash.com/photo-1606312619070-d48b4cff2b99?w=500&q=80",
        alt: "Premium chocolate truffles"
    },
    {
        url: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=500&q=80",
        alt: "Personalized chocolate packaging"
    },
    {
        url: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=500&q=80",
        alt: "Chocolate gift hamper"
    },
    {
        url: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80",
        alt: "Luxury chocolate collection"
    },
    {
        url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80",
        alt: "Wedding chocolate favours"
    },
    {
        url: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=500&q=80",
        alt: "Festive chocolate gifts"
    },
    {
        url: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&q=80",
        alt: "Birthday chocolate box"
    }
];

// ===================================
// FAQ
// ===================================
const faqs = [
    {
        question: "Do you offer customised chocolate gifts?",
        answer: "Yes! We specialise in customisation. You can personalise flavours, packaging, wrappers, add names, messages, logos, choose colours and themes. Contact us on WhatsApp to discuss your requirements."
    },
    {
        question: "Can I add names or messages to the chocolates?",
        answer: "Absolutely! We can print names, messages, or even photos on chocolate wrappers and packaging. This makes your gift truly unique and personal."
    },
    {
        question: "Do you accept bulk orders?",
        answer: "Yes, we handle bulk orders for weddings, corporate events, festivals and any large celebrations. We offer special pricing for bulk quantities."
    },
    {
        question: "Do you provide corporate gifting services?",
        answer: "Yes! We specialise in corporate gifting with custom branding, logo printing and professional packaging. Perfect for client gifts, employee appreciation and corporate events."
    },
    {
        question: "Do you deliver across India?",
        answer: "Yes, we provide pan-India delivery. Delivery time and charges vary based on location. Contact us with your delivery pin code for specific details."
    },
    {
        question: "How do I place an order?",
        answer: "Simply click any 'Order on WhatsApp' button on our website, or use the floating WhatsApp icon. Share your requirements and we'll guide you through the entire process."
    },
    {
        question: "How early should I place a bulk or custom order?",
        answer: "For bulk orders (100+ pieces) or heavily customised gifts, we recommend ordering at least 2-3 weeks in advance. For smaller orders, 5-7 days is usually sufficient."
    },
    {
        question: "Can I request a specific theme or packaging?",
        answer: "Yes! Whether it's a wedding theme, corporate branding, or a specific colour scheme, we can customise the packaging to match your requirements perfectly."
    }
];
