class Stack{
    #arr; //declare an private deta member /define
    constructor(){
        this.#arr=[]; //initialise

    }

    push(x){
        this.#arr.push(x)
    }

    pop(){
        this.#arr.pop()
    }

    
    top(){
        if(this.#arr.length==0) return undefined;
        return this.#arr[this.#arr.length - 1 ];
    }
}

const st =new Stack();
st.push(10);
st.push(20);
console.log(st.top());
st.pop();
st.pop()
st.push(30)
console.log(st.top())
