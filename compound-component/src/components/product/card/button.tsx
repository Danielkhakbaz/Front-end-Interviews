const ProductButton = ({ children, onClick }: any) => {
  return <button className="btn btn-primary" onClick={onClick}>{children}</button>;
};

export default ProductButton;
