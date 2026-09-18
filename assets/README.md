# Assets Folder

This folder contains images, icons, and logo files for the website.

## Folder Structure

```
assets/
├── images/     # Product images, hero images, gallery images
├── icons/      # Custom icons (if any)
└── logo/       # Brand logo files and favicon
```

## How to Add Your Images

### Option 1: Use Local Images

1. Add your images to the appropriate folder
2. Update image paths in `js/data.js`

Example:
```javascript
image: "assets/images/my-chocolate-box.jpg"
```

### Option 2: Use CDN (Recommended)

Host images on a CDN service for better performance:
- [Cloudinary](https://cloudinary.com/)
- [ImageKit](https://imagekit.io/)
- [Imgur](https://imgur.com/)

Then use the full URL in `js/data.js`:
```javascript
image: "https://your-cdn.com/image.jpg"
```

## Image Guidelines

### Product Images
- **Format**: WebP or JPEG
- **Dimensions**: 800x800px (square, 1:1 ratio)
- **Quality**: 80-85%
- **Size**: < 200KB per image

### Hero Images
- **Format**: WebP or JPEG
- **Dimensions**: 1200x1500px (4:5 ratio)
- **Quality**: 85-90%
- **Size**: < 300KB

### Gallery Images
- **Format**: WebP or JPEG
- **Dimensions**: 800x800px (square)
- **Quality**: 80%
- **Size**: < 150KB per image

### Logo
- **Format**: SVG (preferred) or PNG
- **Dimensions**: Variable
- **Background**: Transparent (PNG)

### Favicon
- **Format**: SVG or ICO
- **Dimensions**: 32x32px minimum
- **Name**: `favicon.svg` or `favicon.ico`

## Image Optimization Tools

- [TinyPNG](https://tinypng.com/) - Compress PNG/JPEG
- [Squoosh](https://squoosh.app/) - Convert to WebP
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimize SVG

## Current Setup

Currently, the website uses high-quality images from [Unsplash](https://unsplash.com/) via CDN links in `js/data.js`.

To use your own images, simply replace the URLs with your image paths.

## Tips

- Always optimize images before uploading
- Use descriptive file names (e.g., `classic-chocolate-box.jpg`, not `IMG_1234.jpg`)
- Keep consistent aspect ratios for similar image types
- Test image loading on slow connections
- Use lazy loading for below-the-fold images (already implemented)
