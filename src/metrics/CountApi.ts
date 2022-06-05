/* eslint-disable */
class CountApi {
  public static async getTotalCount(isLive: boolean): Promise<number> {
    return 0;
  }

  public static async increaseTotalCount(isLive: boolean): Promise<number> {
    return 0;
  }

  public static async getDateCount(isLive: boolean, date: Date): Promise<number> {
    return 0;
  }

  public static async increaseDateCount(isLive: boolean, date: Date): Promise<number> {
    return 0;
  }

  public static getDailyCountGetUrl(isLive: boolean, date: Date): string {
    return ``;
  }

  public static getDailyCountHitUrl(isLive: boolean, date: Date): string {
    return ``;
  }
}

export default CountApi;
