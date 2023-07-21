// Buttons
const recBtn = document.querySelector('.record-btn')
const playBtn = document.querySelector('.play-btn')
const soundClips = document.querySelector('#visuals')

function main() {
    // Check if mediaRecorder is supported in the current browser
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log('getUserMedia supported.')
        navigator.mediaDevices.getUserMedia({
            // constraints - only audio needed for this app
            audio: true
        })
        // Success callback
        .then((stream) => {
            record(stream); 
        })

        // Error callback
        .catch(err => {
            console.error(`The following getUserMedia error occurred: ${err}`)
        })
    } else {
        console.log('getUserMedia not supported on your browser!')
    }


}

function record(stream) {
    const record = new MediaRecorder(stream);

    recBtn.addEventListener("click", () => {
        if (record.state == "recording") {
            record.stop();
            console.log(record.state);
            console.log("recorder stopped");
            recBtn.style.background = "";
            recBtn.style.color = "";
        } else {
            record.start();
            recBtn.style.background = "red";
            recBtn.style.color = "black";
        }

    });

    record.onstop = (e) => {
        console.log("recorder stopped");
      
        const clipName = prompt("Enter a name for your sound clip");
      
        const clipContainer = document.createElement("article");
        const clipLabel = document.createElement("p");
        const audio = document.createElement("audio");
        const deleteButton = document.createElement("button");
      
        clipContainer.classList.add("clip");
        audio.setAttribute("controls", "");
        deleteButton.innerHTML = "Delete";
        clipLabel.innerHTML = clipName;
      
        clipContainer.appendChild(audio);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        soundClips.appendChild(clipContainer);
      
        let chunks = [];
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        const audioURL = window.URL.createObjectURL(blob);
        audio.src = audioURL;
      
        deleteButton.onclick = (e) => {
          let evtTgt = e.target;
          evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        };
      };
}

main();
