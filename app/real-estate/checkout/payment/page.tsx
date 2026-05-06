'use client';

import { Fragment } from 'react';
import { WalletCards } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layouts/real-estate/components/toolbar';
import { Steps } from '@/app/real-estate/components/checkout/steps';
import { PaymentMethodContent } from '@/app/real-estate/components/checkout/payment-method/content';

export default function PaymentPage() {
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
              <span>Add Card</span>
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
