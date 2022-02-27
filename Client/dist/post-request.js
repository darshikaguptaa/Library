var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function sendData(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("/store", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "content-type": "text/plain",
            },
        });
        console.log(res);
        return "henlo";
    });
}
export function signin(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("/signin", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "content-type": "text/plain",
            },
        });
        return res.status === 200 ? "Success" : "Fail";
    });
}
export function signup(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("/signup", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "content-type": "text/plain",
            },
        });
        return res.status === 200 ? "Success" : "Fail";
    });
}
