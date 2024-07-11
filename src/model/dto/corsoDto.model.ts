export class CorsoDto {
  id: number;
  nomeCorso: string;
  descrizioneBreve: string;
  descrizioneCompleta: string;
  durata: number;

  constructor(id: number, nomeCorso: string, descrizioneBreve: string, descrizioneCompleta: string, durata: number) {
    this.id = id;
    this.nomeCorso = nomeCorso;
    this.descrizioneBreve = descrizioneBreve;
    this.descrizioneCompleta = descrizioneCompleta;
    this.durata = durata;
  }
}