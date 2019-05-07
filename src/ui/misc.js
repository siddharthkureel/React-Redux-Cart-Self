export const firebaseLooper = (response) => {
    let data = [];
    response.forEach((a) => {
        data.push({
            ...a.val(),
            id: a.key
        })
    })
    return data.reverse();
}