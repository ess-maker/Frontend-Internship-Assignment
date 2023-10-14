export interface Testimonial {
    text: string;
    author: string;
}
export interface About {
    from: string;
    partnerSince: number;
    averageResponseTime: string;
    description: string;
    services: string[];
    benefits: string[];
}

export  interface charteredAccountants {
    charteredAccountants: any;
    id: number;
    name: string;
    image: string;
    intro: string;
    rating: number;
    reviewCount: number;
    taskComplexity: string;
    price: string;
    deliveryTime: string;
    testimonial: Testimonial;
    about: About;
}