import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'locales', 'content.ts');
const source = fs.readFileSync(file, 'utf8');

function dedupeLocaleBlock(text, locale) {
  const marker = `  ${locale}: {`;
  const start = text.indexOf(marker);
  if (start === -1) return text;

  const bodyStart = start + marker.length;
  const nextLocale = text.indexOf('\n  },\n', bodyStart);
  const end = nextLocale === -1 ? text.length : nextLocale;
  const body = text.slice(bodyStart, end);

  const pair = /([ \t]*)'((?:\\.|[^'])*)'\s*:\s*'((?:\\.|[^'])*)'\s*,?/g;
  const seen = new Set();
  const duplicates = [];
  const cleaned = body.replace(pair, (full, indent, key) => {
    if (seen.has(key)) {
      duplicates.push(key);
      return '';
    }
    seen.add(key);
    return full;
  });

  if (duplicates.length) {
    console.log(`Removed duplicate ${locale} localization keys: ${[...new Set(duplicates)].join(', ')}`);
  }

  return text.slice(0, bodyStart) + cleaned + text.slice(end);
}

let output = source;
output = dedupeLocaleBlock(output, 'en');
output = dedupeLocaleBlock(output, 'ar');

if (output !== source) fs.writeFileSync(file, output);
