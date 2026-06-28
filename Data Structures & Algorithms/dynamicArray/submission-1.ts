class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    private data: any[];
    private capacity: number;
    private size: number;
    constructor(capacity: number) {
        if(capacity <= 0) {
            throw new Error("Capacity must higher then zero")
        }
        this.capacity = capacity;
        this.size = 0;
        this.data = new Array(capacity)

    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        if(i >=0 &&  i < this.size) {
            return this.data[i]
        }
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        if(i>=0 && i < this.size){
            this.data[i] = n
        }
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.data[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        if(this.size === 0) throw new Error("Array is empty")
        this.size--;
        return this.data[this.size];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity = this.capacity * 2
        let newData = new Array(this.capacity)
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size

    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}