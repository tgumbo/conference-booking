'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { Captions } from 'lucide-react';
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


export default function OrderPlacedPage() {
  return (
    <Fragment>
      <Steps currentStep={3} />
      <>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              Your purchase has been successfully completed
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Button variant="outline">
              <Captions />
              <Link href="/store-client/my-orders">My Orders</Link>
            </Button>
            <Button>
              <Captions />
              <Link href="/store-client/my-orders">Continue Shopping</Link>
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
