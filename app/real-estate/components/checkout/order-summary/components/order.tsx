'use client';

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

function formatAmount(n: number) {
  return `N$${n.toLocaleString('en-US')}`;
}

export function Order() {
  return (
    <Card className="bg-accent/50">
      <CardHeader className="px-5">
        <CardTitle>Price Breakdown</CardTitle>
      </CardHeader>

      <CardContent className="px-5 py-4 space-y-2.5">
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary-foreground">
            N$1,250 × {NIGHTS} nights
          </span>
          <span className="text-sm font-medium text-mono">{formatAmount(subtotal)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary-foreground">Cleaning fee</span>
          <span className="text-sm font-medium text-mono">{formatAmount(CLEANING_FEE)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary-foreground">Service fee</span>
          <span className="text-sm font-medium text-mono">{formatAmount(serviceFee)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary-foreground">Taxes</span>
          <span className="text-sm font-medium text-mono">{formatAmount(taxes)}</span>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex justify-between items-center px-5 pt-4">
        <span className="text-sm text-secondary-foreground">Total</span>
        <span className="text-base font-semibold text-mono">{formatAmount(total)}</span>
      </CardFooter>
    </Card>
  );
}
