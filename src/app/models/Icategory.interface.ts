export interface ICategory {
    Id: number;
    Quantity: number;
    Position: number | null;
    Name: string;
    Link: string;
    LinkEncoded: string;
    Map: string;
    Value: string;
    Children: ICategory[];
}