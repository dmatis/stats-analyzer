import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';

export class AverageGoalsAnalysis implements Analyzer {
  constructor(public team: string) {}

  totalGoals(matches: MatchData[]): number {
    let totalGoals = 0;
    for (let match of matches) {
      // team is the Home team in this match
      if (match[1] === this.team) {
        totalGoals += match[3];
      }
      // team is the Away team in this match
      else if (match[2] === this.team) {
        totalGoals += match[4]
      }
    }

    return totalGoals;
  }

  matchesPlayed(matches: MatchData[]): number {
    let matchesPlayed = 0;
    for (let match of matches) {
      if ([match[1], match[2]].includes(this.team)) {
        matchesPlayed++;
      }
    }

    return matchesPlayed;
  }

  /**
   * @param matches
   * @returns the average goals scored for `this.team`
   */
  run(matches: MatchData[]): string {
    const totalGoals = this.totalGoals(matches);
    const matchesPlayed = this.matchesPlayed(matches);
    const averageGoals = Math.round((totalGoals / matchesPlayed) * 100) / 100;

    return `Team: ${this.team}, scored an average of ${averageGoals} goals in ${matchesPlayed} matches`;
  }
}