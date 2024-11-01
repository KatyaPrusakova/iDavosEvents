"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
// import { IEvent } from '@/lib/database/models/event.model';

import Checkout from './Checkout'
const CheckoutButton = ({ event }: { event: any }) => {
    const { user } = { user: { publicMetadata: { userId: "userId" } } };
    const userId = user?.publicMetadata.userId as string;
    const hasEventFinished = new Date(event.endDateTime) < new Date();
  
  return (
    <div className="flex items-center gap-3">
            {hasEventFinished ? (
        <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
      ): (
        <>
          {/* <SignedOut> */}
            <Button asChild className="button rounded-full" size="lg">
              <Link href="/sign-in">
                Get Ticket
              </Link>
            </Button>
          {/* </SignedOut> */}

          {/* <SignedIn> */}
            <Checkout event={event} userId={userId} />
          {/* </SignedIn> */}
        </>
      )}
    </div>
  );
}

export default CheckoutButton;
