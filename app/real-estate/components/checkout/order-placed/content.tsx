'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Payment } from '@/app/real-estate/components/checkout/order-placed/components/payment';
import { Order } from '@/app/real-estate/components/checkout/order-summary/components/order';
import { Info } from '@/app/real-estate/components/checkout/order-placed/components/info';
import { BookingItem } from '@/app/real-estate/components/checkout/order-summary/components/booking-item';
import { toAbsoluteUrl } from '@/lib/helpers';

export function OrderPlacedContent() {
  return (
    <div className="grid xl:grid-cols-3 gap-5 lg:gap-9">
      <div className="lg:col-span-2 space-y-5">
        <div className="grid grid-cols-1 gap-5 lg:gap-9">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="justify-start bg-muted/70 gap-9 h-auto py-5 flex-wrap">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-normal text-secondary-foreground">Booking ID</span>
                  <span className="text-sm font-medium text-mono">X319330-S24</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-normal text-secondary-foreground">Booked on</span>
                  <span className="text-sm font-medium text-mono">26 June, 2025</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-normal text-secondary-foreground">Check-in</span>
                  <span className="text-sm font-medium text-mono">26 Jun 2025</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-normal text-secondary-foreground">Check-out</span>
                  <span className="text-sm font-medium text-mono">01 Jul 2025</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-normal text-secondary-foreground">Total</span>
                  <span className="text-sm font-medium text-mono">N$7,700</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-normal text-secondary-foreground">Guest</span>
                  <span className="text-sm font-medium text-mono">Jeroen van Dijk</span>
                </div>
              </CardHeader>
              <CardContent className="p-5 lg:p-7.5 space-y-5">
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
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:gap-9">
            <Payment />
            <Info />
          </div>
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
