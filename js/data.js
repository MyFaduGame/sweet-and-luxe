/* ===================================
   BUSINESS CONFIGURATION & DATA
   =================================== */

// ===================================
// BUSINESS CONFIGURATION
// ===================================
const businessConfig = {
    name: "Hitesh Lalwani Chocolates",
    tagline: "Premium handcrafted chocolates and bespoke gifting",
    whatsapp: "917383345192", // Hitesh Lalwani's WhatsApp
    phone: "+91 73833 45192",
    email: "contact@hiteshlalwani.com",
    city: "India",
    country: "India",
    instagram: "", // Leave empty if not available - "https://instagram.com/yourbusiness"
    facebook: "", // Leave empty if not available

    // Pre-configured WhatsApp messages
    messages: {
        general: "Hi! I'd like to know more about your handcrafted chocolates and gifting options.",
        customGift: "Hi! I'd like to create a customised chocolate gift. Could you please help me with the available options?",
        corporate: "Hi Hitesh! I'd like to discuss a corporate gifting requirement. Please share your options for bulk and custom branded chocolate gifts.",
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
        image: "images temp/products (1).jpeg",
        message: "Hi! I'm looking for birthday chocolate gifts. Could you please share your birthday collection and customization options?"
    },
    {
        id: "wedding",
        title: "Wedding & Anniversary",
        description: "Thoughtful gifts for beautiful beginnings.",
        image: "images temp/products (5).jpeg",
        message: "Hi! I'm interested in wedding/anniversary chocolate gifts. Could you share details about your wedding collection?"
    },
    {
        id: "baby",
        title: "Baby Celebrations",
        description: "Celebrate tiny moments with something special.",
        image: "images temp/products (4).jpeg",
        message: "Hi! I'd like to know about chocolate gifts for baby showers and celebrations."
    },
    {
        id: "festive",
        title: "Festive Gifting",
        description: "Share sweetness this festive season.",
        image: "images temp/products (3).jpeg",
        message: "Hi! I'm looking for festive chocolate gifts. What options do you have for festivals?"
    },
    {
        id: "corporate",
        title: "Corporate Gifting",
        description: "Thoughtful gifts for clients, teams and partners.",
        image: "images temp/products (6).jpeg",
        message: "Hi Hitesh! I'd like to discuss corporate gifting options for bulk orders. Please share details."
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
        image: "images temp/products (1).jpeg",
        category: "bestseller"
    },
    {
        id: "truffle-box",
        name: "Assorted Truffle Box",
        description: "Rich, melt-in-your-mouth truffles in multiple flavours.",
        price: "Starting from ₹999",
        image: "images temp/products (2).jpeg",
        category: "bestseller"
    },
    {
        id: "luxury-hamper",
        name: "Luxury Celebration Hamper",
        description: "A premium gifting experience with chocolates, treats and beautiful packaging.",
        price: "Starting from ₹1,499",
        image: "images temp/products (3).jpeg",
        category: "premium"
    },
    {
        id: "personalized-box",
        name: "Personalised Chocolate Box",
        description: "Custom wrappers with names, messages or photos.",
        price: "Starting from ₹899",
        image: "images temp/products (4).jpeg",
        category: "custom"
    },
    {
        id: "wedding-favours",
        name: "Wedding Favour Box",
        description: "Beautifully packaged wedding favours for your guests.",
        price: "Starting from ₹99 per piece",
        image: "images temp/products (5).jpeg",
        category: "wedding"
    },
    {
        id: "corporate-hamper",
        name: "Corporate Gift Hamper",
        description: "Premium hampers with custom branding for corporate gifting.",
        price: "Starting from ₹1,299",
        image: "images temp/products (6).jpeg",
        category: "corporate"
    },
    {
        id: "chocolate-bouquet",
        name: "Chocolate Bouquet",
        description: "A stunning bouquet made entirely of handcrafted chocolates.",
        price: "Starting from ₹1,199",
        image: "images temp/products (7).jpeg",
        category: "special"
    },
    {
        id: "festive-hamper",
        name: "Premium Festive Hamper",
        description: "Celebrate festivals with our specially curated festive collections.",
        price: "Starting from ₹1,399",
        image: "images temp/products (1).jpeg",
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
        url: "images temp/products (1).jpeg",
        alt: "Handcrafted chocolate boxes"
    },
    {
        url: "images temp/products (2).jpeg",
        alt: "Premium chocolate truffles"
    },
    {
        url: "images temp/products (3).jpeg",
        alt: "Personalized chocolate packaging"
    },
    {
        url: "images temp/products (4).jpeg",
        alt: "Chocolate gift hamper"
    },
    {
        url: "images temp/products (5).jpeg",
        alt: "Luxury chocolate collection"
    },
    {
        url: "images temp/products (6).jpeg",
        alt: "Wedding chocolate favours"
    },
    {
        url: "images temp/products (7).jpeg",
        alt: "Festive chocolate gifts"
    },
    {
        url: "images temp/products (1).jpeg",
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
