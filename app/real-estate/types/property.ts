export interface RoomType {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  capacity: number;
  bedType: string;
  size: number;
  amenities: string[];
  available: boolean;
}

export interface Property {
  id: string;
  propertyType: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  name: string;
  price: number;
  yearBuilt?: number;
  images: string[];
  isFavorite?: boolean;
  coordinates?: [number, number]; // [lat, lng] - optional for card view, required for map
  description?: string;
  rating?: number;
  reviewCount?: number;
  amenities?: string[];
  roomTypes?: RoomType[];
}
