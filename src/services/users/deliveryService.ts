import axios from 'axios';
// import { AxiosService } from '../../../../services/net/base/AxiosService';

// Delivery pricing configuration
const DELIVERY_PROFILES = {
  local: {
    baseRate: 150,
    perKmRate: 35,
    minFee: 500,
    weightTiers: [
      { upTo: 5, multiplier: 1.0 },
      { upTo: 10, multiplier: 1.2 },
      { upTo: 20, multiplier: 1.5 }
    ]
  },
  regional: {
    baseRate: 300,
    perKmRate: 50,
    minFee: 1200,
    weightTiers: [
      { upTo: 10, multiplier: 1.0 },
      { upTo: 20, multiplier: 1.3 },
      { upTo: 50, multiplier: 1.8 }
    ]
  },
  international: {
    baseRate: 5000,
    perKgRate: 2500,
    minFee: 20000,
    customsMultiplier: 1.15,
    processingFee: 7500
  }
};

// Zone-based pricing for major Nigerian cities
const ZONE_PRICING = {
  lagos: {
    mainland: { bike: 800, car: 1500, van: 3000 },
    island: { bike: 1500, car: 2500, van: 4500 }
  },
  abuja: {
    central: { bike: 1000, car: 1800, van: 3500 },
    outskirts: { bike: 1500, car: 2500, van: 4500 }
  },
  portHarcourt: {
    central: { bike: 900, car: 1600, van: 3200 },
    outskirts: { bike: 1400, car: 2300, van: 4200 }
  },
  // Add other major cities as needed
};

export const calculateDeliveryCost = async (
  vendorLocation: { lat: number; lng: number; zone?: string },
  deliveryAddress: { lat: number; lng: number; zone?: string; country: string },
  items: any[]
): Promise<number> => {
  try {
    // Check if international delivery
    const isInternational = vendorLocation.country !== deliveryAddress.country;
    
    if (isInternational) {
      return calculateInternationalCost(items);
    }
    
    // Check if zone-based pricing applies
    if (vendorLocation.zone && deliveryAddress.zone) {
      const zoneCost = getZoneBasedCost(
        vendorLocation.zone, 
        deliveryAddress.zone,
        items
      );
      if (zoneCost) return zoneCost;
    }
    
    // Calculate distance-based cost
    const distance = await getDrivingDistance(vendorLocation, deliveryAddress);
    return calculateLocalCost(distance, items);
  } catch (error) {
    console.error('Delivery calculation error:', error);
    return 0; // Fallback to free delivery
  }
};

const getZoneBasedCost = (
  originZone: string, 
  destinationZone: string,
  items: any[]
): number | null => {
  // Try to match city-level zones (e.g., "lagos_mainland")
  const [originCity] = originZone.split('_');
  const [destCity] = destinationZone.split('_');
  
  if (!ZONE_PRICING[originCity]?.[destCity]) return null;
  
  const profile = ZONE_PRICING[originCity][destCity];
  const totalWeight = items.reduce((sum, item) => sum + item.weight * item.quantity, 0);
  
  // Determine vehicle type based on weight
  if (totalWeight <= 20) return profile.bike;
  if (totalWeight <= 100) return profile.car;
  return profile.van;
};

const calculateLocalCost = (distance: number, items: any[]): number => {
  const totalWeight = items.reduce((sum, item) => sum + item.weight * item.quantity, 0);
  
  // Determine region based on distance
  const profile = distance > 100 ? DELIVERY_PROFILES.regional : DELIVERY_PROFILES.local;
  
  // Apply weight-based multiplier
  const weightMultiplier = profile.weightTiers.find(tier => totalWeight <= tier.upTo)?.multiplier || 2.0;
  
  // Calculate cost
  const cost = profile.baseRate + (distance * profile.perKmRate) * weightMultiplier;
  return Math.max(profile.minFee, Math.ceil(cost));
};

const calculateInternationalCost = (items: any[]): number => {
  const profile = DELIVERY_PROFILES.international;
  const totalWeight = items.reduce((sum, item) => sum + item.weight * item.quantity, 0);
  
  return Math.max(
    profile.minFee,
    Math.ceil(
      profile.baseRate + 
      (totalWeight * profile.perKgRate) * profile.customsMultiplier +
      profile.processingFee
    )
  );
};

const getDrivingDistance = async (
  origin: { lat: number; lng: number },
  destination: { lat: number; lng: number }
): Promise<number> => {
  try {
    // Use OpenRouteService API
    const response = await axios.post(
      'https://api.openrouteservice.org/v2/directions/driving-car',
      {
        coordinates: [
          [origin.lng, origin.lat],
          [destination.lng, destination.lat]
        ]
      },
      {
        headers: {
          'Authorization': process.env.REACT_APP_OPENROUTE_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data.routes[0].summary.distance / 1000; // Convert to km
  } catch (apiError) {
    console.warn('OpenRoute API failed, using fallback distance', apiError);
    return calculateHaversineDistance(origin, destination);
  }
};

const calculateHaversineDistance = (
  pointA: { lat: number; lng: number },
  pointB: { lat: number; lng: number }
): number => {
  const R = 6371; // Earth radius in km
  const dLat = deg2rad(pointB.lat - pointA.lat);
  const dLon = deg2rad(pointB.lng - pointA.lng);
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(pointA.lat)) * 
    Math.cos(deg2rad(pointB.lat)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return R * c;
};

const deg2rad = (deg: number): number => deg * (Math.PI/180);