const formDetails = document.querySelector('.notes-form');
const notesContainer = document.querySelector('.container');

const titleInput = formDetails['title'];
const authorInput = formDetails['author'];
const bodyInput = formDetails['body'];

const notes = JSON.parse(localStorage.getItem('notes')) || [];

const addNotes = (title, author, body) => {
  notes.push({
    title,
    author,
    body
  });
  localStorage.setItem('notes', JSON.stringify(notes))
  return {title, author, body};
};


const createNotesElement = ({title, author, body}) => {
  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');const bodyDiv = document.createElement('div');
  const notesTitle = document.createElement('h2');
  const notesAuthor = document.createElement('h3');
  const notesBody = document.createElement('p');

  notesTitle.textContent = `Note title: ${title}`;
  notesAuthor.textContent = `This note was taken by: ${author}`;
  notesBody.textContent = `Content of note: ${body}`;

titleDiv.appendChild(notesTitle);
authorDiv.appendChild(notesAuthor);
bodyDiv.appendChild(notesBody);
notesContainer.append(titleDiv, authorDiv, bodyDiv);
};
notes.forEach(createNotesElement) 
formDetails.addEventListener('submit', (e) => {
  e.preventDefault();

  const newNote = addNotes(
    titleInput.value,
    authorInput.value,
    bodyInput.value
  )
  createNotesElement(newNote);
  titleInput.value = '';
    authorInput.value = '';
    bodyInput.value = '';
})
