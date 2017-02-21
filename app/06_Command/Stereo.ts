export class Stereo {
  place: string = null;
  artista: string = null;

  constructor(place: string, artista: string) {
    if (this.place) this.place = " " + place;

    if (this.artista) this.artista = " do artista " + artista;
  }

  public On(): void {
    console.log("\nStereo ligado" + this.place);
  }

  public SetCD(): void {
    console.log("Adicionado CD" + this.artista);
  }

  public SetVolume(volume: number): void {
    console.log("Volume ajustado para " + volume);
  }

  public Off(): void {
    console.log("Stereo desligado" + this.place);
  }
}