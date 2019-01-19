// Priority Queue

const createQueue = require('./queue')

function createPriorityQueue () {
    const lowPriorityQueue = createQueue()
    const highPriorityQueue = createQueue()

    return {
        enqueue (item, isHighPriority = false) {
            isHighPriority
                ? highPriorityQueue.enqueue(item)
                : lowPriorityQueue.enqueue(item)
        },
        dequeue () {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue()
            }

            return lowPriorityQueue.dequeue()
        },
        peek () {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek()
            }

            return lowPriorityQueue.peek()
        },
        length () {
            return highPriorityQueue.length +
                lowPriorityQueue.length
        },
        isEmpty () {
            return (
                highPriorityQueue.isEmpty() &&
                lowPriorityQueue.isEmpty()
            )
        },
        show () {
            console.log('highPriorityQueue >', highPriorityQueue.q)
            console.log('lowPriorityQueue >', lowPriorityQueue.q)
        }
    }
}


const q = createPriorityQueue()

q.enqueue('low priority item 1')
q.enqueue('low priority item 2')
q.enqueue('low priority item 3')

q.enqueue('high priority item 1', true)
q.dequeue()
q.show()

q.dequeue()
q.show()

