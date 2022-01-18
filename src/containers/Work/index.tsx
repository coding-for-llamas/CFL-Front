import WorkContent from './WorkContent';

export const Work = (): JSX.Element => {
  document.title = 'Work | Coding For Llamas';  
  return (
      <div className="Site-content">
        <main className="work-main">
          <WorkContent />
        </main>
      </div>
  );
};

export default Work;
