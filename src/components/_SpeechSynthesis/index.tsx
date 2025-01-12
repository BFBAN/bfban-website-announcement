import React, {useEffect, useState} from "react";

export default function ReadAloudWidget({children}) {
    const synth = window.speechSynthesis || null;

    let voices = [],
        [inputTxt, setInputTxt] = useState("test"),
        [readAloudStatus, setReadAloudStatus] = useState(false),
        [readAloud, setReadAloud] = useState([]),
        [readAloudSelectIndex, setReadAloudSelectIndex] = useState<string>(null);


    useEffect(() => {
        if (!synth)
            return;

        if (synth.speaking) {
            synth.cancel();
        }
        if (synth) {
            populateVoiceList();

            setInputTxt(
                (document.querySelector('.title_xvU1')['innerText'] + '，' || '') +
                (document.getElementById('__blog-post-container').innerText || '')
            );
        }
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }
    }, [])

    function populateVoiceList() {
        if (!synth)
            return;

        voices = synth.getVoices().sort(function (a, b) {
            const aname = a.name.toUpperCase();
            const bname = b.name.toUpperCase();

            if (aname < bname) {
                return -1;
            } else if (aname == bname) {
                return 0;
            } else {
                return +1;
            }
        });
        let readAloud = [];

        for (let i = 0; i < voices.length; i++) {
            const option = {name: '', value: ''};
            option.name = `${voices[i].name} (${voices[i].lang})`;

            if (voices[i].default) {
                option.name += " -- DEFAULT";
                setReadAloudSelectIndex(option.name);
            }

            option.value = voices[i].lang;
            option.name = voices[i].name;

            readAloud.push(option);
        }

        setReadAloud(readAloud)
    }


    function speak() {
        if (!synth)
            return;

        if (synth.speaking) {
            console.error("speechSynthesis.speaking");
            return;
        }

        if (inputTxt !== "") {
            const utterThis = new SpeechSynthesisUtterance(inputTxt);

            utterThis.onend = function (event) {
                console.log("SpeechSynthesisUtterance.onend");
            };

            utterThis.onerror = function (event) {
                console.error("SpeechSynthesisUtterance.onerror");
            };

            const selectedOption = readAloudSelectIndex;
            for (let i = 0; i < voices.length; i++) {
                if (readAloud[i].name === selectedOption) {
                    utterThis.voice = voices[i];
                    break;
                }
            }
            utterThis.pitch = 1;
            utterThis.onend = () => {
                setReadAloudStatus(false);
            }
            synth.speak(utterThis);
            setReadAloudStatus(true);
        }
    }

    function onChangeReadAloudIndex(event) {
        setReadAloudSelectIndex(event.target.value);
    }

    function onReadAloudStatus() {
        if (!synth)
            return;

        if (!readAloudStatus) {
            speak()
        } else {
            synth.cancel();
            setReadAloudStatus(!readAloudStatus);
        }
    }

    return (
        <span className="print-hidden">
                    {children}
            <i className="bi bi-volume-up"></i>
            <a onClick={(_) => onReadAloudStatus()}>
                {!readAloudStatus ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause"></i>}
            </a>
        </span>
    )
}
