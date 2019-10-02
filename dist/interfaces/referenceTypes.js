"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkstreamStatus;
(function (WorkstreamStatus) {
    WorkstreamStatus["active"] = "active";
    WorkstreamStatus["deactivated"] = "deactivated";
})(WorkstreamStatus = exports.WorkstreamStatus || (exports.WorkstreamStatus = {}));
var UserGroup;
(function (UserGroup) {
    UserGroup["Planner"] = "Planner";
    UserGroup["HighwayAuthority"] = "HighwayAuthority";
    UserGroup["Admin"] = "Admin";
    UserGroup["Contractor"] = "Contractor";
    UserGroup["API"] = "API";
    UserGroup["UI"] = "UI";
})(UserGroup = exports.UserGroup || (exports.UserGroup = {}));
var OrganisationType;
(function (OrganisationType) {
    OrganisationType["Promoter"] = "PROMOTER";
    OrganisationType["HA"] = "HA";
    OrganisationType["Contractor"] = "CONTRACTOR";
})(OrganisationType = exports.OrganisationType || (exports.OrganisationType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["Confirmed"] = "CONFIRMED";
    UserStatus["Invited"] = "INVITED";
    UserStatus["Disabled"] = "DISABLED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
