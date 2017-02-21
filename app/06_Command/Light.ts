export class Light {
  message: string = "";

  constructor(message?: string) {
    if (message) this.message = " " + message;
  }

  public On(): void {
    console.log("\nLigou a lâmpada" + this.message);
  }

  public Off():void {
    console.log("\nDesligou a lâmpada" + this.message);
  }
}