import { Link } from "react-router-dom";

export type QuizzLinkProps = {
  text: string;
  route: string;
};

const QuizzLink: React.FC<QuizzLinkProps> = ({ text, route }) => {
  return (
    <Link to={route}>
      <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-12 w-32">
        {text}
      </span>
    </Link>
  );
};

export default QuizzLink;
