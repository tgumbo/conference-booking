'use client';

import { UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layouts/real-estate/components/toolbar';
import { Steps } from '@/app/real-estate/components/checkout/steps';
import { ShippingInfoContent } from '@/app/real-estate/components/checkout/shipping-info/content';

export default function GuestInfoPage() {
  return (
    <div className="container py-8">
      <Steps currentStep={1} />
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle />
          <ToolbarDescription>Enter your guest information</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline">
            <UserRound />
            <span>Guest Details</span>
          </Button>
        </ToolbarActions>
      </Toolbar>
      <ShippingInfoContent />
    </div>
  );
}
