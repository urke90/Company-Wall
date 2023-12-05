// react router
import { Link as RouterLink, LinkProps } from 'react-router-dom';

// components
import { IconLeftButton, IconRightButton } from '../buttons';

// ----------------------------------------------------------------

// TODO add sx props to icon button ????

interface ILinkLinkBasicProps extends LinkProps {
  /**
   * Additional inline styles for the link component.
   */
  additionalStyles?: React.CSSProperties;
}

/**
 * A link component that renders a React Router Link without text decoration.
 *
 * @component
 * @param {LinkProps} props - The props for the link.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the link.
 * @param {string} props.to - The navigation target of the link.
 */
export const LinkBasic: React.FC<ILinkLinkBasicProps> = ({
  children,
  to,
  additionalStyles,
  ...rest
}) => {
  return (
    <RouterLink
      style={{ textDecoration: 'none', display: 'block', ...additionalStyles }}
      to={to}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

interface ILinkIconButtonProps extends LinkProps {
  /**
   * The icon name as a string.
   */
  icon: string;
  /**
   * Optional width of the icon.
   */
  iconWidth?: number;
  /**
   * Children elements to be rendered inside the button.
   */
  children: React.ReactNode;
}

/**
 * A button component that renders an IconLeftButton inside a LinkButton.
 *
 * @component
 * @param {ILinkIconButtonProps} props - The props for the icon left link button.
 * @param {string} props.to - The navigation target of the link.
 * @param {string} props.icon - The name of the icon to be displayed on the left.
 * @param {number} [props.iconWidth=20] - The width of the icon.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the button.
 */
export const LinkIconLeftButton: React.FC<ILinkIconButtonProps> = ({
  to,
  icon,
  iconWidth = 20,
  children,
  ...rest
}) => {
  return (
    <LinkBasic to={to} {...rest}>
      <IconLeftButton icon={icon} iconWidth={iconWidth}>
        {children}
      </IconLeftButton>
    </LinkBasic>
  );
};

/**
 * A button component that renders an IconRightButton inside a LinkButton.
 *
 * @component
 * @param {ILinkIconButtonProps} props - The props for the icon right link button.
 * @param {string} props.to - The navigation target of the link.
 * @param {string} props.icon - The name of the icon to be displayed on the right.
 * @param {number} [props.iconWidth=20] - The width of the icon.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the button.
 */

export const LinkIconRightButton: React.FC<ILinkIconButtonProps> = ({
  to,
  icon,
  iconWidth = 20,
  children,
  ...rest
}) => {
  return (
    <LinkBasic to={to} {...rest}>
      <IconRightButton icon={icon} iconWidth={iconWidth}>
        {children}
      </IconRightButton>
    </LinkBasic>
  );
};
