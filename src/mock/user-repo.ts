import { User } from "../types/user/user";

export const getUser = (): User => {
        const u: User = {
            id: "",
            name: "",
            email: "",
            claims: [],
            notes: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        return u;
};