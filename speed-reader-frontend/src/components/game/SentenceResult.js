import parse from "html-react-parser";

function SentenceResult(props){

    let answerWords = props.answer.split(" ")
    for (let i=0; i < answerWords.length; i++) {
      answerWords[i] = (props.mappedWords[i]) ? answerWords[i] : "<s>" + answerWords[i] + "</s>"
    }
    let answerFormatted = answerWords.join(" ")

    return (
        <>
            <h3>Sentence {props.numberIndex + 1}</h3>
            <b>Correct Sentence:</b> {props.sentence}<br />
            <b>Your Sentence:</b> {parse(answerFormatted)} <br />
            That's {props.results}<br />
        </>
    )
}


export default SentenceResult