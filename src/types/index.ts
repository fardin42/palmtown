export interface Amenity {
  name: string;
  category: 'health' | 'recreation' | 'leisure' | 'kids' | 'practical';
  description?: string;
  image?: string;

}

export interface ApartmentType {
  type: '2BHK' | '3BHK';
  description: string;
  features: string[];
  image: string;
}

export interface FloorPlan {
  type: 'First Floor Plan' | 'A To F Wing' | 'typical' | 'Pondium Floor Plan' | 'Terrace Floor Plan';
  title: string;
  image: string;
}

export interface Specification {
  title: string;
  content: {
    [key: string]: string;
  };
}

export interface Developer {
  name: string;
  description?: string;
  logo?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  officeAddress: string;
  siteAddress: string;
}