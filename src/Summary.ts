import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { AverageGoalsAnalysis } from './analyzers/AverageGoalsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';
import { ConsoleReport } from './reportTargets/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  };

  static winsAnalysisConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  };

  static averageGoalsAnalysisConsoleReport(team: string): Summary {
    return new Summary(new AverageGoalsAnalysis(team), new ConsoleReport());
  };

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}