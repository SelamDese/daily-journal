const journalEntries = [
    {
        concept: "Array methods",
        date: "11/15/2018",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        concept: "Objects",
        date: "11/20/2018",
        entry: "We learned objects today.",
        mood: "Ok"
    },
]
//string template that represents a single journal entry object as HTML
journalEntryStringTemplate=''
const makeJournalEntryComponent = (journalEntry)=> {
    let journalEntryStringTemplate=
    `<section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.date}</p>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
    </section>`
    return journalEntryStringTemplate
}
const renderJournalEntries = (journalEntryStringTemplate) => {
    const journalSection = document.querySelector('journal-section')
    journalSection.innerHTML += journalEntryStringTemplate
}
journalEntries.forEach(entry=>{
    let journalHTML= makeJournalEntryComponent(entry)
    renderJournalEntries(journalHTML)
})