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
  // TODO: Add back the links for each case study link onsite.
  // Also fix the aria-labels (Since first is the case study not the PDF)
  // {
  //   projectType: 'caseStudy',
  //   type: 'link',
  //   link: ['https://dl.dropboxusercontent.com/s/o7vvnotuy1y6lh3/Cafe%20Latte%20Case%20Study.pdf?dl=0'],
  //   imgLink: 'https://dl.dropboxusercontent.com/s/d652fnqcve9u3bb/Screenshot%202021-09-30%20at%2016-34-10%20cfl-front%20-%20Dropbox.png?dl=0',
  //   altCode: 'Screenshot of the cafe latte PDF preview',
  //   btnType: ['btn-light', 'btn-dark'],
  //   ariaLabel: ['Link to the PDF of the Cafe Latte case study', 'Link to the PDF of the Cafe Latte case study'],
  //   iconClass: ['fas fa-eye', 'fas fa-eye'],
  //   name: ['Cafe Latte Case Study', 'Cafe Latte Case Study PDF'],
  // },
  // {
  //   projectType: 'caseStudy',
  //   type: 'link',
  //   link: ['https://dl.dropboxusercontent.com/s/j11f2lxgx1pi0lq/Colour%20Me%20Phoney%20Case%20Study.pdf?dl=0'],
  //   imgLink: 'https://dl.dropboxusercontent.com/s/38xrvxm2wjrlsuz/Colour%20Me%20Phoney%20Screenshot.png?dl=0',
  //   altCode: 'Screenshot of the Colour Me Phoney PDF preview',
  //   btnType: ['btn-light', 'btn-dark'],
  //   ariaLabel: ['Link to the PDF of the Colour Me Phoney case study', 'Link to the PDF of the Colour Me Phoney case study'],
  //   iconClass: ['fas fa-eye', 'fas fa-eye'],
  //   name: ['Colour Me Phoney Case Study', 'Colour Me Phoney Case Study PDF'],
  // },
  // {
  //   projectType: 'caseStudy',
  //   type: 'link',
  //   link: ['https://dl.dropboxusercontent.com/s/0zmll97ul7p3x71/Access%20Cropping%20Case%20Study.pdf?dl=0'],
  //   imgLink: 'https://dl.dropboxusercontent.com/s/77ozf7sjjc4my5j/Access%20Cropping%20Screenshot.png?dl=0',
  //   altCode: 'Screenshot of the Access Cropping PDF preview',
  //   btnType: ['btn-light', 'btn-dark'],
  //   ariaLabel: ['Link to the PDF of the Access Cropping case study', 'Link to the PDF of the Access Cropping case study'],
  //   iconClass: ['fas fa-eye', 'fas fa-eye'],
  //   name: ['Access Cropping Case Study', 'Access Cropping Case Study PDF'],
  // },
];
export default menuItems;
