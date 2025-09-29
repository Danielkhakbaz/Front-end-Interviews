type ProductButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const ProductButton = ({ children, onClick }: ProductButtonProps) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default ProductButton;
