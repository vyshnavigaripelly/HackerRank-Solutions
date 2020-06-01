function Solution(){
    let stack=[], queue=[];

    this.pushCharacter = c => { stack.push(c) }
    this.popCharacter = () => { return stack.pop() }
    this.enqueueCharacter = c => { queue.push(c) }
    this.dequeueCharacter = () => { return queue.shift() }
}