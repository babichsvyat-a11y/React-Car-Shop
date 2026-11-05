export default interface IPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
