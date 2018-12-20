const journalEntries = [
    {
        date: "11/15/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        date: "11/20/2018",
        concept: "Objects",
        entry: "We learned objects today.",
        mood: "Ok"
    },
]
//string template that represents a single journal entry object as HTML
const makeJournalEntryComponent = (journalEntry)=> {
    let journalEntryStringTemplate=
    `<section>
        <h3>Array methods</h3>
        <p>07/24/2018</p>
        <p>We learned about array methods, but only forEach made sense</p>
        <p>ok</p>
    </section>`
    return 
}