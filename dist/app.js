"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const notes_route_1 = __importDefault(require("./routes/notes.route"));
const stats_route_1 = __importDefault(require("./routes/stats.route"));
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use(notes_route_1.default);
app.use(stats_route_1.default);
exports.default = app;
