import styled from "styled-components";

import { v, b, a } from "../../../../../../styles/variables";

export const SDropdown = styled.div`
  background: ${({ theme }) => theme.primary2};
  top: ${v.xlSpacing};
  white-space: nowrap;
  padding: ${v.smSpacing};

  @media ${b.md} {
    min-width: max-content;
    position: absolute;
  }

  @media ${a.md} {
    background: none;
  }
`;

export const STreeItem = styled.div`
  text-align: left;
  padding: ${v.smSpacing};
`;

export const STreeChild = styled.div`
  margin-top: ${v.smSpacing};
  background: rgba(255, 255, 255, 0.2);
`;