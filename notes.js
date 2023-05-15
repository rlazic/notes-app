//Records a note with title andtext body
const form = document.querySelector('#note-form');
const noteList = document.querySelector('#note-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#note-title').value;
  const text = document.querySelector('#note-text').value;

  if (title === '' || text === '') {
    alert('Please fill in both the title and text fields');
    return;
  }

//Records time of note creation
const now = new Date();  
const currentHours = now.getHours();
const currentMinutes = now.getMinutes();
const currentDate = now.toLocaleDateString();

  const note = document.createElement('div');
  note.classList.add('note');
  const noteHTML = `
    <h2>${title}</h2>  ${currentDate} ${currentHours}:${currentMinutes} 
    <hr>
    <p>${text}</p>
  `;
  note.innerHTML = noteHTML;
  noteList.appendChild(note);

  document.querySelector('#note-title').value = '';
  document.querySelector('#note-text').value = '';
});

