'use client';

import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Order } from '@/app/real-estate/components/checkout/order-summary/components/order';
import { BookingItem } from '@/app/real-estate/components/checkout/order-summary/components/booking-item';
import { toAbsoluteUrl } from '@/lib/helpers';

export function OrderSummaryContent() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-9 mb-5 lg:mb-10">
      <div className="col-span-2 space-y-5">
        <BookingItem
          propertyName="The Windhoek Luxury Suites"
          propertyType="Apartment"
          address="Cnr Hebenstreit St. & Joseph Wood St."
          city="Windhoek"
          state="NA"
          image={toAbsoluteUrl('/media/images/properties/1/img.png')}
          rating={4.8}
          reviewCount={312}
          roomName="Standard Suite"
          bedType="King"
          capacity={2}
          checkIn="26 Jun 2025"
          checkOut="01 Jul 2025"
          nights={5}
        />

        <div className="flex justify-end items-center flex-wrap gap-3">
          <Button variant="outline" asChild>
            <Link href="/real-estate">Cancel</Link>
          </Button>

          <Button asChild>
            <Link href="/real-estate/checkout/guest-info">
              Guest Info
              <MoveRight className="text-base" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="col-span-1">
        <div className="space-y-5">
          <Order />
        </div>
      </div>
    </div>
  );
}
