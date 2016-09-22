// A palindrome is a word, phrase, number, or other sequence of
// characters which reads the same backwards and forwards. Can you
// determine if a given string is a palindrome?
//
// To solve this challenge, we must first take each character, enqueue
// it in a queue, and also push that same character onto a stack.
// Once that's done, we must dequeue the first character from the queue and
// pop the top character off the stack, then compare the two characters to s
// ee if they are the same; as long as the characters match, we continue
// dequeueing, popping, and comparing each character until our containers
// are empty (a non-match means it isn't a palindrome).
//
// Write the following declarations and implementations:
//
// Two instance variables: one for your stack, and one for your queue.
// A void pushCharacter(char ch) method that pushes a character onto a stack.
// A void enqueueCharacter(char ch) method that enqueues a character in the  instance variable.
// A char popCharacter() method that pops and returns the character at the top of the  instance variable.
// A char dequeueCharacter() method that dequeues and returns the first character in the  instance variable.


function qSP(){
    this.queue=[];
    this.stack = [];
    this.pushCharacter = function (a){
        this.stack.push(a);
    }
    this.enqueueCharacter = function (b){
        this.queue.push(b);
    }
    this.popCharacter = function(){
        return this.stack.pop();
    }
    this.dequeueCharacter = function(){
        return this.queue.shift();
    }
}
