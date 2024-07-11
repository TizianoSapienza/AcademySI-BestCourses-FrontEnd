export class CorsoRegistrazioneDto {
  nomeCorso: string;
  descrizioneBreve: string;
  descrizioneCompleta: string;
  durata: number;
  categoriaId: number;

  constructor(nomeCorso: string, descrizioneBreve: string, descrizioneCompleta: string, durata: number, categoriaId: number) {
    this.nomeCorso = nomeCorso;
    this.descrizioneBreve = descrizioneBreve;
    this.descrizioneCompleta = descrizioneCompleta;
    this.durata = durata;
    this.categoriaId = categoriaId;
  }
}