import PagePanel from "../components/PagePanel";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import PageSubNavigation from "../components/PageSubNavigation";
import { StyledListItem } from "../components/PageSubNavigation";

const Information = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(0);

  const subPages = [
    {
      title: "Data",
    },
    {
      title: "Reizen",
    },
    {
      title: "Schepen",
    },
    {
      title: "Archief",
    },
    {
      title: "Handelsgoederen",
    },
  ];

  const handleSubNavClick = (index) => {
    setSelectedNavItem(index);
  };

  return (
    <PagePanel>
      <PageHeader title={"Information"}>
        <PageSubNavigation>
          {subPages.map((item, index) => {
            return (
              <StyledListItem
                key={index}
                $active={selectedNavItem === index}
                onClick={() => handleSubNavClick(index)}
              >
                {item.title}
              </StyledListItem>
            );
          })}
        </PageSubNavigation>
      </PageHeader>
      <div>Page content komt hier</div>
    </PagePanel>
  );
};

export default Information;
