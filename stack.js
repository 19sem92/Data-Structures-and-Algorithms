// Stacks L last I in Last O out

function createStack () {
    const stack = []

    return {
        push (item) {
            stack.push(item)
        },
        pop () {
            return stack.pop()
        },
        peek () {
            return stack[stack.length -1]
        },
        get length () {
            return stack.length
        },
        isEmpty () {
            return stack.length === 0
        },
        showStack () {
            console.log(stack)
        }
    }
}

const stack = createStack()

stack.push('item 1')
stack.push('item 2')
stack.push('item 3')

stack.showStack()
stack.pop()
stack.showStack()
stack.push('neW item')
stack.showStack()
stack.pop()
stack.showStack()