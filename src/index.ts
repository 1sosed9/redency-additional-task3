import app from './app';
import * as NotesRepo from './repositories/notes.repository';

const port = 3000;

NotesRepo.addInitialData();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
