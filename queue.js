// Queues F first I in F first O out

const createQueue = () => {
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
        },
        get q () {
            return queue
        }
    }
}

const q = createQueue()

q.enqueue('first item')
console.log(q.peek())

module.exports = createQueue
