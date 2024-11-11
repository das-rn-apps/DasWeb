"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectDetails_1 = __importDefault(require("./projectDetails"));
const feedback_1 = __importDefault(require("./feedback"));
const ApiRouter = (0, express_1.Router)();
ApiRouter.use("/project", projectDetails_1.default);
ApiRouter.use("/feedback", feedback_1.default);
exports.default = ApiRouter;
