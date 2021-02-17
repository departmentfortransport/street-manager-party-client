export enum WorkstreamStatus {
  active = 'active',
  deactivated = 'deactivated'
}

export enum WorkstreamStatusResponse {
  active = 'active',
  deactivated = 'deactivated',
  upcoming_enum = 'upcoming_enum'
}

export enum Role {
  Planner = 'Planner',
  HighwayAuthority = 'HighwayAuthority',
  Admin = 'Admin',
  Contractor = 'Contractor',
  API = 'API',
  UI = 'UI',
  DataExport = 'DataExport'
}

export enum RoleResponse {
  Planner = 'Planner',
  HighwayAuthority = 'HighwayAuthority',
  Admin = 'Admin',
  Contractor = 'Contractor',
  API = 'API',
  UI = 'UI',
  DataExport = 'DataExport',
  upcoming_enum = 'upcoming_enum'
}

export enum OrganisationType {
  PROMOTER = 'PROMOTER',
  HA = 'HA',
  CONTRACTOR = 'CONTRACTOR'
}

export enum OrganisationTypeResponse {
  PROMOTER = 'PROMOTER',
  HA = 'HA',
  CONTRACTOR = 'CONTRACTOR',
  upcoming_enum = 'upcoming_enum'
}

export enum UserStatus {
  Confirmed = 'CONFIRMED',
  Invited = 'INVITED',
  Disabled = 'DISABLED'
}

export enum UserStatusResponse {
  Confirmed = 'CONFIRMED',
  Invited = 'INVITED',
  Disabled = 'DISABLED',
  upcoming_enum = 'upcoming_enum'
}

export enum WorkstreamAccessLevel {
  full_write = 'full_write',
  read_only = 'read_only'
}

export enum WorkstreamAccessLevelResponse {
  full_write = 'full_write',
  read_only = 'read_only',
  upcoming_enum = 'upcoming_enum'
}

export enum OrganisationStatusResponse {
  active = 'active',
  suspended = 'suspended',
  disabled = 'disabled',
  upcoming_enum = 'upcoming_enum'
}
