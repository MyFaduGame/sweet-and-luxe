/* ===================================
   WHATSAPP INTEGRATION
   =================================== */

/**
 * Opens WhatsApp with pre-filled message
 * @param {string} message - The pre-filled message to send
 */
function openWhatsApp(message) {
    const number = businessConfig.whatsapp;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${number}?text=${encodedMessage}`;

    window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Generates a product-specific WhatsApp message
 * @param {string} productName - Name of the product
 * @returns {string} - Formatted WhatsApp message
 */
function generateProductMessage(productName) {
    return `Hi! I'm interested in the ${productName}. Could you please share the details, pricing and customization options?`;
}

/**
 * Generates a collection-specific WhatsApp message
 * @param {string} collectionName - Name of the collection
 * @returns {string} - Formatted WhatsApp message
 */
function generateCollectionMessage(collectionMessage) {
    return collectionMessage;
}

/**
 * Generates an occasion-specific WhatsApp message
 * @param {string} occasionName - Name of the occasion
 * @returns {string} - Formatted WhatsApp message
 */
function generateOccasionMessage(occasionName) {
    return `Hi! I'm looking for chocolate gifts for ${occasionName}. Could you please share your available options?`;
}
