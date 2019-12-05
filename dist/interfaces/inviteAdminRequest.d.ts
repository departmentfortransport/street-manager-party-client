export interface InviteAdminRequest {
    /** Max length 50 characters */
    email: string;
    /** Max length 50 characters */
    first_name: string;
    /** Max length 50 characters */
    last_name: string;
    /** Max length 20 characters */
    organisation_reference: string;
}
