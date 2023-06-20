import type { ButtonRadius } from '../helpers';

const scrollAreaSizes = ['1', '2', '3'] as const;
type ScrollAreaSize = (typeof scrollAreaSizes)[number];
const defaultScrollAreaSize: ScrollAreaSize = '1';

const defaultScrollAreaRadius: ButtonRadius | undefined = undefined;

const scrollAreaScrollbarsValues = ['vertical', 'horizontal', 'both'] as const;
type ScrollAreaScrollbars = (typeof scrollAreaScrollbarsValues)[number];
const defaultScrollAreaScrollbars: ScrollAreaScrollbars = 'both';

export {
  scrollAreaSizes,
  defaultScrollAreaSize,
  defaultScrollAreaRadius,
  scrollAreaScrollbarsValues,
  defaultScrollAreaScrollbars,
};
export type { ScrollAreaSize, ScrollAreaScrollbars };
