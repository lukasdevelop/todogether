"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello world Actions deploy now teste!!');
});
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});