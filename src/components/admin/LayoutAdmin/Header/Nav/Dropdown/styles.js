import styled from "styled-components";

import { v, b } from "../../../../../../styles/variables";

export const SDropdown = styled.div`
  background: ${({ theme }) => theme.bg};
  top: ${v.xlSpacing};
  white-space: nowrap;
  padding: ${v.smSpacing};

  @media ${b.md} {
    min-height: max-content;
    min-width: max-content;
    position: absolute;
  }
`;

export const STreeItem = styled.div`
  text-align: left;
  padding-top: 0.4rem;
  /* padding: ${v.smSpacing}; */
`;

export const STreeChild = styled.div`
  margin-top: ${v.smSpacing};
  background: rgba(255, 255, 255, 0.2);
`;
