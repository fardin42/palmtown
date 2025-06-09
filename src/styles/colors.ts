export const colors = {
  primaryBrown: '#4A2C19',
  accentGreen: '#6FCF97',
  secondaryBrown: '#254f4e',
  lightBackground: '#F5F5EC',
  darkText: '#FFFFFF',
  
} as const;

export type ColorKeys = keyof typeof colors;