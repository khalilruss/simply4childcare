import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import ScreenSizeContext, { ScreenSizeContextType } from "./ScreenSizeContext";

interface ScreenSizeProviderProps {
  children: ReactNode;
}

const breakpoints = {
  xxs: "(max-width: 475px)",
  xs: "(min-width: 476px) and (max-width: 576px)",
  sm: "(min-width: 577px) and (max-width: 768px)",
  md: "(min-width: 769px) and (max-width: 992px)",
  lg: "(min-width: 993px) and (max-width: 1200px)",
  xl: "(min-width: 1201px) and (max-width: 1400px)",
  xxl: "(min-width: 1401px)",
};

const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({
  children,
}) => {
  const isXXs = useMediaQuery({ query: breakpoints.xxs });
  const isXs = useMediaQuery({ query: breakpoints.xs });
  const isSm = useMediaQuery({ query: breakpoints.sm });
  const isMd = useMediaQuery({ query: breakpoints.md });
  const isLg = useMediaQuery({ query: breakpoints.lg });
  const isXl = useMediaQuery({ query: breakpoints.xl });
  const isXXl = useMediaQuery({ query: breakpoints.xxl });

  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1200px)" });

  const contextValues: ScreenSizeContextType = {
    isXXs,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isXXl,
    isTablet,
    isMobile,
    isSmallScreen,
  };

  return (
    <ScreenSizeContext.Provider value={contextValues}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;
