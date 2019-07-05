import { UserGroup } from './referenceTypes';
export interface UserCreateRequest {
    /** Max length 50 characters */
    email: string;
    /** Min length 6 characters */
    /** Max length 99 characters */
    password: string;
    /** Max length 4 characters */
    /** Must match a registered organisation reference */
    organisation_reference: string;
    role: UserGroup;
}
