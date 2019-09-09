export default interface ProjectDataInterface {
  title: string,
  images: {
    path: string,
    alt: string,
  }[],
  date: string,
  descriptionBrief: string,
  description: string,
}