import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {

  /**
   * @param report
   * @description generates an HTML snippet and outputs it to report.html
   */
  print(report: string): void {
    const html = `
<div>
  <h1>Analysis</h1>
  <div>${report}</div>
</div>`;

    fs.writeFileSync('report.html', html);
  }
}