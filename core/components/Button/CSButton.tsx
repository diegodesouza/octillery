import { Button, ButtonProps } from "@mantine/core";

interface CustomButtonProps extends ButtonProps {
  variant: string;
  primary?: boolean;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
  label: string;
  onClick?: () => void;
}

export const CSButton = ({
  variant,
  backgroundColor,
  label,
  ...props
}: CustomButtonProps) => {
  return (
    <Button variant={variant} style={{ backgroundColor }} {...props}>
      {label}
    </Button>
  );
};
