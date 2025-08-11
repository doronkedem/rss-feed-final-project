import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'feed.xml');
    const xml = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.status(200).send(xml);
  } catch (err) {
    res.status(500).send('RSS feed missing. Please upload public/feed.xml');
  }
}
