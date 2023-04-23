const Title = ({ titleInfo }: any) => {
  return (
    <div className="pb-2">
      <div className="text-center">
        <h1>
          {titleInfo.name}
        </h1>
      </div>
      <ul className="flex justify-center gap-10">
        {titleInfo.links.map((link: any, i: number) =>
          <li
            key={i}
            className="font-bold border-b-2 border-dashed text-primary-500 hover:border-theme-800"
          >
            <a href={String(Object.values(link))} target="_blank">
              {Object.keys(link)}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Title;
