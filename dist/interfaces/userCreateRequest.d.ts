import { UserGroup } from './referenceTypes';
export interface UserCreateRequest {
    /** Max length 50 characters */
    email: string;
    /** Max length 50 characters */
    first_name: string;
    /** Max length 50 characters */
    last_name: string;
    /** Min length 6 characters */
    /** Max length 99 characters */
    password?: string;
    /** Max length 20 characters */
    /** If provided, this must match a registered organisation reference */
    organisation_reference?: string;
    roles: UserGroup[];
}
