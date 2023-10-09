import { Note } from "../gen/note";
import { Claim } from "./claim";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    
    claims: Claim[];
    notes: Note[];

    createdAt: Date;
    updatedAt: Date;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // [key: string]: any;
}