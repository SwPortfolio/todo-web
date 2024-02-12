export interface FlexType {
  flex?: number | string;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'stretch';
  crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  crossGap?: number;
}

export const FlexTheme = ({
  flex,
  direction = 'vertical',
  align,
  crossAlign,
  wrap = 'nowrap',
  gap,
  crossGap,
}: FlexType) => {
  const FLEX_VARIANTS = {
    horizontal: {
      flexDirection: 'row' as const,
      align: align ?? 'stretch',
      rowGap: crossGap,
      columnGap: gap,
    },
    vertical: {
      flexDirection: 'column' as const,
      align: align ?? 'flex-start',
      rowGap: gap,
      columnGap: crossGap,
    },
  };

  return {
    display: 'flex',
    flex: flex,
    flexWrap: wrap ?? 'nowrap',
    justifyContent: crossAlign,
    flexDirection: FLEX_VARIANTS[direction].flexDirection ?? 'column',
    alignItems: FLEX_VARIANTS[direction].align ?? 'start',
    rowGap: FLEX_VARIANTS[direction].rowGap ?? 0,
    columnGap: FLEX_VARIANTS[direction].columnGap ?? 0,
  };
};