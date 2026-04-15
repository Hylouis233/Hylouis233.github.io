import { publications, projects } from './academic';

export const outputs = publications.map((item) => ({
  year: String(item.year),
  title: item.title.en,
  venue: `${item.venue.en} · ${item.status.en}`,
  note: item.note.en,
  link: item.url ?? '',
}));

export const openSource = projects.map((item) => ({
  name: item.name.en,
  description: item.summary.en,
  href: item.repoUrl ?? '',
  isPrivate: item.isPrivate ?? false,
  status: item.status.en,
}));
