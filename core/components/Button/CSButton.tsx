import {Button} from "@mantine/core";

interface ButtonProps {
    variant: string;
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CSButton = (
    {
        variant,
        backgroundColor,
        label,
        ...props
    }: ButtonProps) => {
    return (
        <Button
            variant={variant}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </Button>
    );
};
