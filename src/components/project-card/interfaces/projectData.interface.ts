export default interface ProjectDataInterface {
  title: string,
  slug: string,
  date: string,
  client: {
    name: string,
    link?: string,
  },
  intermediary?: {
    name: string,
    link?: string,
  },
  images: {
    path: string,
    alt: string,
  }[],
  tags: string[],
  descriptionBrief: string,
  description: string,
}