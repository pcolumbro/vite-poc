import { ClaimTypes } from "../../enum/claim-types";

export interface Claim {
    id: string;
    claimType: ClaimTypes;
}