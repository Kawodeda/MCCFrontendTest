export class TreeNode<T> {
    private readonly _children: TreeNode<T>[];
    private _value: T;

    constructor(value: T, children: TreeNode<T>[] = []) {
        this._value = value;
        this._children = children;
    }

    get children(): TreeNode<T>[] {
        return this._children;
    }

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        this._value = value;
    }
}
