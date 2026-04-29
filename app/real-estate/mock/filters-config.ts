import type { FilterConfig } from '../types';
import { Area } from '@/components/layouts/real-estate/components/area';
import { Dates } from '@/components/layouts/real-estate/components/dates';
import { Price } from '@/components/layouts/real-estate/components/price';
import { Condition } from '@/components/layouts/real-estate/components/condition';
import { PropertyType } from '@/components/layouts/real-estate/components/property-type';

export const filtersConfig: FilterConfig[] = [
  { key: "propertyType", label: "Stay Type", component: PropertyType },
  { key: "condition", label: "Transport Type", component: Condition },
  { key: "area", label: "Location / Venue Proximity", component: Area },
  { key: "price", label: "Budget (Per Night / Transfer)", component: Price },
  { key: "dates", label: "Event / Stay Dates", component: Dates },
];
