interface MapProps {
  images:Iimage[];
}

export interface Iimage {
  '_id': string;
  'url': string;
  'title': string;
  'type': string;
  'caption': string;
  'thumbnail': string | undefined;
  'link': string;
  'modify': any | undefined;
  'comments': string;
  'created_at'?: string;
  'updated_at'?: string;
}
export interface Store {
  images: { images: Iimage[] };
}

// eslint-disable-next-line arrow-body-style
const mapStoreToProps = (store: Store): MapProps => {
  // console.log(store);
  return ({
    images: store.images.images,
  });
};
export default mapStoreToProps;
