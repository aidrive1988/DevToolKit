export interface Game {
  name: string;
  description: string;
  url: string;
  icon: string; // Emoji or SVG string
  category: string;
  keywords: string;
}

export const games: Game[] = [
  // Logic & Puzzle
  { 
    name: '2048', 
    description: 'Slide tiles and merge matching numbers to reach the 2048 tile.', 
    url: '/games/2048', 
    icon: 'ph-squares-four', 
    category: 'Logic',
    keywords: '2048 puzzle logic grid slide numbers math' 
  },
  // Strategy
  { 
    name: '3D Chess', 
    description: 'Play chess against a smart AI on a premium 3D isometric board.', 
    url: '/games/chess', 
    icon: 'ph-strategy', 
    category: 'Strategy',
    keywords: 'chess strategy board game ai minimax 3d' 
  },
  // Memory & Recall
  { 
    name: 'Memory Match', 
    description: 'Classic concentration game. Flip cards to find matching pairs.', 
    url: '/games/memory-match', 
    icon: 'ph-cards', 
    category: 'Memory',
    keywords: 'memory match concentration cards remember puzzle' 
  },
  // Attention & Speed
  { 
    name: 'Reaction Time', 
    description: 'Test your visual reflexes and click speed.', 
    url: '/games/reaction-time', 
    icon: 'ph-lightning', 
    category: 'Speed',
    keywords: 'reaction time speed reflex click fast stroop' 
  },
  // Racing / Driving
  { 
    name: 'Cyber Racer', 
    description: 'Neon drift through the subnet highway. Fast-paced synthwave racing.', 
    url: '/games/cyber-racer', 
    icon: 'ph-car', 
    category: 'Speed',
    keywords: 'racing car speed drift dodge cyber neon synthwave' 
  }
];

export const groupedGames = games.reduce((acc, game) => {
  if (!acc[game.category]) {
    acc[game.category] = [];
  }
  acc[game.category].push(game);
  return acc;
}, {} as Record<string, Game[]>);

export const getGameCategoryColor = (category: string) => {
  switch (category) {
    case 'Logic': return 'var(--cat-developer)'; // #3DDC97
    case 'Memory': return 'var(--cat-productivity)'; // #E8A33D
    case 'Speed': return 'var(--cat-media)'; // #E8735A
    case 'Words': return 'var(--cat-design)'; // #D97BAE
    case 'Strategy': return 'var(--cat-encoding)'; // #5B9BD9
    default: return 'var(--accent-purple)'; // Fallback
  }
};
