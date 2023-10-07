import { Note } from "../gen/note";
import { Claim } from "./claim";

export interface User {
    id: string;
    name: string;
    email: string;
    
    claims: Claim[];
    notes: Note[];

    createdAt: Date;
    updatedAt: Date;
}