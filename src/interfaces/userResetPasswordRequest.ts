export interface UserResetPasswordRequest {
  email: string
  verification_code: string
  password: string
}
