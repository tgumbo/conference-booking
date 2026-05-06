'use client';

import Link from 'next/link';
import { MapPin, Star, BedDouble, Users, CalendarDays, Moon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toAbsoluteUrl } from '@/lib/helpers';

interface BookingItemProps {
  propertyName: string;
  propertyType: string;
  address: string;
  city: string;
  state: string;
  image: string;
  rating: number;
  reviewCount: number;
  roomName: string;
  bedType: string;
  capacity: number;
  checkIn: string;
  checkOut: string;
  nights: number;
}

export function BookingItem({
  propertyName,
  propertyType,
  address,
  city,
  state,
  image,
  rating,
  reviewCount,
  roomName,
  bedType,
  capacity,
  checkIn,
  checkOut,
  nights,
}: BookingItemProps) {
  return (
    <Card>
      <CardContent className="p-0 overflow-hidden">
        {/* Property image + header */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={propertyName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div>
              <Link
                href="/real-estate"
                className="text-white font-semibold text-base leading-snug hover:underline"
              >
                {propertyName}
              </Link>
              <div className="flex items-center gap-1 mt-0.5 text-white/80 text-xs">
                <MapPin className="size-3 shrink-0" />
                <span>{address}, {city}{state ? `, ${state}` : ''}</span>
              </div>
            </div>
            <Badge variant="secondary" appearance="outline" size="sm" className="shrink-0 bg-white/10 text-white border-white/30 backdrop-blur-sm">
              {propertyType}
            </Badge>
          </div>
        </div>

        {/* Rating row */}
        <div className="flex items-center gap-1.5 px-4 pt-3 pb-1 text-sm">
          <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-foreground">{rating}</span>
          <span className="text-muted-foreground">({reviewCount.toLocaleString()} reviews)</span>
        </div>

        <Separator className="mx-4 my-3 w-auto" />

        {/* Room + stay details */}
        <div className="px-4 pb-4 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Room type</p>
              <p className="text-sm font-semibold text-foreground">{roomName}</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <BedDouble className="size-3.5" />
                {bedType}
              </span>
              <span className="flex items-center gap-1">
                <Users className="size-3.5" />
                {capacity} {capacity === 1 ? 'guest' : 'guests'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-0.5 rounded-lg bg-muted/50 px-3 py-2.5">
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wide">
                <CalendarDays className="size-3" />
                Check-in
              </span>
              <span className="text-sm font-semibold text-foreground">{checkIn}</span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-lg bg-muted/50 px-3 py-2.5">
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wide">
                <CalendarDays className="size-3" />
                Check-out
              </span>
              <span className="text-sm font-semibold text-foreground">{checkOut}</span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-lg bg-primary/10 px-3 py-2.5">
              <span className="flex items-center gap-1 text-[10px] text-primary uppercase tracking-wide">
                <Moon className="size-3" />
                Duration
              </span>
              <span className="text-sm font-semibold text-primary">{nights} nights</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
