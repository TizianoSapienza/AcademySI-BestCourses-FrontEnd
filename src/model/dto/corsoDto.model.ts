export class CorsoDto {
  private id: number;
  private descrizioneBreve: string;
  private descrizioneCompleta: string;
  private durata: number;

  constructor(id: number, descrizioneBreve: string, descrizioneCompleta: string, durata: number) {
    this.id = id;
    this.descrizioneBreve = descrizioneBreve;
    this.descrizioneCompleta = descrizioneCompleta;
    this.durata = durata;
  }
}