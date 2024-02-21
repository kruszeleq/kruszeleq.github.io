import { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactElement } from "react";
import initTranslations from "@/i18n";

interface ButtonProps {
  icon: IconType;
  href: string;
  isIcon?: boolean;
  text?: string;
  class?: string;
  namespaces?: string[];
  locale?: string;
  path?: string;
}

const ButtonComponent = async (props: ButtonProps) => {
  if (props.namespaces && props.locale && props.path) {
    const { t } = await initTranslations(props.locale, props.namespaces);
    if (props.isIcon) {
      return (
        <>
          <Button size="icon" variant="outline" asChild className={props.class}>
            <Link href={props.href}>
              {<props.icon className="w-4 h-4" />}
              {t(`${props.namespaces}:${props.path}`)}
            </Link>
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button variant="outline" asChild className={props.class}>
            <Link href={props.href}>
              {<props.icon className="mr-2 w-4 h-4" />}
              {t(`${props.namespaces}:${props.path}`)}
            </Link>
          </Button>
        </>
      );
    }
  }

  if (props.isIcon) {
    return (
      <>
        <Button size="icon" variant="outline" asChild className={props.class}>
          <Link href={props.href}>
            {<props.icon className="w-4 h-4" />}
            {props.text}
          </Link>
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button variant="outline" asChild className={props.class}>
          <Link href={props.href}>
            {<props.icon className="mr-2 w-4 h-4" />}
            {props.text}
          </Link>
        </Button>
      </>
    );
  }
};

export default ButtonComponent;
