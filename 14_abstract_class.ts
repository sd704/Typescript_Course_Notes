// 'abstract' is a TS feature
abstract class UIElement {
    constructor(public identifier: string) { }

    clone(targetLocation: string) {
        // logic to duplicate UI Element
    }
}

// The purpose of abstract class is to be extended inside a child class
// Abstract Class cannot be instantiated
class XElement extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier)
    }
}