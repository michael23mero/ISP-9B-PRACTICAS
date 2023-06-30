"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanalMsg = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["CanalQueue"] = "canals";
})(RabbitMQ = exports.RabbitMQ || (exports.RabbitMQ = {}));
var CanalMsg;
(function (CanalMsg) {
    CanalMsg["CREATE"] = "CREATE_CANAL";
    CanalMsg["FIND_ALL"] = "FIND_CANALS";
    CanalMsg["FIND_ONE"] = "FIND_CANAL";
    CanalMsg["UPDATE"] = "UPDATE_CANAL";
    CanalMsg["DELETE"] = "DELETE_CANAL";
})(CanalMsg = exports.CanalMsg || (exports.CanalMsg = {}));
//# sourceMappingURL=constants.js.map