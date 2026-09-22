export interface Day { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }
export interface Contributions { total: number; weeks: (Day | null)[][] }

/**
 * Fetches the last year of public GitHub contributions at build time.
 * Returns null on any failure so the page can omit the section instead of breaking.
 */
export async function getContributions(user: string): Promise<Contributions | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`, {
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { contributions?: Day[] };
    const days = data.contributions;
    if (!Array.isArray(days) || days.length === 0) return null;

    // Group into Sunday-first weeks, padding the first week so rows line up by weekday.
    const weeks: (Day | null)[][] = [];
    let week: (Day | null)[] = Array(new Date(days[0].date + 'T00:00:00Z').getUTCDay()).fill(null);
    for (const day of days) {
      week.push(day);
      if (week.length === 7) { weeks.push(week); week = []; }
    }
    if (week.length) weeks.push(week);

    return { total: days.reduce((sum, d) => sum + d.count, 0), weeks };
  } catch {
    return null;
  }
}
