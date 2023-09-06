import { css, Global, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        :root {
          font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          font-weight: 400;

          color-scheme: light dark;
          color: ${theme.color};
          background-color: ${theme.background};

          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: 100%;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          background: ${theme.background};
        }

        body {
          margin: 0;
          place-items: center;
          min-width: 320px;
          min-height: 100vh;
        }

        @media (prefers-color-scheme: light) {
          :root {
            color: ${theme.color};
            background: ${theme.background};
          }
          a:hover {
            color: ${theme.color};
          }
          button {
            background: ${theme.background};
          }
        }
      `}
    />
  );
};

export { GlobalStyles };
