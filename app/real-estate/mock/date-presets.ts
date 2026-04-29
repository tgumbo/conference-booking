import { addDays } from 'date-fns';
import type { DatePreset } from '../types';

export function getDatePresets(today: Date): DatePreset[] {
  return [
    { label: 'Today', range: { from: today, to: today } },
    { label: '7 days', range: { from: today, to: addDays(today, 6) } },
  ];
}
