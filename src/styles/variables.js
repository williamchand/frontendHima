export const v = {
  headerHeight: "65px",
  slideHeight: "90vh",
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `32px`,
  xlSpacing: `53px`,
  xxlSpacing: `64px`,
  borderRadius: `6px`,
  cardBoxShadow: `0 1px 1px rgba(0,0,0,0.15), 
    0 2px 2px rgba(0,0,0,0.15), 
    0 4px 4px rgba(0,0,0,0.15), 
    0 6px 6px rgba(0,0,0,0.15)`,
};

export const s = {
  //extra huge
  xxl: "1460px",
  //huge
  xl: "1280px",
  //desktop
  lg: "992px",
  //tablet
  md: "768px",
  //mobile
  sm: "480px",
};

// BREAKPOINTS
export const b = {
  xxl: `(min-width: ${s.xxl})`,
  xl: `(min-width: ${s.xl})`,
  lg: `(min-width: ${s.lg})`,
  md: `(min-width: ${s.md})`,
  sm: `(min-width: ${s.sm})`,
};

export const a = {
  xxl: `(max-width: ${s.xxl})`,
  xl: `(max-width: ${s.xl})`,
  lg: `(max-width: ${s.lg})`,
  md: `(max-width: ${s.md})`,
  sm: `(max-width: ${s.sm})`,
};
