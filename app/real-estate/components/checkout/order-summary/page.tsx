'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { BaggageClaim } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layouts/real-estate/components/toolbar';
import { Steps } from '../steps';
import { OrderSummaryContent } from '@/app/real-estate/components/checkout/order-summary/content';


export default function OrderSummaryPage() {
  return (
    <Fragment>
      <Steps currentStep={0} />
      <>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              Review your items before checkout
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Button variant="outline">
              <BaggageClaim />
              <Link href="#">View Cart</Link>
            </Button>
          </ToolbarActions>
        </Toolbar>
      </>
      <>
        <OrderSummaryContent />
      </>
    </Fragment>
  );
}
