import CountApi from './CountApi';
import LocalStorage from '../types/LocalStorage';

class Tracker {
  public static async trackPageVisit(isLive: boolean): Promise<void> {
    if (!LocalStorage.isPageVisitNoted()) {
      await CountApi.increaseTotalCount(isLive);
      await CountApi.increaseDateCount(isLive, new Date());
      LocalStorage.notePageVisit();
    }
  }
}

export default Tracker;
