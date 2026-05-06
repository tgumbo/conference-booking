'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Info() {
  return (
    <Card>
      <CardHeader className="px-5 min-h-11">
        <CardTitle className="text-sm">Guest Details</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-sm font-semibold text-mono mb-2.5">
          Jeroen van Dijk
        </div>

        <div className="flex flex-col gap-2 text-2sm font-normal text-mono">
          <span>jeroen@example.com</span>
          <span>+31 6 12 34 56 78</span>
          <span>ID: NL-XX-123456</span>
        </div>
      </CardContent>
    </Card>
  );
}
