import styled from "styled-components";
import Icon from "./Icons";
import { rem } from "polished";

const StyledButton = styled.button`
  ${({ theme, $isOpen = false }) => `
  background: ${$isOpen ? `${theme.color.destination.dark}` : "transparent"};
  color: ${$isOpen ? `${theme.color.key.white}` : `${theme.color.key.dark}`};
  border: none;
  font-size: ${rem(12)};
  line-height: ${rem(16)};
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  justify-content: end;
  padding: ${rem(20)} ${rem(16)};
`}
`;

const StyledIcon = styled(Icon)`
  ${({ $isOpen = false }) => `
  transform: ${$isOpen ? `rotate(180deg)` : `rotate(0)`};
  margin-left: ${rem(8)};
  width: ${rem(14)};
  transition: transform .3s ease;
`}
`;

const StyledDropDownContainer = styled.div`
  margin-left: auto;
  position: relative;
  display: flex;
  width: ${rem(175)};
`;

const StyledDropDown = styled.ul`
  ${({ theme, $isOpen = false }) =>
    `
  background-color: ${theme.color.key.white};
  list-style: none;
  padding: 0;
  position: absolute;
  transition: max-height .3s ease;
  max-height: ${$isOpen ? rem(800) : 0};
  width: ${rem(175)};
  right: 0;
  top: 100%;
  overflow: hidden;
  z-index: 2;
  box-sizing: border-box;
`}
`;

export const StyledDropDownItem = styled.li`
  ${({ theme }) => `
  padding: ${rem(16)} ${rem(16)};
  cursor: pointer;
  border: ${rem(1)} solid ${theme.color.key.default};
  border-bottom: none;
  text-align: right;
  color: ${theme.color.key.default};
  font-weight: 700;
  font-size: ${rem(12)}; 
  line-height: ${rem(16)}; 

  &:last-child{
    border-bottom: ${rem(1)} solid ${theme.color.key.default};
  }

  &:hover{
    background-color: ${theme.color.key.light};
    color: ${theme.color.key.dark};
  }
`}
`;

const Dropdown = ({
  selectedOption,
  onDropDownClick,
  isOpen,
  children = null,
}) => {
  return (
    <StyledDropDownContainer>
      <StyledButton onClick={onDropDownClick} $isOpen={isOpen}>
        {selectedOption}
        <StyledIcon id={"Dropdown"} $isOpen={isOpen} />
      </StyledButton>
      <StyledDropDown $isOpen={isOpen}>{children}</StyledDropDown>
    </StyledDropDownContainer>
  );
};

export default Dropdown;
