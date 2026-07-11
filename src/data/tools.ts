export interface Tool {
  name: string;
  description: string;
  url: string;
  icon: string; // Emoji or SVG string
  category: string;
  keywords: string;
}

export const tools: Tool[] = [
  // Productivity (PDFs)
  { 
    name: 'PDF Scanner', 
    description: 'Scan documents with camera or generate from images', 
    url: '/tools/pdf-scanner', 
    icon: 'ph-camera', 
    category: 'Productivity',
    keywords: 'pdf scanner camera picture image convert multiple pages scan' 
  },
  { 
    name: 'PDF Merge', 
    description: 'Combine multiple PDF files into a single document instantly', 
    url: '/tools/pdf-merge', 
    icon: 'ph-stack', 
    category: 'Productivity',
    keywords: 'pdf merge combine join multiple files documents' 
  },
  { 
    name: 'PDF Split', 
    description: 'Extract specific pages or split PDF into smaller files', 
    url: '/tools/pdf-split', 
    icon: 'ph-scissors', 
    category: 'Productivity',
    keywords: 'pdf split extract separate pages split divide' 
  },
  { 
    name: 'PDF Protect', 
    description: 'Secure your PDF files with passwords and encryption', 
    url: '/tools/pdf-protect', 
    icon: 'ph-lock-key', 
    category: 'Productivity',
    keywords: 'pdf protect secure password encrypt lock security' 
  },
  { 
    name: 'PDF Unlock', 
    description: 'Remove password protection and encryption from PDF files', 
    url: '/tools/pdf-unlock', 
    icon: 'ph-lock-open', 
    category: 'Productivity',
    keywords: 'pdf unlock decrypt remove password security open unprotect' 
  },

  // Developer & JSON
  { 
    name: 'JSON Formatter & Validator', 
    description: 'Format, validate, sort, and minify JSON data', 
    url: '/tools/json-formatter', 
    icon: 'ph-brackets-curly', 
    category: 'Developer',
    keywords: 'json format validate beautify minify compress' 
  },

  // Encoding
  { 
    name: 'Base64 Encoder & Decoder', 
    description: 'Encode and decode Base64 strings or files', 
    url: '/tools/base64', 
    icon: 'ph-file-code', 
    category: 'Encoding',
    keywords: 'base64 encode decode b64 text binary file' 
  },
  { 
    name: 'URL Encoder & Decoder', 
    description: 'Encode/decode URLs with parameter visualization', 
    url: '/tools/url-encoder', 
    icon: 'ph-link', 
    category: 'Encoding',
    keywords: 'url encode decode percent link query params' 
  },

  // Design
  { name: 'Color Converter & Preview', description: 'Convert colors between HEX, RGB, HSL, and OKLCH formats with WCAG contrast ratio analysis.', url: '/tools/color-converter', icon: 'ph-palette', category: 'Design', keywords: 'color hex rgb hsl palette convert wcag contrast' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text using range sliders.', url: '/tools/lorem-ipsum', icon: 'ph-text-align-left', category: 'Generators', keywords: 'lorem ipsum text generator placeholder words paragraphs' },
  { name: 'Word & Character Counter', description: 'Count words, characters, reading times, speaking times, and keyword density.', url: '/tools/word-counter', icon: 'ph-text-t', category: 'Text', keywords: 'word counter characters reading speaking time density' },
  { name: 'Hash Generator', description: 'Generate secure cryptographic hashes (MD5, SHA-1, SHA-256, SHA-512) instantly from text or files.', url: '/tools/hash-generator', icon: 'ph-hash', category: 'Text', keywords: 'hash md5 sha1 sha256 sha512 generator crypto secure' },
  { name: 'JWT Decoder', description: 'Decode JSON Web Tokens (JWT) safely and instantly. Inspect header, payload, and signature.', url: '/tools/jwt-decoder', icon: 'ph-key', category: 'Text', keywords: 'jwt json web token decode payload signature header' },
  { name: 'Markdown to HTML', description: 'Convert Markdown to HTML instantly with live rendering preview. Export the generated HTML.', url: '/tools/markdown-to-html', icon: 'ph-markdown-logo', category: 'Text', keywords: 'markdown html convert live preview render export' },
  { name: 'JSON ↔ CSV Converter', description: 'Convert JSON arrays to CSV format and vice versa. Instantly map data structures.', url: '/tools/json-csv', icon: 'ph-table', category: 'Developer', keywords: 'json csv convert format spreadsheet data' },
  { name: 'JSON/YAML/XML Converter', description: 'Convert data formats interchangeably between JSON, YAML, and XML.', url: '/tools/json-yaml-xml', icon: 'ph-arrows-left-right', category: 'Developer', keywords: 'json yaml xml convert format data' },
  { name: 'JSON to TS Converter', description: 'Instantly generate TypeScript interfaces from JSON data structures.', url: '/tools/json-to-ts', icon: 'ph-code', category: 'Developer', keywords: 'json ts typescript interface types generate convert' },
  { name: 'Diff Checker', description: 'Instantly compare two texts and highlight the differences. 100% client-side.', url: '/tools/diff-checker', icon: 'ph-git-diff', category: 'Text', keywords: 'diff checker text compare difference changes' },
  { name: 'QR Code Generator', description: 'Generate high-resolution QR codes instantly. Customize colors, sizes, and error correction levels completely client-side.', url: '/tools/qrcode-generator', icon: 'ph-qr-code', category: 'Generators', keywords: 'qr code generator barcode 2d link url' },
  { name: 'UUID / ULID Generator', description: 'Generate bulk Universal Unique Identifiers (UUIDv4) and ULIDs instantly.', url: '/tools/uuid-generator', icon: 'ph-identification-card', category: 'Generators', keywords: 'uuid ulid guid id unique generator identifier' },
  
  // Media
  { name: 'Image Format Converter', description: 'Convert images between formats (PNG, JPG, WebP) instantly directly in your browser.', url: '/tools/image-converter', icon: 'ph-image', category: 'Media', keywords: 'image format convert png jpg jpeg webp picture' },
  { name: 'Image Compressor', description: 'Compress and resize images directly in your browser. Reduce file size instantly.', url: '/tools/image-compressor', icon: 'ph-arrows-in', category: 'Media', keywords: 'image compress resize reduce size picture webp jpeg' },
  { name: 'Background Remover', description: 'Remove image backgrounds instantly using client-side AI. Model runs locally.', url: '/tools/background-remover', icon: 'ph-magic-wand', category: 'Media', keywords: 'image background remove transparent ai client side cut out' },
  { name: 'Video to GIF Converter', description: 'Convert local videos into animated GIFs entirely in your browser using FFmpeg WebAssembly.', url: '/tools/video-to-gif', icon: 'ph-film-strip', category: 'Media', keywords: 'video gif convert animation mp4 ffmpeg' }
];

// Helper for Sidebar grouping
export const groupedTools = tools.reduce((acc, tool) => {
  if (!acc[tool.category]) {
    acc[tool.category] = [];
  }
  acc[tool.category].push(tool);
  return acc;
}, {} as Record<string, Tool[]>);

export const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Productivity': return 'var(--cat-productivity)';
    case 'Developer': return 'var(--cat-developer)';
    case 'Encoding': return 'var(--cat-encoding)';
    case 'Design': return 'var(--cat-design)';
    case 'Generators': return 'var(--cat-generators)';
    case 'Media': return 'var(--cat-media)';
    default: return 'var(--cat-developer)'; // Fallback
  }
};
