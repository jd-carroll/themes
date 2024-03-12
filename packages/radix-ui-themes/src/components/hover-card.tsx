'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { hoverCardContentPropDefs } from './hover-card.props.js';
import { extractProps, requireReactElement } from '../helpers/index.js';
import { Theme } from './theme.js';

import type { ComponentPropsWithout, RemovedProps } from '../helpers/index.js';
import type { HoverCardContentOwnProps } from '../props/index.js';

interface HoverCardRootProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root> {}
const HoverCardRoot: React.FC<HoverCardRootProps> = (props) => (
  <HoverCardPrimitive.Root closeDelay={150} openDelay={200} {...props} />
);
HoverCardRoot.displayName = 'HoverCardRoot';

type HoverCardTriggerElement = React.ElementRef<typeof HoverCardPrimitive.Trigger>;
interface HoverCardTriggerProps
  extends ComponentPropsWithout<typeof HoverCardPrimitive.Trigger, RemovedProps> {}
const HoverCardTrigger = React.forwardRef<HoverCardTriggerElement, HoverCardTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <HoverCardPrimitive.Trigger
      ref={forwardedRef}
      className={classNames('rt-HoverCardTrigger', className)}
      {...props}
      asChild
    >
      {requireReactElement(children)}
    </HoverCardPrimitive.Trigger>
  )
);
HoverCardTrigger.displayName = 'HoverCardTrigger';

type HoverCardContentElement = React.ElementRef<typeof HoverCardPrimitive.Content>;
interface HoverCardContentProps
  extends ComponentPropsWithout<typeof HoverCardPrimitive.Content, RemovedProps>,
    HoverCardContentOwnProps {
  container?: React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Portal>['container'];
}
const HoverCardContent = React.forwardRef<HoverCardContentElement, HoverCardContentProps>(
  (props, forwardedRef) => {
    const { className, forceMount, container, ...contentProps } = extractProps(
      props,
      hoverCardContentPropDefs
    );
    return (
      <HoverCardPrimitive.Portal container={container} forceMount={forceMount}>
        <Theme asChild>
          <HoverCardPrimitive.Content
            align="start"
            sideOffset={8}
            collisionPadding={10}
            {...contentProps}
            ref={forwardedRef}
            className={classNames('rt-PopperContent', 'rt-HoverCardContent', className)}
          />
        </Theme>
      </HoverCardPrimitive.Portal>
    );
  }
);
HoverCardContent.displayName = 'HoverCardContent';

export { HoverCardRoot, HoverCardTrigger, HoverCardContent };
export type { HoverCardRootProps, HoverCardTriggerProps, HoverCardContentProps };
