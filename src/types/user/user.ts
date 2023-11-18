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
}