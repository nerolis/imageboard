export function ThreadList(id) {
    return Thread.find();
}

export function createThread(data) {
    const thread = new Thread({
        title: data.title,
        text: data.text,
        createdAt: new Thread()
    });

    return thread.save();
}

export function deleteThread(id) {
    return Thread.findById(id).remove();
}