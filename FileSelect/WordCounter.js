function getExtension(filename) {
    var substrings = filename.split(".");
    return substrings.pop();
}

function countWords() {
    var input = document.getElementById("inputFile").files.length;
    var fullPath = document.getElementById("inputFile").value;
    var rawFile = document.getElementById("inputFile").files[0]  

    // First check if a file is selected or not
    if (input == 0) {
        document.getElementById("fileDisplay").innerHTML = "No file was selected.";

    } else {
        // If a file is selected, check if it's a txt file
        if (getExtension(fullPath) != "txt") {
            document.getElementById("fileDisplay").innerHTML = "This file is not a txt file.";

        } else {
            // Start reading the file because it's a txt file
            var filename = fullPath.split(/(\\|\/)/g).pop();
            document.getElementById("fileDisplay").innerHTML = ("A file was selected: " + filename);

            // Create reader and read the file
            var reader = new FileReader();
            reader.readAsText(rawFile, "UTF-8");

            reader.onload = function (evt) {
                var contents = evt.target.result;
                document.getElementById("textDisplay").innerHTML = ("File contents: <br>" + contents);
                
                var words = contents.split(" ");
                var count = words.length;
                document.getElementById("countDisplay").innerHTML = ("Number of words: " + count);
            }
        }
    }
}