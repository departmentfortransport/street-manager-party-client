"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkstreamStatus;
(function (WorkstreamStatus) {
    WorkstreamStatus["active"] = "active";
    WorkstreamStatus["deactivated"] = "deactivated";
})(WorkstreamStatus = exports.WorkstreamStatus || (exports.WorkstreamStatus = {}));
var WorkstreamStatusResponse;
(function (WorkstreamStatusResponse) {
    WorkstreamStatusResponse["active"] = "active";
    WorkstreamStatusResponse["deactivated"] = "deactivated";
    WorkstreamStatusResponse["upcoming_enum"] = "upcoming_enum";
})(WorkstreamStatusResponse = exports.WorkstreamStatusResponse || (exports.WorkstreamStatusResponse = {}));
var Role;
(function (Role) {
    Role["Planner"] = "Planner";
    Role["HighwayAuthority"] = "HighwayAuthority";
    Role["Admin"] = "Admin";
    Role["Contractor"] = "Contractor";
    Role["API"] = "API";
    Role["UI"] = "UI";
    Role["DataExport"] = "DataExport";
})(Role = exports.Role || (exports.Role = {}));
var RoleResponse;
(function (RoleResponse) {
    RoleResponse["Planner"] = "Planner";
    RoleResponse["HighwayAuthority"] = "HighwayAuthority";
    RoleResponse["Admin"] = "Admin";
    RoleResponse["Contractor"] = "Contractor";
    RoleResponse["API"] = "API";
    RoleResponse["UI"] = "UI";
    RoleResponse["DataExport"] = "DataExport";
    RoleResponse["upcoming_enum"] = "upcoming_enum";
})(RoleResponse = exports.RoleResponse || (exports.RoleResponse = {}));
var OrganisationType;
(function (OrganisationType) {
    OrganisationType["PROMOTER"] = "PROMOTER";
    OrganisationType["HA"] = "HA";
    OrganisationType["CONTRACTOR"] = "CONTRACTOR";
})(OrganisationType = exports.OrganisationType || (exports.OrganisationType = {}));
var OrganisationTypeResponse;
(function (OrganisationTypeResponse) {
    OrganisationTypeResponse["PROMOTER"] = "PROMOTER";
    OrganisationTypeResponse["HA"] = "HA";
    OrganisationTypeResponse["CONTRACTOR"] = "CONTRACTOR";
    OrganisationTypeResponse["upcoming_enum"] = "upcoming_enum";
})(OrganisationTypeResponse = exports.OrganisationTypeResponse || (exports.OrganisationTypeResponse = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["Confirmed"] = "CONFIRMED";
    UserStatus["Invited"] = "INVITED";
    UserStatus["Disabled"] = "DISABLED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var UserStatusResponse;
(function (UserStatusResponse) {
    UserStatusResponse["Confirmed"] = "CONFIRMED";
    UserStatusResponse["Invited"] = "INVITED";
    UserStatusResponse["Disabled"] = "DISABLED";
    UserStatusResponse["upcoming_enum"] = "upcoming_enum";
})(UserStatusResponse = exports.UserStatusResponse || (exports.UserStatusResponse = {}));
var WorkstreamAccessLevel;
(function (WorkstreamAccessLevel) {
    WorkstreamAccessLevel["full_write"] = "full_write";
    WorkstreamAccessLevel["read_only"] = "read_only";
})(WorkstreamAccessLevel = exports.WorkstreamAccessLevel || (exports.WorkstreamAccessLevel = {}));
var WorkstreamAccessLevelResponse;
(function (WorkstreamAccessLevelResponse) {
    WorkstreamAccessLevelResponse["full_write"] = "full_write";
    WorkstreamAccessLevelResponse["read_only"] = "read_only";
    WorkstreamAccessLevelResponse["upcoming_enum"] = "upcoming_enum";
})(WorkstreamAccessLevelResponse = exports.WorkstreamAccessLevelResponse || (exports.WorkstreamAccessLevelResponse = {}));
