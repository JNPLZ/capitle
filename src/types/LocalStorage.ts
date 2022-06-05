class LocalStorage {
  public static notePageVisit(): void {
    const today = new Date();
    const dateString = today.toISOString().slice(0, 10);
    const storageString = `pageVisit-${dateString}`;
    localStorage.setItem(storageString, 'true');
  }

  public static isPageVisitNoted(): boolean {
    const today = new Date();
    const dateString = today.toISOString().slice(0, 10);
    const storageString = `pageVisit-${dateString}`;
    return localStorage.getItem(storageString) === 'true';
  }
}

export default LocalStorage;
