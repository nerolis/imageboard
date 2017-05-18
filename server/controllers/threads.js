export function ThreadList(id) {
    return Thread.find();
}

export function createThread(data) {
    const thread = new Thread({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Thread()
    });

    return note.save();
}

export function deleteThread(id) {
    return Note.findById(id).remove();
}