export class DvdPlayer {
  On(): void {
    console.log("DvdPlayer On");
  }

  Play(movie: string): void {
    console.log("Movie: " + movie);
  }

  Stop(): void {
    console.log("DvdPlayer Stop");
  }

  Eject(): void {
    console.log("DvdPlayer Eject");
  }

  Off(): void {
    console.log("DvdPlayer Off");
  }
}