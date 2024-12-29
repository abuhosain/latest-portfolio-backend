 
export interface IJourney {
    type: 'experience' | 'education' | 'skill';
    title: string; 
    logoUrl: string;
    duration: string;
    description: string;
    company?: string;  
    institution?: string;  
    icon?: string;  
  }
  