// export default null;
import { shallow, mount } from "enzyme";
import SidebarItem, { TSidebarItemProps } from "../SidebarItem";
import HomeIcon from "@mui/icons-material/Home";

describe("Sidebar Item test", () => {
  let masterProps: TSidebarItemProps = {
    onClick: jest.fn(),
    isActive: true,
    icon: <HomeIcon />,
    title: "DMMY_TITLE",
  };

  it("Renders successfully", () => {
    expect(shallow(<SidebarItem {...masterProps} />)).toMatchSnapshot();
  });

  it("Renders title correctly", () => {
    const render = mount(<SidebarItem {...masterProps} />);
    expect(render.html().includes("DMMY_TITLE")).toBeTruthy();
  });

  it("Has 'active' class when prop isActive is 'true'", () => {
    const render = shallow(<SidebarItem {...masterProps} />);
    expect(render.exists(".active")).toBeTruthy();
  });

  it("Does not have 'active' class when prop isActive is 'false'", () => {
    const props: TSidebarItemProps = {
      ...masterProps,
      isActive: false,
    };
    const render = shallow(<SidebarItem {...props} />);
    expect(render.exists(".active")).toBeFalsy();
  });

  it("Click handler is called on user click", () => {
    const mockOnClickHandler = jest.fn();
    const props: TSidebarItemProps = {
      ...masterProps,
      onClick: mockOnClickHandler,
    };
    const render = shallow(<SidebarItem {...props} />);
    render.find("#sidebar-item").simulate("click");
    expect(mockOnClickHandler).toHaveBeenCalledTimes(1);
  });
});
