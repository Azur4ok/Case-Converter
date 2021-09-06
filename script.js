document.getElementById("upper-case").addEventListener("click", function () {
document.getElementById("text-area").value = document.getElementById("text-area").value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function () {
    document.getElementById("text-area").value = document.getElementById("text-area").value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function ()
{
    document.getElementById("text-area").value = document.getElementById("text-area").value.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    })
});


document.getElementById("sentence-case").addEventListener("click", function () {
    let textArea = document.getElementById('text-area');
    let sentences = textArea.value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    textArea.value = modifiedSentences.join('. ');
});


document.getElementById('save-text-file').addEventListener('click', function (){
    let text = document.getElementById('text-area').value;
    download('text.txt', text);
});



function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}