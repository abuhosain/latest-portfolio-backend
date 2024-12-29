 
export interface IJourney {
    type: 'experience' | 'education' | 'skill';
    logoUrl: string;
    duration: string;
    description: string;
    company?: string;  
    institution?: string;  
    icon?: string;  
  }
  