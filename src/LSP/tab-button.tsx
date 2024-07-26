interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  panelId: string;
  isSelected: boolean;
  isDisabled?: boolean;
}
const TabButton = (props: TabButtonProps) => {
  const { panelId, isSelected, isDisabled, children, ...restProps } = props;
  return (
    <button disabled={isDisabled} {...restProps}>
      {children}
    </button>
  );
};
