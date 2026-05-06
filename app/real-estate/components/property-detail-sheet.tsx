'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  Wifi,
  Car,
  Waves,
  UtensilsCrossed,
  Dumbbell,
  Sparkles,
  Wine,
  ConciergeBell,
  PlaneTakeoff,
  Wind,
  WashingMachine,
  Clock,
  Gamepad2,
  TreePine,
  Users,
  BedDouble,
  Maximize2,
  CheckCircle2,
  XCircle,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Rating } from '@/components/ui/rating';
import type { Property, RoomType } from '@/app/real-estate/types';

function formatPrice(price: number): string {
  return price.toLocaleString('en-US');
}

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  'WiFi': <Wifi className="size-4" />,
  'Parking': <Car className="size-4" />,
  'Pool': <Waves className="size-4" />,
  'Restaurant': <UtensilsCrossed className="size-4" />,
  'Room Service': <ConciergeBell className="size-4" />,
  'Gym': <Dumbbell className="size-4" />,
  'Spa': <Sparkles className="size-4" />,
  'Bar': <Wine className="size-4" />,
  'Airport Shuttle': <PlaneTakeoff className="size-4" />,
  'Air Conditioning': <Wind className="size-4" />,
  'Laundry': <WashingMachine className="size-4" />,
  '24h Front Desk': <Clock className="size-4" />,
  'Casino': <Gamepad2 className="size-4" />,
  'Golf Course': <TreePine className="size-4" />,
  'Conference Rooms': <Users className="size-4" />,
  'Game Drives': <TreePine className="size-4" />,
  'Garden': <TreePine className="size-4" />,
};

