export interface MenuItem {
  type: string,
  projectType: string,
  iconClass: string[],
  btnType: string[],
  link: string[],
  name: string[],
  ariaLabel: string[],
  altCode: string
  imgLink: string,
  auth?: boolean,
}
const menuItems = [
  {
    projectType: 'site',
    btnType: ['btn-light', 'btn-dark'],
    imgLink: 'https://www.dl.dropboxusercontent.com/s/c9mxoixh5sqnict/project1.png?dl=0',
    type: 'link',
    altCode: 'Screenshot of a daycare website',
    iconClass: ['fas fa-eye', 'fab fa-github'],
    link: ['/daycare', 'https://github.com/coding-for-llamas/caring-child-daycare'],
    ariaLabel: ['Link to Caring Child Daycare', 'Link to Caring Child Daycare Github Page'],
    name: ['Caring Child Daycare', 'Github'],
  },
  {
    projectType: 'caseStudy',
    type: 'link',
    link: ['/cafe-latte', 'https://dl.dropboxusercontent.com/s/o7vvnotuy1y6lh3/Cafe%20Latte%20Case%20Study.pdf?dl=0'],
    imgLink: 'https://dl.dropboxusercontent.com/s/d652fnqcve9u3bb/Screenshot%202021-09-30%20at%2016-34-10%20cfl-front%20-%20Dropbox.png?dl=0',
    altCode: 'Screenshot of the cafe latte PDF preview',
    btnType: ['btn-light', 'btn-dark'],
    ariaLabel: ['Link to the PDF of the Cafe Latte case study', 'Link to the PDF of the Cafe Latte case study'],
    iconClass: ['fas fa-eye', 'fas fa-eye'],
    name: ['Cafe Latte Case Study', 'Cafe Latte Case Study PDF'],
  },
];
export default menuItems;
