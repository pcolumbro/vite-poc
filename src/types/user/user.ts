import { ClaimTypes } from "../../enum/claim-types";
import { Note } from "../gen/note";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    
    claims: ClaimTypes[];
    notes: Note[];

    createdAt: Date;
    updatedAt: Date;
}