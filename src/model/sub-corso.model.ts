export class Corso {
  constructor(
    public id: number,
    public nomeCorso: string,
    public descrizioneBreve: string,
    public descrizioneCompleta: string,
    public durata: number,
  ) {}
}