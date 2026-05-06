'use client';

import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layouts/real-estate/components/toolbar';
import { Steps } from '@/app/real-estate/components/checkout/steps';
import { OrderSummaryContent } from '@/app/real-estate/components/checkout/order-summary/content';

export default function OrderSummaryPage() {
  return (
    <div className="container py-8">
      <Steps currentStep={0} />
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle />
          <ToolbarDescription>Review your booking details</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline">
            <CalendarDays />
            <Link href="/real-estate">Browse Properties</Link>
          </Button>
        </ToolbarActions>
      </Toolbar>
      <OrderSummaryContent />
    </div>
  );
}
