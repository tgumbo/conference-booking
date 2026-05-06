'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { MapPinned } from 'lucide-react';
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


export default function ShippingInfoPage() {
  return (
    <Fragment>
      <Steps currentStep={1} />
      <>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              Enter and confirm your delivery address
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Button variant="outline">
              <MapPinned />
              <Link href="#">Add Address</Link>
            </Button>
          </ToolbarActions>
        </Toolbar>
      </>
      <>
        <ShippingInfoContent />
      </>
    </Fragment>
  );
}
