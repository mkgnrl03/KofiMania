
export interface Coffee {
    id: string;           
    name: string;    
    type: 'espresso' | 'latte' | 'cappuccino' | 'americano' | 'mocha';
    size: 'small' | 'medium' | 'large'; 
    price: number;       
    ingredients?: string[]; 
    isHot: boolean;  
    caffeineContent?: number;
}