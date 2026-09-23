/**
 * Presets and rich graphic assets for Rose (ગુલાબ) and Deepak (દીપક)
 */

export interface PresetImageOption {
  id: string;
  title: string;
  type: 'svg' | 'url';
  src?: string;
  svgName?: 'rose-classic' | 'rose-dewy' | 'rose-golden' | 'deepak-brass' | 'deepak-radiant' | 'deepak-clay';
}

export const ROSE_PRESETS: PresetImageOption[] = [
  {
    id: 'rose-classic',
    title: 'તાજું લાલ ગુલાબ (Classic Red)',
    type: 'svg',
    svgName: 'rose-classic',
  },
  {
    id: 'rose-dewy',
    title: 'ઝાકળ બિંદુવાળું ગુલાબ (Dewy Velvet)',
    type: 'svg',
    svgName: 'rose-dewy',
  },
  {
    id: 'rose-golden',
    title: 'સોનેરી પ્રકાશ ગુલાબ (Sunlit Bloom)',
    type: 'svg',
    svgName: 'rose-golden',
  },
];

export const DEEPAK_PRESETS: PresetImageOption[] = [
  {
    id: 'deepak-brass',
    title: 'મંગલ પિત્તળનો દીપક (Traditional Brass)',
    type: 'svg',
    svgName: 'deepak-brass',
  },
  {
    id: 'deepak-radiant',
    title: 'અખંડ જ્યોતિ દીપક (Radiant Flame)',
    type: 'svg',
    svgName: 'deepak-radiant',
  },
  {
    id: 'deepak-clay',
    title: 'ફૂલો સહિત પવિત્ર દીવો (Festive Diya)',
    type: 'svg',
    svgName: 'deepak-clay',
  },
];
