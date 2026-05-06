'use client';

import Link from 'next/link';
import { MoveLeft, SquareMousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Payment } from '@/app/real-estate/components/checkout/order-placed/components/payment';
import { Order } from '@/app/real-estate/components/checkout/order-summary/components/order';

export function PaymentMethodContent() {
  return (
    <div className="grid xl:grid-cols-3 gap-5 lg:gap-9 mb-5 lg:mb-10">
      <div className="lg:col-span-2 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Payment />
        </div>
        <div className="flex justify-end items-center flex-wrap gap-3">
          <Button variant="outline">
            <MoveLeft className="text-base" />
            <Link href="/real-estate/checkout/guest-info">
              Guest Info
            </Link>
          </Button>

          <Button>
            <Link href="/real-estate/checkout/booking-confirmed">Confirm Booking</Link>
            <SquareMousePointer className="text-base" />
          </Button>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="space-y-5">
          <Order />
        </div>
      </div>
    </div>
  );
}
