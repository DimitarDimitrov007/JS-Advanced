function extract(content) {
    let text = document.getElementById(content);

    console.log(text)

    let regex = /\((?<whatweneed>[^(]+)\)/gm;

    let matches = text.textContent.matchAll(regex);
    let result = [];

    for (let match of matches) {
        result.push(match.groups.whatweneed);
    }

    return result.join("; ");

}