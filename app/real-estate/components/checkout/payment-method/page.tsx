'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { WalletCards } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layouts/real-estate/components/toolbar';
import { PaymentMethodContent } from '@/app/real-estate/components/checkout/payment-method/content';
import { Steps } from '@/app/real-estate/components/checkout/steps';


export default function PaymentMethodPage() {
  return (
    <Fragment>
      <Steps currentStep={2} />
      <>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>Select how you want to pay</ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Button variant="outline">
              <WalletCards />
              <Link href="#">Add Cart</Link>
            </Button>
          </ToolbarActions>
        </Toolbar>
      </>
      <>
        <PaymentMethodContent />
      </>
    </Fragment>
  );
}
