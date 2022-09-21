export interface Data {
    info: eventos[];
}


export interface eventos {
    id?:number;
    name: string;
    date: string,
    time: string,
    location: {
    address: string;
    city: string;
    country: string;
    

}
}