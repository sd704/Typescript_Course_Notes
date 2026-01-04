"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AddTemplate(htmlElement, elementId) {
    console.log('AddTemplate Factory');
    return function (constructor) {
        return class extends constructor {
            constructor(..._) {
                super();
                console.log('AddTemplate');
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = htmlElement;
                    element.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Created Person Object');
    }
};
Person = __decorate([
    AddTemplate('<h1>Hello!</h1>', 'app')
], Person);
const p = new Person();
console.log(p);
//# sourceMappingURL=app.js.map