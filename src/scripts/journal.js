
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
const renderJournalEntries = (Entries) => {
    const journalSection = document.querySelector('#journal-section')
    journalSection.innerHTML += Entries
}
fetch("http://localhost:8088/journalEntries") 
.then(entry=>entry.json())  // Parse as JSON
.then(entries => {
    entries.forEach(entryy=>{
        let journalEntryy=makeJournalEntryComponent(entryy)
        renderJournalEntries(journalEntryy)
        })
        // What should happen when we finally have the array?
    })