import {
  Home,
  Building2,
  Key,
  Heart,
  TrendingUp,
  MapPin,
} from "lucide-react";
import type { MenuItem } from "../types";

export const MENU_HEADER: MenuItem[] = [
  {
    title: 'Accommodation',
    path: '#',
    icon: Home,
    // children: [
    //   {
    //     title: 'Houses',
    //     path: '#',
    //     desc: 'Find your dream home'
    //   },
    //   {
    //     title: 'Apartments',
    //     path: '#',
    //     desc: 'Modern city living'
    //   },
    //   {
    //     title: 'Condos',
    //     path: '#',
    //     desc: 'Low-maintenance lifestyle'
    //   },
    //   {
    //     title: 'Land',
    //     path: '#',
    //     desc: 'Build your vision'
    //   },
    // ]
  },
  {
    title: 'Transfers',
    path: '#',
    icon: Key,
    // children: [
    //   {
    //     title: 'Long-term Rentals',
    //     path: '#',
    //     desc: 'Annual or monthly leases'
    //   },
    //   {
    //     title: 'Short-term Rentals',
    //     path: '#',
    //     desc: 'Vacation & temporary stays'
    //   },
    //   {
    //     title: 'Room Shares',
    //     path: '#',
    //     desc: 'Shared living spaces'
    //   },
    // ]
  },
  {
    title: 'Packages',
    path: '#',
    icon: TrendingUp,
  },
  {
    title: 'VIP / Concierge',
    path: '#',
    icon: Building2,
  },
  {
    title: 'Saved Plans',
    path: '#',
    icon: Heart,
  },
  {
    title: 'Venue Map',
    path: '#',
    icon: MapPin,
  },
];
