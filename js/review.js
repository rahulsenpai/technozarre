const createCommentSpan = comment => {
    let box = document.createElement("span");

    let date = document.createElement("span");
    date.appendChild(document.createTextNode(comment.date));

    let name = document.createElement("span");
    name.appendChild(document.createTextNode(comment.name));

    let cmt = document.createElement("span");
    cmt.appendChild(document.createTextNode(comment.comment));

    box.appendChild(date);
    box.appendChild(name);
    box.appendChild(cmt);

    document.querySelector("#comments").appendChild(box);
}