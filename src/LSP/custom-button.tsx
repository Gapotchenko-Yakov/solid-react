interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  leftIcon?: React.ReactNode;
}

const CustomButton = (props: ButtonProps) => {
  const { variant, leftIcon, children, ...restProps } = props;
  return (
    <button {...restProps}>
      {leftIcon} {children}
    </button>
  );
};

export default CustomButton;
