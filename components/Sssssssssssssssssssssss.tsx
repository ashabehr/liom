import * as React from "react";
import {
  PlasmicSssssssssssssssssssssss,
  DefaultSssssssssssssssssssssssProps
} from "./plasmic/todo_mvc_app/PlasmicSssssssssssssssssssssss";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface SssssssssssssssssssssssProps
  extends DefaultSssssssssssssssssssssssProps {
  // Feel free to add any additional props that this component should receive
}
function Sssssssssssssssssssssss_(
  props: SssssssssssssssssssssssProps,
  ref: ButtonRef
) {
  const { plasmicProps } =
    PlasmicSssssssssssssssssssssss.useBehavior<SssssssssssssssssssssssProps>(
      props,
      ref
    );
  return <PlasmicSssssssssssssssssssssss {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<SssssssssssssssssssssssProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<SssssssssssssssssssssssProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const Sssssssssssssssssssssss = React.forwardRef(
  Sssssssssssssssssssssss_
) as any as ButtonComponentType;

export default Object.assign(Sssssssssssssssssssssss, {
  __plumeType: "button"
});
