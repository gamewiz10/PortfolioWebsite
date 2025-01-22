function downloadResume(filename, filepath) {
    let element = document.createElement('a');
    element.setAttribute('href', filepath);
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById("downloadResume").addEventListener("click", function () {
                let filename = "Joseph_A_Bell_Resume_Main_.docx";
                let filepath = "Joseph_A_Bell_Resume_Main_.docx";
                downloadResume(filename, filepath);
            });