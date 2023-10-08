import { ClaimTypes } from "../enum/claim-types";
import { User } from "../types/user/user";
import { faker } from '@faker-js/faker';


export const generateMockUser = (): User => {
        const u: User = {
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            claims: [
                {
                    id: faker.string.uuid(),
                    name: 'Can Edit Notes',
                    claimType: ClaimTypes.CanEditNotes
                },
                {
                    id: faker.string.uuid(),
                    name: 'Can Create Notes',
                    claimType: ClaimTypes.CanCreateNotes
                },
                {
                    id: faker.string.uuid(),
                    name: 'Can Delete Notes',
                    claimType: ClaimTypes.CanDeleteNotes
                },
                {
                    id: faker.string.uuid(),
                    name: 'Can View Notes',
                    claimType: ClaimTypes.CanViewNotes
                },
            ],
            notes: [
                {
                    id: faker.string.uuid(),
                    title: faker.lorem.sentence(),
                    content: faker.lorem.paragraph(),
                    createdAt: faker.date.past(),
                },
                {
                    id: faker.string.uuid(),
                    title: faker.lorem.sentence(),
                    content: faker.lorem.paragraph(),
                    createdAt: faker.date.past(),
                },
            ],
            createdAt: faker.date.past({years:1}),
            updatedAt: faker.date.past(),
        };
        return u;
};