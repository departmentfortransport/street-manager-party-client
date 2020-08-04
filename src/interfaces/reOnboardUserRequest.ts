export interface ReOnboardUserRequest {
  /** Max length 50 characters */
  email: string
  /** Max length 99 characters */
  password?: string
}
