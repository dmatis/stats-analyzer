import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an instance of MatchReader which takes an instance of CsvFileReader to delegate
// the read() capability
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// Create an instance of Summary which receives 2 delegate instance objects that it will defer the implementation for:
// 1) what analysis to run
// 2) How to display the results
const consoleSummary = Summary.winsAnalysisConsoleReport('Man United');
consoleSummary.buildAndPrintReport(matchReader.matches);

const htmlSummary = Summary.winsAnalysisHtmlReport('Man United');
htmlSummary.buildAndPrintReport(matchReader.matches);