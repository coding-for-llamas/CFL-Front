export interface Iimage {
  '_id'?: string;
  'url': string;
  'title': string;
  'type': string;
  'created_at'?: string;
  'updated_at'?: string;
}

export interface Store {
  images: { images: Iimage[] };
}

const mapStoreToProps = (store: Store): { images: Iimage[] } => ({
  images: store.images.images,
});
export default mapStoreToProps;
