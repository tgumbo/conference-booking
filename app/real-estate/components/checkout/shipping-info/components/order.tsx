'use client';

import { CalendarDays, MapPin, Moon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const NIGHTLY_RATE = 1250;
const NIGHTS = 5;
const CLEANING_FEE = 150;
const SERVICE_RATE = 0.05;
const TAX_RATE = 0.1;

const subtotal = NIGHTLY_RATE * NIGHTS;
const serviceFee = Math.round(subtotal * SERVICE_RATE);
const taxes = Math.round(subtotal * TAX_RATE);
const total = subtotal + CLEANING_FEE + serviceFee + taxes;

function fmt(n: number) {
  return `N$${n.toLocaleString('en-US')}`;
}

export function Order() {
  return (
    <Card className="bg-accent/50">
      <CardHeader className="px-5">
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>

      <CardContent className="px-5 py-4 space-y-4">
        {/* Property snapshot */}
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground">The Windhoek Luxury Suites</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3 shrink-0" />
            <span>Windhoek, NA</span>
          </div>
          <p className="text-xs text-muted-foreground">Standard Suite · King · 2 guests</p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5 shrink-0" />
          <span>26 Jun → 01 Jul 2025</span>
          <span className="flex items-center gap-0.5 ml-auto text-primary font-medium">
            <Moon className="size-3" />
            {NIGHTS} nights
          </span>
        </div>

        <Separator />

        {/* Price breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary-foreground">N$1,250 × {NIGHTS} nights</span>
            <span className="text-sm font-medium text-mono">{fmt(subtotal)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary-foreground">Cleaning fee</span>
            <span className="text-sm font-medium text-mono">{fmt(CLEANING_FEE)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary-foreground">Service fee</span>
            <span className="text-sm font-medium text-mono">{fmt(serviceFee)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary-foreground">Taxes</span>
            <span className="text-sm font-medium text-mono">{fmt(taxes)}</span>
          </div>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex justify-between items-center px-5 pt-4">
        <span className="text-sm text-secondary-foreground">Total</span>
        <span className="text-base font-semibold text-mono">{fmt(total)}</span>
      </CardFooter>
    </Card>
  );
}
