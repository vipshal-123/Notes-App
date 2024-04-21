import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentDate = new Date().toString().replace('GMT+0530 (India Standard Time)', '');

  notes: { currentDate: string; description: string; showMe: boolean }[] = [];
  newNote = { currentDate: this.currentDate, description: '', showMe: false };
  showAddForm = false;
  editingIndex: number | null = null;

  ngOnInit() {
    const retrievedNotes = localStorage.getItem('notes');
    if (retrievedNotes) {
      const storedNotes = JSON.parse(retrievedNotes);
      if (storedNotes) {
        this.notes = storedNotes;
      }
    }
  }

  addNote() {
    if (this.editingIndex !== null) {
      this.notes[this.editingIndex] = { ...this.newNote };
      this.editingIndex = null;
    } else {
      this.notes.push({ ...this.newNote });
    }

    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.newNote = { currentDate: this.currentDate, description: '', showMe: false };
    this.showAddForm = false;
  }

  editNote(note: { currentDate: string; description: string; showMe: boolean }, index: number) {
    this.newNote = { ...note };
    this.editingIndex = index;
    this.showAddForm = true;
  }

  editCkeck(note: { currentDate: string; description: string; showMe: boolean }, index: number) {
    this.notes[index].showMe = note.showMe;
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  deleteNote(note: { currentDate: string; description: string; showMe: boolean }) {
    const index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  toggleAddForm() {
    this.editingIndex = null;
    this.showAddForm = true;
    this.newNote = { currentDate: this.currentDate, description: '', showMe: false };
  }

  cancelAddForm() {
    this.editingIndex = null;
    this.showAddForm = false;
    this.newNote = { currentDate: '', description: '', showMe: false };
  }
}
