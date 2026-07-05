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
    icon: '📄', 
    category: 'Productivity',
    keywords: 'pdf scanner camera picture image convert multiple pages scan' 
  },
  { 
    name: 'PDF Merge', 
    description: 'Combine multiple PDF files into a single document instantly', 
    url: '/tools/pdf-merge', 
    icon: '📑', 
    category: 'Productivity',
    keywords: 'pdf merge combine join multiple files documents' 
  },
  { 
    name: 'PDF Split', 
    description: 'Extract specific pages or split PDF into smaller files', 
    url: '/tools/pdf-split', 
    icon: '✂️', 
    category: 'Productivity',
    keywords: 'pdf split extract separate pages split divide' 
  },
  { 
    name: 'PDF Protect', 
    description: 'Secure your PDF files with passwords and encryption', 
    url: '/tools/pdf-protect', 
    icon: '🔒', 
    category: 'Productivity',
    keywords: 'pdf protect secure password encrypt lock security' 
  },
  { 
    name: 'PDF Unlock', 
    description: 'Remove password protection and encryption from PDF files', 
    url: '/tools/pdf-unlock', 
    icon: '🔓', 
    category: 'Productivity',
    keywords: 'pdf unlock decrypt remove password security open unprotect' 
  },

  // Developer & JSON
  { 
    name: 'JSON Formatter & Validator', 
    description: 'Format, validate, sort, and minify JSON data', 
    url: '/tools/json-formatter', 
    icon: '📋', 
    category: 'Developer',
    keywords: 'json format validate beautify minify compress' 
  },

  // Encoding
  { 
    name: 'Base64 Encoder & Decoder', 
    description: 'Encode and decode Base64 strings or files', 
    url: '/tools/base64', 
    icon: '🔐', 
    category: 'Encoding',
    keywords: 'base64 encode decode b64 text binary file' 
  },
  { 
    name: 'URL Encoder & Decoder', 
    description: 'Encode/decode URLs with parameter visualization', 
    url: '/tools/url-encoder', 
    icon: '🔗', 
    category: 'Encoding',
    keywords: 'url encode decode percent link query params' 
  },

  // Design
  { 
    name: 'Color Converter & Preview', 
    description: 'Convert colors between HEX, RGB, HSL, and OKLCH', 
    url: '/tools/color-converter', 
    icon: '🎨', 
    category: 'Design',
    keywords: 'color converter hex rgb hsl oklch palette wcag contrast' 
  },

  // Generators & Text
  { 
    name: 'Lorem Ipsum Generator', 
    description: 'Generate placeholder text using range sliders', 
    url: '/tools/lorem-ipsum', 
    icon: '📝', 
    category: 'Generators',
    keywords: 'lorem ipsum text generator dummy sentences words paragraphs' 
  },
  { 
    name: 'Word & Character Counter', 
    description: 'Count text length, word statistics, and speaking times', 
    url: '/tools/word-counter', 
    icon: '🔢', 
    category: 'Text',
    keywords: 'word counter characters paragraphs speaking density stats' 
  }
];

// Helper for Sidebar grouping
export const groupedTools = tools.reduce((acc, tool) => {
  if (!acc[tool.category]) {
    acc[tool.category] = [];
  }
  acc[tool.category].push(tool);
  return acc;
}, {} as Record<string, Tool[]>);
