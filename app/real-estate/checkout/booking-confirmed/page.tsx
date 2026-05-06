'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layouts/real-estate/components/toolbar';
import { Steps } from '@/app/real-estate/components/checkout/steps';
import { OrderPlacedContent } from '@/app/real-estate/components/checkout/order-placed/content';

export default function BookingConfirmedPage() {
  return (
    <Fragment>
      <Steps currentStep={3} />
      <>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>Your booking is confirmed</ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Button variant="outline">
              <CalendarCheck />
              <Link href="#">My Bookings</Link>
            </Button>
            <Button>
              <Link href="/real-estate">Browse Properties</Link>
            </Button>
          </ToolbarActions>
        </Toolbar>
      </>
      <>
        <OrderPlacedContent />
      </>
    </Fragment>
  );
}
