interface Props {
  image: string;
}

export const NotResults = ({ image }: Props) => {
  return (
    <div className="not-results-container">
      <img src={image} alt="Not results" />
    </div>
  );
};