function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [mainIndex, setMainIndex] = React.useState(0);

  const scrollPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMainIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  };
  const scrollNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMainIndex((p) => (p === images.length - 1 ? 0 : p + 1));
  };

  const thumbs = images.filter((_, i) => i !== mainIndex).slice(0, 2);

  return (
    <div className="flex h-64 gap-1 shrink-0">
      {/* Main image */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src={images[mainIndex]}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between">
          <Button variant="outline" shape="circle" mode="icon" size="sm" onClick={scrollPrev}>
            <ChevronLeft className="size-3.5" />
          </Button>
          <Button variant="outline" shape="circle" mode="icon" size="sm" onClick={scrollNext}>
            <ChevronRight className="size-3.5" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
          {mainIndex + 1} / {images.length}
        </div>
      </div>
      {/* Thumbnails */}
      {thumbs.length > 0 && (
        <div className="flex flex-col gap-1 w-28">
          {thumbs.map((img, i) => {
            const origIndex = images.findIndex((im, idx) => im === img && idx !== mainIndex);
            return (
              <button
                key={i}
                onClick={() => setMainIndex(origIndex >= 0 ? origIndex : i + 1)}
                className="flex-1 overflow-hidden focus:outline-none"
              >
                <img src={img} alt={`${name} ${i + 2}`} className="w-full h-full object-cover hover:opacity-90 transition-opacity" />
              </button>
            );
          })}
          {images.length > 3 && (
            <div className="flex-1 overflow-hidden relative">
              <img src={images[3]} alt={`${name} more`} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm font-semibold">
                +{images.length - 3}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RoomCard({
  room,
  selected,
  onSelect,
}: {
  room: RoomType;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        'w-full text-left rounded-xl border-2 p-4 transition-all duration-200 focus:outline-none',
        selected
          ? 'border-primary bg-primary/5'
          : 'border-border hover:border-primary/40 bg-card',
        !room.available && 'opacity-50 pointer-events-none',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-foreground">{room.name}</span>
            {!room.available && (
              <Badge variant="destructive" appearance="light" size="sm">Sold out</Badge>
            )}
            {room.available && selected && (
              <Badge variant="success" appearance="light" size="sm">Selected</Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{room.description}</p>

          <div className="flex items-center gap-3 mt-2.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <BedDouble className="size-3.5" />
              {room.bedType}
            </span>
            <span className="flex items-center gap-1">
              <Maximize2 className="size-3.5" />
              {room.size} m²
            </span>
            <span className="flex items-center gap-1">
              <Users className="size-3.5" />
              {room.capacity} {room.capacity === 1 ? 'guest' : 'guests'}
            </span>
          </div>

          <div className="flex flex-wrap gap-1 mt-2.5">
            {room.amenities.slice(0, 4).map((a) => (
              <span key={a} className="text-[10px] bg-secondary text-secondary-foreground rounded px-1.5 py-0.5">
                {a}
              </span>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-[10px] text-muted-foreground px-1 py-0.5">
                +{room.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="shrink-0 text-right">
          <div className="text-lg font-bold text-foreground">N${formatPrice(room.pricePerNight)}</div>
          <div className="text-xs text-muted-foreground">per night</div>
          <div className="mt-2">
            {room.available ? (
              <CheckCircle2 className={cn('size-5 ml-auto', selected ? 'text-primary' : 'text-muted-foreground/30')} />
            ) : (
              <XCircle className="size-5 ml-auto text-destructive/40" />
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

interface PropertyDetailSheetProps {
  property: Property | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PropertyDetailSheet({ property, open, onOpenChange }: PropertyDetailSheetProps) {
  const router = useRouter();
  const [selectedRoomId, setSelectedRoomId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (property?.roomTypes) {
      const first = property.roomTypes.find((r) => r.available);
      setSelectedRoomId(first?.id ?? null);
    }
  }, [property]);

  const selectedRoom = property?.roomTypes?.find((r) => r.id === selectedRoomId);

  if (!property) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[50%] p-0 gap-0 flex flex-col"
      >
        {/* Image gallery — full bleed, no padding */}
        <ImageGallery images={property.images} name={property.name} />

        {/* Scrollable body */}
        <ScrollArea className="flex-1">
          <div className="p-6 space-y-5">
            {/* Header */}
            <SheetHeader className="space-y-2">
              <div className="flex items-start justify-between gap-3 pr-6">
                <SheetTitle className="text-xl font-bold leading-snug">{property.name}</SheetTitle>
                <Badge variant="secondary" appearance="outline" size="lg" className="shrink-0">
                  {property.propertyType}
                </Badge>
              </div>

              {/* Rating + review count */}
              {property.rating && (
                <div className="flex items-center gap-2">
                  <Rating rating={property.rating} size="sm" showValue />
                  <span className="text-sm text-muted-foreground">
                    {property.reviewCount?.toLocaleString()} reviews
                  </span>
                </div>
              )}

              {/* Address */}
              <div className="flex items-start gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                <span>{property.address}, {property.city}{property.state ? `, ${property.state}` : ''}</span>
              </div>
            </SheetHeader>

            <Separator />

            {/* Description */}
            {property.description && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">About this property</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{property.description}</p>
              </div>
            )}

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2.5">Facilities</h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-foreground/60">
                        {AMENITY_ICONS[amenity] ?? <Wind className="size-4" />}
                      </span>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Separator />

            {/* Room types */}
            {property.roomTypes && property.roomTypes.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Choose your room</h3>
                <div className="space-y-3">
                  {property.roomTypes.map((room) => (
                    <RoomCard
                      key={room.id}
                      room={room}
                      selected={selectedRoomId === room.id}
                      onSelect={() => setSelectedRoomId(room.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Bottom padding so footer doesn't overlap last item */}
            <div className="h-2" />
          </div>
        </ScrollArea>

        {/* Sticky booking footer */}
        <div className="shrink-0 border-t bg-background px-6 py-4">
          {selectedRoom ? (
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Selected room</p>
                <p className="text-sm font-semibold text-foreground">{selectedRoom.name}</p>
                <p className="text-xs text-muted-foreground">
                  N${formatPrice(selectedRoom.pricePerNight)} / night
                </p>
              </div>
              <Button
                variant="mono"
                size="lg"
                className="shrink-0"
                onClick={() => router.push('/real-estate/checkout/order-summary')}
              >
                Book Now
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">No rooms available</p>
              <Button variant="mono" size="lg" disabled>
                Book Now
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
