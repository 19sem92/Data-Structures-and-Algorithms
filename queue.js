// Queues F first I in F first O out

function createQueue() {
    const queue = []

    return {
        enqueue (item) {
            queue.unshift(item)
        },

        dequeue () {
            return queue.pop()
        },
        peek () {
            return queue[queue.length -1]
        },
        get length () {
            return queue.length
        },
        isEmpty () {
            return queue.length === 0
        }
    }
}

const q = createQueue()

console.log(q.isEmpty());
q.enqueue('first item')
q.enqueue('second item')
q.enqueue('third item')

console.log(q.peek())

q.dequeue()

console.log(q.length)
